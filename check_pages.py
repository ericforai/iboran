
import os
import re
import glob

def find_hrefs(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    hrefs = re.findall(r'href:\s*[\'"]([^\'"]+)[\'"]', content)
    return set(hrefs)

def check_path_exists(href):
    if href == '/': return True
    base_dir = 'src/app/(frontend)'
    path = href.strip('/')
    page_path = os.path.join(base_dir, path, 'page.tsx')
    if os.path.exists(page_path): return True
    dir_path = os.path.join(base_dir, path)
    if os.path.isdir(dir_path): return True
    return False

def check_page_content(page_path):
    with open(page_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    placeholders = ['TODO', 'Coming Soon', '敬请期待', '待补充', '正在建设']
    for p in placeholders:
        if p.upper() in content.upper():
            return f"Contains placeholder: {p}"
            
    if 'redirect' in content and 'import' in content:
        return "Redirect"
    
    dir_path = os.path.dirname(page_path)
    components = re.findall(r"import (\w+) from '(\./\w+)'", content)
    
    empty_components = []
    for comp_name, comp_path in components:
        comp_file = os.path.join(dir_path, comp_path.strip('./') + '.tsx')
        if os.path.exists(comp_file):
            with open(comp_file, 'r', encoding='utf-8') as cf:
                cc = cf.read()
            for p in placeholders:
                if p.upper() in cc.upper():
                    empty_components.append(f"{comp_name} ({p})")
            
            size = os.path.getsize(comp_file)
            if size < 400:
                empty_components.append(comp_name)
    
    if empty_components:
        return f"Empty components: {', '.join(empty_components)}"
        
    return None

app_dir = 'src/app/(frontend)'
all_pages = glob.glob(os.path.join(app_dir, '**/page.tsx'), recursive=True)

print("--- Scanning all frontend routes ---")
for page_path in sorted(all_pages):
    route = '/' + os.path.relpath(os.path.dirname(page_path), app_dir).replace('\\', '/')
    if route == '/.': route = '/'
    if '[' in route: continue
        
    status = check_page_content(page_path)
    if status:
        print(f"Empty/Low Content: {route} -> {status}")

solutions_hrefs = find_hrefs('src/data/solutions.ts')
products_hrefs = find_hrefs('src/data/products.ts')
all_hrefs = solutions_hrefs.union(products_hrefs)

print("\n--- Navigation Check ---")
for href in sorted(all_hrefs):
    if href in ['/solution', '/products', '/']:
        continue
    if not check_path_exists(href):
        print(f"Broken/Missing Link: {href}")
