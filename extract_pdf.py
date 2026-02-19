import pdfplumber

# Extract all content from the PDF
with pdfplumber.open('data/assests/images/unencrypted-geeta.pdf') as pdf:
    print(f'Total Pages: {len(pdf.pages)}\n')
    
    all_text = ""
    for i, page in enumerate(pdf.pages):
        text = page.extract_text()
        all_text += f"\n--- PAGE {i+1} ---\n{text}\n"
        print(f"Page {i+1} extracted ({len(text) if text else 0} characters)")
    
    # Save to file for review
    with open('pdf_content.txt', 'w', encoding='utf-8') as f:
        f.write(all_text)
    
    print("\n✓ PDF content saved to pdf_content.txt")
    print(f"Total extracted: {len(all_text)} characters")
