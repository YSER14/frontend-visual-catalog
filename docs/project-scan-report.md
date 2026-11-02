# 项目扫描与学习报告：前端美化计划

扫描日期：2026-10-25（Asia/Shanghai）｜扫描窗口：20:52–21:20
扫描对象：`<项目根目录>`
方法：全量只读通读 + Node/Python 只读脚本统计 + Playwright（headless Edge）运行时验收 + 隔离副本重建 + 三方并行审计（数据 / 代码 / 采集）

> **先读这一条：这是一个"活"的项目。** 扫描期间（21:01–21:16）目录被并发修改：新增「统一小样」子系统（`style-lab.*`）、重建 `index.html`（305 KB → 331 KB）、追加 Bauhaus 主题层 `gallery-bauhaus.css`。本报告以 **V2 快照（21:04–21:05）** 为基线，文末附最终哈希清单；行号只在 V2 内有效，关键处同时给函数名/片段。

---

## 0. 30 秒速览

| 维度 | 结论 |
| --- | --- |
| 项目性质 | 人工策展的「前端视觉案例库」+ 一个把数据生成为离线站点的迷你构建系统 |
| 当前形态 | 86 个真实网站案例 / 32 个风格方向 / 37 个基本元素 / 86 张 1440×1000 截图 |
| 站点能力 | 风格视图、元素图鉴、统一小样（32 风格可调参对照）、五条件交叉筛选、hash 深链、`file://` 离线可用 |
| 技术栈 | 纯 Node（无依赖）+ 原生 HTML/CSS/JS + Playwright CLI 截图 + Pillow 联系表；**没有** package.json / 框架 / 构建工具 |
| 生成方式 | `node build.cjs` → `index.html` + `README.md` + `coverage.md` + `elements.md` 四份产物，同源派生 |
| 最强的地方 | 数据→文档→站点全部同源生成，数字零漂移；离线、零依赖、`file://` 双击即用；分类体系带 `boundary` 边界说明 |
| 最弱的地方 | 采集口径未固化（语言漂移、遮罩残留、reduced-motion 语义混用）；构建期只有 4 类隐式契约、无校验器；前端有 3 个可复现 bug |
| 一句话评价 | **内容策展的成熟度远高于工程化程度**：一套很聪明的 200 行生成脚本 + 一套靠人肉保证的 86 张截图 |

---

## 1. 项目是什么

### 1.1 两个相邻的产物

1. **案例库（主体）**：`output/playwright/frontend-examples/`。收集 86 个前端案例，每个案例保留原站 URL、本地截图、类型与用途、观察说明、风格标签（32 选 1–2）、元素标签（37 选 3–8）。
2. **设计方向建议（附件）**：根目录 `设计方向.md`（10 KB，20:56 写入）。这是对案例库**自身外壳**的体检与改造方案，核心主张是「做成一本可筛选的纸本图录，而不是产品官网」：壳层退到近无彩，把颜色让给 86 张截图。

两者关系：案例库是「看别人怎么做」，设计方向文档是「我们自己怎么做」。文档提出的 token、图版比例、键盘与对比托盘等建议，部分已在扫描期间落地（统一小样、Bauhaus 主题层），但尚未系统执行。

### 1.2 站点长什么样

- **风格视图（默认）**：左侧 32 个风格目录（按 视觉语言/材质/设计系统/版式与交互 四组），中间是当前风格的说明卡（定义、识别点、边界、样本强度），下方是 86 张案例卡片（图 + 编号 + 类型/用途 + 风格标签 + 观察点 + 访问记录）。
- **元素视图**：同一份数据的另一个切法。37 个基本元素分 9 组，每个元素有本站自绘的小样（不复制案例组件），选中后显示示意 + 观察点 + 命中案例。
- **统一小样（lab，扫描期间新增）**：同一张卡片内容，左侧固定基准、右侧按 32 个风格预设演绎；可调圆角/留白/过渡时长，实时显示「这次改了什么参数」，并生成可复制的 CSS。

### 1.3 规模（可复核）

| 指标 | 值 | 指标 | 值 |
| --- | ---: | --- | ---: |
| 案例 | 86 | 风格 | 32（4 组） |
| 基本元素 | 37（9 组） | 采集记录 / 截图 | 86 / 86 |
| 来源域名（去 www） | 83 | 用途分类 / 案例类型 | 12 / 9 |
| 实站·创意体验 / 演示 | 54 / 32 | 风格标记 / 元素标记 | 128 / 419 |
| 平均标签 | 1.49 风格、4.87 元素 | 单风格案例 | 44（51%） |
| 截图总体积 | 11.15 MB | 单图均值 / 极值 | 132.8 KB / 47.3–344.4 KB |

设计上的取舍值得注意：**一个案例可以属于多个风格，但风格最多只标 2 个**（51% 只标 1 个）；元素平均 4.87 个，说明「风格」是粗粒度气质判断，「元素」才是细粒度拆解维度。

---

## 2. 目录地图

```
前端美化计划/
├─ 设计方向.md                      # 对站点外壳的设计体检 + 改造建议（人工，非生成）
├─ .study/                          # 本次扫描的工作区（报告、脚本、验收截图；不属于项目）
└─ output/playwright/frontend-examples/
   ├─ cases.json           (86)     # 人工：案例清单（URL/用途/风格/元素/观察点…）
   ├─ styles.json          (32)     # 人工：风格定义（定义/识别点/边界/别名/分组）
   ├─ elements.json        (37)     # 人工：元素定义（定义/观察点/提示/示意键/是否需交互）
   ├─ capture-results.json (86)     # 机器：访问与截图元数据（finalUrl/title/status/时间/正文摘录…）
   ├─ screenshots/*.jpg    (86)     # 机器：1440×1000 JPEG，q86
   ├─ build.cjs            (102 行) # 生成器：4 份 JSON + 2 个模块 → 4 份产物
   ├─ element-previews.cjs (53 行)  # 37 个元素示意的 HTML 模板（本站自绘）
   ├─ style-lab.cjs        (75 行)  # 32 个风格预设 + 小样 HTML（V2 新增）
   ├─ gallery.js / gallery.css      # 画廊交互 / 样式（含 37 个示意样式）
   ├─ style-lab.js / style-lab.css  # 统一小样交互 / 样式（V2 新增）
   ├─ index.html           (718 行) # 产物：单文件站点（331 KB，内嵌全部数据与模板）
   ├─ README.md / coverage.md / elements.md  # 产物：三份文档
   ├─ capture.cjs / save-current.cjs / contact-sheet.py  # 采集与 QA 工具
   └─ qa-contact-1..8.jpg、*-preview.jpg       # QA 联系表与页面预览（未被引用）
```

职责边界很清楚：**JSON 是事实源，代码是渲染器，产物是派生物，工具是采集器**。唯一「混进来」的是 `设计方向.md`——它是另一个层面的输入（对人的建议，不是对程序的输入）。

---

## 3. 架构：一条单向流水线

```
人工判断                     机器采集                    生成                       分发
─────────                   ─────────                  ─────                      ─────
cases.json     ┐            capture.cjs                                          index.html
styles.json    ├─┐          save-current.cjs  ──► capture-results.json          README.md
elements.json  ┘ │                  │                    │                      coverage.md
                  └──────────────┬───┴────────────────────┤                      elements.md
                                 ▼                        ▼
                          build.cjs（唯一入口，node build.cjs）
                                 │
        ┌────────────────────────┼────────────────────────┐
        ▼                        ▼                        ▼
   element-previews.cjs     style-lab.cjs            内嵌 JSON（styles/elements/lab）
   （37 个元素示意）          （32 个风格预设）          → gallery.js 运行时筛选
```

三条设计原则，贯穿全项目：

1. **构建期能算的都算完**：86 张卡片的搜索串、分类标签、计数、`data-*` 全部在构建时拼进 HTML；浏览器只做布尔交集（实测 86 卡筛选 0.03–0.05 ms/次）。
2. **离线优先**：数据内嵌为 `<script type="application/json">`，样式与脚本本地，无字体请求、无 fetch、无 CORS。双击 `index.html` 即可用。
3. **派生文档，而不是维护文档**：`coverage.md`、`elements.md`、`README.md`、`index.html` 来自同一批数据，所以文档数字天然一致（实测 224 格覆盖矩阵 + 37 行元素表 + 32 处「样本 N 例」零错）。

---

## 4. 数据模型与契约

### 4.1 四个数据文件

| 文件 | 条数 | 谁维护 | 作用 |
| --- | ---: | --- | --- |
| `cases.json` | 86 | 人 | 案例主表：`id / name / category / url / tags / study / styles[] / kind / collectionRound / elements[]` |
| `styles.json` | 32 | 人 | 风格字典：`id / name / family / aliases[] / definition / cues[] / boundary` |
| `elements.json` | 37 | 人 | 元素字典：`id / name / family / aliases[] / definition / cues[] / tip / sample`（`live` 可选） |
| `capture-results.json` | 86 | 机器 | 采集记录：`requestedUrl / finalUrl / title / status / screenshot / capturedAt / viewport / reducedMotion / textLength / excerpt / errors`（`reviewNote` 可选） |

关系：`cases.styles[] → styles.id`、`cases.elements[] → elements.id`、`cases.id ↔ capture-results.id`（1:1）、`capture.screenshot → screenshots/<id>.jpg`（文件必须存在）、`elements.sample → element-previews.cjs` 的模板表、`styles.id → style-lab.cjs` 的预设表。

### 4.2 三种「文档纪律」，价值不同

- `styles.json` 的 `boundary`：主动写「这个标签**不**代表什么」（例：「白底不自动等于极简」）。这是全项目最值得抄的内容设计。
- `elements.json` 的 `cues / tip`：把「怎么观察」写进数据，而不只写定义。
- `elements.live`：明确承认「这项必须去原站操作才看得见」（仅动效与交互组 2 项）。

### 4.3 校验强度：fail-fast 只管渲染，不管语义

构建期**硬失败**（4 条）：

| 条件 | 行为 |
| --- | --- |
| 无采集记录 / 截图字段为空 / 文件不存在 | `Error: 缺少截图：<id>`（三种原因共用一条消息） |
| 案例的 `styles` 为空或引用不存在的风格 | `Error: 风格分类缺失或不存在：<id>` |
| 案例的 `elements` 为空或引用不存在的元素 | `Error: 基本元素标记缺失或不存在：<id>` |
| 风格缺少统一小样预设 / 元素 `sample` 名不存在 | `统一小样缺少预设：<id>` / `未知元素示意：<sample>` |

**静默降级**（更值得警惕）：

- `kind`、`category`、`collectionRound` 没有白名单，写错就静默改变统计口径（例如 kind 不在 `实站/创意体验` 内就自动算「演示」）。
- `sample` 用 `in` 判断，`toString`/`constructor`/`__proto__` 会绕过守卫，把原生函数源码写进 HTML。
- `styles.json` 删除一个风格后，`style-lab.cjs` 里的孤儿预设不会报错，只会永远留在内嵌数据里。
- Markdown 产物完全无转义，一个竖线就可能破坏表格（当前数据 0 处，但没有兜底）。

一句话：**「数据对了」由人工保证，不由流水线保证。** 这是有意的取舍（容忍增量维护），但项目还没有校验脚本或 CI 来补这一层。

---

## 5. 构建管线

### 5.1 输入与输出

- 7 个输入：4 个 JSON + 2 个模块（元素示意、风格预设）+ 截图目录。
- 4 个产物，写出顺序：`index.html` → `coverage.md` → `elements.md` → `README.md`。
- **没有事务**：中途抛错时，前面已写的文件留在半更新状态；但因为没有「部分成功」的静默跳过，实际使用中通常直接重跑。

### 5.2 幂等性：实测结论

| 版本 | 结果 |
| --- | --- |
| V1（20:25 快照，我扫描开始时） | `README/coverage/elements.md` 逐字节一致；`index.html` 比生成器**多 1 字节尾部换行**（305,252 vs 305,251）→ 说明产物被手工保存过，或生成器在最后一次构建后改过 |
| V2（21:04 快照，并发更新后） | 隔离副本 `node build.cjs` 重生成：**四份产物逐字节全部一致** → 1 字节漂移已消失，构建恢复幂等 |

这是一个很典型的信号：**产物与生成器之间没有 CI 比对，只能靠人发现**。加一条 `build && git diff --exit-code` 就能永久防住。

### 5.3 加数据要动哪些文件（隐式契约）

- **只加案例**：`cases.json` + `capture-results.json` + `screenshots/<id>.jpg` → 重新构建。注意卡片序号来自数组下标，插入位置会影响后面所有编号。
- **加风格**：`styles.json` + **必须**在 `style-lab.cjs` 加同 id 预设（否则构建失败）；README / coverage / 侧栏 / 下拉自动生成。
- **加元素**：`elements.json`（含 `sample`）+ `element-previews.cjs` 加同名模板（否则失败）+ `gallery.css` 写 `.sample-<name>` 样式（**缺失不报错**，只是空白）。

即 **4 处隐式契约**：`styles↔presets`、`elements↔previews`、`sample↔CSS`、`capture↔cases`。目前没有任何独立校验器覆盖它们。

---

## 6. 前端实现

### 6.1 三种视图，一套数据

| 视图 | 侧栏 | 主区 | 交叉下拉 | 卡片联动 |
| --- | --- | --- | --- | --- |
| 风格 | 风格目录 | 说明卡 + 卡片列表 | 搭配元素 | 元素标签折叠 |
| 元素 | 元素目录 | 元素总览（37 小样）或 说明卡 + 示意 + 卡片 | 搭配风格 | 元素标签展开 |
| 统一小样 | 风格目录 | 基准 vs 演绎两栏 + 调参 + CSS + 案例 | 搭配元素 | 折叠 |

### 6.2 筛选状态机

6 个状态量：`mode`、`selectedStyle`、`selectedElement`、`category`、`kind`、`search`。
`filter()` 是 5 个条件的 **AND**；`mode` 不参与谓词，只决定视图骨架。
搜索串是**构建期拼好的**（名称 + 用途 + 类型 + 风格名/别名 + 元素名/组/别名 + tags + 观察点），因此搜索很快，但也带来两个问题：字段遗漏（定义/观察点提示/域名/备注搜不到）和中文子串串扰（「衬线字体」会命中「无衬线字体」）。

### 6.3 hash 深链

写入规则：`view` 只在 lab / 两维都选中 / elements 未选元素时写出；`style`、`element` 各自非 `all` 才写。
读取规则：`view` 白名单优先；否则**只要出现 `element` 就进元素视图**；非法 id 静默回落 `all`。

8 组真实往返实测中 7 组一致，**1 组翻转**（高优先级 bug）：

> 「按风格找 → 全部风格 → 搭配元素=衬线字体」→ hash 写成 `#element=type-serif` → 刷新后变成**元素总览**。案例数不变（7/86），但模式、侧栏、两个 `aria-pressed`、下拉标签全变了。

### 6.4 统一小样（style-lab）

- 契约：`styles.json(32) → buildStyleLab() → { samples: 32, baseline: 22 键 } → lab-data`；`style-lab.js` 用 12 个 `--lab-*` CSS 变量把预设画到同一张卡片上。
- 交互：风格下拉 / 上一条下一条（首尾循环）/ 三个滑块（圆角 0–36、留白 12–36、过渡 0–480 ms）/ 「显示基准对照」/ 参数差异表 / 生成 CSS + 复制（剪贴板不可用时自动展开并选中代码）/ 32 个预设都有一句 `note` 解释「这次变的是什么」。
- 可访问性做得比画廊更细：`role="status"` 状态行、`role="progressbar"`、示意图 `role="img"` + 仅沉浸风格可聚焦、方向键旋转、`prefers-reduced-motion` 时清零位移与 3D 角度。
- 弱点：`style-lab.cjs` 完全不做转义；预设与风格只有单向校验（缺预设会报错，孤儿预设不会）；与 `gallery.js` 靠加载顺序 + 全局词法绑定通信。

### 6.5 可访问性、响应式、安全

- 语义：`header/aside[aria-label]/main/footer/section[aria-label]` 齐全，`h1` 唯一，90 个 id 无重复；0 个内联事件（CSP 友好）。
- 问题：主内容前有 75 个 tab stop、无 skip link；卡片上的风格标签也用 `aria-pressed`（本质是跳转按钮，读屏会读成开关）；两个 `aria-live` 同时播报；元素示意里的假控件在详情面板没加 `inert`。
- 响应式：1400/1100/800/540 四个断点（style-lab 另有 1200/1050/620），390 px 宽无横向溢出，卡片单列。
- 无暗色模式（`color-scheme: light` 写死），这是风格主张，但建议在文档里说明。
- 安全：`</script>` 用 `\u003c` 转义，实测 3 类注入载荷全部挡住；文本字段走 `escape()`；但**所有 id 都不转义**，`style-lab.cjs` 连文本也不转义——靠「人工不写引号」的约定。

---

## 7. 采集与 QA 工作流

### 7.1 三段式人工 + 自动化

1. `capture.cjs`：Playwright CLI 长驻会话，每批 2 个标签页并发，1440×1000、`reducedMotion: reduce`、`domcontentloaded` + `load` 等待 + **6.5 s 稳定期**、JPEG q86、只截首屏；每批落盘，可断点续采。
2. `save-current.cjs`：人工点掉 Cookie/地区层、滚动到目标位置后，对**当前会话**重拍，保留原编号，写 `reviewNote`。
3. `contact-sheet.py`：每 12 张一张联系表，缩略图**保留完整比例不裁切**（专为暴露遮罩/错误页），人工目检。

### 7.2 健康度（好的一面）

- 86 例 ↔ 86 条记录 ↔ 86 个文件，双向无缺无多；全部 1440×1000；status 全 200；errors 全空。
- 文件 mtime 与 `capturedAt` **86/86 秒级吻合**——证明图片没有被手工替换过。
- 截图体积分布合理（中位 122 KB，最小 47 KB 的 Vercel 目检为正常极简页）。
- 8 张联系表编号与案例 id 完全对齐。

### 7.3 问题截图（已逐张目检确认）

| 类型 | 案例 | 现象 |
| --- | --- | --- |
| 语言/地区漂移 | `02-stripe`、`28-bang-olufsen` | URL 被重定向到 `/jp`、`/ja/jp`，整页日文 |
| | `26-apple` | 未跳转，但首屏顶部压着日文地区选择条（约 70 px） |
| | `27-nothing` | 标题 `Nothing \| UK`，正文却是简体中文 → `finalUrl` 比对抓不到 |
| 遮罩残留 | `17-instrument`、`33-works-in-progress`、`48-olipop`、`67-finch` | Cookie 条 / 同意卡压在内容上；其中 2 例是「无登记重拍」后仍在 |
| 媒体未加载 | `14-railway` | 首屏下半 1060×500 纯黑（产品演示未加载） |

### 7.4 元数据的三个口径问题

1. `reducedMotion`：62 条是采集脚本**硬编码 true**、13 条是重拍脚本**实测 false**、11 条**缺失** → 24/86 没有可信的减动效证据；而 13 条 false 恰好对应 13 条 `reviewNote`（3D/动效最重的一批）。
2. `status`：重拍时不更新，13 条重拍的 200 来自首轮。
3. 历史：`capture-results.json` 每个 id 只保留最后一次结果；≥23 次重拍（26.7%）中只有 13 次有登记，10 次完全无痕；首轮 14 例只落了 11 条（01/06/11 后补）。

### 7.5 可复现性缺口

- 无 `package.json` / lockfile / git；CLI 实为 `@playwright/cli 0.1.22`，未记录；本机浏览器构建（chromium-1234）与当前依赖期望（1247/1248）不匹配 → 重跑会悄悄换渲染引擎。
- 无 locale / timezone / Accept-Language 固化 → 语言与地区由出口 IP 决定。
- `build.cjs` 的日期硬编码 `2026-10-25`，将来重建仍会写旧日期。
- 13 次人工操作只有文字备注，无脚本、无 before 图；原站内容本身也会漂移。

---

## 8. 独立验收（本次实跑，不只读代码）

### 8.1 构建幂等

隔离副本（不动原目录）运行 `node build.cjs`：V2 四份产物逐字节一致；V1 仅 `index.html` 差 1 字节尾部换行。

### 8.2 画廊运行时（Playwright + Edge headless，`file://`）

| 检查 | 结果 |
| --- | --- |
| 卡片 / 模板 / 风格按钮 / 元素按钮 | 86 / 37 / 193 / 494 |
| 风格筛选（极简留白） | 10/86，hash 变 `#style=minimal`，`aria-pressed=true` |
| 搜索 `spline` + 极简 | 0 结果，空状态正常显示 |
| 元素视图 | atlas 37 卡，hash `#view=elements`，下拉标签切换正确 |
| 元素筛选（玻璃层） | 7/86，示意模板克隆成功，86 个 details 展开 |
| 深链 `#view=elements&element=type-serif&style=editorial` | 3/86，状态正确恢复 |
| 非法 hash `#style=does-not-exist` | 回落「全部风格」、86 张卡、无报错（但不回写归一化） |
| 图片 | 86 张全部加载，0 破图 |
| 控制台 | 0 错误、0 失败请求 |
| 390 px 移动端 | 无横向溢出，单列，侧栏转静态 |

### 8.3 统一小样（同一浏览器）

| 检查 | 结果 |
| --- | --- |
| 预设数量 / 基准面板 | 32 / 存在 |
| 进入 lab | hash `#view=lab&style=swiss`，名称「瑞士网格 / 国际主义」，位置 02/32，12 个参数行、8 项变化 |
| 切换风格 | `#view=lab&style=cyber`，CSS 同步重算 |
| 滑块（圆角 20 px） | `--lab-radius: 20px`、CSS 出现 `border-radius: 20px`、参数表标记变化 |
| 复制参数 CSS | 按钮变「已复制」，状态行提示成功（`file://` 下剪贴板可用） |
| 深链 `#view=lab&style=swiss` | lab 可见、风格同步、模式按钮 `aria-pressed=true` |
| 390 px | 无溢出，舞台 316 px |

这两组验收说明：**站点的主路径是可信的**；问题集中在边缘交互（刷新翻模式、开合被覆写）与数据侧（语言/遮罩），不是「页面坏了」。

---

## 9. 质量评估

### 9.1 七个真正值得抄的做法

1. **同源派生文档**：4 份产物来自同一批数据，数字永远不会互相矛盾——这比「仔细校对」可靠一个数量级。
2. **分类写「边界」**：每个风格都有 `boundary`，主动说明易混淆点；每个元素都有 `cues/tip`，教人怎么观察。
3. **双层标签体系**：风格（整体气质）与元素（可拆解特征）互不替代，且能交叉筛选；元素用「本站自绘小样」解释，不复制别人的组件。
4. **离线优先的单文件站**：数据内嵌、零请求、`file://` 双击即用，适合长期存档与分发。
5. **构建期索引 + 运行时布尔交集**：86 卡筛选 0.03 ms，无需虚拟列表或框架。
6. **认账的局限**：`coverage.md` 明写「不是市场份额调查」「不可相加」，`live:true` 明写「静态截图验证不了动效」。
7. **采集合规而克制**：只存 URL + 截图 + 访问元数据，不镜像站点、不存整页 HTML。

### 9.2 问题清单（按严重度，合并三方结论）

**高**

| # | 问题 | 归属 | 证据/触发 |
| --- | --- | --- | --- |
| H1 | hash 语义不足 → 刷新/分享后**模式翻转** | 前端 | 风格视图 + 搭配元素 → `#element=…` → 重载变元素总览 |
| H2 | 4 处隐式契约无校验（风格↔预设、元素↔示意、示意↔CSS、采集↔案例） | 构建 | 加风格必须改代码；CSS 缺失/预设缺键/孤儿预设全静默 |
| H3 | 转义纪律不统一：id 全程不转义，新模块连文本也不转义 | 构建 | `data-style="${style.id}"`；手滑写引号即产出坏 HTML |
| H4 | 采集口径未固化：语言漂移 4 例、遮罩残留 4 例、媒体空块 1 例 | 采集 | `02/26/27/28`、`17/33/48/67`、`14` |
| H5 | `reducedMotion` 语义混用（62 硬编码 / 13 实测 / 11 缺失） | 采集 | 13 张重拍全部未启用减动效，恰是 3D 类 |

**中**

| # | 问题 | 归属 |
| --- | --- | --- |
| M1 | `render()` 覆写用户开合（侧栏目录、卡片 details），且无 resize 监听 | 前端 |
| M2 | 搜索索引缺字段 + 中文子串串扰（「衬线」命中「无衬线」） | 构建 |
| M3 | 证据强度与覆盖数字脱钩：32/32「≥2 例」，但 12 个风格零实站、15 个只有 2 例 | 内容 |
| M4 | 审计字段只存不用：status/errors/textLength/excerpt/reducedMotion 不进产物 | 构建 |
| M5 | 失败处理是「跳过 + 打日志」，日志已删，无失败清单/重试 | 采集 |
| M6 | 颜色/字号/断点无体系（158 个色值、7 个断点、158 px 魔数 ×3） | 样式 |
| M7 | 微字对比度 2.5–3.4:1；无 skip link，75 个 tab stop 在主内容前 | 可访问性 |
| M8 | 无 package.json/lockfile/CI，CI 与校验器缺位 | 工程 |

**低**

| # | 问题 |
| --- | --- |
| L1 | 非法 hash 静默回落且不回写归一化 |
| L2 | `element-previews.cjs` 用 `in` 守卫，原型键可绕过（`toString` 等） |
| L3 | 预设与风格只有单向校验，孤儿预设静默保留 |
| L4 | 5 张 `*preview.jpg` 为孤儿产物（无任何引用），且其中 2 张卡片是灰色空框 |
| L5 | 页脚「记录详见卡片」只渲染 `reviewNote`，不显示 reducedMotion；≥10 次静默重拍无记录 |
| L6 | `coverage.md` 局限清单漏掉本次实测的语言/遮罩/媒体/引擎四类问题 |
| L7 | README「仅保存 URL、截图与观察说明」与实际的 700 字正文 `excerpt` 不符 |
| L8 | 无 `meta description`/`og`/`noscript`；产物单行 58 KB，diff 不可读 |
| L9 | 日期硬编码；`status` 重拍不更新；CLI 版本/浏览器构建零记录 |

### 9.3 诚实性评价

数字**没有夸大**：所有计数、覆盖比例、域名数都能从 JSON 精确复算，限定语（不是市场统计、不是站方认证、标签不可相加）也齐全。
真正的风险是**反向失真**：局限清单和页脚承诺比实际做得更完善——「我们有 QA 记录」实际上只是 13 条手写备注 + 10 次无记录重拍。改进方向不是加免责声明，而是把口径固化下来。

---

## 10. 学习地图

### 10.1 三条阅读路线

**30 分钟（先建立骨架）**
1. `README.md` 前 60 行 → 看它如何把「风格」写成可观察的判据。
2. `build.cjs` 第 1–40 行 → 看数据如何变成 `rows` / `coverage`。
3. 浏览器打开 `index.html` → 点三个视图、试一次交叉筛选、复制一次 lab 的 CSS。

**2 小时（理解全部机制）**
4. `cases.json` 抽 3 条 + `styles.json` 抽 2 条 + `elements.json` 抽 2 条，对照卡片渲染。
5. `gallery.js` 全文（173 行）→ 状态机与 hash。
6. `element-previews.cjs` + `gallery.css` 的 `sample-*` → 看「自绘示意」如何与数据键对应。
7. `style-lab.cjs` + `style-lab.js` → 看「同一内容 32 种演绎」的变量驱动写法。
8. `capture.cjs` + `save-current.cjs` + `contact-sheet.py` → 看采集与 QA 的人机分工。

**半天（复现并改造）**
9. 在副本里跑 `node build.cjs`，验证幂等；改一个风格名，看四份产物如何联动。
10. 按第 11 节的 5 步做一次小改造（先修 hash 与开合状态，再加校验脚本）。

### 10.2 八个可复用模式

| 模式 | 项目里的实现 | 怎么用到自己的项目 |
| --- | --- | --- |
| 数据即事实源 | 4 个 JSON + 生成器 | 把「手工维护的文档/页面」改成从数据生成 |
| 派生文档 | 4 份产物同一脚本 | 报告、README、仪表盘只写模板，内容来自数据 |
| 双层分类 | 风格（气质）+ 元素（特征） | 任何「选型/参考库」都可拆成整体与局部两维 |
| 边界字段 | `boundary` 说明易混淆点 | 分类体系里最稀缺的是「它不是什么」 |
| 自绘示意 | 37 个纯 HTML/CSS 小样 | 解释抽象概念时，自己画比截别人的图更可控 |
| 离线单文件 | 内嵌 JSON + classic script | 长期存档、邮件分发、无服务端场景 |
| 构建期索引 | `data-search` 预拼 | 中小数据集用不着搜索库 |
| 变量驱动皮肤 | `--lab-*` 12 个变量 | 同一 DOM 多风格演示 / 主题切换的最小实现 |

### 10.3 概念速查

- **多标签分类 vs 层级分类**：本项目风格是多对多（一个案例 1–2 个风格），元素也是多对多（3–8 个）；分类之间没有父子关系，只有分组（family）。
- **fail-fast vs 静默降级**：渲染必需字段失败即停；业务语义字段（kind/round）静默接受——这是「可维护性」与「正确性」的取舍，代价是没有校验器就无法保证统计口径。
- **hash 路由的三件事**：写入规则、读取规则、归一化。本项目做了前两件，缺第三件，于是出现了「刷新翻模式」。
- **证据强度**：`n`（例数）、`sites`（实站数）、`hosts`（独立域名数）是三个不同维度；只看 `n` 会把「4 个演示页」和「13 个真实产品」当成同等覆盖。

---

## 11. 如果要继续推进（按性价比排序）

**第 1 步｜修 3 个前端 bug（半天，收益最高）**
- hash：除纯默认态外都写 `view`；`readHash` 末尾调 `writeHash()` 归一化。
- `render()`：只在模式切换时设置 `details.open`，`innerWidth` 改 `matchMedia` 并监听。
- 转义：把 `escape()` 提成共享模块，id 与 style-lab 的文本一并走它。

**第 2 步｜加校验器与 CI（1 天）**
- `package.json`（`build` / `check` / `format`）+ `scripts/check-data.cjs`：id 唯一且格式合法、`sample` 用 `Object.hasOwn`、每个 `sample` 有对应 CSS、`styles ↔ presets` 双向一致、预设覆盖 baseline 全键、产物锚点可解析。
- CI：`build && git diff --exit-code`（防 V1 那种手工改产物）+ `</script>` 计数断言。

**第 3 步｜固化采集口径（1–2 天）**
- 固定 locale/timezone/Accept-Language；`save-current.cjs` 补 `emulateMedia({reducedMotion:'reduce'})`。
- 采集后自动 QA 三条硬规则：近纯色/低方差（防空白）、语言检测（防日文/中文漂移）、固定元素面积占比（防 Cookie 条）。
- `reviewNote` 改必填枚举（`no-overlay` / `closed-cookie` / `chose-region`），记录动作而不是散文；`capture-results` 增 `revision` 历史，禁止整集覆盖。

**第 4 步｜补内容强度（持续）**
- 12 个零实站风格各补 1 个真实产品（优先 cyber / pixel / glass / enterprise / material），让「有实站对照」从 20/32 → 32/32。
- 动效与交互组（2 元素 / 4 标记）改用「两帧对比」或短录屏，否则这组永远无法用静态图证明。
- 遮罩/地区处理脚本化，把 4 例语言漂移 + 4 例遮罩一次清掉。

**第 5 步｜发布与体验（1–2 天）**
- 补 `description` / `og:image`（复用预览图）；把 5 张孤儿预览图接入文档或删除；页脚说明改为「哪些截图有遮罩/重拍」的真实清单。
- 采用 `设计方向.md` 的前 4 步（token、图版 cover、字号阶梯、页头瘦身），它们只改 `gallery.css`，风险低。

---

## 12. 附录

### 12.1 本次扫描的产物

| 文件 | 内容 |
| --- | --- |
| `项目扫描报告.md` | 本报告（合并版） |
| `.study/data-findings.md` | 数据层审计（589 行，统计/覆盖/交叉/质量） |
| `.study/code-findings.md` | 代码层审计（595 行，管线/状态机/bug/技术债） |
| `.study/workflow-findings.md` | 采集与 QA 审计（364 行，流程/截图/可复现性/文档一致性） |
| `.study/runtime-check.cjs` / `runtime-lab.cjs` | 两组 Playwright 验收脚本（可重跑） |
| `.study/runtime-check.json` / `runtime-lab.json` | 验收原始结果 |
| `.study/shots/*.png` | 桌面/移动/元素/lab 截图（5 张） |
| `.study/snapshot.txt` | 最终文件哈希清单 |

### 12.2 复跑命令（不改动项目）

```bash
# 构建幂等（在副本里跑，绝不动原目录）
cp -r output/playwright/frontend-examples /tmp/fe-check && cd /tmp/fe-check && node build.cjs
# 运行时验收（需要 playwright 包与浏览器；本机通过 NODE_PATH 指向 npx 缓存 + Edge 可执行文件）
cd .study && NODE_PATH=<playwright-node_modules> BROWSER_PATH=<edge.exe> node runtime-check.cjs
cd .study && NODE_PATH=<playwright-node_modules> BROWSER_PATH=<edge.exe> node runtime-lab.cjs
```

### 12.3 最终快照（扫描结束时，项目仍在变动）

```
index.html            effeb655…  331,580 B  21:16
build.cjs             c05c2829…   21,269 B  21:04
gallery.js            c656ce31…   10,879 B  21:10
gallery.css           6eeb6dbe…   25,691 B  21:04
element-previews.cjs  52b8a4d9…    6,006 B  21:04
style-lab.cjs         55102bae…   17,099 B  21:04
style-lab.js          29eedeb6…   10,408 B  21:08
style-lab.css         b419531e…   19,413 B  21:05
gallery-bauhaus.css   9799d808…   19,370 B  21:18（扫描末出现，未纳入深度分析）
```

> 这份表在 21:19 取值；项目仍在被并发编辑（21:01–21:18 期间新增 style-lab 与 Bauhaus 主题层），下一次修改后哈希会变。

### 12.4 术语表

- **风格（style）**：整体视觉语言/材质/设计系统/版式，一个案例 1–2 个。
- **基本元素（element）**：可拆解的视觉特征（网格、衬线、圆角、玻璃…），一个案例 3–8 个。
- **统一小样（lab）**：用同一张卡片内容演示 32 个风格的差异，并暴露可复用参数。
- **联系表（contact sheet）**：12 张缩略图一张的 QA 拼图，用于人眼快速发现遮罩/错误页。
- **fail-fast**：数据不满足契约就让构建失败，而不是跳过。

---

**一句话收尾**：这个项目真正值钱的不是 86 张截图，而是「人工策展 + 数据契约 + 同源生成 + 离线分发」这套组合；它已经证明了内容侧的方法论，下一步要补的是工程侧的闸门（校验、CI、采集口径），而不是更多截图。
