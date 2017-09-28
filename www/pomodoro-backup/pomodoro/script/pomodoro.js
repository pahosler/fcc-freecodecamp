var MakeTimer = function() {
  var t = {
    start: function(func, howLong) {
      this.func = func;
      this.howLong = howLong;
      this.timer = setTimeout(function() {
        func();
      }, howLong);
    }
  };
  return {
    start: t.start
  };
};

var pomodoro = {
  default: {
    work: 25,
    break: 5,
    interval: 4,
    alarm: 0,
    pause: 0,
    MINUTE: 60,
    minute: 60,
    test: 25,
    tick: 1000 // one second
  },
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.build();
  },
  build: function() {
    this.tomato = new MakeTimer();
    this.audio = new Audio();
    this.audio[0] = new Audio(
      "https://raw.githubusercontent.com/pahosler/freecodecamp/master/www/images/keepworking.wav"
    );
    this.audio[1] = new Audio(
      "https://raw.githubusercontent.com/pahosler/freecodecamp/master/www/images/getcoffee.wav"
    );
    // position defaults
    this.worktimePosition = this.default.work;
    this.breaktimePosition = this.default.break;
    this.intervalPosition = this.default.interval;
    this.default.alarm = 0;
    this.$fareset.css("transform", "rotate(0deg)");
    this.$worktext.css("background-color", "#ddaaaa");
    this.$breaktext.css("background-color", "#ddaaaa")
    // place to save positions
    this.worktimeSave = this.worktimePosition;
    this.breaktimeSave = this.breaktimePosition;
    this.intervalSave = this.intervalPosition;
    // init slider values
    this.$workslider.val(this.default.work).change();
    this.$breakslider.val(this.default.break).change();
    this.$intervalslider.val(this.default.interval).change();
    // set text input values
    this.$worktext.val(Math.floor(this.default.work));
    this.$breaktext.val(Math.floor(this.default.break));
    this.$intervaltext.val(this.default.interval);
    // display sliders
    this.$workslider.rangeslider({
      polyfill: false
    });
    this.$breakslider.rangeslider({
      polyfill: false
    });
    this.$intervalslider.rangeslider({
      polyfill: false
    });
  },
  cacheDom: function() {
    this.$el = $("#pomodoro");
    // dom sliders
    this.$workslider = this.$el.find("#work");
    this.$breakslider = this.$el.find("#break");
    this.$intervalslider = this.$el.find("#interval");
    // dom buttons
    this.$start = this.$el.find("#start");
    this.$stop = this.$el.find("#stop");
    this.$reset = this.$el.find("#reset");
    this.$fareset = this.$el.find("#fa-reset");
    this.$pause = this.$el.find("#pause");
    this.$info = this.$el.find("#info");
    this.$flip = this.$el.find("#flip");
    this.$close = this.$el.find("#close");
    this.$back = this.$el.find(".back");
    this.$settings = this.$el.find("#settings");
    this.$about = this.$el.find("#about");
    this.$abouttext = this.$el.find("#abouttext");
    this.$settingspage = this.$el.find("#settingspage");
    this.$mute = this.$el.find("#mute");
    this.$testtick = this.$el.find("#testtick");

    // dom input text
    this.$worktext = this.$el.find("#work-text");
    this.$breaktext = this.$el.find("#break-text");
    this.$intervaltext = this.$el.find("#interval-text");
  },
  bindEvents: function() {
    this.$reset.on("click", function() {
      clearTimeout(pomodoro.tomato.timer);
      pomodoro.$start.removeAttr("disabled");
      pomodoro.$start.attr("class", "enabled");
      pomodoro.$stop.attr("class", "notpaused");
      pomodoro.default.pause = 0;
      delete pomodoro.tomato.timer;
      pomodoro.build();
    });
    this.$workslider.on(
      "input",
      pomodoro.$workslider[(type = "range")],
      function(e) {
        pomodoro.worktimePosition = e.currentTarget.value;
        pomodoro.$worktext.val(Math.floor(e.currentTarget.value));
      }
    );
    this.$breakslider.on(
      "input",
      pomodoro.$breakslider[(type = "range")],
      function(e) {
        pomodoro.breaktimePosition = e.currentTarget.value;
        pomodoro.$breaktext.val(Math.floor(e.currentTarget.value));
      }
    );
    this.$intervalslider.on(
      "input",
      pomodoro.$intervalslider[(type = "range")],
      function(e) {
        this.intervalPosition = e.currentTarget.value;
        pomodoro.$intervaltext.val(e.currentTarget.value);
      }
    );
    this.$start.on("click", function() {
      pomodoro.worktimeSave = pomodoro.worktimePosition;
      pomodoro.breaktimeSave = pomodoro.breaktimePosition;
      pomodoro.intervalPosition = parseInt(pomodoro.$intervaltext.val());
      pomodoro.start.work();
    });
    this.$stop.on("click", function() {
      ++pomodoro.default.pause;
      if (pomodoro.default.pause % 2 === 1) {
        clearTimeout(pomodoro.tomato.timer);
        pomodoro.$stop.attr("class", "paused");
      } else if (pomodoro.worktimePosition <= pomodoro.worktimeSave) {
        pomodoro.$stop.attr("class", "notpaused");
        pomodoro.start.work();
      } else {
        pomodoro.start.break();
      }
    });
    this.$info.on("click", function() {
      pomodoro.$back.css("visibility", "visible");
      pomodoro.$abouttext.css("visibility", "visible")
      $("#flip").flip({
        trigger: 'manual'
      });
      $("#flip").flip(true);
    });
    this.$close.on("click", function() {
      $("#flip").flip(false, function() {
        pomodoro.$back.css("visibility", "hidden")
        pomodoro.$abouttext.css("visibility", "hidden");
        pomodoro.$settingspage.css("visibility", "hidden");
      });
      console.log(`mute ${!pomodoro.$mute.prop("checked") ? "is not checked": "is checked"}`)
    });
    this.$about.on("click", function() {
      pomodoro.$settingspage.css("visibility", "hidden");
      pomodoro.$abouttext.css("visibility", "visible");
    });
    this.$settings.on("click", function() {
      pomodoro.$abouttext.css("visibility", "hidden");
      pomodoro.$settingspage.css("visibility", "visible")
    });
  },
  updateWorkLine: function(value) {
    this.$workslider.val(value).change();
  },
  updateBreakLine: function(value) {
    this.$breakslider.val(value).change();
  },
  updateIntervalLine: function(value) {
    this.$intervalslider.val(value).change();
  },
  start: {
    work: function() {
      if (
        pomodoro.default.alarm === 0 &&
        parseInt(pomodoro.$worktext.val()) !== 0 && !pomodoro.$mute.prop("checked")
      ) {
        pomodoro.audio[0].play();
        pomodoro.default.alarm = 1;
      }
      if (
        parseInt(pomodoro.$worktext.val()) === 1 &&
        parseInt(pomodoro.$intervaltext.val()) === 1
      ) {
        pomodoro.breaktimePosition = 0;
        pomodoro.updateBreakLine(pomodoro.breaktimePosition);
      }
      pomodoro.$start.attr("disabled", "disabled");
      pomodoro.$start.attr("class", "disabled");
      pomodoro.work(pomodoro.start.work);
      pomodoro.updateWorkLine(pomodoro.worktimePosition);
      if (pomodoro.$worktext.val() <= 0) {
        clearTimeout(pomodoro.tomato.timer);
        pomodoro.default.alarm = 0;
        pomodoro.start.break();
      }
    },
    break: function() {
      if (pomodoro.default.alarm === 0 && !pomodoro.$mute.prop("checked")) {
        pomodoro.audio[1].play();
        pomodoro.default.alarm = 1;
      }
      pomodoro.break(pomodoro.start.break);
      pomodoro.updateBreakLine(pomodoro.breaktimePosition);
      if (parseInt(pomodoro.breaktimePosition) <= 0) {
        clearTimeout(pomodoro.tomato.timer);
        pomodoro.updateIntervalLine(--pomodoro.intervalPosition);
        if (parseInt(pomodoro.intervalPosition) > 0) {
          pomodoro.default.alarm = 0;
          pomodoro.updateWorkLine(pomodoro.worktimeSave);
          pomodoro.updateBreakLine(pomodoro.breaktimeSave);
          pomodoro.start.work();
        } else {
          clearTimeout(pomodoro.tomato.timer);
          pomodoro.default.alarm = 0;
          pomodoro.$start.removeAttr("disabled");
          pomodoro.$start.attr("class", "enabled");
        }
      }
    }
  },
  work: function(callback) {
    pomodoro.tomato.start(function() {
      pomodoro.default.minute--;
      if (pomodoro.default.minute === 0) {
        pomodoro.default.minute = pomodoro.default.MINUTE;
        pomodoro.worktimePosition--;
      }
      pomodoro.$worktext.css("background-color", `${pomodoro.default.minute %2 === 0 ? '#ddaaaa' : '#11aa44'}`);
      pomodoro.$fareset.css(
        "transform",
        "rotate(" + pomodoro.default.minute * 60 + "deg)"
      );

      callback();
    }, !pomodoro.$testtick.prop("checked") ? pomodoro.default.tick : pomodoro.default.test);
  },
  break: function(callback) {
    pomodoro.tomato.start(function() {
      pomodoro.default.minute--;
      if (pomodoro.default.minute === 0) {
        pomodoro.default.minute = pomodoro.default.MINUTE;
        pomodoro.breaktimePosition--;
      }
      pomodoro.$breaktext.css("background-color", `${pomodoro.default.minute %2 === 0 ? '#ddaaaa' : '#11aa44'}`);
      pomodoro.$fareset.css(
        "transform",
        "rotate(" + pomodoro.default.minute * 60 + "deg)"
      );
      callback();
    }, !pomodoro.$testtick.prop("checked") ? pomodoro.default.tick : pomodoro.default.test);
  }
};

$(document).ready(function() {
  pomodoro.init();
});
