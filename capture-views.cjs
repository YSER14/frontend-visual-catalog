/*
 * 补充案例多视图：真实手机视口、同站内页，以及能确认展开的导航状态。
 * 先打开 playwright-cli -s=case-views open，再运行：
 * node capture-views.cjs <playwright-cli.js 绝对路径> [起始序号] [数量]
 * 不覆盖原有截图；成功记录放 case-views.json，失败记录放 view-capture-errors.json。
 * 自动采集后仍需用 contact-sheet.py --views 复核；动画加载页、地区与 Cookie 遮挡不能仅靠文本检测排除。
 */
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const cli = process.argv[2];
if (!cli || !fs.existsSync(cli)) throw Error('需要有效的 Playwright CLI 路径');
const cases = JSON.parse(fs.readFileSync(path.join(__dirname,'cases.json'),'utf8'));
const start = Number(process.argv[3] || 0);
const count = Number(process.argv[4] || cases.length);
const folder = path.join(__dirname,'views');
const resultFile = path.join(__dirname,'case-views.json');
const errorFile = path.join(__dirname,'view-capture-errors.json');
fs.mkdirSync(folder,{recursive:true});
const innerIds = new Set([1,2,4,5,7,9,10,11,12,13,14,17,18,20,22,25,26,28,30,32,33,34,35,36,37,38,39,40,41,47,48,62,63,64,65,66,67,79,80,85,86]);
const read = file => fs.existsSync(file) ? JSON.parse(fs.readFileSync(file,'utf8')) : [];
const save = (file, data) => { fs.writeFileSync(file+'.tmp',JSON.stringify(data,null,2)); fs.renameSync(file+'.tmp',file); };
for (let offset=start;offset<Math.min(cases.length,start+count);offset+=2) {
  const batch=cases.slice(offset,Math.min(offset+2,start+count)).map(item=>({...item,inner:innerIds.has(Number(item.id.split('-')[0]))}));
  const code=`async (page) => {
    return await Promise.all(${JSON.stringify(batch)}.map(async item => {
      const tab=await page.context().newPage();
      const records=[], errors=[];
      await tab.emulateMedia({reducedMotion:'reduce'});
      async function visit(url,viewport) {
        await tab.setViewportSize(viewport);
        let status=null;
        try { const response=await tab.goto(url,{waitUntil:'domcontentloaded',timeout:18000}); status=response?.status()||null; }
        catch(error) { errors.push({caseId:item.id,url,message:error.message.split('\\n')[0]}); }
        await tab.waitForLoadState('load',{timeout:3000}).catch(()=>{});
        await tab.waitForTimeout(item.id==='64-shadcn-admin'?6500:1800);
        const body=await tab.locator('body').innerText({timeout:2500}).catch(()=>'');
        const title=await tab.title().catch(()=>'');
        const blocked=/(just a moment|access denied|verify you are human|checking your browser|security verification|cf-browser-verification)/i.test(title+' '+body.slice(0,900));
        if(status>=400||blocked||(!body.trim()&&!await tab.locator('canvas').count())) { errors.push({caseId:item.id,url,status,message:'页面不可用于参考截图：'+title}); return null; }
        return {status,title,body};
      }
      async function capture(kind,label,meta,extra={}) {
        const id=item.id+'-'+kind;
        const filename=id+'.jpg';
        await tab.screenshot({path:${JSON.stringify(folder + path.sep)}+filename,type:'jpeg',quality:84,animations:'disabled',timeout:40000});
        records.push({id,caseId:item.id,kind,label,requestedUrl:item.url,finalUrl:tab.url(),title:meta.title,status:meta.status,screenshot:'views/'+filename,capturedAt:new Date().toISOString(),viewport:tab.viewportSize(),reducedMotion:true,textLength:meta.body.length,...extra});
      }
      try {
        const mobile=await visit(item.url,{width:390,height:844});
        if(mobile) {
          await capture('mobile','手机视口',mobile);
          const menus=await tab.locator('button').evaluateAll(buttons=>buttons.map(button=>({label:button.getAttribute('aria-label')||button.textContent.trim(),expanded:button.getAttribute('aria-expanded'),visible:!!(button.offsetWidth||button.offsetHeight)})).filter(button=>button.visible&&button.label.length<55&&/^(open |toggle |close )?(main |mobile )?(menu|navigation)$|打开菜单|展开菜单|菜单|主导航/i.test(button.label)&&button.expanded!=='true'));
          if(menus.length) {
            const menu=tab.getByRole('button',{name:menus[0].label,exact:true}).first();
            const before=await tab.locator('body').innerText();
            await menu.click({timeout:1800}).catch(()=>{});
            await tab.waitForTimeout(1200);
            const after=await tab.locator('body').innerText();
            const expanded=await menu.getAttribute('aria-expanded').catch(()=>null);
            const controls=await menu.getAttribute('aria-controls').catch(()=>null);
            const controlledVisible=controls?await tab.locator('[id='+JSON.stringify(controls)+']').isVisible().catch(()=>false):false;
            if(expanded==='true'||(controlledVisible&&after.length>before.length+35)) await capture('state','手机导航展开',{...mobile,body:after},{interaction:'点击导航按钮：'+menus[0].label});
          }
          if(item.inner) {
            const links=await tab.locator('a[href]').evaluateAll(links=>links.map(link=>({href:link.href,text:(link.textContent||'').trim()})));
            const home=new URL(tab.url());
            const candidate=links.filter(link=>{try{const url=new URL(link.href);return url.origin===home.origin&&url.pathname!==home.pathname&&!/login|signin|sign-up|signup|checkout|cart|account|auth|logout|download|privacy|cookie|legal|terms|policies|\.zip|\.pdf/i.test(url.pathname)&&/pricing|features|about|guide|docs|documentation|changelog|work|projects|products|learn|stories|articles|介绍|文档|指南|关于|产品/i.test(link.text+' '+url.pathname);}catch{return false;}}).sort((a,b)=>Number(/pricing|about|guide|features|介绍|指南/.test(b.text+' '+b.href))-Number(/pricing|about|guide|features|介绍|指南/.test(a.text+' '+a.href)))[0];
            if(candidate) {
              const inner=await visit(candidate.href,{width:1440,height:1000});
              if(inner) await capture('inner','同站内页',inner,{requestedUrl:candidate.href,linkText:candidate.text.slice(0,100)});
            } else {
              const desktop=await visit(item.url,{width:1440,height:1000});
              if(desktop&&await tab.evaluate(()=>document.documentElement.scrollHeight>innerHeight+500)) {
                await tab.evaluate(()=>scrollTo(0,Math.min(850,document.documentElement.scrollHeight-innerHeight)));
                await tab.waitForTimeout(500);
                await capture('section','首页内容区',desktop,{scrollY:await tab.evaluate(()=>scrollY)});
              }
            }
          }
        }
      } catch(error) { errors.push({caseId:item.id,message:error.message.split('\\n')[0]}); }
      finally { await tab.close(); }
      return {records,errors};
    }));
  }`;
  const codeFile=path.join(__dirname,'.capture-views-batch.js');
  fs.writeFileSync(codeFile,code);
  const run=spawnSync(process.execPath,[cli,'-s=case-views','run-code','--filename',codeFile],{encoding:'utf8',timeout:180000,maxBuffer:4*1024*1024,windowsHide:true});
  const match=(run.stdout||'').match(/### Result\s*\n([\s\S]*?)\n### /);
  if(!match){console.log('批次失败 '+offset+': '+(run.stdout||run.stderr||'').slice(0,500));continue;}
  const results=new Map(read(resultFile).map(record=>[record.id,record]));
  const errors=read(errorFile);
  for(const batchResult of JSON.parse(match[1])) {
    for(const record of batchResult.records) { results.set(record.id,record); console.log(record.id+' | '+record.status+' | '+record.title.slice(0,65)); }
    errors.push(...batchResult.errors);
  }
  save(resultFile,[...results.values()]);
  save(errorFile,errors);
  console.log('进度 '+Math.min(offset+2,cases.length)+'/'+cases.length+'，已保存 '+results.size+' 个补充视图');
}
const temporary=path.join(__dirname,'.capture-views-batch.js');
if(fs.existsSync(temporary)) fs.unlinkSync(temporary);
