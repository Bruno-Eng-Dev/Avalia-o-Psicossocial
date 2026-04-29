from pathlib import Path
import re

hq = Path(r'c:/Users/Usuário/Desktop/Vite/App/src/components/Questions/LikertQuestion.jsx')
text = hq.read_text(encoding='utf-8')
text = text.replace('<span className="q-num">{number ?? id}</span>\n        ', '')
text = text.replace('const LikertQuestion = ({ id, text, number, formData, setFormData }) => {', 'const LikertQuestion = ({ id, text, formData, setFormData }) => {')
hq.write_text(text, encoding='utf-8')

hq2 = Path(r'c:/Users/Usuário/Desktop/Vite/App/src/components/Questions/QuestoesHSEIT.jsx')
text2 = hq2.read_text(encoding='utf-8')
text2 = re.sub(r'\s*number=\{\d+\}\n', '', text2)
text2 = re.sub(r'text="\d+\.\s*([^\"]+)"', r'text="\1"', text2)
hq2.write_text(text2, encoding='utf-8')
print('updated')
