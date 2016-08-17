$(document).ready(Function(){
  var results = {
    owapikey: '1df67249e1a1e8e26559500e9022e4c7',
    wunapikey: '77631329cd47198c',
    openweather: '',
    wunderground: 'http://api.wunderground.com/api/77631329cd47198c/geolookup/conditions/q/',
    zipcode: 10018,

  }
  var weather = {
    init: function() {
      this.cacheDom();
      this.bindEvents();
    },
    cacheDom: finction() {
      this.$el = $(".weatherapp");
      this.$location = this.$el.find('#location');
      this.$date = this.$el.find('#date');
      this.$metric = this.$el.find('#metric');
      this.$weatherImage = this.$el.find.('#weatherImage');
      this.$weather = this.$el.find('#weather');
      this.$hilo = this.$el.find('#hilo');
      this.$hum = this.$el.find('#hum');
      this.$wind = this.$el.find('#wind');
      this.$future = this.$el.find('#future');
      this.$localtemp = this.$el.find('#localtemp');
      this.$cond = this.$el.find('#cond');
      this.$day1 = this.$el.find('#day1');
      this.$day2 = this.$el.find('#day2');
      this.$tomorrow = this.$el.find('#tomorrow');
      this.$dayafter = this.$el.find('#dayafter');
      this.$button = this.$el.find('button');
      this.$zipcode = this.$el.find('#zipcode');
    },
    bindEvents: function() {
      this.$button.on('click', function(){
        zipLocate(zipCode);
      });

    },
    render: function() {

    },
  }
});
