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
        var $equals = $el.find( ".equals" );
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
        var slot = [ '#nixie0', '#nixie1', '#nixie2', '#nixie3', '#nixie4', '#nixie5', '#nixie6', '#nixie7' ];
        var nixie = [ '0 0', '-40px 0', '-80px 0', '-120px 0', '-160px 0', '-200px 0', '-240px 0', '-280px 0', '-320px 0', '-360px 0', '-400px 0', '-440px 0', '-478px 0', '-516px 0' ];
        var buffer = []; // stores key presses
        var values = []; // stores values to be evaluated
        // flags +,-,*,/,clear
        // flags reset to zero and set flag when key is pressed
        var FLAG = {
            PLUS: 1,
            MINUS: 2,
            MULTIPLY: 4,
            DIVIDE: 8,
            EQUALS: 16,
            DOT: 32,
            CLEAR: 64
        }; // binary 000000

        var clrAllMask = FLAG.CLEAR | FLAG.DOT | FLAG.EQUALS | FLAG.DIVIDE | FLAG.MULTIPLY | FLAG.MINUS | FLAG.PLUS;
        clrMask = FLAG.CLEAR | FLAG.DOT & FLAG.EQUALS & FLAG.DIVIDE & FLAG.MULTIPLY & FLAG.MINUS & FLAG.PLUS;
        console.log( "clrAllMask", clrAllMask.toString( 2 ) );
        console.log( "clrMask", clrMask.toString( 2 ) );
        var opFlags = [ 0, 0, 0, 0, 0, 0, 0 ];
        var mem = 0;
        var answer = false;
        var funkeys = {
            plus: 0,
            minus: 1,
            mult: 2,
            divide: 3,
            equals: 4,
            dot: 5,
            clr: 6
        }

        // bind events
        $clear.on( 'click', function() {
            doClear();

        } );
        $memplus.on( 'click', function() {
            doMem( '+' );
        } );
        $memminus.on( 'click', function() {
            doMem( '-' );
        } );
        $memrecall.on( 'click', function() {
            opFlags[ funkeys.clr ] = 0;
            doClear();
            doMem( 'r' )
        } );
        $memclear.on( 'click', function() {
            mem = 0;
        } );
        $plus.on( 'click', function() {
            opFlags[ funkeys.dot ] = 0;
            opFlags[ funkeys.clr ] = 0;
            if ( opFlags[ funkeys.plus ] == 0 ) {
                opFlags[ funkeys.plus ] = 1;
            }
            pushValues( "+" );
            // }
        } );
        $minus.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }
            opFlags[ funkeys.dot ] = 0;
            opFlags[ funkeys.clr ] = 0;
            if ( opFlags[ funkeys.minus ] == 0 ) {
                opFlags[ funkeys.minus ] = 1;
                pushValues( "-" );
                accumulator( 12 );
            }
        } );
        $divide.on( 'click', function() {
            // doClear().setflag( clr, 0 );
            opFlags[ funkeys.dot ] = 0;
            opFlags[ funkeys.clr ] = 0;
            pushValues( "/" );
        } );
        $multiply.on( 'click', function() {
            opFlags[ funkeys.dot ] = 0;
            opFlags[ funkeys.clr ] = 0;
            pushValues( "*" );
        } );
        $equals.on( 'click', function() {
            opFlags[ funkeys.clr ] = 1;
            opFlags[ funkeys.dot ] = 0;
            opFlags[ funkeys.plus ] = 0;
            opFlags[ funkeys.minus ] = 0;
            buffer.unshift( 13 );
            pushValues( "=" );
        } );
        $keydot.on( 'click', function() {
            if ( opFlags[ funkeys.dot ] == 0 ) {
                opFlags[ funkeys.dot ] = 1;
                accumulator( 10 );
            }
        } );
        $key0.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }
            if ( buffer.length > 1 || buffer[ 0 ] != 0 ) {
                accumulator( 0 );
            }
        } );
        $key1.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 1 );
        } );
        $key2.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 2 );
        } );
        $key3.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 3 );
        } );
        $key4.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 4 );
        } );
        $key5.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 5 );
        } );
        $key6.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 6 );
        } );
        $key7.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 7 );
        } );
        $key8.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 8 );
        } );
        $key9.on( 'click', function() {
            if ( answer ) {
                answer = false;
                doClear();
            }

            accumulator( 9 );
        } );

        _render();

        function _render() {
            // Do Something here!
            // console.log( values );
            console.log( "buffer render", buffer );
            nixiesOff();
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
            console.log( "buffer b4", buffer );
            if ( buffer.length < 8 ) {
                buffer.unshift( key );
                console.log( "buffer now", buffer );

            }
            _render();
        }

        function pushValues( key ) {
            var equals = false;
            buffer.find( function( e, i ) {
                if ( e === 10 ) {
                    buffer.splice( i, 1, '.' )
                } else if ( e === 12 ) {
                    buffer.splice( i, 1, '-' )
                } else if ( e === 13 ) {
                    buffer.splice( i, 1 )
                    equals = true;
                }
            } );

            values.push( buffer.reverse().join( '' ) );
            if ( !equals ) {
                values.push( ( key !== '-' ) ? key : '' )
            }
            console.log( "pushed values", values );
            buffer = [];
            nixiesOff();
            if ( equals ) {
                doMath();
            }
        }

        function doMath() {
            var str = values.join( '' );
            str = Math.round( eval( str ) * 1000000 ) / 1000000;
            if ( str > 99999999 || str < -9999999 || str.isNaN ) {
                str = 'e';
            } else {
                str = str.toString();
            }
            buffer = [];
            buffer = str.split( '' ).reverse();
            buffer.find( function( e, i ) {
                if ( e === '-' ) {
                    buffer.splice( i, 1, 12 );
                } else if ( e === '.' ) {
                    buffer.splice( i, 1, 10 );
                } else if ( e === 'e' ) {
                    buffer.splice( i, 1, 13 );
                }
            } );
            values = [];
            answer = true;
            _render();
        }

        function doMem( op ) {
            mem = parseInt( mem );
            var memVal = mem;
            if ( buffer.length > 0 ) {
                buffer.find( function( e, i ) {
                    if ( e === 10 ) {
                        buffer.splice( i, 1, '.' )
                    } else if ( e === 12 ) {
                        buffer.splice( i, 1, '-' )
                    }
                } );
                memVal = parseInt( buffer.reverse().join( '' ) );
            }
            if ( op === '+' && buffer.length > 0 ) {
                mem += memVal;
            } else if ( op === '-' && buffer.length > 0 ) {
                mem -= memVal;
            } else {
                buffer = [];
                // values.push( mem );
                // mem = mem.toString();
                buffer = mem.toString().split( '' ).reverse();
                buffer.find( function( e, i ) {
                    if ( e === '-' ) {
                        buffer.splice( i, 1, 12 );
                    } else if ( e === '.' ) {
                        buffer.splice( i, 1, 10 );
                    } else if ( e === 'e' ) {
                        buffer.splice( i, 1, 13 );
                    }
                } );
                // answer = true;
                _render();
            }
        }

        function doClear() {
            // var flags = {
            //     plus: function( val ) {
            //         opFlags[ funkeys.plus ] = val
            //     },
            //     minus: function( val ) {
            //         opFlags[ funkeys.minus ] = val
            //     },
            //     mult: function( val ) {
            //         opFlags[ funkeys.mult ] = val
            //     },
            //     divide: function( val ) {
            //         opFlags[ funkeys.divide ] = val
            //     },
            //     dot: function( val ) {
            //         opFlags[ funkeys.dot ] = val
            //     },
            //     clr: function( val ) {
            //         opFlags[ funkeys.clr ] = val
            //     }
            // };
            var buffers = {
                buffer: function() {
                    buffer = []
                },
                values: function() {
                    values = []
                }
            };
            // var setflag = function( flag, val ) {
            //     flags.flag;
            //     console.log( opFlags[ funkeys.flag ] );
            //
            // }

            // return {
            //     setflag: setflag
            // }

            if ( opFlags[ funkeys.clr ] == 0 ) {
                // reset function
                console.log( values.length, values );
                for ( var i = 0; i < 3; ++i ) {
                    if ( opFlags[ i ] == 1 ) {
                        opFlags[ i ] = 0;
                        values = values.slice( 0, -1 );
                        console.log( 'values', values );;
                    }
                }
                buffer = [];
                opFlags[ funkeys.clr ] = 1;
                nixiesOff();
            } else {
                // reset all
                for ( var i = 0; i < opFlags.length; ++i ) {
                    opFlags[ i ] = 0;
                }
                console.log( opFlags );
                buffer = []
                values = [];
                nixiesOff();
            }
        }
        return {
            nixiesOnOff: nixiesOnOff,
            nixiesOff: nixiesOff
        }

        // nixiesOnOff.runError();

    } )();
    calculator.nixiesOff();
    // calculator.nixiesOnOff.runError;
} );
