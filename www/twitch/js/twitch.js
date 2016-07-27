$(document).ready(function() {
        var twitch = {
            info: {
                uri: [],
                userLogo: [],
                userName: [],
                userStatus: []
            },
            init: function() {
                this.cacheDom();
                this.bindEvents();
            },
            cacheDom: function() {
                this.$el = $("#twitch-module");
                this.$button = this.$el.find('button');
                this.$input = this.$el.find('input');
                this.$ul = this.$el.find('.twitchTV');
                this.$results = this.$el.find('#results');
                this.template = this.$el.find('#twitch-template').html();
            },
            bindEvents: function() {
                this.$button.on('click', this.getResults.bind(this));
                this.$input.on('keypress', function(e) {
                    if (e.which == 13) {
                        results.$button.click();
                        return false;
                    }
                }).bind(this);
            },
            render: function() {
                for (var i = 0; i < this.info.uri.length; i++) {
                    var data = {
                        "twitchTV": [{
                            "uri": "http://en.wikipedia.org/wiki/" + encodeURIComponent(this.info.uri[i]),
                            "userLogo": this.info.userImage[i],
                            "userName": this.info.userName[i],
                            "userStatus": this.info.userStatus[i],
                            "future": this.info.future[i] //this doesn't exit yet
                        }]
                    };
                    this.$results.append(Mustache.render(this.template, data));
                }
            },
            getData: function() {
                $.getJSON('https://api.twitch.tv/kraken/streams/pahosler?callback=?', function(data) {
                        console.log(data);
                    }
                }

            });

    })["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
    // example JSON output (ESL_SC2)

{
    "stream": {
        "_id": 22503011104,
        "game": "StarCraft II",
        "viewers": 450,
        "created_at": "2016-07-25T15:57:28Z",
        "video_height": 720,
        "average_fps": 50,
        "delay": 0,
        "is_playlist": false,
        "_links": {
            "self": "https://api.twitch.tv/kraken/streams/esl_sc2"
        },
        "preview": {
            "small": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-80x45.jpg",
            "medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-320x180.jpg",
            "large": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-640x360.jpg",
            "template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_esl_sc2-{width}x{height}.jpg"
        },
        "channel": {
            "mature": false,
            "status": "RERUN: Strelok vs. MMA - Group A Ro16 - WCS European Premier League - StarCraft 2",
            "broadcaster_language": "en",
            "display_name": "ESL_SC2",
            "game": "StarCraft II",
            "language": "en",
            "_id": 30220059,
            "name": "esl_sc2",
            "created_at": "2012-05-02T09:59:20Z",
            "updated_at": "2016-07-27T09:32:57Z",
            "delay": null,
            "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_image-d6db9488cec97125-300x300.jpeg",
            "banner": null,
            "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-channel_offline_image-5a8657f8393c9d85-1920x1080.jpeg",
            "background": null,
            "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_sc2-profile_banner-f8295b33d1846e75-480.jpeg",
            "profile_banner_background_color": "#050506",
            "partner": true,
            "url": "https://www.twitch.tv/esl_sc2",
            "views": 58826183,
            "followers": 131430,
            "_links": {
                "self": "http://api.twitch.tv/kraken/channels/esl_sc2",
                "follows": "http://api.twitch.tv/kraken/channels/esl_sc2/follows",
                "commercial": "http://api.twitch.tv/kraken/channels/esl_sc2/commercial",
                "stream_key": "http://api.twitch.tv/kraken/channels/esl_sc2/stream_key",
                "chat": "http://api.twitch.tv/kraken/chat/esl_sc2",
                "features": "http://api.twitch.tv/kraken/channels/esl_sc2/features",
                "subscriptions": "http://api.twitch.tv/kraken/channels/esl_sc2/subscriptions",
                "editors": "http://api.twitch.tv/kraken/channels/esl_sc2/editors",
                "teams": "http://api.twitch.tv/kraken/channels/esl_sc2/teams",
                "videos": "http://api.twitch.tv/kraken/channels/esl_sc2/videos"
            }
        }
    },
    "_links": {
        "self": "https://api.twitch.tv/kraken/streams/esl_sc2",
        "channel": "https://api.twitch.tv/kraken/channels/esl_sc2"
    }
}
