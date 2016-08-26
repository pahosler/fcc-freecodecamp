// Friendly Date Ranges
// Convert a date range consisting of two dates formatted as YYYY - MM - DD
// into a more readable format.
//
// The friendly display should use month names instead of numbers and ordinal
// dates instead of cardinal(1 st instead of 1).
//
// Do not display information that is redundant or that can be inferred by the
// user: if the date range ends in less than a year from when it begins, do
// not display the ending year.
//
//     Additionally,
//     if the date range begins in the current year
//     (i.e.it is currently the year 2016) and ends
//     within one year, the year should not be displayed
//     at the beginning of the friendly range.
//
// If the range ends in the same month that it begins, do not display the
// ending year or month.
//
//     Examples:
//
//     makeFriendlyDates(["2016-07-01", "2016-07-04"]) should
//     return ["July 1st", "4th"]
//
//     makeFriendlyDates(["2016-07-01", "2018-07-04"]) should
//     return ["July 1st, 2016", "July 4th, 2018"].

function makeFriendlyDates( arr ) {
    var dates = {
        mon: [ "", "January", "Fedruary", "March", "April", "May", "June",
                   "July", "August", "September", "October", "November", "December" ],
        ord: [ "st", "nd", "rd", "th" ]
    }
    friendly = [ [], [] ];

    function friendlyDay( day ) {
        day = parseInt( day );
        if ( day == 1 || day == 21 || day == 31 ) {
            return day.toString() + dates.ord[ 0 ];
        } else if ( day == 2 || day == 22 ) {
            return day.toString() + dates.ord[ 1 ];
        } else if ( day == 3 || day == 23 ) {
            return day.toString() + dates.ord[ 2 ];
        } else {
            return day.toString() + dates.ord[ 3 ];
        }
    }

    function friendlyMonth( month ) {
        return dates.mon[ parseInt( month ) ];
    }

    function parseDates( pd1, pd2 ) {
        console.log( 'dates are', pd1, pd2 );
        var i = 0;
        var concatDate;
        pd1.reduce( ( p1, p2 ) => {
                console.log( 'p1 and p2', p1, p2 );

                concatDate += ( i == 0 ) ? p1[ 0 ] + ' ' + p1[ 1 ] ):
            ?
            return pd2
        }, pd2 )
    arr.push( friendly[ 0 ][ 0 ] + ' ' + friendly[ 0 ][ 1 ], friendly[ 1 ][ 1 ] )

    return arr;
}
arr.forEach( ( date, idx ) => {
    date = date.split( '-' );
    friendly[ idx ].push( friendlyMonth( date[ 1 ] ) );
    friendly[ idx ].push( friendlyDay( date[ 2 ] ) );
    friendly[ idx ].push( date[ 0 ] );

} );
console.log( friendly );
arr = [];
// console.log( date1, date2 );
arr = parseDates( friendly[ 0 ], friendly[ 1 ] );

return arr;
}

console.log( makeFriendlyDates( [ '2016-07-01', '2016-07-04' ] ) ); // should return ["July 1st","4th"].
console.log( makeFriendlyDates( [ "2016-12-01", "2017-02-03" ] ) ); //should return ["December 1st","February 3rd"].
console.log( makeFriendlyDates( [ "2016-12-01", "2018-02-03" ] ) ); //should return ["December 1st, 2016","February 3rd, 2018"].
console.log( makeFriendlyDates( [ "2017-03-01", "2017-05-05" ] ) ); //should return ["March 1st, 2017","May 5th"]
console.log( makeFriendlyDates( [ "2018-01-13", "2018-01-13" ] ) ); //should return ["January 13th, 2018"].
console.log( makeFriendlyDates( [ "2022-09-05", "2023-09-04" ] ) ); //should return ["September 5th, 2022","September 4th"].
console.log( makeFriendlyDates( [ "2022-09-05", "2023-09-05" ] ) ); //should return ["September 5th, 2022","September 5th, 2023"].
