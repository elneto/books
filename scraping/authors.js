var request = require("request"),
  cheerio = require("cheerio"),
  p;
  
for (p=1; p<=5; p++){
  //var url = "https://www.goodreads.com/list/show/10198.Books_With_a_Goodreads_Average_Rating_of_Over_4_5?page="+p;
  var url = "https://www.goodreads.com/list/show/75146.Books_With_a_Goodreads_Average_Rating_of_4_and_Above_?page="+p;
  request(url, function (error, response, body) {
    if (!error) {
      var $ = cheerio.load(body),
        books = [];

        console.log("********* page " + $(".pagination").children(".current").text() + " ************")
        $(".authorName").children("span[itemprop='name']").each(function(i, elem) {
          books[i] = $(this).text();
          console.log(books[i]);
        });

    } else {
      console.log("We’ve encountered an error: " + error);
    }
  });  
}
  
