var request = require("request"),
  cheerio = require("cheerio"),
  fs = require("fs"),
  p;
  
for (p=1; p<=445; p++){
  //var url = "https://www.goodreads.com/list/show/10198.Books_With_a_Goodreads_Average_Rating_of_Over_4_5?page="+p;
  //var url = "https://www.goodreads.com/list/show/75146.Books_With_a_Goodreads_Average_Rating_of_4_and_Above_?page="+p;
  var url = "https://www.goodreads.com/list/show/1.Best_Books_Ever?page="+p;
  request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body),
          titles = [],
          authors = [],
          avgrating = [],
          numratings = [], 
          img=[], link=[], desc=[];

        console.log("********* page " + $(".pagination").children(".current").text() + " ************")
        $(".bookTitle").children("span[itemprop='name']").each(function(i, elem) {
          titles[i] = $(this).text();
        });
        $(".authorName").children("span[itemprop='name']").each(function(i, elem) {
          authors[i] = $(this).text();
        });
        $(".minirating").each(function(i, elem) {
          var ratinfo = $(this).text();
          split = ratinfo.split(" avg")
          avgrating[i] = split[0]
          split = ratinfo.split(" — ")
          numratings[i] = split[1]
        });
        $(".bookSmallImg").each(function(i, elem) {
          img[i] = $(this).attr('src');
        });
        $(".bookTitle").each(function(i, elem) {
          link[i] = $(this).attr('href');
        });

        var line = "";
        for (var i=0; i<=99; i++){ //number of books per page
          line = titles[i]+"\t"+authors[i]+"\t"+avgrating[i]+"\t"+numratings[i]+"\t"+img[i]+"\t"+link[i]+"\n";
          fs.appendFile('bbeverpicsf.tsv', line, function (err) {
            if (err){
              console.error("err writing in file");
              return;
            }
          });
          
        } 
          

    } else {
      console.log("We’ve encountered an error: " + error);
    }
  });  
}
  
