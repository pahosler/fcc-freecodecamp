$(document).ready(function() {
    var twitch = {
        stream: ["ESL_SC2", "2GGaming", "usedpizza", "OgamingSC2", "leveluplive", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"],
        info: {
            uri: '',
            userLogo: '',
            userName: '',
            userStatus: '',
            userBroadcast: '',
            onoffS: '',
            onoffL: '',
            data: []
        },
        init: function() {
            this.cacheDom();
            this.bindEvents();
            this.getData();
        },
        cacheDom: function() {
            this.$el = $("#twitch-module");
            this.$buttonSearch = this.$el.find('.search');
            this.$buttonFeatured = this.$el.find('.featured')
            this.$input = this.$el.find('input');
            this.$ul = this.$el.find('.twitchTV');
            this.$results = this.$el.find('#results');
            this.template = this.$el.find('#twitch-template').html();
        },
        bindEvents: function() {
            this.$buttonSearch.on('click', this.searchTwitch.bind(this));
            this.$input.on('keypress', function(e) {
                if (e.which == 13) {
                    twitch.$buttonSearch.click();
                    return false;
                }
            }).bind(this);
            this.$buttonFeatured.on('click', this.getFeatured.bind(this));
        },
        render: function() {
                this.info.data.push({
                    "url": this.info.uri,
                    "title": this.info.userName,
                    "image": this.info.userLogo,
                    "status": this.info.userStatus,
                    "broadcast": this.info.userBroadcast,
                    "onoffL" : this.info.onoffL,
                    "onoffS" : this.info.onoffS
                  });
        },
        getData: function() {
            for (var stream = 0; stream < this.stream.length; stream++) {
                $.getJSON('https://api.twitch.tv/kraken/streams/' + this.stream[stream] + '?callback=?', function(data) {
                    if (data.stream === null) {
                        twitch.getOfflineInfo(data._links.channel);
                    } else {
                            twitch.info.userLogo=data.stream.channel.logo;
                            twitch.info.uri=data.stream.channel.url;
                            twitch.info.userName=data.stream.channel.display_name;
                            twitch.info.userStatus=data.stream.channel.status;
                            twitch.info.userBroadcast="On Line";
                            twitch.info.onoffS="onsmall";
                            twitch.info.onoffL="onlarge";
                        twitch.render();
                    }
                });
            }
        },
        getFeatured: function() {
          this.info.data=[];
            $.getJSON('https://api.twitch.tv/kraken/streams/featured', function(data) {
                for (var i = 0; i < data.featured.length; i++) {
                    twitch.info.userName=data.featured[i].stream.channel.display_name;
                    twitch.info.uri=data.featured[i].stream.channel.url;
                    twitch.info.userLogo=data.featured[i].stream.channel.logo;
                    twitch.info.userStatus=data.featured[i].stream.channel.status;
                    twitch.info.onoffS="onsmall";
                    twitch.info.onoffL="onlarge";
                    twitch.render();
                }
            });
        },
        searchTwitch: function() {
            $.getJSON('https://api.twitch.tv/kraken/search/streams?q=' + this.$input.val(), function(data) {
                console.log(data);
            });
        },
        getOfflineInfo: function(channels) {
            $.getJSON(channels + '?callback=?', function(data) {
                    twitch.info.userLogo=data.logo;
                    twitch.info.uri=data.url;
                    twitch.info.userName=data.display_name;
                    twitch.info.userStatus=data.status;
                    twitch.info.userBroadcast="Off Line";
                    twitch.info.onoffS="offsmall";
                    twitch.info.onoffL="offlarge";
                    twitch.render();

            });
        },
        twitchData: function() {
          return this.info.data;
        }
    }

    twitch.init();

    Vue.filter('searchFor', function (value, searchString) {

        // The first parameter to this function is the data that is to be filtered.
        // The second is the string we will be searching for.

        var result = [];

        if(!searchString){
            return value;
        }

        searchString = searchString.trim().toLowerCase();

        result = value.filter(function(item){
            if(item.title.toLowerCase().indexOf(searchString) !== -1){
                return item;
            }
        })

        // Return an array with the filtered data.

        return result;
    });

    var layout = new Vue({
        el: '#main',
        data: {
          layout: 'grid',
            searchString: "",

            // The data model. These items would normally be requested via AJAX,
            // but are hardcoded here for simplicity.

            articles: twitch.twitchData()
        },
        getFeatured:function () {
          twitch.getFeatured();
          // return false;
        }
    });

});
