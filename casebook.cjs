/*
 * 精读、对比和灵感夹的构建入口：buildCasebook(rows, studies, views, styles, elements)。
 * 只拼接可信的项目数据，浏览器所需 JSON 随页面嵌入，file:// 无需请求接口。
 * 原图标注以百分比坐标保存；新增视图必须来自实际截图记录。
 */
const fs = require('node:fs');
const path = require('node:path');

module.exports = function buildCasebook(rows, studies, views, styles, elements) {
  const byCase = new Map(rows.map(item=>[item.id,item]));
  const byStudy = new Map(studies.map(item=>[item.caseId,item]));
  const elementIds = new Set(elements.map(item=>item.id));
  if(byStudy.size!==studies.length||new Set(views.map(view=>view.id)).size!==views.length)throw Error('精读案例或补充视图 ID 重复');
  for (const study of studies) {
    if (!byCase.has(study.caseId)) throw Error('未知精读案例：'+study.caseId);
    for (const note of study.annotations) {
      const [x,y,w,h]=note.rect;
      if (![x,y,w,h].every(Number.isFinite)||x<0||y<0||w<=0||h<=0||x+w>100||y+h>100) throw Error('标注超出原图：'+study.caseId);
      if (!elementIds.has(note.element)) throw Error('标注元素不存在：'+note.element);
    }
  }
  for (const view of views) {
    if (!byCase.has(view.caseId)||!fs.existsSync(path.join(__dirname,view.screenshot))) throw Error('视图缺少案例或截图：'+view.id);
    if (!['mobile','inner','section','state'].includes(view.kind)) throw Error('未知视图类型：'+view.kind);
    if(!Number.isFinite(Date.parse(view.capturedAt))||![view.viewport?.width,view.viewport?.height].every(value=>Number.isFinite(value)&&value>0))throw Error('视图缺少有效日期或视口：'+view.id);
  }
  const cases=rows.map(item=>({
    id:item.id,name:item.name,url:item.url,category:item.category,kind:item.kind,styles:item.styles,elements:item.elements,study:item.study,
    annotations:byStudy.get(item.id)?.annotations||[],
    views:[{id:item.id+'-original',caseId:item.id,kind:'desktop',label:'桌面原图',screenshot:item.screenshot,viewport:item.viewport,capturedAt:item.capturedAt,finalUrl:item.finalUrl,title:item.title},...views.filter(view=>view.caseId===item.id)]
  }));
  const html=`<div class="compare-tray" id="compare-tray" aria-label="待对比案例" hidden><div><span class="tray-label">对比台</span><div id="compare-picked"></div></div><div class="tray-actions"><button type="button" data-clear-compare>清空</button><button type="button" class="book-primary" data-open-compare>开始对比 <span id="compare-tray-count"></span></button></div></div>
<div id="book-toast" class="book-toast" role="status" aria-live="polite" hidden></div>
<dialog id="case-dialog" class="book-dialog study-dialog" aria-labelledby="study-title"><header class="book-dialog-header"><div><p class="eyebrow">CASE STUDY</p><h2 id="study-title"></h2></div><button type="button" class="book-close" data-close-dialog aria-label="关闭案例精读">×</button></header>
<div class="study-topline"><p id="study-summary"></p><div class="book-actions"><button type="button" id="study-save"></button><button type="button" id="study-compare"></button><button type="button" data-open-compare>打开对比台</button><a id="study-source" target="_blank" rel="noopener noreferrer">访问原站 ↗</a></div></div>
<div id="study-views" class="study-views" role="group" aria-label="案例视图"></div><p id="study-view-meta" class="view-meta"></p><p id="study-view-gap" class="view-gap" hidden></p>
<div class="study-layout"><section class="study-picture" aria-label="截图与观察点"><div class="study-picture-toolbar"><label><input type="checkbox" id="study-show-marks" checked>显示观察标注</label><a id="study-original" target="_blank" rel="noopener">查看原图 ↗</a></div><div class="study-canvas" id="study-canvas"><img id="study-image" alt=""><div id="study-marks" class="study-marks"></div></div></section>
<aside class="study-reader"><h3>这张图，值得看哪里？</h3><div id="study-notes"></div><section class="study-personal"><h3>记到自己的灵感夹</h3><label>分组<select id="study-folder"></select></label><label>我的观察<textarea id="study-note" rows="4" maxlength="10000" placeholder="比如：这个标题层级适合我的个人主页……"></textarea></label><small id="study-note-status">笔记保存在当前浏览器。</small></section></aside></div></dialog>
<dialog id="compare-dialog" class="book-dialog compare-dialog" aria-labelledby="compare-title"><header class="book-dialog-header"><div><p class="eyebrow">SIDE BY SIDE</p><h2 id="compare-title">真实案例对比</h2></div><button type="button" class="book-close" data-close-dialog aria-label="关闭对比台">×</button></header><p class="book-intro">并排看同类元素的不同处理。每列可切换已有截图；元素标签来自人工分类，并非自动测量。</p><div id="compare-common" class="compare-common"></div><div id="compare-columns" class="compare-columns"></div><h3 class="matrix-title">按基本元素拆开比较</h3><div class="compare-matrix-wrap"><table id="compare-matrix"></table></div></dialog>
<dialog id="library-dialog" class="book-dialog library-dialog" aria-labelledby="library-title"><header class="book-dialog-header"><div><p class="eyebrow">YOUR REFERENCE SHELF</p><h2 id="library-title">我的灵感夹 <span id="library-total"></span></h2></div><button type="button" class="book-close" data-close-dialog aria-label="关闭灵感夹">×</button></header>
<div class="library-tools"><label>搜索收藏<input type="search" id="library-search" placeholder="案例名称、分组或自己的笔记"></label><div class="book-actions"><button type="button" data-open-compare>对比已选案例</button><button type="button" id="library-markdown">导出 Markdown</button><button type="button" id="library-backup">备份 JSON</button><button type="button" id="library-import-button">导入备份</button><input type="file" id="library-import" accept="application/json,.json" hidden></div></div><p class="library-persistence" id="library-persistence">收藏与笔记保存在当前浏览器。导出备份后，可在其他浏览器或项目位置恢复。</p>
<div class="library-layout"><aside><h3>按项目分组</h3><div id="library-folders"></div><form id="library-folder-form"><label for="library-new-folder">新建分组</label><div><input id="library-new-folder" maxlength="40" placeholder="如：个人主页" required><button type="submit" aria-label="创建分组">＋</button></div></form><button type="button" id="library-rename-folder" hidden>重命名当前分组</button><button type="button" id="library-delete-folder" hidden>删除分组，收藏移至未分组</button></aside><section id="library-items" class="library-items" aria-label="收藏案例"></section></div></dialog>`;
  return {html,data:{cases,styles:styles.map(({id,name})=>({id,name})),elements:elements.map(({id,name,family})=>({id,name,family})),version:1}};
};
