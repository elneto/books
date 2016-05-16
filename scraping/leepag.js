// Este script lee un archivo tsv con una lista de libros
// Le añade el número de páginas de los mismos
var fs = require("fs"),
	csv = require("fast-csv"),
	request = require("request"),
  	cheerio = require("cheerio");

var stream = fs.createReadStream("bbeverpic20.tsv");
 
var csvStream = csv({headers:true, delimiter:'\t'})
    .on("data", function(data){
         //console.log(data.title);
         var url = 'http://www.goodreads.com/book/show/'+data.url;
         //visit that URL
         request(url, function (error, response, body) {
		    if (!error) {
		      var $ = cheerio.load(body);

		      $('span[itemprop="numberOfPages"]').each(function(i, elem) {
		          console.log(data.title + " " +$(this).text());
		        });
		  	}
		  	else{
		  		console.log("We’ve encountered an error at request: " + error);
		  	}
		})
    })
    .on("end", function(){
         console.log("done");
    });
 
stream.pipe(csvStream);
