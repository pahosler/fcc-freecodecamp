var MakeTimer = function() {
  var t = {
    start: function(duration,func, callback) {
      this.func = func;
      this.duration = duration;
      this.callback = callback;
      this.timer = setTimeout(function() {
        func();
        if(typeof callback === "function"){
          callback();
        }
      }, duration);
    }
  };
  return {
    start: t.start
  };
};

// wip for future refactoring.. Pomodoro constructor...
// var Pomodoro = function({},timer) {
//   this.settings = {};
//   this.work = settings.work;
//   this.break = settings.break;
//   this.interval = settings.interval;
//   this.minute = settings.MINUTE;
//   this.timerRunning = settings.timerRunning;
//   this.debugTick = settings.debug;
//   this.tick = settings.tick;
//   this.timer = timer;


// }

var pomodoro = {
  default: {
    work: 25,
    break: 5,
    interval: 4,
    alarm: 0,
    MINUTE: 60,
    minute: 60,
    workTimerRunning: false,
    breakTimerRunning: false,
    test: 21,
    tick: 1000 // one second
  },
  init: function() {
    this.cacheDom();
    this.bindEvents();
    this.build();
    this.audio = new Audio();
    this.audio[0] = new Audio("audio/keepworking.wav");
    this.audio[1] = new Audio("audio/getcoffee.wav");
    this.audio[2] = new Audio("audio/endtime.wav");
  },
  build: function() {
    this.tomato = new MakeTimer();
    // position defaults
    this.worktimePosition = this.default.work;
    this.breaktimePosition = this.default.break;
    this.intervalPosition = this.default.interval;
    this.default.alarm = 0;
    this.$fareset.css("transform", "rotate(0deg)");
    this.$worktext.css("background-color", "#ddaaaa");
    this.$breaktext.css("background-color", "#ddaaaa");
    // place to save positions
    this.worktimeSave = this.worktimePosition;
    this.breaktimeSave = this.breaktimePosition;
    this.intervalSave = this.intervalPosition;
    // init slider values
    this.$workslider.val(this.default.work).change();
    this.$breakslider.val(this.default.break).change();
    this.$intervalslider.val(this.default.interval).change();
    // set text input values
    this.$worktext.val(this.default.work);
    this.$breaktext.val(this.default.break);
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
        pomodoro.$worktext.val(e.currentTarget.value);
      }
    );
    this.$breakslider.on(
      "input",
      pomodoro.$breakslider[(type = "range")],
      function(e) {
        pomodoro.breaktimePosition = e.currentTarget.value;
        pomodoro.$breaktext.val(e.currentTarget.value);
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
      if (
        parseInt(pomodoro.$worktext.val()) !== 0 ||
        parseInt(pomodoro.$breaktext.val()) !== 0
      ) {
        pomodoro.start.work();
      }
    });
    this.$stop.on("click", function() {
      if (pomodoro.$stop.attr("class") === "notpaused") {
        clearTimeout(pomodoro.tomato.timer);
        pomodoro.$stop.attr("class", "paused");
      } else if (
        pomodoro.$stop.attr("class") === "paused" &&
        !pomodoro.$start.prop("disabled")
      ) {
        pomodoro.$stop.attr("class", "notpaused");
        return;
      } else if (!pomodoro.default.breakTimerRunning) {
        pomodoro.$stop.attr("class", "notpaused");
        pomodoro.start.work();
      } else {
        pomodoro.$stop.attr("class", "notpaused");
        pomodoro.start.break();
      }
    });
    this.$info.on("click", function() {
      pomodoro.$back.css("visibility", "visible");
      pomodoro.$abouttext.css("visibility", "visible");
      $("#flip").flip({
        trigger: "manual"
      });
      $("#flip").flip(true);
    });
    this.$close.on("click", function() {
      $("#flip").flip(false, function() {
        pomodoro.$back.css("visibility", "hidden");
        pomodoro.$abouttext.css("visibility", "hidden");
        pomodoro.$settingspage.css("visibility", "hidden");
      });
    });
    this.$about.on("click", function() {
      pomodoro.$settingspage.css("visibility", "hidden");
      pomodoro.$abouttext.css("visibility", "visible");
    });
    this.$settings.on("click", function() {
      pomodoro.$abouttext.css("visibility", "hidden");
      pomodoro.$settingspage.css("visibility", "visible");
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
      //this is the callback for the work timer
      //pomodoro.$testtick.attr("checked", "checked");
      pomodoro.$start.attr("disabled", "disabled");
      pomodoro.$start.attr("class", "disabled");

      // check if we've played the alarm or alarm is mute
      if (pomodoro.default.alarm === 0 && !pomodoro.$mute.prop("checked") &&
          !(pomodoro.worktimePosition <=0) ){
        // play alarm sound
        pomodoro.audio[0].play();
        pomodoro.default.alarm = 1;
      }
      if(pomodoro.intervalPosition === 1){
        pomodoro.updateIntervalLine(--pomodoro.intervalPosition);
      }

      if(pomodoro.worktimePosition <= 0 && pomodoro.intervalPosition === 0){
        // stop everything
        pomodoro.updateWorkLine(pomodoro.worktimePosition);
        pomodoro.$start.removeAttr("disabled");
        pomodoro.$start.attr("class", "enabled");
        // and kill timer
        clearTimeout(pomodoro.tomato.timer);
        pomodoro.default.workTimerRunning = false;
        if (!pomodoro.$mute.prop("checked")){
        // play alarm sound
        pomodoro.audio[2].play();
      }
        return;
        // is work cycle complete with intervals available?
      }else if (pomodoro.worktimePosition <= 0 && pomodoro.intervalPosition > 1) {
        clearTimeout(pomodoro.tomato.timer);
        pomodoro.default.workTimerRunning = false;
        // reset alarm so it can fire for break
        pomodoro.default.alarm = 0;
        // reset work slider to last known start
        pomodoro.updateWorkLine(pomodoro.worktimeSave);
        // launch start.break method
        pomodoro.start.break();
      } else {
        // timer is still counting down, call timer with callback to start.work method
        pomodoro.work(pomodoro.start.work);
        pomodoro.updateWorkLine(pomodoro.worktimePosition);
        pomodoro.$worktext.css("background-color",
        `${pomodoro.default.minute % 3 === 1 ? "#ddaaaa" : "#11aa44"}`);
        pomodoro.$fareset.css("transform",
        "rotate(" + (-(pomodoro.default.minute * 60)/5) + "deg)");
      }
    },
    break: function() {
      // this is the callback for the break timer
      if (pomodoro.default.alarm === 0 && !pomodoro.$mute.prop("checked")) {
        pomodoro.audio[1].play();
        pomodoro.default.alarm = 1;
      }

      pomodoro.updateBreakLine(pomodoro.breaktimePosition);
      pomodoro.break(pomodoro.start.break);
      pomodoro.$breaktext.css(
        "background-color",
        `${pomodoro.default.minute % 3 === 0 ? "#ddaaaa" : "#11aa44"}`
      );
      pomodoro.$fareset.css(
        "transform",
        "rotate(" + ((pomodoro.default.minute * 60)/5) + "deg)"
      );

      if (pomodoro.breaktimePosition <= 0) {
        clearTimeout(pomodoro.tomato.timer);
        pomodoro.updateIntervalLine(--pomodoro.intervalPosition);
       // check if this is last interval at end of work cycle
        if (pomodoro.intervalPosition === 1) {
          // yes, kill break time
          pomodoro.breaktimePosition = 0;
          pomodoro.updateBreakLine(pomodoro.breaktimePosition);
       }

        pomodoro.default.breakTimerRunning = false;
        pomodoro.default.alarm = 0;
        if (pomodoro.intervalPosition > 1) {
          pomodoro.default.alarm = 0;
          pomodoro.default.breakTimerRunning = false;
          pomodoro.updateWorkLine(pomodoro.worktimeSave);
          pomodoro.updateBreakLine(pomodoro.breaktimeSave);
          pomodoro.start.work();
        } else {
          clearTimeout(pomodoro.tomato.timer);
          pomodoro.default.breakTimerRunning = false;
          pomodoro.default.alarm = 0;
          pomodoro.start.work();
        }
      }
    }
  },
  work: function(callback) {
    var tick = !pomodoro.$testtick.prop("checked") ? pomodoro.default.tick : pomodoro.default.test;
    pomodoro.default.workTimerRunning = true;
    pomodoro.tomato.start(tick,function() {
      pomodoro.default.minute--;
      if (pomodoro.default.minute === 0) {
        pomodoro.default.minute = pomodoro.default.MINUTE;
        pomodoro.worktimePosition--;
      }
    },callback);
  },
  break: function(callback) {
    var tick = !pomodoro.$testtick.prop("checked") ? pomodoro.default.tick : pomodoro.default.test;
    pomodoro.default.breakTimerRunning = true;
    pomodoro.tomato.start(tick,function() {
      pomodoro.default.minute--;
      if (pomodoro.default.minute === 0) {
        pomodoro.default.minute = pomodoro.default.MINUTE;
        pomodoro.breaktimePosition--;
      }
    }, callback);
  }
};

$(document).ready(function() {
  pomodoro.init();
});
