$(document).ready(function() {
    var results = {
        info: {
          uri: [],
          wiki: [],
          title: []
        },
        init: function() {
            console.log("INIT!");
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom: function() {
            this.$el = $("#search-module");
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('#wikis');
            this.template = this.$el.find('#search-template').html();
        },
        bindEvents: function() {
            this.$button.on('click', this.addResults.bind(this));
        },
        render: function() {
            var data = {
                uri: results.info.uri,
              //  title: results.info.title,
              //  wiki: results.info.wiki,
            };
            console.log("time to render...",data);
            for (var i = 0; i < results.info.uri.length; ++i) {
                this.$ul.html(Mustache.render(this.template, data));
            }
        },
        addResults: function() {
            var q = this.$input.val();
            console.log("entered addResults...", q);

            $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
                    srsearch: q,
                    action: "query",
                    list: "search",
                    format: "json"
                },
                function(data) {
                    console.log("calling render", q);
                    $.each(data.query.search, function(i, item) {
                        results.info.uri.push(encodeURIComponent(item.title));
                        results.info.wiki.push(item.snippet);
                        results.info.title.push(item.title);
                    });
                });
                this.render();
        }
    };
    results.init();
})
