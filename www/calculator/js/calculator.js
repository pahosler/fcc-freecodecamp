$(document).ready(function() {
    var slot = ['#nixie0', '#nixie1', '#nixie2', '#nixie3', '#nixie4', '#nixie5', '#nixie6', '#nixie7'];
    var nixie = ['0 0', '-40px 0', '-80px 0', '-120px 0', '-160px 0', '-200px 0', '-240px 0', '-280px 0', '-320px 0', '-360px 0', '-400px 0', '-440px 0'];
    var calculator = {
        init: function() {
            this.cacheDom();
            // this.bindEvents();
        },
        cacheDom: function() {
            this.$el = $('#calculator');

            // function keys
            this.$clear = this.$el.find('#clear');
            this.$memplus = this.$el.find("#memplus");
            this.$memminus = this.$el.find("#memminus");
            this.$memrecall = this.$el.find("#memrecall");
            this.$memclear = this.$el.find("#memclear");
            this.$plus = this.$el.find("#keyplus");
            this.$minus = this.$el.find("#keyminus");
            this.$divide = this.$el.find("#keydivide");
            this.$multiply = this.$el.find("#keymultiply");

            // number keys
            this.$keydot = this.$el.find("#dot");
            this.$key0 = this.$el.find("#key0");
            this.$key1 = this.$el.find("#key1");
            this.$key2 = this.$el.find("#key2");
            this.$key3 = this.$el.find("#key3");
            this.$key4 = this.$el.find("#key4");
            this.$key5 = this.$el.find("#key5");
            this.$key6 = this.$el.find("#key6");
            this.$key7 = this.$el.find("#key7");
            this.$key8 = this.$el.find("#key8");
            this.$key9 = this.$el.find("#key9");

            // nixie tubes
            this.$nixie0 = this.$el.find("#nixie0");
            this.$nixie1 = this.$el.find("#nixie1");
            this.$nixie2 = this.$el.find("#nixie2");
            this.$nixie3 = this.$el.find("#nixie3");
            this.$nixie4 = this.$el.find("#nixie4");
            this.$nixie5 = this.$el.find("#nixie5");
            this.$nixie6 = this.$el.find("#nixie6");
            this.$nixie7 = this.$el.find("#nixie7");
        },
        bindEvents: {
            // this.$clear.on('click',   );
            // this.$memplus.on('click',   );
            // this.$memminus.on('click',   );
            // this.$memrecall.on('click',   );
            // this.$memclear;.on('click',   );
            // this.$plus.on('click',   );
            // this.$minus.on('click',   );
            // this.$divide.on('click',   );
            // this.$multiply.on('click',   );
            // this.$keydot.on('click',   );
            // this.$key0.on('click',   );
            // this.$key1.on('click',   );
            // this.$key2.on('click',   );
            // this.$key3.on('click',   );
            // this.$key4.on('click',   );
            // this.$key5.on('click',   );
            // this.$key6.on('click',   );
            // this.$key7.on('click',   );
            // this.$key8.on('click',   );
            // this.$key9.on('click',   );
        },
        render: {

        },
        nixiesOff: function() {
          var x= 0;
            setInterval(function() {
                for (var i = 0; i < slot.length; ++i) {
                    $(slot[i]).css("background-position", nixie[x]);
                }
                x = x > 10 ? 0:x=x+1;
            }, 1000);
        }
    }
    calculator.init();
    calculator.nixiesOff();
});
