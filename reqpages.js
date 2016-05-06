var http = require("http-request");
var arrfile = require('./arr-title-au.js');
var fs = require("fs");

//console.log(arrfile.getArr);
var maxtime = 9999000; //up to 9000000 2.5 hrs to not flood of requests
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

arrfile.getArr(function(err,arr){

  if (err) {            
    console.error(err);
    return;
  }

var rand =0;
setTimeout(function(){
  //for (var i=0;i<=10000;i++){ //for testing
  for (var i in arr){
    //console.log("title: " + arr[i]["title"] + " author: " + arr[i]["author"]);
    rand=getRandomArbitrary(1000,maxtime); 
      
      var author = arr[i]["author"];
      author = encodeURIComponent(author); //appropriate for url
      author = author.replace(/\%20/gm, "+"); //changes all %20 to +
      var title = arr[i]["title"];
      if (typeof title !== "undefined"){
        title = title.split("(")[0]; //takes the left side of the title
        title = title.trim();
        title = encodeURIComponent(title); //appropriate for url
        title = title.replace(/\%20/gm, "+"); //changes all %20 to +
        title = title.replace(/\'/gm, "%27"); //replaces all ' to %27
        //console.log(title +" "+author);
      }
      else{
        title = ""
      }
    
      //rand = getRandomArbitrary(30,500);
      console.log("calling in random " + rand + " milisecs. "+title);
      var url = 'http://openlibrary.org/search.json?title='+title+'&author='+author;
      doRequest(url, title);
    

    function doRequest(url, title){

      http.get(url, function (err, res) {
        if (err) {
          console.error("******** error in title " + title + " **********")
          console.error(err);
          var rand=getRandomArbitrary(1000,maxtime);
          setTimeout(function() {
              console.error('******** Retrying '+title+' in '+rand+ ' secs');
              doRequest(url);
          }, rand);
          //return;
        }
        else if(res){
          respu = JSON.parse(res.buffer);
          //console.log("title: " + title);
          //console.log("respu: " + respu.docs);
          //console.log("title_suggest: "+respu.docs[0].title_suggest);
          if (typeof respu.docs !== "undefined"){
            if (typeof respu.docs[0] !== "undefined"){
              if (typeof respu.docs[0].oclc !== "undefined"){
                var isbn0 = respu.docs[0].oclc[0]; //first isbn from the long list

                http.get('https://openlibrary.org/api/books?bibkeys=OCLC:'+isbn0+'&jscmd=details&format=json', function(erro, resu){
                  if (erro) {
                    console.error("error in oclc " + isbn0)
                    console.error(erro);
                    return;
                  }
                  respu2 = JSON.parse(resu.buffer);

                  //console.log(respu.docs[0].title_suggest + "\t"+isbn0+"\t"+respu2['OCLC:'+isbn0].details.number_of_pages);  
                  //console.log(respu2['OCLC:'+isbn0].thumbnail_url); //image url
                  if (typeof respu2['OCLC:'+isbn0] !== "undefined"){
                    var det = respu2['OCLC:'+isbn0].details;
                    //console.log(det);
                    //console.log(det.title +"\t"+ isbn0 +"\t"+det.number_of_pages+"\t"+det.publish_date);
                    if (typeof det.authors !== "undefined")
                      author = det.authors[0].name;

                    var line = det.title +"\t"+ author +"\t"+isbn0 +"\t"+det.number_of_pages+"\t"+det.publish_date;
                    console.log(line);
                    fs.appendFile('books_so_far.txt', line+"\n", function (err) {
                        if (err){
                          console.error("err writing in file");
                          return;
                        }
                      });
                  }
                  
                  //console.log(respu2['OCLC:'+isbn0].details.number_of_pages);
                });
              }
            }
          } //first if respu.docs
        }
        
      //console.log(respu.docs[0].isbn);
      //console.log(res.code, res.headers, res.buffer.toString());
      }); //end of http.get
    } //end doRequest
  } //for
}, rand);
});


