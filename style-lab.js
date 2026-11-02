/*
 * 统一小样的交互：gallery.js 在切换分类后调用 styleLab.render('swiss')。
 * 预设与相同内容来自 style-lab.cjs，调参只改内存，不改动案例数据。
 * 也支持 file://：JSON 已内嵌于 index.html，不请求远端字体或接口。
 */
const styleLab = (() => {
  const data = JSON.parse(document.getElementById('lab-data').textContent); // 读取构建时检查过的 32 个演绎。
  const byId = new Map(data.samples.map(sample => [sample.id, sample]));
  const active = document.getElementById('lab-demo-active');
  const fonts = { sans:'system-ui, "Segoe UI", "Microsoft YaHei", sans-serif', serif:'Georgia, "Songti SC", SimSun, serif', mono:'Consolas, "Courier New", "Microsoft YaHei", monospace', hand:'"Segoe Print", KaiTi, "Kaiti SC", cursive' };
  const fontNames = { sans:'系统无衬线', serif:'Georgia / 宋体衬线', mono:'系统等宽', hand:'系统手写 / 楷体' };
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let current;
  let joined = false; // 所有演绎共用状态，切换风格时内容不变。
  let expanded = false;

  function paint(target, sample) {
    for (const key of ['background','surface','ink','muted','accent','accentInk','border','shadow','tracking']) target.style.setProperty('--lab-' + key, sample[key]);
    for (const key of ['borderWidth','radius','buttonRadius','padding','gap','titleSize','blur','lift']) target.style.setProperty('--lab-' + key, sample[key] + 'px');
    target.style.setProperty('--lab-font', fonts[sample.font]); // 只使用系统字体，离线仍可打开。
    target.style.setProperty('--lab-titleWeight', sample.titleWeight);
    target.style.setProperty('--lab-motion', sample.motion + 'ms');
    target.dataset.sampleStyle = sample.id || 'baseline';
  }

  function parameter(label, value, baseValue, swatch) { // 与基准对照，只标出实际变化的项目。
    const item = document.createElement('div');
    const title = document.createElement('dt');
    const detail = document.createElement('dd');
    title.textContent = label;
    detail.textContent = value;
    if (swatch) { const color = document.createElement('i'); color.style.background = swatch; color.setAttribute('aria-hidden','true'); detail.prepend(color); }
    item.dataset.changed = String(value !== baseValue);
    if (value !== baseValue) { const before = document.createElement('small'); before.textContent = '基准：' + baseValue; detail.append(before); }
    item.append(title, detail);
    return item;
  }

  function updateParameters() {
    paint(active, current); // 样式和参数表始终使用同一份调参结果。
    for (const key of ['radius','padding','motion']) {
      document.getElementById('lab-' + key).value = current[key];
      document.getElementById('lab-' + key + '-value').textContent = current[key] + (key === 'motion' ? ' ms' : ' px');
    }
    const tokens = document.getElementById('lab-tokens');
    const baseline = data.baseline;
    const title = sample => `${sample.titleSize}px / ${sample.titleWeight} · 字距 ${sample.tracking}`;
    const spacing = sample => `内边距 ${sample.padding}px · 模块间距 ${sample.gap}px`;
    const outline = sample => `${sample.borderWidth}px 边框 · ${sample.radius}px 圆角`;
    const motion = sample => reducedMotion.matches ? `当前关闭（预设 ${sample.motion}ms）` : `${sample.motion}ms · 悬停抬升 ${sample.lift}px`;
    tokens.replaceChildren(
      parameter('背景',current.background,baseline.background,current.background), parameter('卡片表面',current.surface,baseline.surface,current.surface),
      parameter('正文',current.ink,baseline.ink,current.ink), parameter('强调色',current.accent,baseline.accent,current.accent),
      parameter('字体',fontNames[current.font],fontNames[baseline.font]), parameter('标题',title(current),title(baseline)),
      parameter('间距',spacing(current),spacing(baseline)), parameter('轮廓',outline(current),outline(baseline)),
      parameter('阴影',current.shadow,baseline.shadow), parameter('背景模糊',current.blur + 'px',baseline.blur + 'px'),
      parameter('过渡',motion(current),motion(baseline)), parameter('版式',current.layout,baseline.layout)
    );
    const css = `/* ${current.name}：基础参数；装饰和完整场景需另行设计。 */\n.reference-stage { background: ${current.background}; }\n.reference-card {\n  font-family: ${fonts[current.font]};\n  color: ${current.ink};\n  background: ${current.surface};\n  padding: ${current.padding}px;\n  border: ${current.borderWidth}px solid ${current.border};\n  border-radius: ${current.radius}px;\n  box-shadow: ${current.shadow};\n  backdrop-filter: blur(${current.blur}px);\n}\n.reference-card h2 {\n  font-size: ${current.titleSize}px;\n  font-weight: ${current.titleWeight};\n  letter-spacing: ${current.tracking};\n}\n.reference-card button {\n  background: ${current.accent};\n  color: ${current.accentInk};\n  border-radius: ${current.buttonRadius}px;\n  transition: transform ${current.motion}ms ease;\n}\n.reference-card button:is(:hover, :focus-visible) { transform: translateY(-${current.lift}px); }\n@media (prefers-reduced-motion: reduce) {\n  .reference-card button { transition: none; }\n}`;
    document.getElementById('lab-css').textContent = css; // 显示内容与复制内容完全一致。
  }

  function render(id, reset = false) {
    if (current?.id === id && !reset) return; // 筛选关联案例不会丢掉正在观察的调参结果。
    current = { ...byId.get(id) }; // 每次导航恢复该方向的预设，不把上一方向的调参带过去。
    document.getElementById('lab-style-select').value = id;
    document.getElementById('lab-active-name').textContent = current.name;
    document.getElementById('lab-position').textContent = String(data.samples.findIndex(sample => sample.id === id) + 1).padStart(2,'0') + ' / ' + data.samples.length;
    document.getElementById('lab-observation').textContent = current.note;
    document.getElementById('lab-copy').textContent = '复制参数 CSS';
    document.getElementById('lab-status').textContent = joined ? '演示：已加入计划，两栏内容保持同步。' : '悬停或聚焦按钮观察反馈；点击可体验两栏同步的状态。'; // 清除上一个风格的临时复制提示。
    active.style.setProperty('--lab-turn-x','-18deg');
    active.style.setProperty('--lab-turn-y','28deg');
    active.querySelector('.lab-art').tabIndex = id === 'immersive' ? 0 : -1;
    updateParameters();
  }

  for (const key of ['radius','padding','motion']) document.getElementById('lab-' + key).addEventListener('input', event => {
    current[key] = Number(event.target.value); // 滑块在声明的范围内输出数字。
    updateParameters();
  });
  document.getElementById('lab-reset').addEventListener('click', () => render(current.id, true));
  document.getElementById('lab-compare').addEventListener('change', event => {
    document.getElementById('lab-baseline-panel').hidden = !event.target.checked;
    document.getElementById('lab-stage').classList.toggle('lab-solo', !event.target.checked);
  });
  for (const button of document.querySelectorAll('[data-demo-join]')) button.addEventListener('click', () => {
    joined = !joined;
    for (const control of document.querySelectorAll('[data-demo-join]')) {
      control.setAttribute('aria-pressed',String(joined));
      control.firstChild.textContent = joined ? '已加入计划 ' : '加入计划 ';
    }
    document.getElementById('lab-status').textContent = joined ? '演示：已加入计划，两栏内容同步更新。' : '演示：已取消加入，两栏内容同步更新。';
  });
  for (const button of document.querySelectorAll('[data-demo-detail]')) button.addEventListener('click', () => {
    expanded = !expanded;
    for (const control of document.querySelectorAll('[data-demo-detail]')) control.setAttribute('aria-expanded',String(expanded));
    for (const detail of document.querySelectorAll('.lab-demo-detail')) detail.hidden = !expanded;
  });
  document.getElementById('lab-copy').addEventListener('click', async () => {
    const button = document.getElementById('lab-copy');
    const text = document.getElementById('lab-css').textContent;
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(text);
      button.textContent = '已复制';
      document.getElementById('lab-status').textContent = '已复制当前参数 CSS。';
    } catch { // file:// 或受限浏览器仍能通过代码区手动复制。
      document.querySelector('.lab-code').open = true;
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(document.getElementById('lab-css'));
      selection.removeAllRanges(); selection.addRange(range);
      button.textContent = '代码已选中，请复制';
      document.getElementById('lab-status').textContent = '剪贴板暂不可用，代码已展开并选中，可按 Ctrl+C 或长按复制。';
    }
  });
  const art = active.querySelector('.lab-art');
  art.addEventListener('pointermove', event => {
    if (current.id !== 'immersive' || reducedMotion.matches) return;
    const bounds = art.getBoundingClientRect();
    active.style.setProperty('--lab-turn-y', ((event.clientX - bounds.left) / bounds.width * 80 - 40) + 'deg');
    active.style.setProperty('--lab-turn-x', ((event.clientY - bounds.top) / bounds.height * -40) + 'deg');
  });
  art.addEventListener('keydown', event => {
    if (current.id !== 'immersive' || reducedMotion.matches || !['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)) return;
    event.preventDefault();
    const horizontal = ['ArrowLeft','ArrowRight'].includes(event.key);
    const property = horizontal ? '--lab-turn-y' : '--lab-turn-x';
    const change = ['ArrowRight','ArrowDown'].includes(event.key) ? 15 : -15;
    active.style.setProperty(property, (parseFloat(active.style.getPropertyValue(property)) + change) + 'deg');
  });
  reducedMotion.addEventListener('change', () => { if (current) updateParameters(); });
  paint(document.getElementById('lab-demo-baseline'),data.baseline);
  document.querySelector('#lab-demo-baseline .lab-art').tabIndex = -1;
  return { render };
})();
