import os
import re
import json

# Product list from app.js (extracted for verification)
products = [
    {"no":1,"name":"Adidas"}, {"no":2,"name":"Afnan 9pm"}, {"no":3,"name":"Ameer Al Oud"}, {"no":4,"name":"Anar Musk"}, {"no":5,"name":"Armani Code"},
    {"no":6,"name":"Armani Passion"}, {"no":7,"name":"Armani Stronger with you"}, {"no":8,"name":"Aseel"}, {"no":9,"name":"Azzaro Most Wanted"}, {"no":10,"name":"Baccarat Rouge"},
    {"no":11,"name":"Bin Sheikh"}, {"no":12,"name":"Binth Shukri"}, {"no":13,"name":"Biscuit"}, {"no":14,"name":"Black Opium"}, {"no":15,"name":"Black Orchid"},
    {"no":16,"name":"Black XS"}, {"no":17,"name":"Blue De Chanel"}, {"no":18,"name":"Blue for men"}, {"no":19,"name":"Blue Lady"}, {"no":20,"name":"Bombshell"},
    {"no":21,"name":"Bright Crystal"}, {"no":22,"name":"Brown Orchid"}, {"no":23,"name":"Brut"}, {"no":24,"name":"Bvlgari Aqva"}, {"no":25,"name":"CH 212 Sexy Men"},
    {"no":26,"name":"CH Good Girl"}, {"no":27,"name":"Chanel Coco"}, {"no":28,"name":"Chelsea"}, {"no":29,"name":"Chembakam"}, {"no":30,"name":"Chocolate"},
    {"no":31,"name":"Cool water"}, {"no":32,"name":"Copper"}, {"no":33,"name":"CR 7"}, {"no":34,"name":"Creed Aventus"}, {"no":35,"name":"Creed Silver Mountain"},
    {"no":36,"name":"Dior Farenheit"}, {"no":37,"name":"Dior Poison"}, {"no":38,"name":"Dior Sauvage"}, {"no":39,"name":"Dove"}, {"no":40,"name":"Dunhill Desire"},
    {"no":41,"name":"Elanchi"}, {"no":42,"name":"Esquisite"}, {"no":43,"name":"Eternal Love"}, {"no":44,"name":"Eternity Women"}, {"no":45,"name":"Fendi"},
    {"no":46,"name":"Fogg"}, {"no":47,"name":"Fruit Punch"}, {"no":51,"name":"Gucci Rush"}, {"no":53,"name":"Hugo Boss"}, {"no":54,"name":"Ignite Oud"},
    {"no":55,"name":"Imperial Valley"}, {"no":56,"name":"Invictus"}, {"no":57,"name":"Jaguar Black"}, {"no":58,"name":"Jasmine SP"}, {"no":59,"name":"Jordan"},
    {"no":60,"name":"JPG Ultramale"}, {"no":61,"name":"Kasturi"}, {"no":66,"name":"M & M Fresh"}, {"no":67,"name":"Mariyam"}, {"no":68,"name":"Marj"},
    {"no":69,"name":"Mega Mare"}, {"no":70,"name":"Musk Abyad"}, {"no":71,"name":"Musk Rijali"}, {"no":72,"name":"Mysore Sandal"}, {"no":73,"name":"Nivea cream"},
    {"no":74,"name":"Noora"}, {"no":75,"name":"One & Only"}, {"no":76,"name":"One Man Show"}, {"no":77,"name":"One Million"}, {"no":78,"name":"Oud & Rose"},
    {"no":79,"name":"Oud Kalimath"}, {"no":80,"name":"Oud Khamrah"}, {"no":81,"name":"Oud Kuwaity"}, {"no":82,"name":"Oud Lavender"}, {"no":83,"name":"OUD Maraccuja"},
    {"no":84,"name":"Oud Premium"}, {"no":85,"name":"Oud Rasheeqa"}, {"no":86,"name":"Oud Saffron"}, {"no":87,"name":"Oud Shrivani"}, {"no":88,"name":"Oud Turkey"},
    {"no":89,"name":"Oud Wood"}, {"no":90,"name":"Paradise"}, {"no":91,"name":"Pasha De Cartier"}, {"no":92,"name":"Pistachio Musk"}, {"no":93,"name":"Purple Oud"},
    {"no":94,"name":"Royal Black"}, {"no":95,"name":"Royal Mirage"}, {"no":96,"name":"Sandal"}, {"no":97,"name":"Sandal FT"}, {"no":100,"name":"Signature"},
    {"no":101,"name":"Solid Dubai"}, {"no":102,"name":"Sweet Burberry"}, {"no":103,"name":"Swiss Musk"}, {"no":104,"name":"Tam Dao"}, {"no":107,"name":"Tuscan Leather"},
    {"no":108,"name":"Vanilla"}, {"no":109,"name":"Vanilla Candy"}, {"no":110,"name":"Versace Eros"}, {"no":111,"name":"White Oud"}
]

# Assets folder
assets_dir = r'd:\musky misty new\assets\products'
existing_webps = set(os.listdir(assets_dir))

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

missing = []
for p in products:
    # Test simple slug
    slug = slugify(p['name'])
    if f"{slug}.webp" in existing_webps:
        continue
    
    # Test brand-removed slug (like current app.js)
    clean_name = re.sub(r'^(ch|dior|chanel|gucci|jpg|tom ford|armani|louis vuitton|creed)\s+', '', p['name'].lower())
    clean_slug = slugify(clean_name)
    if f"{clean_slug}.webp" in existing_webps:
        continue
        
    # Test common filename mismatches
    if p['name'] == "CH 212 Sexy Men" and "212-sexy-men.webp" in existing_webps: continue
    if p['name'] == "One & Only" and "one-only.webp" in existing_webps: continue

    missing.append(p['name'])

print("Products missing images in assets/products/:")
for m in missing:
    print(f" - {m}")
