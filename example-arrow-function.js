// var names = ['Allan', 'Gabriel', 'Giovanne'];
//
// names.forEach(function (name){
//   console.log('forEach: ', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc: ', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Giovanne'));

// var person = {
//   name: 'Giovanne',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

//Challenge Area
function add(a, b) {
  return a + b;
}

//addStatment
var addStatment = (a, b) => {
  return a + b;
};

//addExpression
var addExpression = (a, b) => a + b;

console.log("add: " + add(1, 3));
console.log("add: " + add(9, 0));
console.log("addStatment: " + addStatment(4, 7));
console.log("addStatment: " + addStatment(1, 1));
console.log("addExpression: " + addExpression(3, 5));
console.log("addExpression: " + addExpression(1, 5));
