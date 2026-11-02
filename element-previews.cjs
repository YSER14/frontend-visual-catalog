/*
 * 基本元素示意：生成本站自绘的 HTML/CSS 小样，不复制案例网站的组件。
 * 调用：renderElementPreview('glass')；样式在 gallery.css 的「元素示意」段。
 * 未知示意名直接报错，让目录数据和实际展示保持一致。
 */
const tiles = count => Array.from({ length: count }, () => '<i></i>').join(''); // 同类网格共用小块，保持示意结构一致。
const pixels = ['10001', '10001', '10001', '10001', '10001', '10001', '01110', '11111', '00100', '00100', '00100', '00100', '00100', '11111'];
const pixelWord = [pixels.slice(0, 7), pixels.slice(7)].map(letter => `<span class="sample-pixel-letter">${letter.join('').split('').map(bit => `<i class="${bit === '1' ? 'on' : ''}"></i>`).join('')}</span>`).join('');
const previews = {
  grid: `<div class="sample-grid">${tiles(6)}</div>`,
  columns: '<div class="sample-columns"><i>导航</i><section><b>主要内容</b><span></span><span></span></section><i>辅助</i></div>',
  bento: `<div class="sample-bento">${tiles(5)}</div>`,
  whitespace: '<div class="sample-whitespace"><b>让重点呼吸。</b><span>空白也是组织内容的工具。</span><i>一个焦点</i></div>',
  density: '<div class="sample-density"><div><b>项目</b><b>状态</b><b>进度</b></div><div><span>Design</span><span>进行中</span><span>68%</span></div><div><span>Build</span><span>待开始</span><span>12%</span></div><div><span>Review</span><span>已完成</span><span>100%</span></div></div>',
  hierarchy: '<div class="sample-hierarchy"><small>清楚的阅读顺序</small><b>标题先被看见。</b><p>说明随后补充，操作拥有明确的强调。</p><i>主要操作 →</i></div>',
  display: '<div class="sample-display">Make<br><em>it clear.</em></div>',
  sans: '<div class="sample-sans"><b>Stories<br>worth reading.</b><span>简洁字形与稳定的阅读</span></div>',
  serif: '<div class="sample-serif"><b>Stories<br>worth reading.</b><span>字形也在表达语气</span></div>',
  mono: '<div class="sample-mono"><b>SYS / 01</b><div>FONT&nbsp; monospace</div><div>WIDTH&nbsp; 000.00</div><div>STATUS ready_</div></div>',
  pixel: `<div class="sample-pixel">${pixelWord}<span class="sample-pixel-caption">5 × 7 点阵示意</span></div>`,
  reading: '<div class="sample-reading"><b>阅读需要稳定的节奏。</b><p>合适的行长让视线轻松回到下一行。行距和段距帮助读者分清每句话、每个段落。</p><p>留一点停顿，内容才有层次。</p></div>',
  neutral: '<div class="sample-palette sample-neutral"><i></i><i></i><i></i><i></i><i></i></div>',
  accent: '<div class="sample-accent"><span>大多数元素保持克制。</span><b>把颜色留给重点 →</b><div><i></i><i></i><i></i><i></i></div></div>',
  vivid: '<div class="sample-vivid"><i>红</i><i>黄</i><i>蓝</i></div>',
  pastel: '<div class="sample-palette sample-pastel"><i></i><i></i><i></i><i></i><i></i></div>',
  gradient: '<div class="sample-gradient"><span>渐变 / 方向 / 光感</span></div>',
  square: '<div class="sample-shapes sample-square"><i></i><i></i><i></i></div>',
  round: '<div class="sample-shapes sample-round"><i></i><i></i><i></i></div>',
  organic: '<div class="sample-shapes sample-organic"><i></i><i></i><i></i></div>',
  fine: '<div class="sample-lines"><div><b>01</b><span>细线定义区域</span></div><div><b>02</b><span>留白建立分组</span></div><div><b>03</b><span>边界保持克制</span></div></div>',
  bold: '<div class="sample-bold"><i>清晰</i><i>明确</i><i>有力</i></div>',
  sketch: '<div class="sample-sketch"><svg viewBox="0 0 320 100" aria-hidden="true"><path d="M12 18 Q150 12 307 20 L304 81 Q155 86 14 80 L11 17 M17 22 Q150 17 303 24 M32 67 Q135 61 284 68" fill="none" stroke="currentColor" stroke-width="1.8"/></svg><b>让线条有一点性格。</b></div>',
  'hard-shadow': '<div class="sample-hard-shadow"><span>HARD<br>SHADOW</span><i>偏移 / 不模糊</i></div>',
  'soft-shadow': '<div class="sample-soft-shadow"><i>凸起</i><i>凹陷</i></div>',
  glass: '<div class="sample-glass"><i></i><b>半透明表面<span>背景仍有层次</span></b></div>',
  glow: '<div class="sample-glow"><i></i><b>一个发光焦点</b></div>',
  texture: '<div class="sample-textures"><i>点阵</i><i>网格</i><i>条纹</i></div>',
  photo: '<div class="sample-photo"><span class="sample-mountain"></span><span class="sample-viewfinder"></span><b>主体 / 裁切 / 视线</b></div>',
  illustration: '<div class="sample-illustration"><i class="sample-sun"></i><i class="sample-hill"></i><i class="sample-character"><span>••</span></i><b>形象与情绪</b></div>',
  'three-d': '<div class="sample-3d"><div class="sample-cube"><i></i><i></i><i></i></div><span>形体 / 光照 / 空间</span></div>',
  collage: '<div class="sample-collage"><i>Aa</i><i>✳</i><i>图像</i><b>COLLAGE</b></div>',
  feedback: '<div class="sample-feedback"><button type="button">悬停或用 Tab 聚焦 <span>→</span></button><small>观察颜色、位移与反馈</small></div>',
  scene: '<div class="sample-scene"><button type="button" aria-label="悬停或聚焦，观察空间示意变化"><i></i><i></i><i></i></button><small>悬停或聚焦，观察空间变化</small></div>',
  buttons: '<div class="sample-buttons"><button type="button" class="primary">主要操作</button><button type="button">次要操作</button><button type="button" class="text">辅助</button></div>',
  input: '<label class="sample-input"><span>邮箱地址</span><input type="text" value="hello@example.com" readonly><small>标签、输入区、帮助信息各司其职</small></label>',
  states: '<div class="sample-states"><span><i>✓</i>已完成</span><span><i>…</i>进行中</span><button type="button" disabled>不可操作</button></div>'
};

module.exports = sample => {
  if (!(sample in previews)) throw new Error(`未知元素示意：${sample}`);
  return `<div class="element-example sample-${sample}-stage">${previews[sample]}</div>`;
};
