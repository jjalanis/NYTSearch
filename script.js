$(document).ready(function() {

    var query = "royal" ;
    var numbersRecords = 1 ;
    var startYear = 0;
    var endYear = 0;

    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "2108d73fb8d649248686f8598e87e5e4",
      'q': query,
      'sort': "newest",
      'hl': "true",
     // 'begin_date': startYear,
     // 'end_date': endYear
    });
    $.ajax({
      url: url,
      method: 'GET',
    }).then(function(result) {
      console.log(result);

      var articles = result.response.docs;
        console.log(articles);
      for (var i = 0; i < numbersRecords; i++){
          console.log("entro al for")
          console.log(articles[i]);
          var record = $("<div>");
          var title = $("<h1>").text(articles[i].headline.print_headline);
          var autor = $("<p>").text(articles[i].byline.original);
          var date = $("<p>").text(articles[i].pub_date);
          var urlpage = $("<p>").text(articles[i].web_url);
          record.append(title);
          record.append(autor);
          record.append(date);
          record.append(urlpage);
        console.log(record);
      }

   
    })





});
