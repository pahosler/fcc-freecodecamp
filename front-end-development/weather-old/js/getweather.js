var lat = '';
var lng = '';
var weatherURL = '';
var temp = '';
var conditions = '';
var defaultZip = '10018'; //Hell's Kitchen New York City
var zipCode = defaultZip;
$(document).ready(function () {

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(weatherData);
  } else {
    alert("geolocation not supported");
    zipLocate(zipCode);
  }

  $("button").click(function () {
    console.log("testme!");
    zipCode = ($("#zipcode").val());
    //alert(zipCode);
    zipLocate(zipCode);
  });

  $("zipcode").keyup(function () {
    if (event.keyCode == 13) {
      alert("you pressed enter!");

      $("button").click(function () {
        zipCode = ($("#zipcode").val());
        //alert(zipCode);
        zipLocate(zipCode.trim());
      });
      /*
      alert("you pressed enter!");
      zipCode = ($("#zipcode").val());
      //alert(zipCode);
      zipLocate(zipCode.trim());*/
    }
  });

  function geoPos(lat, lng) {
    this.coords = {
      latitude: lat,
      longitude: lng
    };
  }

  function weather(forecast) {
    this.location = forecast.productionCenter;
    this.date = forecast.currentobservation.Date;
    this.dewpoint = forecast.currentobservation.Dewp;
    this.humidity = forecast.currentobservation.Rehl;
    this.windspeed = {
      mph: forecast.currentobservation.Winds,
      kph: Math.round(forecast.currentobservation.Winds * 1.6)
    };
    this.condition = forecast.currentobservation.Weather;
    this.weatherImage = 'http://forecast.weather.gov/newimages/large/' + forecast.currentobservation.Weatherimage;
    this.temperture = {
      F: forecast.currentobservation.Temp,
      C: Math.round((forecast.currentobservation.Temp - 32) * (5 / 9))
    };
    this.windd = (function () {
      var wind = forecast.currentobservation.Windd;
      if (wind > 0 && wind < 90) {
        return "NE";
      } else if (wind == 90) {
        return "E";
      } else if (wind > 90 && wind < 180) {
        return "SE";
      } else if (wind == 180) {
        return "S";
      } else if (wind > 180 && wind < 270) {
        return "SW";
      } else if (wind == 270) {
        return "W";
      } else if (wind > 270 && wind < 360) {
        return "NW";
      } else {
        return "N";
      }

    });
  }

  function zipLocate(zipCode) {
    var position = new geoPos;
    /*if (zipCode == '') {
      zipCode = defaultZip;
    }*/
    alert("zipLocate wants:" + zipCode);
    $.getJSON('https://ziplocate.us/api/v1/' + zipCode + '?callback=?', function (data) {
      position.coords.latitude = data.lat;
      position.coords.longitude = data.lng;
      console.log(position.coords.latitude, position.coords.longitude);
      weatherData(position);
    });
  }

  function weatherData(position) {
    console.log(position);
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log(lat, lng);

    $.getJSON("http://forecast.weather.gov/MapClick.php?lat=" + lat + "&lon=" + lng + "&FcstType=json", function (forecast) {
      var lw = new weather(forecast);
      //lw(forecast);
      console.log("local temp from: ", lw.temperture.F, lw.temperture.C, lw.windd(), lw.windspeed.mph + "mph");

      $("#forecast").html("<p>" + lw.location + "<br>" + lw.condition);
      $("#temp").bootstrapToggle({ on: lw.temperture.C, off: lw.temperture.F, size: 'large', onstyle: 'default', offstyle: 'default' });
      $("#weatherImage").attr('src', lw.weatherImage);

    });

  }

  //weatherData();

});