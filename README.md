# 前端视觉图录 · Frontend Visual Catalog

人工策展的**前端视觉案例库**：481 个真实网站、32 个风格方向、37 个基本元素，做成一个可筛选、可离线打开的静态站点。

它不是组件库，也不是灵感截图墙，而是一本**可检索的图录**——每张截图都带原站 URL、类型与用途、风格标签、元素标签和一段具体的观察说明，回答的是「别人这里具体是怎么做的」，而不是「这个好看」。

## 快速开始

不需要安装任何东西，也没有运行时依赖（`build.cjs` 只用 Node 内置模块）：

```bash
# 方式一：直接双击，file:// 下即可完整使用
index.html

# 方式二：本地起个静态服务（截图懒加载更顺）
npx serve .
```

在线入口：`index.html` · 统一风格小样 `index.html#view=lab&style=swiss` · 元素图鉴 `index.html#view=elements`

## 内容形态

| 视图 | 内容 |
| --- | --- |
| 风格画廊 | 32 个风格（4 组）定义卡 + 命中案例，多标签可叠加元素/用途/案例类型筛选 |
| 元素图鉴 | 37 个基本元素（9 组），本站自绘示意 + 观察点 + 命中案例 |
| 统一小样 | 同一张卡片按 32 个风格预设演绎，可调圆角/留白/过渡并导出 CSS |

筛选状态写入 URL hash，支持前进后退与深链。

## 目录

- `cases.json` `styles.json` `elements.json` — **事实源**（人工整理，481/32/37 条）
- `sections.json` `interactions.json` `industries.json` — 版块 / 交互 / 行业维度
- `capture-results.json` — 采集元数据（finalUrl / 状态 / 标题 / 访问时间）
- `build.cjs` — 生成器：4 份 JSON + 2 个模板模块 → `index.html` 与 4 份文档（同源派生，数字零漂移）
- `gallery.*` `style-lab.*` `casebook.*` — 画廊 / 小样 / 案例册的渲染层
- `capture.cjs` `capture-views.cjs` `save-current.cjs` `contact-sheet.py` — Playwright 采集与 QA 工具
- `docs/` — [`design-direction.md`](docs/design-direction.md) 站点外壳视觉方向建议、[`project-scan-report.md`](docs/project-scan-report.md) 项目扫描与工程化体检
- `screenshots/` `views/` — 481 张 1440×1000 主图 + 132 张视口细节图

## 许可与来源

代码与整理工作 MIT（见 `LICENSE`）。截图版权归各原站，按个人研究与离线浏览用途收录，不构成再授权——对外发布或商用需逐站评估。外部来源、许可与明确未使用的数据集全部记在 [`NOTICE.md`](NOTICE.md)。

---

> 以下内容由 `build.cjs` 从 JSON 事实源生成，改数据后运行 `node build.cjs` 即可重新派生；手工编辑会在下次构建时被覆盖。

## 案例目录：32 个风格方向，37 个基本元素，481 个案例

整理与截图日期：2026-10-25；外部源第 1 批：2026-10-27（Asia/Shanghai）。

[打开风格画廊](index.html) · [统一风格小样](index.html#view=lab&style=swiss) · [按基本元素找](index.html#view=elements) · [版块/交互/行业](taxonomy.md) · [基本元素说明](elements.md) · [覆盖情况与局限](coverage.md) · [案例数据](cases.json)

可以按风格或基本元素查找，并叠加另一维度、用途和案例类型。风格与元素都是多标签，一个案例可能在多个小节出现；以下不是市场流行度排名。仅保存原站 URL、截图、访问元数据与观察说明；外部源批次与许可见 NOTICE.md。

## 视觉语言

### 极简留白

通过少量元素、明确阅读顺序和大留白建立秩序。

识别点：少色少装饰；克制字号与字重；留白承担分组。

样本：211 例，其中 192 例实站/创意体验。白底不自动等于极简，要同时观察信息删减与层级。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Things · Cultured Code](https://culturedcode.com/things/)<br>https://culturedcode.com/things/ | 实站 · 产品与 SaaS | 观察任务管理应用如何用设备截图和简洁文案解释体验。 | [查看原图](screenshots/07-things.jpg) |
| [Vercel](https://vercel.com/)<br>https://vercel.com/ | 实站 · 开发者产品 | 观察黑白灰、细线和几何图形如何形成技术产品的品牌辨识度。 | [查看原图](screenshots/09-vercel.jpg) |
| [Resend](https://resend.com/)<br>https://resend.com/ | 实站 · 开发者产品 | 观察单一核心服务如何靠简练文案、示例和视觉主角讲清价值。 | [查看原图](screenshots/11-resend.jpg) |
| [Brittany Chiang](https://brittanychiang.com/)<br>https://brittanychiang.com/ | 实站 · 个人作品集 | 观察固定个人简介与可滚动履历区如何分工，以及文字对比与链接提示。 | [查看原图](screenshots/22-brittany-chiang.jpg) |
| [Paco Coursey](https://paco.me/)<br>https://paco.me/ | 实站 · 个人作品集 | 观察少量内容下的字体、行距、链接与留白，适合个人主页参考。 | [查看原图](screenshots/24-paco.jpg) |
| [Lee Robinson](https://leerob.com/)<br>https://leerob.com/ | 实站 · 个人作品集 | 观察个人简介、文章和项目如何在简短页面里形成清晰阅读顺序。 | [查看原图](screenshots/25-lee-robinson.jpg) |
| [Apple](https://www.apple.com/)<br>https://www.apple.com/ | 实站 · 消费品牌与电商 | 观察大幅产品图、简短标题和连续模块如何安排浏览与购买路径。 | [查看原图](screenshots/26-apple.jpg) |
| [Vue.js](https://cn.vuejs.org/)<br>https://cn.vuejs.org/ | 实站 · 文档与设计系统 | 观察技术文档首页的主张、学习入口与生态信息的组织。 | [查看原图](screenshots/36-vue.jpg) |
| [Naive UI](https://www.naiveui.com/)<br>https://www.naiveui.com/ | 实站 · 文档与设计系统 | 观察组件库首页的内容密度、主题切换与组件入口。 | [查看原图](screenshots/40-naive.jpg) |
| [shadcn-admin Demo](https://shadcn-admin.netlify.app/)<br>https://shadcn-admin.netlify.app/ | 后台演示 · 后台与工作台 | 观察真实后台演示中的侧栏、指标、图表和紧凑组件；不以营销页代替后台。 | [查看原图](screenshots/64-shadcn-admin.jpg) |
| [Evolve Private Wealth](https://evolveprivatewealth.com/)<br>https://evolveprivatewealth.com/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用极简留白、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/103-evolve-private-wealth.jpg) |
| [Wiemer](https://www.wiemer.store/)<br>https://www.wiemer.store/ | 实站 · 消费品牌与电商 | 观察 电商/零售 站点如何用极简留白、高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/111-wiemer.jpg) |
| [Onyx Restaurant Paris](https://restaurantonyx.com)<br>https://restaurantonyx.com | 实站 · 消费品牌与电商 | 观察 餐饮/食品饮料 站点如何用极简留白、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/118-onyx-restaurant-paris.jpg) |
| [Almada Label](https://almadalabel.com/)<br>https://almadalabel.com/ | 实站 · 消费品牌与电商 | 观察 时尚/美妆 站点如何用极简留白、高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/126-almada-label.jpg) |
| [Maison Des Elites](https://mdebeauty.com/)<br>https://mdebeauty.com/ | 实站 · 消费品牌与电商 | 观察 时尚/美妆 站点如何用极简留白、高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/127-maison-des-elites.jpg) |
| [Compass Pathways](https://www.compasspathways.com/)<br>https://www.compasspathways.com/ | 实站 · 品牌与机构 | 观察 医疗/健康 站点如何用极简留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/129-compass-pathways.jpg) |
| [Polpharma Biologics](https://www.polpharmabiologics.com/)<br>https://www.polpharmabiologics.com/ | 实站 · 品牌与机构 | 观察 医疗/健康 站点如何用极简留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/131-polpharma-biologics.jpg) |
| [montarville](https://montarville.ca/)<br>https://montarville.ca/ | 实站 · 品牌与机构 | 观察 政府/公共事业 站点如何用极简留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/143-montarville-1.jpg) |
| [AAT Architecten](https://www.aat-architecten.be/)<br>https://www.aat-architecten.be/ | 实站 · 创意工作室 | 观察 建筑/地产 站点如何用极简留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/149-aat-architecten.jpg) |
| [LPAS](https://lpas.com/)<br>https://lpas.com/ | 实站 · 创意工作室 | 观察 建筑/地产 站点如何用极简留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/151-lpas.jpg) |
| [Dopamine Studio](https://www.dopaminestudio.io/)<br>https://www.dopaminestudio.io/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用极简留白、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/161-dopamine-studio.jpg) |
| [Right Hemisphere](https://www.righthemisphere.studio/)<br>https://www.righthemisphere.studio/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/167-right-hemisphere-1.jpg) |
| [COVEO Music](https://coveomusic.com/)<br>https://coveomusic.com/ | 实站 · 内容与文化 | 观察 音乐/娱乐 站点如何用极简留白、插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/175-coveo-music-1.jpg) |
| [INHERITED BAND](https://inherited.band/)<br>https://inherited.band/ | 实站 · 内容与文化 | 观察 音乐/娱乐 站点如何用极简留白、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/176-inherited-band.jpg) |
| [Palace Skateboards](https://palaceskateboards.com/)<br>https://palaceskateboards.com/ | 实站 · 消费品牌与电商 | 观察 体育 站点如何用极简留白、高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/182-palace-skateboards.jpg) |
| [Reel Motion](https://reelmotion.fit/)<br>https://reelmotion.fit/ | 实站 · 消费品牌与电商 | 观察 体育 站点如何用极简留白、插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/183-reel-motion.jpg) |
| [Anthony Fu](https://antfu.me/)<br>https://antfu.me/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/187-antfu-me.jpg) |
| [Braydon Coyer](https://braydoncoyer.dev/)<br>https://braydoncoyer.dev/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/188-braydoncoyer-dev.jpg) |
| [Damian Watracz](https://watracz.com/)<br>https://watracz.com/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/189-watracz-com.jpg) |
| [David Darnes](https://darn.es)<br>https://darn.es | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/190-darn-es.jpg) |
| [Dejan Markovic](https://www.dejan.works)<br>https://www.dejan.works | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/191-www-dejan-works.jpg) |
| [George Francis](https://georgefrancis.dev)<br>https://georgefrancis.dev | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/192-georgefrancis-dev.jpg) |
| [Israel Mitolu](https://mitolu.dev)<br>https://mitolu.dev | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/193-mitolu-dev.jpg) |
| [Lee Robinson](https://leerob.io/)<br>https://leerob.io/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/194-leerob-io.jpg) |
| [Max Böck](https://mxb.dev)<br>https://mxb.dev | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/195-mxb-dev.jpg) |
| [Olaolu Olawuyi](https://olaolu.dev)<br>https://olaolu.dev | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/196-olaolu-dev.jpg) |
| [Ruben Kuipers](https://rubenkuipers.design/)<br>https://rubenkuipers.design/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/197-rubenkuipers-design.jpg) |
| [Second Ride](https://second-ride.de/en)<br>https://second-ride.de/en | 实站 · 消费品牌与电商 | 观察 汽车/交通 站点如何用极简留白、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/200-second-ride.jpg) |
| [IKONY](https://ikony.tv)<br>https://ikony.tv | 实站 · 内容与文化 | 左栏用一条细线隔开，塞进圆圈序号、粗体标题和 8px 密排正文；右侧让一枚正红圆形压住黑白半调照片，底部再横排一条照片带，全站只用红黑灰三色就把纪录片的分量做出来。 | [查看原图](screenshots/208-ikony.jpg) |
| [Goodgrowth](https://goodgrowth.com)<br>https://goodgrowth.com | 实站 · 个人作品集 | 整屏只放一枚渐变底上的 CD 和一行 INSERT DISC 小按钮，把千禧年的光盘启动界面搬进浏览器；说明文字全部压到 10px 等宽体贴边，让中间那一点成为唯一焦点。 | [查看原图](screenshots/209-goodgrowth.jpg) |
| [5051 — Punk Band](https://band5051.com/)<br>https://band5051.com/ | 实站 · 内容与文化 | 在近黑的底上只点一个描橙边的终端窗口，用等宽字、闪烁光标和 > 前缀把巡演信息写成命令行输出；连按钮都带提示符，一套字体一种橙色就立住了整个风格。 | [查看原图](screenshots/210-5051-punk-band.jpg) |
| [Rechroma](https://rechroma.com)<br>https://rechroma.com | 实站 · 工具型应用 | 把字标本身做成像素字并拉满通栏，灰度底上只留黑字、一行右下角副标题和一枚像素按钮；配色工具的首页反而先用没有颜色来强调字体形状。 | [查看原图](screenshots/211-rechroma.jpg) |
| [Calculated Camouflage](https://calculatedcamouflage.com/)<br>https://calculatedcamouflage.com/ | 创意体验 · 在线体验 | 标题用极细描边的超大字号压在左上角，右侧以黄绿红蓝四块叠色加半调网点还原装置里的光；正文缩到极小、按钮排成一行方括号，纯靠字号差建立层级。 | [查看原图](screenshots/213-calculated-camouflage.jpg) |
| [MATHILDE DE CHIARA • PORTFOLIO](https://www.mathildedechiara.com/)<br>https://www.mathildedechiara.com/ | 实站 · 个人作品集 | 把图片排成一条居中的竖向胶片带，左栏只放斜体 01/30 页码，右栏放分类清单和 DISPLAY MODE 开关；两侧极小的元信息把中间的图推到主角位置。 | [查看原图](screenshots/215-mathilde-de-chiara-portfol.jpg) |
| [Zitong Zhao's Website](https://zitongzhao.info/)<br>https://zitongzhao.info/ | 实站 · 个人作品集 | 导航被切成五格等分、姓名居中，正文只有两行居中的无衬线大字；下方作品以两块等宽图片并排，靠极简排布把观察与直觉这句宣言顶成主角。 | [查看原图](screenshots/216-zitong-zhao-s-website.jpg) |
| [The Shape of Intelligence](https://shapeofintelligence.com/)<br>https://shapeofintelligence.com/ | 创意体验 · 内容与文化 | 标题拆成两行超大无衬线字，让一枚液态金属 3D 形体从字间穿过、遮住笔画，第一眼先看到形状而不是文案；底部圆点选择器把长文拆成可切换的章节。 | [查看原图](screenshots/217-the-shape-of-intelligence.jpg) |
| [Cards & Coding](https://cards-and-coding.click/)<br>https://cards-and-coding.click/ | 创意体验 · 在线体验 | 首屏不放大标题，而是用五行左对齐的法文说明当主视觉，右侧斜放一张圆角色卡压住文字边缘；一张纸卡的位置和投影就破掉了标题居中加按钮的套路。 | [查看原图](screenshots/218-cards-coding.jpg) |
| [Gabriel Beaugonin](https://www.gabrielbeaugonin.com/)<br>https://www.gabrielbeaugonin.com/ | 实站 · 个人作品集 | 首屏只留姓名职衔、两个迷你按钮和一枚圆角项目缩略图，把作品集做成一个可左右翻的索引页；层级靠留白和圆角半径区分，几乎不用颜色。 | [查看原图](screenshots/219-gabriel-beaugonin.jpg) |
| [Kavieng Creative](https://www.kaviengcreative.com/)<br>https://www.kaviengcreative.com/ | 实站 · 个人作品集 | 用五列不等高的黑白缩略图铺满整屏，导航和社交链接缩到顶部一行 8px 小字；把作品多本身做成版式，第一眼先给信息量而不是单张图。 | [查看原图](screenshots/221-kavieng-creative.jpg) |
| [Wondermake Fonts](https://fonts.wondermake.xyz)<br>https://fonts.wondermake.xyz | 实站 · 创意工作室 | 首屏只有一枚居中的线稿徽记、两行说明和一个胶囊按钮，其余全部让给留白；底部把巨型字体标本切在折线处，用「看不全」提示继续往下滚。 | [查看原图](screenshots/224-wondermake-fonts.jpg) |
| [AQM²](https://aqm2.ai/)<br>https://aqm2.ai/ | 实站 · 产品与 SaaS | 把 COMING SOON 的字距拉到极大，再用五个同款 3D 立方体等距排开，视觉重心落在横向节奏而不是信息量；页脚只留一句定位语，克制到近乎空白。 | [查看原图](screenshots/225-aqm2.jpg) |
| [Sincro](https://sincro.es/en/us/)<br>https://sincro.es/en/us/ | 实站 · 品牌与机构 | 首屏左上角一个巨大的 Us 就占掉近半屏，右栏只放一张黑白照片和两行说明；导航按栏目竖排分组，把公司介绍页做成了目录页的节奏。 | [查看原图](screenshots/226-sincro.jpg) |
| [Direct Design Agency](https://wearedirect.co/)<br>https://wearedirect.co/ | 实站 · 创意工作室 | 左侧三分之一是整块平涂插画（红绿灯、路牌、贴纸），右侧留白只放三行粗体标题；顶部一条黑色导航压住整页宽度，把插画的亮色衬得更跳。 | [查看原图](screenshots/227-direct-design-agency.jpg) |
| [Halcyon Lighting](https://www.halcyon.co.nz/)<br>https://www.halcyon.co.nz/ | 实站 · 消费品牌与电商 | 整屏建筑实拍做底，Go Light. 用超大无衬线直接压在画面上并故意被裁切；左上角还放了一个 OFF 开关，把「灯」的体验做成可直接点的小控件。 | [查看原图](screenshots/228-halcyon-lighting.jpg) |
| [Bulbs Series](https://bulbs.simondupety.com/)<br>https://bulbs.simondupety.com/ | 实站 · 个人作品集 | 四角只放极小的导航，中间一组错落排列的小字像标签一样散在空白里，唯一的大图是裁切过的灯泡局部；用「少」和「偏」把视线钉在画面中心。 | [查看原图](screenshots/229-bulbs-series.jpg) |
| [Voku.Studio™](https://voku.studio/)<br>https://voku.studio/ | 实站 · 创意工作室 | 白底上只摆一条横贯页面的影片截帧带，帧块高低错落成拱形，靠明暗对比撑起整个画面；说明文字缩到极小贴在中线，右下角用时间码暗示这是可播放的作品索引。 | [查看原图](screenshots/230-voku-studio.jpg) |
| [Félix Péault • Photographer](https://felixpeault.com)<br>https://felixpeault.com | 实站 · 个人作品集 | 整屏是青绿到粉的渐变场，唯一那张照片被半透明斜线遮罩盖住只露出轮廓；四角用巨大的字母 F 和 P 当框线，说明文字压在 P 右侧形成不对称重心。 | [查看原图](screenshots/231-fe-lix-pe-ault-photographe.jpg) |
| [Monumoir](https://www.monumoir.com)<br>https://www.monumoir.com | 实站 · 产品与 SaaS | 两张黑白人物照分别用渐隐蒙版融进白底，衬线标题 Memories of the Past 就落在两者的空档里；靠「半消失」的照片做历史感，而不是靠加装饰。 | [查看原图](screenshots/232-monumoir.jpg) |
| [Harold AO - Portfolio "21](https://haroldao.com)<br>https://haroldao.com | 实站 · 个人作品集 | 近黑底上把 WEB DEVELOPER + DESIGNER 三行粗体压到几乎顶满左右边界，右侧只放一张微微倾斜的白色人像卡；顶部三个胶囊按钮压到最轻，让字重成为唯一主角。 | [查看原图](screenshots/234-harold-ao-portfolio-21.jpg) |
| [Neko Engineering](https://neko.engineering/)<br>https://neko.engineering/ | 实站 · 消费品牌与电商 | 左边一块产品渲染图配播放按钮，右边一列把金额、支持人数、剩余天数竖排成信息栏，绿色只给支持按钮和进度条；两栏一分开，看图的和看数的互不打扰。 | [查看原图](screenshots/236-neko-engineering.jpg) |
| [Work In Progress](https://www.veryworkinprogress.com)<br>https://www.veryworkinprogress.com | 实站 · 内容与文化 | 首屏是一张 3D 渲染的美术馆墙面，彩色同心圆画作在灰白空间里成为唯一色块；图片下方用两条细线加等宽小字把城市、日期、导航压成一条信息带，画面和信息互不打扰。 | [查看原图](screenshots/240-work-in-progress.jpg) |
| [Goodman Gallery](https://goodman-gallery.com/)<br>https://goodman-gallery.com/ | 实站 · 内容与文化 | 整屏是一张观众看画的实景照，标题两行居中压在画面中间偏上，下面并排两个小按钮；左右下角各塞一张小卡片放周年信息和 cookie，主体画面始终没被挡住。 | [查看原图](screenshots/241-goodman-gallery.jpg) |
| [LUT Studios](https://lutstudios.com/)<br>https://lutstudios.com/ | 实站 · 创意工作室 | 整屏只有一段片场实拍（暗调、几乎全黑），没有标题也没有导航，画面里那台摄影机就是主角；屏幕中央压一条细长的胶囊状进度条并写着 UNMUTE，右侧一枚竖排箭头提示继续滚——用「一段没看完的影片」把人留在首屏。 | [查看原图](screenshots/243-lut-studios.jpg) |
| [Lucien](https://www.lucien.com/)<br>https://www.lucien.com/ | 实站 · 产品与 SaaS | 整屏只有一句居中的白色大标题，底部用渐变把字「吃」掉一半，字像从蓝灰色烟雾里浮出来；导航压成一行小字加一个白色小按钮，左上四组入口和右下那句等宽小注各自贴在角落，用留白和光代替任何图形。 | [查看原图](screenshots/246-lucien.jpg) |
| [ESR Bespoke](https://www.esrbespoke.au/)<br>https://www.esrbespoke.au/ | 实站 · 品牌与机构 | 夜景高速实拍铺满首屏，标题「Exceptional is our standard」压到左侧三分之一处、两行断得很硬；右边是一段极小号的灰字说明和竖排的五项导航，底部只留 INQUIRE 和 SCROLL 两个词，靠「故意少给信息」拉开距离感。 | [查看原图](screenshots/249-esr-bespoke.jpg) |
| [Virtually Ever After Studio](https://virtuallyeverafter.xyz/)<br>https://virtuallyeverafter.xyz/ | 实站 · 创意工作室 | 全黑页面上，镂空的 VEA 大字放在正中，一个线框球体半遮在上面，字因此有了被穿透的层次；左下用等宽小字排四行短句（Digital or physical / Temporary or permanent），顶部只留一行全大写小字和 MENU，靠字距与灰度撑住整屏。 | [查看原图](screenshots/250-virtually-ever-after-studi.jpg) |
| [DontMatter](https://dontmatter.eu)<br>https://dontmatter.eu | 实站 · 创意工作室 | 首屏只放一句居中的 We Build What Matters，其余全部交给空白；作品缩略图被压成一条贴底的横向胶片，两头都切在画外，暗示可以一直滚下去；导航被拆成两处——顶部只留「Start a project」和跳动的实时时钟，栏目名缩成灰色胶囊压在胶片下面，靠错位制造第二眼发现。 | [查看原图](screenshots/252-dontmatter.jpg) |
| [Radian](https://www.rideradian.com/)<br>https://www.rideradian.com/ | 实站 · 消费品牌与电商 | 把摩托车正面摆在灰纸一样的无缝背景正中，车把几乎顶到两侧画幅边，形成对称的压迫感；文案全部退到左下角，一句 A new era of enduro starts here. 加两枚胶囊按钮（一白一黄），黄色只出现在车壳和主 CTA 上，视线被钉在车头。 | [查看原图](screenshots/253-radian.jpg) |
| [A24](https://a24.raviklaassens.com/)<br>https://a24.raviklaassens.com/ | 创意体验 · 内容与文化 | 把剧照裁成正圆当「光盘」摆成一条向右甩出的弧线，圆与圆互相重叠、最右那张只露出半边，暗示还能横向继续；片名、导演、年份用表格和等宽小字排在左上，影评金句用极小的大写压在圆下，用档案感替代常见的海报墙。 | [查看原图](screenshots/254-a24.jpg) |
| [FOLLOW.ART](https://follow.art/)<br>https://follow.art/ | 实站 · 产品与 SaaS | 标题大到只剩上半截，白色窄体几乎撑破画幅，字母因此被卡片和边线切碎；中间一叠黑色名片呈扇形展开，正好压住字母之间的负空间；左下两行 One Card. / Share it. Be noticed. Be supported. 加一枚邮箱输入框，把产品说明压到边角，先抓眼再解释。 | [查看原图](screenshots/255-follow-art.jpg) |
| [We Are Digital Freelancers](https://www.wearedigitalfreelancers.com)<br>https://www.wearedigitalfreelancers.com | 实站 · 创意工作室 | 把缩写 W/A/D/F 拆成四个独立的巨型字母，按错位的 2×2 摆在米色纸面上（A 抬高、D 下沉），字母之间的空白比字母本身还大；导航只剩 WORK / TRAVEL / MENU 三个词和右下角一个 CONTACT，用「排版即内容」省掉所有图片。 | [查看原图](screenshots/256-we-are-digital-freelancers.jpg) |
| [Checkpoint Research](https://www.checkpointresearch.ca)<br>https://www.checkpointresearch.ca | 实站 · 品牌与机构 | 用一横一竖两条细线把首屏切成四格，交点处放一团柔和的蓝色光晕，标题刚好压在左下格的边线上；所有文字都靠左下角对齐、按钮做成细边小方框，右上角只留两组导航和一个蓝色实心 CTA，用「图纸」般的直线建立可信感。 | [查看原图](screenshots/257-checkpoint-research.jpg) |
| [Cooldock](https://dock.cool)<br>https://dock.cool | 实站 · 产品与 SaaS | 把产品塞进一张 macOS 风格的风景壁纸：逆光山谷加前景两块岩石，半透明圆角 Dock 就浮在画面中下方，让人先认出「这是 Mac 桌面」再看懂功能；标题和按钮全部居中排在上半屏，产品只以一条毛玻璃横条出现。 | [查看原图](screenshots/259-cooldock.jpg) |
| [LxL Creative](https://www.lxlcreative.co.uk/)<br>https://www.lxlcreative.co.uk/ | 实站 · 创意工作室 | 左侧一块近半屏的竖幅人像，右侧大片暖棕空场只放三行小标题，中间一行换成橙色手写体做强调；底部「creative」用奶白无衬线撑到出血级，并让橙色手写字标压在照片与底色的交界处，两种字形一软一硬，首屏只留这一个记忆点。 | [查看原图](screenshots/260-lxl-creative.jpg) |
| [Brilean](https://www.brilean.com/)<br>https://www.brilean.com/ | 实站 · 创意工作室 | 同一句主张拆成两行、前灰后黑，「Your vision,」退成背景、「our expertise.」被读成重点；文字压到首屏下三分之一、上半屏整片留白，下沿再切成纯黑并放两颗镜面星，用一个硬切线暗示还有内容。 | [查看原图](screenshots/261-brilean.jpg) |
| [TARQ](https://www.tarqstudio.com)<br>https://www.tarqstudio.com | 实站 · 创意工作室 | 一张几乎全暗的室内实拍占满首屏，左右把栏目名竖排、把项目序号和说明压成 10px 小字，正中只留一个项目名与左右箭头；暗部吞掉画面边界，首屏看起来像展厅投影而不是网页。 | [查看原图](screenshots/263-tarq.jpg) |
| [NIKE Corporate website](https://about.nike.com/en)<br>https://about.nike.com/en | 实站 · 品牌与机构 | 把一句口号拆成三行、用接近顶宽的超粗压缩黑体顶满左半屏，再用一个小星号把注解引到下面的斜体小字；右半屏整块留黑，只在最底部放一张货架照片和一条文章卡，让企业站读起来像杂志封面。 | [查看原图](screenshots/265-nike-corporate-website.jpg) |
| [Real Estate Abbey](https://realestateabbey.com/)<br>https://realestateabbey.com/ | 实站 · 品牌与机构 | 整屏是一张米灰色客厅实拍，几条竖直的栏目参考线没有擦掉，反而成了版面骨架；导航不做在顶部，而是横排在画面下缘贴着地面线，首屏更像楼盘画册的跨页。 | [查看原图](screenshots/266-real-estate-abbey.jpg) |
| [Emele Collab](https://emelecollab.com/)<br>https://emelecollab.com/ | 实站 · 创意工作室 | 首屏一张图都没有，只把十几个客户名用同一种超粗压缩体居中堆成一座塔，靠每行字数不同形成锯齿轮廓；四角缩到 8px 的小字负责导航（List/Grid/Gallery、版权、工作室名），把作品集首页做成纯排版练习。 | [查看原图](screenshots/268-emele-collab.jpg) |
| [Xanvier Allison](https://xanvierallison.com/)<br>https://xanvierallison.com/ | 实站 · 个人作品集 | 全屏黑白人物特写里只放一个居中的细衬线英文名，其余信息全部缩成 8px 等宽小字散在四角（片长、奖项、栏目）；用一个人名加一圈注脚的大小反差，把首屏做成电影片头而不是作品列表。 | [查看原图](screenshots/270-xanvier-allison.jpg) |
| [Breems](https://www.bramvanvugt.com/)<br>https://www.bramvanvugt.com/ | 实站 · 创意工作室 | 不用作品图，改用一张人在沙发上刷手机的生活照铺满首屏，把 BREEMS 拉到满宽、字距拉宽压在最下沿并故意与人物腿部重叠；右侧只留一个黑色圆钮做联系入口，整屏信息压到三条。 | [查看原图](screenshots/272-breems.jpg) |
| [Bécane Paris](https://www.becaneparis.com/)<br>https://www.becaneparis.com/ | 实站 · 消费品牌与电商 | 把 11 个模特缩到同一水平线、等距排成一条横带放在页面中央，人只有几十像素高，衣服轮廓是唯一可读的信息；标题与「14 PRODUCTS」用极小等宽字补齐，四周留白接近七成，用远看代替常规商品大图。 | [查看原图](screenshots/275-be-cane-paris.jpg) |
| [Gavin Schneider Productions](https://www.gsproductions.co.za/)<br>https://www.gsproductions.co.za/ | 实站 · 创意工作室 | 左栏一张竖幅时装照紧贴页面边缘、下面再接一张海边小图形成错位两段式，右栏整片留白只放两行等宽小注；导航用三个平铺栏目名压在最上方，靠一张图加半边空白做出画册翻阅感。 | [查看原图](screenshots/276-gavin-schneider-production.jpg) |
| [ree|b. Handheld Portfolio](https://areebali.com/)<br>https://areebali.com/ | 实站 · 个人作品集 | 整页只在淡灰蓝空场中央摆一台白色便携播放器的 3D 渲染，屏幕是黑的、只透出几行极淡的字，一条橙色小拨片是唯一色点；所有说明缩到 8px 贴在两侧，右侧还留一条像机身滑块的竖条，把作品集伪装成一件硬件。 | [查看原图](screenshots/277-ree-b-handheld-portfolio.jpg) |
| [Van Praet](https://vanpraet.be/)<br>https://vanpraet.be/ | 实站 · 消费品牌与电商 | 一张泳池边的户外家具实景占满首屏，导航被压成顶部居中的白色药丸条，标题只留两行浅色无衬线字落在左下角；先给场景再给 UI，空隙全留给了画面。 | [查看原图](screenshots/279-van-praet.jpg) |
| [Juan Mora Romero](https://www.juanmoraromero.com/)<br>https://www.juanmoraromero.com/ | 实站 · 个人作品集 | 深灰底用细栏线切成对称网格，一段超大黑体自述横跨五栏，左侧把服务与地点排成表格式小字清单；作品区用方图、椭圆有机形、黑底粉票三种裁切分区，靠形状差异而不是间距。 | [查看原图](screenshots/283-juan-mora-romero.jpg) |
| [Nominal](https://www.nominal.so/)<br>https://www.nominal.so/ | 实站 · 产品与 SaaS | 白底上把一行衬线标题放大居中，四周散落带小图标的淡彩药丸标签，每个标签对应一个会计流程名词，外加一枚黑色实心按钮；用“中心一句话＋周边功能点”的排法把抽象 AI 产品翻译成可读信息。 | [查看原图](screenshots/284-nominal.jpg) |
| [Mario Carrillo](https://marioecg.com/)<br>https://marioecg.com/ | 实站 · 个人作品集 | 首屏几乎不放文案：整幅宽度切成十几条竖向渐变色柱，从青绿过渡到品红，用色相过渡在静态画面里造出流动感；导航缩成左上角一行小字，把“这是谁”交给颜色回答。 | [查看原图](screenshots/285-mario-carrillo.jpg) |
| [Brandon Yasin](https://brandonyasin.com)<br>https://brandonyasin.com | 实站 · 个人作品集 | 整屏只用一块米卡其色铺底，导航缩成四角的极小字，上半屏几乎全空，直到接近折线才出现四张作品图和各自一行项目名；用极端的空替作品做铺垫。 | [查看原图](screenshots/287-brandon-yasin.jpg) |
| [atuin.media](http://www.atuin.media)<br>http://www.atuin.media | 实站 · 创意工作室 | 白底只放一个半透明宝蓝 3D 丝带环当主视觉，黑色巨型文案直接压在上面，再用细描边的圆角框把关键词 software 单独拎出来；不靠装饰，全靠物体与文字的层叠关系。 | [查看原图](screenshots/288-atuin-media.jpg) |
| [a-lign studio](https://www.a-lign.studio)<br>https://www.a-lign.studio | 实站 · 创意工作室 | 四张实拍图分别装进虚线标注框，像设计稿批注一样散落在白色页面四周，中间留出居中的两行大标题和一枚橙红描边按钮；左侧再画一段台阶状虚线，把“流程”做成图形而不必真的排一个 steps 版块。 | [查看原图](screenshots/290-a-lign-studio.jpg) |
| [Cosmic Sans Microsite](https://cosmic-sans.blast-foundry.com)<br>https://cosmic-sans.blast-foundry.com | 创意体验 · 在线体验 | 用一块从深藏青渐到雾白的宇宙光晕铺满首屏，字体名用极细超宽的大写字母压在正中——字够大、笔画够细，正好演示这款字“安静信号”的性格；导航拆成六个描边小格排在顶上，压住画面重量。 | [查看原图](screenshots/292-cosmic-sans-microsite.jpg) |
| [REDSTONE SOFTWARE](https://redstone.software/)<br>https://redstone.software/ | 实站 · 创意工作室 | 黑底只做一件事：把 SAAS. APP. AI. E-COMMERCE 拆成两行铺满整屏宽，字号大到几乎顶边；右侧在字行里嵌一张小产品截图，左下角用头像组加五星和 150+ clients 承担信任，文字本身就是版式。 | [查看原图](screenshots/293-redstone-software.jpg) |
| [Say Hey](https://www.sayhey.be/en/)<br>https://www.sayhey.be/en/ | 实站 · 创意工作室 | 近黑的底上只放三样东西：被裁掉的竖排巨字、半颗暗红圆盘、底部一张黑白人像，中央故意空出一大片；cookie 弹层用红色等宽标题和开关行，证明极简页面也能有明确的功能层。 | [查看原图](screenshots/297-say-hey.jpg) |
| [Axiom Research](https://axiom.peppermint.id/)<br>https://axiom.peppermint.id/ | 实站 · 品牌与机构 | 纯黑底上居中放一团金色线框力场，两行巨型无衬线标题直接压在图形上，四角只留等宽状态读数与时间戳，用极端的层级克制换来实验报告封面般的仪式感。 | [查看原图](screenshots/300-axiom-research.jpg) |
| [Sadu Media](https://www.sadumedia.com/)<br>https://www.sadumedia.com/ | 实站 · 创意工作室 | 整屏只有两行压缩体大写，第二行向后重复、逐层变暗拉出速度残影，除顶部一枚极小的字标外没有任何图像，靠字重和透视把品牌名喊出来。 | [查看原图](screenshots/302-sadu-media.jpg) |
| [Kaisermann | web engineer](https://kaisermann.me)<br>https://kaisermann.me | 实站 · 个人作品集 | 通篇等宽大写，把自我介绍当作命令行输出排在屏幕下半部，日期与频道编号退到两个上角，底纹是极暗的横向扫描线与网格，把个人站做出 CRT 终端的气质。 | [查看原图](screenshots/305-kaisermann-web-engineer.jpg) |
| [XNRGY Club](https://xnrgyclub.com/)<br>https://xnrgyclub.com/ | 实站 · 消费品牌与电商 | 球场照片被压暗铺底，一行白色无衬线大字几乎撑满宽度横穿画面，导航缩成顶部一排小字与两枚紫色按钮，右下角只留一颗圆形联系按钮当唯一入口。 | [查看原图](screenshots/306-xnrgy-club.jpg) |
| [Vuna Partners](https://www.vunapartners.co.za/)<br>https://www.vunapartners.co.za/ | 实站 · 品牌与机构 | 一层从纯黑过渡到琥珀的自发光渐变铺满首屏，标题拆成三个短句各自成行，下面接一段小字说明，右侧只挂一行等宽时间与一个低调链接，克制得像一份私募备忘录。 | [查看原图](screenshots/307-vuna-partners.jpg) |
| [1367 Studio](https://www.1367studio.com/)<br>https://www.1367studio.com/ | 实站 · 创意工作室 | 首屏几乎全白，标题三行里最后一行故意褪成浅灰，说明文字与唯一一颗橙色按钮分别贴住右下角，导航被拆成左右两组守在顶部，全靠留白和一处高饱和色收住视线。 | [查看原图](screenshots/308-1367-studio.jpg) |
| [Cula Technologies](https://www.cula.tech/)<br>https://www.cula.tech/ | 实站 · 产品与 SaaS | 近白底上铺一层极淡的发丝网格，标题与一句短承诺分置一条细线带的两端、上下各压一道分隔线，中间只留一小段下划线与 Scroll 字样，用网格和留白做出精密仪器的感觉。 | [查看原图](screenshots/309-cula-technologies.jpg) |
| [https://wearedelta.it/](https://wearedelta.it/)<br>https://wearedelta.it/ | 实站 · 创意工作室 | 灰绿渐变底上放一枚虹彩金属圆片，标题用极细的大写扩展字重分两行压在圆片之上，字母被物体盖住一部分，形成字与 3D 物件互相穿插的层次；页面其余部分只剩角落的 logo、圆形按钮和两枚小链接。 | [查看原图](screenshots/317-https-wearedelta-it.jpg) |
| [Flowty](https://flowty.co)<br>https://flowty.co | 实站 · 产品与 SaaS | 黑底上只用一道斜向的紫色柔光当唯一光源，超大白色标题压在左上、小 logo 缩到右上，靠对角把画面撑住；底部把真实产品界面裁成一条窄条横嵌进画面，再配胶囊按钮，让人相信这是工具而不是海报。 | [查看原图](screenshots/318-flowty.jpg) |
| [UI KIDS](https://buttons.evrone.com/)<br>https://buttons.evrone.com/ | 实站 · 内容与文化 | 白底上先摆面包屑和一行粗黑标题，正文收进很窄的一栏、字号压小到只做说明，然后把整幅绿底漫画插画塞进下方圆角区域；橙色的导航按钮是画面上唯一的暖色，正文和插图之间靠留白分隔而不是分割线。 | [查看原图](screenshots/319-ui-kids.jpg) |
| [CoffeeTech®](https://coffee-tech.com/)<br>https://coffee-tech.com/ | 实站 · 品牌与机构 | 近黑底上只放三行几乎满宽的奶油白无衬线大字，行距与字距都收得很紧，三个词在屏幕上连成一整块面；导航被压成顶部一条极小的字，橙色胶囊按钮是唯一的高饱和点。 | [查看原图](screenshots/320-coffeetech.jpg) |
| [epple](https://vs-epple.de/)<br>https://vs-epple.de/ | 实站 · 品牌与机构 | 首屏做成一张占满宽度的大圆角卡片，卡片里铺一整片鼓起的透明气泡材质，正好隐喻包装业务；标题贴在卡片左下、白色胶囊按钮贴在右下，顶部导航留在纯白页面上，卡片像被捧在版心里。 | [查看原图](screenshots/325-epple.jpg) |
| [Ferr Studio](https://ferrstudio.ch)<br>https://ferrstudio.ch | 实站 · 创意工作室 | 整屏是一块纯红渐变舞台，白色 3D 包装盒斜放在中间并带柔和投影，盒身直接印着 FERR 与 BRANDING，物件本身就是案例封面；导航缩成顶部两枚小胶囊，其余只剩左下角一张小小的 cookie 卡片。 | [查看原图](screenshots/328-ferr-studio.jpg) |
| [RAW](https://raw.com.tw/)<br>https://raw.com.tw/ | 实站 · 品牌与机构 | 用两条竖细线把首屏切成三等分，STAFFING / EXCLUSIVE / ACADEMY 各占一栏并配一条黑、粉、藏青的短下划线；栏内英文标题疏排、中文说明压到很小并居中，页面下半整片留白，只用一行版权收尾。 | [查看原图](screenshots/330-raw.jpg) |
| [Davide Cattaneo](https://davidecattaneo.it/)<br>https://davidecattaneo.it/ | 实站 · 个人作品集 | 全黑底上只用一条荧光绿的三维线框回路当主视觉，标题压到左下角、说明文字缩在右中一小块，靠接近 1:9 的明暗比让视线先被这条“数据管道”牵走，再落到姓名级的服务描述。 | [查看原图](screenshots/331-davide-cattaneo.jpg) |
| [CRÈCHE - the tank](https://www.crechetank.com/)<br>https://www.crechetank.com/ | 实站 · 创意工作室 | 把首屏做成一片淡蓝水面，白色字标被横向切片错位、像隔着水看字，正下方只留一枚 “SCROLL TO DIVE” 小提示；整屏没有导航和图片，先用一种颜色加一个动作定调。 | [查看原图](screenshots/333-cre-che-the-tank.jpg) |
| [Ronnsquare](https://ronnsquare.fr)<br>https://ronnsquare.fr | 实站 · 品牌与机构 | 米色底上把四行粗黑标题压在左栏、右侧两张建筑照片上下错开半格形成阶梯，中间留一条缝透气；页头同时塞进公告条、实心与描边双按钮和 FR 切换，信息很密却被两种颜色收住。 | [查看原图](screenshots/334-ronnsquare.jpg) |
| [L.I.S.A.](https://lisa.locomotive.ca/en)<br>https://lisa.locomotive.ca/en | 创意体验 · 在线体验 | 灰色影棚光下让人头戴老式 CRT 显示器，屏幕只亮一行蓝色 [CLICK] TO START，把“开始体验”做成画面里的道具；导航只剩左上品牌与右上 Let's talk，其余全让给这具人机合成肖像。 | [查看原图](screenshots/335-l-i-s-a.jpg) |
| [Eppel Fotografie](https://eppel.nl)<br>https://eppel.nl | 实站 · 个人作品集 | 银灰渐变铺满整屏，衬线标题里两端的词用斜体、中间一行正体，靠字形切换制造韵律；底部一道巨大的弧形把画面切成上下两半，两侧各留一枚 carousel 箭头暗示后面是图集。 | [查看原图](screenshots/336-eppel-fotografie.jpg) |
| [Think Company](https://www.thinkcompany.com)<br>https://www.thinkcompany.com | 实站 · 创意工作室 | 深蓝噪点底上把两张团队照片贴到版心外的上下边缘，中间用白色与红色两行大字标题占满横向；正文只留三行，下面接一个 “Ask us anything” 输入框，把“先提问”的销售动作搬进首屏。 | [查看原图](screenshots/337-think-company.jpg) |
| [ishikawa.co — Walkable Atlas](https://ishikawa.co/en/)<br>https://ishikawa.co/en/ | 创意体验 · 内容与文化 | 正文被收进约 40% 宽的窄栏并整体下移到页面中段，上方留出大片空白；小标题用 8px 等宽大写、值靠右排成表格式“路书”条目，再用一根极细分割线隔开下一段大字标题。 | [查看原图](screenshots/338-ishikawa-co-walkable-atlas.jpg) |
| [Butter](https://www.butter.video/)<br>https://www.butter.video/ | 实站 · 产品与 SaaS | 浅灰底上让一串彩色 3D 钥匙扣从画面上边缘垂下来并被裁掉上半截，制造“挂在屏幕外”的实物重量；导航收进一枚白色圆角胶囊，标题只用一行常规字重，视觉预算全留给道具。 | [查看原图](screenshots/339-butter.jpg) |
| [Ballance](https://ballance.framer.website/)<br>https://ballance.framer.website/ | 实站 · 产品与 SaaS | 深蓝到亮蓝的纵向渐变当舞台，人像与几颗发光球体压在首屏下半部，再用一张 Travel Elite 半透明卡片叠在人身上，把抽象的支付变成可触摸的物件；标题下只排描边+红色实心双按钮。 | [查看原图](screenshots/340-ballance.jpg) |
| [legencymedia.com](https://legencymedia.com/)<br>https://legencymedia.com/ | 实站 · 品牌与机构 | 右半屏放一颗被裁掉边角的蓝紫网点球体，用点的疏密做出体积，给纯白页面压上重量；标题里只把 B2B 染成品牌蓝，正文下方立刻接客户 logo 墙，用真实名字替代自夸。 | [查看原图](screenshots/341-legencymedia-com.jpg) |
| [Iris Venture Builder](https://irisventure.com/)<br>https://irisventure.com/ | 实站 · 品牌与机构 | 用一团几乎没有边界的白色柔光占住右半屏当作“体积”，文字只留左上三词标题与右下角右对齐的短句，两者隔着整屏距离；导航收成一枚居中白色胶囊，红色只出现在 logo 上。 | [查看原图](screenshots/342-iris-venture-builder.jpg) |
| [Nils Schekorr](http://schekorr.com/)<br>http://schekorr.com/ | 实站 · 个人作品集 | 把自我介绍排成三行通栏大字从左侧起排，右中再压一枚手绘蓝圈写 “What's your biggest challenge?”，用批注语气把顾问变成对话者；正文与姓名缩到 9px 贴边，照片只留一条低对比度的幕墙横带。 | [查看原图](screenshots/343-nils-schekorr.jpg) |
| [Upvent Digital](https://upvent.co/)<br>https://upvent.co/ | 实站 · 创意工作室 | 整屏铺一层粉青半调点阵、靠中间留白自然形成城市轮廓；标题前半句是干净等宽大写，后半句被拆成乱码与镜像字符，用“品牌名正在崩坏”的动作解释 360° 数字传播。 | [查看原图](screenshots/345-upvent-digital.jpg) |
| [Serus](https://serus.ai/)<br>https://serus.ai/ | 实站 · 产品与 SaaS | 首屏不写卖点句，而是一句衬线体 “Hello, I'm Serus” 加一个巨型圆角输入框，让产品以对话方式先开口；下方用灰阶客户 logo 和一枚黑色胶囊按钮收尾，彩色只留给紫色注册按钮。 | [查看原图](screenshots/346-serus.jpg) |
| [Leome and Partners](https://leome-and-partners.com)<br>https://leome-and-partners.com | 实站 · 品牌与机构 | 把 “Legal advice made simple” 拆成四个词钉在四角、中间整块留空，读者必须用视线把句子拼回来；深墨绿底配薄荷色字和一枚描边 MENU，全部重量只靠排版位置承担。 | [查看原图](screenshots/348-leome-and-partners.jpg) |
| [Nahiyan Khan - Personal Site](https://nahiyan.codes/)<br>https://nahiyan.codes/ | 实站 · 个人作品集 | 首屏把名字做成紧排的宽体无衬线大字顶在左上角，下面用三栏 10px 左右的小字铺开自述，并用 tldr / today / previously 一类极小的栏头做索引，其余全留黑；字号落差接近 40 倍，靠细线分栏把个人简历读成一张技术图纸。 | [查看原图](screenshots/350-nahiyan-khan-personal-site.jpg) |
| [Crosswalk](https://www.crosswalk.cl/en)<br>https://www.crosswalk.cl/en | 实站 · 品牌与机构 | 通篇只有一个墨绿底色，中央放一张可细读的细线齿轮/流程图（浅色 1px 描边 + 极小的节点标注），左下角两行特细无衬线撑住视线，导航压成右上角两个小胶囊；用单色加蓝图感把咨询公司讲成一份工程图纸。 | [查看原图](screenshots/352-crosswalk.jpg) |
| [Tommy Biglow](https://tommybiglow.com)<br>https://tommybiglow.com | 创意体验 · 个人作品集 | 青蓝渐变底上只悬一台 3D 复古一体机，连键盘、鼠标一起画全，屏幕里还排着缩小的名片和窗口；下方一行 10px 的 CLICK TO ENTER 才是唯一入口，靠“一个大物件 + 极端留白”把首屏做成一道门。 | [查看原图](screenshots/353-tommy-biglow.jpg) |
| [CE Growth Partners](https://cegrowthpartners.com/)<br>https://cegrowthpartners.com/ | 实站 · 品牌与机构 | 黑底只放荧光绿、珊瑚红、白三色：左侧超粗紧排标题占满半屏，右侧一枚被竖着切开的圆叠在红矩形上充当品牌图形，导航与所有小标签一律等宽大写；用唱片厂牌式的排版把咨询公司做得不像企业站。 | [查看原图](screenshots/355-ce-growth-partners.jpg) |
| [Trajectory Web Design](https://www.trajectorywebdesign.com/)<br>https://www.trajectorywebdesign.com/ | 实站 · 创意工作室 | 整页只用一种深蓝，把极淡的同心轨道环藏在标题后面当星图，第二行标题降成半透明做出纵深；按钮做胶囊加箭头，底部一排灰度客户 Logo 直接补上信任，是标准的“居中一句话 + 证据条”结构。 | [查看原图](screenshots/358-trajectory-web-design.jpg) |
| [Findra.art](https://findra.art/)<br>https://findra.art/ | 实站 · 内容与文化 | 标题做成顶到两边的超窄体大写，下面紧跟两排可点的筛选标签（排序 / 平台 / 角色类型），再往下才是带手写涂鸦和洋红标签的封面大图；它把“可检索的杂志目录”直接搬到首屏，而不是先做氛围图。 | [查看原图](screenshots/360-findra-art.jpg) |
| [Stéfano Girardelli — Designer](https://stefanobg.com)<br>https://stefanobg.com | 实站 · 个人作品集 | 低照度雨夜街景铺满整屏，标题把 “apps” 换成洋红并把一个小圆头像直接嵌进句子里，右侧一串 10px 的 WORKS / ABOUT / REEL 加箭头；靠明暗比和从 80px 骤降到 10px 的字号差，把一句话读成电影海报。 | [查看原图](screenshots/361-ste-fano-girardelli-design.jpg) |
| [Avocats en Droit de la famille](https://kohenavocats.com/avocats-droit-famille-paris/)<br>https://kohenavocats.com/avocats-droit-famille-paris/ | 实站 · 品牌与机构 | 把一张半透明白卡浮在兰花照片上，卡里塞进完整的留资表单（姓名 / 电话 / 邮箱 / 案情描述），80€ 与 4,9 分两张小卡做成悬浮贴纸，右下角再挂常驻的在线咨询与 WhatsApp；用玻璃质感把“专业”和“可信”一起递出来。 | [查看原图](screenshots/362-avocats-en-droit-de-la-fam.jpg) |
| [Banham](https://www.banham.co.uk/)<br>https://www.banham.co.uk/ | 实站 · 消费品牌与电商 | 整屏是一张人物特写（笑脸压在深蓝金色织物前），标题居中用两行衬线体落在人脸下方，按钮只留白底小方块，右下角再钉一个常驻的“预约免费勘察”深色胶囊；照片负责情绪，悬浮胶囊负责转化。 | [查看原图](screenshots/363-banham.jpg) |
| [Orizon | Beyond Zero Trust](https://orizon.one)<br>https://orizon.one | 实站 · 产品与 SaaS | 用几十圈极细的椭圆环加一条绿色渐变飘带铺满首屏，把“防护”画成雷达轨道；标题居中两行、只把 Resilient 染色并配一条手绘下划线，正文不超过四行，两枚绿色胶囊按钮收口，环形线把人眼锁在正中。 | [查看原图](screenshots/364-orizon-beyond-zero-trust.jpg) |
| [Justus John](https://www.justus-john.com)<br>https://www.justus-john.com | 实站 · 个人作品集 | 九成面积是空白，视觉中心只有两行衬线体：第一行深色约 60px，第二行浅灰约 20px 且带 // 前缀，拼成一句德文对仗；导航缩到 12px 散在四角，用极端字号差和留白制造安静。 | [查看原图](screenshots/365-justus-john.jpg) |
| [MDS Collective](https://www.mdscollective.com)<br>https://www.mdscollective.com | 实站 · 品牌与机构 | 首屏是一整幅马尔代夫海上别墅的景（沙滩上放一对人物做尺度参考），左上小 Logo、顶部一排 10px 白色大写导航、左下三行小字才交代业务；把“什么都不加”当成奢华感的来源。 | [查看原图](screenshots/366-mds-collective.jpg) |
| [The First Fifty](https://book.sequel.co/)<br>https://book.sequel.co/ | 创意体验 · 在线体验 | 黑底星场里散落几个低面数 3D 小人，站名用几乎与背景同色的超大字号压在人物后面，导航缩成顶部三枚小胶囊；把玩法（投掷角色）写成一行 PRESS SPACE 藏在场景中央，让人先玩再看书。 | [查看原图](screenshots/367-the-first-fifty.jpg) |
| [Relevo & Vinco](https://relevovinco.com/)<br>https://relevovinco.com/ | 实站 · 品牌与机构 | 只有牛皮纸色与深棕两色：STAND OUT. 做成两块深色反白块（像被压凹下去的槽），PRESS IN. 直接印在纸面上，用正负形把压印 / 凹印两种工艺现场演示出来；说明文字和导航全部压成 10px 等宽。 | [查看原图](screenshots/368-relevo-vinco.jpg) |
| [fps ecosystem](https://www.fps.hu/)<br>https://www.fps.hu/ | 实站 · 创意工作室 | 标题里 “Empathic” 用衬线斜体并套一圈手绘蓝线，后半句立刻切回无衬线，两种字体在同一行咬合；下方把功能点拆成散落的彩色方块，每块画一个蓝色线稿图标（放大镜 / 灯泡 / 铅笔 / 笑脸），像把便利贴撒在页面上。 | [查看原图](screenshots/369-fps-ecosystem.jpg) |
| [Pier Gorelli](https://piergorelli.com)<br>https://piergorelli.com | 实站 · 个人作品集 | 首屏上半区几乎全空，超大无衬线“I do dev.”压在左下、紧跟一行粗体副标题；导航拆成 01–04 编号加右上的等宽坐标与当地时间，用周围小字的密度把标题体量衬出来。 | [查看原图](screenshots/370-pier-gorelli.jpg) |
| [Garvin Promotion Group](https://gpg.dops.agency/)<br>https://gpg.dops.agency/ | 实站 · 产品与 SaaS | 首屏只有一句 3 行的欢迎语，把品牌名换成更深的蓝嵌在句子中间当强调；下方用整块蓝色渐变叠半透明大圆环收尾，没有产品截图也把版面撑住了。 | [查看原图](screenshots/371-garvin-promotion-group.jpg) |
| [Onseis Studio](https://onseis.com)<br>https://onseis.com | 实站 · 创意工作室 | 顶部用一条反复滚动的“NOW BOOKING NOVEMBER · 2 SPOTS LEFT”代替普通导航条，中间大留白里只留几组极小号说明文字，底部一排品牌交付物缩略图横着切开画面，让作品占主导。 | [查看原图](screenshots/372-onseis-studio.jpg) |
| [ALT Agency](https://www.altagency.co.uk)<br>https://www.altagency.co.uk | 实站 · 创意工作室 | 一张带水面倒影的城市实景铺满首屏，三行标题里只把中间的“Alternative”换成衬线斜体做节奏断点；正文与一排客户 logo 全压在照片下缘的暗部，字不抢图。 | [查看原图](screenshots/373-alt-agency.jpg) |
| [SANTAL](https://santalarch.com)<br>https://santalarch.com | 实站 · 品牌与机构 | 把“SANTAL”放大到超出画幅、左右两端被裁掉，再用一条细线和一排小号导航把字标与下方留白隔开；正文缩成右侧一小块，靠字号的极端落差制造压迫感。 | [查看原图](screenshots/376-santal.jpg) |
| [beflash — web & digital agency](https://beflash.de)<br>https://beflash.de | 实站 · 创意工作室 | 整屏铺一张斜向拉丝的金属纹理，超大号灰白德文标题直接压上去，部分笔画与底纹同灰度几乎融掉，只留左上角一个亮蓝“be”标志当色彩锚点。 | [查看原图](screenshots/378-beflash-web-digital-agency.jpg) |
| [EASYSELLER | Elevate Your Sales](https://www.easyseller.it/)<br>https://www.easyseller.it/ | 实站 · 创意工作室 | 一棵深绿色的 3D 蓟草从画面顶端垂下来，巨型衬线标题“Elevate Your Sales”横穿主体中部、字与物互相遮挡，白底上只靠黑字和这一件深绿雕塑撑起对比。 | [查看原图](screenshots/379-easyseller-elevate-your-sa.jpg) |
| [AI Uis](https://aiu.is/)<br>https://aiu.is/ | 实站 · 文档与设计系统 | 左侧是带罗马数字章节的目录清单，右侧把同一批条目排成一张点阵，每个点对应一条、用大小和空心/实心区分层级，让目录本身变成可看的图形。 | [查看原图](screenshots/381-ai-uis.jpg) |
| [Subscrr](https://subscrr.app/)<br>https://subscrr.app/ | 实站 · 产品与 SaaS | 一张落日海面照片铺满首屏，标题用两行超压缩白色大写压在海平线上，句末留一个星号、下方单独补“so you don't have to”，把广告语写成有停顿的一句话。 | [查看原图](screenshots/383-subscrr.jpg) |
| [Mosaic](https://mosaic.flabbergast.agency)<br>https://mosaic.flabbergast.agency | 实站 · 产品与 SaaS | 整屏近乎全黑，只在正中放一个圆角深色方块：左半压出浅刻字的信息栏，右半是橙色小方块拼成的矩阵；上下各一行等宽大写小字，注意力全部锁在这件东西上。 | [查看原图](screenshots/387-mosaic.jpg) |
| [Structure Consulting Engineers](https://structureengineering.com.au/)<br>https://structureengineering.com.au/ | 实站 · 品牌与机构 | 把一张木结构天花的仰拍铺满首屏，导航变成一排半透明白色胶囊贴在顶部；标题落在画面中下部，右下角三张带细框的项目卡把作品提前塞进首屏。 | [查看原图](screenshots/388-structure-consulting-engin.jpg) |
| [Aurora (Government of Canada)](https://design.gccollab.ca/)<br>https://design.gccollab.ca/ | 官方规范 · 文档与设计系统 | 左栏用一句话讲清定位（“出色的应用需要设计系统”）配一个深色实心按钮，右侧让低多边形三角渐变块斜向铺开并故意溢出容器，把静态首屏做出斜向动势；下方用 “I am a…” 加四个圆形插画头像做角色分流。 | [查看原图](screenshots/390-aurora-government-of-canad.jpg) |
| [Adobe Spectrum](https://spectrum.adobe.com)<br>https://spectrum.adobe.com | 官方规范 · 文档与设计系统 | 浅灰底上把所有内容锁在一条窄中线上：公告胶囊、居中标题、深色圆角 CTA 全部居中对齐；标题下用两张等宽圆角图卡（一张紫色抽象 3D、一张界面截图）把“设计语言”和“组件”分栏讲，卡内文字压到说明级别，靠留白撑住呼吸感。 | [查看原图](screenshots/391-adobe-spectrum.jpg) |
| [Okta Odyssey Design System](https://odyssey-storybook.okta.design/)<br>https://odyssey-storybook.okta.design/ | 官方组件演示 · 文档与设计系统 | 典型 Storybook 三栏：左侧可展开的组件树带 beta 角标，中间 README 用表格列出仓库结构和包清单，包路径全部做成蓝色等宽链接；标题、正文、表格三级字号压得很平，让整页像一份可检索的说明书而不是宣传页。 | [查看原图](screenshots/394-okta-odyssey-design-system.jpg) |
| [Kontur](https://guides.kontur.ru/)<br>https://guides.kontur.ru/ | 官方规范 · 文档与设计系统 | 顶部一条纯黑横幅只放俄文标题和一张白色小卡（字标＋界面缩略图），下面立刻切回纯白，用四列等宽链接索引把所有规范条目一次平铺；全站只有黑白两色和克制的无衬线小字号，层级完全靠列宽与行距撑起来。 | [查看原图](screenshots/395-kontur.jpg) |
| [Semi Design](https://semi.design/en-US)<br>https://semi.design/en-US | 官方规范 · 文档与设计系统 | 顶部一条紫到橙的渐变公告条做视觉钩子，下面回到白底：左侧中文大标题＋蓝色实心按钮＋六个技术栈标志，右侧一张浮起的后台截图用投影脱离背景，形成“界面就在页面上”的错觉；最底部再放一条灰度客户 logo 带做背书。 | [查看原图](screenshots/397-semi-design.jpg) |
| [Microsoft Fluent](https://www.microsoft.com/design/fluent/)<br>https://www.microsoft.com/design/fluent/ | 官方规范 · 文档与设计系统 | 首屏只做三件事：一行巨大的 “Fluent 2” 黑体、一句把 “etasks” 单独抽出来做浅灰高亮的副标、右侧半透明虹彩叠片 3D 主视觉；下方两张等宽圆角白卡把 Design / Develop 两条路径并列，卡内用图标方块代替插画。 | [查看原图](screenshots/398-microsoft-fluent.jpg) |
| [GitHub Primer](https://primer.style/)<br>https://primer.style/ | 官方规范 · 文档与设计系统 | 标题和副标都居中且字号克制，重量交给下面两张巨大圆角白卡：左卡是文案加内嵌的产品界面拼贴，右卡是六种 Octocat 标志变体；右上角一块蓝绿渐变几何体故意切出画布，压住整页的“纯白”感。 | [查看原图](screenshots/399-github-primer.jpg) |
| [Bold (Bridge Design System)](https://bold.bridge.ufsc.tech/)<br>https://bold.bridge.ufsc.tech/ | 官方规范 · 文档与设计系统 | 字标用蓝色无衬线 “bold” 加灰色衬线 “design system” 拼成，形成无衬线／衬线的对比；下面三个等宽短栏（Accessible / Open source / Customizable）统一用箭头小标题加低对比正文，页脚用一条浅灰带和四个彩色图标收口。 | [查看原图](screenshots/400-bold-bridge-design-system.jpg) |
| [Ray by WeWork](https://ray.wework.com)<br>https://ray.wework.com | 官方规范 · 文档与设计系统 | 整页只有左上角一小块内容：两行标题、一句说明、实心与描边两个按钮、一行等宽安装命令，其余全部留白；用极端的信息稀缺暗示“这是一个底层库”，而不是需要说服人的产品营销页。 | [查看原图](screenshots/401-ray-by-wework.jpg) |
| [MUI: Base UI](https://base-ui.com/)<br>https://base-ui.com/ | 官方组件演示 · 文档与设计系统 | 标题左对齐占满两行大字，正文全部拆到右侧窄栏、按段分行排版，中间大片空白把文字块和页边拉开；底部 “Made for the makers” 用六个浅灰方块装合作方标志，全程不用品牌色。 | [查看原图](screenshots/402-mui-base-ui.jpg) |
| [Mail.ru Group Paradigm](https://design.mail.ru/)<br>https://design.mail.ru/ | 实站 · 品牌与机构 | 左栏三行超大俄文标题加一个蓝色胶囊按钮，右栏是一组白色挤出环形雕塑，前后穿插调色板、色相滑杆、字距调节等白色工具卡；用 3D 物体加 UI 碎片叠出“设计工具”的隐喻，浅灰底保证这些白卡片仍有层次。 | [查看原图](screenshots/403-mail-ru-group-paradigm.jpg) |
| [Durgesh](https://yodkwtf.com/)<br>https://yodkwtf.com/ | 实站 · 个人作品集 | 左侧用衬线体两行自述、第二行降成灰色弱化，正文把 React.js、Next.js 等技术名词加粗成视觉锚点；右侧浮一张仿代码编辑器的 YAML 卡片，卡片投影与页面底部薄荷绿径向光晕连成一片，视线自然从标题滑到卡片。 | [查看原图](screenshots/405-durgesh.jpg) |
| [Ismoilbek Ilxomov](https://ismail.uz/)<br>https://ismail.uz/ | 实站 · 个人作品集 | 整页只有一条居中窄栏：头像、姓名、职位和 Download Resume 压进一屏，工作经历用带圆点的时间轴和浅灰细线分隔，读者视线沿单轴往下扫，内容再密也不显乱。 | [查看原图](screenshots/406-ismoilbek-ilxomov.jpg) |
| [Sarah Dayan](https://www.sarahdayan.dev/)<br>https://www.sarahdayan.dev/ | 实站 · 个人作品集 | 近黑底上只留一条左对齐窄栏：白色大标题、灰色职位、两行简介，下面直接接年份分组的文章列表，全部层级只靠字号和灰阶做出来，几乎不用颜色。 | [查看原图](screenshots/409-sarah-dayan.jpg) |
| [Sachin Desai](https://sachindesai.in)<br>https://sachindesai.in | 实站 · 个人作品集 | 姓名用特粗黑体顶满画幅，职位换成描边斜体叠在第二行，后景压一团蓝粉渐变光斑从字缝里透出来；四角只保留极小导航、邮箱和当地时间，用字号和色斑制造冲击。 | [查看原图](screenshots/410-sachin-desai.jpg) |
| [Samuel Imolorhe](https://www.xkoji.dev/)<br>https://www.xkoji.dev/ | 实站 · 个人作品集 | 整屏只有一个居中的橙红折纸感 X 标志，下面三枚社交图标加一句 Checkout my blog 文字链，其余全白，用极端的信息裁剪把品牌符号变成唯一主角。 | [查看原图](screenshots/411-samuel-imolorhe.jpg) |
| [Arshdeep Singh](https://arshdeepsingh.me/)<br>https://arshdeepsingh.me/ | 实站 · 个人作品集 | 用一行手写体签名当姓名，下面摆一个仿 macOS 的列表卡（About / Work / Experiments，右侧还带实时时间），再用带红黄绿交通灯的窗口截图暗示站点本身，把个人主页伪装成桌面应用。 | [查看原图](screenshots/412-arshdeep-singh.jpg) |
| [Eva Decker](https://evadecker.com)<br>https://evadecker.com | 实站 · 个人作品集 | 米白底上放一句居中大标题，下面用一张磁带合成器插画当分节符号，再把字体、站点等作品排成两列卡片，靠柔和底色和插画把工程师作品集做得像手账。 | [查看原图](screenshots/413-eva-decker.jpg) |
| [Aditya Bansal](https://www.adityabansal.tech/)<br>https://www.adityabansal.tech/ | 实站 · 个人作品集 | 深色首屏先用一行等宽小字标出身份与城市，再用四行大号句子占满左侧，只把 efficiently、leverage AI、perform under load 换成荧光绿；右侧叠一张半透明能力清单卡，形成宣言加索引的双栏。 | [查看原图](screenshots/414-aditya-bansal.jpg) |
| [Malik Naik](https://www.maliknaik.me/)<br>https://www.maliknaik.me/ | 实站 · 个人作品集 | 左侧三行粗体职位、一段简介加一深一浅两个按钮，右侧用一个巨大的尖括号代码符号和节点连线图与之配重；底部让深色 Cookie 卡从右下角浮出，首屏就有站点已开张的实感。 | [查看原图](screenshots/415-malik-naik.jpg) |
| [Seán Halpin](https://www.seanhalpin.xyz/)<br>https://www.seanhalpin.xyz/ | 实站 · 个人作品集 | 薄荷到黄绿的渐变铺满首屏，标题用衬线体并把 A Designer. 换成斜体制造落差，下面两张淡紫、淡绿的大圆角卡各嵌一张蓝色界面截图，靠柔色和圆角把作品集做得没有压迫感。 | [查看原图](screenshots/416-sea-n-halpin.jpg) |
| [Cassidy Williams](https://cassidoo.co/)<br>https://cassidoo.co/ | 实站 · 个人作品集 | 整页就是一条窄文本流：名字用宽字距衬线、正文用等宽字，段落里的关键链接用黄粉色下划线高亮，头像做成小圆压在标题右上，读到最新文章处才切成带日期的列表。 | [查看原图](screenshots/417-cassidy-williams.jpg) |
| [Rishi Mohan](https://rishimohan.me)<br>https://rishimohan.me | 实站 · 个人作品集 | 主标题就是一句带表情的问候，右侧紧贴一列小字说明身份、所在地和在做的产品；下面用三列圆角卡把 side projects 排成矩阵，再用带日期的列表接博客，信息很多但每块都短，方便扫读。 | [查看原图](screenshots/420-rishi-mohan.jpg) |
| [Abo Ghanbari](https://www.aboghanbari.com/)<br>https://www.aboghanbari.com/ | 实站 · 个人作品集 | 把定位语拆成两行居中，字号克制、上下留出大片空白，一深一浅两个胶囊按钮收住视线；底部三台手机样机只露出上半截，用半截设备暗示产品，而不是把截图塞满首屏。 | [查看原图](screenshots/421-abo-ghanbari.jpg) |
| [Raphaël Chelly](https://www.raphaelchelly.com)<br>https://www.raphaelchelly.com | 实站 · 个人作品集 | 左侧姓名和一句自述紧贴顶格，圆形头像用淡蓝插画底衬在右边做配重，正文三段后接蓝色 LinkedIn 与紫色 About Me 两个胶囊，读起来像一份排版干净的网络简历。 | [查看原图](screenshots/422-raphae-l-chelly.jpg) |
| [Aziz Rahman](https://azizstark.com)<br>https://azizstark.com | 实站 · 个人作品集 | 整页只留一大块米白和两枚朱红小圆点当锚点：带同色描边的圆形头像下面压三行灰色小字自述和一行社交图标，页尾用手写签名代替 logo，视线始终被那两个红点牵着走。 | [查看原图](screenshots/423-aziz-rahman.jpg) |
| [Yasio](https://yasio.dev/)<br>https://yasio.dev/ | 实站 · 个人作品集 | 深色场景里只放两句自述，名字用高饱和紫色从一片灰字中跳出来；左缘一条细紫线加序号 0 贯穿整屏当进度轨，把读者视线顺着往下带，背景只留隐约的折面体块。 | [查看原图](screenshots/425-yasio.jpg) |
| [Adewale Adeyemi](https://adex.onrender.com/)<br>https://adex.onrender.com/ | 实站 · 个人作品集 | 近黑底上一条左对齐窄栏到底：问候语只留名字和手势表情，正文里的技术名词逐个加粗或斜体并塞入图标，链接统一用白色下划线而不是彩色；再往下用 Posts 和 Technologies 两个小标题把列表切成节奏块。 | [查看原图](screenshots/427-adewale-adeyemi.jpg) |
| [Sankalp Tharu](https://sankalptharu.com.np)<br>https://sankalptharu.com.np | 实站 · 个人作品集 | 近黑底把左边排成窄栏长文本、右边压一个大圆头像，姓名与职位只靠字号和灰阶分层；正文下面接一排小圆社交图标和两个带箭头的文字按钮，再用一条横贯全宽的 leave a note 输入行把联系方式直接嵌进首屏。 | [查看原图](screenshots/429-sankalp-tharu.jpg) |
| [Anirban Das](https://www.anirbandas.in/)<br>https://www.anirbandas.in/ | 实站 · 个人作品集 | 首屏铺满紫灰烟云图，只在中央放一句三词英文标语：白色衬线字拉开字距浮在雾上，名字用更小的全大写字母压在画面顶部；下方黑色横带用同一款衬线再写一次 Contact Us，上下两句形成呼应。 | [查看原图](screenshots/430-anirban-das.jpg) |
| [Yunus Ertürk](https://yunuserturk.com)<br>https://yunuserturk.com | 实站 · 个人作品集 | 纯黑底只用一条左对齐栏：姓名和城市加粗提亮，其余句子压成灰色小字，邮箱、LinkedIn 和日程都以下划线内联在句子里；末尾两排白色方形图标（社交 + 技术栈）当视觉节奏，一张配图都不用也不显单薄。 | [查看原图](screenshots/431-yunus-ertu-rk.jpg) |
| [George Christeas](https://chr-ge.com/)<br>https://chr-ge.com/ | 实站 · 个人作品集 | 白色页眉下让一整块从薄荷到薰衣草的对角渐变占满首屏，上面只压三行超粗黑色大写标题；标题下方用一行等宽小字加一条细长箭头做次级入口，靠字重与柔色底的反差把版面撑住。 | [查看原图](screenshots/432-george-christeas.jpg) |
| [Patrick Scott](https://pscott.io)<br>https://pscott.io | 实站 · 个人作品集 | 整屏交给一张星空山景照片，只在中央叠一行白色姓名和小字职位，下面六个金色小方块做社交入口；界面元素几乎为零，靠照片由深蓝到暖褐的明暗过渡把文字托出来。 | [查看原图](screenshots/433-patrick-scott.jpg) |
| [Kehinde Omopariola](https://www.pariola.dev)<br>https://www.pariola.dev | 实站 · 个人作品集 | 近黑底左上用两行 Frontend Developer. 占满视线，右侧压一张带细描边和偏移阴影的黑白人像，形成文字块对图像块的对角平衡；下方再用一条细线切成 Design 与 Engineering 两栏大标题，读起来像两页跨版。 | [查看原图](screenshots/435-kehinde-omopariola.jpg) |
| [Abdelrahman Ahmed](https://abdalrahman.tech)<br>https://abdalrahman.tech | 实站 · 个人作品集 | 深蓝灰底把导航做成一颗悬浮胶囊钉在顶部，左侧标题分三行递进；右侧用圆形 A.M 徽章配两条细轨道和 Java / Spring Boot 小标签，把技术栈变成图形，标题下再用一实一虚两枚胶囊按钮分出主次。 | [查看原图](screenshots/436-abdelrahman-ahmed.jpg) |
| [Andrew Branch](https://blog.andrewbran.ch/)<br>https://blog.andrewbran.ch/ | 实站 · 个人作品集 | 白底只留一条居中窄栏：每篇文章由一行灰色小号日期、一个衬线标题和一行灰色摘要组成，行间距拉得很开；页眉仅放一枚红色小标记、about 链接和 GitHub 图标，把注意力全部让给标题文字。 | [查看原图](screenshots/437-andrew-branch.jpg) |
| [Mahmoud Ibrahim](https://mahmoudibrahim.me)<br>https://mahmoudibrahim.me | 实站 · 个人作品集 | 首屏左右分栏：左侧压三行粗体自我介绍、一行灰字说明和一排小图标社交链，右侧只留一块纯几何的蓝色图形当视觉锚点，页面其余部分保持黑白灰。下方用两列等高卡片承载工作经历（logo 方块＋公司名＋时间范围＋三四行描述），信息密度高但不吵，可以学它的留白与单一强调色控制。 | [查看原图](screenshots/438-mahmoud-ibrahim.jpg) |
| [APPI RP · 404](https://appi-rp.com/404)<br>https://appi-rp.com/404 | 实站 · 在线体验 | 深蓝夜空底 + 居中「Page not found」，两枚粉色胶囊按钮把「返回」做成主要动作；底部仍保留社群与常见问题入口。 | [查看原图](screenshots/440-appi-rp-404.jpg) |
| [Avara · 404](https://www.avara.band/404)<br>https://www.avara.band/404 | 实站 · 内容与文化 | 整屏纯黑只留一个灰色 404 和底部两行小字；靠极端克制把乐队气质延续到错误页。 | [查看原图](screenshots/446-avara-404.jpg) |
| [Andrii Mur · 404](https://www.andriimur.com/404)<br>https://www.andriimur.com/404 | 实站 · 个人作品集 | 深灰底上一句「AW, SUBJECT NOT FOUND」，四周环绕光圈、快门参数；把摄影师的错误页做成取景器刻度。 | [查看原图](screenshots/451-andrii-mur-404.jpg) |
| [Nomu · 404](https://nomu.store/404)<br>https://nomu.store/404 | 实站 · 消费品牌与电商 | 奶油底 + 手写小插画，文案「This page swam off」把错误写成一句俏皮话，返回按钮做成一枚小胶囊。 | [查看原图](screenshots/452-nomu-404.jpg) |
| [Airtable · 定价页](https://www.airtable.com/pricing)<br>https://www.airtable.com/pricing | 实站 · 产品与 SaaS | 把四个套餐做成等高卡片，功能差异压成勾选表格；顶部用「按月/按年」切换改变价格口径。 | [查看原图](screenshots/453-airtable.jpg) |
| [ClickUp · 定价页](https://clickup.com/pricing)<br>https://clickup.com/pricing | 实站 · 产品与 SaaS | 三档套餐横向排开，中间档抬高并加重描边；下面是逐项功能对照，价格与「免费」入口同时露出。 | [查看原图](screenshots/454-clickup.jpg) |
| [Intercom · 定价页](https://www.intercom.com/pricing)<br>https://www.intercom.com/pricing | 实站 · 产品与 SaaS | 把 AI 坐席与人工坐席拆成两条计价线，再用组合卡片说明「Fin + Intercom」怎么买。 | [查看原图](screenshots/455-intercom.jpg) |
| [Loom · 定价页](https://loom.com/pricing)<br>https://loom.com/pricing | 实站 · 产品与 SaaS | 三档卡片 + 顶部「按年/按月」切换，免费档用描边按钮、付费档用实心按钮区分主次。 | [查看原图](screenshots/456-loom.jpg) |
| [Ramp · 定价页](https://ramp.com/pricing)<br>https://ramp.com/pricing | 实站 · 产品与 SaaS | 免费档与「Intelligence」付费档并列，深色卡片承载付费方案；功能差异用细表格拆开。 | [查看原图](screenshots/459-ramp.jpg) |
| [Typeform · 定价页](https://www.typeform.com/pricing)<br>https://www.typeform.com/pricing | 实站 · 产品与 SaaS | 价格按月/年切换，卡片下方接功能对照；免费档用「Start free」弱化，付费档用实心按钮。 | [查看原图](screenshots/460-typeform.jpg) |
| [Slack · 料金プラン](https://slack.com/pricing)<br>https://slack.com/pricing | 实站 · 产品与 SaaS | 日文版四档价格并列，最右档用深色底强调；下方用「含まれる機能」对照表补齐差异。 | [查看原图](screenshots/461-slack.jpg) |
| [Asana · 应用目录](https://asana.com/apps)<br>https://asana.com/apps | 实站 · 产品与 SaaS | 首屏一句「Your favorite tools in one place」，下面按类别铺应用卡片；筛选与搜索放在网格上方。 | [查看原图](screenshots/462-asana.jpg) |
| [Notion · 连接](https://www.notion.so/integrations)<br>https://www.notion.so/integrations | 实站 · 产品与 SaaS | 「Explore connections」下先给一排常用工具，再用卡片网格铺满；搜索框是进入长目录的主入口。 | [查看原图](screenshots/463-notion.jpg) |
| [Make · 集成目录](https://www.make.com/en/integrations)<br>https://www.make.com/en/integrations | 实站 · 产品与 SaaS | 顶部写「3,500+ Integration Apps」，用圆形应用图标组成密集网格；把数量本身当成视觉主张。 | [查看原图](screenshots/464-make.jpg) |
| [Airbnb · 工作原理](https://www.airbnb.com/e/howairbnbworks)<br>https://www.airbnb.com/e/howairbnbworks | 实站 · 消费品牌与电商 | 「You're just 3 steps away」下面直接编号 1/2/3，每步一行粗体 + 两行说明；把流程做成可扫读的清单。 | [查看原图](screenshots/469-airbnb.jpg) |
| [Thumbtack · 工作原理](https://www.thumbtack.com/how-it-works)<br>https://www.thumbtack.com/how-it-works | 实站 · 品牌与机构 | 用一张室内大图铺底，压上「Book projects, fast and easy」；下面「This is how it works」开始逐步拆解。 | [查看原图](screenshots/470-thumbtack.jpg) |
| [TaskRabbit · 工作原理](https://www.taskrabbit.com/how-it-works)<br>https://www.taskrabbit.com/how-it-works | 实站 · 品牌与机构 | 绿色横条写「Book your task in 3 easy steps」，下面 1/2/3 分栏，每步配一张手机界面截图。 | [查看原图](screenshots/471-taskrabbit.jpg) |
| [Flowbite · Skeleton](https://flowbite.com/docs/components/skeleton/)<br>https://flowbite.com/docs/components/skeleton/ | 组件演示 · 组件与风格演示 | 用灰色方块与圆点拼出「加载中」的占位骨架，尺寸和真实内容一一对应；加载态因此不用转圈也能说明结构。 | [查看原图](screenshots/474-flowbite-skeleton.jpg) |
| [Scroll-driven · Progress bar](https://scroll-driven-animations.style/demos/progress-bar/css/)<br>https://scroll-driven-animations.style/demos/progress-bar/css/ | 组件演示 · 组件与风格演示 | 顶部一条细进度条随滚动增长，用 CSS 的 scroll-timeline 直接绑定，不需要 JS；长文阅读的位置感全靠这一条线。 | [查看原图](screenshots/475-scroll-driven-progress-bar.jpg) |
| [Scroll-driven · Stacking cards](https://scroll-driven-animations.style/demos/stacking-cards/css/)<br>https://scroll-driven-animations.style/demos/stacking-cards/css/ | 组件演示 · 组件与风格演示 | 整屏卡片在滚动时依次叠上来：前一张被钉住、后一张覆盖，靠 sticky 与 scroll-timeline 做出堆叠节奏。 | [查看原图](screenshots/476-scroll-driven-stacking-cards.jpg) |
| [Scroll-driven · Horizontal section](https://scroll-driven-animations.style/demos/horizontal-section/css/)<br>https://scroll-driven-animations.style/demos/horizontal-section/css/ | 组件演示 · 组件与风格演示 | 竖着滚、内容横着走：整个 section 被钉住，内部轨道按滚动距离平移，把长列表塞进一屏。 | [查看原图](screenshots/477-scroll-driven-horizontal-sec.jpg) |
| [Motion · Shared layout animation](https://motion.dev/examples/js-shared-layout-animation)<br>https://motion.dev/examples/js-shared-layout-animation | 组件演示 · 组件与风格演示 | 切换标签时同一个图形从列表位置滑到详情位置，靠共享的 layoutId 让两个界面之间的元素连续过渡。 | [查看原图](screenshots/478-motion-shared-layout-animati.jpg) |
| [Motion · Drag](https://motion.dev/examples/js-drag)<br>https://motion.dev/examples/js-drag | 组件演示 · 组件与风格演示 | 一块方块可以用指针拖动，松手后按惯性回弹；拖动、约束与回弹三段反馈拆得很清楚。 | [查看原图](screenshots/479-motion-drag.jpg) |
| [Chakra UI · Skeleton](https://chakra-ui.com/docs/components/skeleton)<br>https://chakra-ui.com/docs/components/skeleton | 组件演示 · 组件与风格演示 | 骨架屏用一个圆 + 两条灰条对应头像与标题：占位块的尺寸、圆角和真实内容一致，数据到达时不会跳动。 | [查看原图](screenshots/480-chakra-ui-skeleton.jpg) |
| [Motion · App Store layout](https://motion.dev/examples/js-app-store-layout)<br>https://motion.dev/examples/js-app-store-layout | 组件演示 · 组件与风格演示 | 点开一张卡片时，卡片从网格位置放大成详情页，图片、标题和按钮沿同一条路径移动；这就是 App Store 式的共享元素转场。 | [查看原图](screenshots/481-motion-app-store-layout.jpg) |

### 瑞士网格 / 国际主义

强调无衬线字体、对齐、模块网格和客观的信息组织。

识别点：强对齐线；清晰网格；排版承担视觉主体。

样本：23 例，其中 20 例实站/创意体验。这里收录受此语言影响的网页，不声称是严格的历史流派认证。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Vercel](https://vercel.com/)<br>https://vercel.com/ | 实站 · 开发者产品 | 观察黑白灰、细线和几何图形如何形成技术产品的品牌辨识度。 | [查看原图](screenshots/09-vercel.jpg) |
| [Obys Agency](https://obys.agency/)<br>https://obys.agency/ | 实站 · 创意工作室 | 观察非传统排版、字号对比和案例呈现如何塑造工作室个性。 | [查看原图](screenshots/18-obys.jpg) |
| [Studio Freight](https://www.studiofreight.com/)<br>https://www.studiofreight.com/ | 实站 · 创意工作室 | 观察品牌文字、项目缩略图和非均匀网格如何组织工作室作品。 | [查看原图](screenshots/20-studio-freight.jpg) |
| [Pentagram](https://www.pentagram.com/)<br>https://www.pentagram.com/ | 实站 · 内容与文化 | 观察大量设计作品如何通过缩略图、筛选与标题保持秩序。 | [查看原图](screenshots/34-pentagram.jpg) |
| [1014 · Space for Ideas](https://www.1014.nyc/)<br>https://www.1014.nyc/ | 实站 · 内容与文化 | 观察几何标识、原色与网格在文化机构网站中的运用；设计机构公开说明其 Bauhaus 启发。 | [查看原图](screenshots/81-1014.jpg) |
| [Sincro](https://sincro.es/en/us/)<br>https://sincro.es/en/us/ | 实站 · 品牌与机构 | 首屏左上角一个巨大的 Us 就占掉近半屏，右栏只放一张黑白照片和两行说明；导航按栏目竖排分组，把公司介绍页做成了目录页的节奏。 | [查看原图](screenshots/226-sincro.jpg) |
| [Harold AO - Portfolio "21](https://haroldao.com)<br>https://haroldao.com | 实站 · 个人作品集 | 近黑底上把 WEB DEVELOPER + DESIGNER 三行粗体压到几乎顶满左右边界，右侧只放一张微微倾斜的白色人像卡；顶部三个胶囊按钮压到最轻，让字重成为唯一主角。 | [查看原图](screenshots/234-harold-ao-portfolio-21.jpg) |
| [FORMAT](https://format.obys.agency/)<br>https://format.obys.agency/ | 风格演示 · 组件与风格演示 | FORMAT 六个字母用方正模块拼成一条顶满页宽的字标，下面压一条极细的信息栏；正文收进一个白色小窗格里，黑白对切让字标像印刷版的标题行。 | [查看原图](screenshots/237-format.jpg) |
| [FOLLOW.ART](https://follow.art/)<br>https://follow.art/ | 实站 · 产品与 SaaS | 标题大到只剩上半截，白色窄体几乎撑破画幅，字母因此被卡片和边线切碎；中间一叠黑色名片呈扇形展开，正好压住字母之间的负空间；左下两行 One Card. / Share it. Be noticed. Be supported. 加一枚邮箱输入框，把产品说明压到边角，先抓眼再解释。 | [查看原图](screenshots/255-follow-art.jpg) |
| [We Are Digital Freelancers](https://www.wearedigitalfreelancers.com)<br>https://www.wearedigitalfreelancers.com | 实站 · 创意工作室 | 把缩写 W/A/D/F 拆成四个独立的巨型字母，按错位的 2×2 摆在米色纸面上（A 抬高、D 下沉），字母之间的空白比字母本身还大；导航只剩 WORK / TRAVEL / MENU 三个词和右下角一个 CONTACT，用「排版即内容」省掉所有图片。 | [查看原图](screenshots/256-we-are-digital-freelancers.jpg) |
| [Brilean](https://www.brilean.com/)<br>https://www.brilean.com/ | 实站 · 创意工作室 | 同一句主张拆成两行、前灰后黑，「Your vision,」退成背景、「our expertise.」被读成重点；文字压到首屏下三分之一、上半屏整片留白，下沿再切成纯黑并放两颗镜面星，用一个硬切线暗示还有内容。 | [查看原图](screenshots/261-brilean.jpg) |
| [Heron AI](https://heronaiapp.com/)<br>https://heronaiapp.com/ | 实站 · 产品与 SaaS | 整屏不放大图，只在米白底上铺一张极淡的建筑立面线稿，品牌说明压到左下角四行紧排的小黑字、参数压到右下角的等宽小栏；用看得见的工程图纸配上几乎读不清的注脚，把技术可信度做出来。 | [查看原图](screenshots/262-heron-ai.jpg) |
| [morefont](https://morefont.ch)<br>https://morefont.ch | 实站 · 创意工作室 | 黑底上嵌两块转角半径极大的白卡，把「Strategy - Storytelling - …」这类能力长句做成两行撑满宽度、被屏边裁断的巨字；底部再用同尺寸的「morefont® Swiss Design Studio」压在卡片下缘，三种容器叠在一起制造版面张力。 | [查看原图](screenshots/264-morefont.jpg) |
| [a-lign studio](https://www.a-lign.studio)<br>https://www.a-lign.studio | 实站 · 创意工作室 | 四张实拍图分别装进虚线标注框，像设计稿批注一样散落在白色页面四周，中间留出居中的两行大标题和一枚橙红描边按钮；左侧再画一段台阶状虚线，把“流程”做成图形而不必真的排一个 steps 版块。 | [查看原图](screenshots/290-a-lign-studio.jpg) |
| [REDSTONE SOFTWARE](https://redstone.software/)<br>https://redstone.software/ | 实站 · 创意工作室 | 黑底只做一件事：把 SAAS. APP. AI. E-COMMERCE 拆成两行铺满整屏宽，字号大到几乎顶边；右侧在字行里嵌一张小产品截图，左下角用头像组加五星和 150+ clients 承担信任，文字本身就是版式。 | [查看原图](screenshots/293-redstone-software.jpg) |
| [Signal-A Studio](https://signal-a.studio)<br>https://signal-a.studio | 实站 · 创意工作室 | 把细衬线大写和粗体无衬线交替嵌进同一段自我介绍里，整段拉到满宽两端对齐，读起来像一张招贴；上下各压一层等宽小标签（导航下划线、当地时间、城市、底部疏排短句），让排版本身承担动效的预期。 | [查看原图](screenshots/321-signal-a-studio.jpg) |
| [REALIZER®](https://www.realizer.ch/en)<br>https://www.realizer.ch/en | 实站 · 品牌与机构 | 整屏铺一色亮黄，把 REALIZE / ABOUT / CONTACT 三个词用超粗斜体撑满宽度堆成三行，字大到直接充当导航；顶部只留一枚极小的品牌标、下方一行小字，靠单一撞色和字重完成全部视觉信息。 | [查看原图](screenshots/329-realizer.jpg) |
| [Nahiyan Khan - Personal Site](https://nahiyan.codes/)<br>https://nahiyan.codes/ | 实站 · 个人作品集 | 首屏把名字做成紧排的宽体无衬线大字顶在左上角，下面用三栏 10px 左右的小字铺开自述，并用 tldr / today / previously 一类极小的栏头做索引，其余全留黑；字号落差接近 40 倍，靠细线分栏把个人简历读成一张技术图纸。 | [查看原图](screenshots/350-nahiyan-khan-personal-site.jpg) |
| [Palaraiffeisen](https://www.palaraiffeisen.ch)<br>https://www.palaraiffeisen.ch | 实站 · 品牌与机构 | 整屏被 1px 细线切成表格式三栏：中栏白底放等宽日程小字和超大压缩体“BENVENUTI AL PALARAFFEISEN”，右栏是整块黄昏湖景实拍，右下角只留一张红底说明卡当唯一重色。 | [查看原图](screenshots/374-palaraiffeisen.jpg) |
| [SANTAL](https://santalarch.com)<br>https://santalarch.com | 实站 · 品牌与机构 | 把“SANTAL”放大到超出画幅、左右两端被裁掉，再用一条细线和一排小号导航把字标与下方留白隔开；正文缩成右侧一小块，靠字号的极端落差制造压迫感。 | [查看原图](screenshots/376-santal.jpg) |
| [Kontur](https://guides.kontur.ru/)<br>https://guides.kontur.ru/ | 官方规范 · 文档与设计系统 | 顶部一条纯黑横幅只放俄文标题和一张白色小卡（字标＋界面缩略图），下面立刻切回纯白，用四列等宽链接索引把所有规范条目一次平铺；全站只有黑白两色和克制的无衬线小字号，层级完全靠列宽与行距撑起来。 | [查看原图](screenshots/395-kontur.jpg) |
| [MUI: Base UI](https://base-ui.com/)<br>https://base-ui.com/ | 官方组件演示 · 文档与设计系统 | 标题左对齐占满两行大字，正文全部拆到右侧窄栏、按段分行排版，中间大片空白把文字块和页边拉开；底部 “Made for the makers” 用六个浅灰方块装合作方标志，全程不用品牌色。 | [查看原图](screenshots/402-mui-base-ui.jpg) |
| [Micah Lindley](https://micahlindley.com)<br>https://micahlindley.com | 实站 · 个人作品集 | 左半屏铺满正红，用一个白色 M 字母加绕成环的名字做徽标；右半屏留白放红色衬线标题和正文，中缝一刀两断，靠色块比例而不是照片建立记忆点。 | [查看原图](screenshots/408-micah-lindley.jpg) |

### 杂志编辑式

借用杂志的标题、导语、图片和多栏节奏组织内容。

识别点：衬线或展示标题；图文主次明确；栏目与阅读节奏。

样本：119 例，其中 117 例实站/创意体验。适合内容、作品与文化品牌；不只指新闻网站。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Studio Freight](https://www.studiofreight.com/)<br>https://www.studiofreight.com/ | 实站 · 创意工作室 | 观察品牌文字、项目缩略图和非均匀网格如何组织工作室作品。 | [查看原图](screenshots/20-studio-freight.jpg) |
| [Lee Robinson](https://leerob.com/)<br>https://leerob.com/ | 实站 · 个人作品集 | 观察个人简介、文章和项目如何在简短页面里形成清晰阅读顺序。 | [查看原图](screenshots/25-lee-robinson.jpg) |
| [Stripe Press](https://press.stripe.com/)<br>https://press.stripe.com/ | 实站 · 内容与文化 | 观察出版物封面如何成为视觉主体，以及书目、标题与介绍的层级。 | [查看原图](screenshots/31-stripe-press.jpg) |
| [The Pudding](https://pudding.cool/)<br>https://pudding.cool/ | 实站 · 内容与文化 | 观察数据故事如何通过封面、标题和不规则布局激发阅读兴趣。 | [查看原图](screenshots/32-pudding.jpg) |
| [Works in Progress](https://worksinprogress.co/)<br>https://worksinprogress.co/ | 实站 · 内容与文化 | 观察长内容媒体的标题、栏目、配图和文字密度。 | [查看原图](screenshots/33-works-in-progress.jpg) |
| [Pentagram](https://www.pentagram.com/)<br>https://www.pentagram.com/ | 实站 · 内容与文化 | 观察大量设计作品如何通过缩略图、筛选与标题保持秩序。 | [查看原图](screenshots/34-pentagram.jpg) |
| [Monocle](https://monocle.com/)<br>https://monocle.com/ | 实站 · 内容与文化 | 观察媒体首页如何容纳新闻、专题、音频和订阅入口。 | [查看原图](screenshots/35-monocle.jpg) |
| [Clarvos](https://www.clarvos.com/)<br>https://www.clarvos.com/ | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用杂志编辑式、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/88-clarvos.jpg) |
| [SentientX](https://www.sentientx.com)<br>https://www.sentientx.com | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用3D / 沉浸场景、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/94-sentientx.jpg) |
| [Zenarate](https://www.zenarate.com/)<br>https://www.zenarate.com/ | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用杂志编辑式、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/95-zenarate.jpg) |
| [Emotionaler Hunger](https://emotionalerhunger.de)<br>https://emotionalerhunger.de | 实站 · 消费品牌与电商 | 观察 电商/零售 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/107-emotionaler-hunger.jpg) |
| [Theobroma](https://theobromachocolat.com/)<br>https://theobromachocolat.com/ | 实站 · 消费品牌与电商 | 观察 消费品牌/独立品牌 站点如何用极繁 / 拼贴、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/114-theobroma.jpg) |
| [Caffè Gilli](https://www.caffegilli.com/en)<br>https://www.caffegilli.com/en | 实站 · 消费品牌与电商 | 观察 餐饮/食品饮料 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/115-caffe-gilli.jpg) |
| [Kent C. Dodds](https://kentcdodds.com)<br>https://kentcdodds.com | 实站 · 内容与文化 | 观察 教育/课程 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/134-kentcdodds-com.jpg) |
| [M Creative Industries](https://www.mcreativeindustries.com/)<br>https://www.mcreativeindustries.com/ | 实站 · 内容与文化 | 观察 教育/课程 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/135-m-creative-industries.jpg) |
| [Tania Rascia](https://taniarascia.com)<br>https://taniarascia.com | 实站 · 内容与文化 | 观察 教育/课程 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/138-taniarascia-com.jpg) |
| [Los Angeles Public Library](https://www.lapl.org/)<br>https://www.lapl.org/ | 实站 · 品牌与机构 | 观察 政府/公共事业 站点如何用极繁 / 拼贴、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/142-los-angeles-public-library.jpg) |
| [CMBLU](https://www.cmblu.com/)<br>https://www.cmblu.com/ | 实站 · 消费品牌与电商 | 观察 制造/工业/硬件 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/155-cmblu.jpg) |
| [Dennis Snellenberg](https://dennissnellenberg.com/)<br>https://dennissnellenberg.com/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/160-dennissnellenberg-com.jpg) |
| [Hamish Williams](https://hamishw.com/)<br>https://hamishw.com/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/163-hamishw-com.jpg) |
| [Patrick Heng](https://patrickheng.com/)<br>https://patrickheng.com/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/164-patrickheng-com.jpg) |
| [Rafael Conde](https://rafa.design)<br>https://rafa.design | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/166-rafa-design.jpg) |
| [Right Hemisphere](https://www.righthemisphere.studio/)<br>https://www.righthemisphere.studio/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/167-right-hemisphere-1.jpg) |
| [Studio Ping Pong](https://studiopingpong.com/)<br>https://studiopingpong.com/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用极繁 / 拼贴、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/168-studio-ping-pong.jpg) |
| [EAST 64 Films Corporatesite](https://www.east64films.com/)<br>https://www.east64films.com/ | 实站 · 内容与文化 | 观察 媒体/出版 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/171-east-64-films-corporatesite.jpg) |
| [Jason Lengstorf](https://www.jason.energy)<br>https://www.jason.energy | 实站 · 内容与文化 | 观察 媒体/出版 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/172-www-jason-energy.jpg) |
| [Roof Studio](https://roofstudio.tv)<br>https://roofstudio.tv | 实站 · 内容与文化 | 观察 媒体/出版 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/173-roof-studio.jpg) |
| [The Story Archive](https://www.thestoryarchive.net)<br>https://www.thestoryarchive.net | 实站 · 内容与文化 | 观察 媒体/出版 站点如何用杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/174-the-story-archive.jpg) |
| [Anthony Fu](https://antfu.me/)<br>https://antfu.me/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/187-antfu-me.jpg) |
| [Braydon Coyer](https://braydoncoyer.dev/)<br>https://braydoncoyer.dev/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/188-braydoncoyer-dev.jpg) |
| [Damian Watracz](https://watracz.com/)<br>https://watracz.com/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/189-watracz-com.jpg) |
| [David Darnes](https://darn.es)<br>https://darn.es | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/190-darn-es.jpg) |
| [Dejan Markovic](https://www.dejan.works)<br>https://www.dejan.works | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/191-www-dejan-works.jpg) |
| [George Francis](https://georgefrancis.dev)<br>https://georgefrancis.dev | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/192-georgefrancis-dev.jpg) |
| [Israel Mitolu](https://mitolu.dev)<br>https://mitolu.dev | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/193-mitolu-dev.jpg) |
| [Lee Robinson](https://leerob.io/)<br>https://leerob.io/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/194-leerob-io.jpg) |
| [Max Böck](https://mxb.dev)<br>https://mxb.dev | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/195-mxb-dev.jpg) |
| [Olaolu Olawuyi](https://olaolu.dev)<br>https://olaolu.dev | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/196-olaolu-dev.jpg) |
| [Ruben Kuipers](https://rubenkuipers.design/)<br>https://rubenkuipers.design/ | 实站 · 个人作品集 | 观察 个人作品集/创作者 站点如何用极简留白、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/197-rubenkuipers-design.jpg) |
| [IKONY](https://ikony.tv)<br>https://ikony.tv | 实站 · 内容与文化 | 左栏用一条细线隔开，塞进圆圈序号、粗体标题和 8px 密排正文；右侧让一枚正红圆形压住黑白半调照片，底部再横排一条照片带，全站只用红黑灰三色就把纪录片的分量做出来。 | [查看原图](screenshots/208-ikony.jpg) |
| [Vinay Arora • Design](http://www.vinayarora.design)<br>http://www.vinayarora.design | 实站 · 个人作品集 | 把整页做成一张深灰卡纸：主卡片里用荧光黄绿的手绘椭圆圈住 Judges a book，右侧压一枚橙色警示贴纸，左右各挂一条竖排导航，视线始终被收在卡片中央。 | [查看原图](screenshots/214-vinay-arora-design.jpg) |
| [MATHILDE DE CHIARA • PORTFOLIO](https://www.mathildedechiara.com/)<br>https://www.mathildedechiara.com/ | 实站 · 个人作品集 | 把图片排成一条居中的竖向胶片带，左栏只放斜体 01/30 页码，右栏放分类清单和 DISPLAY MODE 开关；两侧极小的元信息把中间的图推到主角位置。 | [查看原图](screenshots/215-mathilde-de-chiara-portfol.jpg) |
| [Zitong Zhao's Website](https://zitongzhao.info/)<br>https://zitongzhao.info/ | 实站 · 个人作品集 | 导航被切成五格等分、姓名居中，正文只有两行居中的无衬线大字；下方作品以两块等宽图片并排，靠极简排布把观察与直觉这句宣言顶成主角。 | [查看原图](screenshots/216-zitong-zhao-s-website.jpg) |
| [Cards & Coding](https://cards-and-coding.click/)<br>https://cards-and-coding.click/ | 创意体验 · 在线体验 | 首屏不放大标题，而是用五行左对齐的法文说明当主视觉，右侧斜放一张圆角色卡压住文字边缘；一张纸卡的位置和投影就破掉了标题居中加按钮的套路。 | [查看原图](screenshots/218-cards-coding.jpg) |
| [Robert Mayer Portfolio](http://mayerr.com)<br>http://mayerr.com | 实站 · 个人作品集 | 在正文后面铺一层放大到溢出的同名残影，配合长短错落的右对齐短句做出镜头拖影；深棕底加奶油白字，让超大标题有分量却不刺眼。 | [查看原图](screenshots/220-robert-mayer-portfolio.jpg) |
| [Kavieng Creative](https://www.kaviengcreative.com/)<br>https://www.kaviengcreative.com/ | 实站 · 个人作品集 | 用五列不等高的黑白缩略图铺满整屏，导航和社交链接缩到顶部一行 8px 小字；把作品多本身做成版式，第一眼先给信息量而不是单张图。 | [查看原图](screenshots/221-kavieng-creative.jpg) |
| [Halcyon Lighting](https://www.halcyon.co.nz/)<br>https://www.halcyon.co.nz/ | 实站 · 消费品牌与电商 | 整屏建筑实拍做底，Go Light. 用超大无衬线直接压在画面上并故意被裁切；左上角还放了一个 OFF 开关，把「灯」的体验做成可直接点的小控件。 | [查看原图](screenshots/228-halcyon-lighting.jpg) |
| [Monumoir](https://www.monumoir.com)<br>https://www.monumoir.com | 实站 · 产品与 SaaS | 两张黑白人物照分别用渐隐蒙版融进白底，衬线标题 Memories of the Past 就落在两者的空档里；靠「半消失」的照片做历史感，而不是靠加装饰。 | [查看原图](screenshots/232-monumoir.jpg) |
| [World Cup — The Immortals](https://theimmortals.world/)<br>https://theimmortals.world/ | 创意体验 · 在线体验 | 3D 渲染的金杯压在中轴，前后再叠球队合影和两张半透明老照片，凑出三层纵深；年份 2026 直接当图形排在右侧，标题只在下方向留一句。 | [查看原图](screenshots/233-world-cup-the-immortals.jpg) |
| [FORMAT](https://format.obys.agency/)<br>https://format.obys.agency/ | 风格演示 · 组件与风格演示 | FORMAT 六个字母用方正模块拼成一条顶满页宽的字标，下面压一条极细的信息栏；正文收进一个白色小窗格里，黑白对切让字标像印刷版的标题行。 | [查看原图](screenshots/237-format.jpg) |
| [Huy Phan Vol.2](https://huyml.co/)<br>https://huyml.co/ | 实站 · 个人作品集 | 作品截图沿对角线一叠压一叠地往后缩，像手上一摞卡片；红色衬线大字只露出上半截在折线处，留白占了大半屏，靠「没露完」制造继续滚动的动力。 | [查看原图](screenshots/238-huy-phan-vol-2.jpg) |
| [Goodman Gallery](https://goodman-gallery.com/)<br>https://goodman-gallery.com/ | 实站 · 内容与文化 | 整屏是一张观众看画的实景照，标题两行居中压在画面中间偏上，下面并排两个小按钮；左右下角各塞一张小卡片放周年信息和 cookie，主体画面始终没被挡住。 | [查看原图](screenshots/241-goodman-gallery.jpg) |
| [Cassandra Vale](https://thecassandravale.com/)<br>https://thecassandravale.com/ | 实站 · 内容与文化 | 首屏按杂志封面排：整屏人像只露到肩线，名字用超粗压缩体撑满页宽压在画面底部，上下各叠一条细白线和一行全大写小字（CHARACTER · FASHION · ATTITUDE / STORIES IN MOTION）；顶角只留 CV 和 INSTAGRAM CONTACT，安静得像一张封面而不是网站在开会。 | [查看原图](screenshots/248-cassandra-vale.jpg) |
| [A24](https://a24.raviklaassens.com/)<br>https://a24.raviklaassens.com/ | 创意体验 · 内容与文化 | 把剧照裁成正圆当「光盘」摆成一条向右甩出的弧线，圆与圆互相重叠、最右那张只露出半边，暗示还能横向继续；片名、导演、年份用表格和等宽小字排在左上，影评金句用极小的大写压在圆下，用档案感替代常见的海报墙。 | [查看原图](screenshots/254-a24.jpg) |
| [Lee Holmes](https://leeholmes.uk)<br>https://leeholmes.uk | 实站 · 个人作品集 | 标题被纵向拉长、压到极窄，两行叠得几乎相撞，只占左侧一半，右边留一块模糊的视频截帧当暖底；导航把「可接项目」写成带圆点的状态标签放在正中，黑色药丸 Start a project 单独置右，信息与态度分成三层。 | [查看原图](screenshots/258-lee-holmes.jpg) |
| [LxL Creative](https://www.lxlcreative.co.uk/)<br>https://www.lxlcreative.co.uk/ | 实站 · 创意工作室 | 左侧一块近半屏的竖幅人像，右侧大片暖棕空场只放三行小标题，中间一行换成橙色手写体做强调；底部「creative」用奶白无衬线撑到出血级，并让橙色手写字标压在照片与底色的交界处，两种字形一软一硬，首屏只留这一个记忆点。 | [查看原图](screenshots/260-lxl-creative.jpg) |
| [Heron AI](https://heronaiapp.com/)<br>https://heronaiapp.com/ | 实站 · 产品与 SaaS | 整屏不放大图，只在米白底上铺一张极淡的建筑立面线稿，品牌说明压到左下角四行紧排的小黑字、参数压到右下角的等宽小栏；用看得见的工程图纸配上几乎读不清的注脚，把技术可信度做出来。 | [查看原图](screenshots/262-heron-ai.jpg) |
| [TARQ](https://www.tarqstudio.com)<br>https://www.tarqstudio.com | 实站 · 创意工作室 | 一张几乎全暗的室内实拍占满首屏，左右把栏目名竖排、把项目序号和说明压成 10px 小字，正中只留一个项目名与左右箭头；暗部吞掉画面边界，首屏看起来像展厅投影而不是网页。 | [查看原图](screenshots/263-tarq.jpg) |
| [NIKE Corporate website](https://about.nike.com/en)<br>https://about.nike.com/en | 实站 · 品牌与机构 | 把一句口号拆成三行、用接近顶宽的超粗压缩黑体顶满左半屏，再用一个小星号把注解引到下面的斜体小字；右半屏整块留黑，只在最底部放一张货架照片和一条文章卡，让企业站读起来像杂志封面。 | [查看原图](screenshots/265-nike-corporate-website.jpg) |
| [Frontier Dialogues](http://www.frontierdialogues.com)<br>http://www.frontierdialogues.com | 实站 · 内容与文化 | 让「FRONTIER DIALOGUES」大到每个字母都溢出屏幕、只露出局部，后面垫奶油/粉/橙的有机色块做层次；左边缘竖排 CH.00–CH.07 的章节索引，把一张活动海报直接变成可点击的目录。 | [查看原图](screenshots/267-frontier-dialogues.jpg) |
| [Emele Collab](https://emelecollab.com/)<br>https://emelecollab.com/ | 实站 · 创意工作室 | 首屏一张图都没有，只把十几个客户名用同一种超粗压缩体居中堆成一座塔，靠每行字数不同形成锯齿轮廓；四角缩到 8px 的小字负责导航（List/Grid/Gallery、版权、工作室名），把作品集首页做成纯排版练习。 | [查看原图](screenshots/268-emele-collab.jpg) |
| [Xanvier Allison](https://xanvierallison.com/)<br>https://xanvierallison.com/ | 实站 · 个人作品集 | 全屏黑白人物特写里只放一个居中的细衬线英文名，其余信息全部缩成 8px 等宽小字散在四角（片长、奖项、栏目）；用一个人名加一圈注脚的大小反差，把首屏做成电影片头而不是作品列表。 | [查看原图](screenshots/270-xanvier-allison.jpg) |
| [Breems](https://www.bramvanvugt.com/)<br>https://www.bramvanvugt.com/ | 实站 · 创意工作室 | 不用作品图，改用一张人在沙发上刷手机的生活照铺满首屏，把 BREEMS 拉到满宽、字距拉宽压在最下沿并故意与人物腿部重叠；右侧只留一个黑色圆钮做联系入口，整屏信息压到三条。 | [查看原图](screenshots/272-breems.jpg) |
| [Loam House](https://residences.loamhouse.com.au)<br>https://residences.loamhouse.com.au | 实站 · 品牌与机构 | 黄昏渲染图做首屏，白色衬线「House-sized.」与金色斜体「Bayside living.」错位叠在楼体边缘，让字和建筑互相切割；右侧压一块半透明深色表单卡，把留资动作直接塞进首屏而不另开页面。 | [查看原图](screenshots/273-loam-house.jpg) |
| [Bécane Paris](https://www.becaneparis.com/)<br>https://www.becaneparis.com/ | 实站 · 消费品牌与电商 | 把 11 个模特缩到同一水平线、等距排成一条横带放在页面中央，人只有几十像素高，衣服轮廓是唯一可读的信息；标题与「14 PRODUCTS」用极小等宽字补齐，四周留白接近七成，用远看代替常规商品大图。 | [查看原图](screenshots/275-be-cane-paris.jpg) |
| [Gavin Schneider Productions](https://www.gsproductions.co.za/)<br>https://www.gsproductions.co.za/ | 实站 · 创意工作室 | 左栏一张竖幅时装照紧贴页面边缘、下面再接一张海边小图形成错位两段式，右栏整片留白只放两行等宽小注；导航用三个平铺栏目名压在最上方，靠一张图加半边空白做出画册翻阅感。 | [查看原图](screenshots/276-gavin-schneider-production.jpg) |
| [Juan Mora Romero](https://www.juanmoraromero.com/)<br>https://www.juanmoraromero.com/ | 实站 · 个人作品集 | 深灰底用细栏线切成对称网格，一段超大黑体自述横跨五栏，左侧把服务与地点排成表格式小字清单；作品区用方图、椭圆有机形、黑底粉票三种裁切分区，靠形状差异而不是间距。 | [查看原图](screenshots/283-juan-mora-romero.jpg) |
| [ibaCOMMUNITY worldwide baking](https://iba-globe.why.de/)<br>https://iba-globe.why.de/ | 创意体验 · 内容与文化 | 整屏压成接近黑的模糊影像，只留一句高对比衬线大字和一枚对齐其字首的黄色药丸按钮；全站只有黄色一个强调色，“进入”成了画面里唯一的可点信号。 | [查看原图](screenshots/286-ibacommunity-worldwide-bak.jpg) |
| [This is AIRE](https://thisisaire.ch/)<br>https://thisisaire.ch/ | 实站 · 品牌与机构 | 奶油底上先给一行拉开字距的全大写小标，再叠三段超大高反差衬线标题，正文仍用同一衬线体收窄栏宽并居中；标题两侧各放一颗虚焦 3D 珍珠，让规整的居中排版有呼吸。 | [查看原图](screenshots/289-this-is-aire.jpg) |
| [Readymag WOTY 2026](https://readymag.com/websites-of-the-year/?utm_source=awwwards&utm_medium=partnership_submission&utm_campaign=woty)<br>https://readymag.com/websites-of-the-year/?utm_source=awwwards&utm_medium=partnership_submission&utm_campaign=woty | 实站 · 内容与文化 | 荧光绿铺满整屏，一笔手写体巨字横穿画面压在标题之上，四边用密排小字块、深色分隔条和一张小照片卡托住信息，导航做成一排黑色药丸，整页读起来像一张印刷的奖项海报。 | [查看原图](screenshots/296-readymag-woty-2026.jpg) |
| [Say Hey](https://www.sayhey.be/en/)<br>https://www.sayhey.be/en/ | 实站 · 创意工作室 | 近黑的底上只放三样东西：被裁掉的竖排巨字、半颗暗红圆盘、底部一张黑白人像，中央故意空出一大片；cookie 弹层用红色等宽标题和开关行，证明极简页面也能有明确的功能层。 | [查看原图](screenshots/297-say-hey.jpg) |
| [Boon Global](https://www.boonglobal.io/)<br>https://www.boonglobal.io/ | 实站 · 产品与 SaaS | 把一张熔岩橙的抽象视觉切成四块拼版、留出明显接缝，白色巨字横跨接缝排成两行、第二行刻意右移，左下角补一段等宽小字与滚动提示，做出电影片头的节奏。 | [查看原图](screenshots/299-boon-global.jpg) |
| [Louisiana Governor's Mansion](https://www.governorsmansion.org/)<br>https://www.governorsmansion.org/ | 实站 · 品牌与机构 | 庭院实拍几乎占满上半屏，下方留一条纯白带放收紧字距的衬线全大写标题，中间只插一个圆形播放键和 START VIRTUAL TOUR 小标签，靠尺幅与留白把机构感撑起来。 | [查看原图](screenshots/301-louisiana-governor-s-mansi.jpg) |
| [XNRGY Club](https://xnrgyclub.com/)<br>https://xnrgyclub.com/ | 实站 · 消费品牌与电商 | 球场照片被压暗铺底，一行白色无衬线大字几乎撑满宽度横穿画面，导航缩成顶部一排小字与两枚紫色按钮，右下角只留一颗圆形联系按钮当唯一入口。 | [查看原图](screenshots/306-xnrgy-club.jpg) |
| [Grail](https://grail-app.com/)<br>https://grail-app.com/ | 实站 · 产品与 SaaS | 上半屏用一行撑满全宽的衬线大标题定调，下半屏让一叠任务卡在黑色空间里错落悬浮，靠卡片投影的深浅与遮挡关系造出纵深，中间那几张彩色图案卡负责提供唯一的高饱和点。 | [查看原图](screenshots/310-grail.jpg) |
| [\\' Brand Consultant](https://workbyw.com/)<br>https://workbyw.com/ | 实站 · 创意工作室 | 不同尺寸的影像块在橄榄绿底上错位叠放、高度参差，每块角上带一枚细小的跳转标记，下半屏用三行全大写无衬线标题收尾，靠拼贴的节奏感代替常规栅格。 | [查看原图](screenshots/312-brand-consultant.jpg) |
| [UI KIDS](https://buttons.evrone.com/)<br>https://buttons.evrone.com/ | 实站 · 内容与文化 | 白底上先摆面包屑和一行粗黑标题，正文收进很窄的一栏、字号压小到只做说明，然后把整幅绿底漫画插画塞进下方圆角区域；橙色的导航按钮是画面上唯一的暖色，正文和插图之间靠留白分隔而不是分割线。 | [查看原图](screenshots/319-ui-kids.jpg) |
| [Signal-A Studio](https://signal-a.studio)<br>https://signal-a.studio | 实站 · 创意工作室 | 把细衬线大写和粗体无衬线交替嵌进同一段自我介绍里，整段拉到满宽两端对齐，读起来像一张招贴；上下各压一层等宽小标签（导航下划线、当地时间、城市、底部疏排短句），让排版本身承担动效的预期。 | [查看原图](screenshots/321-signal-a-studio.jpg) |
| [STANZZA design](https://stanzza.design/awards)<br>https://stanzza.design/awards | 实站 · 创意工作室 | 整屏铺一张暖褐调室内实拍，两行奶油色衬线短句直接压在家具上方，句子上再叠一笔红色手写花体做装饰；顶部只留居中的 logo、左侧 MENU 和右侧预约胶囊按钮，其余全让给照片。 | [查看原图](screenshots/322-stanzza-design.jpg) |
| [h2a.lu](https://www.h2a.lu/)<br>https://www.h2a.lu/ | 实站 · 创意工作室 | 整屏是一张被拍下的建筑外墙，绿色 WORK HARD 字样像反光一样浮在窗玻璃里，正好当主视觉；导航拆成左右两组小字夹住中央 logo，页面中间再浮一条半透明胶囊菜单，把实拍和 UI 分成两层。 | [查看原图](screenshots/324-h2a-lu.jpg) |
| [New Zealanderlivery Service](https://www.newzealanderliveryservice.co.nz/)<br>https://www.newzealanderliveryservice.co.nz/ | 创意体验 · 消费品牌与电商 | 把四个真人裹进半透明快递袋拍成主视觉，标题只占左栏 1/4 宽、下面接条形码与邮戳式小字；底部横一条黄黑警戒带做滚动公告，用“包裹”这一种材质把整场活动钉在运输主题上。 | [查看原图](screenshots/332-new-zealanderlivery-servic.jpg) |
| [Ronnsquare](https://ronnsquare.fr)<br>https://ronnsquare.fr | 实站 · 品牌与机构 | 米色底上把四行粗黑标题压在左栏、右侧两张建筑照片上下错开半格形成阶梯，中间留一条缝透气；页头同时塞进公告条、实心与描边双按钮和 FR 切换，信息很密却被两种颜色收住。 | [查看原图](screenshots/334-ronnsquare.jpg) |
| [Eppel Fotografie](https://eppel.nl)<br>https://eppel.nl | 实站 · 个人作品集 | 银灰渐变铺满整屏，衬线标题里两端的词用斜体、中间一行正体，靠字形切换制造韵律；底部一道巨大的弧形把画面切成上下两半，两侧各留一枚 carousel 箭头暗示后面是图集。 | [查看原图](screenshots/336-eppel-fotografie.jpg) |
| [Think Company](https://www.thinkcompany.com)<br>https://www.thinkcompany.com | 实站 · 创意工作室 | 深蓝噪点底上把两张团队照片贴到版心外的上下边缘，中间用白色与红色两行大字标题占满横向；正文只留三行，下面接一个 “Ask us anything” 输入框，把“先提问”的销售动作搬进首屏。 | [查看原图](screenshots/337-think-company.jpg) |
| [ishikawa.co — Walkable Atlas](https://ishikawa.co/en/)<br>https://ishikawa.co/en/ | 创意体验 · 内容与文化 | 正文被收进约 40% 宽的窄栏并整体下移到页面中段，上方留出大片空白；小标题用 8px 等宽大写、值靠右排成表格式“路书”条目，再用一根极细分割线隔开下一段大字标题。 | [查看原图](screenshots/338-ishikawa-co-walkable-atlas.jpg) |
| [Nils Schekorr](http://schekorr.com/)<br>http://schekorr.com/ | 实站 · 个人作品集 | 把自我介绍排成三行通栏大字从左侧起排，右中再压一枚手绘蓝圈写 “What's your biggest challenge?”，用批注语气把顾问变成对话者；正文与姓名缩到 9px 贴边，照片只留一条低对比度的幕墙横带。 | [查看原图](screenshots/343-nils-schekorr.jpg) |
| [Ocean](https://oceanfilms.com.br/)<br>https://oceanfilms.com.br/ | 实站 · 内容与文化 | 整屏铺一张电影感剧照，左侧竖排黄色 OCEAN 只露出半截、压住画面边缘；正中一枚细黄圆圈像取景器套住人物，右上角导航也用同色小字，三个黄色元素把整屏统一成“镜头”。 | [查看原图](screenshots/344-ocean.jpg) |
| [Leome and Partners](https://leome-and-partners.com)<br>https://leome-and-partners.com | 实站 · 品牌与机构 | 把 “Legal advice made simple” 拆成四个词钉在四角、中间整块留空，读者必须用视线把句子拼回来；深墨绿底配薄荷色字和一枚描边 MENU，全部重量只靠排版位置承担。 | [查看原图](screenshots/348-leome-and-partners.jpg) |
| [Crosswalk](https://www.crosswalk.cl/en)<br>https://www.crosswalk.cl/en | 实站 · 品牌与机构 | 通篇只有一个墨绿底色，中央放一张可细读的细线齿轮/流程图（浅色 1px 描边 + 极小的节点标注），左下角两行特细无衬线撑住视线，导航压成右上角两个小胶囊；用单色加蓝图感把咨询公司讲成一份工程图纸。 | [查看原图](screenshots/352-crosswalk.jpg) |
| [Indigov](https://indigov.com/)<br>https://indigov.com/ | 实站 · 产品与 SaaS | 把国会山版画与华盛顿像抠进圆形里、再给他戴上彩色条纹墨镜，用铜版画加 90 年代波普配饰做出“老机构 × 新工具”的反差；标题用衬线大字配一条长破折号收尾，紧接一个单字段邮箱表单完成留资。 | [查看原图](screenshots/357-indigov.jpg) |
| [Anthracite Studio](https://anthracitestudio.be)<br>https://anthracitestudio.be | 实站 · 创意工作室 | 黑底上先用衬线大字讲卖点，把 “sur mesure” 与 “et les IA” 直接用亮蓝色块反白标出，像荧光笔划重点；下半屏留给一片蓝色点阵“地形”做 3D 主视觉，文字负责信息、点云负责气氛。 | [查看原图](screenshots/359-anthracite-studio.jpg) |
| [Findra.art](https://findra.art/)<br>https://findra.art/ | 实站 · 内容与文化 | 标题做成顶到两边的超窄体大写，下面紧跟两排可点的筛选标签（排序 / 平台 / 角色类型），再往下才是带手写涂鸦和洋红标签的封面大图；它把“可检索的杂志目录”直接搬到首屏，而不是先做氛围图。 | [查看原图](screenshots/360-findra-art.jpg) |
| [Stéfano Girardelli — Designer](https://stefanobg.com)<br>https://stefanobg.com | 实站 · 个人作品集 | 低照度雨夜街景铺满整屏，标题把 “apps” 换成洋红并把一个小圆头像直接嵌进句子里，右侧一串 10px 的 WORKS / ABOUT / REEL 加箭头；靠明暗比和从 80px 骤降到 10px 的字号差，把一句话读成电影海报。 | [查看原图](screenshots/361-ste-fano-girardelli-design.jpg) |
| [Justus John](https://www.justus-john.com)<br>https://www.justus-john.com | 实站 · 个人作品集 | 九成面积是空白，视觉中心只有两行衬线体：第一行深色约 60px，第二行浅灰约 20px 且带 // 前缀，拼成一句德文对仗；导航缩到 12px 散在四角，用极端字号差和留白制造安静。 | [查看原图](screenshots/365-justus-john.jpg) |
| [Pier Gorelli](https://piergorelli.com)<br>https://piergorelli.com | 实站 · 个人作品集 | 首屏上半区几乎全空，超大无衬线“I do dev.”压在左下、紧跟一行粗体副标题；导航拆成 01–04 编号加右上的等宽坐标与当地时间，用周围小字的密度把标题体量衬出来。 | [查看原图](screenshots/370-pier-gorelli.jpg) |
| [Onseis Studio](https://onseis.com)<br>https://onseis.com | 实站 · 创意工作室 | 顶部用一条反复滚动的“NOW BOOKING NOVEMBER · 2 SPOTS LEFT”代替普通导航条，中间大留白里只留几组极小号说明文字，底部一排品牌交付物缩略图横着切开画面，让作品占主导。 | [查看原图](screenshots/372-onseis-studio.jpg) |
| [ALT Agency](https://www.altagency.co.uk)<br>https://www.altagency.co.uk | 实站 · 创意工作室 | 一张带水面倒影的城市实景铺满首屏，三行标题里只把中间的“Alternative”换成衬线斜体做节奏断点；正文与一排客户 logo 全压在照片下缘的暗部，字不抢图。 | [查看原图](screenshots/373-alt-agency.jpg) |
| [Palaraiffeisen](https://www.palaraiffeisen.ch)<br>https://www.palaraiffeisen.ch | 实站 · 品牌与机构 | 整屏被 1px 细线切成表格式三栏：中栏白底放等宽日程小字和超大压缩体“BENVENUTI AL PALARAFFEISEN”，右栏是整块黄昏湖景实拍，右下角只留一张红底说明卡当唯一重色。 | [查看原图](screenshots/374-palaraiffeisen.jpg) |
| [EASYSELLER | Elevate Your Sales](https://www.easyseller.it/)<br>https://www.easyseller.it/ | 实站 · 创意工作室 | 一棵深绿色的 3D 蓟草从画面顶端垂下来，巨型衬线标题“Elevate Your Sales”横穿主体中部、字与物互相遮挡，白底上只靠黑字和这一件深绿雕塑撑起对比。 | [查看原图](screenshots/379-easyseller-elevate-your-sa.jpg) |
| [AI Uis](https://aiu.is/)<br>https://aiu.is/ | 实站 · 文档与设计系统 | 左侧是带罗马数字章节的目录清单，右侧把同一批条目排成一张点阵，每个点对应一条、用大小和空心/实心区分层级，让目录本身变成可看的图形。 | [查看原图](screenshots/381-ai-uis.jpg) |
| [Subscrr](https://subscrr.app/)<br>https://subscrr.app/ | 实站 · 产品与 SaaS | 一张落日海面照片铺满首屏，标题用两行超压缩白色大写压在海平线上，句末留一个星号、下方单独补“so you don't have to”，把广告语写成有停顿的一句话。 | [查看原图](screenshots/383-subscrr.jpg) |
| [https://orbita.bar](http://orbita.bar)<br>http://orbita.bar | 实站 · 品牌与机构 | 奶油底上把“ОРБИТА”做成挤满画幅的压缩黑体，一颗地球实拍照从标题下缘浮出、遮住字的下半部，再用几条极细放射线、粉色小叉和粉色胶囊按钮把海报感补全。 | [查看原图](screenshots/384-https-orbita-bar.jpg) |
| [Structure Consulting Engineers](https://structureengineering.com.au/)<br>https://structureengineering.com.au/ | 实站 · 品牌与机构 | 把一张木结构天花的仰拍铺满首屏，导航变成一排半透明白色胶囊贴在顶部；标题落在画面中下部，右下角三张带细框的项目卡把作品提前塞进首屏。 | [查看原图](screenshots/388-structure-consulting-engin.jpg) |
| [Durgesh](https://yodkwtf.com/)<br>https://yodkwtf.com/ | 实站 · 个人作品集 | 左侧用衬线体两行自述、第二行降成灰色弱化，正文把 React.js、Next.js 等技术名词加粗成视觉锚点；右侧浮一张仿代码编辑器的 YAML 卡片，卡片投影与页面底部薄荷绿径向光晕连成一片，视线自然从标题滑到卡片。 | [查看原图](screenshots/405-durgesh.jpg) |
| [Micah Lindley](https://micahlindley.com)<br>https://micahlindley.com | 实站 · 个人作品集 | 左半屏铺满正红，用一个白色 M 字母加绕成环的名字做徽标；右半屏留白放红色衬线标题和正文，中缝一刀两断，靠色块比例而不是照片建立记忆点。 | [查看原图](screenshots/408-micah-lindley.jpg) |
| [Cassidy Williams](https://cassidoo.co/)<br>https://cassidoo.co/ | 实站 · 个人作品集 | 整页就是一条窄文本流：名字用宽字距衬线、正文用等宽字，段落里的关键链接用黄粉色下划线高亮，头像做成小圆压在标题右上，读到最新文章处才切成带日期的列表。 | [查看原图](screenshots/417-cassidy-williams.jpg) |
| [Sankalp Tharu](https://sankalptharu.com.np)<br>https://sankalptharu.com.np | 实站 · 个人作品集 | 近黑底把左边排成窄栏长文本、右边压一个大圆头像，姓名与职位只靠字号和灰阶分层；正文下面接一排小圆社交图标和两个带箭头的文字按钮，再用一条横贯全宽的 leave a note 输入行把联系方式直接嵌进首屏。 | [查看原图](screenshots/429-sankalp-tharu.jpg) |
| [Anirban Das](https://www.anirbandas.in/)<br>https://www.anirbandas.in/ | 实站 · 个人作品集 | 首屏铺满紫灰烟云图，只在中央放一句三词英文标语：白色衬线字拉开字距浮在雾上，名字用更小的全大写字母压在画面顶部；下方黑色横带用同一款衬线再写一次 Contact Us，上下两句形成呼应。 | [查看原图](screenshots/430-anirban-das.jpg) |
| [Kehinde Omopariola](https://www.pariola.dev)<br>https://www.pariola.dev | 实站 · 个人作品集 | 近黑底左上用两行 Frontend Developer. 占满视线，右侧压一张带细描边和偏移阴影的黑白人像，形成文字块对图像块的对角平衡；下方再用一条细线切成 Design 与 Engineering 两栏大标题，读起来像两页跨版。 | [查看原图](screenshots/435-kehinde-omopariola.jpg) |
| [Andrew Branch](https://blog.andrewbran.ch/)<br>https://blog.andrewbran.ch/ | 实站 · 个人作品集 | 白底只留一条居中窄栏：每篇文章由一行灰色小号日期、一个衬线标题和一行灰色摘要组成，行间距拉得很开；页眉仅放一枚红色小标记、about 链接和 GitHub 图标，把注意力全部让给标题文字。 | [查看原图](screenshots/437-andrew-branch.jpg) |
| [Arc Marumo · 404](https://www.arcmarumo.com/404)<br>https://www.arcmarumo.com/404 | 实站 · 个人作品集 | 整屏混凝土照片上摆一组巨型 404 字标，靠材质和尺度制造压迫感；返回入口缩到一角。 | [查看原图](screenshots/441-arc-marumo-404.jpg) |
| [PostHog · 定价页](https://posthog.com/pricing)<br>https://posthog.com/pricing | 实站 · 产品与 SaaS | 先说「97% 的公司免费用」，再按产品线列出用量阶梯；把定价讲成一张可算的账单。 | [查看原图](screenshots/458-posthog.jpg) |
| [Zapier · 应用目录](https://zapier.com/apps)<br>https://zapier.com/apps | 实站 · 产品与 SaaS | 首屏强调「The world's most connected AI platform」，下面是应用图标与分类入口，搜索框放在最显眼位置。 | [查看原图](screenshots/465-zapier.jpg) |
| [Retool · 关于](https://retool.com/about)<br>https://retool.com/about | 实站 · 产品与 SaaS | 「Help us rethink software development」压在团队照片拼贴上，招聘入口放在首屏内；把「人」当成公司介绍的主视觉。 | [查看原图](screenshots/466-retool.jpg) |
| [Deel · 关于](https://www.deel.com/about/)<br>https://www.deel.com/about/ | 实站 · 产品与 SaaS | 深色大图里放团队全景，标题「Work with the world」既是使命也是招聘文案。 | [查看原图](screenshots/467-deel.jpg) |
| [HubSpot · 公司介绍](https://www.hubspot.com/company)<br>https://www.hubspot.com/company | 实站 · 产品与 SaaS | About Us 用多张团队与文化照片拼成一张大图，文字只占左侧一栏；用密度表达「公司很大、很活跃」。 | [查看原图](screenshots/468-hubspot.jpg) |
| [Airbnb · 工作原理](https://www.airbnb.com/e/howairbnbworks)<br>https://www.airbnb.com/e/howairbnbworks | 实站 · 消费品牌与电商 | 「You're just 3 steps away」下面直接编号 1/2/3，每步一行粗体 + 两行说明；把流程做成可扫读的清单。 | [查看原图](screenshots/469-airbnb.jpg) |
| [Thumbtack · 工作原理](https://www.thumbtack.com/how-it-works)<br>https://www.thumbtack.com/how-it-works | 实站 · 品牌与机构 | 用一张室内大图铺底，压上「Book projects, fast and easy」；下面「This is how it works」开始逐步拆解。 | [查看原图](screenshots/470-thumbtack.jpg) |
| [Scroll-driven · Progress bar](https://scroll-driven-animations.style/demos/progress-bar/css/)<br>https://scroll-driven-animations.style/demos/progress-bar/css/ | 组件演示 · 组件与风格演示 | 顶部一条细进度条随滚动增长，用 CSS 的 scroll-timeline 直接绑定，不需要 JS；长文阅读的位置感全靠这一条线。 | [查看原图](screenshots/475-scroll-driven-progress-bar.jpg) |

### 高端摄影 / 品牌留白

用高质量产品或生活方式摄影、低密度文案与留白传达质感。

识别点：大幅摄影；少量操作；材质与光线主导。

样本：39 例，其中 39 例实站/创意体验。价格高不代表符合此方向，分类以页面视觉为依据。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Instrument](https://www.instrument.com/)<br>https://www.instrument.com/ | 实站 · 创意工作室 | 观察品牌影片、简洁导航与作品列表如何共同讲述工作室能力。 | [查看原图](screenshots/17-instrument.jpg) |
| [Apple](https://www.apple.com/)<br>https://www.apple.com/ | 实站 · 消费品牌与电商 | 观察大幅产品图、简短标题和连续模块如何安排浏览与购买路径。 | [查看原图](screenshots/26-apple.jpg) |
| [Bang & Olufsen](https://www.bang-olufsen.com/)<br>https://www.bang-olufsen.com/ | 实站 · 消费品牌与电商 | 观察高端硬件的材质摄影、留白与少量购买操作如何搭配。 | [查看原图](screenshots/28-bang-olufsen.jpg) |
| [DJI 大疆](https://www.dji.com/cn)<br>https://www.dji.com/cn | 实站 · 消费品牌与电商 | 观察硬件品牌如何通过场景影像、简练文案和产品入口传达使用价值。 | [查看原图](screenshots/30-dji.jpg) |
| [Bread & Boxers](https://breadandboxers.com/se)<br>https://breadandboxers.com/se | 实站 · 消费品牌与电商 | 观察 电商/零售 站点如何用高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/106-bread-boxers.jpg) |
| [Fitosauna](https://fitosauna.com/)<br>https://fitosauna.com/ | 实站 · 消费品牌与电商 | 观察 电商/零售 站点如何用高端摄影 / 品牌留白、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/108-fitosauna.jpg) |
| [Killstar](https://www.killstar.com/)<br>https://www.killstar.com/ | 实站 · 消费品牌与电商 | 观察 电商/零售 站点如何用高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/109-killstar.jpg) |
| [LEDUP — Lighting the Future](https://ledup.pt)<br>https://ledup.pt | 实站 · 消费品牌与电商 | 观察 电商/零售 站点如何用高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/110-ledup-lighting-the-future.jpg) |
| [Wiemer](https://www.wiemer.store/)<br>https://www.wiemer.store/ | 实站 · 消费品牌与电商 | 观察 电商/零售 站点如何用极简留白、高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/111-wiemer.jpg) |
| [Saki](https://www.sakiproducts.com/)<br>https://www.sakiproducts.com/ | 实站 · 消费品牌与电商 | 观察 消费品牌/独立品牌 站点如何用高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/113-saki.jpg) |
| [Blue More Yachting](https://www.bluemoreyachting.com/)<br>https://www.bluemoreyachting.com/ | 实站 · 消费品牌与电商 | 观察 旅行/酒店 站点如何用高端摄影 / 品牌留白、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/121-blue-more-yachting.jpg) |
| [Schlosshotel Kitzbühel](https://www.schlosshotel-kitzbuehel.com/en)<br>https://www.schlosshotel-kitzbuehel.com/en | 实站 · 消费品牌与电商 | 观察 旅行/酒店 站点如何用高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/123-schlosshotel-kitzbuhel.jpg) |
| [Tengile Malamala Collection](https://tengilemalamala.com/)<br>https://tengilemalamala.com/ | 实站 · 消费品牌与电商 | 观察 旅行/酒店 站点如何用高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/124-tengile-malamala-collection.jpg) |
| [The Pop-Up Hotel](https://thepopuphotel.com/)<br>https://thepopuphotel.com/ | 实站 · 消费品牌与电商 | 观察 旅行/酒店 站点如何用高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/125-the-pop-up-hotel.jpg) |
| [Almada Label](https://almadalabel.com/)<br>https://almadalabel.com/ | 实站 · 消费品牌与电商 | 观察 时尚/美妆 站点如何用极简留白、高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/126-almada-label.jpg) |
| [Maison Des Elites](https://mdebeauty.com/)<br>https://mdebeauty.com/ | 实站 · 消费品牌与电商 | 观察 时尚/美妆 站点如何用极简留白、高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/127-maison-des-elites.jpg) |
| [Teesh](https://teesh.co.uk/)<br>https://teesh.co.uk/ | 实站 · 消费品牌与电商 | 观察 时尚/美妆 站点如何用高端摄影 / 品牌留白、插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/128-teesh.jpg) |
| [Depo Luxe](https://depoluxe.xyz/)<br>https://depoluxe.xyz/ | 实站 · 内容与文化 | 观察 媒体/出版 站点如何用高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/170-depo-luxe.jpg) |
| [Palace Skateboards](https://palaceskateboards.com/)<br>https://palaceskateboards.com/ | 实站 · 消费品牌与电商 | 观察 体育 站点如何用极简留白、高端摄影 / 品牌留白建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/182-palace-skateboards.jpg) |
| [Springs](https://springs.estate/)<br>https://springs.estate/ | 实站 · 品牌与机构 | 把自然与建筑照片拼成一面带透视倾斜的照片墙铺满首屏，只用深绿留缝；细衬线标题压在图上，比常规的大图加文案更像一段被取景的走廊。 | [查看原图](screenshots/222-springs.jpg) |
| [Cassandra Vale](https://thecassandravale.com/)<br>https://thecassandravale.com/ | 实站 · 内容与文化 | 首屏按杂志封面排：整屏人像只露到肩线，名字用超粗压缩体撑满页宽压在画面底部，上下各叠一条细白线和一行全大写小字（CHARACTER · FASHION · ATTITUDE / STORIES IN MOTION）；顶角只留 CV 和 INSTAGRAM CONTACT，安静得像一张封面而不是网站在开会。 | [查看原图](screenshots/248-cassandra-vale.jpg) |
| [ESR Bespoke](https://www.esrbespoke.au/)<br>https://www.esrbespoke.au/ | 实站 · 品牌与机构 | 夜景高速实拍铺满首屏，标题「Exceptional is our standard」压到左侧三分之一处、两行断得很硬；右边是一段极小号的灰字说明和竖排的五项导航，底部只留 INQUIRE 和 SCROLL 两个词，靠「故意少给信息」拉开距离感。 | [查看原图](screenshots/249-esr-bespoke.jpg) |
| [Real Estate Abbey](https://realestateabbey.com/)<br>https://realestateabbey.com/ | 实站 · 品牌与机构 | 整屏是一张米灰色客厅实拍，几条竖直的栏目参考线没有擦掉，反而成了版面骨架；导航不做在顶部，而是横排在画面下缘贴着地面线，首屏更像楼盘画册的跨页。 | [查看原图](screenshots/266-real-estate-abbey.jpg) |
| [Loam House](https://residences.loamhouse.com.au)<br>https://residences.loamhouse.com.au | 实站 · 品牌与机构 | 黄昏渲染图做首屏，白色衬线「House-sized.」与金色斜体「Bayside living.」错位叠在楼体边缘，让字和建筑互相切割；右侧压一块半透明深色表单卡，把留资动作直接塞进首屏而不另开页面。 | [查看原图](screenshots/273-loam-house.jpg) |
| [Van Praet](https://vanpraet.be/)<br>https://vanpraet.be/ | 实站 · 消费品牌与电商 | 一张泳池边的户外家具实景占满首屏，导航被压成顶部居中的白色药丸条，标题只留两行浅色无衬线字落在左下角；先给场景再给 UI，空隙全留给了画面。 | [查看原图](screenshots/279-van-praet.jpg) |
| [Brandon Yasin](https://brandonyasin.com)<br>https://brandonyasin.com | 实站 · 个人作品集 | 整屏只用一块米卡其色铺底，导航缩成四角的极小字，上半屏几乎全空，直到接近折线才出现四张作品图和各自一行项目名；用极端的空替作品做铺垫。 | [查看原图](screenshots/287-brandon-yasin.jpg) |
| [This is AIRE](https://thisisaire.ch/)<br>https://thisisaire.ch/ | 实站 · 品牌与机构 | 奶油底上先给一行拉开字距的全大写小标，再叠三段超大高反差衬线标题，正文仍用同一衬线体收窄栏宽并居中；标题两侧各放一颗虚焦 3D 珍珠，让规整的居中排版有呼吸。 | [查看原图](screenshots/289-this-is-aire.jpg) |
| [Art Here 2025 - Richard Mille](https://artprize-shadows.com/)<br>https://artprize-shadows.com/ | 创意体验 · 在线体验 | 整屏是一间纯白展厅的 3D 渲染，高窗切进硬光打出长阴影，一颗镂空镜面球悬在正中；字标直接压在球体上，年份拆成 20 与 25 贴在画面两侧，用极少的元素撑住整个展陈气质。 | [查看原图](screenshots/294-art-here-2025-richard-mill.jpg) |
| [Louisiana Governor's Mansion](https://www.governorsmansion.org/)<br>https://www.governorsmansion.org/ | 实站 · 品牌与机构 | 庭院实拍几乎占满上半屏，下方留一条纯白带放收紧字距的衬线全大写标题，中间只插一个圆形播放键和 START VIRTUAL TOUR 小标签，靠尺幅与留白把机构感撑起来。 | [查看原图](screenshots/301-louisiana-governor-s-mansi.jpg) |
| [Vuna Partners](https://www.vunapartners.co.za/)<br>https://www.vunapartners.co.za/ | 实站 · 品牌与机构 | 一层从纯黑过渡到琥珀的自发光渐变铺满首屏，标题拆成三个短句各自成行，下面接一段小字说明，右侧只挂一行等宽时间与一个低调链接，克制得像一份私募备忘录。 | [查看原图](screenshots/307-vuna-partners.jpg) |
| [CoffeeTech®](https://coffee-tech.com/)<br>https://coffee-tech.com/ | 实站 · 品牌与机构 | 近黑底上只放三行几乎满宽的奶油白无衬线大字，行距与字距都收得很紧，三个词在屏幕上连成一整块面；导航被压成顶部一条极小的字，橙色胶囊按钮是唯一的高饱和点。 | [查看原图](screenshots/320-coffeetech.jpg) |
| [STANZZA design](https://stanzza.design/awards)<br>https://stanzza.design/awards | 实站 · 创意工作室 | 整屏铺一张暖褐调室内实拍，两行奶油色衬线短句直接压在家具上方，句子上再叠一笔红色手写花体做装饰；顶部只留居中的 logo、左侧 MENU 和右侧预约胶囊按钮，其余全让给照片。 | [查看原图](screenshots/322-stanzza-design.jpg) |
| [Banham](https://www.banham.co.uk/)<br>https://www.banham.co.uk/ | 实站 · 消费品牌与电商 | 整屏是一张人物特写（笑脸压在深蓝金色织物前），标题居中用两行衬线体落在人脸下方，按钮只留白底小方块，右下角再钉一个常驻的“预约免费勘察”深色胶囊；照片负责情绪，悬浮胶囊负责转化。 | [查看原图](screenshots/363-banham.jpg) |
| [MDS Collective](https://www.mdscollective.com)<br>https://www.mdscollective.com | 实站 · 品牌与机构 | 首屏是一整幅马尔代夫海上别墅的景（沙滩上放一对人物做尺度参考），左上小 Logo、顶部一排 10px 白色大写导航、左下三行小字才交代业务；把“什么都不加”当成奢华感的来源。 | [查看原图](screenshots/366-mds-collective.jpg) |
| [MIMEYOI](https://mimeyoi.co)<br>https://mimeyoi.co | 实站 · 消费品牌与电商 | 整屏就是一张手办特写，导航用拉开字距的全大写细字压在上边缘；左下角放角色名与 1/6 比例、右下角排一列规格小表，商品信息像展签一样贴着画框而不打断画面。 | [查看原图](screenshots/377-mimeyoi.jpg) |
| [Victorstone International](https://victorstone.co.uk/)<br>https://victorstone.co.uk/ | 实站 · 品牌与机构 | 一张伦敦航拍照片铺满首屏并压暗，两行细体白字居中压在河面上方；底部再叠一层几乎透明的超大 VICTORSTONE 字，让视线停在图像里。导航做成悬浮深色胶囊条，用 UK / Saudi Arabia / UAE 的区域下拉代替常规栏目。 | [查看原图](screenshots/389-victorstone-international.jpg) |
| [Dokmeh · 404](https://hidokmeh.com/404/)<br>https://hidokmeh.com/404/ | 实站 · 创意工作室 | 把 404 放在航拍海滩上，只留白色大字和两个方向箭头；错误页当成一张海报来做，情绪比信息多。 | [查看原图](screenshots/439-dokmeh-404.jpg) |
| [Delta Cafés · 404](https://deltacafes.com/en/404)<br>https://deltacafes.com/en/404 | 实站 · 消费品牌与电商 | 深色木架与咖啡产品做背景，404 标题压在中间，红色按钮是唯一高饱和元素；把错误页拍成产品场景。 | [查看原图](screenshots/445-delta-cafe-s-404.jpg) |
| [MeetYourPsychic · 404](https://tarot.meetyourpsychic.com/404)<br>https://tarot.meetyourpsychic.com/404 | 实站 · 在线体验 | 把 404 包装成「The Card Have Led You Astray」：水晶球里浮出 404，文案顺着占卜叙事走。 | [查看原图](screenshots/447-meetyourpsychic-404.jpg) |

### 现代 SaaS / 产品叙事

通过价值主张、产品界面与模块化证据解释复杂工具。

识别点：标题与主 CTA；真实界面演示；功能与案例分段。

样本：48 例，其中 47 例实站/创意体验。这是商业网页的常见组合语言，不限定产品行业。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Linear](https://linear.app/)<br>https://linear.app/ | 实站 · 产品与 SaaS | 观察产品截图如何融入首屏，以及细边框、灰阶和强调色如何建立层级。 | [查看原图](screenshots/01-linear.jpg) |
| [Stripe](https://stripe.com/)<br>https://stripe.com/ | 实站 · 产品与 SaaS | 观察多产品信息的分组、首屏视觉焦点与转化按钮的安排。 | [查看原图](screenshots/02-stripe.jpg) |
| [Raycast](https://www.raycast.com/)<br>https://www.raycast.com/ | 实站 · 产品与 SaaS | 观察桌面工具如何通过真实界面、快捷键和视觉包装传达效率。 | [查看原图](screenshots/03-raycast.jpg) |
| [Framer](https://www.framer.com/)<br>https://www.framer.com/ | 实站 · 产品与 SaaS | 观察工具能力如何借助页面作品和编辑界面呈现，而非仅靠功能列表。 | [查看原图](screenshots/04-framer.jpg) |
| [Notion](https://www.notion.com/)<br>https://www.notion.com/ | 实站 · 产品与 SaaS | 观察复杂产品如何用清晰标题、插画和功能演示组织营销内容。 | [查看原图](screenshots/05-notion.jpg) |
| [Things · Cultured Code](https://culturedcode.com/things/)<br>https://culturedcode.com/things/ | 实站 · 产品与 SaaS | 观察任务管理应用如何用设备截图和简洁文案解释体验。 | [查看原图](screenshots/07-things.jpg) |
| [Webflow](https://webflow.com/)<br>https://webflow.com/ | 实站 · 产品与 SaaS | 观察面向多种受众的产品官网如何组织主张、案例与能力介绍。 | [查看原图](screenshots/08-webflow.jpg) |
| [Supabase](https://supabase.com/)<br>https://supabase.com/ | 实站 · 开发者产品 | 观察开发者产品如何平衡技术信息、代码内容与营销表达。 | [查看原图](screenshots/10-supabase.jpg) |
| [Clerk](https://clerk.com/)<br>https://clerk.com/ | 实站 · 开发者产品 | 观察登录组件和代码示例如何直接成为营销页的产品证据。 | [查看原图](screenshots/12-clerk.jpg) |
| [Neon](https://neon.com/)<br>https://neon.com/ | 实站 · 开发者产品 | 观察数据库产品如何通过图示、数字和代码降低理解门槛。 | [查看原图](screenshots/13-neon.jpg) |
| [Vite](https://cn.vite.dev/)<br>https://cn.vite.dev/ | 实站 · 文档与设计系统 | 观察开发工具首页如何把性能主张、视觉标识和文档入口联系起来。 | [查看原图](screenshots/37-vite.jpg) |
| [Ant Design](https://ant.design/index-cn)<br>https://ant.design/index-cn | 实站 · 文档与设计系统 | 观察成熟设计系统如何组织规范、组件、主题与资源入口。 | [查看原图](screenshots/38-ant-design.jpg) |
| [Arco Design](https://arco.design/)<br>https://arco.design/ | 实站 · 文档与设计系统 | 观察设计语言、组件展示与生态入口的排布。 | [查看原图](screenshots/39-arco.jpg) |
| [Clarvos](https://www.clarvos.com/)<br>https://www.clarvos.com/ | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用杂志编辑式、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/88-clarvos.jpg) |
| [Nova Dental](https://nova-dental-dev.webflow.io)<br>https://nova-dental-dev.webflow.io | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/90-nova-dental.jpg) |
| [Zenarate](https://www.zenarate.com/)<br>https://www.zenarate.com/ | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用杂志编辑式、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/95-zenarate.jpg) |
| [Cerebrium](https://cerebrium.ai/)<br>https://cerebrium.ai/ | 实站 · 开发者产品 | 观察 开发者工具/基础设施 站点如何用3D / 沉浸场景、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/96-cerebrium.jpg) |
| [ABTC - American Bitcoin](https://www.abtc.com/)<br>https://www.abtc.com/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用3D / 沉浸场景、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/101-abtc-american-bitcoin.jpg) |
| [Bitnomial](https://bitnomial.com/)<br>https://bitnomial.com/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用大字 / 动态排版、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/102-bitnomial.jpg) |
| [Evolve Private Wealth](https://evolveprivatewealth.com/)<br>https://evolveprivatewealth.com/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用极简留白、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/103-evolve-private-wealth.jpg) |
| [Hemi Network](https://hemi.xyz/)<br>https://hemi.xyz/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用插画 / 手绘、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/104-hemi-network-1.jpg) |
| [Supaste](https://supaste.com)<br>https://supaste.com | 实站 · 产品与 SaaS | 标题把粗体 Copy once. 和斜体衬线 Reuse anytime. 拼在一起，用字重差代替换色；下面只放一颗深色下载按钮，产品界面用大圆角浮窗压在渐变上，层级只有三级。 | [查看原图](screenshots/242-supaste.jpg) |
| [VOID Messenger](https://void.sbs/)<br>https://void.sbs/ | 实站 · 产品与 SaaS | 标题用荧光黄绿的粗体大写压在纯黑上，锁和钥匙两枚小图标直接嵌进句子的字间，断行也很硬；正下方一台正面朝前的手机渲染只占画面三分之一，锁屏里的 V 形色块与标题同色，靠同一个色相把品牌、真机、按钮串成一条线。 | [查看原图](screenshots/245-void-messenger.jpg) |
| [Nominal](https://www.nominal.so/)<br>https://www.nominal.so/ | 实站 · 产品与 SaaS | 白底上把一行衬线标题放大居中，四周散落带小图标的淡彩药丸标签，每个标签对应一个会计流程名词，外加一枚黑色实心按钮；用“中心一句话＋周边功能点”的排法把抽象 AI 产品翻译成可读信息。 | [查看原图](screenshots/284-nominal.jpg) |
| [Redesigning Trust: Level2](https://www.trylevel2.com/)<br>https://www.trylevel2.com/ | 实站 · 产品与 SaaS | 深蓝底色上用一团放射状光晕从中部散开，标题居中两行、下面紧跟一个蓝色胶囊 CTA，再往下直接把真实交易界面截进来；截图被切掉下边缘，让'产品就在下面'代替大段功能说明。 | [查看原图](screenshots/327-redesigning-trust-level2.jpg) |
| [Butter](https://www.butter.video/)<br>https://www.butter.video/ | 实站 · 产品与 SaaS | 浅灰底上让一串彩色 3D 钥匙扣从画面上边缘垂下来并被裁掉上半截，制造“挂在屏幕外”的实物重量；导航收进一枚白色圆角胶囊，标题只用一行常规字重，视觉预算全留给道具。 | [查看原图](screenshots/339-butter.jpg) |
| [legencymedia.com](https://legencymedia.com/)<br>https://legencymedia.com/ | 实站 · 品牌与机构 | 右半屏放一颗被裁掉边角的蓝紫网点球体，用点的疏密做出体积，给纯白页面压上重量；标题里只把 B2B 染成品牌蓝，正文下方立刻接客户 logo 墙，用真实名字替代自夸。 | [查看原图](screenshots/341-legencymedia-com.jpg) |
| [Serus](https://serus.ai/)<br>https://serus.ai/ | 实站 · 产品与 SaaS | 首屏不写卖点句，而是一句衬线体 “Hello, I'm Serus” 加一个巨型圆角输入框，让产品以对话方式先开口；下方用灰阶客户 logo 和一枚黑色胶囊按钮收尾，彩色只留给紫色注册按钮。 | [查看原图](screenshots/346-serus.jpg) |
| [Orizon | Beyond Zero Trust](https://orizon.one)<br>https://orizon.one | 实站 · 产品与 SaaS | 用几十圈极细的椭圆环加一条绿色渐变飘带铺满首屏，把“防护”画成雷达轨道；标题居中两行、只把 Resilient 染色并配一条手绘下划线，正文不超过四行，两枚绿色胶囊按钮收口，环形线把人眼锁在正中。 | [查看原图](screenshots/364-orizon-beyond-zero-trust.jpg) |
| [Garvin Promotion Group](https://gpg.dops.agency/)<br>https://gpg.dops.agency/ | 实站 · 产品与 SaaS | 首屏只有一句 3 行的欢迎语，把品牌名换成更深的蓝嵌在句子中间当强调；下方用整块蓝色渐变叠半透明大圆环收尾，没有产品截图也把版面撑住了。 | [查看原图](screenshots/371-garvin-promotion-group.jpg) |
| [WowMade AI](https://wowmade.ai/)<br>https://wowmade.ai/ | 实站 · 产品与 SaaS | 首屏被压暗后只浮出一张半透明产品面板：左栏叠文案与权益清单，右栏把 $25/$60/$95 三档订阅排成可选列表，中间一档用紫底高亮，价格直接成为视觉中心。 | [查看原图](screenshots/382-wowmade-ai.jpg) |
| [Semi Design](https://semi.design/en-US)<br>https://semi.design/en-US | 官方规范 · 文档与设计系统 | 顶部一条紫到橙的渐变公告条做视觉钩子，下面回到白底：左侧中文大标题＋蓝色实心按钮＋六个技术栈标志，右侧一张浮起的后台截图用投影脱离背景，形成“界面就在页面上”的错觉；最底部再放一条灰度客户 logo 带做背书。 | [查看原图](screenshots/397-semi-design.jpg) |
| [Airtable · 定价页](https://www.airtable.com/pricing)<br>https://www.airtable.com/pricing | 实站 · 产品与 SaaS | 把四个套餐做成等高卡片，功能差异压成勾选表格；顶部用「按月/按年」切换改变价格口径。 | [查看原图](screenshots/453-airtable.jpg) |
| [ClickUp · 定价页](https://clickup.com/pricing)<br>https://clickup.com/pricing | 实站 · 产品与 SaaS | 三档套餐横向排开，中间档抬高并加重描边；下面是逐项功能对照，价格与「免费」入口同时露出。 | [查看原图](screenshots/454-clickup.jpg) |
| [Intercom · 定价页](https://www.intercom.com/pricing)<br>https://www.intercom.com/pricing | 实站 · 产品与 SaaS | 把 AI 坐席与人工坐席拆成两条计价线，再用组合卡片说明「Fin + Intercom」怎么买。 | [查看原图](screenshots/455-intercom.jpg) |
| [Loom · 定价页](https://loom.com/pricing)<br>https://loom.com/pricing | 实站 · 产品与 SaaS | 三档卡片 + 顶部「按年/按月」切换，免费档用描边按钮、付费档用实心按钮区分主次。 | [查看原图](screenshots/456-loom.jpg) |
| [monday.com · 定价页](https://monday.com/pricing)<br>https://monday.com/pricing | 实站 · 产品与 SaaS | 套餐卡各配一套产品界面缩略图，用颜色区分档位；席位滑杆让价格随人数实时变化。 | [查看原图](screenshots/457-monday-com.jpg) |
| [PostHog · 定价页](https://posthog.com/pricing)<br>https://posthog.com/pricing | 实站 · 产品与 SaaS | 先说「97% 的公司免费用」，再按产品线列出用量阶梯；把定价讲成一张可算的账单。 | [查看原图](screenshots/458-posthog.jpg) |
| [Ramp · 定价页](https://ramp.com/pricing)<br>https://ramp.com/pricing | 实站 · 产品与 SaaS | 免费档与「Intelligence」付费档并列，深色卡片承载付费方案；功能差异用细表格拆开。 | [查看原图](screenshots/459-ramp.jpg) |
| [Typeform · 定价页](https://www.typeform.com/pricing)<br>https://www.typeform.com/pricing | 实站 · 产品与 SaaS | 价格按月/年切换，卡片下方接功能对照；免费档用「Start free」弱化，付费档用实心按钮。 | [查看原图](screenshots/460-typeform.jpg) |
| [Slack · 料金プラン](https://slack.com/pricing)<br>https://slack.com/pricing | 实站 · 产品与 SaaS | 日文版四档价格并列，最右档用深色底强调；下方用「含まれる機能」对照表补齐差异。 | [查看原图](screenshots/461-slack.jpg) |
| [Asana · 应用目录](https://asana.com/apps)<br>https://asana.com/apps | 实站 · 产品与 SaaS | 首屏一句「Your favorite tools in one place」，下面按类别铺应用卡片；筛选与搜索放在网格上方。 | [查看原图](screenshots/462-asana.jpg) |
| [Notion · 连接](https://www.notion.so/integrations)<br>https://www.notion.so/integrations | 实站 · 产品与 SaaS | 「Explore connections」下先给一排常用工具，再用卡片网格铺满；搜索框是进入长目录的主入口。 | [查看原图](screenshots/463-notion.jpg) |
| [Make · 集成目录](https://www.make.com/en/integrations)<br>https://www.make.com/en/integrations | 实站 · 产品与 SaaS | 顶部写「3,500+ Integration Apps」，用圆形应用图标组成密集网格；把数量本身当成视觉主张。 | [查看原图](screenshots/464-make.jpg) |
| [Zapier · 应用目录](https://zapier.com/apps)<br>https://zapier.com/apps | 实站 · 产品与 SaaS | 首屏强调「The world's most connected AI platform」，下面是应用图标与分类入口，搜索框放在最显眼位置。 | [查看原图](screenshots/465-zapier.jpg) |
| [Retool · 关于](https://retool.com/about)<br>https://retool.com/about | 实站 · 产品与 SaaS | 「Help us rethink software development」压在团队照片拼贴上，招聘入口放在首屏内；把「人」当成公司介绍的主视觉。 | [查看原图](screenshots/466-retool.jpg) |
| [Deel · 关于](https://www.deel.com/about/)<br>https://www.deel.com/about/ | 实站 · 产品与 SaaS | 深色大图里放团队全景，标题「Work with the world」既是使命也是招聘文案。 | [查看原图](screenshots/467-deel.jpg) |
| [HubSpot · 公司介绍](https://www.hubspot.com/company)<br>https://www.hubspot.com/company | 实站 · 产品与 SaaS | About Us 用多张团队与文化照片拼成一张大图，文字只占左侧一栏；用密度表达「公司很大、很活跃」。 | [查看原图](screenshots/468-hubspot.jpg) |

### 深色科技 / 微光

以深底、细边框、微光或高亮细节形成技术感。

识别点：深色多级表面；局部高亮；细线与精密细节。

样本：53 例，其中 49 例实站/创意体验。深色只是底色，需结合材质、层级与品牌表达。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Linear](https://linear.app/)<br>https://linear.app/ | 实站 · 产品与 SaaS | 观察产品截图如何融入首屏，以及细边框、灰阶和强调色如何建立层级。 | [查看原图](screenshots/01-linear.jpg) |
| [Raycast](https://www.raycast.com/)<br>https://www.raycast.com/ | 实站 · 产品与 SaaS | 观察桌面工具如何通过真实界面、快捷键和视觉包装传达效率。 | [查看原图](screenshots/03-raycast.jpg) |
| [Spline](https://spline.design/)<br>https://spline.design/ | 实站 · 产品与 SaaS | 观察三维设计工具如何让场景作品直接承担产品能力展示。 | [查看原图](screenshots/06-spline.jpg) |
| [Resend](https://resend.com/)<br>https://resend.com/ | 实站 · 开发者产品 | 观察单一核心服务如何靠简练文案、示例和视觉主角讲清价值。 | [查看原图](screenshots/11-resend.jpg) |
| [Neon](https://neon.com/)<br>https://neon.com/ | 实站 · 开发者产品 | 观察数据库产品如何通过图示、数字和代码降低理解门槛。 | [查看原图](screenshots/13-neon.jpg) |
| [Railway](https://railway.com/)<br>https://railway.com/ | 实站 · 开发者产品 | 观察基础设施产品如何建立轻松的品牌语气并突出部署流程。 | [查看原图](screenshots/14-railway.jpg) |
| [Active Theory](https://activetheory.net/)<br>https://activetheory.net/ | 实站 · 创意工作室 | 观察创意技术团队如何用实时图形表达能力；静态截图仅记录一个时刻。 | [查看原图](screenshots/16-active-theory.jpg) |
| [Brittany Chiang](https://brittanychiang.com/)<br>https://brittanychiang.com/ | 实站 · 个人作品集 | 观察固定个人简介与可滚动履历区如何分工，以及文字对比与链接提示。 | [查看原图](screenshots/22-brittany-chiang.jpg) |
| [Vite](https://cn.vite.dev/)<br>https://cn.vite.dev/ | 实站 · 文档与设计系统 | 观察开发工具首页如何把性能主张、视觉标识和文档入口联系起来。 | [查看原图](screenshots/37-vite.jpg) |
| [The Spark](https://spark.thedigitalpanda.com/)<br>https://spark.thedigitalpanda.com/ | 创意体验 · 在线体验 | 整屏近乎全黑，只在下方露出一段发光的 3D 线框和一行等宽白字，把「下载数据包」写成加载文案；用声音开关和极暗的场景先把人拉进氛围，再讲内容。 | [查看原图](screenshots/235-the-spark.jpg) |
| [The Scope Creep](https://scope-creep.xyz)<br>https://scope-creep.xyz | 创意体验 · 在线体验 | 整屏压在暗红渐变里，SCOPE CREEP 用扭曲衬线体做到满宽，THE 缩小塞进两个单词中间形成叠字；底部一条极暗的 3D 走廊配胶囊播放键，把进入游戏做成唯一动作。 | [查看原图](screenshots/239-the-scope-creep.jpg) |
| [VOID Messenger](https://void.sbs/)<br>https://void.sbs/ | 实站 · 产品与 SaaS | 标题用荧光黄绿的粗体大写压在纯黑上，锁和钥匙两枚小图标直接嵌进句子的字间，断行也很硬；正下方一台正面朝前的手机渲染只占画面三分之一，锁屏里的 V 形色块与标题同色，靠同一个色相把品牌、真机、按钮串成一条线。 | [查看原图](screenshots/245-void-messenger.jpg) |
| [Lucien](https://www.lucien.com/)<br>https://www.lucien.com/ | 实站 · 产品与 SaaS | 整屏只有一句居中的白色大标题，底部用渐变把字「吃」掉一半，字像从蓝灰色烟雾里浮出来；导航压成一行小字加一个白色小按钮，左上四组入口和右下那句等宽小注各自贴在角落，用留白和光代替任何图形。 | [查看原图](screenshots/246-lucien.jpg) |
| [Virtually Ever After Studio](https://virtuallyeverafter.xyz/)<br>https://virtuallyeverafter.xyz/ | 实站 · 创意工作室 | 全黑页面上，镂空的 VEA 大字放在正中，一个线框球体半遮在上面，字因此有了被穿透的层次；左下用等宽小字排四行短句（Digital or physical / Temporary or permanent），顶部只留一行全大写小字和 MENU，靠字距与灰度撑住整屏。 | [查看原图](screenshots/250-virtually-ever-after-studi.jpg) |
| [LOUD. Digital Product Company.](https://loudsrl.com)<br>https://loudsrl.com | 实站 · 创意工作室 | 整屏是一块缓慢流动的黑色液态金属渲染，靠反光区分层次、没有任何边框或卡片；正中只放一行等宽白字和一条几乎看不见的副标题，导航与版权全部压到 10px 贴在四角，让材质本身成为唯一的图像。 | [查看原图](screenshots/274-loud-digital-product-compa.jpg) |
| [Vantor](https://vantor.com/)<br>https://vantor.com/ | 实站 · 产品与 SaaS | 把航拍俯视图当整屏底图，上面叠圆形靶标、方框锁定和 ACQUIRED、NEW MISSION 之类细线标注，读起来像情报界面而不是普通 SaaS 首页；标题只占左下四分之一。 | [查看原图](screenshots/280-vantor.jpg) |
| [Junca Studio](https://juncastudio.com/)<br>https://juncastudio.com/ | 实站 · 创意工作室 | 整屏黑场里只放一台红色打光的复古 3D 装置，光晕从设备边缘溢进暗部，三行白色无衬线标题压在左下；顶部导航拉开间距，右侧一枚橙色按钮收口，注意力全给那台机器。 | [查看原图](screenshots/282-junca-studio.jpg) |
| [Triptych Interactive](http://3dv2.triptych.co)<br>http://3dv2.triptych.co | 实站 · 创意工作室 | 黑底细网格上开三扇圆拱形渲染窗，里面各是一幅雾山风景；大标题横跨三窗，只有 simple 换成衬线斜体并略微错位，一个词把调性从科技拉到诗意。 | [查看原图](screenshots/291-triptych-interactive.jpg) |
| [ZIRKA Interceptor](https://www.zrk.technology/)<br>https://www.zrk.technology/ | 实站 · 产品与 SaaS | 整屏是一张黑白 3D 渲染，只靠一道边光把机身形体从黑里勾出来；标题三行无衬线压在左下，左上角塞满等宽遥测坐标与状态字段，页面因此更像作战终端而不是产品官网。 | [查看原图](screenshots/298-zirka-interceptor.jpg) |
| [Axiom Research](https://axiom.peppermint.id/)<br>https://axiom.peppermint.id/ | 实站 · 品牌与机构 | 纯黑底上居中放一团金色线框力场，两行巨型无衬线标题直接压在图形上，四角只留等宽状态读数与时间戳，用极端的层级克制换来实验报告封面般的仪式感。 | [查看原图](screenshots/300-axiom-research.jpg) |
| [AP Transit - NYC Subway Map](https://aptransit.co)<br>https://aptransit.co | 实站 · 产品与 SaaS | 把整张地铁线路图做成细线 3D 场景铺满首屏，彩色线路在近黑底上自己发光，品牌只留中央一枚极小标记和一个定位标签，让工具本身成为主视觉。 | [查看原图](screenshots/303-ap-transit-nyc-subway-map.jpg) |
| [Unbelievably Crap](https://www.unbelievablycrap.com/)<br>https://www.unbelievablycrap.com/ | 实站 · 个人作品集 | 首屏是一间暗房：3D 人像只靠一点轮廓光立在正中，四周摆满带边框的等宽小字面板、列表和滑杆，几乎没有大标题，浏览起来像在翻一份机密档案。 | [查看原图](screenshots/311-unbelievably-crap.jpg) |
| [Digital Meadow](https://digitalmeadow.studio)<br>https://digitalmeadow.studio | 实站 · 创意工作室 | 把整站导航做成桌面文件树的侧栏，路径、README、contact 一路列下来、当前项用荧光绿高亮；画面中央只留一行自我说明与一个 enter 链接，背景是极淡的粒子草场，让进入网站变成一个动作。 | [查看原图](screenshots/313-digital-meadow.jpg) |
| [Zabal Media Agency](https://www.zabalmedia.co)<br>https://www.zabalmedia.co | 实站 · 创意工作室 | 首屏把一整墙作品截图压暗成背景铺满，三行白色粗体标题正中对齐，视线不会跑到别处；左下角留一张浮动小卡片、右下角排两枚奖项徽章，用周边的小块信息补可信度而不抢中心。 | [查看原图](screenshots/314-zabal-media-agency.jpg) |
| [Matrixspace](https://www.matrixspace.com/)<br>https://www.matrixspace.com/ | 实站 · 产品与 SaaS | 首屏被切成明暗两块：上半纯白只放两行超大黑体短语讲清价值，下半换成压暗的航拍图并叠一层蓝色雷达锥；文案从浅底跨到深底，产品能力靠画面而不是靠罗列功能说明。 | [查看原图](screenshots/315-matrixspace.jpg) |
| [Campla.dev](https://www.campla.dev)<br>https://www.campla.dev | 创意体验 · 在线体验 | 整块深空底上只站一枚几十像素高的小人，logo 用像素字加粉到青的霓虹渐变发光；正文压到几乎看不清的小字号，把描边 ENTER 按钮做成唯一可点的入口，像 VGA 游戏的标题画面。 | [查看原图](screenshots/316-campla-dev.jpg) |
| [Flowty](https://flowty.co)<br>https://flowty.co | 实站 · 产品与 SaaS | 黑底上只用一道斜向的紫色柔光当唯一光源，超大白色标题压在左上、小 logo 缩到右上，靠对角把画面撑住；底部把真实产品界面裁成一条窄条横嵌进画面，再配胶囊按钮，让人相信这是工具而不是海报。 | [查看原图](screenshots/318-flowty.jpg) |
| [Cipher Digital](https://cipherdigital.com/)<br>https://cipherdigital.com/ | 实站 · 产品与 SaaS | 用一张俯拍的黑色穿孔吊顶照片铺满首屏，唯一的亮部是中间那块被照白的金属板；'Built for Hyperscale.' 落在左下大片留黑处，底部再横排一行 Google/AWS 等客户 logo，把机房质感转成可信度。 | [查看原图](screenshots/323-cipher-digital.jpg) |
| [Redesigning Trust: Level2](https://www.trylevel2.com/)<br>https://www.trylevel2.com/ | 实站 · 产品与 SaaS | 深蓝底色上用一团放射状光晕从中部散开，标题居中两行、下面紧跟一个蓝色胶囊 CTA，再往下直接把真实交易界面截进来；截图被切掉下边缘，让'产品就在下面'代替大段功能说明。 | [查看原图](screenshots/327-redesigning-trust-level2.jpg) |
| [Davide Cattaneo](https://davidecattaneo.it/)<br>https://davidecattaneo.it/ | 实站 · 个人作品集 | 全黑底上只用一条荧光绿的三维线框回路当主视觉，标题压到左下角、说明文字缩在右中一小块，靠接近 1:9 的明暗比让视线先被这条“数据管道”牵走，再落到姓名级的服务描述。 | [查看原图](screenshots/331-davide-cattaneo.jpg) |
| [Ballance](https://ballance.framer.website/)<br>https://ballance.framer.website/ | 实站 · 产品与 SaaS | 深蓝到亮蓝的纵向渐变当舞台，人像与几颗发光球体压在首屏下半部，再用一张 Travel Elite 半透明卡片叠在人身上，把抽象的支付变成可触摸的物件；标题下只排描边+红色实心双按钮。 | [查看原图](screenshots/340-ballance.jpg) |
| [Slap Apps Experience](https://experience.slap-apps.de/)<br>https://experience.slap-apps.de/ | 创意体验 · 在线体验 | 纯黑噪点场里用青色粒子堆出一架左右对称、像鳐鱼的形体，旁边补一条若隐若现的环形光，靠粒子密度做体积；底部只留两行小字提示 “Click on the gates and dive in”，把找入口变成第一道互动。 | [查看原图](screenshots/347-slap-apps-experience.jpg) |
| [Saud's PS2 Portfolio](https://imsaud.me/)<br>https://imsaud.me/ | 创意体验 · 个人作品集 | 整屏只还原 PS2 开机菜单：八颗蓝色光点围成一圈做“读取中”，右侧竖排菜单把当前项染成青色，左下角用 ⏎ / SHIFT / ✥ 配小字提示手柄按键；除了一套发光点，页面上没有任何图形，全靠这个熟悉的待机屏把访客拉进主机语境。 | [查看原图](screenshots/351-saud-s-ps2-portfolio.jpg) |
| [Trajectory Web Design](https://www.trajectorywebdesign.com/)<br>https://www.trajectorywebdesign.com/ | 实站 · 创意工作室 | 整页只用一种深蓝，把极淡的同心轨道环藏在标题后面当星图，第二行标题降成半透明做出纵深；按钮做胶囊加箭头，底部一排灰度客户 Logo 直接补上信任，是标准的“居中一句话 + 证据条”结构。 | [查看原图](screenshots/358-trajectory-web-design.jpg) |
| [Anthracite Studio](https://anthracitestudio.be)<br>https://anthracitestudio.be | 实站 · 创意工作室 | 黑底上先用衬线大字讲卖点，把 “sur mesure” 与 “et les IA” 直接用亮蓝色块反白标出，像荧光笔划重点；下半屏留给一片蓝色点阵“地形”做 3D 主视觉，文字负责信息、点云负责气氛。 | [查看原图](screenshots/359-anthracite-studio.jpg) |
| [RIY3.0 Hive](https://riy3.com/)<br>https://riy3.com/ | 创意体验 · 在线体验 | 近黑背景正中只放一台线框无人机的 3D 渲染，周围用极小号等宽字标注部件与舱门参数，拉开字距的“RIY3.0”浮在上方，第一眼像技术图纸而不是宣传页。 | [查看原图](screenshots/375-riy3-0-hive.jpg) |
| [EXPERIENCE FUNTECH CREATIVITY](https://experience2026.funtech.inc/)<br>https://experience2026.funtech.inc/ | 创意体验 · 在线体验 | 首屏被做成一台假的 FUNTECH OS 开机界面：绿字逐行打印设备自检和 models/textures/audio 的进度条，末尾留一个闪烁的绿块光标，用“等待启动”把访客先留在原地。 | [查看原图](screenshots/380-experience-funtech-creativ.jpg) |
| [Davel Creative Agency](https://davelcreative.com)<br>https://davelcreative.com | 实站 · 创意工作室 | 同一句标题分两段处理：“CREATIVITY THAT ACTUALLY”是实心白字，“PAYS OFF”改成只有描边的空心字，叠在紫金色 3D 烟雾与金色颗粒上，靠字体质地区分语气。 | [查看原图](screenshots/385-davel-creative-agency.jpg) |
| [Atmospherik](https://atmospherik.ai)<br>https://atmospherik.ai | 实站 · 品牌与机构 | 左侧放两行干净白字“We create customers.”，右侧让一个发光 3D 机器人捧着红色大脑占掉半个画面；右下叠一块毛玻璃面板列三个入口，把服务导航伪装成控制台。 | [查看原图](screenshots/386-atmospherik.jpg) |
| [Mosaic](https://mosaic.flabbergast.agency)<br>https://mosaic.flabbergast.agency | 实站 · 产品与 SaaS | 整屏近乎全黑，只在正中放一个圆角深色方块：左半压出浅刻字的信息栏，右半是橙色小方块拼成的矩阵；上下各一行等宽大写小字，注意力全部锁在这件东西上。 | [查看原图](screenshots/387-mosaic.jpg) |
| [MongoDB Design System](http://mongodb.design)<br>http://mongodb.design | 官方规范 · 文档与设计系统 | 深蓝底上只留荧光绿做强调，左栏固定导航、右栏内容卡；内容卡把六个组件图标排成 icon＋标签的一行宫格，再用一张“手握绿色方块”的插画压在卡片右上角，用插画打破网格的呆板。 | [查看原图](screenshots/396-mongodb-design-system.jpg) |
| [Aditya Bansal](https://www.adityabansal.tech/)<br>https://www.adityabansal.tech/ | 实站 · 个人作品集 | 深色首屏先用一行等宽小字标出身份与城市，再用四行大号句子占满左侧，只把 efficiently、leverage AI、perform under load 换成荧光绿；右侧叠一张半透明能力清单卡，形成宣言加索引的双栏。 | [查看原图](screenshots/414-aditya-bansal.jpg) |
| [Culture DevOps](https://culturedevops.com/en)<br>https://culturedevops.com/en | 实站 · 内容与文化 | 首屏收在一张深蓝圆角卡里：左侧 Simplify / Automate / Innovate 三个词竖着堆叠、中间一行换亮色拉开节奏，右侧放发光的等距芯片插画，电路线一直画到卡片边缘，像一张技术蓝图。 | [查看原图](screenshots/418-culture-devops.jpg) |
| [Binil B](https://thegr8binil.me)<br>https://thegr8binil.me | 实站 · 个人作品集 | 四行超大标题居中叠成一块，关键词先用高亮色块切开、再刷上紫橙青渐变；四周散落带图钉的小标签、绿色状态点和一枚蓝色自定义光标，让深色细网格底不显空，而视觉重心一直锁在画面中央。 | [查看原图](screenshots/424-binil-b.jpg) |
| [Bryan Smith](https://multikitty.onrender.com)<br>https://multikitty.onrender.com | 实站 · 个人作品集 | 把首页入口做成一块居中的命令行窗框：等宽字打出 load profile 命令、下面一行 loading 加闪烁方块光标，四角留出小缺口当 HUD 边角；背后压一张低对比的深蓝扫描线图，先给悬念再给内容。 | [查看原图](screenshots/428-bryan-smith.jpg) |
| [APPI RP · 404](https://appi-rp.com/404)<br>https://appi-rp.com/404 | 实站 · 在线体验 | 深蓝夜空底 + 居中「Page not found」，两枚粉色胶囊按钮把「返回」做成主要动作；底部仍保留社群与常见问题入口。 | [查看原图](screenshots/440-appi-rp-404.jpg) |
| [Nocturnal Dream · 404](https://www.nocturnaldream.com/404)<br>https://www.nocturnaldream.com/404 | 实站 · 创意工作室 | 黑色空间里悬着一台手机，屏幕上是 404；用 3D 道具代替文字说明，把错误页做成场景入口。 | [查看原图](screenshots/442-nocturnal-dream-404.jpg) |
| [Delta Cafés · 404](https://deltacafes.com/en/404)<br>https://deltacafes.com/en/404 | 实站 · 消费品牌与电商 | 深色木架与咖啡产品做背景，404 标题压在中间，红色按钮是唯一高饱和元素；把错误页拍成产品场景。 | [查看原图](screenshots/445-delta-cafe-s-404.jpg) |
| [Avara · 404](https://www.avara.band/404)<br>https://www.avara.band/404 | 实站 · 内容与文化 | 整屏纯黑只留一个灰色 404 和底部两行小字；靠极端克制把乐队气质延续到错误页。 | [查看原图](screenshots/446-avara-404.jpg) |
| [Andrii Mur · 404](https://www.andriimur.com/404)<br>https://www.andriimur.com/404 | 实站 · 个人作品集 | 深灰底上一句「AW, SUBJECT NOT FOUND」，四周环绕光圈、快门参数；把摄影师的错误页做成取景器刻度。 | [查看原图](screenshots/451-andrii-mur-404.jpg) |
| [Motion · Shared layout animation](https://motion.dev/examples/js-shared-layout-animation)<br>https://motion.dev/examples/js-shared-layout-animation | 组件演示 · 组件与风格演示 | 切换标签时同一个图形从列表位置滑到详情位置，靠共享的 layoutId 让两个界面之间的元素连续过渡。 | [查看原图](screenshots/478-motion-shared-layout-animati.jpg) |
| [Motion · Drag](https://motion.dev/examples/js-drag)<br>https://motion.dev/examples/js-drag | 组件演示 · 组件与风格演示 | 一块方块可以用指针拖动，松手后按惯性回弹；拖动、约束与回弹三段反馈拆得很清楚。 | [查看原图](screenshots/479-motion-drag.jpg) |
| [Motion · App Store layout](https://motion.dev/examples/js-app-store-layout)<br>https://motion.dev/examples/js-app-store-layout | 组件演示 · 组件与风格演示 | 点开一张卡片时，卡片从网格位置放大成详情页，图片、标题和按钮沿同一条路径移动；这就是 App Store 式的共享元素转场。 | [查看原图](screenshots/481-motion-app-store-layout.jpg) |

### 工业技术 / 参数化

借用仪器、产品标注和技术资料的字体、网格与参数语言。

识别点：等宽或点阵字体；参数式标注；紧凑模块与功能感。

样本：8 例，其中 7 例实站/创意体验。不是所有硬件网站都属于工业风。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Nothing](https://nothing.tech/)<br>https://nothing.tech/ | 实站 · 消费品牌与电商 | 观察鲜明字体系统、产品质感和电商入口如何保持一致品牌气质。 | [查看原图](screenshots/27-nothing.jpg) |
| [teenage engineering](https://teenage.engineering/)<br>https://teenage.engineering/ | 实站 · 消费品牌与电商 | 观察硬件品牌如何通过版式、颜色和产品图形成不同于通用电商的表达。 | [查看原图](screenshots/29-teenage-engineering.jpg) |
| [augmented-ui](https://augmented-ui.com/)<br>https://augmented-ui.com/ | 组件演示 · 组件与风格演示 | 观察几何切角、仪表式面板和技术标注，不等同于普通深色页面。 | [查看原图](screenshots/50-augmented-ui.jpg) |
| [Idealworks](https://www.idealworks.com/)<br>https://www.idealworks.com/ | 实站 · 消费品牌与电商 | 观察 制造/工业/硬件 站点如何用工业技术 / 参数化建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/156-idealworks.jpg) |
| [Radian](https://www.rideradian.com/)<br>https://www.rideradian.com/ | 实站 · 消费品牌与电商 | 把摩托车正面摆在灰纸一样的无缝背景正中，车把几乎顶到两侧画幅边，形成对称的压迫感；文案全部退到左下角，一句 A new era of enduro starts here. 加两枚胶囊按钮（一白一黄），黄色只出现在车壳和主 CTA 上，视线被钉在车头。 | [查看原图](screenshots/253-radian.jpg) |
| [Cipher Digital](https://cipherdigital.com/)<br>https://cipherdigital.com/ | 实站 · 产品与 SaaS | 用一张俯拍的黑色穿孔吊顶照片铺满首屏，唯一的亮部是中间那块被照白的金属板；'Built for Hyperscale.' 落在左下大片留黑处，底部再横排一行 Google/AWS 等客户 logo，把机房质感转成可信度。 | [查看原图](screenshots/323-cipher-digital.jpg) |
| [beflash — web & digital agency](https://beflash.de)<br>https://beflash.de | 实站 · 创意工作室 | 整屏铺一张斜向拉丝的金属纹理，超大号灰白德文标题直接压上去，部分笔画与底纹同灰度几乎融掉，只留左上角一个亮蓝“be”标志当色彩锚点。 | [查看原图](screenshots/378-beflash-web-digital-agency.jpg) |
| [Arc Marumo · 404](https://www.arcmarumo.com/404)<br>https://www.arcmarumo.com/404 | 实站 · 个人作品集 | 整屏混凝土照片上摆一组巨型 404 字标，靠材质和尺度制造压迫感；返回入口缩到一角。 | [查看原图](screenshots/441-arc-marumo-404.jpg) |

### 插画 / 手绘

让人物、手绘线条或叙事插画承担主要品牌表达。

识别点：可辨识插画体系；非摄影的叙事主体；带性格的图形。

样本：42 例，其中 40 例实站/创意体验。偶尔一个图标不足以支持此分类。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Notion](https://www.notion.com/)<br>https://www.notion.com/ | 实站 · 产品与 SaaS | 观察复杂产品如何用清晰标题、插画和功能演示组织营销内容。 | [查看原图](screenshots/05-notion.jpg) |
| [Railway](https://railway.com/)<br>https://railway.com/ | 实站 · 开发者产品 | 观察基础设施产品如何建立轻松的品牌语气并突出部署流程。 | [查看原图](screenshots/14-railway.jpg) |
| [The Pudding](https://pudding.cool/)<br>https://pudding.cool/ | 实站 · 内容与文化 | 观察数据故事如何通过封面、标题和不规则布局激发阅读兴趣。 | [查看原图](screenshots/32-pudding.jpg) |
| [Gumroad](https://gumroad.com/)<br>https://gumroad.com/ | 实站 · 产品与 SaaS | 观察粗边框、平面色块与硬阴影怎样保持强烈个性和可操作性。 | [查看原图](screenshots/41-gumroad.jpg) |
| [Fishwife](https://eatfishwife.com/)<br>https://eatfishwife.com/ | 实站 · 消费品牌与电商 | 观察包装插画、复古展示字与电商布局之间的呼应。 | [查看原图](screenshots/47-fishwife.jpg) |
| [Headspace](https://www.headspace.com/)<br>https://www.headspace.com/ | 实站 · 产品与 SaaS | 观察圆润人物、轻松文案和柔和颜色如何建立亲近感。 | [查看原图](screenshots/66-headspace.jpg) |
| [Finch](https://finchcare.com/)<br>https://finchcare.com/ | 实站 · 产品与 SaaS | 观察柔和颜色、圆润角色和友好的产品叙事如何结合。 | [查看原图](screenshots/67-finch.jpg) |
| [Practice Gateway](https://practicegateway.com/)<br>https://practicegateway.com/ | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/91-practice-gateway.jpg) |
| [Wafer.ai](https://www.wafer.ai)<br>https://www.wafer.ai | 实站 · 开发者产品 | 观察 开发者工具/基础设施 站点如何用插画 / 手绘、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/100-wafer-ai.jpg) |
| [Hemi Network](https://hemi.xyz/)<br>https://hemi.xyz/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用插画 / 手绘、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/104-hemi-network-1.jpg) |
| [Giacosa Firenze](https://www.giacosafirenze.com/en)<br>https://www.giacosafirenze.com/en | 实站 · 消费品牌与电商 | 观察 餐饮/食品饮料 站点如何用插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/116-giacosa-firenze.jpg) |
| [Moncalisse](https://www.moncalisse.com/en)<br>https://www.moncalisse.com/en | 实站 · 消费品牌与电商 | 观察 餐饮/食品饮料 站点如何用插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/117-moncalisse.jpg) |
| [Teesh](https://teesh.co.uk/)<br>https://teesh.co.uk/ | 实站 · 消费品牌与电商 | 观察 时尚/美妆 站点如何用高端摄影 / 品牌留白、插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/128-teesh.jpg) |
| [Pomegranate Health](https://pomegranate.health/)<br>https://pomegranate.health/ | 实站 · 品牌与机构 | 观察 医疗/健康 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/132-pomegranate-health.jpg) |
| [Dérive](https://derive-ocean.com/)<br>https://derive-ocean.com/ | 实站 · 内容与文化 | 观察 教育/课程 站点如何用插画 / 手绘、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/133-derive-2.jpg) |
| [Strahlborn - An Archival Saga](https://alfoart.com/derionzini-en/)<br>https://alfoart.com/derionzini-en/ | 实站 · 内容与文化 | 观察 教育/课程 站点如何用插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/137-strahlborn-an-archival-saga.jpg) |
| [The Great War](https://thegreatwar.org/)<br>https://thegreatwar.org/ | 实站 · 内容与文化 | 观察 教育/课程 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/139-the-great-war.jpg) |
| [Cobalt Abortion Fund](https://cobaltaf.org/)<br>https://cobaltaf.org/ | 实站 · 品牌与机构 | 观察 非营利/募捐 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/145-cobalt-abortion-fund.jpg) |
| [Hoyt Arts Center](https://hoytartcenter.org/)<br>https://hoytartcenter.org/ | 实站 · 品牌与机构 | 观察 非营利/募捐 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/147-hoyt-arts-center.jpg) |
| [Where Opportunity Takes Root](https://opportunity.waltonfamilyfoundation.org/)<br>https://opportunity.waltonfamilyfoundation.org/ | 实站 · 品牌与机构 | 观察 非营利/募捐 站点如何用插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/148-where-opportunity-takes-root.jpg) |
| [31 for 31](https://www.31-for-31.com/)<br>https://www.31-for-31.com/ | 实站 · 内容与文化 | 观察 媒体/出版 站点如何用插画 / 手绘、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/169-31-for-31.jpg) |
| [COVEO Music](https://coveomusic.com/)<br>https://coveomusic.com/ | 实站 · 内容与文化 | 观察 音乐/娱乐 站点如何用极简留白、插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/175-coveo-music-1.jpg) |
| [Paradigm Festival](https://www.paradigmfestival.com/)<br>https://www.paradigmfestival.com/ | 实站 · 内容与文化 | 观察 音乐/娱乐 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/177-paradigm-festival.jpg) |
| [Chande Bootcamp 2026](http://chandebootcamp.com/)<br>http://chandebootcamp.com/ | 实站 · 消费品牌与电商 | 观察 体育 站点如何用插画 / 手绘、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/180-chande-bootcamp-2026.jpg) |
| [Reel Motion](https://reelmotion.fit/)<br>https://reelmotion.fit/ | 实站 · 消费品牌与电商 | 观察 体育 站点如何用极简留白、插画 / 手绘建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/183-reel-motion.jpg) |
| [Direct Design Agency](https://wearedirect.co/)<br>https://wearedirect.co/ | 实站 · 创意工作室 | 左侧三分之一是整块平涂插画（红绿灯、路牌、贴纸），右侧留白只放三行粗体标题；顶部一条黑色导航压住整页宽度，把插画的亮色衬得更跳。 | [查看原图](screenshots/227-direct-design-agency.jpg) |
| [Jacob How Portfolio](http://jcubhow.com)<br>http://jcubhow.com | 实站 · 个人作品集 | 二十多张高饱和插画海报沿 3D 纵深排成一把扇子，近处那张几乎顶到左下角，越远越小、彼此重叠，直接把黑色舞台做成展墙；左上只用两行小字交代身份，底部一条药丸导航托住视线，作品本身充当背景。 | [查看原图](screenshots/247-jacob-how-portfolio.jpg) |
| [Rainbow Lobster](https://rainbowlobster.maart.agency/)<br>https://rainbowlobster.maart.agency/ | 实站 · 创意工作室 | 整屏刷成一整块深紫，正中放三行粗圆体的橙色宣言，上下各配一段被压暗到几乎看不清的小字和一枚金色圆形徽记；宣言下方两个药丸按钮一实一空（OUR WORK / ABOUT US），靠单一色相加字号体量做记忆点，几乎不用图片。 | [查看原图](screenshots/251-rainbow-lobster.jpg) |
| [Pixelismo Studio](https://www.pixelismo.it)<br>https://www.pixelismo.it | 实站 · 创意工作室 | 整屏铺满倾斜排列的手绘线稿，压成灰调当底纹；真实信息被收进居中的黑色圆角卡片，只靠一块高饱和紫蓝的 3D 软胶渲染把视线钉住，浅底与黑卡形成两级明度。 | [查看原图](screenshots/278-pixelismo-studio.jpg) |
| [Supari Studios](https://www.suparistudios.com/)<br>https://www.suparistudios.com/ | 实站 · 创意工作室 | 用一块红丝绒软垫把插画团队顶到画面中央，白色粗体标题压在人物脚下并加爆炸形状贴纸，再用云朵把四边封住，角上的导航只剩四个词，整体是一张会动的卡通海报。 | [查看原图](screenshots/304-supari-studios.jpg) |
| [Indigov](https://indigov.com/)<br>https://indigov.com/ | 实站 · 产品与 SaaS | 把国会山版画与华盛顿像抠进圆形里、再给他戴上彩色条纹墨镜，用铜版画加 90 年代波普配饰做出“老机构 × 新工具”的反差；标题用衬线大字配一条长破折号收尾，紧接一个单字段邮箱表单完成留资。 | [查看原图](screenshots/357-indigov.jpg) |
| [fps ecosystem](https://www.fps.hu/)<br>https://www.fps.hu/ | 实站 · 创意工作室 | 标题里 “Empathic” 用衬线斜体并套一圈手绘蓝线，后半句立刻切回无衬线，两种字体在同一行咬合；下方把功能点拆成散落的彩色方块，每块画一个蓝色线稿图标（放大镜 / 灯泡 / 铅笔 / 笑脸），像把便利贴撒在页面上。 | [查看原图](screenshots/369-fps-ecosystem.jpg) |
| [Aurora (Government of Canada)](https://design.gccollab.ca/)<br>https://design.gccollab.ca/ | 官方规范 · 文档与设计系统 | 左栏用一句话讲清定位（“出色的应用需要设计系统”）配一个深色实心按钮，右侧让低多边形三角渐变块斜向铺开并故意溢出容器，把静态首屏做出斜向动势；下方用 “I am a…” 加四个圆形插画头像做角色分流。 | [查看原图](screenshots/390-aurora-government-of-canad.jpg) |
| [Alaska Airlines](https://auro.alaskaair.com/)<br>https://auro.alaskaair.com/ | 官方规范 · 文档与设计系统 | 文档骨架由常驻左侧栏和顶部搜索（深蓝实心按钮）固定住，内容区先给一块海军蓝面板装飞机与 UI 卡片的扁平插画、右侧配一句 “Auro is enablement”；紧接着一条咖啡桌照片的深色横幅放两个描边按钮，用实拍图把技术文档拉回生活场景。 | [查看原图](screenshots/393-alaska-airlines.jpg) |
| [Eva Decker](https://evadecker.com)<br>https://evadecker.com | 实站 · 个人作品集 | 米白底上放一句居中大标题，下面用一张磁带合成器插画当分节符号，再把字体、站点等作品排成两列卡片，靠柔和底色和插画把工程师作品集做得像手账。 | [查看原图](screenshots/413-eva-decker.jpg) |
| [Josh Comeau](https://www.joshwcomeau.com/)<br>https://www.joshwcomeau.com/ | 实站 · 个人作品集 | 顶部用三层浅蓝云朵叠出地平线，一道由彩色虚线组成的彩虹从右侧盘腿人物脚下散开当主视觉；下面把文章列表和分类/热门侧栏分成两栏，标签用浅蓝胶囊、分区标题用粉色小字，整页再覆一层细颗粒避免大色块发飘。 | [查看原图](screenshots/434-josh-comeau.jpg) |
| [Grande Charte · 404](https://grandecharte.co/404)<br>https://grandecharte.co/404 | 实站 · 创意工作室 | 用一台复古电视代替数字「0」，配「Cette page ne capte plus」的法文双关；错误页也能承载品牌语气。 | [查看原图](screenshots/444-grande-charte-404.jpg) |
| [MeetYourPsychic · 404](https://tarot.meetyourpsychic.com/404)<br>https://tarot.meetyourpsychic.com/404 | 实站 · 在线体验 | 把 404 包装成「The Card Have Led You Astray」：水晶球里浮出 404，文案顺着占卜叙事走。 | [查看原图](screenshots/447-meetyourpsychic-404.jpg) |
| [Palmo · 404](https://www.palmo.co.in/404)<br>https://www.palmo.co.in/404 | 实站 · 品牌与机构 | 奶油底 + 棕榈剪影插画，文案写「Lost in the grove」，把 404 讲成一个迷路小故事。 | [查看原图](screenshots/450-palmo-404.jpg) |
| [Nomu · 404](https://nomu.store/404)<br>https://nomu.store/404 | 实站 · 消费品牌与电商 | 奶油底 + 手写小插画，文案「This page swam off」把错误写成一句俏皮话，返回按钮做成一枚小胶囊。 | [查看原图](screenshots/452-nomu-404.jpg) |
| [TaskRabbit · 工作原理](https://www.taskrabbit.com/how-it-works)<br>https://www.taskrabbit.com/how-it-works | 实站 · 品牌与机构 | 绿色横条写「Book your task in 3 easy steps」，下面 1/2/3 分栏，每步配一张手机界面截图。 | [查看原图](screenshots/471-taskrabbit.jpg) |
| [Duolingo](https://www.duolingo.com/)<br>https://www.duolingo.com/ | 实站 · 产品与 SaaS | 首屏不放大图，居中一组软塑质感的 3D 角色；下方一排语言国旗把多语言产品矩阵压成一条横带。 | [查看原图](screenshots/472-duolingo.jpg) |

### 柔和有机 / 马卡龙

用柔和色调、圆润形状与低压力的表达建立亲近感。

识别点：低饱和或温暖配色；圆润有机图形；轻松文案与节奏。

样本：11 例，其中 9 例实站/创意体验。柔和配色不等于新拟态，后者依赖浮雕光影。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Unseen Studio](https://unseen.co/)<br>https://unseen.co/ | 实站 · 创意工作室 | 观察场景化视觉如何与少量界面元素结合；截图不替代互动体验。 | [查看原图](screenshots/19-unseen.jpg) |
| [OLIPOP](https://drinkolipop.com/)<br>https://drinkolipop.com/ | 实站 · 消费品牌与电商 | 观察复古饮料包装、圆润字形和暖色调如何迁移到网页。 | [查看原图](screenshots/48-olipop.jpg) |
| [Material Design 3](https://m3.material.io/)<br>https://m3.material.io/ | 官方规范 · 文档与设计系统 | 观察官方设计语言中的形状、主题色、排版与组件展示。 | [查看原图](screenshots/62-material.jpg) |
| [Headspace](https://www.headspace.com/)<br>https://www.headspace.com/ | 实站 · 产品与 SaaS | 观察圆润人物、轻松文案和柔和颜色如何建立亲近感。 | [查看原图](screenshots/66-headspace.jpg) |
| [Finch](https://finchcare.com/)<br>https://finchcare.com/ | 实站 · 产品与 SaaS | 观察柔和颜色、圆润角色和友好的产品叙事如何结合。 | [查看原图](screenshots/67-finch.jpg) |
| [Bloom · Claymorphism Demo](https://8web.ai/demo/claymorphism)<br>https://8web.ai/demo/claymorphism | 风格演示 · 组件与风格演示 | 风格演示页中的圆润卡片与柔和体积；Bloom 是演示品牌，不计为商业实站。 | [查看原图](screenshots/74-clay-bloom.jpg) |
| [Seán Halpin](https://www.seanhalpin.xyz/)<br>https://www.seanhalpin.xyz/ | 实站 · 个人作品集 | 薄荷到黄绿的渐变铺满首屏，标题用衬线体并把 A Designer. 换成斜体制造落差，下面两张淡紫、淡绿的大圆角卡各嵌一张蓝色界面截图，靠柔色和圆角把作品集做得没有压迫感。 | [查看原图](screenshots/416-sea-n-halpin.jpg) |
| [George Christeas](https://chr-ge.com/)<br>https://chr-ge.com/ | 实站 · 个人作品集 | 白色页眉下让一整块从薄荷到薰衣草的对角渐变占满首屏，上面只压三行超粗黑色大写标题；标题下方用一行等宽小字加一条细长箭头做次级入口，靠字重与柔色底的反差把版面撑住。 | [查看原图](screenshots/432-george-christeas.jpg) |
| [Josh Comeau](https://www.joshwcomeau.com/)<br>https://www.joshwcomeau.com/ | 实站 · 个人作品集 | 顶部用三层浅蓝云朵叠出地平线，一道由彩色虚线组成的彩虹从右侧盘腿人物脚下散开当主视觉；下面把文章列表和分类/热门侧栏分成两栏，标签用浅蓝胶囊、分区标题用粉色小字，整页再覆一层细颗粒避免大色块发飘。 | [查看原图](screenshots/434-josh-comeau.jpg) |
| [Palmo · 404](https://www.palmo.co.in/404)<br>https://www.palmo.co.in/404 | 实站 · 品牌与机构 | 奶油底 + 棕榈剪影插画，文案写「Lost in the grove」，把 404 讲成一个迷路小故事。 | [查看原图](screenshots/450-palmo-404.jpg) |
| [monday.com · 定价页](https://monday.com/pricing)<br>https://monday.com/pricing | 实站 · 产品与 SaaS | 套餐卡各配一套产品界面缩略图，用颜色区分档位；席位滑杆让价格随人数实时变化。 | [查看原图](screenshots/457-monday-com.jpg) |

### 新粗野主义

通过硬边框、硬阴影、直白排版和鲜明色块形成高辨识度。

识别点：粗而清晰的边框；无模糊的偏移阴影；平面高对比色块。

样本：6 例，其中 4 例实站/创意体验。与原生网页、低修饰反设计分别收录。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Gumroad](https://gumroad.com/)<br>https://gumroad.com/ | 实站 · 产品与 SaaS | 观察粗边框、平面色块与硬阴影怎样保持强烈个性和可操作性。 | [查看原图](screenshots/41-gumroad.jpg) |
| [Neobrutalism Components](https://www.neobrutalism.dev/)<br>https://www.neobrutalism.dev/ | 组件演示 · 组件与风格演示 | 观察按钮、卡片和图表中的边框与无模糊阴影；这是组件库演示。 | [查看原图](screenshots/42-neobrutalism.jpg) |
| [Remember Style · Memphis](https://dev.remember.style/memphis)<br>https://dev.remember.style/memphis | 风格演示 · 组件与风格演示 | 观察波浪、点阵、几何拼块与不规则组合；属于概念演示。 | [查看原图](screenshots/84-memphis-demo.jpg) |
| [project://cult](https://project-cult.digital/)<br>https://project-cult.digital/ | 实站 · 创意工作室 | 标语被拆成 CRUSH THE、FU©K UP、ALL BOUND、RIES 四块不等宽红字，故意错行错位，再用更小的红底标签压在大字上制造印刷失准的冲撞感；底部只留一行极小的版权字托住画面。 | [查看原图](screenshots/281-project-cult.jpg) |
| [Readymag WOTY 2026](https://readymag.com/websites-of-the-year/?utm_source=awwwards&utm_medium=partnership_submission&utm_campaign=woty)<br>https://readymag.com/websites-of-the-year/?utm_source=awwwards&utm_medium=partnership_submission&utm_campaign=woty | 实站 · 内容与文化 | 荧光绿铺满整屏，一笔手写体巨字横穿画面压在标题之上，四边用密排小字块、深色分隔条和一张小照片卡托住信息，导航做成一排黑色药丸，整页读起来像一张印刷的奖项海报。 | [查看原图](screenshots/296-readymag-woty-2026.jpg) |
| [REALIZER®](https://www.realizer.ch/en)<br>https://www.realizer.ch/en | 实站 · 品牌与机构 | 整屏铺一色亮黄，把 REALIZE / ABOUT / CONTACT 三个词用超粗斜体撑满宽度堆成三行，字大到直接充当导航；顶部只留一枚极小的品牌标、下方一行小字，靠单一撞色和字重完成全部视觉信息。 | [查看原图](screenshots/329-realizer.jpg) |

### 原生网页 / 低修饰

保留原生链接、基础排版和低装饰界面的直白感。

识别点：链接与文本优先；基本 HTML 观感；少量品牌包装。

样本：5 例，其中 5 例实站/创意体验。传统实用网站与刻意反设计存在区别；不推断站方的创作意图。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Craigslist · San Francisco](https://sfbay.craigslist.org/)<br>https://sfbay.craigslist.org/ | 实站 · 内容与文化 | 观察原生链接、文本分类与低装饰布局；不推断网站刻意采用反设计。 | [查看原图](screenshots/43-craigslist.jpg) |
| [Berkshire Hathaway](https://www.berkshirehathaway.com/)<br>https://www.berkshirehathaway.com/ | 实站 · 品牌与机构 | 传统低修饰网站的对照样本：链接、基本排版与功能优先。 | [查看原图](screenshots/44-berkshire.jpg) |
| [Space Jam · 1996](https://www.spacejam.com/1996/)<br>https://www.spacejam.com/1996/ | 实站 · 在线体验 | 观察星空背景、图像式导航与早期网页拼贴；是保存的历史官网，不代表当前主流。 | [查看原图](screenshots/45-spacejam.jpg) |
| [Cameron's World](https://www.cameronsworld.net/)<br>https://www.cameronsworld.net/ | 创意体验 · 在线体验 | 观察旧网页素材、GIF 和异质图像构成的极繁拼贴。 | [查看原图](screenshots/46-camerons-world.jpg) |
| [Adrian Vlasov Portfolio](https://morisinc.net)<br>https://morisinc.net | 实站 · 个人作品集 | 把首屏伪装成一个旧桌面窗口：左侧等宽链接树、中间电视彩条测试图、右下角塞进手机里的 App 界面，最后用半透明横带压上 mLEARN 大字；用“系统界面”的语汇把语言学 App 的案子讲成一次屏幕考古。 | [查看原图](screenshots/349-adrian-vlasov-portfolio.jpg) |

### 极繁 / 拼贴

以高视觉密度、异质素材、叠加和强烈个性构成画面。

识别点：多层图片与贴纸；异质字体或素材；密集且带情绪。

样本：27 例，其中 27 例实站/创意体验。高密度后台不属于极繁，后者强调视觉表达。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Space Jam · 1996](https://www.spacejam.com/1996/)<br>https://www.spacejam.com/1996/ | 实站 · 在线体验 | 观察星空背景、图像式导航与早期网页拼贴；是保存的历史官网，不代表当前主流。 | [查看原图](screenshots/45-spacejam.jpg) |
| [Cameron's World](https://www.cameronsworld.net/)<br>https://www.cameronsworld.net/ | 创意体验 · 在线体验 | 观察旧网页素材、GIF 和异质图像构成的极繁拼贴。 | [查看原图](screenshots/46-camerons-world.jpg) |
| [Practice Gateway](https://practicegateway.com/)<br>https://practicegateway.com/ | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/91-practice-gateway.jpg) |
| [Race Condition](https://www.northkingdom.com/case/racecondition)<br>https://www.northkingdom.com/case/racecondition | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/92-race-condition.jpg) |
| [Linea Prompt](https://lineaprompt.com)<br>https://lineaprompt.com | 实站 · 开发者产品 | 观察 开发者工具/基础设施 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/98-linea-prompt.jpg) |
| [iCapital](https://www.icapital.es/en/)<br>https://www.icapital.es/en/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/105-icapital.jpg) |
| [Theobroma](https://theobromachocolat.com/)<br>https://theobromachocolat.com/ | 实站 · 消费品牌与电商 | 观察 消费品牌/独立品牌 站点如何用极繁 / 拼贴、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/114-theobroma.jpg) |
| [Pomegranate Health](https://pomegranate.health/)<br>https://pomegranate.health/ | 实站 · 品牌与机构 | 观察 医疗/健康 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/132-pomegranate-health.jpg) |
| [The Great War](https://thegreatwar.org/)<br>https://thegreatwar.org/ | 实站 · 内容与文化 | 观察 教育/课程 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/139-the-great-war.jpg) |
| [Los Angeles Public Library](https://www.lapl.org/)<br>https://www.lapl.org/ | 实站 · 品牌与机构 | 观察 政府/公共事业 站点如何用极繁 / 拼贴、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/142-los-angeles-public-library.jpg) |
| [Cobalt Abortion Fund](https://cobaltaf.org/)<br>https://cobaltaf.org/ | 实站 · 品牌与机构 | 观察 非营利/募捐 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/145-cobalt-abortion-fund.jpg) |
| [Deferred damage](http://plastic-ocean.com/)<br>http://plastic-ocean.com/ | 实站 · 品牌与机构 | 观察 非营利/募捐 站点如何用极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/146-deferred-damage.jpg) |
| [Hoyt Arts Center](https://hoytartcenter.org/)<br>https://hoytartcenter.org/ | 实站 · 品牌与机构 | 观察 非营利/募捐 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/147-hoyt-arts-center.jpg) |
| [Traçat Arquitectura 360](https://www.trasat.com)<br>https://www.trasat.com | 实站 · 创意工作室 | 观察 建筑/地产 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/154-tracat-arquitectura-360.jpg) |
| [Studio Ping Pong](https://studiopingpong.com/)<br>https://studiopingpong.com/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用极繁 / 拼贴、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/168-studio-ping-pong.jpg) |
| [Paradigm Festival](https://www.paradigmfestival.com/)<br>https://www.paradigmfestival.com/ | 实站 · 内容与文化 | 观察 音乐/娱乐 站点如何用插画 / 手绘、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/177-paradigm-festival.jpg) |
| [Design Bomb Festival](https://www.designbomb.it/)<br>https://www.designbomb.it/ | 实站 · 内容与文化 | 观察 活动/会议 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/184-design-bomb-festival.jpg) |
| [Festival Ljubljana](https://www.ljubljanafestival.si/en/)<br>https://www.ljubljanafestival.si/en/ | 实站 · 内容与文化 | 观察 活动/会议 站点如何用极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/185-festival-ljubljana.jpg) |
| [OFFFForum](https://www.offforum.com/)<br>https://www.offforum.com/ | 实站 · 内容与文化 | 观察 活动/会议 站点如何用极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/186-offfforum.jpg) |
| [Frontier Dialogues](http://www.frontierdialogues.com)<br>http://www.frontierdialogues.com | 实站 · 内容与文化 | 让「FRONTIER DIALOGUES」大到每个字母都溢出屏幕、只露出局部，后面垫奶油/粉/橙的有机色块做层次；左边缘竖排 CH.00–CH.07 的章节索引，把一张活动海报直接变成可点击的目录。 | [查看原图](screenshots/267-frontier-dialogues.jpg) |
| [THE UN KNOWN ® Next-Gen Creative Consultancy](https://theunknown.tv)<br>https://theunknown.tv | 实站 · 创意工作室 | 用一整片紫到橙的渐变天幕加一枚带光束的 3D 球体做背景，窄长体标题压在球体正中、只遮住一部分以保留未完成感；右下浮一张带播放图标的圆角小卡、底部用超宽字距的 YOU CAN 收尾，靠色温而不是图片讲主题。 | [查看原图](screenshots/269-the-un-known-next-gen-crea.jpg) |
| [Aardvark Book Club](https://aardvarkbookclub.com)<br>https://aardvarkbookclub.com | 实站 · 消费品牌与电商 | 背景用三四层同色系、深浅不同的波浪形状堆出流动沙丘，页面不动也有方向感；标题用超粗压缩体压住左上角、行距收到几乎相碰，再用一枚高饱和粉色按钮把视线钉在文字下方。 | [查看原图](screenshots/271-aardvark-book-club.jpg) |
| [Adrian Vlasov Portfolio](https://morisinc.net)<br>https://morisinc.net | 实站 · 个人作品集 | 把首屏伪装成一个旧桌面窗口：左侧等宽链接树、中间电视彩条测试图、右下角塞进手机里的 App 界面，最后用半透明横带压上 mLEARN 大字；用“系统界面”的语汇把语言学 App 的案子讲成一次屏幕考古。 | [查看原图](screenshots/349-adrian-vlasov-portfolio.jpg) |
| [Sameera Sandakelum](https://sameerasw.com/)<br>https://sameerasw.com/ | 实站 · 个人作品集 | 整屏铺一张雾气山景照片，名字用极宽字距的细体大写压在画面中央，下面一行九个品牌色社交胶囊；再叠点阵／马赛克文字和贴边悬浮 dock，用模糊与竖向渐变压住背景，保证白字仍然可读。 | [查看原图](screenshots/404-sameera-sandakelum.jpg) |
| [Production Portugal · 404](https://productionportugal.com/404)<br>https://productionportugal.com/404 | 实站 · 内容与文化 | 洋红满屏 + 近全屏斜体 404，字面带渐变高光；顶部导航保留，其他信息全部让位。 | [查看原图](screenshots/443-production-portugal-404.jpg) |
| [Boc Studio · 404](https://boc.studio/404)<br>https://boc.studio/404 | 实站 · 创意工作室 | 橙色铺满、404 放大到被画布裁切，一句话横穿数字；用色块和尺度把错误变成态度。 | [查看原图](screenshots/448-boc-studio-404.jpg) |
| [NOT FOUND · 404](https://www.not-found.tv/404)<br>https://www.not-found.tv/404 | 实站 · 内容与文化 | 黑色底上拼贴紫色花朵与眼球，404 标题压在中央，两个按钮给出「回首页 / 另一个世界」的分叉。 | [查看原图](screenshots/449-not-found-404.jpg) |

### 复古印刷 / 怀旧品牌

借用旧包装、印刷字体和怀旧配色形成当代品牌语言。

识别点：复古展示字；包装或印刷感；暖色与怀旧插画。

样本：12 例，其中 12 例实站/创意体验。与复古电脑界面、像素游戏分别收录。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Fishwife](https://eatfishwife.com/)<br>https://eatfishwife.com/ | 实站 · 消费品牌与电商 | 观察包装插画、复古展示字与电商布局之间的呼应。 | [查看原图](screenshots/47-fishwife.jpg) |
| [OLIPOP](https://drinkolipop.com/)<br>https://drinkolipop.com/ | 实站 · 消费品牌与电商 | 观察复古饮料包装、圆润字形和暖色调如何迁移到网页。 | [查看原图](screenshots/48-olipop.jpg) |
| [IKONY](https://ikony.tv)<br>https://ikony.tv | 实站 · 内容与文化 | 左栏用一条细线隔开，塞进圆圈序号、粗体标题和 8px 密排正文；右侧让一枚正红圆形压住黑白半调照片，底部再横排一条照片带，全站只用红黑灰三色就把纪录片的分量做出来。 | [查看原图](screenshots/208-ikony.jpg) |
| [BEIGE FORCE!!](https://beigeforce.com/)<br>https://beigeforce.com/ | 创意体验 · 创意工作室 | 把每个字母做成点阵并各自占一个网格单元，用陶土红铺满整屏、黑点当油墨；四角塞进 10px 密排说明文和一枚 PLAY 按钮，整套系统不靠照片也有海报感。 | [查看原图](screenshots/212-beige-force.jpg) |
| [L'Étude - Creative Studio](https://letude.group)<br>https://letude.group | 实站 · 创意工作室 | 用纯正红铺底，把巨型黑色字标压在手持手机的实拍上，再用青绿错位副本做出印刷套准失败的效果；小字全用蓝色等宽体挂在四角，配色闭环只有两色。 | [查看原图](screenshots/223-l-e-tude-creative-studio.jpg) |
| [EddyOS — Eddy Naboulet](https://eddy-naboulet.dev/)<br>https://eddy-naboulet.dev/ | 创意体验 · 个人作品集 | 把整站做成一个复古桌面：顶部一条伪窗口菜单条，人像用像素半调处理成棕黄单色，哥特黑体大字直接压在人身上，四个入口（01 projets.vol … 04 contact.app）分钉在四角；像一张被扫描过的旧海报长出了操作系统。 | [查看原图](screenshots/354-eddyos-eddy-naboulet.jpg) |
| [CE Growth Partners](https://cegrowthpartners.com/)<br>https://cegrowthpartners.com/ | 实站 · 品牌与机构 | 黑底只放荧光绿、珊瑚红、白三色：左侧超粗紧排标题占满半屏，右侧一枚被竖着切开的圆叠在红矩形上充当品牌图形，导航与所有小标签一律等宽大写；用唱片厂牌式的排版把咨询公司做得不像企业站。 | [查看原图](screenshots/355-ce-growth-partners.jpg) |
| [B&E Digital](http://bande.digital)<br>http://bande.digital | 创意体验 · 创意工作室 | 右半屏铺一张蓝紫半调点阵当“信号场”，左侧高对比衬线大字带红蓝错位，下面用 // 分隔的等宽服务串和一个白框按钮收住，左下角再钉一枚 ⌘ CHANNEL DIRECTORY 小框；先给氛围，再给入口。 | [查看原图](screenshots/356-b-e-digital.jpg) |
| [Relevo & Vinco](https://relevovinco.com/)<br>https://relevovinco.com/ | 实站 · 品牌与机构 | 只有牛皮纸色与深棕两色：STAND OUT. 做成两块深色反白块（像被压凹下去的槽），PRESS IN. 直接印在纸面上，用正负形把压印 / 凹印两种工艺现场演示出来；说明文字和导航全部压成 10px 等宽。 | [查看原图](screenshots/368-relevo-vinco.jpg) |
| [https://orbita.bar](http://orbita.bar)<br>http://orbita.bar | 实站 · 品牌与机构 | 奶油底上把“ОРБИТА”做成挤满画幅的压缩黑体，一颗地球实拍照从标题下缘浮出、遮住字的下半部，再用几条极细放射线、粉色小叉和粉色胶囊按钮把海报感补全。 | [查看原图](screenshots/384-https-orbita-bar.jpg) |
| [Andrea Toffanello](https://andreatoffanello.com)<br>https://andreatoffanello.com | 实站 · 个人作品集 | 整屏正中央只放一枚线刻徽章：同心刻度、人物侧脸和交叉双刀全靠极细线条画出，右上角故意留一团手绘草稿当杂质；米灰纸色配小号衬线字，把页面做出旧证书的观感，还要开声音再进入。 | [查看原图](screenshots/426-andrea-toffanello.jpg) |
| [Grande Charte · 404](https://grandecharte.co/404)<br>https://grandecharte.co/404 | 实站 · 创意工作室 | 用一台复古电视代替数字「0」，配「Cette page ne capte plus」的法文双关；错误页也能承载品牌语气。 | [查看原图](screenshots/444-grande-charte-404.jpg) |

### 霓虹赛博 / HUD

用发光线框、切角面板、终端信息和未来界面营造科幻感。

识别点：霓虹线框；切角或扫描式结构；仪表信息与动态细节。

样本：5 例，其中 3 例实站/创意体验。与 Y2K 金属千禧风分别收录；科幻 HUD 强调仪表、线框和状态反馈。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [scificn · Nexus Station-7](https://www.scificn.dev/showcase/sci-fi)<br>https://www.scificn.dev/showcase/sci-fi | 组件演示 · 组件与风格演示 | 观察发光线框、终端字、切角结构和高密度状态面板；数据为演示场景。 | [查看原图](screenshots/49-scificn.jpg) |
| [augmented-ui](https://augmented-ui.com/)<br>https://augmented-ui.com/ | 组件演示 · 组件与风格演示 | 观察几何切角、仪表式面板和技术标注，不等同于普通深色页面。 | [查看原图](screenshots/50-augmented-ui.jpg) |
| [Cyberpunk 2077](https://www.cyberpunk.net/us/en/)<br>https://www.cyberpunk.net/us/en/ | 实站 · 内容与文化 | 观察游戏官网如何用高对比霓虹、角色主视觉与购买入口建立赛博气质。 | [查看原图](screenshots/202-cyberpunk-2077.jpg) |
| [PouyaOS](https://pouyashahri.com)<br>https://pouyashahri.com | 创意体验 · 在线体验 | 把整站做成一个桌面系统：左侧一列带小字标签的图标当导航，底部一条 Dock 放各个入口，右上角「Click to start tour」负责带路；壁纸换成真人站在绿色代码墙前的照片，用「我正在翻别人的电脑」的错觉替代常规首屏。 | [查看原图](screenshots/244-pouyaos.jpg) |
| [Upvent Digital](https://upvent.co/)<br>https://upvent.co/ | 实站 · 创意工作室 | 整屏铺一层粉青半调点阵、靠中间留白自然形成城市轮廓；标题前半句是干净等宽大写，后半句被拆成乱码与镜像字符，用“品牌名正在崩坏”的动作解释 360° 数字传播。 | [查看原图](screenshots/345-upvent-digital.jpg) |

### 像素 / 8-bit

把像素字体、阶梯边缘与游戏式组件用于界面本身。

识别点：点阵字或像素边框；有限色阶；游戏式界面控件。

样本：7 例，其中 4 例实站/创意体验。仅展示像素画的普通画廊不自动属于像素 UI。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [NES.css](https://nostalgic-css.github.io/NES.css/)<br>https://nostalgic-css.github.io/NES.css/ | 组件演示 · 组件与风格演示 | 观察像素字体、阶梯边框与游戏式按钮、气泡和表单。 | [查看原图](screenshots/51-nes-css.jpg) |
| [RPGUI](https://ronenness.github.io/RPGUI/)<br>https://ronenness.github.io/RPGUI/ | 组件演示 · 组件与风格演示 | 观察像素边框、游戏字体和带材质的容器、按钮与进度条。 | [查看原图](screenshots/52-rpgui.jpg) |
| [System.css](https://sakofchit.github.io/system.css/)<br>https://sakofchit.github.io/system.css/ | 组件演示 · 组件与风格演示 | 观察黑白像素、抖动纹理和经典 Mac 窗口怎样用于网页控件。 | [查看原图](screenshots/70-system-css.jpg) |
| [Lospec](https://lospec.com/)<br>https://lospec.com/ | 实站 · 开发者产品 | 观察像素工具站如何用低分辨率图形、调色板与网格组织大量资源。 | [查看原图](screenshots/203-lospec.jpg) |
| [Rechroma](https://rechroma.com)<br>https://rechroma.com | 实站 · 工具型应用 | 把字标本身做成像素字并拉满通栏，灰度底上只留黑字、一行右下角副标题和一枚像素按钮；配色工具的首页反而先用没有颜色来强调字体形状。 | [查看原图](screenshots/211-rechroma.jpg) |
| [BEIGE FORCE!!](https://beigeforce.com/)<br>https://beigeforce.com/ | 创意体验 · 创意工作室 | 把每个字母做成点阵并各自占一个网格单元，用陶土红铺满整屏、黑点当油墨；四角塞进 10px 密排说明文和一枚 PLAY 按钮，整套系统不靠照片也有海报感。 | [查看原图](screenshots/212-beige-force.jpg) |
| [Campla.dev](https://www.campla.dev)<br>https://www.campla.dev | 创意体验 · 在线体验 | 整块深空底上只站一枚几十像素高的小人，logo 用像素字加粉到青的霓虹渐变发光；正文压到几乎看不清的小字号，把描边 ENTER 按钮做成唯一可点的入口，像 VGA 游戏的标题画面。 | [查看原图](screenshots/316-campla-dev.jpg) |

### 终端 / ASCII / CRT

用等宽文本、命令行和字符式界面建立开发者或复古计算机气质。

识别点：等宽文本为主体；命令提示与文本框线；终端配色或扫描线。

样本：10 例，其中 8 例实站/创意体验。代码块只是配角的普通文档不属于终端风。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [scificn · Nexus Station-7](https://www.scificn.dev/showcase/sci-fi)<br>https://www.scificn.dev/showcase/sci-fi | 组件演示 · 组件与风格演示 | 观察发光线框、终端字、切角结构和高密度状态面板；数据为演示场景。 | [查看原图](screenshots/49-scificn.jpg) |
| [Terminal CSS](https://terminalcss.xyz/)<br>https://terminalcss.xyz/ | 组件演示 · 组件与风格演示 | 观察终端语言如何用于实际排版、表单与导航。 | [查看原图](screenshots/53-terminal-css.jpg) |
| [Hacker Typer](https://hackertyper.net/)<br>https://hackertyper.net/ | 创意体验 · 在线体验 | 观察模拟终端的等宽文字与荧光配色；截图通过页面支持的键盘输入触发演示。 | [查看原图](screenshots/54-hackertyper.jpg) |
| [5051 — Punk Band](https://band5051.com/)<br>https://band5051.com/ | 实站 · 内容与文化 | 在近黑的底上只点一个描橙边的终端窗口，用等宽字、闪烁光标和 > 前缀把巡演信息写成命令行输出；连按钮都带提示符，一套字体一种橙色就立住了整个风格。 | [查看原图](screenshots/210-5051-punk-band.jpg) |
| [Kaisermann | web engineer](https://kaisermann.me)<br>https://kaisermann.me | 实站 · 个人作品集 | 通篇等宽大写，把自我介绍当作命令行输出排在屏幕下半部，日期与频道编号退到两个上角，底纹是极暗的横向扫描线与网格，把个人站做出 CRT 终端的气质。 | [查看原图](screenshots/305-kaisermann-web-engineer.jpg) |
| [Digital Meadow](https://digitalmeadow.studio)<br>https://digitalmeadow.studio | 实站 · 创意工作室 | 把整站导航做成桌面文件树的侧栏，路径、README、contact 一路列下来、当前项用荧光绿高亮；画面中央只留一行自我说明与一个 enter 链接，背景是极淡的粒子草场，让进入网站变成一个动作。 | [查看原图](screenshots/313-digital-meadow.jpg) |
| [B&E Digital](http://bande.digital)<br>http://bande.digital | 创意体验 · 创意工作室 | 右半屏铺一张蓝紫半调点阵当“信号场”，左侧高对比衬线大字带红蓝错位，下面用 // 分隔的等宽服务串和一个白框按钮收住，左下角再钉一枚 ⌘ CHANNEL DIRECTORY 小框；先给氛围，再给入口。 | [查看原图](screenshots/356-b-e-digital.jpg) |
| [EXPERIENCE FUNTECH CREATIVITY](https://experience2026.funtech.inc/)<br>https://experience2026.funtech.inc/ | 创意体验 · 在线体验 | 首屏被做成一台假的 FUNTECH OS 开机界面：绿字逐行打印设备自检和 models/textures/audio 的进度条，末尾留一个闪烁的绿块光标，用“等待启动”把访客先留在原地。 | [查看原图](screenshots/380-experience-funtech-creativ.jpg) |
| [Yasio](https://yasio.dev/)<br>https://yasio.dev/ | 实站 · 个人作品集 | 深色场景里只放两句自述，名字用高饱和紫色从一片灰字中跳出来；左缘一条细紫线加序号 0 贯穿整屏当进度轨，把读者视线顺着往下带，背景只留隐约的折面体块。 | [查看原图](screenshots/425-yasio.jpg) |
| [Bryan Smith](https://multikitty.onrender.com)<br>https://multikitty.onrender.com | 实站 · 个人作品集 | 把首页入口做成一块居中的命令行窗框：等宽字打出 load profile 命令、下面一行 loading 加闪烁方块光标，四角留出小缺口当 HUD 边角；背后压一张低对比的深蓝扫描线图，先给悬念再给内容。 | [查看原图](screenshots/428-bryan-smith.jpg) |

### 中式传统 / 文博

将传统色、纹样、书法、文物或卷轴式视觉用于网页表达。

识别点：传统色与纹样；书法或文物视觉；文化叙事与留白。

样本：3 例，其中 3 例实站/创意体验。只覆盖传统文博方向，不把所有中文网站归为国风，也不代表所有国潮子风格。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [故宫博物院](https://www.dpm.org.cn/)<br>https://www.dpm.org.cn/ | 实站 · 品牌与机构 | 观察传统纹样、建筑与文物影像、字体和中文信息层级。 | [查看原图](screenshots/75-palace.jpg) |
| [数字敦煌](https://www.e-dunhuang.com/)<br>https://www.e-dunhuang.com/ | 实站 · 品牌与机构 | 观察敦煌壁画的传统色彩如何与数字导览和当代排版结合。 | [查看原图](screenshots/76-dunhuang.jpg) |
| [RAW](https://raw.com.tw/)<br>https://raw.com.tw/ | 实站 · 品牌与机构 | 用两条竖细线把首屏切成三等分，STAFFING / EXCLUSIVE / ACADEMY 各占一栏并配一条黑、粉、藏青的短下划线；栏内英文标题疏排、中文说明压到很小并居中，页面下半整片留白，只用一行版权收尾。 | [查看原图](screenshots/330-raw.jpg) |

### Y2K / 千禧复古未来

借用千禧年代的金属、虹彩、星形和数码流行视觉建立复古未来感。

识别点：金属或虹彩效果；星形与数码装饰；复古未来的字形配色。

样本：7 例，其中 5 例实站/创意体验。与 CRT 终端、90 年代桌面和赛博 HUD 分开；演示只能说明视觉方法。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Artifx · Y2K Design](https://artifx.dev/ui-styles/y2k-design)<br>https://artifx.dev/ui-styles/y2k-design | 风格演示 · 组件与风格演示 | 观察作者提供的 Y2K 组件预览、金属配色和圆润字形；这是风格演示，不计为商业实站。 | [查看原图](screenshots/77-y2k-artifx.jpg) |
| [Rewind · Retro Y2K Demo](https://8web.ai/demo/retro-y2k)<br>https://8web.ai/demo/retro-y2k | 风格演示 · 组件与风格演示 | 观察金属字、虹彩配色与星形符号；这是 Rewind 概念演示，不是真实照片应用。 | [查看原图](screenshots/78-rewind.jpg) |
| [Versace Jeans Couture · Y2K](https://www.nssmag.com/en/p/versace-jeans-couture)<br>https://www.nssmag.com/en/p/versace-jeans-couture | 创意体验 · 内容与文化 | 观察这篇 Y2K 专题如何用手写标题、早期 00 年代影像与访谈，把“千禧回潮”讲成可读的编辑内容。 | [查看原图](screenshots/207-versace-jeans-y2k.jpg) |
| [Goodgrowth](https://goodgrowth.com)<br>https://goodgrowth.com | 实站 · 个人作品集 | 整屏只放一枚渐变底上的 CD 和一行 INSERT DISC 小按钮，把千禧年的光盘启动界面搬进浏览器；说明文字全部压到 10px 等宽体贴边，让中间那一点成为唯一焦点。 | [查看原图](screenshots/209-goodgrowth.jpg) |
| [Saud's PS2 Portfolio](https://imsaud.me/)<br>https://imsaud.me/ | 创意体验 · 个人作品集 | 整屏只还原 PS2 开机菜单：八颗蓝色光点围成一圈做“读取中”，右侧竖排菜单把当前项染成青色，左下角用 ⏎ / SHIFT / ✥ 配小字提示手柄按键；除了一套发光点，页面上没有任何图形，全靠这个熟悉的待机屏把访客拉进主机语境。 | [查看原图](screenshots/351-saud-s-ps2-portfolio.jpg) |
| [Tommy Biglow](https://tommybiglow.com)<br>https://tommybiglow.com | 创意体验 · 个人作品集 | 青蓝渐变底上只悬一台 3D 复古一体机，连键盘、鼠标一起画全，屏幕里还排着缩小的名片和窗口；下方一行 10px 的 CLICK TO ENTER 才是唯一入口，靠“一个大物件 + 极端留白”把首屏做成一道门。 | [查看原图](screenshots/353-tommy-biglow.jpg) |
| [EddyOS — Eddy Naboulet](https://eddy-naboulet.dev/)<br>https://eddy-naboulet.dev/ | 创意体验 · 个人作品集 | 把整站做成一个复古桌面：顶部一条伪窗口菜单条，人像用像素半调处理成棕黄单色，哥特黑体大字直接压在人身上，四个入口（01 projets.vol … 04 contact.app）分钉在四角；像一张被扫描过的旧海报长出了操作系统。 | [查看原图](screenshots/354-eddyos-eddy-naboulet.jpg) |

### Bauhaus / 几何原色

借用原色、圆形方形三角形、非对称平衡与结构网格表达几何秩序。

识别点：红黄蓝等原色；明确的基本几何；非对称的结构平衡。

样本：2 例，其中 1 例实站/创意体验。这里是受到包豪斯影响的网页表达，不是历史学认证。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [1014 · Space for Ideas](https://www.1014.nyc/)<br>https://www.1014.nyc/ | 实站 · 内容与文化 | 观察几何标识、原色与网格在文化机构网站中的运用；设计机构公开说明其 Bauhaus 启发。 | [查看原图](screenshots/81-1014.jpg) |
| [Remember Style · Bauhaus](https://dev.remember.style/bauhaus)<br>https://dev.remember.style/bauhaus | 风格演示 · 组件与风格演示 | 观察圆、方、三角与红黄蓝的组合；这是风格概念页，不是历史学校的官网。 | [查看原图](screenshots/82-bauhaus-demo.jpg) |

### Memphis / 波普几何

用活泼的几何拼块、波浪、点阵和撞色建立装饰性与玩心。

识别点：几何拼块与波浪；多色或粉彩撞色；装饰纹样与不规则组合。

样本：3 例，其中 1 例实站/创意体验。与地名 Memphis 和泛指企业人物插画的 Corporate Memphis 分开。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Memphoria · Automattic](https://memphoriademo.wordpress.com/)<br>https://memphoriademo.wordpress.com/ | 主题演示 · 组件与风格演示 | 观察 Automattic 官方主题中的几何装饰、图案、颜色与文章排版。 | [查看原图](screenshots/83-memphoria.jpg) |
| [Remember Style · Memphis](https://dev.remember.style/memphis)<br>https://dev.remember.style/memphis | 风格演示 · 组件与风格演示 | 观察波浪、点阵、几何拼块与不规则组合；属于概念演示。 | [查看原图](screenshots/84-memphis-demo.jpg) |
| [Memphis Milano](https://www.memphis.it/en/)<br>https://www.memphis.it/en/ | 实站 · 消费品牌与电商 | 观察 Memphis Milano 如何用原色几何、粗黑边与不对称拼贴延续孟菲斯语言。 | [查看原图](screenshots/204-memphis-milano.jpg) |

### 手绘草图 / 线框

让不规则线条、手写标注和草图式控件成为界面的主要语言。

识别点：不完全规则的线条；手绘边框与标记；草图或线框观感。

样本：5 例，其中 3 例实站/创意体验。区别于只有人物插画的品牌页；样本展示界面线条本身。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Wired Elements](https://wiredjs.com/)<br>https://wiredjs.com/ | 组件演示 · 组件与风格演示 | 观察手绘边框如何用于表单、卡片、按钮和滑块，而不只是插画装饰。 | [查看原图](screenshots/85-wired.jpg) |
| [Rough Notation](https://roughnotation.com/)<br>https://roughnotation.com/ | 组件演示 · 组件与风格演示 | 观察圈画、荧光笔和草图式下划线；截图通过页面的 annotate 按钮触发标注。 | [查看原图](screenshots/86-rough-notation.jpg) |
| [Excalidraw](https://excalidraw.com/)<br>https://excalidraw.com/ | 实站 · 开发者产品 | 观察 Excalidraw 如何用纸张底、手绘线条与极简工具栏降低绘图门槛。 | [查看原图](screenshots/205-excalidraw.jpg) |
| [Vinay Arora • Design](http://www.vinayarora.design)<br>http://www.vinayarora.design | 实站 · 个人作品集 | 把整页做成一张深灰卡纸：主卡片里用荧光黄绿的手绘椭圆圈住 Judges a book，右侧压一枚橙色警示贴纸，左右各挂一条竖排导航，视线始终被收在卡片中央。 | [查看原图](screenshots/214-vinay-arora-design.jpg) |
| [Andrea Toffanello](https://andreatoffanello.com)<br>https://andreatoffanello.com | 实站 · 个人作品集 | 整屏正中央只放一枚线刻徽章：同心刻度、人物侧脸和交叉双刀全靠极细线条画出，右上角故意留一团手绘草稿当杂质；米灰纸色配小号衬线字，把页面做出旧证书的观感，还要开声音再进入。 | [查看原图](screenshots/426-andrea-toffanello.jpg) |

## 材质

### 玻璃拟态

通过半透明面板、背景模糊与明暗边缘表现玻璃层次。

识别点：透出背景；模糊与透明度；细亮边与层叠。

样本：12 例，其中 8 例实站/创意体验。Liquid Glass 的折射与动态材质不等同于普通毛玻璃。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [CSS Glass](https://css.glass/)<br>https://css.glass/ | 风格工具 · 工具型应用 | 观察半透明卡片、模糊、边缘和阴影；这是玻璃材质的交互调参工具。 | [查看原图](screenshots/55-css-glass.jpg) |
| [Hype4 · Glassmorphism Generator](https://hype4.academy/tools/glassmorphism-generator)<br>https://hype4.academy/tools/glassmorphism-generator | 风格工具 · 工具型应用 | 观察透明度、模糊与背景对玻璃卡片观感的影响。 | [查看原图](screenshots/56-hype-glass.jpg) |
| [7.css](https://khang-nd.github.io/7.css/)<br>https://khang-nd.github.io/7.css/ | 组件演示 · 组件与风格演示 | 观察 Aero 风格中的玻璃窗口、渐变边缘与拟物控件。 | [查看原图](screenshots/69-7-css.jpg) |
| [Liquid Glass for the Web](https://liquidglass.dev/)<br>https://liquidglass.dev/ | 组件演示 · 组件与风格演示 | 观察透明透镜和边缘高光；这是第三方 Web 实现，不代表 Apple 原生材质。 | [查看原图](screenshots/71-liquidglass.jpg) |
| [Decimal Chain](https://decimalchain.com/)<br>https://decimalchain.com/ | 实站 · 产品与 SaaS | 观察加密钱包如何用玻璃拟态卡片与渐变光晕，把金融产品做得轻量而可读。 | [查看原图](screenshots/201-decimalchain.jpg) |
| [Cooldock](https://dock.cool)<br>https://dock.cool | 实站 · 产品与 SaaS | 把产品塞进一张 macOS 风格的风景壁纸：逆光山谷加前景两块岩石，半透明圆角 Dock 就浮在画面中下方，让人先认出「这是 Mac 桌面」再看懂功能；标题和按钮全部居中排在上半屏，产品只以一条毛玻璃横条出现。 | [查看原图](screenshots/259-cooldock.jpg) |
| [h2a.lu](https://www.h2a.lu/)<br>https://www.h2a.lu/ | 实站 · 创意工作室 | 整屏是一张被拍下的建筑外墙，绿色 WORK HARD 字样像反光一样浮在窗玻璃里，正好当主视觉；导航拆成左右两组小字夹住中央 logo，页面中间再浮一条半透明胶囊菜单，把实拍和 UI 分成两层。 | [查看原图](screenshots/324-h2a-lu.jpg) |
| [epple](https://vs-epple.de/)<br>https://vs-epple.de/ | 实站 · 品牌与机构 | 首屏做成一张占满宽度的大圆角卡片，卡片里铺一整片鼓起的透明气泡材质，正好隐喻包装业务；标题贴在卡片左下、白色胶囊按钮贴在右下，顶部导航留在纯白页面上，卡片像被捧在版心里。 | [查看原图](screenshots/325-epple.jpg) |
| [Belgrade Arbor](https://belgradearbor.rs/en)<br>https://belgradearbor.rs/en | 创意体验 · 在线体验 | 首屏是一整块被强模糊处理的建筑 3D 渲染，像隔着一层磨砂玻璃看楼体，只留下轮廓和天空；顶部悬一枚深色胶囊导航（左 HOME、中 logo、右 INQUIRE），完全不放标题，用画面本身说明这里可以探索。 | [查看原图](screenshots/326-belgrade-arbor.jpg) |
| [Avocats en Droit de la famille](https://kohenavocats.com/avocats-droit-famille-paris/)<br>https://kohenavocats.com/avocats-droit-famille-paris/ | 实站 · 品牌与机构 | 把一张半透明白卡浮在兰花照片上，卡里塞进完整的留资表单（姓名 / 电话 / 邮箱 / 案情描述），80€ 与 4,9 分两张小卡做成悬浮贴纸，右下角再挂常驻的在线咨询与 WhatsApp；用玻璃质感把“专业”和“可信”一起递出来。 | [查看原图](screenshots/362-avocats-en-droit-de-la-fam.jpg) |
| [WowMade AI](https://wowmade.ai/)<br>https://wowmade.ai/ | 实站 · 产品与 SaaS | 首屏被压暗后只浮出一张半透明产品面板：左栏叠文案与权益清单，右栏把 $25/$60/$95 三档订阅排成可选列表，中间一档用紫底高亮，价格直接成为视觉中心。 | [查看原图](screenshots/382-wowmade-ai.jpg) |
| [Maxime Heckel](https://maximeheckel.com/)<br>https://maximeheckel.com/ | 实站 · 个人作品集 | 首屏整块让给一张深蓝 3D 场景：几支玻璃质感的胶囊悬浮在网格地面上拖出长影，标题被缩成左下角两行小字，还特意用一块亮斑压住关键词，让场景而不是文字承担第一印象。 | [查看原图](screenshots/407-maxime-heckel.jpg) |

### 新拟态 / 柔和浮雕

用同色表面上的成对明暗阴影表达凸起与凹陷。

识别点：表面与背景同色系；双向柔和阴影；低对比的凸凹关系。

样本：2 例，其中 0 例实站/创意体验。普通圆角加阴影并不足以判为新拟态；需留意可读性。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Neumorphism.io](https://neumorphism.io/)<br>https://neumorphism.io/ | 风格工具 · 工具型应用 | 观察一明一暗的柔和阴影如何让同色表面凸起或凹陷。 | [查看原图](screenshots/57-neumorphism.jpg) |
| [Themesberg · Neumorphism UI](https://demo.themesberg.com/neumorphism-ui/)<br>https://demo.themesberg.com/neumorphism-ui/ | 组件演示 · 组件与风格演示 | 观察新拟态在导航、按钮和卡片中的组合，也留意低对比的限制。 | [查看原图](screenshots/58-neumorphism-ui.jpg) |

### 拟物 / 复古桌面

借用现实物体或历史操作系统的控件、窗口和材质隐喻。

识别点：立体按钮与窗口镶边；桌面与设备隐喻；历史界面细节。

样本：8 例，其中 3 例实站/创意体验。这是网页中的界面复刻，不表示这些历史系统仍是主流产品风格。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [RPGUI](https://ronenness.github.io/RPGUI/)<br>https://ronenness.github.io/RPGUI/ | 组件演示 · 组件与风格演示 | 观察像素边框、游戏字体和带材质的容器、按钮与进度条。 | [查看原图](screenshots/52-rpgui.jpg) |
| [Poolsuite](https://poolsuite.net/)<br>https://poolsuite.net/ | 实站 · 在线体验 | 观察复古窗口、按钮与播放器如何共同建立桌面隐喻。 | [查看原图](screenshots/59-poolsuite.jpg) |
| [98.css](https://jdan.github.io/98.css/)<br>https://jdan.github.io/98.css/ | 组件演示 · 组件与风格演示 | 观察窗口镶边、立体按钮、状态栏和经典控件的细节。 | [查看原图](screenshots/60-98-css.jpg) |
| [XP.css](https://botoxparty.github.io/XP.css/)<br>https://botoxparty.github.io/XP.css/ | 组件演示 · 组件与风格演示 | 观察历史桌面系统的渐变窗口与控件材质；属于复刻演示。 | [查看原图](screenshots/61-xp-css.jpg) |
| [7.css](https://khang-nd.github.io/7.css/)<br>https://khang-nd.github.io/7.css/ | 组件演示 · 组件与风格演示 | 观察 Aero 风格中的玻璃窗口、渐变边缘与拟物控件。 | [查看原图](screenshots/69-7-css.jpg) |
| [System.css](https://sakofchit.github.io/system.css/)<br>https://sakofchit.github.io/system.css/ | 组件演示 · 组件与风格演示 | 观察黑白像素、抖动纹理和经典 Mac 窗口怎样用于网页控件。 | [查看原图](screenshots/70-system-css.jpg) |
| [PouyaOS](https://pouyashahri.com)<br>https://pouyashahri.com | 创意体验 · 在线体验 | 把整站做成一个桌面系统：左侧一列带小字标签的图标当导航，底部一条 Dock 放各个入口，右上角「Click to start tour」负责带路；壁纸换成真人站在绿色代码墙前的照片，用「我正在翻别人的电脑」的错觉替代常规首屏。 | [查看原图](screenshots/244-pouyaos.jpg) |
| [ree|b. Handheld Portfolio](https://areebali.com/)<br>https://areebali.com/ | 实站 · 个人作品集 | 整页只在淡灰蓝空场中央摆一台白色便携播放器的 3D 渲染，屏幕是黑的、只透出几行极淡的字，一条橙色小拨片是唯一色点；所有说明缩到 8px 贴在两侧，右侧还留一条像机身滑块的竖条，把作品集伪装成一件硬件。 | [查看原图](screenshots/277-ree-b-handheld-portfolio.jpg) |

### 液态玻璃 / 折射

在透明层上用边缘高光、折射或形变模拟更接近透镜的材质。

识别点：边缘折射；背景形变；透明透镜高光。

样本：4 例，其中 2 例实站/创意体验。这里是第三方 Web 演示，不声称等同于 Apple 原生材质；静态图无法体现全部动态。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Liquid Glass for the Web](https://liquidglass.dev/)<br>https://liquidglass.dev/ | 组件演示 · 组件与风格演示 | 观察透明透镜和边缘高光；这是第三方 Web 实现，不代表 Apple 原生材质。 | [查看原图](screenshots/71-liquidglass.jpg) |
| [Liquid Glass · Sam Asante](https://glass.samasante.com/)<br>https://glass.samasante.com/ | 组件演示 · 组件与风格演示 | 对照透明透镜在背景上的形变与高光，动态效果需要打开原站。 | [查看原图](screenshots/72-liquid-react.jpg) |
| [Apple Vision Pro](https://www.apple.com/apple-vision-pro/)<br>https://www.apple.com/apple-vision-pro/ | 实站 · 消费品牌与电商 | 观察 Apple 如何用半透明导航、玻璃质感面板与产品摄影，把空间计算设备讲成日常体验。 | [查看原图](screenshots/206-apple-vision-pro.jpg) |
| [https://wearedelta.it/](https://wearedelta.it/)<br>https://wearedelta.it/ | 实站 · 创意工作室 | 灰绿渐变底上放一枚虹彩金属圆片，标题用极细的大写扩展字重分两行压在圆片之上，字母被物体盖住一部分，形成字与 3D 物件互相穿插的层次；页面其余部分只剩角落的 logo、圆形按钮和两枚小链接。 | [查看原图](screenshots/317-https-wearedelta-it.jpg) |

### 黏土 / 膨胀软体

用膨胀轮廓、厚实圆角、内部光影和柔软色彩表现黏土般体积。

识别点：充气般的形状；内阴影与厚实圆角；柔和体积感。

样本：4 例，其中 2 例实站/创意体验。与同背景浮雕的新拟态分别收录；生产环境少见纯 claymorphism UI，真实站点样本取「软塑 3D 角色 / 场景」，演示与工具作为对照。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Hype4 · Claymorphism Generator](https://hype4.academy/tools/claymorphism-generator)<br>https://hype4.academy/tools/claymorphism-generator | 风格工具 · 工具型应用 | 观察内阴影、厚圆角与外阴影怎样形成膨胀的柔软体积。 | [查看原图](screenshots/73-clay-generator.jpg) |
| [Bloom · Claymorphism Demo](https://8web.ai/demo/claymorphism)<br>https://8web.ai/demo/claymorphism | 风格演示 · 组件与风格演示 | 风格演示页中的圆润卡片与柔和体积；Bloom 是演示品牌，不计为商业实站。 | [查看原图](screenshots/74-clay-bloom.jpg) |
| [Duolingo](https://www.duolingo.com/)<br>https://www.duolingo.com/ | 实站 · 产品与 SaaS | 首屏不放大图，居中一组软塑质感的 3D 角色；下方一排语言国旗把多语言产品矩阵压成一条横带。 | [查看原图](screenshots/472-duolingo.jpg) |
| [Clay](https://www.clay.com/)<br>https://www.clay.com/ | 实站 · 产品与 SaaS | 绿色渐变底上搭一座圆润的 3D 场景，把数据服务讲成可漫游的地形；按钮和标题都压在场景上方。 | [查看原图](screenshots/473-clay.jpg) |

## 设计系统

### Material 设计语言

以 Material 的组件形状、主题色、状态与层级组织界面。

识别点：可辨识 Material 控件；系统化主题色；状态与层级规范。

样本：4 例，其中 0 例实站/创意体验。优先参考官方组件与演示，不把所有扁平设计都归入 Material。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Material Design 3](https://m3.material.io/)<br>https://m3.material.io/ | 官方规范 · 文档与设计系统 | 观察官方设计语言中的形状、主题色、排版与组件展示。 | [查看原图](screenshots/62-material.jpg) |
| [Angular Material · Button](https://material.angular.dev/components/button/overview)<br>https://material.angular.dev/components/button/overview | 官方组件演示 · 组件与风格演示 | 直接观察 Material 按钮的形状、层级与各种交互状态。 | [查看原图](screenshots/63-angular-material.jpg) |
| [MUI: Material UI](https://mui.com/material-ui/)<br>https://mui.com/material-ui/ | 官方规范 · 文档与设计系统 | 观察 开发者工具/基础设施 站点如何用Material 设计语言建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/99-mui-com.jpg) |
| [Google Material Design](https://material.io/guidelines/#introduction-goals)<br>https://material.io/guidelines/#introduction-goals | 官方规范 · 文档与设计系统 | 整页压到近黑色，只让紫色承担强调色；左侧用一个超大 “Design” 起段，右侧列 “NEW IN” 三条小链接，靠字号差而不是分割线建立层级。下方两张深色卡片各只放一张图加一个栏目标签，把基础规范当画廊一样陈列。 | [查看原图](screenshots/392-google-material-design.jpg) |

### 企业中性 / 高密度界面

以紧凑信息、稳定中性色和明确组件状态支持高频工作。

识别点：表格与工具条；紧凑间距和明确分组；语义色与一致控件。

样本：20 例，其中 3 例实站/创意体验。收录可直接打开的后台演示，营销页不代替真实界面。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [shadcn-admin Demo](https://shadcn-admin.netlify.app/)<br>https://shadcn-admin.netlify.app/ | 后台演示 · 后台与工作台 | 观察真实后台演示中的侧栏、指标、图表和紧凑组件；不以营销页代替后台。 | [查看原图](screenshots/64-shadcn-admin.jpg) |
| [Tabler Demo](https://preview.tabler.io/)<br>https://preview.tabler.io/ | 后台演示 · 后台与工作台 | 观察高密度后台如何使用间距、卡片和语义色保持秩序。 | [查看原图](screenshots/65-tabler.jpg) |
| [Atlassian Design System](https://atlassian.design)<br>https://atlassian.design | 官方规范 · 文档与设计系统 | 观察 SaaS/订阅软件 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/87-atlassian-design.jpg) |
| [Salesforce Lightning Design System](https://www.lightningdesignsystem.com)<br>https://www.lightningdesignsystem.com | 官方规范 · 文档与设计系统 | 观察 SaaS/订阅软件 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/93-www-lightningdesignsystem-com.jpg) |
| [IBM Carbon](https://www.carbondesignsystem.com/)<br>https://www.carbondesignsystem.com/ | 官方规范 · 文档与设计系统 | 观察 开发者工具/基础设施 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/97-www-carbondesignsystem-com.jpg) |
| [Backpack (Skyscanner)](https://skyscanner.design/)<br>https://skyscanner.design/ | 官方规范 · 文档与设计系统 | 观察 旅行/酒店 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/120-skyscanner-design.jpg) |
| [GOV.UK Design System](https://www.gov.uk/design-system)<br>https://www.gov.uk/design-system | 官方规范 · 文档与设计系统 | 观察 政府/公共事业 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/140-www-gov-uk.jpg) |
| [Korea Design System](https://www.krds.go.kr)<br>https://www.krds.go.kr | 官方规范 · 文档与设计系统 | 观察 政府/公共事业 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/141-www-krds-go-kr.jpg) |
| [U.S. Web Design Standards](https://designsystem.digital.gov/)<br>https://designsystem.digital.gov/ | 官方规范 · 文档与设计系统 | 观察 政府/公共事业 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/144-designsystem-digital-gov.jpg) |
| [Siemens iX](https://ix.siemens.io/)<br>https://ix.siemens.io/ | 官方规范 · 文档与设计系统 | 观察 制造/工业/硬件 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/158-ix-siemens-io.jpg) |
| [Porsche Design System](https://designsystem.porsche.com)<br>https://designsystem.porsche.com | 官方规范 · 文档与设计系统 | 观察 汽车/交通 站点如何用企业中性 / 高密度界面建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/199-designsystem-porsche-com.jpg) |
| [Checkpoint Research](https://www.checkpointresearch.ca)<br>https://www.checkpointresearch.ca | 实站 · 品牌与机构 | 用一横一竖两条细线把首屏切成四格，交点处放一团柔和的蓝色光晕，标题刚好压在左下格的边线上；所有文字都靠左下角对齐、按钮做成细边小方框，右上角只留两组导航和一个蓝色实心 CTA，用「图纸」般的直线建立可信感。 | [查看原图](screenshots/257-checkpoint-research.jpg) |
| [Cula Technologies](https://www.cula.tech/)<br>https://www.cula.tech/ | 实站 · 产品与 SaaS | 近白底上铺一层极淡的发丝网格，标题与一句短承诺分置一条细线带的两端、上下各压一道分隔线，中间只留一小段下划线与 Scroll 字样，用网格和留白做出精密仪器的感觉。 | [查看原图](screenshots/309-cula-technologies.jpg) |
| [Matrixspace](https://www.matrixspace.com/)<br>https://www.matrixspace.com/ | 实站 · 产品与 SaaS | 首屏被切成明暗两块：上半纯白只放两行超大黑体短语讲清价值，下半换成压暗的航拍图并叠一层蓝色雷达锥；文案从浅底跨到深底，产品能力靠画面而不是靠罗列功能说明。 | [查看原图](screenshots/315-matrixspace.jpg) |
| [Adobe Spectrum](https://spectrum.adobe.com)<br>https://spectrum.adobe.com | 官方规范 · 文档与设计系统 | 浅灰底上把所有内容锁在一条窄中线上：公告胶囊、居中标题、深色圆角 CTA 全部居中对齐；标题下用两张等宽圆角图卡（一张紫色抽象 3D、一张界面截图）把“设计语言”和“组件”分栏讲，卡内文字压到说明级别，靠留白撑住呼吸感。 | [查看原图](screenshots/391-adobe-spectrum.jpg) |
| [Alaska Airlines](https://auro.alaskaair.com/)<br>https://auro.alaskaair.com/ | 官方规范 · 文档与设计系统 | 文档骨架由常驻左侧栏和顶部搜索（深蓝实心按钮）固定住，内容区先给一块海军蓝面板装飞机与 UI 卡片的扁平插画、右侧配一句 “Auro is enablement”；紧接着一条咖啡桌照片的深色横幅放两个描边按钮，用实拍图把技术文档拉回生活场景。 | [查看原图](screenshots/393-alaska-airlines.jpg) |
| [Okta Odyssey Design System](https://odyssey-storybook.okta.design/)<br>https://odyssey-storybook.okta.design/ | 官方组件演示 · 文档与设计系统 | 典型 Storybook 三栏：左侧可展开的组件树带 beta 角标，中间 README 用表格列出仓库结构和包清单，包路径全部做成蓝色等宽链接；标题、正文、表格三级字号压得很平，让整页像一份可检索的说明书而不是宣传页。 | [查看原图](screenshots/394-okta-odyssey-design-system.jpg) |
| [MongoDB Design System](http://mongodb.design)<br>http://mongodb.design | 官方规范 · 文档与设计系统 | 深蓝底上只留荧光绿做强调，左栏固定导航、右栏内容卡；内容卡把六个组件图标排成 icon＋标签的一行宫格，再用一张“手握绿色方块”的插画压在卡片右上角，用插画打破网格的呆板。 | [查看原图](screenshots/396-mongodb-design-system.jpg) |
| [Flowbite · Skeleton](https://flowbite.com/docs/components/skeleton/)<br>https://flowbite.com/docs/components/skeleton/ | 组件演示 · 组件与风格演示 | 用灰色方块与圆点拼出「加载中」的占位骨架，尺寸和真实内容一一对应；加载态因此不用转圈也能说明结构。 | [查看原图](screenshots/474-flowbite-skeleton.jpg) |
| [Chakra UI · Skeleton](https://chakra-ui.com/docs/components/skeleton)<br>https://chakra-ui.com/docs/components/skeleton | 组件演示 · 组件与风格演示 | 骨架屏用一个圆 + 两条灰条对应头像与标题：占位块的尺寸、圆角和真实内容一致，数据到达时不会跳动。 | [查看原图](screenshots/480-chakra-ui-skeleton.jpg) |

### Fluent 设计语言

以微软 Fluent 的组件、排版、层级和状态系统组织工作型界面。

识别点：官方 Fluent 组件；克制的表面与层级；一致的状态和交互。

样本：4 例，其中 0 例实站/创意体验。以官方规范与组件为参考，不把普通蓝色后台直接称为 Fluent。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Fluent 2 · Microsoft](https://fluent2.microsoft.design/)<br>https://fluent2.microsoft.design/ | 官方规范 · 文档与设计系统 | 观察微软官方 Fluent 的组件展示、排版和界面层级；不是普通蓝色后台的泛称。 | [查看原图](screenshots/79-fluent.jpg) |
| [Fluent UI React · Button](https://storybooks.fluentui.dev/react/?path=/docs/components-button-button--docs)<br>https://storybooks.fluentui.dev/react/?path=/docs/components-button-button--docs | 官方组件演示 · 组件与风格演示 | 直接对照官方按钮的形状、层级和交互状态。 | [查看原图](screenshots/80-fluent-button.jpg) |
| [Fluent UI](https://developer.microsoft.com/en-us/fluentui#/)<br>https://developer.microsoft.com/en-us/fluentui#/ | 官方规范 · 文档与设计系统 | 观察 SaaS/订阅软件 站点如何用Fluent 设计语言建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/89-developer-microsoft-com.jpg) |
| [Microsoft Fluent](https://www.microsoft.com/design/fluent/)<br>https://www.microsoft.com/design/fluent/ | 官方规范 · 文档与设计系统 | 首屏只做三件事：一行巨大的 “Fluent 2” 黑体、一句把 “etasks” 单独抽出来做浅灰高亮的副标、右侧半透明虹彩叠片 3D 主视觉；下方两张等宽圆角白卡把 Design / Develop 两条路径并列，卡内用图标方块代替插画。 | [查看原图](screenshots/398-microsoft-fluent.jpg) |

## 版式与交互

### Bento / 卡片模块

通过大小不一、边界明确的卡片模块组织多个信息单元。

识别点：不同跨度的卡片；模块内自成层级；整体遵循网格。

样本：3 例，其中 2 例实站/创意体验。Bento 是版式模式，可与极简、玻璃和深色科技组合。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Supabase](https://supabase.com/)<br>https://supabase.com/ | 实站 · 开发者产品 | 观察开发者产品如何平衡技术信息、代码内容与营销表达。 | [查看原图](screenshots/10-supabase.jpg) |
| [Aceternity · Bento Grid](https://ui.aceternity.com/components/bento-grid)<br>https://ui.aceternity.com/components/bento-grid | 组件演示 · 组件与风格演示 | 观察不同跨度卡片如何组合成整体，以及每张卡片内的信息层级。 | [查看原图](screenshots/68-bento.jpg) |
| [Mukul Chugh](https://mukulchugh.com/)<br>https://mukulchugh.com/ | 实站 · 个人作品集 | 黑底上用大小不等的卡片拼出首屏：左侧荧光绿大卡压着黑字宣言和 View work，下面接深色项目卡，右侧白卡内嵌一块注明“移动光标即可玩”的小游戏，让视线在卡片间跳而不是顺着长页读。 | [查看原图](screenshots/419-mukul-chugh.jpg) |

### 3D / 沉浸场景

让空间场景、实时图形或可探索世界成为主要浏览载体。

识别点：三维空间为主体；交互影响场景；画面与导航结合。

样本：82 例，其中 82 例实站/创意体验。一张 3D 插图与可交互沉浸世界不是同一种体验，个案说明应区分。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Spline](https://spline.design/)<br>https://spline.design/ | 实站 · 产品与 SaaS | 观察三维设计工具如何让场景作品直接承担产品能力展示。 | [查看原图](screenshots/06-spline.jpg) |
| [Lusion](https://lusion.co/)<br>https://lusion.co/ | 实站 · 创意工作室 | 观察三维主视觉、导航和大字号如何共同构成沉浸式首屏；动效需打开原站体验。 | [查看原图](screenshots/15-lusion.jpg) |
| [Active Theory](https://activetheory.net/)<br>https://activetheory.net/ | 实站 · 创意工作室 | 观察创意技术团队如何用实时图形表达能力；静态截图仅记录一个时刻。 | [查看原图](screenshots/16-active-theory.jpg) |
| [Unseen Studio](https://unseen.co/)<br>https://unseen.co/ | 实站 · 创意工作室 | 观察场景化视觉如何与少量界面元素结合；截图不替代互动体验。 | [查看原图](screenshots/19-unseen.jpg) |
| [Bruno Simon](https://bruno-simon.com/)<br>https://bruno-simon.com/ | 实站 · 个人作品集 | 观察用可探索场景组织个人作品的方式；交互和加载性能需要在原站体验。 | [查看原图](screenshots/21-bruno-simon.jpg) |
| [Stripe Press](https://press.stripe.com/)<br>https://press.stripe.com/ | 实站 · 内容与文化 | 观察出版物封面如何成为视觉主体，以及书目、标题与介绍的层级。 | [查看原图](screenshots/31-stripe-press.jpg) |
| [Race Condition](https://www.northkingdom.com/case/racecondition)<br>https://www.northkingdom.com/case/racecondition | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/92-race-condition.jpg) |
| [SentientX](https://www.sentientx.com)<br>https://www.sentientx.com | 实站 · 产品与 SaaS | 观察 SaaS/订阅软件 站点如何用3D / 沉浸场景、杂志编辑式建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/94-sentientx.jpg) |
| [Cerebrium](https://cerebrium.ai/)<br>https://cerebrium.ai/ | 实站 · 开发者产品 | 观察 开发者工具/基础设施 站点如何用3D / 沉浸场景、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/96-cerebrium.jpg) |
| [Linea Prompt](https://lineaprompt.com)<br>https://lineaprompt.com | 实站 · 开发者产品 | 观察 开发者工具/基础设施 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/98-linea-prompt.jpg) |
| [ABTC - American Bitcoin](https://www.abtc.com/)<br>https://www.abtc.com/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用3D / 沉浸场景、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/101-abtc-american-bitcoin.jpg) |
| [iCapital](https://www.icapital.es/en/)<br>https://www.icapital.es/en/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/105-icapital.jpg) |
| [Fitosauna](https://fitosauna.com/)<br>https://fitosauna.com/ | 实站 · 消费品牌与电商 | 观察 电商/零售 站点如何用高端摄影 / 品牌留白、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/108-fitosauna.jpg) |
| [Plumeform](https://plumeform.com)<br>https://plumeform.com | 实站 · 消费品牌与电商 | 观察 消费品牌/独立品牌 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/112-plumeform.jpg) |
| [Columbus Travel](https://columbus-travel.com/)<br>https://columbus-travel.com/ | 实站 · 消费品牌与电商 | 观察 旅行/酒店 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/122-columbus-travel.jpg) |
| [Duyu Care](https://duyucare.dops.agency/)<br>https://duyucare.dops.agency/ | 实站 · 品牌与机构 | 观察 医疗/健康 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/130-duyu-care.jpg) |
| [Dérive](https://derive-ocean.com/)<br>https://derive-ocean.com/ | 实站 · 内容与文化 | 观察 教育/课程 站点如何用插画 / 手绘、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/133-derive-2.jpg) |
| [SIT Virtual Campus Tour](https://www.singaporetech.edu.sg/openhouse/virtual-campus-tour/)<br>https://www.singaporetech.edu.sg/openhouse/virtual-campus-tour/ | 实站 · 内容与文化 | 观察 教育/课程 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/136-sit-virtual-campus-tour.jpg) |
| [Mino Works](https://mino.works/)<br>https://mino.works/ | 实站 · 创意工作室 | 观察 建筑/地产 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/152-mino-works.jpg) |
| [TOSEN | Architecture Studio](https://www.tosen.es/)<br>https://www.tosen.es/ | 实站 · 创意工作室 | 观察 建筑/地产 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/153-tosen-architecture-studio.jpg) |
| [Traçat Arquitectura 360](https://www.trasat.com)<br>https://www.trasat.com | 实站 · 创意工作室 | 观察 建筑/地产 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/154-tracat-arquitectura-360.jpg) |
| [OLYMPIC SUBSEA](https://www.olympic.no/)<br>https://www.olympic.no/ | 实站 · 消费品牌与电商 | 观察 制造/工业/硬件 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/157-olympic-subsea.jpg) |
| [AVEA](https://avea.studio/)<br>https://avea.studio/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/159-avea.jpg) |
| [Dopamine Studio](https://www.dopaminestudio.io/)<br>https://www.dopaminestudio.io/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用极简留白、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/161-dopamine-studio.jpg) |
| [Garaje Inspiration Fest](https://gif.garajedeideas.com/)<br>https://gif.garajedeideas.com/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/162-garaje-inspiration-fest.jpg) |
| [Pensatori Irrazionali](https://pensatori-irrazionali.com/)<br>https://pensatori-irrazionali.com/ | 实站 · 创意工作室 | 观察 设计/创意机构 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/165-pensatori-irrazionali.jpg) |
| [Blunt Umbrellas](https://bluntumbrellas.com)<br>https://bluntumbrellas.com | 实站 · 消费品牌与电商 | 观察 体育 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/179-blunt-umbrellas.jpg) |
| [Chande Bootcamp 2026](http://chandebootcamp.com/)<br>http://chandebootcamp.com/ | 实站 · 消费品牌与电商 | 观察 体育 站点如何用插画 / 手绘、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/180-chande-bootcamp-2026.jpg) |
| [Design Bomb Festival](https://www.designbomb.it/)<br>https://www.designbomb.it/ | 实站 · 内容与文化 | 观察 活动/会议 站点如何用3D / 沉浸场景、极繁 / 拼贴建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/184-design-bomb-festival.jpg) |
| [HONDA WING MARK HISTORY](https://global.honda/jp/wingmark/)<br>https://global.honda/jp/wingmark/ | 实站 · 消费品牌与电商 | 观察 汽车/交通 站点如何用3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/198-honda-wing-mark-history.jpg) |
| [Second Ride](https://second-ride.de/en)<br>https://second-ride.de/en | 实站 · 消费品牌与电商 | 观察 汽车/交通 站点如何用极简留白、3D / 沉浸场景建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/200-second-ride.jpg) |
| [Goodgrowth](https://goodgrowth.com)<br>https://goodgrowth.com | 实站 · 个人作品集 | 整屏只放一枚渐变底上的 CD 和一行 INSERT DISC 小按钮，把千禧年的光盘启动界面搬进浏览器；说明文字全部压到 10px 等宽体贴边，让中间那一点成为唯一焦点。 | [查看原图](screenshots/209-goodgrowth.jpg) |
| [Calculated Camouflage](https://calculatedcamouflage.com/)<br>https://calculatedcamouflage.com/ | 创意体验 · 在线体验 | 标题用极细描边的超大字号压在左上角，右侧以黄绿红蓝四块叠色加半调网点还原装置里的光；正文缩到极小、按钮排成一行方括号，纯靠字号差建立层级。 | [查看原图](screenshots/213-calculated-camouflage.jpg) |
| [The Shape of Intelligence](https://shapeofintelligence.com/)<br>https://shapeofintelligence.com/ | 创意体验 · 内容与文化 | 标题拆成两行超大无衬线字，让一枚液态金属 3D 形体从字间穿过、遮住笔画，第一眼先看到形状而不是文案；底部圆点选择器把长文拆成可切换的章节。 | [查看原图](screenshots/217-the-shape-of-intelligence.jpg) |
| [Springs](https://springs.estate/)<br>https://springs.estate/ | 实站 · 品牌与机构 | 把自然与建筑照片拼成一面带透视倾斜的照片墙铺满首屏，只用深绿留缝；细衬线标题压在图上，比常规的大图加文案更像一段被取景的走廊。 | [查看原图](screenshots/222-springs.jpg) |
| [Voku.Studio™](https://voku.studio/)<br>https://voku.studio/ | 实站 · 创意工作室 | 白底上只摆一条横贯页面的影片截帧带，帧块高低错落成拱形，靠明暗对比撑起整个画面；说明文字缩到极小贴在中线，右下角用时间码暗示这是可播放的作品索引。 | [查看原图](screenshots/230-voku-studio.jpg) |
| [Félix Péault • Photographer](https://felixpeault.com)<br>https://felixpeault.com | 实站 · 个人作品集 | 整屏是青绿到粉的渐变场，唯一那张照片被半透明斜线遮罩盖住只露出轮廓；四角用巨大的字母 F 和 P 当框线，说明文字压在 P 右侧形成不对称重心。 | [查看原图](screenshots/231-fe-lix-pe-ault-photographe.jpg) |
| [World Cup — The Immortals](https://theimmortals.world/)<br>https://theimmortals.world/ | 创意体验 · 在线体验 | 3D 渲染的金杯压在中轴，前后再叠球队合影和两张半透明老照片，凑出三层纵深；年份 2026 直接当图形排在右侧，标题只在下方向留一句。 | [查看原图](screenshots/233-world-cup-the-immortals.jpg) |
| [The Spark](https://spark.thedigitalpanda.com/)<br>https://spark.thedigitalpanda.com/ | 创意体验 · 在线体验 | 整屏近乎全黑，只在下方露出一段发光的 3D 线框和一行等宽白字，把「下载数据包」写成加载文案；用声音开关和极暗的场景先把人拉进氛围，再讲内容。 | [查看原图](screenshots/235-the-spark.jpg) |
| [The Scope Creep](https://scope-creep.xyz)<br>https://scope-creep.xyz | 创意体验 · 在线体验 | 整屏压在暗红渐变里，SCOPE CREEP 用扭曲衬线体做到满宽，THE 缩小塞进两个单词中间形成叠字；底部一条极暗的 3D 走廊配胶囊播放键，把进入游戏做成唯一动作。 | [查看原图](screenshots/239-the-scope-creep.jpg) |
| [Work In Progress](https://www.veryworkinprogress.com)<br>https://www.veryworkinprogress.com | 实站 · 内容与文化 | 首屏是一张 3D 渲染的美术馆墙面，彩色同心圆画作在灰白空间里成为唯一色块；图片下方用两条细线加等宽小字把城市、日期、导航压成一条信息带，画面和信息互不打扰。 | [查看原图](screenshots/240-work-in-progress.jpg) |
| [LUT Studios](https://lutstudios.com/)<br>https://lutstudios.com/ | 实站 · 创意工作室 | 整屏只有一段片场实拍（暗调、几乎全黑），没有标题也没有导航，画面里那台摄影机就是主角；屏幕中央压一条细长的胶囊状进度条并写着 UNMUTE，右侧一枚竖排箭头提示继续滚——用「一段没看完的影片」把人留在首屏。 | [查看原图](screenshots/243-lut-studios.jpg) |
| [Jacob How Portfolio](http://jcubhow.com)<br>http://jcubhow.com | 实站 · 个人作品集 | 二十多张高饱和插画海报沿 3D 纵深排成一把扇子，近处那张几乎顶到左下角，越远越小、彼此重叠，直接把黑色舞台做成展墙；左上只用两行小字交代身份，底部一条药丸导航托住视线，作品本身充当背景。 | [查看原图](screenshots/247-jacob-how-portfolio.jpg) |
| [THE UN KNOWN ® Next-Gen Creative Consultancy](https://theunknown.tv)<br>https://theunknown.tv | 实站 · 创意工作室 | 用一整片紫到橙的渐变天幕加一枚带光束的 3D 球体做背景，窄长体标题压在球体正中、只遮住一部分以保留未完成感；右下浮一张带播放图标的圆角小卡、底部用超宽字距的 YOU CAN 收尾，靠色温而不是图片讲主题。 | [查看原图](screenshots/269-the-un-known-next-gen-crea.jpg) |
| [LOUD. Digital Product Company.](https://loudsrl.com)<br>https://loudsrl.com | 实站 · 创意工作室 | 整屏是一块缓慢流动的黑色液态金属渲染，靠反光区分层次、没有任何边框或卡片；正中只放一行等宽白字和一条几乎看不见的副标题，导航与版权全部压到 10px 贴在四角，让材质本身成为唯一的图像。 | [查看原图](screenshots/274-loud-digital-product-compa.jpg) |
| [Pixelismo Studio](https://www.pixelismo.it)<br>https://www.pixelismo.it | 实站 · 创意工作室 | 整屏铺满倾斜排列的手绘线稿，压成灰调当底纹；真实信息被收进居中的黑色圆角卡片，只靠一块高饱和紫蓝的 3D 软胶渲染把视线钉住，浅底与黑卡形成两级明度。 | [查看原图](screenshots/278-pixelismo-studio.jpg) |
| [Vantor](https://vantor.com/)<br>https://vantor.com/ | 实站 · 产品与 SaaS | 把航拍俯视图当整屏底图，上面叠圆形靶标、方框锁定和 ACQUIRED、NEW MISSION 之类细线标注，读起来像情报界面而不是普通 SaaS 首页；标题只占左下四分之一。 | [查看原图](screenshots/280-vantor.jpg) |
| [Junca Studio](https://juncastudio.com/)<br>https://juncastudio.com/ | 实站 · 创意工作室 | 整屏黑场里只放一台红色打光的复古 3D 装置，光晕从设备边缘溢进暗部，三行白色无衬线标题压在左下；顶部导航拉开间距，右侧一枚橙色按钮收口，注意力全给那台机器。 | [查看原图](screenshots/282-junca-studio.jpg) |
| [Mario Carrillo](https://marioecg.com/)<br>https://marioecg.com/ | 实站 · 个人作品集 | 首屏几乎不放文案：整幅宽度切成十几条竖向渐变色柱，从青绿过渡到品红，用色相过渡在静态画面里造出流动感；导航缩成左上角一行小字，把“这是谁”交给颜色回答。 | [查看原图](screenshots/285-mario-carrillo.jpg) |
| [ibaCOMMUNITY worldwide baking](https://iba-globe.why.de/)<br>https://iba-globe.why.de/ | 创意体验 · 内容与文化 | 整屏压成接近黑的模糊影像，只留一句高对比衬线大字和一枚对齐其字首的黄色药丸按钮；全站只有黄色一个强调色，“进入”成了画面里唯一的可点信号。 | [查看原图](screenshots/286-ibacommunity-worldwide-bak.jpg) |
| [atuin.media](http://www.atuin.media)<br>http://www.atuin.media | 实站 · 创意工作室 | 白底只放一个半透明宝蓝 3D 丝带环当主视觉，黑色巨型文案直接压在上面，再用细描边的圆角框把关键词 software 单独拎出来；不靠装饰，全靠物体与文字的层叠关系。 | [查看原图](screenshots/288-atuin-media.jpg) |
| [Triptych Interactive](http://3dv2.triptych.co)<br>http://3dv2.triptych.co | 实站 · 创意工作室 | 黑底细网格上开三扇圆拱形渲染窗，里面各是一幅雾山风景；大标题横跨三窗，只有 simple 换成衬线斜体并略微错位，一个词把调性从科技拉到诗意。 | [查看原图](screenshots/291-triptych-interactive.jpg) |
| [Cosmic Sans Microsite](https://cosmic-sans.blast-foundry.com)<br>https://cosmic-sans.blast-foundry.com | 创意体验 · 在线体验 | 用一块从深藏青渐到雾白的宇宙光晕铺满首屏，字体名用极细超宽的大写字母压在正中——字够大、笔画够细，正好演示这款字“安静信号”的性格；导航拆成六个描边小格排在顶上，压住画面重量。 | [查看原图](screenshots/292-cosmic-sans-microsite.jpg) |
| [Art Here 2025 - Richard Mille](https://artprize-shadows.com/)<br>https://artprize-shadows.com/ | 创意体验 · 在线体验 | 整屏是一间纯白展厅的 3D 渲染，高窗切进硬光打出长阴影，一颗镂空镜面球悬在正中；字标直接压在球体上，年份拆成 20 与 25 贴在画面两侧，用极少的元素撑住整个展陈气质。 | [查看原图](screenshots/294-art-here-2025-richard-mill.jpg) |
| [Stōkt - Creative Company](https://wearestokt.com/)<br>https://wearestokt.com/ | 实站 · 创意工作室 | 深黑到橙红的渐变里放一块拉丝金属的立体星形，占住右侧三分之二，左边留白给三行标题和两枚深浅不同的按钮；向下一条浅色带用 MOVING FORWARD TOGETHER 加客户 logo，把首屏和 logo 墙缝在一起。 | [查看原图](screenshots/295-sto-kt-creative-company.jpg) |
| [ZIRKA Interceptor](https://www.zrk.technology/)<br>https://www.zrk.technology/ | 实站 · 产品与 SaaS | 整屏是一张黑白 3D 渲染，只靠一道边光把机身形体从黑里勾出来；标题三行无衬线压在左下，左上角塞满等宽遥测坐标与状态字段，页面因此更像作战终端而不是产品官网。 | [查看原图](screenshots/298-zirka-interceptor.jpg) |
| [Boon Global](https://www.boonglobal.io/)<br>https://www.boonglobal.io/ | 实站 · 产品与 SaaS | 把一张熔岩橙的抽象视觉切成四块拼版、留出明显接缝，白色巨字横跨接缝排成两行、第二行刻意右移，左下角补一段等宽小字与滚动提示，做出电影片头的节奏。 | [查看原图](screenshots/299-boon-global.jpg) |
| [AP Transit - NYC Subway Map](https://aptransit.co)<br>https://aptransit.co | 实站 · 产品与 SaaS | 把整张地铁线路图做成细线 3D 场景铺满首屏，彩色线路在近黑底上自己发光，品牌只留中央一枚极小标记和一个定位标签，让工具本身成为主视觉。 | [查看原图](screenshots/303-ap-transit-nyc-subway-map.jpg) |
| [Grail](https://grail-app.com/)<br>https://grail-app.com/ | 实站 · 产品与 SaaS | 上半屏用一行撑满全宽的衬线大标题定调，下半屏让一叠任务卡在黑色空间里错落悬浮，靠卡片投影的深浅与遮挡关系造出纵深，中间那几张彩色图案卡负责提供唯一的高饱和点。 | [查看原图](screenshots/310-grail.jpg) |
| [Unbelievably Crap](https://www.unbelievablycrap.com/)<br>https://www.unbelievablycrap.com/ | 实站 · 个人作品集 | 首屏是一间暗房：3D 人像只靠一点轮廓光立在正中，四周摆满带边框的等宽小字面板、列表和滑杆，几乎没有大标题，浏览起来像在翻一份机密档案。 | [查看原图](screenshots/311-unbelievably-crap.jpg) |
| [\\' Brand Consultant](https://workbyw.com/)<br>https://workbyw.com/ | 实站 · 创意工作室 | 不同尺寸的影像块在橄榄绿底上错位叠放、高度参差，每块角上带一枚细小的跳转标记，下半屏用三行全大写无衬线标题收尾，靠拼贴的节奏感代替常规栅格。 | [查看原图](screenshots/312-brand-consultant.jpg) |
| [Zabal Media Agency](https://www.zabalmedia.co)<br>https://www.zabalmedia.co | 实站 · 创意工作室 | 首屏把一整墙作品截图压暗成背景铺满，三行白色粗体标题正中对齐，视线不会跑到别处；左下角留一张浮动小卡片、右下角排两枚奖项徽章，用周边的小块信息补可信度而不抢中心。 | [查看原图](screenshots/314-zabal-media-agency.jpg) |
| [Belgrade Arbor](https://belgradearbor.rs/en)<br>https://belgradearbor.rs/en | 创意体验 · 在线体验 | 首屏是一整块被强模糊处理的建筑 3D 渲染，像隔着一层磨砂玻璃看楼体，只留下轮廓和天空；顶部悬一枚深色胶囊导航（左 HOME、中 logo、右 INQUIRE），完全不放标题，用画面本身说明这里可以探索。 | [查看原图](screenshots/326-belgrade-arbor.jpg) |
| [Ferr Studio](https://ferrstudio.ch)<br>https://ferrstudio.ch | 实站 · 创意工作室 | 整屏是一块纯红渐变舞台，白色 3D 包装盒斜放在中间并带柔和投影，盒身直接印着 FERR 与 BRANDING，物件本身就是案例封面；导航缩成顶部两枚小胶囊，其余只剩左下角一张小小的 cookie 卡片。 | [查看原图](screenshots/328-ferr-studio.jpg) |
| [New Zealanderlivery Service](https://www.newzealanderliveryservice.co.nz/)<br>https://www.newzealanderliveryservice.co.nz/ | 创意体验 · 消费品牌与电商 | 把四个真人裹进半透明快递袋拍成主视觉，标题只占左栏 1/4 宽、下面接条形码与邮戳式小字；底部横一条黄黑警戒带做滚动公告，用“包裹”这一种材质把整场活动钉在运输主题上。 | [查看原图](screenshots/332-new-zealanderlivery-servic.jpg) |
| [CRÈCHE - the tank](https://www.crechetank.com/)<br>https://www.crechetank.com/ | 实站 · 创意工作室 | 把首屏做成一片淡蓝水面，白色字标被横向切片错位、像隔着水看字，正下方只留一枚 “SCROLL TO DIVE” 小提示；整屏没有导航和图片，先用一种颜色加一个动作定调。 | [查看原图](screenshots/333-cre-che-the-tank.jpg) |
| [L.I.S.A.](https://lisa.locomotive.ca/en)<br>https://lisa.locomotive.ca/en | 创意体验 · 在线体验 | 灰色影棚光下让人头戴老式 CRT 显示器，屏幕只亮一行蓝色 [CLICK] TO START，把“开始体验”做成画面里的道具；导航只剩左上品牌与右上 Let's talk，其余全让给这具人机合成肖像。 | [查看原图](screenshots/335-l-i-s-a.jpg) |
| [Ocean](https://oceanfilms.com.br/)<br>https://oceanfilms.com.br/ | 实站 · 内容与文化 | 整屏铺一张电影感剧照，左侧竖排黄色 OCEAN 只露出半截、压住画面边缘；正中一枚细黄圆圈像取景器套住人物，右上角导航也用同色小字，三个黄色元素把整屏统一成“镜头”。 | [查看原图](screenshots/344-ocean.jpg) |
| [Slap Apps Experience](https://experience.slap-apps.de/)<br>https://experience.slap-apps.de/ | 创意体验 · 在线体验 | 纯黑噪点场里用青色粒子堆出一架左右对称、像鳐鱼的形体，旁边补一条若隐若现的环形光，靠粒子密度做体积；底部只留两行小字提示 “Click on the gates and dive in”，把找入口变成第一道互动。 | [查看原图](screenshots/347-slap-apps-experience.jpg) |
| [The First Fifty](https://book.sequel.co/)<br>https://book.sequel.co/ | 创意体验 · 在线体验 | 黑底星场里散落几个低面数 3D 小人，站名用几乎与背景同色的超大字号压在人物后面，导航缩成顶部三枚小胶囊；把玩法（投掷角色）写成一行 PRESS SPACE 藏在场景中央，让人先玩再看书。 | [查看原图](screenshots/367-the-first-fifty.jpg) |
| [RIY3.0 Hive](https://riy3.com/)<br>https://riy3.com/ | 创意体验 · 在线体验 | 近黑背景正中只放一台线框无人机的 3D 渲染，周围用极小号等宽字标注部件与舱门参数，拉开字距的“RIY3.0”浮在上方，第一眼像技术图纸而不是宣传页。 | [查看原图](screenshots/375-riy3-0-hive.jpg) |
| [MIMEYOI](https://mimeyoi.co)<br>https://mimeyoi.co | 实站 · 消费品牌与电商 | 整屏就是一张手办特写，导航用拉开字距的全大写细字压在上边缘；左下角放角色名与 1/6 比例、右下角排一列规格小表，商品信息像展签一样贴着画框而不打断画面。 | [查看原图](screenshots/377-mimeyoi.jpg) |
| [Davel Creative Agency](https://davelcreative.com)<br>https://davelcreative.com | 实站 · 创意工作室 | 同一句标题分两段处理：“CREATIVITY THAT ACTUALLY”是实心白字，“PAYS OFF”改成只有描边的空心字，叠在紫金色 3D 烟雾与金色颗粒上，靠字体质地区分语气。 | [查看原图](screenshots/385-davel-creative-agency.jpg) |
| [Atmospherik](https://atmospherik.ai)<br>https://atmospherik.ai | 实站 · 品牌与机构 | 左侧放两行干净白字“We create customers.”，右侧让一个发光 3D 机器人捧着红色大脑占掉半个画面；右下叠一块毛玻璃面板列三个入口，把服务导航伪装成控制台。 | [查看原图](screenshots/386-atmospherik.jpg) |
| [Mail.ru Group Paradigm](https://design.mail.ru/)<br>https://design.mail.ru/ | 实站 · 品牌与机构 | 左栏三行超大俄文标题加一个蓝色胶囊按钮，右栏是一组白色挤出环形雕塑，前后穿插调色板、色相滑杆、字距调节等白色工具卡；用 3D 物体加 UI 碎片叠出“设计工具”的隐喻，浅灰底保证这些白卡片仍有层次。 | [查看原图](screenshots/403-mail-ru-group-paradigm.jpg) |
| [Sameera Sandakelum](https://sameerasw.com/)<br>https://sameerasw.com/ | 实站 · 个人作品集 | 整屏铺一张雾气山景照片，名字用极宽字距的细体大写压在画面中央，下面一行九个品牌色社交胶囊；再叠点阵／马赛克文字和贴边悬浮 dock，用模糊与竖向渐变压住背景，保证白字仍然可读。 | [查看原图](screenshots/404-sameera-sandakelum.jpg) |
| [Maxime Heckel](https://maximeheckel.com/)<br>https://maximeheckel.com/ | 实站 · 个人作品集 | 首屏整块让给一张深蓝 3D 场景：几支玻璃质感的胶囊悬浮在网格地面上拖出长影，标题被缩成左下角两行小字，还特意用一块亮斑压住关键词，让场景而不是文字承担第一印象。 | [查看原图](screenshots/407-maxime-heckel.jpg) |
| [Culture DevOps](https://culturedevops.com/en)<br>https://culturedevops.com/en | 实站 · 内容与文化 | 首屏收在一张深蓝圆角卡里：左侧 Simplify / Automate / Innovate 三个词竖着堆叠、中间一行换亮色拉开节奏，右侧放发光的等距芯片插画，电路线一直画到卡片边缘，像一张技术蓝图。 | [查看原图](screenshots/418-culture-devops.jpg) |
| [Dokmeh · 404](https://hidokmeh.com/404/)<br>https://hidokmeh.com/404/ | 实站 · 创意工作室 | 把 404 放在航拍海滩上，只留白色大字和两个方向箭头；错误页当成一张海报来做，情绪比信息多。 | [查看原图](screenshots/439-dokmeh-404.jpg) |
| [Nocturnal Dream · 404](https://www.nocturnaldream.com/404)<br>https://www.nocturnaldream.com/404 | 实站 · 创意工作室 | 黑色空间里悬着一台手机，屏幕上是 404；用 3D 道具代替文字说明，把错误页做成场景入口。 | [查看原图](screenshots/442-nocturnal-dream-404.jpg) |
| [NOT FOUND · 404](https://www.not-found.tv/404)<br>https://www.not-found.tv/404 | 实站 · 内容与文化 | 黑色底上拼贴紫色花朵与眼球，404 标题压在中央，两个按钮给出「回首页 / 另一个世界」的分叉。 | [查看原图](screenshots/449-not-found-404.jpg) |
| [Clay](https://www.clay.com/)<br>https://www.clay.com/ | 实站 · 产品与 SaaS | 绿色渐变底上搭一座圆润的 3D 场景，把数据服务讲成可漫游的地形；按钮和标题都压在场景上方。 | [查看原图](screenshots/473-clay.jpg) |

### 大字 / 动态排版

让夸张字号、文字运动和滚动节奏成为主要视觉表达。

识别点：文字占据大面积；字号与字形强对比；节奏化转场或滚动。

样本：30 例，其中 28 例实站/创意体验。静态截图能观察尺度与布局，动效本身仍要访问原站。

| 原站 / URL | 类型与用途 | 观察点 | 截图 |
| --- | --- | --- | --- |
| [Framer](https://www.framer.com/)<br>https://www.framer.com/ | 实站 · 产品与 SaaS | 观察工具能力如何借助页面作品和编辑界面呈现，而非仅靠功能列表。 | [查看原图](screenshots/04-framer.jpg) |
| [Webflow](https://webflow.com/)<br>https://webflow.com/ | 实站 · 产品与 SaaS | 观察面向多种受众的产品官网如何组织主张、案例与能力介绍。 | [查看原图](screenshots/08-webflow.jpg) |
| [Instrument](https://www.instrument.com/)<br>https://www.instrument.com/ | 实站 · 创意工作室 | 观察品牌影片、简洁导航与作品列表如何共同讲述工作室能力。 | [查看原图](screenshots/17-instrument.jpg) |
| [Obys Agency](https://obys.agency/)<br>https://obys.agency/ | 实站 · 创意工作室 | 观察非传统排版、字号对比和案例呈现如何塑造工作室个性。 | [查看原图](screenshots/18-obys.jpg) |
| [Rauno Freiberg](https://rauno.me/)<br>https://rauno.me/ | 实站 · 个人作品集 | 观察放大的个人介绍、鲜明色块与横向作品区域如何呈现设计师个性。 | [查看原图](screenshots/23-rauno.jpg) |
| [Wafer.ai](https://www.wafer.ai)<br>https://www.wafer.ai | 实站 · 开发者产品 | 观察 开发者工具/基础设施 站点如何用插画 / 手绘、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/100-wafer-ai.jpg) |
| [Bitnomial](https://bitnomial.com/)<br>https://bitnomial.com/ | 实站 · 产品与 SaaS | 观察 金融科技/保险 站点如何用大字 / 动态排版、现代 SaaS / 产品叙事建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/102-bitnomial.jpg) |
| [Onyx Restaurant Paris](https://restaurantonyx.com)<br>https://restaurantonyx.com | 实站 · 消费品牌与电商 | 观察 餐饮/食品饮料 站点如何用极简留白、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/118-onyx-restaurant-paris.jpg) |
| [Rupert & Rothschild](https://rupert-rothschildvignerons.com/)<br>https://rupert-rothschildvignerons.com/ | 实站 · 消费品牌与电商 | 观察 餐饮/食品饮料 站点如何用大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/119-rupert-rothschild.jpg) |
| [Blue More Yachting](https://www.bluemoreyachting.com/)<br>https://www.bluemoreyachting.com/ | 实站 · 消费品牌与电商 | 观察 旅行/酒店 站点如何用高端摄影 / 品牌留白、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/121-blue-more-yachting.jpg) |
| [IN56](https://www.in56.es/)<br>https://www.in56.es/ | 实站 · 创意工作室 | 观察 建筑/地产 站点如何用大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/150-in56.jpg) |
| [31 for 31](https://www.31-for-31.com/)<br>https://www.31-for-31.com/ | 实站 · 内容与文化 | 观察 媒体/出版 站点如何用插画 / 手绘、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/169-31-for-31.jpg) |
| [INHERITED BAND](https://inherited.band/)<br>https://inherited.band/ | 实站 · 内容与文化 | 观察 音乐/娱乐 站点如何用极简留白、大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/176-inherited-band.jpg) |
| [Biciclette Zecchini](https://www.biciclettezecchini.it/)<br>https://www.biciclettezecchini.it/ | 实站 · 消费品牌与电商 | 观察 体育 站点如何用大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/178-biciclette-zecchini.jpg) |
| [day one® Run](https://day1-run.webflow.io/)<br>https://day1-run.webflow.io/ | 实站 · 消费品牌与电商 | 观察 体育 站点如何用大字 / 动态排版建立整体气质，并核对首屏主视觉、顶部导航条的排布。 | [查看原图](screenshots/181-day-one-r-run.jpg) |
| [Robert Mayer Portfolio](http://mayerr.com)<br>http://mayerr.com | 实站 · 个人作品集 | 在正文后面铺一层放大到溢出的同名残影，配合长短错落的右对齐短句做出镜头拖影；深棕底加奶油白字，让超大标题有分量却不刺眼。 | [查看原图](screenshots/220-robert-mayer-portfolio.jpg) |
| [L'Étude - Creative Studio](https://letude.group)<br>https://letude.group | 实站 · 创意工作室 | 用纯正红铺底，把巨型黑色字标压在手持手机的实拍上，再用青绿错位副本做出印刷套准失败的效果；小字全用蓝色等宽体挂在四角，配色闭环只有两色。 | [查看原图](screenshots/223-l-e-tude-creative-studio.jpg) |
| [Wondermake Fonts](https://fonts.wondermake.xyz)<br>https://fonts.wondermake.xyz | 实站 · 创意工作室 | 首屏只有一枚居中的线稿徽记、两行说明和一个胶囊按钮，其余全部让给留白；底部把巨型字体标本切在折线处，用「看不全」提示继续往下滚。 | [查看原图](screenshots/224-wondermake-fonts.jpg) |
| [Huy Phan Vol.2](https://huyml.co/)<br>https://huyml.co/ | 实站 · 个人作品集 | 作品截图沿对角线一叠压一叠地往后缩，像手上一摞卡片；红色衬线大字只露出上半截在折线处，留白占了大半屏，靠「没露完」制造继续滚动的动力。 | [查看原图](screenshots/238-huy-phan-vol-2.jpg) |
| [Lee Holmes](https://leeholmes.uk)<br>https://leeholmes.uk | 实站 · 个人作品集 | 标题被纵向拉长、压到极窄，两行叠得几乎相撞，只占左侧一半，右边留一块模糊的视频截帧当暖底；导航把「可接项目」写成带圆点的状态标签放在正中，黑色药丸 Start a project 单独置右，信息与态度分成三层。 | [查看原图](screenshots/258-lee-holmes.jpg) |
| [morefont](https://morefont.ch)<br>https://morefont.ch | 实站 · 创意工作室 | 黑底上嵌两块转角半径极大的白卡，把「Strategy - Storytelling - …」这类能力长句做成两行撑满宽度、被屏边裁断的巨字；底部再用同尺寸的「morefont® Swiss Design Studio」压在卡片下缘，三种容器叠在一起制造版面张力。 | [查看原图](screenshots/264-morefont.jpg) |
| [Aardvark Book Club](https://aardvarkbookclub.com)<br>https://aardvarkbookclub.com | 实站 · 消费品牌与电商 | 背景用三四层同色系、深浅不同的波浪形状堆出流动沙丘，页面不动也有方向感；标题用超粗压缩体压住左上角、行距收到几乎相碰，再用一枚高饱和粉色按钮把视线钉在文字下方。 | [查看原图](screenshots/271-aardvark-book-club.jpg) |
| [project://cult](https://project-cult.digital/)<br>https://project-cult.digital/ | 实站 · 创意工作室 | 标语被拆成 CRUSH THE、FU©K UP、ALL BOUND、RIES 四块不等宽红字，故意错行错位，再用更小的红底标签压在大字上制造印刷失准的冲撞感；底部只留一行极小的版权字托住画面。 | [查看原图](screenshots/281-project-cult.jpg) |
| [Stōkt - Creative Company](https://wearestokt.com/)<br>https://wearestokt.com/ | 实站 · 创意工作室 | 深黑到橙红的渐变里放一块拉丝金属的立体星形，占住右侧三分之二，左边留白给三行标题和两枚深浅不同的按钮；向下一条浅色带用 MOVING FORWARD TOGETHER 加客户 logo，把首屏和 logo 墙缝在一起。 | [查看原图](screenshots/295-sto-kt-creative-company.jpg) |
| [Sadu Media](https://www.sadumedia.com/)<br>https://www.sadumedia.com/ | 实站 · 创意工作室 | 整屏只有两行压缩体大写，第二行向后重复、逐层变暗拉出速度残影，除顶部一枚极小的字标外没有任何图像，靠字重和透视把品牌名喊出来。 | [查看原图](screenshots/302-sadu-media.jpg) |
| [Binil B](https://thegr8binil.me)<br>https://thegr8binil.me | 实站 · 个人作品集 | 四行超大标题居中叠成一块，关键词先用高亮色块切开、再刷上紫橙青渐变；四周散落带图钉的小标签、绿色状态点和一枚蓝色自定义光标，让深色细网格底不显空，而视觉重心一直锁在画面中央。 | [查看原图](screenshots/424-binil-b.jpg) |
| [Production Portugal · 404](https://productionportugal.com/404)<br>https://productionportugal.com/404 | 实站 · 内容与文化 | 洋红满屏 + 近全屏斜体 404，字面带渐变高光；顶部导航保留，其他信息全部让位。 | [查看原图](screenshots/443-production-portugal-404.jpg) |
| [Boc Studio · 404](https://boc.studio/404)<br>https://boc.studio/404 | 实站 · 创意工作室 | 橙色铺满、404 放大到被画布裁切，一句话横穿数字；用色块和尺度把错误变成态度。 | [查看原图](screenshots/448-boc-studio-404.jpg) |
| [Scroll-driven · Stacking cards](https://scroll-driven-animations.style/demos/stacking-cards/css/)<br>https://scroll-driven-animations.style/demos/stacking-cards/css/ | 组件演示 · 组件与风格演示 | 整屏卡片在滚动时依次叠上来：前一张被钉住、后一张覆盖，靠 sticky 与 scroll-timeline 做出堆叠节奏。 | [查看原图](screenshots/476-scroll-driven-stacking-cards.jpg) |
| [Scroll-driven · Horizontal section](https://scroll-driven-animations.style/demos/horizontal-section/css/)<br>https://scroll-driven-animations.style/demos/horizontal-section/css/ | 组件演示 · 组件与风格演示 | 竖着滚、内容横着走：整个 section 被钉住，内部轨道按滚动距离平移，把长列表塞进一屏。 | [查看原图](screenshots/477-scroll-driven-horizontal-sec.jpg) |

## 案例精读、对比与灵感夹

本轮补充视图日期：2026-10-26（Asia/Shanghai）。481 个案例共 174 条桌面原图标注，新增 132 张实际截图：81 张手机视口、34 张同站内页、3 张内容区、14 张导航展开。手机视口不代表原站已做好响应式适配。

Linear、Lusion、Active Theory、Bruno Simon、Stripe Press 的手机画面在重试后仍未达到参考质量，未收录；采集尝试与人工剔除原因记录在 view-capture-errors.json。原有桌面截图保留。

点击案例截图或“精读”打开站内原图。桌面原图有观察框和基本元素说明；视图页签显示实际采集的手机、同站内页、内容区或导航展开状态，未采集项会明确提示。

每次选择 2–3 个案例，可在底部对比台并排查看，并按九组基本元素比较。收藏入口位于卡片和精读页；灵感夹支持分组、笔记、Markdown 导出和 JSON 备份合并。取消收藏保留原笔记；删除分组会把收藏移至未分组。

个人数据在当前浏览器的 localStorage，不写回项目 JSON；清理浏览器数据或更换浏览器前请导出备份。存储不可用时会提示仅本页有效。

维护入口：case-studies.json 保存原图百分比标注；case-views.json 保存实际补充视图；casebook.cjs / casebook.js / casebook.css 负责生成、交互和外观。capture-views.cjs 可继续采集。

## 版块、交互与行业

除了风格与基本元素，本轮新增三个可叠加的观察维度：24 个版块（页面由哪些块组成）、22 个交互（需要操作或时间才能看到什么）、21 个行业（谁在使用）。三者与风格、元素正交，可在卡片详情与筛选器中组合使用；完整定义、识别点与边界见 [taxonomy.md](taxonomy.md)。

版块、交互与行业是补充维度：原有 86 例为人工复核（tagStatus=reviewed），扩充实站为草稿标注（tagStatus=draft），草稿会明确标注、便于后续逐条复核，不与人工结论混为一谈。外部源第 1 批共 114 例来自 Awwwards（个人非商业灵感用途）、portfolio-ideas（MIT）与 awesome-design-systems（Unlicense）；来源与许可见 [NOTICE.md](NOTICE.md)，截图均由本流程重新采集。

## 统一风格小样

打开 index.html#view=lab&style=swiss，或点击目录中的“统一小样”。固定基准与当前演绎使用同一份卡片内容，32 个方向可切换；支持圆角、留白和过渡时长调节，按钮状态同步、查看参数和复制基础 CSS。

style-lab.cjs 维护内容模板与各风格的视觉参数；style-lab.css 负责装饰和布局；style-lab.js 负责调参、复制与同步状态。名称和分组继续来自 styles.json。小样属于本站教学演绎，不是官方组件；液态玻璃未实现真实折射，沉浸场景采用 CSS 三维示意，像素方向采用系统等宽字体替代。

## 页面外观与浏览细节

包豪斯外壳集中维护在 gallery-bauhaus.css，导航与刊头由 build.cjs 生成。风格、元素、小样共用路由状态；筛选可移除，搜索支持网址和多词组合，按 / 聚焦搜索、Esc 清空。窄屏目录自动折叠，提供跳到内容、回到顶部与减少动态效果支持。教学小样的配色和材质保持独立。外壳保留可选的 Google Fonts 引用；网络不可用时使用系统字体，截图、筛选和小样交互仍在本地工作。

## 维护与复现

styles.json 维护风格定义；elements.json 维护基本元素及观察点；cases.json 维护用途、风格和显著元素标记；capture-results.json 记录实际访问。小示意由 element-previews.cjs 与 gallery.css 提供，属于本站自绘。修改数据后运行 node build.cjs 重新生成索引。

截图工具沿用 Playwright CLI；先打开 frontend-examples 会话，再执行 node capture.cjs <CLI 的绝对路径> <从 0 开始的位置> <数量>。特殊入口和 Cookie 提示通过页面正常操作，随后使用 save-current.cjs 重拍。

发现入口包括 [Land-book](https://land-book.com/) 与 [Awwwards](https://www.awwwards.com/)，个案直接来源是各自原站。材质与组件方向同时参考各组件作者的公开演示。