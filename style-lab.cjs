/*
 * 统一风格小样的内容与预设：build.cjs 调用 buildStyleLab(styles) 得到 HTML 和离线数据。
 * 每个方向只在 presets 中维护差异，名称和分组沿用 styles.json。
 * 新增方向时在这里补一个同名预设；这是本站教学演绎，不是官方组件实现。
 */
const baseline = { // 基准与右侧共用内容，只有这些视觉参数和装饰发生变化。
  background: '#eef1f5', surface: '#ffffff', ink: '#202b3c', muted: '#586477', accent: '#4258c9', accentInk: '#ffffff',
  border: '#d5dbe4', borderWidth: 1, radius: 12, buttonRadius: 8, padding: 22, gap: 16,
  shadow: '0 8px 24px #202b3c12', font: 'sans', titleSize: 28, titleWeight: 650, tracking: '-0.025em',
  blur: 0, motion: 180, lift: 2, layout: '纵向卡片', note: '普通中性卡片，作为观察变化的固定基准。'
};
const presets = {
  minimal: { background:'#fafaf8', ink:'#222723', muted:'#61675f', accent:'#303e33', border:'#e1e4dd', radius:2, buttonRadius:2, padding:30, gap:23, shadow:'none', note:'减少边界与装饰，放大留白。极简的秩序还来自内容取舍，不只是白色背景。' },
  swiss: { background:'#eeeae2', ink:'#151515', muted:'#4e4e4e', accent:'#d73125', border:'#151515', radius:0, buttonRadius:0, padding:24, gap:20, shadow:'none', titleWeight:800, titleSize:32, layout:'左对齐网格', note:'直角、左对齐、强字号层级与单一红色。观察标题、数字和分隔线如何共用对齐轴。' },
  editorial: { background:'#e8e4d9', surface:'#fffdf6', ink:'#302e29', muted:'#6e685e', accent:'#6f3027', border:'#beb7a6', radius:0, buttonRadius:0, padding:28, font:'serif', titleSize:32, titleWeight:500, shadow:'none', note:'衬线标题、纸色和细线形成编辑气质；同一段文案因此呈现更强的阅读感。' },
  luxury: { background:'#191c1a', surface:'#222622', ink:'#f5ecd7', muted:'#c6bda9', accent:'#e4c991', accentInk:'#222622', border:'#83745a', radius:0, buttonRadius:0, padding:30, gap:24, shadow:'none', font:'serif', titleSize:30, titleWeight:400, tracking:'0.015em', motion:320, lift:1, note:'克制的金色、衬线字和宽松间距。高级感也依赖摄影、内容与制作质量，配色只是起点。' },
  saas: { background:'#edf0fa', accent:'#5145cf', border:'#d9dcf0', radius:16, buttonRadius:9, shadow:'0 18px 40px #5145cf16', note:'清楚的主按钮、柔和层次与规整信息块，强调易读和行动路径。' },
  'dark-tech': { background:'#080c14', surface:'#111824', ink:'#edf3ff', muted:'#a8b6cb', accent:'#b0baff', accentInk:'#101427', border:'#35415b', radius:14, shadow:'0 18px 45px #00000066', note:'深色表面、冷色强调和细亮边界；正文仍保留足够对比。' },
  industrial: { background:'#d9d9cf', surface:'#efefe6', ink:'#282b27', muted:'#53574f', accent:'#a83214', border:'#73786e', radius:2, buttonRadius:2, borderWidth:2, shadow:'3px 3px 0 #969c8d', font:'mono', padding:19, gap:13, note:'紧凑信息、机械式标记、方正面板与警示色，借用设备和仪器的视觉语言。' },
  illustration: { background:'#e6efda', surface:'#fffbee', ink:'#324b36', muted:'#5c705a', accent:'#3b674a', border:'#bac8aa', radius:24, buttonRadius:20, shadow:'0 10px 25px #425a2815', note:'圆润轮廓和叙事性小景共同制造亲近感；场景中的形状也随配色变化。' },
  pastel: { background:'#f5e8ef', surface:'#fffafc', ink:'#4d3b52', muted:'#7c657f', accent:'#76517e', border:'#dccbdf', radius:25, buttonRadius:22, padding:25, shadow:'0 12px 30px #76517e18', note:'低饱和色、圆润形状与柔和阴影。淡彩不等于降低文字的可读性。' },
  'neo-brutal': { background:'#f4d94f', surface:'#fffdf2', ink:'#161a21', muted:'#454750', accent:'#bcb0fb', accentInk:'#161a21', border:'#161a21', borderWidth:3, radius:0, buttonRadius:0, shadow:'7px 7px 0 #161a21', titleWeight:850, motion:100, lift:4, note:'粗黑描边、硬投影和直接的色块，形成有意夸张的结构感。悬停按钮观察位移。' },
  'raw-web': { background:'#ffffff', surface:'#ffffff', ink:'#111111', muted:'#444444', accent:'#0000bb', border:'#999999', radius:0, buttonRadius:0, padding:15, gap:12, shadow:'none', font:'serif', titleWeight:700, motion:0, lift:0, note:'恢复链接、直线和接近浏览器默认的控件。这里演示朴素网页语言，不把它一律解释为反设计。' },
  maximal: { background:'#6540bb', surface:'#fff7d7', ink:'#29203c', muted:'#65516c', accent:'#deff68', accentInk:'#29203c', border:'#29203c', borderWidth:2, radius:5, shadow:'8px 8px 0 #f79ec4', titleSize:33, titleWeight:850, gap:13, layout:'叠加色块', note:'高饱和异色、旋转装饰与多层色块制造表达密度。固定内容便于看清装饰的影响。' },
  'retro-print': { background:'#c9d5b7', surface:'#fff0cf', ink:'#4d3529', muted:'#795d47', accent:'#9c3e28', border:'#9a7452', radius:8, buttonRadius:18, font:'serif', titleWeight:800, titleSize:31, shadow:'4px 5px 0 #a58e63', note:'奶油纸色、印刷纹理和暖色衬线标题，让现代卡片带有旧包装的味道。' },
  cyber: { background:'#080e1a', surface:'#101d2c', ink:'#d6fffc', muted:'#9abac3', accent:'#67f3e4', accentInk:'#07211f', border:'#41b9b4', radius:0, buttonRadius:0, font:'mono', shadow:'0 0 24px #3fe7df28', tracking:'0em', note:'网格、霓虹线框、切角装饰与等宽信息形成 HUD。正文和按钮不使用闪烁效果。' },
  pixel: { background:'#343b69', surface:'#fff4d4', ink:'#2e3151', muted:'#555777', accent:'#efb94f', accentInk:'#2e3151', border:'#2e3151', borderWidth:3, radius:0, buttonRadius:0, font:'mono', shadow:'6px 6px 0 #171c3e', motion:0, lift:3, note:'阶梯轮廓、有限色阶和游戏式按钮。离线版使用系统等宽字体替代，未内置真正的像素字库。' },
  terminal: { background:'#07130e', surface:'#0c1d14', ink:'#a8f3b4', muted:'#83b58b', accent:'#a8f3b4', accentInk:'#0c1d14', border:'#52775a', radius:0, buttonRadius:0, shadow:'none', font:'mono', tracking:'0em', motion:0, lift:0, note:'等宽字、文本式边界与终端配色。扫描线只放在装饰区，不遮挡正文。' },
  glass: { background:'linear-gradient(135deg, #8cb8cf, #e9c2d8 58%, #d9d9ef)', surface:'#ffffff88', ink:'#263c53', muted:'#4e657c', accent:'#385572', border:'#ffffffcc', radius:22, buttonRadius:14, blur:16, shadow:'0 16px 40px #35516a24', note:'半透明卡片让背景透过，模糊和亮边界制造磨砂层次。拖动留白滑块观察背后的色块。' },
  neumorph: { background:'#e2e7ee', surface:'#e2e7ee', ink:'#34445a', muted:'#5e6e83', accent:'#3e5e9c', border:'#e2e7ee', radius:24, buttonRadius:14, shadow:'10px 10px 22px #b8c3d2, -10px -10px 22px #ffffff', note:'背景与卡片同色，通过成对明暗阴影制造凸起。文字和按钮的可读性仍单独保证。' },
  skeuo: { background:'#a5c6c4', surface:'linear-gradient(#f7f4e9, #e1dfd5)', ink:'#222c32', muted:'#555f64', accent:'#2b5284', border:'#707e86', borderWidth:2, radius:4, buttonRadius:3, font:'sans', shadow:'inset 2px 2px 0 #ffffff, inset -2px -2px 0 #a1aaa9, 5px 7px 0 #00000025', note:'窗口标题条、镶边和凸起按钮借用早期桌面隐喻。这是概念演示，不是特定操作系统的复刻。' },
  material: { background:'#eee8f4', surface:'#fffbfe', ink:'#29232e', muted:'#655c6c', accent:'#67518a', border:'#dfd4e7', radius:28, buttonRadius:24, padding:24, shadow:'0 3px 8px #33224520', motion:260, note:'主题色、圆角形状与明确状态形成系统感。这里只提炼视觉特征，不宣称符合全部 Material 规范。' },
  enterprise: { background:'#edf0f4', ink:'#253247', muted:'#5b687b', accent:'#245eb8', border:'#cbd3df', radius:5, buttonRadius:4, padding:16, gap:10, titleSize:25, shadow:'0 2px 6px #2532470a', layout:'紧凑信息分组', motion:120, lift:1, note:'缩小内边距和模块间距，用一致边界提高信息密度。主要操作依然清楚。' },
  bento: { background:'#e5e9e3', surface:'#ffffff', ink:'#28332d', muted:'#5c6c60', accent:'#365e47', border:'#d2dcd0', radius:22, buttonRadius:12, padding:22, gap:12, shadow:'none', layout:'不同跨度的模块网格', note:'把相同的信息拆进不同跨度的模块。Bento 改变的是版式，可以再搭配其他材质。' },
  immersive: { background:'radial-gradient(at 40% 20%, #4d5895, #11162c 75%)', surface:'#17223fe8', ink:'#e9efff', muted:'#b4c4e5', accent:'#c2caff', accentInk:'#17223f', border:'#65769f', radius:18, shadow:'0 28px 60px #00000055', motion:320, note:'几何场景可随指针或方向键转动；这是 CSS 三维教学小景，完整的可探索 WebGL 世界仍需看原站。' },
  kinetic: { background:'#f0f34b', surface:'#f0f34b', ink:'#141818', muted:'#444a3b', accent:'#141818', accentInk:'#f0f34b', border:'#52553b', radius:0, buttonRadius:0, padding:20, titleSize:42, titleWeight:900, tracking:'-0.065em', shadow:'none', motion:300, layout:'大字主导', note:'扩大文字尺度，并在悬停或聚焦时改变标题节奏。为便于对照，保留同样的文字和阅读顺序。' },
  'liquid-glass': { background:'linear-gradient(120deg, #a5d9d0, #f2ceae 50%, #a6c1e9)', surface:'#ffffff4a', ink:'#2a4558', muted:'#4a6274', accent:'#375d78', border:'#ffffffdd', radius:30, buttonRadius:22, blur:5, shadow:'inset 2px 2px 2px #ffffffdd, inset -3px -3px 8px #ffffff77, 0 14px 35px #2b57653b', motion:320, note:'用更透明的表面、内高光和柔性轮廓演绎透镜感；本小样未实现真实光学折射，也不是 Apple 原生材质。' },
  clay: { background:'#e3e8f9', surface:'#cfd7f8', ink:'#35416c', muted:'#55618b', accent:'#6e4da8', border:'#b4bee6', radius:34, buttonRadius:22, borderWidth:0, padding:26, shadow:'inset 5px 5px 9px #ffffffb3, inset -6px -7px 12px #8f9acc88, 9px 12px 25px #626d9c30', note:'大圆角、鼓起的内高光和柔软阴影，让表面像揉制的黏土。' },
  chinese: { background:'#d5d9c9', surface:'#f8f2df', ink:'#343d30', muted:'#65705a', accent:'#9b382d', border:'#b6b49d', radius:1, buttonRadius:1, font:'serif', padding:28, gap:22, shadow:'none', note:'纸色、朱红、墨绿与留白提供一种中式视觉演绎。中文设计并不只有这一种样貌，英文标题按统一内容保留。' },
  y2k: { background:'linear-gradient(135deg, #bcbefa, #f3b9e5 55%, #a9deef)', surface:'linear-gradient(135deg, #ffffffdd, #e2e8ffbb 55%, #bebae9cc)', ink:'#3b2c69', muted:'#635583', accent:'#6c3cb5', border:'#ffffff', borderWidth:2, radius:20, buttonRadius:30, font:'sans', titleWeight:850, shadow:'inset 2px 2px 2px #ffffff, 5px 8px 0 #9279c766', note:'金属渐变、泡泡椭圆与紫粉冷光，提炼千禧年数字视觉；它与赛博 HUD 的结构感不同。' },
  fluent: { background:'#e7edf4', surface:'#f7faffef', ink:'#233247', muted:'#5a6c80', accent:'#2162a5', border:'#d6e2ed', radius:9, buttonRadius:5, blur:10, shadow:'0 7px 20px #3047601c', note:'中性层次、克制圆角和轻质感演绎 Fluent 气质；完整状态规范请看官方案例。' },
  bauhaus: { background:'#e7e0cc', surface:'#fbf7e8', ink:'#1b2632', muted:'#59616a', accent:'#ad3028', border:'#1b2632', borderWidth:2, radius:0, buttonRadius:0, shadow:'none', titleWeight:800, layout:'几何分区', note:'圆、直线和原色色块形成几何构成。重点看形状与版式关系，而不只是三原色。' },
  memphis: { background:'#f3c0c8', surface:'#fff6dd', ink:'#34365a', muted:'#646080', accent:'#4d558d', border:'#34365a', borderWidth:2, radius:8, buttonRadius:6, shadow:'6px 6px 0 #64b9b9', titleWeight:800, note:'波点、斜线、跳跃几何和对比配色制造装饰节奏。保持正文区域清楚，避免纹样抢走阅读。' },
  sketch: { background:'#ece9dc', surface:'#fffdf3', ink:'#3f4438', muted:'#6d7363', accent:'#4c6152', border:'#5b6551', borderWidth:2, radius:3, buttonRadius:3, shadow:'3px 4px 0 #b4baa3', font:'hand', tracking:'0em', note:'不规则轮廓、虚线和手写字模拟纸上草图；缺少手写字体时会使用系统衬线替代。' }
};

function demoCard(id) { // 两栏调用同一个模板，保证文案、数字和控件完全相同。
  return `<div class="lab-demo" id="lab-demo-${id}" data-sample-style="baseline">
    <div class="lab-demo-top"><span class="lab-brand"><i aria-hidden="true"></i> FORM STUDIO</span><span>灵感计划 / 01</span></div>
    <div class="lab-art" tabindex="0" role="img" aria-label="几何场景；沉浸风格下可用方向键旋转"><span class="lab-orbit"></span><span class="lab-object"><i></i><i></i><i></i></span><span class="lab-art-line"></span></div>
    <article class="lab-demo-card"><span class="lab-demo-tag">设计练习</span><h4>Make room for ideas.</h4><p class="lab-demo-copy">收集灵感，把下一个想法变成作品。</p>
    <div class="lab-demo-metrics"><span><b>12</b>灵感片段</span><span><b>03</b>进行中的想法</span></div>
    <div class="lab-progress"><span>完成进度 <b>60%</b></span><div role="progressbar" aria-label="完成进度" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"><i></i></div></div>
    <div class="lab-demo-actions"><button type="button" class="lab-primary" data-demo-join aria-pressed="false">加入计划 <span aria-hidden="true">↗</span></button><button type="button" class="lab-secondary" data-demo-detail aria-expanded="false" aria-controls="lab-detail-${id}">查看详情</button></div>
    <p class="lab-demo-detail" id="lab-detail-${id}" hidden>每天留出一点空间，记录、整理，再开始创作。</p></article></div>`;
}

/** 将现有风格目录生成统一小样，新增风格却没有演绎时在构建阶段明确报错。 */
module.exports = function buildStyleLab(styles) {
  const samples = styles.map(style => {
    if (!presets[style.id]) throw new Error(`统一小样缺少预设：${style.id}`);
    return { ...baseline, ...presets[style.id], id:style.id, name:style.name }; // 展开后的数据直接供浏览器渲染。
  });
  const options = [...new Set(styles.map(style => style.family))].map(family => `<optgroup label="${family}">${styles.filter(style => style.family === family).map(style => `<option value="${style.id}">${style.name}</option>`).join('')}</optgroup>`).join('');
  const html = `<section class="style-lab" id="style-lab" aria-labelledby="lab-title" hidden>
    <div class="lab-heading"><div><p class="eyebrow">SAME CONTENT, DIFFERENT EXPRESSION</p><h3 id="lab-title">内容不变，观察风格怎么变。</h3><p>用同一张卡片看配色、字体、轮廓、间距和交互。按钮可点击，两栏状态同步。</p></div><label class="lab-compare-toggle"><input type="checkbox" id="lab-compare" checked>显示基准对照</label></div>
    <div class="lab-picker"><label for="lab-style-select">切换风格<select id="lab-style-select">${options}</select></label><div class="lab-step"><button type="button" id="lab-previous" aria-label="上一个风格">←</button><span id="lab-position"></span><button type="button" id="lab-next" aria-label="下一个风格">→</button></div><span class="lab-picker-hint">也可使用左侧风格目录</span></div>
    <div class="lab-stage" id="lab-stage"><section class="lab-panel" id="lab-baseline-panel" aria-label="固定基准"><div class="lab-panel-label"><span>01 / 固定基准</span><b>中性卡片</b></div>${demoCard('baseline')}</section><section class="lab-panel" aria-label="当前风格演绎"><div class="lab-panel-label"><span>02 / 当前演绎</span><b id="lab-active-name"></b></div>${demoCard('active')}</section></div>
    <p class="lab-observation" id="lab-observation"></p><p class="lab-status" id="lab-status" role="status">悬停或聚焦按钮观察反馈；点击可体验两栏同步的状态。</p>
    <div class="lab-adjustments"><div class="lab-adjustment-title"><h4>动手调一调</h4><button type="button" id="lab-reset">恢复当前风格</button></div><div class="lab-sliders"><label>卡片圆角 <output id="lab-radius-value" for="lab-radius"></output><input id="lab-radius" type="range" min="0" max="36" step="1"></label><label>卡片留白 <output id="lab-padding-value" for="lab-padding"></output><input id="lab-padding" type="range" min="12" max="36" step="1"></label><label>过渡时长 <output id="lab-motion-value" for="lab-motion"></output><input id="lab-motion" type="range" min="0" max="480" step="20"></label></div><p class="lab-motion-note">系统开启“减少动态效果”时，小样会关闭过渡和空间跟随。</p></div>
    <div class="lab-parameters"><div class="lab-adjustment-title"><h4>这次改变了哪些参数？</h4><button type="button" id="lab-copy">复制参数 CSS</button></div><dl class="lab-token-grid" id="lab-tokens"></dl><details class="lab-code"><summary>查看当前参数 CSS</summary><pre><code id="lab-css"></code></pre></details></div>
    <p class="lab-footnote">本站演绎只用于比较视觉关系，并非官方组件或完整网站。真实场景、内容和动效请继续查看下方案例。</p>
    </section>`;
  return { html, data:{ baseline, samples } };
};
