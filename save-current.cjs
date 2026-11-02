/*
 * 对已经过人工检查、关闭遮罩或等待加载的页面重拍，保留相同案例编号。
 * 用法：node save-current.cjs <CLI 路径> <浏览器会话> <案例 id> [检查说明]
 */
const fs = require('node:fs'); // 更新截图及其真实页面信息。
const path = require('node:path'); // 文件路径始终相对本工具。
const { spawnSync } = require('node:child_process'); // 与现有 Playwright 会话交互。
const [cli, session, id, note = '已检查页面并重新截图。'] = process.argv.slice(2);
if (!cli || !session || !id) throw new Error('需要 CLI 路径、会话名称和案例 id');
const cases = JSON.parse(fs.readFileSync(path.join(__dirname, 'cases.json'), 'utf8'));
const item = cases.find(entry => entry.id === id);
if (!item) throw new Error(`找不到案例：${id}`);
const resultFile = path.join(__dirname, 'capture-results.json');
const target = path.join(__dirname, 'screenshots', `${id}.jpg`);
const code = `async (page) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.bringToFront();
  await page.waitForTimeout(3500);
  const text = await page.locator('body').innerText();
  await page.screenshot({ path: ${JSON.stringify(target)}, type: 'jpeg', quality: 86, fullPage: false, animations: 'disabled', timeout: 30000 });
  return { id: ${JSON.stringify(id)}, requestedUrl: ${JSON.stringify(item.url)}, finalUrl: page.url(), title: await page.title(), screenshot: ${JSON.stringify('screenshots/' + id + '.jpg')}, capturedAt: new Date().toISOString(), viewport: { width: 1440, height: 1000 }, reducedMotion: await page.evaluate(() => matchMedia('(prefers-reduced-motion: reduce)').matches), textLength: text.length, excerpt: text.slice(0, 700), reviewNote: ${JSON.stringify(note)}, errors: [] };
}`;
const temporary = path.join(__dirname, '.save-current.js'); // 通过文件传递代码，避免 shell 转义。
fs.writeFileSync(temporary, code);
const run = spawnSync(process.execPath, [cli, `-s=${session}`, 'run-code', '--filename', temporary], { encoding: 'utf8', windowsHide: true, timeout: 70000, maxBuffer: 2 * 1024 * 1024 });
const match = (run.stdout || '').match(/### Result\s*\n([\s\S]*?)\n### /);
fs.unlinkSync(temporary);
if (!match) throw new Error((run.stdout || '') + (run.stderr || '') + (run.error ? run.error.message : ''));
const results = JSON.parse(fs.readFileSync(resultFile, 'utf8')); // 截图完成后读取，避免覆盖其他会话刚保存的记录。
const previous = results.find(entry => entry.id === id) || {};
const result = { ...previous, ...JSON.parse(match[1]) }; // 手动交互后的页面信息覆盖初次截图。
const index = results.findIndex(entry => entry.id === id);
if (index === -1) results.push(result); else results[index] = result;
fs.writeFileSync(resultFile, JSON.stringify(results, null, 2));
console.log(`${id}: ${result.title} → ${result.screenshot}`);
