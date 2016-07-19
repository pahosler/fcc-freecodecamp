var $ = jQuery= require('jquery')(window);
$.getJSON('https://en.wikiquote.org/w/api.php?action=query&titles=Linus%20Torvalds&prop=revisions&rvprop=content&format=json', function (data) {
  console.log(data);
});