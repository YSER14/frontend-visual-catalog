/*
 * 案例精读、对比与个人灵感夹。数据由 casebook.cjs 嵌入，不请求远端接口。
 * 案例入口：casebook.open('01-linear')；分组和笔记保存在当前浏览器 localStorage。
 * JSON 备份可迁移个人数据；存储不可用时明确提示，并保留本页编辑供导出。
 */
const casebook = (() => {
  const data = JSON.parse(document.getElementById('casebook-data').textContent);
  const cases = new Map(data.cases.map(item=>[item.id,item]));
  const elements = new Map(data.elements.map(item=>[item.id,item]));
  const styles = new Map(data.styles.map(item=>[item.id,item]));
  const key = 'frontend-atlas-library-v1';
  const detail = document.getElementById('case-dialog');
  const compare = document.getElementById('compare-dialog');
  const library = document.getElementById('library-dialog');
  let storageAvailable = true;
  let unreadableStorage = '';
  let store = readStore();
  let currentCase;
  let currentView;
  let currentFolder = 'all';
  let selectedMark = 0;
  let detailPushedHistory = false;
  let toastTimer;
  const comparisonViews = new Map();
  const dialogStack = []; // 原生弹窗的打开顺序可能与 DOM 顺序不同。

  function validateStore(value) {
    if (!value || value.version !== 1 || !Array.isArray(value.folders) || !value.entries || typeof value.entries !== 'object' || Array.isArray(value.entries)) throw Error('备份格式或版本不正确');
    const folders=[];
    for(const folder of value.folders) {
      if(!folder || !/^[a-zA-Z0-9_-]{1,80}$/.test(folder.id) || typeof folder.name!=='string' || !folder.name.trim() || folder.name.length>40) throw Error('分组内容不正确');
      if(!folders.some(item=>item.id===folder.id)) folders.push({id:folder.id,name:folder.name.trim()});
    }
    if(!folders.some(folder=>folder.id==='inbox')) folders.unshift({id:'inbox',name:'未分组'});
    const entries={};
    for(const [id,entry] of Object.entries(value.entries)) {
      if(!/^\d{2}-[a-z0-9-]+$/.test(id) || !entry || typeof entry.note!=='string' || entry.note.length>20000) throw Error('收藏或笔记格式不正确');
      const item=cases.get(id);
      const url=item?.url || (typeof entry.url==='string'&&/^https?:\/\//.test(entry.url)?entry.url:'');
      entries[id]={saved:entry.saved!==false,folderId:folders.some(folder=>folder.id===entry.folderId)?entry.folderId:'inbox',note:entry.note,name:item?.name||String(entry.name||id),url,updatedAt:String(entry.updatedAt||'')};
    }
    return {version:1,folders,entries,compare:[...new Set(Array.isArray(value.compare)?value.compare:[])].filter(id=>cases.has(id)).slice(0,3)};
  }

  function readStore() {
    try {
      const raw=localStorage.getItem(key);
      if(!raw) return {version:1,folders:[{id:'inbox',name:'未分组'}],entries:{},compare:[]};
      try { return validateStore(JSON.parse(raw)); }
      catch { unreadableStorage=raw; storageAvailable=false; return {version:1,folders:[{id:'inbox',name:'未分组'}],entries:{},compare:[]}; }
    } catch { storageAvailable=false; return {version:1,folders:[{id:'inbox',name:'未分组'}],entries:{},compare:[]}; }
  }

  function mutate(change) {
    if(storageAvailable) { // 每次修改前读取最新值，避免另一个标签页刚写入的收藏被旧副本覆盖。
      try { const raw=localStorage.getItem(key); if(raw) store=validateStore(JSON.parse(raw)); }
      catch { storageAvailable=false; }
    }
    change(store);
    try { if(storageAvailable) localStorage.setItem(key,JSON.stringify(store)); }
    catch { storageAvailable=false; }
    updateControls();
    return storageAvailable;
  }

  function entryFor(id,state=store) {
    const item=cases.get(id);
    if(!state.entries[id]) state.entries[id]={saved:false,folderId:'inbox',note:'',name:item.name,url:item.url,updatedAt:''};
    return state.entries[id];
  }

  function editEntry(id,change) {
    return mutate(state=>{const entry=entryFor(id,state);change(entry);entry.updatedAt=new Date().toISOString();});
  }

  function toast(message) {
    const host=document.getElementById('book-toast');
    const activeDialog=dialogStack.filter(dialog=>dialog.open).at(-1);
    (activeDialog||document.body).append(host); // 提示跟随顶层弹窗，否则会被原生 dialog 的遮罩盖住。
    clearTimeout(toastTimer);
    host.textContent=message;
    host.hidden=false;
    toastTimer=setTimeout(()=>{host.hidden=true;},3800);
  }

  function button(text,attributes={}) {
    const control=document.createElement('button');
    control.type='button'; control.textContent=text;
    for(const [name,value] of Object.entries(attributes)) control.setAttribute(name,value);
    return control;
  }

  function showDialog(dialog) {
    if(!dialog.open) {
      dialog.returnTo=document.activeElement;dialog.showModal();
      const previous=dialogStack.indexOf(dialog);if(previous>=0)dialogStack.splice(previous,1);
      dialogStack.push(dialog);
    }
    document.body.classList.add('book-modal-open');
  }

  function folderOptions(select,selected) {
    select.replaceChildren(...store.folders.map(folder=>new Option(folder.name,folder.id)));
    select.value=selected;
  }

  function updateControls() {
    const total=Object.values(store.entries).filter(entry=>entry.saved).length;
    for(const count of document.querySelectorAll('[data-library-count]')) count.textContent=total;
    for(const control of document.querySelectorAll('[data-toggle-save]')) {
      const saved=!!store.entries[control.dataset.toggleSave]?.saved;
      if(!control.hasAttribute('data-save-removal'))control.textContent=saved?'★ 已收藏':'☆ 收藏';
      control.setAttribute('aria-pressed',String(saved));
    }
    for(const control of document.querySelectorAll('[data-toggle-compare]')) {
      const selected=store.compare.includes(control.dataset.toggleCompare);
      if(!control.hasAttribute('data-compare-removal'))control.textContent=selected?'✓ 已选对比':'＋ 对比';
      control.setAttribute('aria-pressed',String(selected));
    }
    for(const control of document.querySelectorAll('[data-open-compare]')) control.disabled=store.compare.length<2;
    const tray=document.getElementById('compare-tray');
    tray.hidden=!store.compare.length;
    document.getElementById('compare-tray-count').textContent=store.compare.length+'/3';
    const picked=document.getElementById('compare-picked');
    picked.replaceChildren(...store.compare.map(id=>button(cases.get(id).name+' ×',{'data-toggle-compare':id,'aria-label':'移除对比：'+cases.get(id).name})));
    document.getElementById('library-persistence').textContent=storageAvailable
      ? '收藏与笔记保存在当前浏览器。导出备份后，可在其他浏览器或项目位置恢复。'
      : '当前浏览器无法持久保存，修改仅保留在本页。请先备份 JSON；原有异常数据不会被覆盖。';
  }

  function toggleSaved(id) {
    const wasSaved=!!store.entries[id]?.saved;
    const saved=editEntry(id,entry=>{entry.saved=!entry.saved;});
    toast(wasSaved?'已移出收藏，原笔记仍保留。':(saved?'已收进灵感夹。':'已收进本页灵感夹，请导出备份。'));
    if(library.open) renderLibrary();
  }

  function toggleCompare(id) {
    if(!store.compare.includes(id)&&store.compare.length>=3){toast('一次最多比较三个案例，请先移除一个。');return;}
    mutate(state=>{state.compare=state.compare.includes(id)?state.compare.filter(value=>value!==id):[...state.compare,id];});
    if(compare.open) { if(store.compare.length>=2) renderComparison();else compare.close(); }
  }

  // --- 原图上的标注与右侧说明互相定位；不同截图不沿用错误的坐标 ---
  function chooseMark(index) {
    selectedMark=index;
    document.getElementById('study-show-marks').checked=true;
    document.getElementById('study-marks').hidden=false;
    for(const control of document.querySelectorAll('[data-study-mark]')) control.setAttribute('aria-pressed',String(Number(control.dataset.studyMark)===index));
    const target=document.querySelector('.study-note-item[data-note-index="'+index+'"]');
    if(target) target.classList.add('is-read');
  }

  function renderAnnotations() {
    const host=document.getElementById('study-notes');
    const marks=document.getElementById('study-marks');
    host.replaceChildren(); marks.replaceChildren();
    const annotations=currentView.kind==='desktop'?currentCase.annotations:[];
    document.getElementById('study-show-marks').disabled=!annotations.length;
    marks.hidden=!document.getElementById('study-show-marks').checked;
    if(!annotations.length) {
      const note=document.createElement('p');note.className='study-general';
      note.textContent=currentView.kind==='desktop'?'这张原图的逐点说明待补充。':'这个补充视图尚未逐点标注，可切回桌面原图查看精读，或结合整体观察比较。';
      const observation=document.createElement('p');observation.textContent=currentCase.study;
      host.append(note,observation);return;
    }
    annotations.forEach((note,index)=>{
      const area=button(String(index+1),{'data-study-mark':index,'aria-label':'观察点 '+(index+1)+'：'+note.title});
      area.className='study-hotspot';
      const [x,y,w,h]=note.rect;
      Object.assign(area.style,{left:x+'%',top:y+'%',width:w+'%',height:h+'%'});
      const number=document.createElement('span');number.textContent=index+1;area.replaceChildren(number);
      marks.append(area);
      const article=document.createElement('article');article.className='study-note-item';article.dataset.noteIndex=index;
      const title=button(String(index+1).padStart(2,'0')+' / '+note.title,{'data-study-mark':index});
      const explanation=document.createElement('p');explanation.textContent=note.description;
      const element=button(elements.get(note.element).name+' ↗',{'data-jump-element':note.element});element.className='study-element-link';
      article.append(title,explanation,element);host.append(article);
    });
    chooseMark(Math.min(selectedMark,annotations.length-1));
  }

  function renderView(id,updateRoute=true) {
    currentView=currentCase.views.find(view=>view.id===id)||currentCase.views[0];
    document.getElementById('study-views').replaceChildren(...currentCase.views.map(view=>{
      const control=button(view.label,{'data-study-view':view.id,'aria-pressed':String(view.id===currentView.id)});
      return control;
    }));
    const image=document.getElementById('study-image');
    image.src=currentView.screenshot; image.alt=currentCase.name+' · '+currentView.label;
    image.width=currentView.viewport.width;image.height=currentView.viewport.height;
    document.getElementById('study-canvas').style.maxWidth=currentView.viewport.width+'px';
    document.getElementById('study-original').href=currentView.screenshot;
    document.getElementById('study-source').href=currentView.finalUrl||currentCase.url;
    document.getElementById('study-source').textContent=currentView.kind==='desktop'?'访问原站 ↗':'访问当前页面 ↗';
    const date=new Date(currentView.capturedAt).toLocaleString('zh-CN',{timeZone:'Asia/Shanghai',hour12:false});
    document.getElementById('study-view-meta').textContent=currentView.viewport.width+' × '+currentView.viewport.height+' · '+date+'（上海）'+(currentView.interaction?' · '+currentView.interaction:'')+(currentView.scrollY?' · 页面滚动 '+currentView.scrollY+'px':'');
    const missing=[];
    if(!currentCase.views.some(view=>view.kind==='mobile'))missing.push('手机视口');
    if(!currentCase.views.some(view=>['inner','section'].includes(view.kind)))missing.push('内页 / 内容区');
    const gap=document.getElementById('study-view-gap');gap.hidden=!missing.length;
    gap.textContent='暂缺可用截图：'+missing.join('、')+'。已有视图均为实际访问截图。';
    renderAnnotations();
    if(updateRoute){const parameters=new URLSearchParams(location.hash.slice(1));parameters.set('case',currentCase.id);parameters.set('shot',currentView.id);history.replaceState(null,'','#'+parameters);}
  }

  function openDetail(id,viewId,writeRoute=true) {
    if(!cases.has(id))return;
    const alreadyOpen=detail.open;
    if(alreadyOpen&&compare.open){compare.returnTo=null;compare.close();}
    currentCase=cases.get(id);selectedMark=0;
    document.getElementById('study-title').textContent=currentCase.name;
    document.getElementById('study-summary').textContent=currentCase.study;
    document.getElementById('study-source').href=currentCase.url;
    document.getElementById('study-save').dataset.toggleSave=id;
    document.getElementById('study-compare').dataset.toggleCompare=id;
    const entry=store.entries[id];
    folderOptions(document.getElementById('study-folder'),entry?.folderId||'inbox');
    document.getElementById('study-note').value=entry?.note||'';
    document.getElementById('study-note-status').textContent=storageAvailable?'编辑笔记或分组后自动收藏，保存在当前浏览器。':'本次笔记仅保存在当前页面，请导出备份。';
    if(writeRoute) {
      const parameters=new URLSearchParams(location.hash.slice(1));parameters.set('case',id);
      history[alreadyOpen?'replaceState':'pushState'](null,'','#'+parameters);
      if(!alreadyOpen)detailPushedHistory=true;
    }
    renderView(viewId||currentCase.views[0].id,writeRoute);
    updateControls();showDialog(detail);
  }

  // --- 对比用真实截图和人工元素标签，不假装测量了原站的字体或色值 ---
  function renderComparison() {
    const selected=store.compare.map(id=>cases.get(id));
    const commonElements=selected[0].elements.filter(id=>selected.every(item=>item.elements.includes(id)));
    const commonStyles=selected[0].styles.filter(id=>selected.every(item=>item.styles.includes(id)));
    document.getElementById('compare-common').textContent=(commonStyles.length?'共同风格：'+commonStyles.map(id=>styles.get(id).name).join('、')+'。 ':'')+(commonElements.length?'共同元素：'+commonElements.map(id=>elements.get(id).name).join('、')+'。':'这些案例没有相同的显著元素标签，可观察它们如何用不同方式组织信息。');
    const columns=document.getElementById('compare-columns');columns.replaceChildren();columns.style.setProperty('--compare-count',selected.length);
    for(const item of selected) {
      const column=document.createElement('article');column.className='comparison-column';
      const heading=document.createElement('div');heading.className='comparison-heading';
      const title=document.createElement('h3');title.textContent=item.name;
      heading.append(title,button('移除',{'data-toggle-compare':item.id,'data-compare-removal':'','aria-label':'移除对比：'+item.name}));
      const select=document.createElement('select');select.setAttribute('aria-label',item.name+'的截图视图');
      select.replaceChildren(...item.views.map(view=>new Option(view.label,view.id)));
      select.value=comparisonViews.get(item.id)||item.views[0].id;
      const preview=button('',{'data-open-case':item.id});preview.className='comparison-image';
      const image=document.createElement('img');preview.append(image);
      const meta=document.createElement('p');meta.className='view-meta';
      const changeView=()=>{const view=item.views.find(view=>view.id===select.value);comparisonViews.set(item.id,view.id);image.src=view.screenshot;image.alt=item.name+' · '+view.label;preview.dataset.openShot=view.id;meta.textContent=view.viewport.width+' × '+view.viewport.height+' · '+view.label;};
      select.addEventListener('change',changeView);changeView();
      const observation=document.createElement('p');observation.className='comparison-observation';observation.textContent=item.study;
      const actions=document.createElement('div');actions.className='book-actions';actions.append(button('收藏',{'data-toggle-save':item.id}));
      const original=document.createElement('a');original.textContent='访问原站 ↗';original.href=item.url;original.target='_blank';original.rel='noopener noreferrer';actions.append(original);
      column.append(heading,select,preview,meta,observation,actions);columns.append(column);
    }
    const table=document.getElementById('compare-matrix');table.replaceChildren();
    const head=document.createElement('thead'),headRow=document.createElement('tr');
    for(const title of ['观察维度',...selected.map(item=>item.name)]){const cell=document.createElement('th');cell.scope='col';cell.textContent=title;headRow.append(cell);}head.append(headRow);table.append(head);
    const body=document.createElement('tbody');
    for(const family of [...new Set(data.elements.map(item=>item.family))]) {
      const row=document.createElement('tr'),label=document.createElement('th');label.scope='row';label.textContent=family;row.append(label);
      for(const item of selected) {
        const cell=document.createElement('td');
        const labels=item.elements.filter(id=>elements.get(id).family===family);
        for(const id of labels){const tag=document.createElement('span');tag.textContent=elements.get(id).name;if(commonElements.includes(id))tag.className='is-common';cell.append(tag);}
        if(!labels.length){cell.textContent='未标记显著特征';cell.className='matrix-unmarked';}
        row.append(cell);
      }
      body.append(row);
    }
    table.append(body);updateControls();
  }

  function openComparison() {if(store.compare.length<2){toast('先选择至少两个案例。');return;}renderComparison();showDialog(compare);}

  // --- 灵感夹保留笔记与分组；取消收藏不会删除曾经写下的观察 ---
  function savedItems() {
    const query=document.getElementById('library-search').value.trim().toLowerCase();
    return Object.entries(store.entries).filter(([id,entry])=>entry.saved&&cases.has(id)&&(currentFolder==='all'||entry.folderId===currentFolder)&&(!query||[cases.get(id).name,entry.note,store.folders.find(folder=>folder.id===entry.folderId)?.name].join(' ').toLowerCase().includes(query))).sort((a,b)=>b[1].updatedAt.localeCompare(a[1].updatedAt));
  }

  function renderLibrary() {
    const total=Object.values(store.entries).filter(entry=>entry.saved).length;
    document.getElementById('library-total').textContent=total;
    const folders=document.getElementById('library-folders');
    const definitions=[{id:'all',name:'全部收藏'},...store.folders];
    folders.replaceChildren(...definitions.map(folder=>{
      const count=Object.values(store.entries).filter(entry=>entry.saved&&(folder.id==='all'||entry.folderId===folder.id)).length;
      return button(folder.name+' · '+count,{'data-library-folder':folder.id,'aria-pressed':String(currentFolder===folder.id)});
    }));
    document.getElementById('library-rename-folder').hidden=['all','inbox'].includes(currentFolder);
    document.getElementById('library-delete-folder').hidden=['all','inbox'].includes(currentFolder);
    const host=document.getElementById('library-items');host.replaceChildren();
    for(const [id,entry] of savedItems()) {
      const item=cases.get(id),card=document.createElement('article');card.className='saved-case';
      const preview=button('',{'data-open-case':id});preview.className='saved-preview';const image=document.createElement('img');image.src=item.views[0].screenshot;image.alt=item.name+'截图';image.loading='lazy';preview.append(image);
      const content=document.createElement('div');content.className='saved-content';
      const title=document.createElement('h3');title.append(button(item.name+' ↗',{'data-open-case':id}));
      const select=document.createElement('select');select.setAttribute('aria-label',item.name+'的分组');folderOptions(select,entry.folderId);
      select.addEventListener('change',()=>{editEntry(id,record=>{record.folderId=select.value;});renderLibrary();});
      const label=document.createElement('label');label.textContent='我的观察';
      const note=document.createElement('textarea');note.rows=3;note.maxLength=10000;note.value=entry.note;note.placeholder='记下可以借鉴的做法……';note.setAttribute('aria-label',item.name+'的观察笔记');
      note.addEventListener('input',()=>{editEntry(id,record=>{record.note=note.value;});});label.append(note);
      const actions=document.createElement('div');actions.className='book-actions';actions.append(button('对比',{'data-toggle-compare':id}),button('移出收藏',{'data-toggle-save':id,'data-save-removal':''}));
      content.append(title,select,label,actions);card.append(preview,content);host.append(card);
    }
    if(!host.childElementCount){const empty=document.createElement('div');empty.className='library-empty';const heading=document.createElement('h3');heading.textContent=document.getElementById('library-search').value?'没有找到这条收藏':'先收下一个喜欢的案例';const text=document.createElement('p');text.textContent='在案例卡片或精读页点击“收藏”，就能在这里分组、写笔记和导出。';empty.append(heading,text);host.append(empty);}
    updateControls();
  }

  function openLibrary() {renderLibrary();showDialog(library);}

  function download(name,text,type) {
    const url=URL.createObjectURL(new Blob([text],{type}));
    const link=document.createElement('a');link.href=url;link.download=name;document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),3000);
  }

  function exportMarkdown() {
    const folder=currentFolder==='all'?'全部收藏':store.folders.find(folder=>folder.id===currentFolder)?.name;
    const lines=['# 前端灵感夹 · '+folder,'',new Date().toLocaleString('zh-CN',{timeZone:'Asia/Shanghai',hour12:false})+'（上海）',''];
    for(const [id,entry] of savedItems()) {
      const item=cases.get(id);
      lines.push('## '+item.name,'','- 原站：'+item.url,'- 分组：'+store.folders.find(folder=>folder.id===entry.folderId)?.name,'- 风格：'+item.styles.map(id=>styles.get(id).name).join(' / '),'- 基本元素：'+item.elements.map(id=>elements.get(id).name).join(' / '),'',item.study,'','### 我的观察','',entry.note||'尚未填写。','');
    }
    download('frontend-inspiration.md',lines.join('\n'),'text/markdown;charset=utf-8');toast('已导出当前分组及搜索结果。');
  }

  function exportBackup() {
    download('frontend-inspiration-backup.json',JSON.stringify({...store,schema:'frontend-atlas-library',exportedAt:new Date().toISOString(),...(unreadableStorage?{unreadableStorage}:{})},null,2),'application/json');
  }

  function mergeBackup(incoming) {
    const imported=validateStore(incoming);
    mutate(state=>{
      for(const folder of imported.folders)if(!state.folders.some(item=>item.id===folder.id))state.folders.push(folder);
      for(const [id,entry] of Object.entries(imported.entries)) {
        const existing=state.entries[id];
        if(!existing){state.entries[id]=entry;continue;}
        if(entry.note&&!existing.note.includes(entry.note))existing.note=existing.note?existing.note+'\n\n—— 导入的观察 ——\n'+entry.note:entry.note;
        existing.saved=existing.saved||entry.saved;
        existing.updatedAt=new Date().toISOString();
      }
    });
    renderLibrary();toast('备份已合并；已有笔记保留，不同的观察追加在原笔记后。');
  }

  document.addEventListener('click',event=>{
    const control=event.target.closest('[data-open-case],[data-toggle-save],[data-toggle-compare],[data-open-compare],[data-open-library],[data-clear-compare],[data-close-dialog],[data-study-view],[data-study-mark],[data-jump-element],[data-library-folder]');
    if(!control)return;
    event.preventDefault();
    if(control.dataset.openCase)openDetail(control.dataset.openCase,control.dataset.openShot);
    else if(control.dataset.toggleSave)toggleSaved(control.dataset.toggleSave);
    else if(control.dataset.toggleCompare)toggleCompare(control.dataset.toggleCompare);
    else if(control.hasAttribute('data-open-compare'))openComparison();
    else if(control.hasAttribute('data-open-library'))openLibrary();
    else if(control.hasAttribute('data-clear-compare')){mutate(state=>{state.compare=[];});if(compare.open)compare.close();}
    else if(control.hasAttribute('data-close-dialog'))control.closest('dialog').close();
    else if(control.dataset.studyView)renderView(control.dataset.studyView);
    else if(control.dataset.studyMark!==undefined)chooseMark(Number(control.dataset.studyMark));
    else if(control.dataset.jumpElement){for(const dialog of [detail,compare,library]){dialog.returnTo=null;if(dialog.open)dialog.close();}detailPushedHistory=false;choose('elements',control.dataset.jumpElement);}
    else if(control.dataset.libraryFolder){resetFolderForm();currentFolder=control.dataset.libraryFolder;renderLibrary();}
  });
  document.getElementById('study-show-marks').addEventListener('change',event=>{document.getElementById('study-marks').hidden=!event.target.checked;});
  document.getElementById('study-folder').addEventListener('change',event=>{editEntry(currentCase.id,entry=>{entry.folderId=event.target.value;entry.saved=true;});});
  document.getElementById('study-note').addEventListener('input',event=>{
    const persisted=editEntry(currentCase.id,entry=>{entry.note=event.target.value;entry.saved=true;});
    document.getElementById('study-note-status').textContent=persisted?'已自动保存到当前浏览器。':'当前仅保存在本页，请导出备份。';
  });
  document.getElementById('library-search').addEventListener('input',renderLibrary);
  function resetFolderForm() {
    const input=document.getElementById('library-new-folder');
    delete input.dataset.rename;input.value='';
    document.querySelector('#library-folder-form>label').textContent='新建分组';
  }
  document.getElementById('library-folder-form').addEventListener('submit',event=>{
    event.preventDefault();const input=document.getElementById('library-new-folder');const name=input.value.trim();
    if(!name||name.length>40){toast('分组名称需要 1–40 个字。');return;}
    const existing=store.folders.find(folder=>folder.name===name);
    if(input.dataset.rename) {
      const id=input.dataset.rename;
      if(existing&&existing.id!==id){toast('已经有同名分组。');return;}
      mutate(state=>{const folder=state.folders.find(folder=>folder.id===id);if(folder)folder.name=name;});currentFolder=id;
      delete input.dataset.rename;document.querySelector('#library-folder-form>label').textContent='新建分组';
    }else if(existing){currentFolder=existing.id;}else{currentFolder='folder-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,6);mutate(state=>{state.folders.push({id:currentFolder,name});});}
    input.value='';renderLibrary();
  });
  document.getElementById('library-rename-folder').addEventListener('click',()=>{
    const input=document.getElementById('library-new-folder');input.value=store.folders.find(folder=>folder.id===currentFolder).name;input.focus();
    document.querySelector('#library-folder-form>label').textContent='重命名分组';
    toast('填写新名称后按 Enter；当前分组会重命名。');input.dataset.rename=currentFolder;
  });
  document.getElementById('library-delete-folder').addEventListener('click',()=>{
    const removed=currentFolder;
    resetFolderForm();
    mutate(state=>{state.folders=state.folders.filter(folder=>folder.id!==removed);for(const entry of Object.values(state.entries))if(entry.folderId===removed)entry.folderId='inbox';});
    currentFolder='inbox';renderLibrary();toast('分组已删除，收藏和笔记已移至未分组。');
  });
  document.getElementById('library-markdown').addEventListener('click',exportMarkdown);
  document.getElementById('library-backup').addEventListener('click',exportBackup);
  document.getElementById('library-import-button').addEventListener('click',()=>document.getElementById('library-import').click());
  document.getElementById('library-import').addEventListener('change',async event=>{
    const file=event.target.files[0];if(!file)return;
    try{if(file.size>5*1024*1024)throw Error('备份文件超过 5MB');mergeBackup(JSON.parse(await file.text()));}
    catch(error){toast('未导入：'+error.message);}
    event.target.value='';
  });
  for(const dialog of [detail,compare,library]) {
    dialog.addEventListener('click',event=>{if(event.target!==dialog)return;const bounds=dialog.getBoundingClientRect();if(event.clientX<bounds.left||event.clientX>bounds.right||event.clientY<bounds.top||event.clientY>bounds.bottom)dialog.close();});
    dialog.addEventListener('close',()=>{
      document.body.classList.toggle('book-modal-open',!!document.querySelector('.book-dialog[open]'));
      if(dialog===detail){
        const parameters=new URLSearchParams(location.hash.slice(1));
        if(parameters.has('case')){if(detailPushedHistory)history.back();else{parameters.delete('case');parameters.delete('shot');history.replaceState(null,'','#'+parameters);}}
        detailPushedHistory=false;if(library.open)renderLibrary();
      }
      if(dialog.returnTo?.isConnected)dialog.returnTo.focus({preventScroll:true});
      else if(library.open)library.querySelector('.book-close').focus({preventScroll:true});
    });
  }
  const syncRoute=()=>{
    const parameters=new URLSearchParams(location.hash.slice(1)),id=parameters.get('case');
    if(cases.has(id))openDetail(id,parameters.get('shot'),false);
    else if(detail.open){detailPushedHistory=false;detail.close();}
  };
  window.addEventListener('popstate',syncRoute);window.addEventListener('hashchange',syncRoute);
  window.addEventListener('storage',event=>{if(event.key!==key)return;store=readStore();updateControls();if(library.open&&!library.contains(document.activeElement))renderLibrary();});
  const tray=document.getElementById('compare-tray');
  new ResizeObserver(()=>document.documentElement.style.setProperty('--compare-height',tray.hidden?'0px':(tray.getBoundingClientRect().height+20)+'px')).observe(tray);
  updateControls();syncRoute();
  return {open:openDetail,openLibrary,openComparison};
})();
