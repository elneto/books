import csv
with open('bbeverpic.tsv', 'rU') as csvfile:
	spamreader = csv.reader(csvfile, dialect=csv.excel_tab)
	prev_row = ''
	prev_rating = ''
	prev_reviews = ''
	i = 0
	for row in spamreader:
		rating = row[2]
		reviews = row[3]
		if prev_rating == rating and prev_reviews == reviews:
			print str(i)+'\t'+'\t'.join(prev_row)
			print str(i)+'\t'+'\t'.join(row)
		prev_row = row
		prev_rating = rating
		prev_reviews = reviews
		i+=1
		#prev_row = row