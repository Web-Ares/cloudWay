$(function(){
    'use strict';

    $(function(){

        var elemX = [-1,-2,-2,-1,1,2,2,1],
            elemY = [-2,-1,1,2,2,1,-1,-2],
            findX = 1,
            findY = 1,
            step = -1;

        function solve(x,y) {
            var x = Math.abs(x),
                y = Math.abs(y);

            if ( y > x ) {
                var temp = y;
                y = x;
                x = temp;
            }

            if ( x == 2 && y == 2 ) {
                return 4;
            }

            if ( x == 1 && y == 0 ) {
                return 3;
            }

            if ( y == 0 || (y/x <= 0.5) ) {
                var xClass = x % 4,
                    initX = 0;

                if ( xClass == 0 ) {
                    initX = x/2;
                } else if ( xClass == 1 ) {
                    initX = 1 + (x/2);
                } else if ( xClass == 2 ) {
                    initX = 1 + (x/2);
                } else {
                    initX = 1 + ((x+1)/2)
                }

                if ( xClass > 1 ) {
                    console.log(1)
                    return initX - (y%2)
                } else {
                    console.log(2)
                    return initX + (y%2);
                }
            } else {
                var diagonal = x - ((x-y)/2);

                if ( (x-y)%2 == 0 ) {
                    if ( diagonal % 3 == 0 ) {
                        console.log(3)
                        return (diagonal/3)*2;
                    }
                    if ( diagonal % 3 == 1 ) {
                        console.log(4)
                        return (diagonal/3)*2 + 2;
                    } else {
                        console.log(5)
                        return (diagonal/3)*2 + 2;
                    }
                } else {
                    console.log(6)
                    return (diagonal/3)*2 + 1;
                }
            }
        }

        console.log('variant1: ', solve(findX,findY));

        function knight( x , y )
        {
            x = Math.abs(x);
            y = Math.abs(y);

            var delta = x - y;

            if ( y > x ) {
                var temp = y;
                y = x;
                x = temp;
            }

            if ( x == 2 && y == 2 ) {
                return 4;
            }

            if ( x == 1 && y == 0 ) {
                return 3;
            }

            if( y > delta )
                return 2 * ( ( y - delta ) / 3 ) + delta;
            else
                return delta - 2 * ( ( delta - y ) / 4 );
        }

        console.log('variant2: ', knight(findX,findY))

        //var elem = $( '.logo' );

        //if (window.DeviceMotionEvent != undefined) {
        //    window.ondevicemotion = function(e) {
        //        //ax = event.accelerationIncludingGravity.x * 5;
        //        //ay = event.accelerationIncludingGravity.y * 5;
        //
        //        console.log(event)
        //
        //        elem.css( {
        //            'transform': 'translate3d(' + event.acceleration.x + 'px,' + event.acceleration.y + 'px,' + event.acceleration.z + 'px)'
        //        } );
        //    }
        //}

        function init() {
            var compass = document.getElementById('compass'),
                webkitAlpha;
            if(window.DeviceOrientationEvent) {

                window.addEventListener('deviceorientation', function(event) {
                    var alpha;
                    //Check for iOS property
                    if(event.webkitCompassHeading) {
                        alpha = event.webkitCompassHeading;
                        //Rotation is reversed for iOS
                        compass.style.WebkitTransform = 'rotate(-' + alpha + 'deg)';
                    }
                    //non iOS
                    //else {
                    //    alpha = event.alpha;
                    //    webkitAlpha = alpha;
                    //    if(!window.chrome) {
                    //        //Assume Android stock (this is crude, but good enough for our example) and apply offset
                    //        webkitAlpha = alpha-270;
                    //    }
                    //}

                    compass.style.Transform = 'rotate(' + alpha + 'deg)';
                    compass.style.WebkitTransform = 'rotate('+ webkitAlpha + 'deg)';
                    //Rotation is reversed for FF
                    compass.style.MozTransform = 'rotate(-' + alpha + 'deg)';
                }, false);
            }
        }

        var arr = [1,0,0,1,1,1];

        function solution(A) {
            var sum = 0;
            for ( var i = 0; i < A.length; i++ ) {
                sum = sum + Math.pow(A[i]*(-2), i);
            }

            return sum;
        }

        function toNegativeBase(num, base)
        {
            var digits = [],
                tmp_num = num,
                remainder;

            while (num != 0) {
                tmp_num = num;
                remainder = (tmp_num % base);
                num = (tmp_num - remainder) / base;

                if (remainder < 0) {
                    remainder += Math.abs(base);
                    num++;
                }

                digits[digits.length] = Math.abs(remainder);
            }

            return digits;
        }

        console.log(toNegativeBase(-(solution(arr)), -2));

        function toNegaBinary( number ) {
            var Schroeppel2 = 0xAAAAAAAA;
            // Convert to NegaBinary String
            return ( ( number + Schroeppel2 ) ^ Schroeppel2 ).toString(2);
        }

        console.log(toNegaBinary(solution(arr)))

    });

});