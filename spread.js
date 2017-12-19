// function add (a, b) {
//   return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ...groupB];

// console.log(final);

// var person = ['Andrew', 25];
// var personTwo = ['Jen', 29];

// function logPerson () {
  
// }
var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1513674596;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YYYY @ h:mm a'));

console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));

