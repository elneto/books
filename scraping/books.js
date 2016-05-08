var request = require("request"),
  cheerio = require("cheerio"),
  p;
  
for (p=1; p<=1; p++){
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
          img=[];

        console.log("********* page " + $(".pagination").children(".current").text() + " ************")
        $(".bookTitle").children("span[itemprop='name']").each(function(i, elem) {
          titles[i] = $(this).text();
          //console.log(titles[i]);
        });
        $(".authorName").children("span[itemprop='name']").each(function(i, elem) {
          authors[i] = $(this).text();
          //console.log(authors[i]);
        });
        $(".minirating").each(function(i, elem) {
          var ratinfo = $(this).text();
          split = ratinfo.split(" avg")
          avgrating[i] = split[0]
          split = ratinfo.split(" — ")
          numratings[i] = split[1]
          //console.log(avgrating[i] + " - " + numratings[i]);
        });
        $(".bookSmallImg").each(function(i, elem) {
          img[i] = $(this).attr('src');
          //console.log(authors[i]);
        });

        for (var i=0; i<=99; i++) //number of books per page
          console.log(titles[i]+"\t"+authors[i]+"\t"+avgrating[i]+"\t"+numratings[i]+"\t"+img[i]);

    } else {
      console.log("We’ve encountered an error: " + error);
    }
  });  
}
  
