// Este script lee un archivo tsv con una lista de libros
// Le añade el número de páginas de los mismos
var fs = require("fs"),
		csv = require("fast-csv"),
		request = require("request"),
	  cheerio = require("cheerio");

var histo = [], histoDetail = [], writtenLines=0;
//console.log(arrfile.getArr);
var totalRegs = 43298;

function computeMaxTime(){
  return totalRegs/100*60000;
}

var mintime = 0, maxtime = computeMaxTime(); //157 mins = 9442000
var timeStart;
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var stream = fs.createReadStream("bbeverpic.tsv"); //file to read

//writes header
line = "title\tauthor\tavg_rating\tratings\timg\turl\tpages\n";
fs.appendFile('bbeverpicsPages.tsv', line, function (err) {
  if (err){ console.error("err writing header in file"); return err;}
});

var wstream = fs.createWriteStream('histo2.csv', {flags:'w'});

wstream.on('error', function(err) {
  console.log("ERROR on writestream:" + err);
  throw err;

});

function initHisto(){
  for (var i=0; i<= Math.round(maxtime/1000/60); i++)
    histo[i]=0;

  timeStart = process.hrtime();
  console.log(timeStart);
}

function writeHistoLine(element, index){
  wstream.write(index+","+element+"\n");
}

function writeHisto(){
  wstream.end();
  wstream = fs.createWriteStream('histo2.csv', {flags:'w'});
  histo.forEach(writeHistoLine);
  //wstream.end();
}

function writePages(data, url){
	request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body);

      $('span[itemprop="numberOfPages"]').each(function(i, elem) {

      		//title	author	avg_rating	ratings	img	url
      		//data.pages = $(this).text().split(" ")[0];
      		line = data.title+"\t"+data.author+"\t"+data.avg_rating+"\t"+data.ratings+"\t"+data.img+"\t"+data.url+"\t"+$(this).text().split(" ")[0]+"\n";
          console.log(line);
          
          fs.appendFile('bbeverpicsTotalPages.tsv', line, function (err) {
            if (err){ console.error("err writing in file"); return err;}
            --totalRegs;
            maxtime = computeMaxTime(); //reduces wait
            console.log("****** maxtime: " + maxtime/1000/60 + " mins");
            --histo[histoDetail[data.title]]; //removes from histo
            console.log(++writtenLines + " written lines")
            writeHisto();
          });
        });
  	}
		else{
			var rand=getRandomArbitrary(mintime,maxtime);
      var minute = Math.round(rand/1000/60);
      var seconds = process.hrtime(timeStart);
      ++histo[minute+seconds[0]/60]; //increases histogram bar
      histoDetail[data.title] = minute; //to remove later
			console.error('******** Retrying '+data.title+' in '+rand/1000/60+ ' mins');
      writeHisto();
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
         var minute = Math.round(rand/1000/60);
         ++histo[minute]; //increases histogram bar
         histoDetail[data.title] = minute; //to remove later
         //console.log(histoDetail);
         console.log("Visiting " + data.title+" in " + minute + " mins ");
         writeHisto();
         setTimeout(writePages, rand, data, url);
    })
    .on("end", function(){
         console.log("done");
    });

initHisto();
stream.pipe(csvStream);
