/*
 * 案例库生成器：从风格、基本元素、案例与截图记录生成可双击浏览的离线索引。
 * 用法：node <本文件绝对路径>；生成 index.html、README.md、coverage.md、elements.md。
 * 分类定义分别维护在 styles.json / elements.json，案例的人工标记维护在 cases.json。
 */
const fs = require('node:fs'); // 读取人工分类与截图记录。
const path = require('node:path'); // 所有产物都固定在脚本旁边。
const renderElementPreview = require('./element-previews.cjs'); // 基本元素使用本站自绘示意，不依赖外网素材。
const buildStyleLab = require('./style-lab.cjs'); // 统一内容、32 个风格预设及小样区域。
const buildCasebook = require('./casebook.cjs'); // 精读、真实对比、灵感夹与补充视图。
const read = name => JSON.parse(fs.readFileSync(path.join(__dirname, name), 'utf8'));
const cases = read('cases.json');
const styles = read('styles.json');
const lab = buildStyleLab(styles); // 缺少演绎的风格在构建时直接指出，避免浏览器静默降级。
const elements = read('elements.json');
// 版块、交互、行业是可选维度：文件不存在时按空处理，不阻塞旧数据结构。
const optional = name => fs.existsSync(path.join(__dirname, name)) ? read(name) : [];
const sections = optional('sections.json');
const interactions = optional('interactions.json');
const industries = optional('industries.json');
const byId = new Map(read('capture-results.json').map(item => [item.id, item]));
const styleById = new Map(styles.map(style => [style.id, style]));
const elementById = new Map(elements.map(element => [element.id, element]));
const sectionById = new Map(sections.map(item => [item.id, item]));
const interactionById = new Map(interactions.map(item => [item.id, item]));
const industryById = new Map(industries.map(item => [item.id, item]));
const categories = [...new Set(cases.map(item => item.category))];
const families = [...new Set(styles.map(style => style.family))];
const elementFamilies = [...new Set(elements.map(element => element.family))];
const date = '2026-10-25'; // 日期使用本次任务的上海日期。
const batchDate = '2026-10-27'; // 版块/交互/行业与扩充实站的标注批次日期。
const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const rows = cases.map(item => {
  const result = byId.get(item.id);
  if (!result || !result.screenshot || !fs.existsSync(path.join(__dirname, result.screenshot))) throw new Error(`缺少截图：${item.id}`);
  if (!item.styles?.length || item.styles.some(id => !styleById.has(id))) throw new Error(`风格分类缺失或不存在：${item.id}`);
  if (!item.elements?.length || item.elements.some(id => !elementById.has(id))) throw new Error(`基本元素标记缺失或不存在：${item.id}`);
  // 新维度是可选字段：缺省/空数组合法；一旦出现就必须是已知 id，避免静默错标。
  for (const [field, map] of [['sections', sectionById], ['interactions', interactionById]]) {
    const list = item[field];
    if (list === undefined) continue;
    if (!Array.isArray(list) || list.some(id => !map.has(id))) throw new Error(`版块/交互标记不存在：${item.id} / ${field}`);
  }
  if (item.industry !== undefined && !industryById.has(item.industry)) throw new Error(`行业标记不存在：${item.id}`);
  return { ...item, ...result }; // 截图使用真实访问记录，分类使用人工整理数据。
});
const supplementalViews = read('case-views.json');
const book = buildCasebook(rows, read('case-studies.json'), supplementalViews, styles, elements);
const supplementalDate = new Date(Math.max(...supplementalViews.map(view=>Date.parse(view.capturedAt)))).toLocaleDateString('sv-SE',{timeZone:'Asia/Shanghai'});
const isSite = item => ['实站', '创意体验'].includes(item.kind);
const coverage = styles.map(style => {
  const examples = rows.filter(item => item.styles.includes(style.id));
  const before = examples.filter(item => item.collectionRound === '原有 40 例').length;
  const sites = examples.filter(isSite).length;
  const hosts = new Set(examples.map(item => new URL(item.finalUrl).hostname.replace(/^www\./, ''))).size;
  return { ...style, count: examples.length, before, sites, hosts, examples, level: !examples.length ? '缺口' : examples.length < 2 ? '单例待补' : sites ? '有实站对照' : '演示样本为主' };
});
const strong = coverage.filter(style => style.count >= 2).length;
const stylesData = coverage.map(({ examples, ...style }) => style); // 浏览器只需要风格说明和计数，避免重复塞入案例内容。
const elementCoverage = elements.map(element => ({ ...element, count: rows.filter(item => item.elements.includes(element.id)).length })); // 数量从显著元素标记推导。
// 新维度的计数同样从案例反推，不手写数字。
const sectionCoverage = sections.map(section => ({ ...section, count: rows.filter(item => (item.sections || []).includes(section.id)).length }));
const interactionCoverage = interactions.map(interaction => ({ ...interaction, count: rows.filter(item => (item.interactions || []).includes(interaction.id)).length }));
const industryCoverage = industries.map(industry => ({ ...industry, count: rows.filter(item => item.industry === industry.id).length }));
const sectionFamilies = [...new Set(sections.map(item => item.family))];
const interactionFamilies = [...new Set(interactions.map(item => item.family))];
const industryFamilies = [...new Set(industries.map(item => item.family))];
const industryOptions = industries.map(item => `<option value="${item.id}">${escape(item.name)}</option>`).join('');
const taxonomyCount = sections.length + interactions.length + industries.length;
const gaps = [
  '酸性平面、Art Deco、Vaporwave、波普等更细的艺术指导子方向尚未逐一建立独立多例分类。',
  'Apple 原生 HIG、不同地区的电商促销风格与真实移动 App 全流程仍需专项补充。',
  '补充视图只记录已采集的页面和状态，不代表完整流程；滚动叙事、触感与完整交互仍应结合原站体验。',
  '版块、交互、行业是 2026-10-27 新增维度：原有 86 例为人工复核，外部源第 1 批为草稿标注（tagStatus=draft），需要逐条复核后才算定稿。',
  '外部源以 Awwwards 收录站为主，倾向获奖与视觉完成度高的站点；行业、风格分布不代表市场抽样，也不代表流行度。',
  '这份目录不是市场统计样本，案例数量或目录覆盖率不能换算成市场占有率。'
];
const styleButtons = families.map(family => `<section class="style-family"><h3>${escape(family)}</h3>${coverage.filter(style => style.family === family).map(style => `<button type="button" class="style-filter" data-style="${style.id}" aria-pressed="false"><span>${escape(style.name)}</span><b>${style.count}</b></button>`).join('')}</section>`).join('');
const elementButtons = elementFamilies.map(family => `<section class="style-family"><h3>${escape(family)}</h3>${elementCoverage.filter(element => element.family === family).map(element => `<button type="button" class="style-filter" data-element="${element.id}" aria-pressed="false"><span>${escape(element.name)}</span><b>${element.count}</b></button>`).join('')}</section>`).join('');
const elementOptions = elementFamilies.map(family => `<optgroup label="${escape(family)}">${elements.filter(element => element.family === family).map(element => `<option value="${element.id}">${escape(element.name)}</option>`).join('')}</optgroup>`).join('');
const previewTemplates = elements.map(element => `<template id="element-preview-${element.id}">${renderElementPreview(element.sample)}</template>`).join('');
const elementAtlas = elementFamilies.map(family => `<section class="atlas-family"><h3>${escape(family)}<span>${elements.filter(element => element.family === family).length} 项</span></h3><div class="atlas-grid">${elementCoverage.filter(element => element.family === family).map(element => `<article class="atlas-card"><div class="atlas-sample" aria-hidden="true" inert>${renderElementPreview(element.sample)}</div><h4><button type="button" data-element="${element.id}">${escape(element.name)}<span>${element.count} 例 ↗</span></button></h4><p>${escape(element.definition)}</p></article>`).join('')}</div></section>`).join('');
const cards = rows.map((item, index) => {
  const names = item.styles.map(id => styleById.get(id).name);
  const aliases = item.styles.flatMap(id => styleById.get(id).aliases);
  const elementWords = item.elements.flatMap(id => { const element = elementById.get(id); return [element.name, element.family, ...element.aliases]; });
  const itemSections = item.sections || [];
  const itemInteractions = item.interactions || [];
  const sectionWords = itemSections.flatMap(id => { const entry = sectionById.get(id); return entry ? [entry.name, entry.family, ...entry.aliases] : []; });
  const interactionWords = itemInteractions.flatMap(id => { const entry = interactionById.get(id); return entry ? [entry.name, entry.family, ...entry.aliases] : []; });
  const industryEntry = item.industry ? industryById.get(item.industry) : null;
  const taxonomyWords = [...sectionWords, ...interactionWords, ...(industryEntry ? [industryEntry.name, industryEntry.family, ...industryEntry.aliases] : [])];
  const taxonomyTags = [
    industryEntry ? `<span class="taxonomy-industry">${escape(industryEntry.name)}</span>` : '',
    ...itemSections.map(id => `<span>${escape(sectionById.get(id).name)}</span>`),
    ...itemInteractions.map(id => `<span class="taxonomy-interaction">${escape(interactionById.get(id).name)}</span>`)
  ].filter(Boolean).join('');
  const taxonomyDetails = taxonomyTags ? `<details class="case-taxonomy"><summary>版块与交互 · ${itemSections.length + itemInteractions.length + (industryEntry ? 1 : 0)}</summary><div class="taxonomy-tags">${taxonomyTags}</div></details>` : '';
  const caseEntry = book.data.cases.find(entry => entry.id === item.id);
  const caseViews = caseEntry ? caseEntry.views.length : 0;
  const draftBadge = item.tagStatus === 'draft' ? '<span class="draft-badge">草稿</span>' : '';
  const previewMarkup = caseViews
    ? `<button type="button" class="preview" data-open-case="${item.id}" aria-haspopup="dialog" aria-label="精读 ${escape(item.name)} 的截图与观察点"><img src="${escape(item.screenshot)}" alt="${escape(item.name)} 实际访问截图" width="1440" height="1000" loading="${index < 3 ? 'eager' : 'lazy'}" decoding="async"><span class="zoom">精读案例 ＋</span></button>`
    : `<a class="preview" href="${escape(item.screenshot)}" target="_blank" rel="noopener" aria-label="查看 ${escape(item.name)} 原尺寸截图"><img src="${escape(item.screenshot)}" alt="${escape(item.name)} 实际访问截图" width="1440" height="1000" loading="${index < 3 ? 'eager' : 'lazy'}" decoding="async"><span class="zoom">查看原图 ↗</span></a>`;
  const actionsMarkup = caseViews
    ? `<div class="case-actions"><button type="button" data-open-case="${item.id}" aria-haspopup="dialog">精读 · ${caseViews} 个视图</button><button type="button" data-toggle-compare="${item.id}" aria-pressed="false">＋ 对比</button><button type="button" data-toggle-save="${item.id}" aria-pressed="false">☆ 收藏</button></div>`
    : `<div class="case-actions"><a class="case-link" href="${escape(item.url)}" target="_blank" rel="noopener noreferrer">打开原站 ↗</a><a class="case-link" href="${escape(item.screenshot)}" target="_blank" rel="noopener">查看原图 ↗</a></div>`;
  return `<article class="card" data-case-id="${item.id}" data-category="${escape(item.category)}" data-kind="${isSite(item) ? 'site' : 'demo'}" data-styles="${item.styles.join(' ')}" data-elements="${item.elements.join(' ')}" data-sections="${itemSections.join(' ')}" data-interactions="${itemInteractions.join(' ')}" data-industry="${escape(item.industry || '')}" data-search="${escape([item.name, item.category, item.kind, ...names, ...aliases, ...elementWords, ...taxonomyWords, ...item.tags, item.study, item.url, item.finalUrl].join(' ').toLowerCase())}">
  ${previewMarkup}
  <div class="card-body"><div class="meta"><span class="case-kind">${escape(item.kind)} · ${escape(item.category)}${draftBadge}</span><span class="case-number">${String(index + 1).padStart(2, '0')}</span></div>
  <h3><a href="${escape(item.url)}" target="_blank" rel="noopener noreferrer">${escape(item.name)} <span>↗</span></a></h3><p class="url"><a href="${escape(item.url)}" target="_blank" rel="noopener noreferrer">${escape(item.url)}</a></p>
  <div class="style-tags">${item.styles.map(id => `<button type="button" data-style="${id}">${escape(styleById.get(id).name)}</button>`).join('')}</div>
  <details class="case-elements"><summary>参考元素 · ${item.elements.length}</summary><div class="element-tags">${item.elements.map(id => `<button type="button" data-element="${id}">${escape(elementById.get(id).name)}</button>`).join('')}</div></details>
  ${taxonomyDetails}
  <p class="study">${escape(item.study)}</p>${actionsMarkup}<div class="detail-tags">${item.tags.map(tag => `<span>${escape(tag)}</span>`).join(' · ')}</div>
  <details><summary>访问与截图记录</summary><p>${escape(item.title)}</p><p>实际地址：<a href="${escape(item.finalUrl)}" target="_blank" rel="noopener noreferrer">${escape(item.finalUrl)}</a></p><p>${escape(new Date(item.capturedAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai', hour12: false }))}（上海） · ${item.viewport.width} × ${item.viewport.height}</p>${item.reviewNote ? `<p>${escape(item.reviewNote)}</p>` : ''}</details></div></article>`;
}).join('\n');
const auditTable = coverage.map(style => `<tr><td><button type="button" data-style="${style.id}">${escape(style.name)}</button></td><td>${style.before}</td><td>${style.count}</td><td>${style.sites}</td><td>${style.hosts}</td><td>${style.level}</td></tr>`).join('');
const html = `<!doctype html><html lang="zh-CN"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><link rel="stylesheet" href="gallery.css"><link rel="stylesheet" href="style-lab.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Jost:wght@400;600;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Noto+Sans+SC:wght@400;700;900&display=swap"><link rel="stylesheet" href="gallery-bauhaus.css"><link rel="stylesheet" href="casebook.css"><title>前端美感案例库 · 风格与基本元素 · ${rows.length} 例</title></head><body data-view="styles">
<a class="skip-link" href="#main-content" data-scroll="main-content">跳到主要内容</a>
<nav class="site-nav" aria-label="主导航"><div class="nav-brand-row"><a class="nav-mark" href="#view=styles" data-mode="styles" data-home>FRONTEND ATLAS</a><button type="button" class="library-entry" data-open-library aria-haspopup="dialog">灵感夹 <span data-library-count>0</span></button></div><div class="nav-links"><a href="#view=styles" data-mode="styles">风格案例</a><a href="#view=elements" data-mode="elements">基本元素</a><a href="#view=lab&style=swiss" data-mode="lab">统一小样</a><a href="coverage.md" class="nav-about">覆盖说明 <span aria-hidden="true">↗</span></a></div></nav>
<header class="page-header" id="top"><div class="masthead"><div class="masthead-copy"><p class="eyebrow">FRONTEND AESTHETICS ATLAS · ${date}</p><h1><span class="hero-line">看风格，</span><span class="hero-line">也拆元素。</span></h1><p class="lede">按风格找方向，按元素看细节。浏览 ${rows.length} 个参考，用统一小样比较同一份内容的不同气质。</p></div><div class="hero-shapes" aria-hidden="true"><span class="shape shape-circle"></span><span class="shape shape-square"></span><span class="shape shape-triangle"></span><span class="shape-caption">FORM / SPACE / COLOUR</span></div></div><div class="stats"><span><strong>${styles.length}</strong> 风格方向</span><span><strong>${elements.length}</strong> 基本元素 · ${elementFamilies.length} 组</span><span><strong>${rows.length}</strong> 案例</span><span><strong>${rows.filter(isSite).length}</strong> 实站 / 创意体验</span><span><strong>${rows.filter(item => !isSite(item)).length}</strong> 组件 / 工具 / 概念演示</span>${taxonomyCount ? `<span><strong>${sections.length}</strong> 版块 · <strong>${interactions.length}</strong> 交互 · <strong>${industries.length}</strong> 行业</span>` : ''}</div>
<details class="coverage"><summary>覆盖到什么程度？查看覆盖表与局限</summary><p>已对本目录中 ${strong} / ${styles.length} 个方向建立至少两个样本。这个数字只衡量本目录，不能解释为覆盖了多少百分比的市场；同一种风格也可能有多个行业与地区分支。</p><p>风格标签是基于截图与页面的整理判断，不是站方认证。视觉语言、材质、设计系统、版式与交互分组展示，避免把所有词当成同一层级的流派。</p><div class="table-scroll"><table><thead><tr><th>风格方向</th><th>原有</th><th>现在</th><th>实站</th><th>来源域名</th><th>样本情况</th></tr></thead><tbody>${auditTable}</tbody></table></div><ul>${gaps.map(gap => `<li>${escape(gap)}</li>`).join('')}</ul><a href="coverage.md">完整覆盖说明 ↗</a></details></header>
<div class="workspace"><aside class="style-sidebar" aria-label="分类目录"><div class="browse-modes" role="group" aria-label="分类方式"><button type="button" data-mode="styles" aria-pressed="true">风格案例</button><button type="button" data-mode="elements" aria-pressed="false">基本元素</button><button type="button" data-mode="lab" aria-pressed="false">统一小样</button></div><details class="style-directory" id="style-directory" open><summary>风格目录 <span>${styles.length} 个方向</span></summary><button type="button" class="style-filter all-filter" data-style="all" aria-pressed="true"><span>全部风格</span><b>${rows.length}</b></button>${styleButtons}</details><details class="style-directory" id="element-directory" hidden open><summary>基本元素 <span>${elementFamilies.length} 组 · ${elements.length} 项</span></summary><button type="button" class="style-filter all-filter" data-element="all" aria-pressed="true"><span>基本元素总览</span><b>${elements.length}</b></button>${elementButtons}</details></aside>
<main id="main-content" tabindex="-1"><section class="style-intro" id="style-intro"><div class="intro-grid"><div><p class="eyebrow" id="reference-eyebrow">STYLE REFERENCE</p><h2 id="style-name">全部风格</h2><p id="style-definition">从左侧选择一个方向，即可查看识别特征与对应案例。每张卡片的分类标签也可以直接点击。</p><p id="style-aliases" class="aliases"></p><ul id="style-cues" class="cues"></ul><p id="style-boundary" class="boundary">先选择风格或基本元素，再结合用途和案例类型找参考。</p><p id="style-coverage" class="sample-status"></p></div><div id="element-preview" class="element-preview" hidden><p class="example-label">本站自绘示意</p><div id="element-preview-content"></div><p class="example-caption" id="element-preview-caption">只说明视觉关系，具体使用方式请看案例。</p></div></div><button type="button" class="intro-lab-link" id="intro-lab-link" data-mode="lab" hidden>用统一小样看变化 <span aria-hidden="true">↗</span></button></section>
${lab.html}<h3 id="lab-case-heading" class="lab-case-heading" hidden>在真实案例中继续观察</h3>
<section class="element-atlas" id="element-atlas" aria-label="基本元素小样总览" hidden><p class="atlas-note">${elementFamilies.length} 组 · ${elements.length} 个小样，点击任意元素查看对应案例。示意为本站自绘，交互小样请在详情中操作。</p>${elementAtlas}</section><div id="case-results"><div class="toolbar">
<label class="search-label"><span>搜索案例</span><span class="search-field"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"></circle><path d="m15.5 15.5 5 5"></path></svg><input id="search" type="search" placeholder="名称、风格、元素或网址…" autocomplete="off"><button type="button" id="clear-search" aria-label="清除搜索关键词" hidden>×</button><kbd aria-hidden="true">/</kbd></span></label>
<details class="filter-options" id="filter-options" open><summary><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18M3 17h18M8 4v6M16 14v6"></path></svg>筛选 <span id="filter-number" hidden></span></summary><div class="filter-fields"><label><span id="cross-filter-name">搭配元素</span><select id="cross-filter"><option value="all">全部元素</option>${elementOptions}</select></label><label>用途<select id="category"><option value="all">全部用途</option>${categories.map(category => `<option>${escape(category)}</option>`).join('')}</select></label><label>案例类型<select id="kind"><option value="all">全部类型</option><option value="site">实站 / 创意体验</option><option value="demo">组件 / 工具 / 概念演示</option></select></label>${industries.length ? `<label>行业<select id="industry"><option value="all">全部行业</option>${industryOptions}</select></label>` : ''}<button id="reset" type="button" title="返回当前视图的起点">重置</button></div></details></div>
<div class="result-bar"><p id="count" class="result-count" role="status" aria-live="polite">显示 ${rows.length} / ${rows.length} 个案例</p><div id="active-filters" class="active-filters" aria-label="已选筛选条件"></div><button type="button" class="clear-filters" id="clear-filters" hidden>清除筛选</button></div><div class="grid">${cards}</div><section id="empty" class="empty" aria-labelledby="empty-title" hidden><span class="empty-mark" aria-hidden="true">∅</span><h3 id="empty-title">暂时没有匹配的案例</h3><p id="empty-message">试着减少筛选条件，或换一个关键词。</p><button type="button" id="empty-reset">清除筛选，重新看看 <span aria-hidden="true">↗</span></button></section></div></main></div>
<footer>桌面原图日期：${date}；补充视图日期：${supplementalDate}；外部源第 1 批 ${batchDate}（${rows.filter(item => item.collectionRound === '外部源-第1批').length} 例，草稿标注见卡片）。元素标签按值得观察的显著特征人工整理，不是页面所有元素的穷尽清单。动态与 3D 交互请打开原站。部分截图启用减少动态效果，部分关闭了地区或 Cookie 提示；记录详见卡片。<br><a href="README.md">风格清单</a> · <a href="elements.md">基本元素说明</a> · <a href="taxonomy.md">版块/交互/行业</a> · <a href="coverage.md">覆盖说明</a> · <a href="NOTICE.md">来源与许可</a> · <a href="cases.json">案例数据</a></footer>
${book.html}
<button type="button" id="back-to-top" class="back-to-top" aria-label="回到顶部" hidden><span aria-hidden="true">↑</span><span>顶部</span></button>
${previewTemplates}<script id="styles-data" type="application/json">${JSON.stringify(stylesData).replace(/</g, '\\u003c')}</script><script id="elements-data" type="application/json">${JSON.stringify(elementCoverage).replace(/</g, '\\u003c')}</script><script id="lab-data" type="application/json">${JSON.stringify(lab.data).replace(/</g, '\\u003c')}</script><script src="style-lab.js"></script><script src="gallery.js"></script><script id="casebook-data" type="application/json">${JSON.stringify(book.data).replace(/</g, '\\u003c')}</script><script src="casebook.js"></script></body></html>`;
fs.writeFileSync(path.join(__dirname, 'index.html'), html); // 全部卡片在 HTML 内，file:// 下无需 fetch。

const report = ['# 风格覆盖审计', '', `更新日期：${date}。这是项目自定目录的覆盖审计，不是市场份额调查。`, '', '## 原有 40 例的问题', '', `按本次目录回看原有样本，${coverage.filter(style => !style.before).length} 个方向没有例子；用途分类无法直接回答“想要这种风格，该看谁”。因此保留用途，增加独立的多标签风格分类。`, '', '## 覆盖矩阵', '', '| 方向 | 分组 | 原有例数 | 现在例数 | 实站/创意体验 | 来源域名 | 样本情况 |', '| --- | --- | ---: | ---: | ---: | ---: | --- |', ...coverage.map(style => `| [${style.name}](index.html#style=${style.id}) | ${style.family} | ${style.before} | ${style.count} | ${style.sites} | ${style.hosts} | ${style.level} |`), '', '“至少两例”只是便于对照的最低样本量，不是代表性或流行度的保证。一个网站可命中多个方向，因此各行例数不可相加当网站总数。', '', '## 仍有的边界', '', ...gaps.map(gap => '- ' + gap), '', '## 目录的四个层面', '', '- 视觉语言：极简、瑞士、编辑式、新粗野、终端等，回答整体看起来是什么气质。', '- 材质：玻璃、液态玻璃、新拟态、黏土、拟物，回答表面和体积如何表达。', '- 设计系统：Material 与企业中性界面，回答组件和信息密度的组织规范。', '- 版式与交互：Bento、大字动态排版、3D 沉浸，可与上述风格叠加。', '', '## 每个方向如何识别', ''];
for (const style of coverage) report.push(`### ${style.name}`, '', style.definition, '', `- 英文/检索词：${style.aliases.join(' / ')}`, `- 识别点：${style.cues.join('；')}`, `- 边界：${style.boundary}`, `- 案例：${style.examples.map(item => `[${item.name}](${item.url})（${item.kind}）`).join('；')}`, '');
fs.writeFileSync(path.join(__dirname, 'coverage.md'), report.join('\n'));

const elementMarkdown = [`# 基本美感元素：${elementFamilies.length} 组，${elements.length} 项`, '', '[打开基本元素目录](index.html#view=elements) · [风格与元素交叉示例](index.html#view=elements&element=type-serif&style=editorial)', '', '元素标签按值得观察的显著特征人工标记，不是对每个页面进行穷尽盘点。静态项以本地截图为参考，交互项请到原站操作；本站的小示意用于解释视觉关系。', '', '| 分组 | 元素 | 标记案例 |', '| --- | --- | ---: |', ...elementCoverage.map(element => `| ${element.family} | [${element.name}](index.html#element=${element.id}) | ${element.count} |`), ''];
for (const family of elementFamilies) {
  elementMarkdown.push(`## ${family}`, '');
  for (const element of elementCoverage.filter(item => item.family === family)) {
    const examples = rows.filter(item => item.elements.includes(element.id));
    elementMarkdown.push(`### ${element.name}`, '', element.definition, '', `- 检索词：${element.aliases.join(' / ')}`, `- 观察点：${element.cues.join('；')}`, `- 使用提示：${element.tip}`, `- 参考案例：${examples.map(item => `[${item.name}](${item.url})`).join('；')}`, '');
  }
}
fs.writeFileSync(path.join(__dirname, 'elements.md'), elementMarkdown.join('\n')); // 文字说明与页面使用同一套分类数据。

// --- 新维度文档：版块 / 交互 / 行业（与 styles.md、elements.md 同源生成） ---
const dimensionExamples = (field, id) => rows.filter(item => field === 'industry' ? item.industry === id : (item[field] || []).includes(id));
const renderDimension = (title, intro, list, families, field) => {
  const output = [`## ${title}`, '', intro, ''];
  for (const family of families) {
    output.push(`### ${family}`, '', '| 条目 | 定义 | 标记案例 | 状态 |', '| --- | --- | ---: | --- |');
    for (const item of list.filter(entry => entry.family === family)) {
      output.push(`| ${field === 'industry' ? `[${item.name}](index.html#industry=${item.id})` : item.name} | ${item.definition} | ${item.count} | ${item.count >= 2 ? '已启用' : '待采集'} |`);
    }
    output.push('');
  }
  output.push('#### 逐条说明', '');
  for (const item of list) {
    const examples = dimensionExamples(field, item.id);
    output.push(`##### ${item.name}`, '', `- 定义：${item.definition}`, `- 识别点：${item.cues.join('；')}`, `- 边界：${item.boundary}`, `- 来源：${item.source.map(source => `${source.label}（${source.url}，${source.retrieved}）`).join('；')}`, `- 标记案例：${examples.length ? examples.slice(0, 8).map(example => `[${example.name}](${example.url})`).join('；') + (examples.length > 8 ? ` 等 ${examples.length} 例` : '') : '暂无'}`, '');
  }
  return output;
};
const taxonomyDoc = [
  '# 版块、交互与行业：三个可叠加的观察维度', '',
  `更新日期：${batchDate}（Asia/Shanghai）。版块回答“页面由哪些块组成”，交互回答“需要操作或时间才能看到什么”，行业回答“谁在使用”。三者都与风格、元素正交，可自由叠加；标签来自截图与页面的整理判断，不是站方认证。`, '',
  '[打开画廊](index.html) · [风格清单](README.md) · [基本元素](elements.md) · [覆盖说明](coverage.md)', '',
  `- 版块：${sections.length} 项，${sectionCoverage.filter(item => item.count >= 2).length} 项已有至少两个案例。`,
  `- 交互：${interactions.length} 项，${interactionCoverage.filter(item => item.count >= 2).length} 项已有至少两个案例。`,
  `- 行业：${industries.length} 项，${industryCoverage.filter(item => item.count >= 1).length} 项已有案例。`,
  '- 标注状态：`reviewed` 为人工确认，`draft` 为机器草稿待复核；草稿不会改变它在筛选中的可选性。', ''
];
taxonomyDoc.push(...renderDimension('版块 section（24）', '版块是页面骨架单元：同一个版块可以出现在任何风格里。', sectionCoverage, sectionFamilies, 'sections'));
taxonomyDoc.push(...renderDimension('交互 interaction（22）', '交互是时序维度：只记录“触发—反馈”对，不把静态视觉特征混进来。', interactionCoverage, interactionFamilies, 'interactions'));
taxonomyDoc.push(...renderDimension('行业 industry（21）', '行业是单选维度：一个站点只取一个主行业，避免同一案例被重复归入多个行业。', industryCoverage, industryFamilies, 'industry'));
fs.writeFileSync(path.join(__dirname, 'taxonomy.md'), taxonomyDoc.join('\n'));


const markdown = [`# 前端美感案例库：${styles.length} 个风格方向，${elements.length} 个基本元素，${rows.length} 个案例`, '', `整理与截图日期：${date}；外部源第 1 批：${batchDate}（Asia/Shanghai）。`, '', '[打开风格画廊](index.html) · [统一风格小样](index.html#view=lab&style=swiss) · [按基本元素找](index.html#view=elements) · [版块/交互/行业](taxonomy.md) · [基本元素说明](elements.md) · [覆盖情况与局限](coverage.md) · [案例数据](cases.json)', '', '可以按风格或基本元素查找，并叠加另一维度、用途和案例类型。风格与元素都是多标签，一个案例可能在多个小节出现；以下不是市场流行度排名。仅保存原站 URL、截图、访问元数据与观察说明；外部源批次与许可见 NOTICE.md。', ''];
for (const family of families) {
  markdown.push(`## ${family}`, '');
  for (const style of coverage.filter(entry => entry.family === family)) {
    markdown.push(`### ${style.name}`, '', style.definition, '', `识别点：${style.cues.join('；')}。`, '', `样本：${style.count} 例，其中 ${style.sites} 例实站/创意体验。${style.boundary}`, '', '| 原站 / URL | 类型与用途 | 观察点 | 截图 |', '| --- | --- | --- | --- |');
    for (const item of style.examples) markdown.push(`| [${item.name}](${item.url})<br>${item.url} | ${item.kind} · ${item.category} | ${item.study} | [查看原图](${item.screenshot}) |`);
    markdown.push('');
  }
}
markdown.push('## 案例精读、对比与灵感夹', '', `本轮补充视图日期：${supplementalDate}（Asia/Shanghai）。${book.data.cases.length} 个案例共 ${book.data.cases.reduce((count,item)=>count+item.annotations.length,0)} 条桌面原图标注，新增 ${supplementalViews.length} 张实际截图：${supplementalViews.filter(view=>view.kind==='mobile').length} 张手机视口、${supplementalViews.filter(view=>view.kind==='inner').length} 张同站内页、${supplementalViews.filter(view=>view.kind==='section').length} 张内容区、${supplementalViews.filter(view=>view.kind==='state').length} 张导航展开。手机视口不代表原站已做好响应式适配。`, '', 'Linear、Lusion、Active Theory、Bruno Simon、Stripe Press 的手机画面在重试后仍未达到参考质量，未收录；采集尝试与人工剔除原因记录在 view-capture-errors.json。原有桌面截图保留。', '', '点击案例截图或“精读”打开站内原图。桌面原图有观察框和基本元素说明；视图页签显示实际采集的手机、同站内页、内容区或导航展开状态，未采集项会明确提示。', '', '每次选择 2–3 个案例，可在底部对比台并排查看，并按九组基本元素比较。收藏入口位于卡片和精读页；灵感夹支持分组、笔记、Markdown 导出和 JSON 备份合并。取消收藏保留原笔记；删除分组会把收藏移至未分组。', '', '个人数据在当前浏览器的 localStorage，不写回项目 JSON；清理浏览器数据或更换浏览器前请导出备份。存储不可用时会提示仅本页有效。', '', '维护入口：case-studies.json 保存原图百分比标注；case-views.json 保存实际补充视图；casebook.cjs / casebook.js / casebook.css 负责生成、交互和外观。capture-views.cjs 可继续采集。', '', '## 版块、交互与行业', '', `除了风格与基本元素，本轮新增三个可叠加的观察维度：${sections.length} 个版块（页面由哪些块组成）、${interactions.length} 个交互（需要操作或时间才能看到什么）、${industries.length} 个行业（谁在使用）。三者与风格、元素正交，可在卡片详情与筛选器中组合使用；完整定义、识别点与边界见 [taxonomy.md](taxonomy.md)。`, '', '版块、交互与行业是补充维度：原有 86 例为人工复核（tagStatus=reviewed），扩充实站为草稿标注（tagStatus=draft），草稿会明确标注、便于后续逐条复核，不与人工结论混为一谈。外部源第 1 批共 114 例来自 Awwwards（个人非商业灵感用途）、portfolio-ideas（MIT）与 awesome-design-systems（Unlicense）；来源与许可见 [NOTICE.md](NOTICE.md)，截图均由本流程重新采集。', '', '## 统一风格小样', '', '打开 index.html#view=lab&style=swiss，或点击目录中的“统一小样”。固定基准与当前演绎使用同一份卡片内容，32 个方向可切换；支持圆角、留白和过渡时长调节，按钮状态同步、查看参数和复制基础 CSS。', '', 'style-lab.cjs 维护内容模板与各风格的视觉参数；style-lab.css 负责装饰和布局；style-lab.js 负责调参、复制与同步状态。名称和分组继续来自 styles.json。小样属于本站教学演绎，不是官方组件；液态玻璃未实现真实折射，沉浸场景采用 CSS 三维示意，像素方向采用系统等宽字体替代。', '', '## 页面外观与浏览细节', '', '包豪斯外壳集中维护在 gallery-bauhaus.css，导航与刊头由 build.cjs 生成。风格、元素、小样共用路由状态；筛选可移除，搜索支持网址和多词组合，按 / 聚焦搜索、Esc 清空。窄屏目录自动折叠，提供跳到内容、回到顶部与减少动态效果支持。教学小样的配色和材质保持独立。外壳保留可选的 Google Fonts 引用；网络不可用时使用系统字体，截图、筛选和小样交互仍在本地工作。', '', '## 维护与复现', '', 'styles.json 维护风格定义；elements.json 维护基本元素及观察点；cases.json 维护用途、风格和显著元素标记；capture-results.json 记录实际访问。小示意由 element-previews.cjs 与 gallery.css 提供，属于本站自绘。修改数据后运行 node build.cjs 重新生成索引。', '', '截图工具沿用 Playwright CLI；先打开 frontend-examples 会话，再执行 node capture.cjs <CLI 的绝对路径> <从 0 开始的位置> <数量>。特殊入口和 Cookie 提示通过页面正常操作，随后使用 save-current.cjs 重拍。', '', '发现入口包括 [Land-book](https://land-book.com/) 与 [Awwwards](https://www.awwwards.com/)，个案直接来源是各自原站。材质与组件方向同时参考各组件作者的公开演示。');
fs.writeFileSync(path.join(__dirname, 'README.md'), markdown.join('\n'));
console.log(`已生成 ${styles.length} 个风格、${elements.length} 个基本元素、${rows.length} 个案例。多例风格 ${strong}/${styles.length}。` + (taxonomyCount ? ` 版块 ${sections.length}、交互 ${interactions.length}、行业 ${industries.length}。` : ''));
