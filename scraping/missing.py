with open('bbeverpic10.tsv', 'rU') as f:
	content = f.readlines()
with open('bbeverpic10pages.tsv', 'rU') as f_page:
	content_page = f_page.readlines()

#trims list
dic = {line[:32]: line for line in content}
#print dic

content = [line[:32] for line in content]
content_page = [line[:32] for line in content_page]

dif = set(content).difference(set(content_page))
for elem in dif:
	print dic[elem]
