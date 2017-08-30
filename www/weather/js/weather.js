var weather = {
  app: {
    city: null,
    current: {},
    date: null,
    forecast: [],
    forecastRange: [],
    forecastURL: null,
    future1: {},
    future2: {},
    humidity: null,
    lat: null,
    lng: null,
    metric: false,
    noaa: "https://api.weather.gov/points/",
    state: null,
    temp: null,
    wind: null
  },
  init: function() {
    this.cacheDOM();
    this.bindEvents();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.setLocation);
    } else {
      alert("geolocation not supported");
    }
  },
  cacheDOM: function() {
    this.$el = $("#main");
    this.$app = {
      location: this.$el.find('#location'),
      date: this.$el.find('#date'),
      tempConvert: this.$el.find('.convert'),
      temp: this.$el.find('#localtemp'),
      conditions: this.$el.find('#cond'),
      weatherImage: this.$el.find('#weatherImage'),
      wind: this.$el.find('#wind'),
      cf: this.$el.find('#cf'),
      2: this.$el.find('#2'),
      3: this.$el.find('#3'),
      4: this.$el.find('#4'),
      5: this.$el.find('#5'),
      6: this.$el.find('#6'),
      7: this.$el.find('#7'),
      8: this.$el.find('#8'),
      9: this.$el.find('#9'),
      10: this.$el.find('#10'),
      11: this.$el.find('#11'),
      12: this.$el.find('#12'),
      13: this.$el.find('#13'),
      14: this.$el.find('#14'),
      title2: this.$el.find('#title2'),
      title3: this.$el.find('#title3'),
      title4: this.$el.find('#title4'),
      title5: this.$el.find('#title5'),
      title6: this.$el.find('#title6'),
      title7: this.$el.find('#title7'),
      title8: this.$el.find('#title8'),
      title9: this.$el.find('#title9'),
      title10: this.$el.find('#title10'),
      title11: this.$el.find('#title11'),
      title12: this.$el.find('#title12'),
      title13: this.$el.find('#title13'),
      title14: this.$el.find('#title14'),
    }
    this.$future1 = this.$el.find('#tomorrow');
    this.$future2 = this.$el.find('#dayafter');
    this.$image1 = this.$el.find('#day1');
    this.$image2 = this.$el.find('#day2');
  },
  bindEvents: function() {
    this.$app.tempConvert.on("click", function() {
      if (!weather.app.metric){
        weather.$app.tempConvert.contents().last().replaceWith('C');
        weather.$app.temp.contents().first().replaceWith(`${Math.floor((weather.app.current.temperature -32) *(5/9))}&deg;`)
        weather.app.metric = true;
      } else {
        weather.$app.tempConvert.contents().last().replaceWith('F');
        weather.$app.temp.contents().first().replaceWith(`${weather.app.current.temperature}&deg;`);
        weather.app.metric = false;
      }

    });
  },
  setLocation: function(position) {
    weather.app.lat = position.coords.latitude;
    weather.app.lng = position.coords.longitude;
    weather.getLocationData(weather.app.lat, weather.app.lng);
  },
  getLocationData: function(lat, lng) {
    $.getJSON(this.app.noaa + lat + "," + lng, function() {
      console.log("success");
    }).done(function(data){
      weather.app.city = data.properties.relativeLocation.properties.city;
      weather.app.state = data.properties.relativeLocation.properties.state;
      weather.app.date = new Date().toDateString();
      weather.app.forecastURL = data.properties.forecast;
      weather.getForecast(lat, lng);
    });
  },
  getForecast: function(lat, lng) {
    $.getJSON(this.app.forecastURL, function() {
      console.log("success");
    }).done(function(data) {
      weather.app.forecast = data.properties.periods.map(data => data);
      weather.app.current = weather.app.forecast[0];
      weather.render();
    });
  },
  render: function(){
    this.$app.location.contents().last().replaceWith(`${weather.app.city}, ${weather.app.state}`);
    this.$app.date.contents().last().replaceWith(`${weather.app.date}`);
    this.$app.temp.contents().first().replaceWith(`${weather.app.current.temperature}&deg;`);
    this.$app.conditions.contents().first().replaceWith(`${weather.app.current.shortForecast}`);
    this.$app.weatherImage.attr("src", weather.app.current.icon);
    this.$future1.contents().last().replaceWith(`${weather.app.future1.name}`);
    this.$future2.contents().last().replaceWith(`${weather.app.future2.name}`);
    this.$app.wind.contents().last().replaceWith(`${weather.app.current.windDirection} ${weather.app.current.windSpeed}`);
    weather.app.forecast.forEach((day,i) => {
      if(i > 1){
        weather.$app[i].attr('src',day.icon);
        weather.$app['title'+i.toString()].contents().first().replaceWith(`${day.name}`);
      }
    });
  }
};

$(document).ready(function() {
  weather.init()
});
