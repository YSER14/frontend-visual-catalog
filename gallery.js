/*
 * 案例库浏览：风格、基本元素和统一小样共用这一套路由与筛选。
 * 例：#view=styles&style=glass&q=透明，#view=lab&style=swiss。
 * 数据内嵌在 HTML；搜索、已选条件、前进后退都在本地完成。
 */
const styles = JSON.parse(document.getElementById('styles-data').textContent);
const elements = JSON.parse(document.getElementById('elements-data').textContent);
const styleById = new Map(styles.map(style => [style.id, style]));
const elementById = new Map(elements.map(element => [element.id, element]));
const cards = [...document.querySelectorAll('.card')];
const category = document.getElementById('category');
const kind = document.getElementById('kind');
const industry = document.getElementById('industry');
const search = document.getElementById('search');
const crossFilter = document.getElementById('cross-filter');
const compact = window.matchMedia('(max-width: 900px)'); // 与包豪斯外壳的侧栏断点一致。
const mobileFilters = window.matchMedia('(max-width: 620px)');
let mode = 'styles';
let selectedStyle = 'all';
let selectedElement = 'all';
let previousMode;

// --- 已选条件直接可移除，不要求用户反复展开下拉框 ---
function renderFilterChips() {
  const conditions = [];
  if (mode === 'elements' && selectedStyle !== 'all') conditions.push(['cross', styleById.get(selectedStyle).name]);
  if (mode !== 'elements' && selectedElement !== 'all') conditions.push(['cross', elementById.get(selectedElement).name]);
  if (category.value !== 'all') conditions.push(['category', category.value]);
  if (kind.value !== 'all') conditions.push(['kind', kind.selectedOptions[0].textContent]);
  if (industry && industry.value !== 'all') conditions.push(['industry', industry.selectedOptions[0].textContent]);
  if (search.value.trim()) conditions.push(['search', '“' + search.value.trim() + '”']);
  const host = document.getElementById('active-filters');
  host.replaceChildren();
  for (const [key, label] of conditions) {
    const button = document.createElement('button');
    const text = document.createElement('span');
    const remove = document.createElement('span');
    button.type = 'button';
    button.dataset.clearFilter = key;
    button.setAttribute('aria-label', '移除筛选：' + label);
    text.textContent = label; // 关键词只作为文本显示，URL 中的内容也不会被当作 HTML。
    remove.textContent = '×';
    remove.className = 'filter-remove';
    remove.setAttribute('aria-hidden', 'true');
    button.append(text, remove);
    host.append(button);
  }
  document.getElementById('clear-filters').hidden = !conditions.length;
  document.getElementById('clear-search').hidden = !search.value;
  const advancedCount = conditions.filter(([key]) => key !== 'search').length;
  document.getElementById('filter-number').textContent = advancedCount;
  document.getElementById('filter-number').hidden = !advancedCount;
}

// --- 搜索支持多词组合，所有词都匹配才保留该案例 ---
function filter() {
  const terms = search.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
  let visible = 0;
  for (const card of cards) {
    const matches = (selectedStyle === 'all' || card.dataset.styles.split(' ').includes(selectedStyle))
      && (selectedElement === 'all' || card.dataset.elements.split(' ').includes(selectedElement))
      && (category.value === 'all' || card.dataset.category === category.value)
      && (kind.value === 'all' || card.dataset.kind === kind.value)
      && (!industry || industry.value === 'all' || card.dataset.industry === industry.value)
      && terms.every(term => card.dataset.search.includes(term));
    card.hidden = !matches;
    if (matches) visible++;
  }
  const labels = [];
  if (selectedStyle !== 'all') labels.push(styleById.get(selectedStyle).name);
  if (selectedElement !== 'all') labels.push(elementById.get(selectedElement).name);
  document.getElementById('count').textContent = visible + ' 个案例' + (visible < cards.length ? ' / 共 ' + cards.length + ' 个' : '');
  document.getElementById('count').setAttribute('aria-label', (labels.join('，') || '全部') + '，显示 ' + visible + ' 个案例');
  document.getElementById('empty').hidden = visible > 0;
  document.getElementById('empty-message').textContent = search.value.trim()
    ? '没有找到与“' + search.value.trim() + '”及当前条件同时匹配的案例。试着换一个词，或减少筛选条件。'
    : '这些条件暂时没有交集。移除搭配条件、用途或案例类型，再看看当前分类。';
  renderFilterChips();
}

function renderCrossFilter() {
  const isElementMode = mode === 'elements';
  const data = isElementMode ? styles : elements;
  document.getElementById('cross-filter-name').textContent = isElementMode ? '搭配风格' : '搭配元素';
  crossFilter.replaceChildren(new Option(isElementMode ? '全部风格' : '全部元素', 'all'));
  for (const family of new Set(data.map(item => item.family))) {
    const group = document.createElement('optgroup');
    group.label = family;
    for (const item of data.filter(item => item.family === family)) group.appendChild(new Option(item.name, item.id));
    crossFilter.appendChild(group);
  }
  crossFilter.value = isElementMode ? selectedStyle : selectedElement;
}

// --- 分类说明与原有元素小样保持一致，外壳不改变教学内容的颜色 ---
function renderIntro() {
  const isElementMode = mode === 'elements';
  const item = isElementMode ? elementById.get(selectedElement) : styleById.get(selectedStyle);
  document.getElementById('style-intro').dataset.overview = String(!item);
  document.getElementById('reference-eyebrow').textContent = isElementMode ? 'ELEMENT REFERENCE' : (mode === 'lab' ? 'STYLE LAB' : 'STYLE REFERENCE');
  document.getElementById('style-name').textContent = item ? item.name : (isElementMode ? '基本元素总览' : '全部风格');
  document.getElementById('style-definition').textContent = item ? item.definition : (isElementMode
    ? '从布局、字体、色彩、形状、线条、光影、图像、动效和控件九方面拆开看。选择一个元素，查看示意和对应案例。'
    : '先找整体方向，再结合基本元素、用途与案例类型，找到适合自己的参考。');
  document.getElementById('style-aliases').textContent = item ? item.aliases.join(' · ') : '';
  const cues = document.getElementById('style-cues');
  cues.replaceChildren();
  for (const cue of item?.cues || []) { const li = document.createElement('li'); li.textContent = cue; cues.appendChild(li); }
  document.getElementById('style-boundary').textContent = item ? (isElementMode ? item.tip : item.boundary) : (isElementMode
    ? '标签选取值得观察的显著元素，不是网页全部元素的穷尽清单。'
    : '每个案例保留原站、截图与观察说明。点击截图可查看原图。');
  document.getElementById('style-coverage').textContent = item ? (isElementMode
    ? '参考 ' + item.count + ' 例 · ' + item.family + (item.live ? ' · 包含交互观察项' : '')
    : item.count + ' 个案例 · ' + item.sites + ' 个实站 / 创意体验 · ' + item.hosts + ' 个来源域名') : '';
  document.getElementById('intro-lab-link').hidden = mode !== 'styles';
  const preview = document.getElementById('element-preview');
  const host = document.getElementById('element-preview-content');
  host.replaceChildren();
  preview.hidden = !isElementMode || !item;
  document.getElementById('style-intro').classList.toggle('has-preview', !preview.hidden);
  if (preview.hidden) return;
  host.appendChild(document.getElementById('element-preview-' + item.id).content.cloneNode(true));
  document.getElementById('element-preview-caption').textContent = item.live
    ? '示意可悬停或聚焦；完整动态请打开原站体验。'
    : item.sample === 'photo' ? '这是构图示意，实际摄影请看对应案例截图。' : '示意说明视觉关系，实际运用请看对应案例。';
}

function configureDirectories() {
  for (const directory of document.querySelectorAll('.style-directory')) directory.open = !compact.matches;
}

function render() {
  document.body.dataset.view = mode;
  const showAtlas = mode === 'elements' && selectedElement === 'all';
  document.getElementById('element-atlas').hidden = !showAtlas;
  document.getElementById('case-results').hidden = showAtlas;
  document.getElementById('style-directory').hidden = mode === 'elements';
  document.getElementById('element-directory').hidden = mode !== 'elements';
  document.getElementById('style-lab').hidden = mode !== 'lab';
  document.getElementById('lab-case-heading').hidden = mode !== 'lab';
  if (mode === 'lab') styleLab.render(selectedStyle);
  for (const button of document.querySelectorAll('.browse-modes [data-mode]')) button.setAttribute('aria-pressed', String(button.dataset.mode === mode));
  for (const link of document.querySelectorAll('.nav-links [data-mode]')) {
    if (link.dataset.mode === mode) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  for (const button of document.querySelectorAll('.style-sidebar button[data-style]')) button.setAttribute('aria-pressed', String(button.dataset.style === selectedStyle));
  for (const button of document.querySelectorAll('.style-sidebar button[data-element]')) button.setAttribute('aria-pressed', String(button.dataset.element === selectedElement));
  for (const button of document.querySelectorAll('.card button[data-style], .card button[data-element]')) {
    const selected = button.dataset.style === selectedStyle || button.dataset.element === selectedElement;
    if (selected) button.setAttribute('aria-current', 'true');
    else button.removeAttribute('aria-current');
  }
  if (previousMode !== mode) {
    for (const details of document.querySelectorAll('.case-elements')) details.open = mode === 'elements';
    configureDirectories(); // 只在视图切换时调整开合，筛选不会覆盖用户自己展开的目录。
    document.getElementById('filter-options').open = !mobileFilters.matches;
    previousMode = mode;
  }
  renderCrossFilter();
  renderIntro();
  filter();
}

// --- 一条完整链接还原视图与筛选，搜索输入不生成逐字的后退记录 ---
function writeHash(replace = false) {
  const parameters = new URLSearchParams({ view: mode });
  if (selectedStyle !== 'all') parameters.set('style', selectedStyle);
  if (selectedElement !== 'all') parameters.set('element', selectedElement);
  if (category.value !== 'all') parameters.set('category', category.value);
  if (kind.value !== 'all') parameters.set('kind', kind.value);
  if (industry && industry.value !== 'all') parameters.set('industry', industry.value);
  if (search.value.trim()) parameters.set('q', search.value.trim());
  const hash = '#' + parameters.toString();
  if (location.hash !== hash) history[replace ? 'replaceState' : 'pushState'](null, '', hash);
}

function resetExtraFilters() {
  category.value = 'all';
  kind.value = 'all';
  if (industry) industry.value = 'all';
  search.value = '';
}

function focusIntro() {
  document.getElementById('style-intro').scrollIntoView({ block: 'start' });
  const title = document.getElementById('style-name');
  title.tabIndex = -1;
  title.focus({ preventScroll: true });
}

function choose(nextMode, id = 'all', moveFocus = true) {
  const labStyle = styleById.has(id) ? id : (selectedStyle !== 'all' ? selectedStyle : 'swiss');
  mode = nextMode;
  selectedStyle = mode === 'lab' ? labStyle : (mode === 'styles' && styleById.has(id) ? id : 'all');
  selectedElement = mode === 'elements' && elementById.has(id) ? id : 'all';
  resetExtraFilters();
  render();
  writeHash();
  if (compact.matches) document.getElementById(mode === 'elements' ? 'element-directory' : 'style-directory').open = false;
  if (moveFocus) focusIntro();
}

function clearSecondaryFilters() {
  if (mode === 'elements') selectedStyle = 'all';
  else selectedElement = 'all';
  resetExtraFilters();
  render();
  writeHash();
  search.focus({ preventScroll: true }); // 清除按钮隐藏后，键盘用户仍有明确的操作位置。
}

function readHash() {
  const parameters = new URLSearchParams(location.hash.slice(1));
  const requestedMode = parameters.get('view');
  mode = ['styles', 'elements', 'lab'].includes(requestedMode) ? requestedMode : (parameters.has('element') ? 'elements' : 'styles');
  selectedStyle = styleById.has(parameters.get('style')) ? parameters.get('style') : 'all';
  selectedElement = elementById.has(parameters.get('element')) ? parameters.get('element') : 'all';
  if (mode === 'lab' && selectedStyle === 'all') selectedStyle = 'swiss';
  category.value = [...category.options].some(option => option.value === parameters.get('category')) ? parameters.get('category') : 'all';
  kind.value = ['site', 'demo'].includes(parameters.get('kind')) ? parameters.get('kind') : 'all';
  if (industry) industry.value = [...industry.options].some(option => option.value === parameters.get('industry')) ? parameters.get('industry') : 'all';
  search.value = parameters.get('q') || '';
  render();
}

// --- 顶部入口与侧栏使用同一个指令，普通滚动入口不改筛选 hash ---
document.addEventListener('click', event => {
  if (mobileFilters.matches && !event.target.closest('.filter-options')) document.getElementById('filter-options').open = false;
  const scrollLink = event.target.closest('[data-scroll]');
  if (scrollLink) {
    event.preventDefault();
    const target = document.getElementById(scrollLink.dataset.scroll);
    target.scrollIntoView({ block: 'start' });
    target.tabIndex = -1;
    target.focus({ preventScroll: true });
    return;
  }
  const control = event.target.closest('[data-mode], button[data-style], button[data-element]');
  if (!control) return;
  event.preventDefault();
  if (control.dataset.mode) choose(control.dataset.mode, 'all', !control.hasAttribute('data-home'));
  else if (control.dataset.element) choose('elements', control.dataset.element);
  else choose(mode === 'lab' ? 'lab' : 'styles', control.dataset.style);
  if (control.hasAttribute('data-home')) window.scrollTo({ top: 0 });
});
document.getElementById('active-filters').addEventListener('click', event => {
  const button = event.target.closest('[data-clear-filter]');
  if (!button) return;
  const key = button.dataset.clearFilter;
  if (key === 'cross') { if (mode === 'elements') selectedStyle = 'all'; else selectedElement = 'all'; }
  else if (key === 'search') search.value = '';
  else document.getElementById(key).value = 'all';
  render();
  writeHash();
  search.focus({ preventScroll: true });
});
crossFilter.addEventListener('change', () => {
  if (mode === 'elements') selectedStyle = crossFilter.value;
  else selectedElement = crossFilter.value;
  render();
  writeHash();
});
for (const control of [category, kind, industry].filter(Boolean)) control.addEventListener('change', () => { filter(); writeHash(); });
search.addEventListener('input', () => { filter(); writeHash(true); });
document.getElementById('clear-search').addEventListener('click', () => { search.value = ''; filter(); writeHash(true); search.focus(); });
document.getElementById('clear-filters').addEventListener('click', clearSecondaryFilters);
document.getElementById('empty-reset').addEventListener('click', clearSecondaryFilters);
document.getElementById('reset').addEventListener('click', () => choose(mode));
document.getElementById('lab-style-select').addEventListener('change', event => choose('lab', event.target.value, false));
for (const [id, offset] of [['lab-previous', -1], ['lab-next', 1]]) document.getElementById(id).addEventListener('click', () => {
  const current = styles.findIndex(style => style.id === selectedStyle);
  choose('lab', styles[(current + offset + styles.length) % styles.length].id, false);
});
document.addEventListener('keydown', event => {
  const filterMenu = document.getElementById('filter-options');
  if (event.key === 'Escape' && mobileFilters.matches && filterMenu.open && filterMenu.contains(document.activeElement)) {
    event.preventDefault();
    filterMenu.open = false;
    filterMenu.querySelector('summary').focus();
    return;
  }
  if (event.key === '/' && !event.ctrlKey && !event.metaKey && !event.altKey && !event.target.closest('input,textarea,select,[contenteditable=true]') && !document.getElementById('case-results').hidden) {
    event.preventDefault();
    search.focus();
    search.select();
  }
  if (event.key === 'Escape' && document.activeElement === search && search.value) {
    search.value = '';
    filter();
    writeHash(true);
  }
});

// --- 导航高度用于滚动让位；长列表提供轻量的返回顶部入口 ---
const navigation = document.querySelector('.site-nav');
new ResizeObserver(() => document.documentElement.style.setProperty('--nav-height', navigation.offsetHeight + 'px')).observe(navigation);
const topButton = document.getElementById('back-to-top');
const updateTopButton = () => { topButton.hidden = window.scrollY < 600; };
window.addEventListener('scroll', updateTopButton, { passive: true });
topButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  document.querySelector('.nav-mark').focus({ preventScroll: true });
});
compact.addEventListener('change', configureDirectories);
mobileFilters.addEventListener('change', () => { document.getElementById('filter-options').open = !mobileFilters.matches; });
window.addEventListener('hashchange', readHash);
window.addEventListener('popstate', readHash);
readHash();
updateTopButton();
