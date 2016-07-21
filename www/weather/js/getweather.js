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
  function geoPos(lat, lng) {
    this.coords = {
      latitude: lat,
      longitude: lng
    };
  }
  function yourCity(match,p1){
    console.log("HELLLLLOOOOOOO");
    console.log("match",match);
    return match;
  }
  function getHiLo(arr){
    console.log(arr);
    var str = arr[0]+"/"+arr[1];
    return str;
  }
  function getFutureDays(arr){
    var futureArr=[];
    futureArr[0] = arr[2];
    futureArr[1] = arr[4];
    return futureArr;
  }
  function getFutureImages(arr){
    var futureImages = [];
    futureImages[0] = arr[2];
    futureImages[1] = arr[4];
    return futureImages;
  }

  function weather(forecast) {
    this.location = (function (){
      var yourLocal = /([^,])+/.exec(forecast.currentobservation.name);
      return yourLocal[0]+", "+forecast.currentobservation.state;
    });
    this.date = forecast.currentobservation.Date;
    this.dewpoint = forecast.currentobservation.Dewp;
    this.humidity = forecast.currentobservation.Relh;
    this.windspeed = {
      mph : forecast.currentobservation.Winds,
      kph : Math.round(forecast.currentobservation.Winds * 1.6)
    };
    this.condition = forecast.currentobservation.Weather;
    this.weatherImage = 'http://forecast.weather.gov/newimages/large/' + forecast.currentobservation.Weatherimage;
    this.temperture = {
      F: forecast.currentobservation.Temp,
      C: Math.round((forecast.currentobservation.Temp - 32) * (5 / 9))
    };
    this.hilo = getHiLo(forecast.data.temperature);
    this.future = getFutureDays(forecast.time.startPeriodName);
    this.futureImages = getFutureImages(forecast.data.iconLink);
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
      console.log("local temp from: ", lw.temperture.F,lw.temperture.C,lw.windd(),lw.windspeed+"mph");

      $("#location").text(lw.location());
      $("#temp").bootstrapToggle({ on: lw.temperture.C, off: lw.temperture.F, size: 'large', onstyle: 'default', offstyle: 'default' });
      $("#weatherImage").attr('src',lw.weatherImage);
      $("#hum").contents().last().replaceWith(lw.humidity+"%");
      $("#wind").contents().last().replaceWith(lw.windd()+" "+lw.windspeed.mph+"mph");
      $("#cond").contents().last().replaceWith(lw.condition);
      $("#localtemp").contents().last().replaceWith(lw.temperture.F);
      $("#hilo").contents().last().replaceWith(lw.hilo);
      $("#day1").attr('src',lw.futureImages[0]);
      $("#day2").attr('src',lw.futureImages[1]);
      $("#tomorrow").contents().last().replaceWith(lw.future[0]);
      $("#dayafter").contents().last().replaceWith(lw.future[1]);

    });

  }

  //weatherData();

});
