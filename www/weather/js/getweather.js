var lat = '';
var lng = '';
var weatherURL = '';
var temp = '';
var conditions = '';
var defaultZip = '10018'; //Hell's Kitchen New York City
var zipCode = defaultZip;
var imperial = true;
$(document).ready(function() {

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(weatherData);
    } else {
        alert("geolocation not supported");
        zipLocate(zipCode);
    }

    function getHiLo(arr,imperial) {
        var str;
        (imperial) ? str = (arr[0] + "&deg;/" + arr[1] + "&deg;"): str = (Math.round((arr[0] - 32) * (5 / 9))) + "&deg;/" + (Math.round((arr[1] - 32) * (5 / 9))) + "&deg;";
        return str;
    }

    function getFutureDays(arr) {
        var futureArr = [];
        futureArr[0] = arr[1];
        futureArr[1] = arr[3];
        return futureArr;
    }

    function getFutureImages(arr) {
        var futureImages = [];
        futureImages[0] = arr[1];
        futureImages[1] = arr[3];
        return futureImages;
    }

    function weather(forecast) {
        this.location = (function() {
            var yourLocal = /([^,])+/.exec(forecast.currentobservation.name);
            return yourLocal[0] + ", " + forecast.currentobservation.state;
        });
        this.date = forecast.currentobservation.Date;
        this.dewpoint = forecast.currentobservation.Dewp;
        this.humidity = forecast.currentobservation.Relh;
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
        this.hilo = {
          F: getHiLo(forecast.data.temperature,true),
          C: getHiLo(forecast.data.temperature,false)
        };
        this.future = getFutureDays(forecast.time.startPeriodName);
        this.futureImages = getFutureImages(forecast.data.iconLink);
        this.windd = (function() {
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
        $.getJSON('https://ziplocate.us/api/v1/' + zipCode + '?callback=?', function(data) {
            position.coords.latitude = data.lat;
            position.coords.longitude = data.lng;
            weatherData(position);
        });
    }

    function weatherData(position) {
        lat = position.coords.latitude;
        lng = position.coords.longitude;

        $.getJSON("http://forecast.weather.gov/MapClick.php?lat=" + lat + "&lon=" + lng + "&FcstType=json", function(forecast) {
            var lw = new weather(forecast);
            $("#imperial").click(function() {
                imperial = true;
                drawScreen(imperial);
            });
            $("#metric").click(function() {
                imperial = false;
                drawScreen(imperial);
            });
            function drawScreen(imperial) {
                $("#location").contents().last().replaceWith(lw.location());
                $("#date").contents().last().replaceWith(lw.date);
                $("#weatherImage").attr('src', lw.weatherImage);
                $("#hum").contents().last().replaceWith(" " + lw.humidity + "%");
                if(imperial){
                $("#wind").contents().last().replaceWith(" " + lw.windd() + " " + lw.windspeed.mph + "mph");
                $("#localtemp").contents().last().replaceWith(lw.temperture.F + "&deg;");
                $("#hilo").contents().last().replaceWith(" " + lw.hilo.F);
              }else {
                $("#wind").contents().last().replaceWith(" " + lw.windd() + " " + lw.windspeed.kph + "kph");
                $("#localtemp").contents().last().replaceWith(lw.temperture.C + "&deg;");
                $("#hilo").contents().last().replaceWith(" " + lw.hilo.C);
              }
                $("#cond").contents().last().replaceWith(lw.condition);

                $("#day1").attr('src', lw.futureImages[0]);
                $("#day2").attr('src', lw.futureImages[1]);
                $("#tomorrow").contents().last().replaceWith(lw.future[0]);
                $("#dayafter").contents().last().replaceWith(lw.future[1]);
            }
            drawScreen(imperial);
            $("button").click(function() {
                zipCode = ($("#zipcode").val());
                zipLocate(zipCode);
            });

        });

    }

    //weatherData();

});
