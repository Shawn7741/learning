import xml.etree.ElementTree as ET

tree = ET.parse('sample.xml')

root = tree.getroot()

print(root.tag)

# for book in root.findall('library'):
#     title = book.findall('title').text
#     print(title)


