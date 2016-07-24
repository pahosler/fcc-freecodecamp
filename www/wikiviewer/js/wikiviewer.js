$(document).ready(function() {
  //  function() {
        var results = {
            // things: ['thing1', 'thing2'];
            init: function() {
                //called from outside thing
                this.cacheDom();
                this.bindEvents();
                this.addResults();
            },
            cacheDom: function() {
                //example only
                this.$el = $("#search-module");
                this.$button = this.$el.find('button');
                this.$input = this.$el.find('input');
                this.$results = this.$el.find('#results');
                this.template = this.$el.find('#searchwiki').html();
            },
            bindEvents: function() {
          //      this.$button.on('click', this.addThing.bind(this));
                this.$input.keyup(this.addResults.bind(this));
            },
            render: function() {
              var data = [...arguments];
              console.log(data[0]);
              if(data[0] === 'undefined') {
                this.render();
              }
                this.$results.empty();
                $.each(data[0].query.search, function(i, item) {
                    this.$results.html(Mustache.render(this.template, item));
                });
            },
            addResults: function() {
                var q = this.$input.val();
                $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
                        srsearch: q,
                        action: "query",
                        list: "search",
                        format: "json"
                    }),
                    this.render();
            }
        };
        results.init();
  //  }();

    // $("#searchterm").keyup(function(e) {
    //     var q = $("#searchterm").val();
    //     $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
    //             srsearch: q,
    //             action: "query",
    //             list: "search",
    //             format: "json"
    //         },
    //         function(data) {
    //             $("#results").empty();
    //             $("#results").append("<p>Results for <b>" + q + "</b></p>");
    //             $.each(data.query.search, function(i, item) {
    //                 $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'>" + item.title + "</a><br>" + item.snippet + "<br><br></div>");
    //             });
    //         });
    // });
});
