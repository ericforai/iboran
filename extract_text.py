
import sys
import os

try:
    import pdfplumber
    def extract_text(path):
        text = ""
        with pdfplumber.open(path) as pdf:
            for page in pdf.pages:
                text += page.extract_text() + "\n"
        return text
except ImportError:
    print("pdfplumber not found, trying pypdf")
    try:
        from pypdf import PdfReader
        def extract_text(path):
            reader = PdfReader(path)
            text = ""
            for page in reader.pages:
                text += page.extract_text() + "\n"
            return text
    except ImportError:
        print("No suitable PDF library found. Please install pdfplumber or pypdf.")
        sys.exit(1)

if len(sys.argv) < 2:
    print("Usage: python3 extract_text.py <pdf_path>")
    sys.exit(1)

pdf_path = sys.argv[1]
if not os.path.exists(pdf_path):
    print(f"File not found: {pdf_path}")
    sys.exit(1)

content = extract_text(pdf_path)
print(content)
