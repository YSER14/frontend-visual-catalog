# 风格覆盖审计

更新日期：2026-10-25。这是项目自定目录的覆盖审计，不是市场份额调查。

## 原有 40 例的问题

按本次目录回看原有样本，20 个方向没有例子；用途分类无法直接回答“想要这种风格，该看谁”。因此保留用途，增加独立的多标签风格分类。

## 覆盖矩阵

| 方向 | 分组 | 原有例数 | 现在例数 | 实站/创意体验 | 来源域名 | 样本情况 |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| [极简留白](index.html#style=minimal) | 视觉语言 | 9 | 211 | 192 | 206 | 有实站对照 |
| [瑞士网格 / 国际主义](index.html#style=swiss) | 视觉语言 | 4 | 23 | 20 | 23 | 有实站对照 |
| [杂志编辑式](index.html#style=editorial) | 视觉语言 | 7 | 119 | 117 | 118 | 有实站对照 |
| [高端摄影 / 品牌留白](index.html#style=luxury) | 视觉语言 | 4 | 39 | 39 | 39 | 有实站对照 |
| [现代 SaaS / 产品叙事](index.html#style=saas) | 视觉语言 | 13 | 48 | 47 | 47 | 有实站对照 |
| [深色科技 / 微光](index.html#style=dark-tech) | 视觉语言 | 9 | 53 | 49 | 51 | 有实站对照 |
| [工业技术 / 参数化](index.html#style=industrial) | 视觉语言 | 2 | 8 | 7 | 8 | 有实站对照 |
| [插画 / 手绘](index.html#style=illustration) | 视觉语言 | 3 | 42 | 40 | 42 | 有实站对照 |
| [柔和有机 / 马卡龙](index.html#style=pastel) | 视觉语言 | 1 | 11 | 9 | 11 | 有实站对照 |
| [新粗野主义](index.html#style=neo-brutal) | 视觉语言 | 0 | 6 | 4 | 6 | 有实站对照 |
| [原生网页 / 低修饰](index.html#style=raw-web) | 视觉语言 | 0 | 5 | 5 | 5 | 有实站对照 |
| [极繁 / 拼贴](index.html#style=maximal) | 视觉语言 | 0 | 27 | 27 | 27 | 有实站对照 |
| [复古印刷 / 怀旧品牌](index.html#style=retro-print) | 视觉语言 | 0 | 12 | 12 | 12 | 有实站对照 |
| [霓虹赛博 / HUD](index.html#style=cyber) | 视觉语言 | 0 | 5 | 3 | 5 | 有实站对照 |
| [像素 / 8-bit](index.html#style=pixel) | 视觉语言 | 0 | 7 | 4 | 7 | 有实站对照 |
| [终端 / ASCII / CRT](index.html#style=terminal) | 视觉语言 | 0 | 10 | 8 | 10 | 有实站对照 |
| [玻璃拟态](index.html#style=glass) | 材质 | 0 | 12 | 8 | 12 | 有实站对照 |
| [新拟态 / 柔和浮雕](index.html#style=neumorph) | 材质 | 0 | 2 | 0 | 2 | 演示样本为主 |
| [拟物 / 复古桌面](index.html#style=skeuo) | 材质 | 0 | 8 | 3 | 8 | 有实站对照 |
| [Material 设计语言](index.html#style=material) | 设计系统 | 0 | 4 | 0 | 4 | 演示样本为主 |
| [企业中性 / 高密度界面](index.html#style=enterprise) | 设计系统 | 0 | 20 | 3 | 20 | 有实站对照 |
| [Bento / 卡片模块](index.html#style=bento) | 版式与交互 | 1 | 3 | 2 | 3 | 有实站对照 |
| [3D / 沉浸场景](index.html#style=immersive) | 版式与交互 | 6 | 82 | 82 | 82 | 有实站对照 |
| [大字 / 动态排版](index.html#style=kinetic) | 版式与交互 | 5 | 30 | 28 | 29 | 有实站对照 |
| [液态玻璃 / 折射](index.html#style=liquid-glass) | 材质 | 0 | 4 | 2 | 4 | 有实站对照 |
| [黏土 / 膨胀软体](index.html#style=clay) | 材质 | 0 | 4 | 2 | 4 | 有实站对照 |
| [中式传统 / 文博](index.html#style=chinese) | 视觉语言 | 0 | 3 | 3 | 3 | 有实站对照 |
| [Y2K / 千禧复古未来](index.html#style=y2k) | 视觉语言 | 0 | 7 | 5 | 7 | 有实站对照 |
| [Fluent 设计语言](index.html#style=fluent) | 设计系统 | 0 | 4 | 0 | 3 | 演示样本为主 |
| [Bauhaus / 几何原色](index.html#style=bauhaus) | 视觉语言 | 0 | 2 | 1 | 2 | 有实站对照 |
| [Memphis / 波普几何](index.html#style=memphis) | 视觉语言 | 0 | 3 | 1 | 3 | 有实站对照 |
| [手绘草图 / 线框](index.html#style=sketch) | 视觉语言 | 0 | 5 | 3 | 5 | 有实站对照 |

“至少两例”只是便于对照的最低样本量，不是代表性或流行度的保证。一个网站可命中多个方向，因此各行例数不可相加当网站总数。

## 仍有的边界

- 酸性平面、Art Deco、Vaporwave、波普等更细的艺术指导子方向尚未逐一建立独立多例分类。
- Apple 原生 HIG、不同地区的电商促销风格与真实移动 App 全流程仍需专项补充。
- 补充视图只记录已采集的页面和状态，不代表完整流程；滚动叙事、触感与完整交互仍应结合原站体验。
- 版块、交互、行业是 2026-10-27 新增维度：原有 86 例为人工复核，外部源第 1 批为草稿标注（tagStatus=draft），需要逐条复核后才算定稿。
- 外部源以 Awwwards 收录站为主，倾向获奖与视觉完成度高的站点；行业、风格分布不代表市场抽样，也不代表流行度。
- 这份目录不是市场统计样本，案例数量或目录覆盖率不能换算成市场占有率。

## 目录的四个层面

- 视觉语言：极简、瑞士、编辑式、新粗野、终端等，回答整体看起来是什么气质。
- 材质：玻璃、液态玻璃、新拟态、黏土、拟物，回答表面和体积如何表达。
- 设计系统：Material 与企业中性界面，回答组件和信息密度的组织规范。
- 版式与交互：Bento、大字动态排版、3D 沉浸，可与上述风格叠加。

## 每个方向如何识别

### 极简留白

通过少量元素、明确阅读顺序和大留白建立秩序。

- 英文/检索词：Minimalism / 极简主义
- 识别点：少色少装饰；克制字号与字重；留白承担分组
- 边界：白底不自动等于极简，要同时观察信息删减与层级。
- 案例：[Things · Cultured Code](https://culturedcode.com/things/)（实站）；[Vercel](https://vercel.com/)（实站）；[Resend](https://resend.com/)（实站）；[Brittany Chiang](https://brittanychiang.com/)（实站）；[Paco Coursey](https://paco.me/)（实站）；[Lee Robinson](https://leerob.com/)（实站）；[Apple](https://www.apple.com/)（实站）；[Vue.js](https://cn.vuejs.org/)（实站）；[Naive UI](https://www.naiveui.com/)（实站）；[shadcn-admin Demo](https://shadcn-admin.netlify.app/)（后台演示）；[Evolve Private Wealth](https://evolveprivatewealth.com/)（实站）；[Wiemer](https://www.wiemer.store/)（实站）；[Onyx Restaurant Paris](https://restaurantonyx.com)（实站）；[Almada Label](https://almadalabel.com/)（实站）；[Maison Des Elites](https://mdebeauty.com/)（实站）；[Compass Pathways](https://www.compasspathways.com/)（实站）；[Polpharma Biologics](https://www.polpharmabiologics.com/)（实站）；[montarville](https://montarville.ca/)（实站）；[AAT Architecten](https://www.aat-architecten.be/)（实站）；[LPAS](https://lpas.com/)（实站）；[Dopamine Studio](https://www.dopaminestudio.io/)（实站）；[Right Hemisphere](https://www.righthemisphere.studio/)（实站）；[COVEO Music](https://coveomusic.com/)（实站）；[INHERITED BAND](https://inherited.band/)（实站）；[Palace Skateboards](https://palaceskateboards.com/)（实站）；[Reel Motion](https://reelmotion.fit/)（实站）；[Anthony Fu](https://antfu.me/)（实站）；[Braydon Coyer](https://braydoncoyer.dev/)（实站）；[Damian Watracz](https://watracz.com/)（实站）；[David Darnes](https://darn.es)（实站）；[Dejan Markovic](https://www.dejan.works)（实站）；[George Francis](https://georgefrancis.dev)（实站）；[Israel Mitolu](https://mitolu.dev)（实站）；[Lee Robinson](https://leerob.io/)（实站）；[Max Böck](https://mxb.dev)（实站）；[Olaolu Olawuyi](https://olaolu.dev)（实站）；[Ruben Kuipers](https://rubenkuipers.design/)（实站）；[Second Ride](https://second-ride.de/en)（实站）；[IKONY](https://ikony.tv)（实站）；[Goodgrowth](https://goodgrowth.com)（实站）；[5051 — Punk Band](https://band5051.com/)（实站）；[Rechroma](https://rechroma.com)（实站）；[Calculated Camouflage](https://calculatedcamouflage.com/)（创意体验）；[MATHILDE DE CHIARA • PORTFOLIO](https://www.mathildedechiara.com/)（实站）；[Zitong Zhao's Website](https://zitongzhao.info/)（实站）；[The Shape of Intelligence](https://shapeofintelligence.com/)（创意体验）；[Cards & Coding](https://cards-and-coding.click/)（创意体验）；[Gabriel Beaugonin](https://www.gabrielbeaugonin.com/)（实站）；[Kavieng Creative](https://www.kaviengcreative.com/)（实站）；[Wondermake Fonts](https://fonts.wondermake.xyz)（实站）；[AQM²](https://aqm2.ai/)（实站）；[Sincro](https://sincro.es/en/us/)（实站）；[Direct Design Agency](https://wearedirect.co/)（实站）；[Halcyon Lighting](https://www.halcyon.co.nz/)（实站）；[Bulbs Series](https://bulbs.simondupety.com/)（实站）；[Voku.Studio™](https://voku.studio/)（实站）；[Félix Péault • Photographer](https://felixpeault.com)（实站）；[Monumoir](https://www.monumoir.com)（实站）；[Harold AO - Portfolio "21](https://haroldao.com)（实站）；[Neko Engineering](https://neko.engineering/)（实站）；[Work In Progress](https://www.veryworkinprogress.com)（实站）；[Goodman Gallery](https://goodman-gallery.com/)（实站）；[LUT Studios](https://lutstudios.com/)（实站）；[Lucien](https://www.lucien.com/)（实站）；[ESR Bespoke](https://www.esrbespoke.au/)（实站）；[Virtually Ever After Studio](https://virtuallyeverafter.xyz/)（实站）；[DontMatter](https://dontmatter.eu)（实站）；[Radian](https://www.rideradian.com/)（实站）；[A24](https://a24.raviklaassens.com/)（创意体验）；[FOLLOW.ART](https://follow.art/)（实站）；[We Are Digital Freelancers](https://www.wearedigitalfreelancers.com)（实站）；[Checkpoint Research](https://www.checkpointresearch.ca)（实站）；[Cooldock](https://dock.cool)（实站）；[LxL Creative](https://www.lxlcreative.co.uk/)（实站）；[Brilean](https://www.brilean.com/)（实站）；[TARQ](https://www.tarqstudio.com)（实站）；[NIKE Corporate website](https://about.nike.com/en)（实站）；[Real Estate Abbey](https://realestateabbey.com/)（实站）；[Emele Collab](https://emelecollab.com/)（实站）；[Xanvier Allison](https://xanvierallison.com/)（实站）；[Breems](https://www.bramvanvugt.com/)（实站）；[Bécane Paris](https://www.becaneparis.com/)（实站）；[Gavin Schneider Productions](https://www.gsproductions.co.za/)（实站）；[ree|b. Handheld Portfolio](https://areebali.com/)（实站）；[Van Praet](https://vanpraet.be/)（实站）；[Juan Mora Romero](https://www.juanmoraromero.com/)（实站）；[Nominal](https://www.nominal.so/)（实站）；[Mario Carrillo](https://marioecg.com/)（实站）；[Brandon Yasin](https://brandonyasin.com)（实站）；[atuin.media](http://www.atuin.media)（实站）；[a-lign studio](https://www.a-lign.studio)（实站）；[Cosmic Sans Microsite](https://cosmic-sans.blast-foundry.com)（创意体验）；[REDSTONE SOFTWARE](https://redstone.software/)（实站）；[Say Hey](https://www.sayhey.be/en/)（实站）；[Axiom Research](https://axiom.peppermint.id/)（实站）；[Sadu Media](https://www.sadumedia.com/)（实站）；[Kaisermann | web engineer](https://kaisermann.me)（实站）；[XNRGY Club](https://xnrgyclub.com/)（实站）；[Vuna Partners](https://www.vunapartners.co.za/)（实站）；[1367 Studio](https://www.1367studio.com/)（实站）；[Cula Technologies](https://www.cula.tech/)（实站）；[https://wearedelta.it/](https://wearedelta.it/)（实站）；[Flowty](https://flowty.co)（实站）；[UI KIDS](https://buttons.evrone.com/)（实站）；[CoffeeTech®](https://coffee-tech.com/)（实站）；[epple](https://vs-epple.de/)（实站）；[Ferr Studio](https://ferrstudio.ch)（实站）；[RAW](https://raw.com.tw/)（实站）；[Davide Cattaneo](https://davidecattaneo.it/)（实站）；[CRÈCHE - the tank](https://www.crechetank.com/)（实站）；[Ronnsquare](https://ronnsquare.fr)（实站）；[L.I.S.A.](https://lisa.locomotive.ca/en)（创意体验）；[Eppel Fotografie](https://eppel.nl)（实站）；[Think Company](https://www.thinkcompany.com)（实站）；[ishikawa.co — Walkable Atlas](https://ishikawa.co/en/)（创意体验）；[Butter](https://www.butter.video/)（实站）；[Ballance](https://ballance.framer.website/)（实站）；[legencymedia.com](https://legencymedia.com/)（实站）；[Iris Venture Builder](https://irisventure.com/)（实站）；[Nils Schekorr](http://schekorr.com/)（实站）；[Upvent Digital](https://upvent.co/)（实站）；[Serus](https://serus.ai/)（实站）；[Leome and Partners](https://leome-and-partners.com)（实站）；[Nahiyan Khan - Personal Site](https://nahiyan.codes/)（实站）；[Crosswalk](https://www.crosswalk.cl/en)（实站）；[Tommy Biglow](https://tommybiglow.com)（创意体验）；[CE Growth Partners](https://cegrowthpartners.com/)（实站）；[Trajectory Web Design](https://www.trajectorywebdesign.com/)（实站）；[Findra.art](https://findra.art/)（实站）；[Stéfano Girardelli — Designer](https://stefanobg.com)（实站）；[Avocats en Droit de la famille](https://kohenavocats.com/avocats-droit-famille-paris/)（实站）；[Banham](https://www.banham.co.uk/)（实站）；[Orizon | Beyond Zero Trust](https://orizon.one)（实站）；[Justus John](https://www.justus-john.com)（实站）；[MDS Collective](https://www.mdscollective.com)（实站）；[The First Fifty](https://book.sequel.co/)（创意体验）；[Relevo & Vinco](https://relevovinco.com/)（实站）；[fps ecosystem](https://www.fps.hu/)（实站）；[Pier Gorelli](https://piergorelli.com)（实站）；[Garvin Promotion Group](https://gpg.dops.agency/)（实站）；[Onseis Studio](https://onseis.com)（实站）；[ALT Agency](https://www.altagency.co.uk)（实站）；[SANTAL](https://santalarch.com)（实站）；[beflash — web & digital agency](https://beflash.de)（实站）；[EASYSELLER | Elevate Your Sales](https://www.easyseller.it/)（实站）；[AI Uis](https://aiu.is/)（实站）；[Subscrr](https://subscrr.app/)（实站）；[Mosaic](https://mosaic.flabbergast.agency)（实站）；[Structure Consulting Engineers](https://structureengineering.com.au/)（实站）；[Aurora (Government of Canada)](https://design.gccollab.ca/)（官方规范）；[Adobe Spectrum](https://spectrum.adobe.com)（官方规范）；[Okta Odyssey Design System](https://odyssey-storybook.okta.design/)（官方组件演示）；[Kontur](https://guides.kontur.ru/)（官方规范）；[Semi Design](https://semi.design/en-US)（官方规范）；[Microsoft Fluent](https://www.microsoft.com/design/fluent/)（官方规范）；[GitHub Primer](https://primer.style/)（官方规范）；[Bold (Bridge Design System)](https://bold.bridge.ufsc.tech/)（官方规范）；[Ray by WeWork](https://ray.wework.com)（官方规范）；[MUI: Base UI](https://base-ui.com/)（官方组件演示）；[Mail.ru Group Paradigm](https://design.mail.ru/)（实站）；[Durgesh](https://yodkwtf.com/)（实站）；[Ismoilbek Ilxomov](https://ismail.uz/)（实站）；[Sarah Dayan](https://www.sarahdayan.dev/)（实站）；[Sachin Desai](https://sachindesai.in)（实站）；[Samuel Imolorhe](https://www.xkoji.dev/)（实站）；[Arshdeep Singh](https://arshdeepsingh.me/)（实站）；[Eva Decker](https://evadecker.com)（实站）；[Aditya Bansal](https://www.adityabansal.tech/)（实站）；[Malik Naik](https://www.maliknaik.me/)（实站）；[Seán Halpin](https://www.seanhalpin.xyz/)（实站）；[Cassidy Williams](https://cassidoo.co/)（实站）；[Rishi Mohan](https://rishimohan.me)（实站）；[Abo Ghanbari](https://www.aboghanbari.com/)（实站）；[Raphaël Chelly](https://www.raphaelchelly.com)（实站）；[Aziz Rahman](https://azizstark.com)（实站）；[Yasio](https://yasio.dev/)（实站）；[Adewale Adeyemi](https://adex.onrender.com/)（实站）；[Sankalp Tharu](https://sankalptharu.com.np)（实站）；[Anirban Das](https://www.anirbandas.in/)（实站）；[Yunus Ertürk](https://yunuserturk.com)（实站）；[George Christeas](https://chr-ge.com/)（实站）；[Patrick Scott](https://pscott.io)（实站）；[Kehinde Omopariola](https://www.pariola.dev)（实站）；[Abdelrahman Ahmed](https://abdalrahman.tech)（实站）；[Andrew Branch](https://blog.andrewbran.ch/)（实站）；[Mahmoud Ibrahim](https://mahmoudibrahim.me)（实站）；[APPI RP · 404](https://appi-rp.com/404)（实站）；[Avara · 404](https://www.avara.band/404)（实站）；[Andrii Mur · 404](https://www.andriimur.com/404)（实站）；[Nomu · 404](https://nomu.store/404)（实站）；[Airtable · 定价页](https://www.airtable.com/pricing)（实站）；[ClickUp · 定价页](https://clickup.com/pricing)（实站）；[Intercom · 定价页](https://www.intercom.com/pricing)（实站）；[Loom · 定价页](https://loom.com/pricing)（实站）；[Ramp · 定价页](https://ramp.com/pricing)（实站）；[Typeform · 定价页](https://www.typeform.com/pricing)（实站）；[Slack · 料金プラン](https://slack.com/pricing)（实站）；[Asana · 应用目录](https://asana.com/apps)（实站）；[Notion · 连接](https://www.notion.so/integrations)（实站）；[Make · 集成目录](https://www.make.com/en/integrations)（实站）；[Airbnb · 工作原理](https://www.airbnb.com/e/howairbnbworks)（实站）；[Thumbtack · 工作原理](https://www.thumbtack.com/how-it-works)（实站）；[TaskRabbit · 工作原理](https://www.taskrabbit.com/how-it-works)（实站）；[Flowbite · Skeleton](https://flowbite.com/docs/components/skeleton/)（组件演示）；[Scroll-driven · Progress bar](https://scroll-driven-animations.style/demos/progress-bar/css/)（组件演示）；[Scroll-driven · Stacking cards](https://scroll-driven-animations.style/demos/stacking-cards/css/)（组件演示）；[Scroll-driven · Horizontal section](https://scroll-driven-animations.style/demos/horizontal-section/css/)（组件演示）；[Motion · Shared layout animation](https://motion.dev/examples/js-shared-layout-animation)（组件演示）；[Motion · Drag](https://motion.dev/examples/js-drag)（组件演示）；[Chakra UI · Skeleton](https://chakra-ui.com/docs/components/skeleton)（组件演示）；[Motion · App Store layout](https://motion.dev/examples/js-app-store-layout)（组件演示）

### 瑞士网格 / 国际主义

强调无衬线字体、对齐、模块网格和客观的信息组织。

- 英文/检索词：Swiss / International Typographic Style
- 识别点：强对齐线；清晰网格；排版承担视觉主体
- 边界：这里收录受此语言影响的网页，不声称是严格的历史流派认证。
- 案例：[Vercel](https://vercel.com/)（实站）；[Obys Agency](https://obys.agency/)（实站）；[Studio Freight](https://www.studiofreight.com/)（实站）；[Pentagram](https://www.pentagram.com/)（实站）；[1014 · Space for Ideas](https://www.1014.nyc/)（实站）；[Sincro](https://sincro.es/en/us/)（实站）；[Harold AO - Portfolio "21](https://haroldao.com)（实站）；[FORMAT](https://format.obys.agency/)（风格演示）；[FOLLOW.ART](https://follow.art/)（实站）；[We Are Digital Freelancers](https://www.wearedigitalfreelancers.com)（实站）；[Brilean](https://www.brilean.com/)（实站）；[Heron AI](https://heronaiapp.com/)（实站）；[morefont](https://morefont.ch)（实站）；[a-lign studio](https://www.a-lign.studio)（实站）；[REDSTONE SOFTWARE](https://redstone.software/)（实站）；[Signal-A Studio](https://signal-a.studio)（实站）；[REALIZER®](https://www.realizer.ch/en)（实站）；[Nahiyan Khan - Personal Site](https://nahiyan.codes/)（实站）；[Palaraiffeisen](https://www.palaraiffeisen.ch)（实站）；[SANTAL](https://santalarch.com)（实站）；[Kontur](https://guides.kontur.ru/)（官方规范）；[MUI: Base UI](https://base-ui.com/)（官方组件演示）；[Micah Lindley](https://micahlindley.com)（实站）

### 杂志编辑式

借用杂志的标题、导语、图片和多栏节奏组织内容。

- 英文/检索词：Editorial / Magazine
- 识别点：衬线或展示标题；图文主次明确；栏目与阅读节奏
- 边界：适合内容、作品与文化品牌；不只指新闻网站。
- 案例：[Studio Freight](https://www.studiofreight.com/)（实站）；[Lee Robinson](https://leerob.com/)（实站）；[Stripe Press](https://press.stripe.com/)（实站）；[The Pudding](https://pudding.cool/)（实站）；[Works in Progress](https://worksinprogress.co/)（实站）；[Pentagram](https://www.pentagram.com/)（实站）；[Monocle](https://monocle.com/)（实站）；[Clarvos](https://www.clarvos.com/)（实站）；[SentientX](https://www.sentientx.com)（实站）；[Zenarate](https://www.zenarate.com/)（实站）；[Emotionaler Hunger](https://emotionalerhunger.de)（实站）；[Theobroma](https://theobromachocolat.com/)（实站）；[Caffè Gilli](https://www.caffegilli.com/en)（实站）；[Kent C. Dodds](https://kentcdodds.com)（实站）；[M Creative Industries](https://www.mcreativeindustries.com/)（实站）；[Tania Rascia](https://taniarascia.com)（实站）；[Los Angeles Public Library](https://www.lapl.org/)（实站）；[CMBLU](https://www.cmblu.com/)（实站）；[Dennis Snellenberg](https://dennissnellenberg.com/)（实站）；[Hamish Williams](https://hamishw.com/)（实站）；[Patrick Heng](https://patrickheng.com/)（实站）；[Rafael Conde](https://rafa.design)（实站）；[Right Hemisphere](https://www.righthemisphere.studio/)（实站）；[Studio Ping Pong](https://studiopingpong.com/)（实站）；[EAST 64 Films Corporatesite](https://www.east64films.com/)（实站）；[Jason Lengstorf](https://www.jason.energy)（实站）；[Roof Studio](https://roofstudio.tv)（实站）；[The Story Archive](https://www.thestoryarchive.net)（实站）；[Anthony Fu](https://antfu.me/)（实站）；[Braydon Coyer](https://braydoncoyer.dev/)（实站）；[Damian Watracz](https://watracz.com/)（实站）；[David Darnes](https://darn.es)（实站）；[Dejan Markovic](https://www.dejan.works)（实站）；[George Francis](https://georgefrancis.dev)（实站）；[Israel Mitolu](https://mitolu.dev)（实站）；[Lee Robinson](https://leerob.io/)（实站）；[Max Böck](https://mxb.dev)（实站）；[Olaolu Olawuyi](https://olaolu.dev)（实站）；[Ruben Kuipers](https://rubenkuipers.design/)（实站）；[IKONY](https://ikony.tv)（实站）；[Vinay Arora • Design](http://www.vinayarora.design)（实站）；[MATHILDE DE CHIARA • PORTFOLIO](https://www.mathildedechiara.com/)（实站）；[Zitong Zhao's Website](https://zitongzhao.info/)（实站）；[Cards & Coding](https://cards-and-coding.click/)（创意体验）；[Robert Mayer Portfolio](http://mayerr.com)（实站）；[Kavieng Creative](https://www.kaviengcreative.com/)（实站）；[Halcyon Lighting](https://www.halcyon.co.nz/)（实站）；[Monumoir](https://www.monumoir.com)（实站）；[World Cup — The Immortals](https://theimmortals.world/)（创意体验）；[FORMAT](https://format.obys.agency/)（风格演示）；[Huy Phan Vol.2](https://huyml.co/)（实站）；[Goodman Gallery](https://goodman-gallery.com/)（实站）；[Cassandra Vale](https://thecassandravale.com/)（实站）；[A24](https://a24.raviklaassens.com/)（创意体验）；[Lee Holmes](https://leeholmes.uk)（实站）；[LxL Creative](https://www.lxlcreative.co.uk/)（实站）；[Heron AI](https://heronaiapp.com/)（实站）；[TARQ](https://www.tarqstudio.com)（实站）；[NIKE Corporate website](https://about.nike.com/en)（实站）；[Frontier Dialogues](http://www.frontierdialogues.com)（实站）；[Emele Collab](https://emelecollab.com/)（实站）；[Xanvier Allison](https://xanvierallison.com/)（实站）；[Breems](https://www.bramvanvugt.com/)（实站）；[Loam House](https://residences.loamhouse.com.au)（实站）；[Bécane Paris](https://www.becaneparis.com/)（实站）；[Gavin Schneider Productions](https://www.gsproductions.co.za/)（实站）；[Juan Mora Romero](https://www.juanmoraromero.com/)（实站）；[ibaCOMMUNITY worldwide baking](https://iba-globe.why.de/)（创意体验）；[This is AIRE](https://thisisaire.ch/)（实站）；[Readymag WOTY 2026](https://readymag.com/websites-of-the-year/?utm_source=awwwards&utm_medium=partnership_submission&utm_campaign=woty)（实站）；[Say Hey](https://www.sayhey.be/en/)（实站）；[Boon Global](https://www.boonglobal.io/)（实站）；[Louisiana Governor's Mansion](https://www.governorsmansion.org/)（实站）；[XNRGY Club](https://xnrgyclub.com/)（实站）；[Grail](https://grail-app.com/)（实站）；[\\' Brand Consultant](https://workbyw.com/)（实站）；[UI KIDS](https://buttons.evrone.com/)（实站）；[Signal-A Studio](https://signal-a.studio)（实站）；[STANZZA design](https://stanzza.design/awards)（实站）；[h2a.lu](https://www.h2a.lu/)（实站）；[New Zealanderlivery Service](https://www.newzealanderliveryservice.co.nz/)（创意体验）；[Ronnsquare](https://ronnsquare.fr)（实站）；[Eppel Fotografie](https://eppel.nl)（实站）；[Think Company](https://www.thinkcompany.com)（实站）；[ishikawa.co — Walkable Atlas](https://ishikawa.co/en/)（创意体验）；[Nils Schekorr](http://schekorr.com/)（实站）；[Ocean](https://oceanfilms.com.br/)（实站）；[Leome and Partners](https://leome-and-partners.com)（实站）；[Crosswalk](https://www.crosswalk.cl/en)（实站）；[Indigov](https://indigov.com/)（实站）；[Anthracite Studio](https://anthracitestudio.be)（实站）；[Findra.art](https://findra.art/)（实站）；[Stéfano Girardelli — Designer](https://stefanobg.com)（实站）；[Justus John](https://www.justus-john.com)（实站）；[Pier Gorelli](https://piergorelli.com)（实站）；[Onseis Studio](https://onseis.com)（实站）；[ALT Agency](https://www.altagency.co.uk)（实站）；[Palaraiffeisen](https://www.palaraiffeisen.ch)（实站）；[EASYSELLER | Elevate Your Sales](https://www.easyseller.it/)（实站）；[AI Uis](https://aiu.is/)（实站）；[Subscrr](https://subscrr.app/)（实站）；[https://orbita.bar](http://orbita.bar)（实站）；[Structure Consulting Engineers](https://structureengineering.com.au/)（实站）；[Durgesh](https://yodkwtf.com/)（实站）；[Micah Lindley](https://micahlindley.com)（实站）；[Cassidy Williams](https://cassidoo.co/)（实站）；[Sankalp Tharu](https://sankalptharu.com.np)（实站）；[Anirban Das](https://www.anirbandas.in/)（实站）；[Kehinde Omopariola](https://www.pariola.dev)（实站）；[Andrew Branch](https://blog.andrewbran.ch/)（实站）；[Arc Marumo · 404](https://www.arcmarumo.com/404)（实站）；[PostHog · 定价页](https://posthog.com/pricing)（实站）；[Zapier · 应用目录](https://zapier.com/apps)（实站）；[Retool · 关于](https://retool.com/about)（实站）；[Deel · 关于](https://www.deel.com/about/)（实站）；[HubSpot · 公司介绍](https://www.hubspot.com/company)（实站）；[Airbnb · 工作原理](https://www.airbnb.com/e/howairbnbworks)（实站）；[Thumbtack · 工作原理](https://www.thumbtack.com/how-it-works)（实站）；[Scroll-driven · Progress bar](https://scroll-driven-animations.style/demos/progress-bar/css/)（组件演示）

### 高端摄影 / 品牌留白

用高质量产品或生活方式摄影、低密度文案与留白传达质感。

- 英文/检索词：Luxury / Quiet luxury
- 识别点：大幅摄影；少量操作；材质与光线主导
- 边界：价格高不代表符合此方向，分类以页面视觉为依据。
- 案例：[Instrument](https://www.instrument.com/)（实站）；[Apple](https://www.apple.com/)（实站）；[Bang & Olufsen](https://www.bang-olufsen.com/)（实站）；[DJI 大疆](https://www.dji.com/cn)（实站）；[Bread & Boxers](https://breadandboxers.com/se)（实站）；[Fitosauna](https://fitosauna.com/)（实站）；[Killstar](https://www.killstar.com/)（实站）；[LEDUP — Lighting the Future](https://ledup.pt)（实站）；[Wiemer](https://www.wiemer.store/)（实站）；[Saki](https://www.sakiproducts.com/)（实站）；[Blue More Yachting](https://www.bluemoreyachting.com/)（实站）；[Schlosshotel Kitzbühel](https://www.schlosshotel-kitzbuehel.com/en)（实站）；[Tengile Malamala Collection](https://tengilemalamala.com/)（实站）；[The Pop-Up Hotel](https://thepopuphotel.com/)（实站）；[Almada Label](https://almadalabel.com/)（实站）；[Maison Des Elites](https://mdebeauty.com/)（实站）；[Teesh](https://teesh.co.uk/)（实站）；[Depo Luxe](https://depoluxe.xyz/)（实站）；[Palace Skateboards](https://palaceskateboards.com/)（实站）；[Springs](https://springs.estate/)（实站）；[Cassandra Vale](https://thecassandravale.com/)（实站）；[ESR Bespoke](https://www.esrbespoke.au/)（实站）；[Real Estate Abbey](https://realestateabbey.com/)（实站）；[Loam House](https://residences.loamhouse.com.au)（实站）；[Van Praet](https://vanpraet.be/)（实站）；[Brandon Yasin](https://brandonyasin.com)（实站）；[This is AIRE](https://thisisaire.ch/)（实站）；[Art Here 2025 - Richard Mille](https://artprize-shadows.com/)（创意体验）；[Louisiana Governor's Mansion](https://www.governorsmansion.org/)（实站）；[Vuna Partners](https://www.vunapartners.co.za/)（实站）；[CoffeeTech®](https://coffee-tech.com/)（实站）；[STANZZA design](https://stanzza.design/awards)（实站）；[Banham](https://www.banham.co.uk/)（实站）；[MDS Collective](https://www.mdscollective.com)（实站）；[MIMEYOI](https://mimeyoi.co)（实站）；[Victorstone International](https://victorstone.co.uk/)（实站）；[Dokmeh · 404](https://hidokmeh.com/404/)（实站）；[Delta Cafés · 404](https://deltacafes.com/en/404)（实站）；[MeetYourPsychic · 404](https://tarot.meetyourpsychic.com/404)（实站）

### 现代 SaaS / 产品叙事

通过价值主张、产品界面与模块化证据解释复杂工具。

- 英文/检索词：Modern SaaS / Product-led
- 识别点：标题与主 CTA；真实界面演示；功能与案例分段
- 边界：这是商业网页的常见组合语言，不限定产品行业。
- 案例：[Linear](https://linear.app/)（实站）；[Stripe](https://stripe.com/)（实站）；[Raycast](https://www.raycast.com/)（实站）；[Framer](https://www.framer.com/)（实站）；[Notion](https://www.notion.com/)（实站）；[Things · Cultured Code](https://culturedcode.com/things/)（实站）；[Webflow](https://webflow.com/)（实站）；[Supabase](https://supabase.com/)（实站）；[Clerk](https://clerk.com/)（实站）；[Neon](https://neon.com/)（实站）；[Vite](https://cn.vite.dev/)（实站）；[Ant Design](https://ant.design/index-cn)（实站）；[Arco Design](https://arco.design/)（实站）；[Clarvos](https://www.clarvos.com/)（实站）；[Nova Dental](https://nova-dental-dev.webflow.io)（实站）；[Zenarate](https://www.zenarate.com/)（实站）；[Cerebrium](https://cerebrium.ai/)（实站）；[ABTC - American Bitcoin](https://www.abtc.com/)（实站）；[Bitnomial](https://bitnomial.com/)（实站）；[Evolve Private Wealth](https://evolveprivatewealth.com/)（实站）；[Hemi Network](https://hemi.xyz/)（实站）；[Supaste](https://supaste.com)（实站）；[VOID Messenger](https://void.sbs/)（实站）；[Nominal](https://www.nominal.so/)（实站）；[Redesigning Trust: Level2](https://www.trylevel2.com/)（实站）；[Butter](https://www.butter.video/)（实站）；[legencymedia.com](https://legencymedia.com/)（实站）；[Serus](https://serus.ai/)（实站）；[Orizon | Beyond Zero Trust](https://orizon.one)（实站）；[Garvin Promotion Group](https://gpg.dops.agency/)（实站）；[WowMade AI](https://wowmade.ai/)（实站）；[Semi Design](https://semi.design/en-US)（官方规范）；[Airtable · 定价页](https://www.airtable.com/pricing)（实站）；[ClickUp · 定价页](https://clickup.com/pricing)（实站）；[Intercom · 定价页](https://www.intercom.com/pricing)（实站）；[Loom · 定价页](https://loom.com/pricing)（实站）；[monday.com · 定价页](https://monday.com/pricing)（实站）；[PostHog · 定价页](https://posthog.com/pricing)（实站）；[Ramp · 定价页](https://ramp.com/pricing)（实站）；[Typeform · 定价页](https://www.typeform.com/pricing)（实站）；[Slack · 料金プラン](https://slack.com/pricing)（实站）；[Asana · 应用目录](https://asana.com/apps)（实站）；[Notion · 连接](https://www.notion.so/integrations)（实站）；[Make · 集成目录](https://www.make.com/en/integrations)（实站）；[Zapier · 应用目录](https://zapier.com/apps)（实站）；[Retool · 关于](https://retool.com/about)（实站）；[Deel · 关于](https://www.deel.com/about/)（实站）；[HubSpot · 公司介绍](https://www.hubspot.com/company)（实站）

### 深色科技 / 微光

以深底、细边框、微光或高亮细节形成技术感。

- 英文/检索词：Dark tech / Glow / 暗色科技
- 识别点：深色多级表面；局部高亮；细线与精密细节
- 边界：深色只是底色，需结合材质、层级与品牌表达。
- 案例：[Linear](https://linear.app/)（实站）；[Raycast](https://www.raycast.com/)（实站）；[Spline](https://spline.design/)（实站）；[Resend](https://resend.com/)（实站）；[Neon](https://neon.com/)（实站）；[Railway](https://railway.com/)（实站）；[Active Theory](https://activetheory.net/)（实站）；[Brittany Chiang](https://brittanychiang.com/)（实站）；[Vite](https://cn.vite.dev/)（实站）；[The Spark](https://spark.thedigitalpanda.com/)（创意体验）；[The Scope Creep](https://scope-creep.xyz)（创意体验）；[VOID Messenger](https://void.sbs/)（实站）；[Lucien](https://www.lucien.com/)（实站）；[Virtually Ever After Studio](https://virtuallyeverafter.xyz/)（实站）；[LOUD. Digital Product Company.](https://loudsrl.com)（实站）；[Vantor](https://vantor.com/)（实站）；[Junca Studio](https://juncastudio.com/)（实站）；[Triptych Interactive](http://3dv2.triptych.co)（实站）；[ZIRKA Interceptor](https://www.zrk.technology/)（实站）；[Axiom Research](https://axiom.peppermint.id/)（实站）；[AP Transit - NYC Subway Map](https://aptransit.co)（实站）；[Unbelievably Crap](https://www.unbelievablycrap.com/)（实站）；[Digital Meadow](https://digitalmeadow.studio)（实站）；[Zabal Media Agency](https://www.zabalmedia.co)（实站）；[Matrixspace](https://www.matrixspace.com/)（实站）；[Campla.dev](https://www.campla.dev)（创意体验）；[Flowty](https://flowty.co)（实站）；[Cipher Digital](https://cipherdigital.com/)（实站）；[Redesigning Trust: Level2](https://www.trylevel2.com/)（实站）；[Davide Cattaneo](https://davidecattaneo.it/)（实站）；[Ballance](https://ballance.framer.website/)（实站）；[Slap Apps Experience](https://experience.slap-apps.de/)（创意体验）；[Saud's PS2 Portfolio](https://imsaud.me/)（创意体验）；[Trajectory Web Design](https://www.trajectorywebdesign.com/)（实站）；[Anthracite Studio](https://anthracitestudio.be)（实站）；[RIY3.0 Hive](https://riy3.com/)（创意体验）；[EXPERIENCE FUNTECH CREATIVITY](https://experience2026.funtech.inc/)（创意体验）；[Davel Creative Agency](https://davelcreative.com)（实站）；[Atmospherik](https://atmospherik.ai)（实站）；[Mosaic](https://mosaic.flabbergast.agency)（实站）；[MongoDB Design System](http://mongodb.design)（官方规范）；[Aditya Bansal](https://www.adityabansal.tech/)（实站）；[Culture DevOps](https://culturedevops.com/en)（实站）；[Binil B](https://thegr8binil.me)（实站）；[Bryan Smith](https://multikitty.onrender.com)（实站）；[APPI RP · 404](https://appi-rp.com/404)（实站）；[Nocturnal Dream · 404](https://www.nocturnaldream.com/404)（实站）；[Delta Cafés · 404](https://deltacafes.com/en/404)（实站）；[Avara · 404](https://www.avara.band/404)（实站）；[Andrii Mur · 404](https://www.andriimur.com/404)（实站）；[Motion · Shared layout animation](https://motion.dev/examples/js-shared-layout-animation)（组件演示）；[Motion · Drag](https://motion.dev/examples/js-drag)（组件演示）；[Motion · App Store layout](https://motion.dev/examples/js-app-store-layout)（组件演示）

### 工业技术 / 参数化

借用仪器、产品标注和技术资料的字体、网格与参数语言。

- 英文/检索词：Industrial / Technical / 工业风
- 识别点：等宽或点阵字体；参数式标注；紧凑模块与功能感
- 边界：不是所有硬件网站都属于工业风。
- 案例：[Nothing](https://nothing.tech/)（实站）；[teenage engineering](https://teenage.engineering/)（实站）；[augmented-ui](https://augmented-ui.com/)（组件演示）；[Idealworks](https://www.idealworks.com/)（实站）；[Radian](https://www.rideradian.com/)（实站）；[Cipher Digital](https://cipherdigital.com/)（实站）；[beflash — web & digital agency](https://beflash.de)（实站）；[Arc Marumo · 404](https://www.arcmarumo.com/404)（实站）

### 插画 / 手绘

让人物、手绘线条或叙事插画承担主要品牌表达。

- 英文/检索词：Illustration / Hand drawn / Doodle
- 识别点：可辨识插画体系；非摄影的叙事主体；带性格的图形
- 边界：偶尔一个图标不足以支持此分类。
- 案例：[Notion](https://www.notion.com/)（实站）；[Railway](https://railway.com/)（实站）；[The Pudding](https://pudding.cool/)（实站）；[Gumroad](https://gumroad.com/)（实站）；[Fishwife](https://eatfishwife.com/)（实站）；[Headspace](https://www.headspace.com/)（实站）；[Finch](https://finchcare.com/)（实站）；[Practice Gateway](https://practicegateway.com/)（实站）；[Wafer.ai](https://www.wafer.ai)（实站）；[Hemi Network](https://hemi.xyz/)（实站）；[Giacosa Firenze](https://www.giacosafirenze.com/en)（实站）；[Moncalisse](https://www.moncalisse.com/en)（实站）；[Teesh](https://teesh.co.uk/)（实站）；[Pomegranate Health](https://pomegranate.health/)（实站）；[Dérive](https://derive-ocean.com/)（实站）；[Strahlborn - An Archival Saga](https://alfoart.com/derionzini-en/)（实站）；[The Great War](https://thegreatwar.org/)（实站）；[Cobalt Abortion Fund](https://cobaltaf.org/)（实站）；[Hoyt Arts Center](https://hoytartcenter.org/)（实站）；[Where Opportunity Takes Root](https://opportunity.waltonfamilyfoundation.org/)（实站）；[31 for 31](https://www.31-for-31.com/)（实站）；[COVEO Music](https://coveomusic.com/)（实站）；[Paradigm Festival](https://www.paradigmfestival.com/)（实站）；[Chande Bootcamp 2026](http://chandebootcamp.com/)（实站）；[Reel Motion](https://reelmotion.fit/)（实站）；[Direct Design Agency](https://wearedirect.co/)（实站）；[Jacob How Portfolio](http://jcubhow.com)（实站）；[Rainbow Lobster](https://rainbowlobster.maart.agency/)（实站）；[Pixelismo Studio](https://www.pixelismo.it)（实站）；[Supari Studios](https://www.suparistudios.com/)（实站）；[Indigov](https://indigov.com/)（实站）；[fps ecosystem](https://www.fps.hu/)（实站）；[Aurora (Government of Canada)](https://design.gccollab.ca/)（官方规范）；[Alaska Airlines](https://auro.alaskaair.com/)（官方规范）；[Eva Decker](https://evadecker.com)（实站）；[Josh Comeau](https://www.joshwcomeau.com/)（实站）；[Grande Charte · 404](https://grandecharte.co/404)（实站）；[MeetYourPsychic · 404](https://tarot.meetyourpsychic.com/404)（实站）；[Palmo · 404](https://www.palmo.co.in/404)（实站）；[Nomu · 404](https://nomu.store/404)（实站）；[TaskRabbit · 工作原理](https://www.taskrabbit.com/how-it-works)（实站）；[Duolingo](https://www.duolingo.com/)（实站）

### 柔和有机 / 马卡龙

用柔和色调、圆润形状与低压力的表达建立亲近感。

- 英文/检索词：Pastel / Organic / Soft friendly
- 识别点：低饱和或温暖配色；圆润有机图形；轻松文案与节奏
- 边界：柔和配色不等于新拟态，后者依赖浮雕光影。
- 案例：[Unseen Studio](https://unseen.co/)（实站）；[OLIPOP](https://drinkolipop.com/)（实站）；[Material Design 3](https://m3.material.io/)（官方规范）；[Headspace](https://www.headspace.com/)（实站）；[Finch](https://finchcare.com/)（实站）；[Bloom · Claymorphism Demo](https://8web.ai/demo/claymorphism)（风格演示）；[Seán Halpin](https://www.seanhalpin.xyz/)（实站）；[George Christeas](https://chr-ge.com/)（实站）；[Josh Comeau](https://www.joshwcomeau.com/)（实站）；[Palmo · 404](https://www.palmo.co.in/404)（实站）；[monday.com · 定价页](https://monday.com/pricing)（实站）

### 新粗野主义

通过硬边框、硬阴影、直白排版和鲜明色块形成高辨识度。

- 英文/检索词：Neobrutalism / Neo brutalism
- 识别点：粗而清晰的边框；无模糊的偏移阴影；平面高对比色块
- 边界：与原生网页、低修饰反设计分别收录。
- 案例：[Gumroad](https://gumroad.com/)（实站）；[Neobrutalism Components](https://www.neobrutalism.dev/)（组件演示）；[Remember Style · Memphis](https://dev.remember.style/memphis)（风格演示）；[project://cult](https://project-cult.digital/)（实站）；[Readymag WOTY 2026](https://readymag.com/websites-of-the-year/?utm_source=awwwards&utm_medium=partnership_submission&utm_campaign=woty)（实站）；[REALIZER®](https://www.realizer.ch/en)（实站）

### 原生网页 / 低修饰

保留原生链接、基础排版和低装饰界面的直白感。

- 英文/检索词：Raw web / Web 1.0 / Anti design / 反设计
- 识别点：链接与文本优先；基本 HTML 观感；少量品牌包装
- 边界：传统实用网站与刻意反设计存在区别；不推断站方的创作意图。
- 案例：[Craigslist · San Francisco](https://sfbay.craigslist.org/)（实站）；[Berkshire Hathaway](https://www.berkshirehathaway.com/)（实站）；[Space Jam · 1996](https://www.spacejam.com/1996/)（实站）；[Cameron's World](https://www.cameronsworld.net/)（创意体验）；[Adrian Vlasov Portfolio](https://morisinc.net)（实站）

### 极繁 / 拼贴

以高视觉密度、异质素材、叠加和强烈个性构成画面。

- 英文/检索词：Maximalism / Collage
- 识别点：多层图片与贴纸；异质字体或素材；密集且带情绪
- 边界：高密度后台不属于极繁，后者强调视觉表达。
- 案例：[Space Jam · 1996](https://www.spacejam.com/1996/)（实站）；[Cameron's World](https://www.cameronsworld.net/)（创意体验）；[Practice Gateway](https://practicegateway.com/)（实站）；[Race Condition](https://www.northkingdom.com/case/racecondition)（实站）；[Linea Prompt](https://lineaprompt.com)（实站）；[iCapital](https://www.icapital.es/en/)（实站）；[Theobroma](https://theobromachocolat.com/)（实站）；[Pomegranate Health](https://pomegranate.health/)（实站）；[The Great War](https://thegreatwar.org/)（实站）；[Los Angeles Public Library](https://www.lapl.org/)（实站）；[Cobalt Abortion Fund](https://cobaltaf.org/)（实站）；[Deferred damage](http://plastic-ocean.com/)（实站）；[Hoyt Arts Center](https://hoytartcenter.org/)（实站）；[Traçat Arquitectura 360](https://www.trasat.com)（实站）；[Studio Ping Pong](https://studiopingpong.com/)（实站）；[Paradigm Festival](https://www.paradigmfestival.com/)（实站）；[Design Bomb Festival](https://www.designbomb.it/)（实站）；[Festival Ljubljana](https://www.ljubljanafestival.si/en/)（实站）；[OFFFForum](https://www.offforum.com/)（实站）；[Frontier Dialogues](http://www.frontierdialogues.com)（实站）；[THE UN KNOWN ® Next-Gen Creative Consultancy](https://theunknown.tv)（实站）；[Aardvark Book Club](https://aardvarkbookclub.com)（实站）；[Adrian Vlasov Portfolio](https://morisinc.net)（实站）；[Sameera Sandakelum](https://sameerasw.com/)（实站）；[Production Portugal · 404](https://productionportugal.com/404)（实站）；[Boc Studio · 404](https://boc.studio/404)（实站）；[NOT FOUND · 404](https://www.not-found.tv/404)（实站）

### 复古印刷 / 怀旧品牌

借用旧包装、印刷字体和怀旧配色形成当代品牌语言。

- 英文/检索词：Retro / Vintage / Print inspired
- 识别点：复古展示字；包装或印刷感；暖色与怀旧插画
- 边界：与复古电脑界面、像素游戏分别收录。
- 案例：[Fishwife](https://eatfishwife.com/)（实站）；[OLIPOP](https://drinkolipop.com/)（实站）；[IKONY](https://ikony.tv)（实站）；[BEIGE FORCE!!](https://beigeforce.com/)（创意体验）；[L'Étude - Creative Studio](https://letude.group)（实站）；[EddyOS — Eddy Naboulet](https://eddy-naboulet.dev/)（创意体验）；[CE Growth Partners](https://cegrowthpartners.com/)（实站）；[B&E Digital](http://bande.digital)（创意体验）；[Relevo & Vinco](https://relevovinco.com/)（实站）；[https://orbita.bar](http://orbita.bar)（实站）；[Andrea Toffanello](https://andreatoffanello.com)（实站）；[Grande Charte · 404](https://grandecharte.co/404)（实站）

### 霓虹赛博 / HUD

用发光线框、切角面板、终端信息和未来界面营造科幻感。

- 英文/检索词：Cyberpunk / HUD / Sci fi / 科幻
- 识别点：霓虹线框；切角或扫描式结构；仪表信息与动态细节
- 边界：与 Y2K 金属千禧风分别收录；科幻 HUD 强调仪表、线框和状态反馈。
- 案例：[scificn · Nexus Station-7](https://www.scificn.dev/showcase/sci-fi)（组件演示）；[augmented-ui](https://augmented-ui.com/)（组件演示）；[Cyberpunk 2077](https://www.cyberpunk.net/us/en/)（实站）；[PouyaOS](https://pouyashahri.com)（创意体验）；[Upvent Digital](https://upvent.co/)（实站）

### 像素 / 8-bit

把像素字体、阶梯边缘与游戏式组件用于界面本身。

- 英文/检索词：Pixel / 8-bit / 像素风
- 识别点：点阵字或像素边框；有限色阶；游戏式界面控件
- 边界：仅展示像素画的普通画廊不自动属于像素 UI。
- 案例：[NES.css](https://nostalgic-css.github.io/NES.css/)（组件演示）；[RPGUI](https://ronenness.github.io/RPGUI/)（组件演示）；[System.css](https://sakofchit.github.io/system.css/)（组件演示）；[Lospec](https://lospec.com/)（实站）；[Rechroma](https://rechroma.com)（实站）；[BEIGE FORCE!!](https://beigeforce.com/)（创意体验）；[Campla.dev](https://www.campla.dev)（创意体验）

### 终端 / ASCII / CRT

用等宽文本、命令行和字符式界面建立开发者或复古计算机气质。

- 英文/检索词：Terminal / ASCII / TUI / CRT
- 识别点：等宽文本为主体；命令提示与文本框线；终端配色或扫描线
- 边界：代码块只是配角的普通文档不属于终端风。
- 案例：[scificn · Nexus Station-7](https://www.scificn.dev/showcase/sci-fi)（组件演示）；[Terminal CSS](https://terminalcss.xyz/)（组件演示）；[Hacker Typer](https://hackertyper.net/)（创意体验）；[5051 — Punk Band](https://band5051.com/)（实站）；[Kaisermann | web engineer](https://kaisermann.me)（实站）；[Digital Meadow](https://digitalmeadow.studio)（实站）；[B&E Digital](http://bande.digital)（创意体验）；[EXPERIENCE FUNTECH CREATIVITY](https://experience2026.funtech.inc/)（创意体验）；[Yasio](https://yasio.dev/)（实站）；[Bryan Smith](https://multikitty.onrender.com)（实站）

### 玻璃拟态

通过半透明面板、背景模糊与明暗边缘表现玻璃层次。

- 英文/检索词：Glassmorphism / Frosted glass / 毛玻璃
- 识别点：透出背景；模糊与透明度；细亮边与层叠
- 边界：Liquid Glass 的折射与动态材质不等同于普通毛玻璃。
- 案例：[CSS Glass](https://css.glass/)（风格工具）；[Hype4 · Glassmorphism Generator](https://hype4.academy/tools/glassmorphism-generator)（风格工具）；[7.css](https://khang-nd.github.io/7.css/)（组件演示）；[Liquid Glass for the Web](https://liquidglass.dev/)（组件演示）；[Decimal Chain](https://decimalchain.com/)（实站）；[Cooldock](https://dock.cool)（实站）；[h2a.lu](https://www.h2a.lu/)（实站）；[epple](https://vs-epple.de/)（实站）；[Belgrade Arbor](https://belgradearbor.rs/en)（创意体验）；[Avocats en Droit de la famille](https://kohenavocats.com/avocats-droit-famille-paris/)（实站）；[WowMade AI](https://wowmade.ai/)（实站）；[Maxime Heckel](https://maximeheckel.com/)（实站）

### 新拟态 / 柔和浮雕

用同色表面上的成对明暗阴影表达凸起与凹陷。

- 英文/检索词：Neumorphism / Soft UI
- 识别点：表面与背景同色系；双向柔和阴影；低对比的凸凹关系
- 边界：普通圆角加阴影并不足以判为新拟态；需留意可读性。
- 案例：[Neumorphism.io](https://neumorphism.io/)（风格工具）；[Themesberg · Neumorphism UI](https://demo.themesberg.com/neumorphism-ui/)（组件演示）

### 拟物 / 复古桌面

借用现实物体或历史操作系统的控件、窗口和材质隐喻。

- 英文/检索词：Skeuomorphism / Retro desktop / Windows 98 / 经典桌面
- 识别点：立体按钮与窗口镶边；桌面与设备隐喻；历史界面细节
- 边界：这是网页中的界面复刻，不表示这些历史系统仍是主流产品风格。
- 案例：[RPGUI](https://ronenness.github.io/RPGUI/)（组件演示）；[Poolsuite](https://poolsuite.net/)（实站）；[98.css](https://jdan.github.io/98.css/)（组件演示）；[XP.css](https://botoxparty.github.io/XP.css/)（组件演示）；[7.css](https://khang-nd.github.io/7.css/)（组件演示）；[System.css](https://sakofchit.github.io/system.css/)（组件演示）；[PouyaOS](https://pouyashahri.com)（创意体验）；[ree|b. Handheld Portfolio](https://areebali.com/)（实站）

### Material 设计语言

以 Material 的组件形状、主题色、状态与层级组织界面。

- 英文/检索词：Material Design / Material 3 / Material You
- 识别点：可辨识 Material 控件；系统化主题色；状态与层级规范
- 边界：优先参考官方组件与演示，不把所有扁平设计都归入 Material。
- 案例：[Material Design 3](https://m3.material.io/)（官方规范）；[Angular Material · Button](https://material.angular.dev/components/button/overview)（官方组件演示）；[MUI: Material UI](https://mui.com/material-ui/)（官方规范）；[Google Material Design](https://material.io/guidelines/#introduction-goals)（官方规范）

### 企业中性 / 高密度界面

以紧凑信息、稳定中性色和明确组件状态支持高频工作。

- 英文/检索词：Enterprise UI / Dashboard / Admin / 中后台
- 识别点：表格与工具条；紧凑间距和明确分组；语义色与一致控件
- 边界：收录可直接打开的后台演示，营销页不代替真实界面。
- 案例：[shadcn-admin Demo](https://shadcn-admin.netlify.app/)（后台演示）；[Tabler Demo](https://preview.tabler.io/)（后台演示）；[Atlassian Design System](https://atlassian.design)（官方规范）；[Salesforce Lightning Design System](https://www.lightningdesignsystem.com)（官方规范）；[IBM Carbon](https://www.carbondesignsystem.com/)（官方规范）；[Backpack (Skyscanner)](https://skyscanner.design/)（官方规范）；[GOV.UK Design System](https://www.gov.uk/design-system)（官方规范）；[Korea Design System](https://www.krds.go.kr)（官方规范）；[U.S. Web Design Standards](https://designsystem.digital.gov/)（官方规范）；[Siemens iX](https://ix.siemens.io/)（官方规范）；[Porsche Design System](https://designsystem.porsche.com)（官方规范）；[Checkpoint Research](https://www.checkpointresearch.ca)（实站）；[Cula Technologies](https://www.cula.tech/)（实站）；[Matrixspace](https://www.matrixspace.com/)（实站）；[Adobe Spectrum](https://spectrum.adobe.com)（官方规范）；[Alaska Airlines](https://auro.alaskaair.com/)（官方规范）；[Okta Odyssey Design System](https://odyssey-storybook.okta.design/)（官方组件演示）；[MongoDB Design System](http://mongodb.design)（官方规范）；[Flowbite · Skeleton](https://flowbite.com/docs/components/skeleton/)（组件演示）；[Chakra UI · Skeleton](https://chakra-ui.com/docs/components/skeleton)（组件演示）

### Bento / 卡片模块

通过大小不一、边界明确的卡片模块组织多个信息单元。

- 英文/检索词：Bento grid / Card grid / 便当盒
- 识别点：不同跨度的卡片；模块内自成层级；整体遵循网格
- 边界：Bento 是版式模式，可与极简、玻璃和深色科技组合。
- 案例：[Supabase](https://supabase.com/)（实站）；[Aceternity · Bento Grid](https://ui.aceternity.com/components/bento-grid)（组件演示）；[Mukul Chugh](https://mukulchugh.com/)（实站）

### 3D / 沉浸场景

让空间场景、实时图形或可探索世界成为主要浏览载体。

- 英文/检索词：3D / Immersive / WebGL / 沉浸式
- 识别点：三维空间为主体；交互影响场景；画面与导航结合
- 边界：一张 3D 插图与可交互沉浸世界不是同一种体验，个案说明应区分。
- 案例：[Spline](https://spline.design/)（实站）；[Lusion](https://lusion.co/)（实站）；[Active Theory](https://activetheory.net/)（实站）；[Unseen Studio](https://unseen.co/)（实站）；[Bruno Simon](https://bruno-simon.com/)（实站）；[Stripe Press](https://press.stripe.com/)（实站）；[Race Condition](https://www.northkingdom.com/case/racecondition)（实站）；[SentientX](https://www.sentientx.com)（实站）；[Cerebrium](https://cerebrium.ai/)（实站）；[Linea Prompt](https://lineaprompt.com)（实站）；[ABTC - American Bitcoin](https://www.abtc.com/)（实站）；[iCapital](https://www.icapital.es/en/)（实站）；[Fitosauna](https://fitosauna.com/)（实站）；[Plumeform](https://plumeform.com)（实站）；[Columbus Travel](https://columbus-travel.com/)（实站）；[Duyu Care](https://duyucare.dops.agency/)（实站）；[Dérive](https://derive-ocean.com/)（实站）；[SIT Virtual Campus Tour](https://www.singaporetech.edu.sg/openhouse/virtual-campus-tour/)（实站）；[Mino Works](https://mino.works/)（实站）；[TOSEN | Architecture Studio](https://www.tosen.es/)（实站）；[Traçat Arquitectura 360](https://www.trasat.com)（实站）；[OLYMPIC SUBSEA](https://www.olympic.no/)（实站）；[AVEA](https://avea.studio/)（实站）；[Dopamine Studio](https://www.dopaminestudio.io/)（实站）；[Garaje Inspiration Fest](https://gif.garajedeideas.com/)（实站）；[Pensatori Irrazionali](https://pensatori-irrazionali.com/)（实站）；[Blunt Umbrellas](https://bluntumbrellas.com)（实站）；[Chande Bootcamp 2026](http://chandebootcamp.com/)（实站）；[Design Bomb Festival](https://www.designbomb.it/)（实站）；[HONDA WING MARK HISTORY](https://global.honda/jp/wingmark/)（实站）；[Second Ride](https://second-ride.de/en)（实站）；[Goodgrowth](https://goodgrowth.com)（实站）；[Calculated Camouflage](https://calculatedcamouflage.com/)（创意体验）；[The Shape of Intelligence](https://shapeofintelligence.com/)（创意体验）；[Springs](https://springs.estate/)（实站）；[Voku.Studio™](https://voku.studio/)（实站）；[Félix Péault • Photographer](https://felixpeault.com)（实站）；[World Cup — The Immortals](https://theimmortals.world/)（创意体验）；[The Spark](https://spark.thedigitalpanda.com/)（创意体验）；[The Scope Creep](https://scope-creep.xyz)（创意体验）；[Work In Progress](https://www.veryworkinprogress.com)（实站）；[LUT Studios](https://lutstudios.com/)（实站）；[Jacob How Portfolio](http://jcubhow.com)（实站）；[THE UN KNOWN ® Next-Gen Creative Consultancy](https://theunknown.tv)（实站）；[LOUD. Digital Product Company.](https://loudsrl.com)（实站）；[Pixelismo Studio](https://www.pixelismo.it)（实站）；[Vantor](https://vantor.com/)（实站）；[Junca Studio](https://juncastudio.com/)（实站）；[Mario Carrillo](https://marioecg.com/)（实站）；[ibaCOMMUNITY worldwide baking](https://iba-globe.why.de/)（创意体验）；[atuin.media](http://www.atuin.media)（实站）；[Triptych Interactive](http://3dv2.triptych.co)（实站）；[Cosmic Sans Microsite](https://cosmic-sans.blast-foundry.com)（创意体验）；[Art Here 2025 - Richard Mille](https://artprize-shadows.com/)（创意体验）；[Stōkt - Creative Company](https://wearestokt.com/)（实站）；[ZIRKA Interceptor](https://www.zrk.technology/)（实站）；[Boon Global](https://www.boonglobal.io/)（实站）；[AP Transit - NYC Subway Map](https://aptransit.co)（实站）；[Grail](https://grail-app.com/)（实站）；[Unbelievably Crap](https://www.unbelievablycrap.com/)（实站）；[\\' Brand Consultant](https://workbyw.com/)（实站）；[Zabal Media Agency](https://www.zabalmedia.co)（实站）；[Belgrade Arbor](https://belgradearbor.rs/en)（创意体验）；[Ferr Studio](https://ferrstudio.ch)（实站）；[New Zealanderlivery Service](https://www.newzealanderliveryservice.co.nz/)（创意体验）；[CRÈCHE - the tank](https://www.crechetank.com/)（实站）；[L.I.S.A.](https://lisa.locomotive.ca/en)（创意体验）；[Ocean](https://oceanfilms.com.br/)（实站）；[Slap Apps Experience](https://experience.slap-apps.de/)（创意体验）；[The First Fifty](https://book.sequel.co/)（创意体验）；[RIY3.0 Hive](https://riy3.com/)（创意体验）；[MIMEYOI](https://mimeyoi.co)（实站）；[Davel Creative Agency](https://davelcreative.com)（实站）；[Atmospherik](https://atmospherik.ai)（实站）；[Mail.ru Group Paradigm](https://design.mail.ru/)（实站）；[Sameera Sandakelum](https://sameerasw.com/)（实站）；[Maxime Heckel](https://maximeheckel.com/)（实站）；[Culture DevOps](https://culturedevops.com/en)（实站）；[Dokmeh · 404](https://hidokmeh.com/404/)（实站）；[Nocturnal Dream · 404](https://www.nocturnaldream.com/404)（实站）；[NOT FOUND · 404](https://www.not-found.tv/404)（实站）；[Clay](https://www.clay.com/)（实站）

### 大字 / 动态排版

让夸张字号、文字运动和滚动节奏成为主要视觉表达。

- 英文/检索词：Kinetic typography / Big type / Scroll storytelling / 滚动叙事
- 识别点：文字占据大面积；字号与字形强对比；节奏化转场或滚动
- 边界：静态截图能观察尺度与布局，动效本身仍要访问原站。
- 案例：[Framer](https://www.framer.com/)（实站）；[Webflow](https://webflow.com/)（实站）；[Instrument](https://www.instrument.com/)（实站）；[Obys Agency](https://obys.agency/)（实站）；[Rauno Freiberg](https://rauno.me/)（实站）；[Wafer.ai](https://www.wafer.ai)（实站）；[Bitnomial](https://bitnomial.com/)（实站）；[Onyx Restaurant Paris](https://restaurantonyx.com)（实站）；[Rupert & Rothschild](https://rupert-rothschildvignerons.com/)（实站）；[Blue More Yachting](https://www.bluemoreyachting.com/)（实站）；[IN56](https://www.in56.es/)（实站）；[31 for 31](https://www.31-for-31.com/)（实站）；[INHERITED BAND](https://inherited.band/)（实站）；[Biciclette Zecchini](https://www.biciclettezecchini.it/)（实站）；[day one® Run](https://day1-run.webflow.io/)（实站）；[Robert Mayer Portfolio](http://mayerr.com)（实站）；[L'Étude - Creative Studio](https://letude.group)（实站）；[Wondermake Fonts](https://fonts.wondermake.xyz)（实站）；[Huy Phan Vol.2](https://huyml.co/)（实站）；[Lee Holmes](https://leeholmes.uk)（实站）；[morefont](https://morefont.ch)（实站）；[Aardvark Book Club](https://aardvarkbookclub.com)（实站）；[project://cult](https://project-cult.digital/)（实站）；[Stōkt - Creative Company](https://wearestokt.com/)（实站）；[Sadu Media](https://www.sadumedia.com/)（实站）；[Binil B](https://thegr8binil.me)（实站）；[Production Portugal · 404](https://productionportugal.com/404)（实站）；[Boc Studio · 404](https://boc.studio/404)（实站）；[Scroll-driven · Stacking cards](https://scroll-driven-animations.style/demos/stacking-cards/css/)（组件演示）；[Scroll-driven · Horizontal section](https://scroll-driven-animations.style/demos/horizontal-section/css/)（组件演示）

### 液态玻璃 / 折射

在透明层上用边缘高光、折射或形变模拟更接近透镜的材质。

- 英文/检索词：Liquid Glass / Refraction
- 识别点：边缘折射；背景形变；透明透镜高光
- 边界：这里是第三方 Web 演示，不声称等同于 Apple 原生材质；静态图无法体现全部动态。
- 案例：[Liquid Glass for the Web](https://liquidglass.dev/)（组件演示）；[Liquid Glass · Sam Asante](https://glass.samasante.com/)（组件演示）；[Apple Vision Pro](https://www.apple.com/apple-vision-pro/)（实站）；[https://wearedelta.it/](https://wearedelta.it/)（实站）

### 黏土 / 膨胀软体

用膨胀轮廓、厚实圆角、内部光影和柔软色彩表现黏土般体积。

- 英文/检索词：Claymorphism / Clay / Puffy
- 识别点：充气般的形状；内阴影与厚实圆角；柔和体积感
- 边界：与同背景浮雕的新拟态分别收录；生产环境少见纯 claymorphism UI，真实站点样本取「软塑 3D 角色 / 场景」，演示与工具作为对照。
- 案例：[Hype4 · Claymorphism Generator](https://hype4.academy/tools/claymorphism-generator)（风格工具）；[Bloom · Claymorphism Demo](https://8web.ai/demo/claymorphism)（风格演示）；[Duolingo](https://www.duolingo.com/)（实站）；[Clay](https://www.clay.com/)（实站）

### 中式传统 / 文博

将传统色、纹样、书法、文物或卷轴式视觉用于网页表达。

- 英文/检索词：Chinese traditional / 国风 / 中式 / 文博
- 识别点：传统色与纹样；书法或文物视觉；文化叙事与留白
- 边界：只覆盖传统文博方向，不把所有中文网站归为国风，也不代表所有国潮子风格。
- 案例：[故宫博物院](https://www.dpm.org.cn/)（实站）；[数字敦煌](https://www.e-dunhuang.com/)（实站）；[RAW](https://raw.com.tw/)（实站）

### Y2K / 千禧复古未来

借用千禧年代的金属、虹彩、星形和数码流行视觉建立复古未来感。

- 英文/检索词：Y2K / Chrome / Iridescent / 千禧
- 识别点：金属或虹彩效果；星形与数码装饰；复古未来的字形配色
- 边界：与 CRT 终端、90 年代桌面和赛博 HUD 分开；演示只能说明视觉方法。
- 案例：[Artifx · Y2K Design](https://artifx.dev/ui-styles/y2k-design)（风格演示）；[Rewind · Retro Y2K Demo](https://8web.ai/demo/retro-y2k)（风格演示）；[Versace Jeans Couture · Y2K](https://www.nssmag.com/en/p/versace-jeans-couture)（创意体验）；[Goodgrowth](https://goodgrowth.com)（实站）；[Saud's PS2 Portfolio](https://imsaud.me/)（创意体验）；[Tommy Biglow](https://tommybiglow.com)（创意体验）；[EddyOS — Eddy Naboulet](https://eddy-naboulet.dev/)（创意体验）

### Fluent 设计语言

以微软 Fluent 的组件、排版、层级和状态系统组织工作型界面。

- 英文/检索词：Fluent UI / Fluent 2 / Microsoft Fluent
- 识别点：官方 Fluent 组件；克制的表面与层级；一致的状态和交互
- 边界：以官方规范与组件为参考，不把普通蓝色后台直接称为 Fluent。
- 案例：[Fluent 2 · Microsoft](https://fluent2.microsoft.design/)（官方规范）；[Fluent UI React · Button](https://storybooks.fluentui.dev/react/?path=/docs/components-button-button--docs)（官方组件演示）；[Fluent UI](https://developer.microsoft.com/en-us/fluentui#/)（官方规范）；[Microsoft Fluent](https://www.microsoft.com/design/fluent/)（官方规范）

### Bauhaus / 几何原色

借用原色、圆形方形三角形、非对称平衡与结构网格表达几何秩序。

- 英文/检索词：Bauhaus / 包豪斯 / Geometric primary
- 识别点：红黄蓝等原色；明确的基本几何；非对称的结构平衡
- 边界：这里是受到包豪斯影响的网页表达，不是历史学认证。
- 案例：[1014 · Space for Ideas](https://www.1014.nyc/)（实站）；[Remember Style · Bauhaus](https://dev.remember.style/bauhaus)（风格演示）

### Memphis / 波普几何

用活泼的几何拼块、波浪、点阵和撞色建立装饰性与玩心。

- 英文/检索词：Memphis / 孟菲斯 / Squiggle
- 识别点：几何拼块与波浪；多色或粉彩撞色；装饰纹样与不规则组合
- 边界：与地名 Memphis 和泛指企业人物插画的 Corporate Memphis 分开。
- 案例：[Memphoria · Automattic](https://memphoriademo.wordpress.com/)（主题演示）；[Remember Style · Memphis](https://dev.remember.style/memphis)（风格演示）；[Memphis Milano](https://www.memphis.it/en/)（实站）

### 手绘草图 / 线框

让不规则线条、手写标注和草图式控件成为界面的主要语言。

- 英文/检索词：Sketch / Hand drawn UI / Wireframe / Rough
- 识别点：不完全规则的线条；手绘边框与标记；草图或线框观感
- 边界：区别于只有人物插画的品牌页；样本展示界面线条本身。
- 案例：[Wired Elements](https://wiredjs.com/)（组件演示）；[Rough Notation](https://roughnotation.com/)（组件演示）；[Excalidraw](https://excalidraw.com/)（实站）；[Vinay Arora • Design](http://www.vinayarora.design)（实站）；[Andrea Toffanello](https://andreatoffanello.com)（实站）
