import re

with open('frontend/src/components/Heroslider.js', 'r') as f:
    content = f.read()

# Replace multi-line className="..." with className={`...`}
# Pattern: className=" followed by newline and spaces, then content, then " on its own line before >
pattern = r'className="(\n\s+.*?)\n\s+"\s*(\n\s+>)'

def replacer(match):
    inner = match.group(1)
    after = match.group(2)
    return 'className={`' + inner + '\n' + after.lstrip()

new_content = re.sub(pattern, replacer, content, flags=re.DOTALL)

with open('frontend/src/components/Heroslider.js', 'w') as f:
    f.write(new_content)

print('Done')
