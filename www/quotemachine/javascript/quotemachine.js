$(document).ready(function () {
  var quote = 'Mostly Harmless';
  var author = 'Douglas Adams';
  var tweet = "";
  console.log("This is a test");
 // $(img).load(function () {
    console.log("testing");
    $("#globe_container").outerWidth($("#globe").outerWidth());
    $("#quote_container").outerHeight($("#globe").outerHeight());
    $("#quote_container").outerWidth($("#globe").outerWidth());
//  });

//  $("#marvin").ready(function () {
    $("#marvin_container").outerHeight($("#marvin").outerHeight());
    $("#marvin_container").outerWidth($("#marvin").outerWidth());

// });

});
/*
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
*/
function changeQuote() {
  var pullQuote = '<i class="fa fa-quote-left fa-pull-left fa-border" aria-hidden="true"></i>';
  document.getElementById("quote").innerHTML = pullQuote + "Now is the time for all good men to come to the aid of their country";
  return;
}

function tweet() {
  return;
}