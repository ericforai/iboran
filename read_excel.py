import pandas as pd
import sys

try:
    file_path = 'docs/case-study/泊冉案例.xlsx'
    xl = pd.ExcelFile(file_path)
    found = False
    for sheet in xl.sheet_names:
        df = xl.parse(sheet)
        # Search for content containing "安能"
        mask = df.apply(lambda x: x.astype(str).str.contains('安能', case=False).any(), axis=1)
        if mask.any():
            print(f"\n--- Found in Sheet: {sheet} ---")
            print(df[mask].to_string())
            found = True
            
    if not found:
        print("No content found matching '安能'")
        
except Exception as e:
    print(f"Error: {e}")
