// Este script lee un archivo tsv con una lista de libros
// Le añade el número de páginas de los mismos
var fs = require("fs"),
		csv = require("fast-csv"),
		request = require("request"),
	  cheerio = require("cheerio");

//console.log(arrfile.getArr);
var mintime = 0, maxtime = 4335500; //up to 9999000 2.5 hrs to not flood of requests
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var stream = fs.createReadStream("bbeverpic.tsv");

//writes header
line = "title\tauthor\tavg_rating\tratings\timg\turl\tpages\n";
fs.appendFile('bbeverpicsPages.tsv', line, function (err) {
  if (err){ console.error("err writing header in file"); return err;}
});

function writePages(data, url){
	request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body);

      $('span[itemprop="numberOfPages"]').each(function(i, elem) {

      		//title	author	avg_rating	ratings	img	url
      		//data.pages = $(this).text().split(" ")[0];
      		line = data.title+"\t"+data.author+"\t"+data.avg_rating+"\t"+data.ratings+"\t"+data.img+"\t"+data.url+"\t"+$(this).text().split(" ")[0]+"\n";
          console.log(line);
          
          fs.appendFile('bbeverpicsPages.tsv', line, function (err) {
            if (err){ console.error("err writing in file"); return err;}
            maxtime -= 100; //reduces wait
            console.log("****** maxtime: " + maxtime/1000/60 + " mins");
          });
        });
  	}
		else{
			var rand=getRandomArbitrary(mintime,maxtime);
			console.error('******** Retrying '+data.title+' in '+rand/1000/60+ ' mins');
      setTimeout(writePages, rand, data, url);
		}
	});
}
 
var csvStream = csv({headers:true, delimiter:'\t'})
    .on("data", function(data){
         //console.log(data.title);
         var url = 'http://www.goodreads.com/book/show/'+data.url;
         //visit that URL
         var rand=getRandomArbitrary(mintime,maxtime);
         console.log("Visiting " + data.title+" in " + rand/1000/60 + " mins ");
         setTimeout(writePages, rand, data, url);
    })
    .on("end", function(){
         console.log("done");
    });
 
stream.pipe(csvStream);
