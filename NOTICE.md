# 来源与许可

本文件记录案例库的**外部来源**、许可与使用边界。案例截图均由本项目的 Playwright 流程重新采集，不复制任何外部数据集的图片。

## 一、外部源扩充（2026-10-27，两轮共 345 例）

| 来源 | 许可 | 本项目使用方式 | 备注 |
| --- | --- | --- | --- |
| [Awwwards](https://www.awwwards.com/)（经 [awwwards-mcp](https://github.com/INSANE0777/Awwwards-mcp) 本地索引） | 工具 MIT；Awwwards 数据按「personal, non-commercial inspiration use」使用 | 仅取站点名称、URL、公开标签作为候选与分类线索；截图自行采集 | 不引入其缩略图/媒体文件；对外发布前需重新评估 Awwwards 条款 |
| [Portfolio Ideas](https://github.com/Evavic44/portfolio-ideas) | MIT（© Victor Eke） | 取站点名称与 URL 作为候选；截图自行采集 | 原仓库自带截图未使用 |
| [awesome-design-systems](https://github.com/alexpate/awesome-design-systems) | The Unlicense（公有领域） | 取设计系统名称与 URL；截图自行采集 | 无署名义务，仍在此致谢 |
| [awwwards-mcp](https://github.com/INSANE0777/Awwwards-mcp) | MIT | 作为本地索引/采集工具，不随项目分发其代码 | 版本 1.13.0，研究用途安装于 `.research/tools/` |

## 一（附）、交互演示页来源（2026-10-28，8 例）

缺口补采时采了 4 个官方演示/文档站点作为 `kind: 组件演示` 案例，截图仍由本项目自行采集：

| 来源 | 许可 | 说明 |
| --- | --- | --- |
| [Flowbite](https://flowbite.com/docs/components/skeleton/) | MIT | 骨架屏组件示例页 |
| [Chakra UI](https://chakra-ui.com/docs/components/skeleton) | MIT | 骨架屏组件文档页 |
| [scroll-driven-animations.style](https://scroll-driven-animations.style/)（Bramus） | 站点内容用于演示，代码示例 MIT | 进度条 / 卡片堆叠 / 横向版块三个 CSS 滚动驱动演示；同站 3 例，属有意保留的对照 |
| [Motion](https://motion.dev/examples) | MIT | 共享元素布局动画、App Store 卡片放大、拖拽三个示例页；同站 3 例同上 |

## 二、分类体系参考（只借名称与结构，不复制描述文本）

| 来源 | 许可/性质 | 用途 |
| --- | --- | --- |
| [Ant Design](https://ant.design/) | MIT | 组件分组骨架（General / Layout / Navigation / Data Entry / Data Display / Feedback） |
| [GitHub Primer](https://primer.style/) | MIT | 6 类组件 + UI Patterns / Scenario Patterns |
| [IBM Carbon](https://carbondesignsystem.com/) | Apache-2.0 | 组件与 17 个模式、Motion 分类 |
| [GOV.UK Design System](https://design-system.service.gov.uk/) | 政府公开内容（代码 MIT） | Page structure / Styles / 组件名称 |
| [Landingfolio](https://www.landingfolio.com/library) | 商业站点，仅引用名称 | 营销版块 19 类 |
| [Float UI `sections.json`](https://github.com/MarsX-dev/floatui/blob/main/sections/sections.json) | `Other`（非标准许可） | 只借 31 个版块名称与分组结构，未复制其描述文本 |
| [Httpster](https://httpster.net/) | 商业站点，仅引用名称与计数 | 19 风格 / 29 类型，用于行业维度参考 |
| [W3C ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/) | W3C 文档许可 | 交互模式的严谨底座 |
| [NN/g 微交互](https://www.nngroup.com/articles/microinteractions/) | 引用链接 | 「trigger–feedback」判定边界 |

## 三、明确未使用

- **截图数据集**：Design2Code、WebSight、WebUI、Rico、VINS、Webzeitgeist、VisualWebBench、WebSRC、Mind2Web、WebArena、Web2Code、DesignBench 的截图/HTML 均未入库；只在调研阶段读取过 README/数据卡，结论见 `.research/dataset-sources.md`。
- **无许可清单**：developer-portfolios、web-design-card-gallery 等只作为线索参考，未复制其数据或文本。
- **第三方站点内容**：卡片中的截图版权属于各原站；本项目用于个人研究与离线浏览，不构成对原站的再授权。对外发布或商用需逐站评估。

## 四、免责声明

案例库是个人策展的观察集合，不是市场统计样本；风格、元素、版块、交互、行业标签均为整理判断，不是站方认证。外部源与补采案例（第 1 批 114 例 + 第 4 批 231 例 + 第 5 批 43 例）的标签为草稿（`tagStatus: draft`），已在卡片上标记，仍需逐条复核。`clay` 的 2 个真实站点是「软塑 3D 插画」近似，不是严格意义的 claymorphism UI。

更新日期：2026-10-28（Asia/Shanghai）。
