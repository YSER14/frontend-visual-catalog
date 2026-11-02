/*
 * 案例截图工具：通过 Playwright CLI 访问原站，只保留截图与访问元数据。
 * 用法：先 playwright-cli -s=frontend-examples open，再执行：
 * node capture.cjs <playwright-cli.js 的绝对路径> [起始序号，从 0 开始] [数量]
 * cases.json 是案例清单；capture-results.json 是截图结果，方便中断后继续。
 */
const fs = require('node:fs'); // 读取案例清单并保存访问结果。
const path = require('node:path'); // 所有产物固定相对本脚本，避免依赖启动目录。
const { spawnSync } = require('node:child_process'); // 调用已打开的隔离浏览器会话。

const cli = process.argv[2]; // 使用调用者提供的 Playwright CLI 路径。
if (!cli) throw new Error('需要传入 playwright-cli.js 路径');
const cases = JSON.parse(fs.readFileSync(path.join(__dirname, 'cases.json'), 'utf8'));
const start = Number(process.argv[3] || 0); // 允许只重拍某一组案例。
const count = Number(process.argv[4] || cases.length);
const folder = path.join(__dirname, 'screenshots'); // 截图统一集中存放。
fs.mkdirSync(folder, { recursive: true });
const resultFile = path.join(__dirname, 'capture-results.json');

for (let offset = start; offset < Math.min(cases.length, start + count); offset += 2) {
  const batch = cases.slice(offset, Math.min(offset + 2, start + count)); // 限制同时加载数，给创意站点保留渲染资源。
  const code = `async (page) => {
    return await Promise.all(${JSON.stringify(batch)}.map(async item => {
      const tab = await page.context().newPage();
      await tab.setViewportSize({ width: 1440, height: 1000 });
      await tab.emulateMedia({ reducedMotion: 'reduce' });
      const errors = [];
      let status = null;
      try {
        const response = await tab.goto(item.url, { waitUntil: 'domcontentloaded', timeout: 35000 });
        status = response ? response.status() : null;
      } catch (error) { errors.push(error.message.split('\\n')[0]); }
      try { await tab.waitForLoadState('load', { timeout: 7000 }); } catch {}
      await tab.bringToFront();
      await tab.waitForTimeout(6500);
      const title = await tab.title().catch(() => '');
      const text = await tab.locator('body').innerText({ timeout: 4000 }).catch(() => '');
      let screenshot = null;
      try {
        await tab.screenshot({ path: ${JSON.stringify(folder + path.sep)} + item.id + '.jpg', type: 'jpeg', quality: 86, fullPage: false, animations: 'disabled', timeout: 30000 });
        screenshot = 'screenshots/' + item.id + '.jpg';
      } catch (error) { errors.push(error.message.split('\\n')[0]); }
      const result = { id: item.id, requestedUrl: item.url, finalUrl: tab.url(), title, status, screenshot, capturedAt: new Date().toISOString(), viewport: { width: 1440, height: 1000 }, reducedMotion: true, textLength: text.length, excerpt: text.slice(0, 700), errors };
      await tab.close();
      return result;
    }));
  }`;
  const codeFile = path.join(__dirname, '.capture-batch.js'); // CLI 从文件读取，避免 shell 引号改写代码。
  fs.writeFileSync(codeFile, code);
  const run = spawnSync(process.execPath, [cli, '-s=frontend-examples', 'run-code', '--filename', codeFile], { encoding: 'utf8', timeout: 150000, maxBuffer: 4 * 1024 * 1024, windowsHide: true });
  const logFile = path.join(__dirname, `capture-batch-${offset}.log`);
  fs.writeFileSync(logFile, (run.stdout || '') + (run.stderr || ''));
  const match = (run.stdout || '').match(/### Result\s*\n([\s\S]*?)\n### /);
  if (!match) { console.log(`批次 ${offset} 失败，查看 ${logFile}: ${run.error ? run.error.message : (run.stdout || '').slice(0, 600)}`); continue; }
  const captured = JSON.parse(match[1]); // 保存工具真实返回的状态，不把失败截图标记为成功。
  const previous = fs.existsSync(resultFile) ? JSON.parse(fs.readFileSync(resultFile, 'utf8')) : [];
  const results = new Map(previous.map(item => [item.id, item])); // 落盘前读取最新记录，保留其他会话刚完成的重拍。
  for (const result of captured) {
    results.set(result.id, result);
    console.log(`${result.id} | ${result.status} | ${result.title} | text=${result.textLength} | ${result.screenshot || 'NO IMAGE'}`);
  }
  fs.writeFileSync(resultFile, JSON.stringify([...results.values()], null, 2)); // 每批落盘，保留已完成进度。
}
const temporary = path.join(__dirname, '.capture-batch.js');
if (fs.existsSync(temporary)) fs.unlinkSync(temporary); // 只清理本工具创建的临时脚本。
