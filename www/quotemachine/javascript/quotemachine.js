
/**/

/**/

$(document).ready(function () {
  var quote = 'Mostly Harmless';
  var author = "Hitchhiker's Guide to the Galaxy";
  var pullQuote = '<p id="quote"><i class="fa fa-quote-left fa-1x fa-pull-left fa-border" aria-hidden="true"></i>';
  var quoteDiv = '';
  var tweet = '';
  /*
   $("#globe_container").outerWidth($("#globe").outerWidth());
      $("#quote_container").outerHeight($("#globe").outerHeight());
      $("#quote_container").outerWidth($("#globe").outerWidth());
      $("#marvin_container").outerHeight($("#marvin").outerHeight());
      $("#marvin_container").outerWidth($("#marvin").outerWidth());
  */


  function quoteReady(newQuote) {

    if (newQuote.quote.length > 0) {
      $("#quote").replaceWith(pullQuote + newQuote.quote + '</p>');
      $("#author").html('<p id="author" class="text-right">-'+ author + '</p>');

    }
  }

  $("#btnQ").click(function () {
    $("#quote_container").scrollTop(0);
    WikiquoteApi.openSearch(author,
      function (results) {
        author = results[0];
        //alert(author);
        //Get Quote
        WikiquoteApi.getRandomQuote(author,
          function (newQuote) { quoteReady(newQuote); },
          function (msg) {
            alert(msg);
          }
        );
      },
      function (msg) {
        alert(msg);
      }
    );
    return false;
  });

});

function changeQuote() {
  var pullQuote = '<i class="fa fa-quote-left fa-pull-left fa-border" aria-hidden="true"></i>';
  document.getElementById("quote").innerHTML = pullQuote + "Now is the time for all good men to come to the aid of their country";
  return;
}

function tweet() {
  return;
}



function getImgHW() {
  var h = document.getElementById("globe").height;
  var w = document.getElementById("globe").width;
  document.getElementById("globe_container").style.width = w + "px";
  h = document.getElementById("globe").height;
  w = document.getElementById("globe").width;
  document.getElementById("globe_container")
  document.getElementById("quote_container").style.height = h + "px";
  document.getElementById("quote_container").style.width = w + "px";
  h = document.getElementById("marvin").height;
  w = document.getElementById("marvin").width;
  document.getElementById("marvin_container").style.height = h + "px";
  document.getElementById("marvin_container").style.width = w + "px";
  return;
}
