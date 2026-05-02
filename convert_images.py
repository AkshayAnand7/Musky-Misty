from PIL import Image
import os, glob, re

src_dir = r'd:\musky misty new\Perfume_\Fresh-Citrus'
dst_dir = r'd:\musky misty new\products'

count = 0
for png_file in glob.glob(os.path.join(src_dir, '*.png')):
    name = os.path.splitext(os.path.basename(png_file))[0]
    slug = re.sub(r'[^a-z0-9]+', '-', name.lower()).strip('-')
    webp_path = os.path.join(dst_dir, slug + '.webp')
    img = Image.open(png_file)
    img.save(webp_path, 'WEBP', quality=85)
    size = os.path.getsize(webp_path)
    print(f"Converted: {name} -> {slug}.webp ({size} bytes)")
    count += 1

print(f"\nDone! Converted {count} images.")
