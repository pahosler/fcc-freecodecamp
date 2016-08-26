$( document ).ready( function() {

    var calculator = ( function() {

        // cacheDom
        var $el = $( '#calculator' );

        // function keys
        var $clear = $el.find( ".clear" );
        var $memplus = $el.find( ".memplus" );
        var $memminus = $el.find( ".memminus" );
        var $memrecall = $el.find( ".memrecall" );
        var $memclear = $el.find( ".memclear" );
        var $plus = $el.find( ".plus" );
        var $minus = $el.find( ".minus" );
        var $divide = $el.find( ".divide" );
        var $multiply = $el.find( ".multiply" );
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
        var $keydot = $el.find( ".dot" );
        var $key0 = $el.find( ".zero" );
        var $key1 = $el.find( ".one" );
        var $key2 = $el.find( ".two" );
        var $key3 = $el.find( ".three" );
        var $key4 = $el.find( ".four" );
        var $key5 = $el.find( ".five" );
        var $key6 = $el.find( ".six" );
        var $key7 = $el.find( ".seven" );
        var $key8 = $el.find( ".eight" );
        var $key9 = $el.find( ".nine" );
        var numKey = {
            offZero: '0 0',
            offOne: '-71px 0',
            offTwo: '-143px 0',
            offThree: '-215px 0',
            offFour: '-285px 0',
            offFive: '-357px 0',
            offSix: '-429px 0',
            offSeven: '-501px 0',
            offEight: '-573px 0',
            offNine: '-645px 0',
            offDot: '-717px 0',
            onZero: '0 -70',
            onOne: '-71px -70',
            onTwo: '-143px -70',
            onThree: '-215px -70',
            onFouot: '-285px -70',
            onFive: '-357px -70',
            onSix: '-429px -70',
            onSeven: '-501px -70',
            onEight: '-573px -70',
            onNine: '-645px -70',
            onDot: '-717px -70'
        };

        // nixie tubes
        // var $nixie0 = $el.find("#nixie0");
        // var $nixie1 = $el.find("#nixie1");
        // var $nixie2 = $el.find("#nixie2");
        // var $nixie3 = $el.find("#nixie3");
        // var $nixie4 = $el.find("#nixie4");
        // var $nixie5 = $el.find("#nixie5");
        // var $nixie6 = $el.find("#nixie6");
        // var $nixie7 = $el.find("#nixie7");

        // nixie slots and image position
        // 544x88 add nixiedash and nixieerror
        var slot = [ '#nixie0', '#nixie1', '#nixie2', '#nixie3', '#nixie4', '#nixie5', '#nixie6', '#nixie7' ];
        var nixie = [ '0 0', '-40px 0', '-80px 0', '-120px 0', '-160px 0', '-200px 0', '-240px 0', '-280px 0', '-320px 0', '-360px 0', '-400px 0', '-440px 0', '-478px 0', '-516px 0' ];
        var buffer = []; // stores key presses
        var values = []; // stores values to be evaluated
        // flags +,-,*,/,m+,m-,mr,mc,clear
        // flags reset to zero and set flag when key is pressed
        var opFlags = [ 0, 0, 0, 0, 0 ];
        var memRegister = [];
        var funkeys = {
            plus: 0,
            minus: 1,
            mult: 2,
            divide: 3,
            clr: 4
        }

        // bind events
        $clear.on( 'click', function() {
            if ( opFlags[ funkeys.clr ] == 0 ) {
                // reset function
                buffer = [];
                opFlags[ funkeys.clr ] = 1;
                nixiesOff();
            } else {
                // reset all
                opFlags[ funkeys.clr ] = 0;
                buffer = []
                values = [];
                nixiesOff();
                // flag 8
            }
        } );
        $memplus.on( 'click', function() {
            console.log( "Hey you clicked me!" );
            // flag 4
        } );
        $memminus.on( 'click', function() {
            console.log( "Hey you clicked me!" );
            // flag 5
        } );
        $memrecall.on( 'click', function() {
            console.log( "Hey you clicked me!" );
            // flag 6
        } );
        $memclear.on( 'click', function() {
            console.log( "Hey you clicked me!" );
            //flag 7
        } );
        $plus.on( 'click', function() {
            pushValues( "+" );
            //flag 0
        } );
        $minus.on( 'click', function() {
            pushValues( "-" );
            accumulator( 12 );
            // flag 1
        } );
        $divide.on( 'click', function() {
            pushValues( "/" );
            // flag 3
        } );
        $multiply.on( 'click', function() {
            pushValues( "*" );
            // flag 2
        } );
        $keydot.on( 'click', function() {
            accumulator( 10 );
        } );
        $key0.on( 'click', function() {
            accumulator( 0 );
        } );
        $key1.on( 'click', function() {
            accumulator( 1 );
        } );
        $key2.on( 'click', function() {
            accumulator( 2 );
        } );
        $key3.on( 'click', function() {
            accumulator( 3 );
        } );
        $key4.on( 'click', function() {
            accumulator( 4 );
        } );
        $key5.on( 'click', function() {
            accumulator( 5 );
        } );
        $key6.on( 'click', function() {
            accumulator( 6 );
        } );
        $key7.on( 'click', function() {
            accumulator( 7 );
        } );
        $key8.on( 'click', function() {
            accumulator( 8 );
        } );
        $key9.on( 'click', function() {
            accumulator( 9 );
        } );

        _render();

        function _render() {
            // Do Something here!
            console.log( values );
            for ( var i = 0; i < buffer.length; ++i ) {
                $( slot[ i ] ).css( "background-position", nixie[ buffer[ i ] ] );
            }
        }

        function nixiesOnOff() {
            var pos = 0;
            var aNixie = 13;
            var blankNixie = nixie[ 11 ];
            var dPos = 1; //delta pos to change direction that nixies engage
            var dNix = 1; // delta nixie to change count direction
            function calcError() {
                for ( var i = 0; i < slot.length; ++i ) {
                    $( slot[ i ] ).css( "background-position", blankNixie );
                }
                $( slot[ pos ] ).css( "background-position", nixie[ aNixie ] );
                pos += dPos;
                // aNixie += dNix;
                if ( pos > 6 || pos < 1 ) {
                    dPos = -dPos
                }
                if ( aNixie > 12 || aNixie < 1 ) {
                    dNix = -dNix
                }
            }

            function clearError() {
                clearInterval( runError );
            }
            var runError = setInterval( function() {
                calcError()
            }, 300 );

        }

        function nixiesOff() {
            for ( var i = 0; i < slot.length; ++i ) {
                $( slot[ i ] ).css( "background-position", nixie[ 11 ] );
            }
        }

        function accumulator( key ) {
            buffer.unshift( key );
            _render();
        }
        return {
            nixiesOnOff: nixiesOnOff,
            nixiesOff: nixiesOff
        }

        function pushValues( key ) {
            buffer.find( function( e, i ) {
                //console.log( 'find 10...' );
                if ( e === 10 ) {
                    console.log( 'found', e );
                    buffer.splice( i, 1, '.' )
                } else if ( e === 12 ) {
                    buffer.splice( i, 1, '-' )
                }
            } );
            values.push( buffer.reverse().join( '' ) );
            values.push( key )
            buffer = [];
            nixiesOff();
        }
        // nixiesOnOff.runError();

    } )();
    calculator.nixiesOff();
    calculator.nixiesOnOff.runError;
} );
