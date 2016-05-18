#Este script lee un archivo tsv con una lista de libros
#crea otro archivo con los que no tienen número de páginas
with open('bbeverpic20.tsv') as f:
	content = f.readlines()
	with open('bbeverpic20test.tsv') as f_from:
		contentFrom = f_from.readlines()
		for line in contentFrom:
			#if (line[:-8] in content):
				print(line[:-8]) #if it's there