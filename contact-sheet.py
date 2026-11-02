"""检查截图是否可用：生成标有案例编号的缩略图联系表。

用法：python contact-sheet.py；补充视图使用 python contact-sheet.py --views。
只组合本地截图，不访问网络。
"""
import json
import sys
from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parent  # 所有文件相对脚本，避免启动目录影响结果。
views_mode = "--views" in sys.argv
cases = json.loads((root / ("case-views.json" if views_mode else "cases.json")).read_text(encoding="utf-8"))
files = [root / case["screenshot"] if views_mode else root / "screenshots" / f"{case['id']}.jpg" for case in cases]
files = [file for file in files if file.exists()]  # 未完成的案例暂不出现在检查表里。
batch, tile_height = (16, 355) if views_mode else (12, 280)
for offset in range(0, len(files), batch):
    group = files[offset:offset + batch]
    sheet = Image.new("RGB", (1440, ((len(group) + 3) // 4) * tile_height), "#e8e8e8")
    draw = ImageDraw.Draw(sheet)
    for index, file in enumerate(group):
        with Image.open(file) as original:
            thumbnail = original.convert("RGB")
        thumbnail.thumbnail((352, tile_height - 35))  # 保留完整画面比例，避免隐藏加载遮罩或错误页。
        x, y = (index % 4) * 360, (index // 4) * tile_height
        sheet.paste(thumbnail, (x, y + 25))
        draw.text((x + 5, y + 7), file.stem, fill="#111111")
    prefix = "qa-view-contact" if views_mode else "qa-contact"
    target = root / f"{prefix}-{offset // batch + 1}.jpg"
    sheet.save(target, quality=88)
    print(target)
