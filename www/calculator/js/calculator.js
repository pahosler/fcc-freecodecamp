$(document).ready(function() {

    // var nixies = (function() {
    //
    //     return {
    //         nixie: nixies
    //     }
    // })();
    //
    // var numKeys = (function() {
    //
    //     return {
    //         numkey: numKeys
    //     }
    // })();
    //
    // var funcKeys = (function() {
    //
    //   return {
    //     funcKey: funcKeys
    //   }
    // })();

    // var slot = ['#nixie0', '#nixie1', '#nixie2', '#nixie3', '#nixie4', '#nixie5', '#nixie6', '#nixie7'];
    // var nixie = ['0 0', '-40px 0', '-80px 0', '-120px 0', '-160px 0', '-200px 0', '-240px 0', '-280px 0', '-320px 0', '-360px 0', '-400px 0', '-440px 0'];

    // number keys 0 - 9 and dor on state
    // var numKeyOn = ['0 -70px','-71px -70px','-143px 0','-215px -70px','-285px -70px','-357px -70px','-429px -70px','-501px -70px','-573px -70px','-645px -70px','-717px -70px'];

    // number keys 0 - 9 and dot off state
    // var numKeyOff = ['0 0','-71px 0','-143px 0','-215px 0','-285px 0','-357px 0','-429px 0','-501px 0','-573px 0','-645px 0','-717px 0'];

    // funtion keys  +,-,x,/,=,clear,m+,m-,mr,mc on state
    // var funcKeyOn = ['-2px -70px','-71px -70px','-142px -70px','-214px -70px','-287px -70px','-358px -70px','-430px -70px','-501px -70px','-573px -70px','-645px -70px'];

    // funtion keys  +,-,x,/,=,clear,m+,m-,mr,mc off state
    // var funKeyOff = ['-2px 0', '-71px 0', '-142px 0', '-214px 0', '-287px 0', '-358px 0', '-430px 0', '-501px 0', '-573px 0', '-645px 0'];
    var calculator = (function() {

            // cacheDom
            var $el = $('#calculator');

            // function keys
            var $clear = $el.find(".clear");
            var $memplus = $el.find(".memplus");
            var $memminus = $el.find(".memminus");
            var $memrecall = $el.find(".memrecall");
            var $memclear = $el.find(".memclear");
            var $plus = $el.find(".plus");
            var $minus = $el.find(".minus");
            var $divide = $el.find(".divide");
            var $multiply = $el.find(".multiply");
            var funcKey = {
                offPlus: '-2px -70px',
                offMinus: '-71px -70px',
                offMultiply: '-142px -70px',
                offDivide: '-214px -70px',
                offEquals: '-287px -70px',
                offMemAdd: '-430px -70px',
                offMemMinus: '-501px -70px',
                offMemRecall: '-573px -70px',
                offMemClear: '-645px -70px',
                offClear: '-358px -70px',
                onPlus: '-2px 0',
                onMinus: '-71px 0',
                onMultiplay: '-142px 0',
                onDivide: '-214px 0',
                onEquals: '-287px 0',
                onClear: '-358px 0',
                onMemAdd: '-430px 0',
                onMemMinus: '-501px 0',
                onMemRecall: '-573px 0',
                onClear: '-358px 0'
            };

            // number keys
            var $keydot = $el.find(".dot");
            var $key0 = $el.find(".zero");
            var $key1 = $el.find(".one");
            var $key2 = $el.find(".two");
            var $key3 = $el.find(".three");
            var $key4 = $el.find(".four");
            var $key5 = $el.find(".five");
            var $key6 = $el.find(".six");
            var $key7 = $el.find(".seven");
            var $key8 = $el.find(".eight");
            var $key9 = $el.find(".nine");
            var numKey = {
              offZero:'0 0',
              offOne:'-71px 0',
              offTwo:'-143px 0',
              offThree:'-215px 0',
              offFour:'-285px 0',
              offFive:'-357px 0',
              offSix:'-429px 0',
              offSeven:'-501px 0',
              offEight:'-573px 0',
              offNine:'-645px 0',
              offDot:'-717px 0',
              onZero:'0 -70',
              onOne:'-71px -70',
              onTwo:'-143px -70',
              onThree:'-215px -70',
              onFouot:'-285px -70',
              onFive:'-357px -70',
              onSix:'-429px -70',
              onSeven:'-501px -70',
              onEight:'-573px -70',
              onNine:'-645px -70',
              onDot:'-717px -70'
            };

            // nixie tubes
            var $nixie0 = $el.find("#nixie0");
            var $nixie1 = $el.find("#nixie1");
            var $nixie2 = $el.find("#nixie2");
            var $nixie3 = $el.find("#nixie3");
            var $nixie4 = $el.find("#nixie4");
            var $nixie5 = $el.find("#nixie5");
            var $nixie6 = $el.find("#nixie6");
            var $nixie7 = $el.find("#nixie7");

            // nixie slots and image position
            var slot = ['#nixie0', '#nixie1', '#nixie2', '#nixie3', '#nixie4', '#nixie5', '#nixie6', '#nixie7'];
            var nixie = ['0 0', '-40px 0', '-80px 0', '-120px 0', '-160px 0', '-200px 0', '-240px 0', '-280px 0', '-320px 0', '-360px 0', '-400px 0', '-440px 0'];


            // bind events
            $clear.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $memplus.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $memminus.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $memrecall.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $memclear.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $plus.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $minus.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $divide.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $multiply.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $keydot.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key0.on('click',function(){
              console.log("what a clicker!");
              calculatorKeyPos("many clicks!");
            });
            $key1.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key2.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key3.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key4.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key5.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key6.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key7.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key8.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });
            $key9.on('click', function(){
              console.log("Hey you clicked me!");
              calculatorKeyPos("happy button :)");
            });

            _render();
        function _render() {
          // Do Something here!
        }

        function calculatorKeyPos(msg){
          console.log(msg);
        }
        function nixiesOnOff() {
            var pos = 0;
            var aNixie = 0;
            var blankNixie = nixie[11];
            var dPos = 1; //delta pos to change direction that nixies engage
            var dNix = 1; // delta nixie to change count direction
            setInterval(function() {
                for (var i = 0; i < slot.length; ++i) {
                    $(slot[i]).css("background-position", blankNixie);
                }
                $(slot[pos]).css("background-position", nixie[aNixie]);
                pos += dPos;
                aNixie += dNix;
                if (pos > 6 || pos < 1) {
                    dPos = -dPos
                }
                if (aNixie > 8 || aNixie < 1) {
                    dNix = -dNix
                }


            }, 300);
        }
        return {
          nixies: nixiesOnOff,
        }
        // nixiesOnOff();

    })();
// calculator.init();
calculator.nixies();
});
