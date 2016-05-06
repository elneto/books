var request = require("request"),
  cheerio = require("cheerio"),
  url = "https://www.goodreads.com/list/show/10198.Books_With_a_Goodreads_Average_Rating_of_Over_4_5?page=" + 1;
  
request(url, function (error, response, body) {
  if (!error) {
    var $ = cheerio.load(body),
      books = [];

			$(".minirating").each(function(i, elem) {
			  books[i] = $(this).text();
			  split = books[i].split(" — ")
			  console.log(split[1]);
			});

  } else {
    console.log("We’ve encountered an error: " + error);
  }
});