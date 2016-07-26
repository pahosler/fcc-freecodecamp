$(document).ready(function() {
    var results = {
        info: {
          uri: [],
          title: [],
          wiki: []
        },
        init: function() {
            console.log("INIT!");
            this.cacheDom();
            this.bindEvents();
            this.addResults();
        },
        cacheDom: function() {
            this.$el = $("#search-module");
            this.$button = this.$el.find('button');
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('#wikis');
            this.$results=this.$el.find('#results');
            this.template = this.$el.find('#search-template').html();
        },
        bindEvents: function() {
            this.$button.on('click', this.addResults.bind(this));
        },
        render: function() {
          for (var i=0; i<this.info.uri.length;i++){
            var data = {
              "wikisearch": [
              {"uri": this.info.uri[i]},
              {"title": this.info.title[i]},
              {"wiki": this.info.wiki[i]}
            ]};
                this.$results.append(Mustache.render(this.template, data));
          }
        },
        addResults: function() {
            var q = this.$input.val();
            $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
                    srsearch: q,
                    action: "query",
                    list: "search",
                    format: "json"
                },
                function(data) {
                    $.each(data.query.search, function(i, item) {
                        results.info.uri.push("http://en.wikipedia.org/wiki/"+encodeURIComponent(item.title));
                        results.info.title.push(item.title);
                        results.info.wiki.push(item.snippet);
                    });
                });
                this.render();
        }
    };
    results.init();
})
