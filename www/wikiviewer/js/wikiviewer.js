$(document).ready(function() {
    var results = {
        info: {
          uri: [],
          title: [],
          wiki: []
        },
        init: function() {
            this.cacheDom();
            this.bindEvents();
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
            this.$button.on('click', this.getResults.bind(this));
            this.$input.on('keypress', function(e) {
        if(e.which == 13){
           results.$button.click();
          return false;
           }
      }).bind(this);
        },
        render: function() {
          for (var i=0; i<this.info.uri.length;i++){
            var data = {
              "wikisearch": [
              {"uri": "http://en.wikipedia.org/wiki/"+encodeURIComponent(this.info.uri[i]),
              "title": this.info.title[i],
              "wiki": this.info.wiki[i]
              }
            ]};
                this.$results.append(Mustache.render(this.template, data));
          }
        },
        getResults: function() {
            var q = this.$input.val();
            this.$results.find('.box').remove();
            this.info.uri=[];
            this.info.title=[];
            this.info.wiki=[];

            $.getJSON("http://en.wikipedia.org/w/api.php?callback=?", {
                    srsearch: q,
                    action: "query",
                    list: "search",
                    format: "json"
                },
                function(data) {
                    $.each(data.query.search, function(i, item) {
                        results.info.uri.push(item.title);
                        results.info.title.push(item.title);
                        results.info.wiki.push(item.snippet);
                    });
                    results.render();

                });
        }
    };
    results.init();
})
