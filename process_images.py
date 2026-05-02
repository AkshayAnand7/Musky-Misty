import os
import re
from PIL import Image

# Configuration
src_base = r'd:\musky misty new\Perfume_'
dst_dir = r'd:\musky misty new\assets\products'

if not os.path.exists(dst_dir):
    os.makedirs(dst_dir)

categories = ['Fresh-Citrus', 'Fruity-Floral', 'Luxury_', 'Oud-Woody']

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

stats = {cat: 0 for cat in categories}
total = 0

print("Starting image conversion to WebP...")

for cat in categories:
    cat_path = os.path.join(src_base, cat)
    if not os.path.exists(cat_path):
        print(f"Warning: Category path {cat_path} not found.")
        continue
    
    for filename in os.listdir(cat_path):
        if filename.lower().endswith('.png'):
            try:
                src_path = os.path.join(cat_path, filename)
                name_no_ext = os.path.splitext(filename)[0]
                
                # We'll use the original name as the key for app.js mapping if possible, 
                # or a slugified version. Let's use slugified for web safety.
                slug = slugify(name_no_ext)
                dst_filename = f"{slug}.webp"
                dst_path = os.path.join(dst_dir, dst_filename)
                
                with Image.open(src_path) as img:
                    # Convert to RGB if necessary (WebP supports RGBA but usually we want clean)
                    if img.mode in ('RGBA', 'LA'):
                        background = Image.new('RGB', img.size, (255, 255, 255))
                        background.paste(img, mask=img.split()[-1])
                        img = background
                    
                    img.save(dst_path, 'WEBP', quality=80)
                
                stats[cat] += 1
                total += 1
                if total % 10 == 0:
                    print(f"Progress: {total} images converted...")
            except Exception as e:
                print(f"Error converting {filename}: {e}")

print("\nConversion Complete!")
for cat, count in stats.items():
    print(f" - {cat}: {count} images")
print(f"Total: {total} images saved to assets/products/")
