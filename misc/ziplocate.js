var $ = require('jquery');
$.getJSON('http://ziplocate.us/api/v1/80302?callback=?', function(data) {
    console.log(data.lat);
    console.log(data.lng);
});