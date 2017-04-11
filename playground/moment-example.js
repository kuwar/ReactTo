var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00 am -> 0
// January 1st 1970 @ 12:01 am -> 60

var now = moment();
console.log('Current timestamp ', now.unix());

var timestamp = 1491949099;
var currentMovement  = moment.unix(timestamp);
console.log("Current time", currentMovement.format('MMM D, YY @ h:mm a'));

// April 12th, 2017 @ 04:14 AM
console.log("Current time ", now.format('MMMM Do, YYYY @ hh:mm A'));
