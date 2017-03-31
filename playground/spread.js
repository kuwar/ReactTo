function add (a, b) {
  return (a + b);
}

console.log(add(4, 1));

var toAdd = [10, 4];
console.log(add(...toAdd));

var groupA = ['Jen', 'Cory'];
var groupB = ['Vikram'];
var final = [...groupB, 3, ...groupA];
console.log(final);

function displayInfo (name, age) {
  var info = `Hi ${name}, you are ${age}!`;
  console.log(info);
}

var person1 = ['Andrew', 25];
var person2 = ['Jen', 22];

displayInfo(...person1);
displayInfo(...person2);

var names = ['Ben', 'Jeff'];
var finalNames = ['Saurav', ...names];
finalNames.forEach((name) => {
  console.log(name);
}) ;
