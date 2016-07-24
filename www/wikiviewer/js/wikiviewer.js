(function() {
    var results = {
        data: '',
        init: function() {
            //called from outside thing
            console.log("INIT!");
            this.cacheDom();
            this.bindEvents();
            //this.addResults();
        },
        cacheDom: function() {
            //example only
            this.$el = $("#search-module");
            this.$button = this.$el.find('#search');
            this.$input = this.$el.find('input');
            this.$results = this.$el.find('#results');
            this.template = this.$el.find('#search-template').html();
            console.log("DOM cached!");
        },
        bindEvents: function() {
            //      this.$button.on('click', this.addThing.bind(this));
            console.log("Waiting to search!");
            this.$button.on('click',this.doit("Hello World!"));//.bind(this));
        },
        render: function(data) {
            console.log("HELLO WORLD!");
            console.log(data);
            // if (data === '') {
            //     return;
            // }
            // this.$results.empty();
            // $.each(data.query.search, function(i, item) {
            //     this.$results.html(Mustache.render(this.template, item));
            // });
            this.$results.html(Mustache.render(this.template,data));
        },
        addResults: function() {
            console.log("Calling addResults!");
            var q = this.$input.val().bind(this);
            console.log(q);
            $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
                    srsearch: q,
                    action: "query",
                    list: "search",
                    format: "json"
                }),
                this.render(this.data);
        },
        doit: function(str) {
          console.log("Full of searchyness!!!",str);
          console.log(this.$input.val());
          this.$input.val('');
          this.render(this.$input.val());
        }
    };
    results.init();

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
})()
