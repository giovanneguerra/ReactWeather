// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback("City not found");
// }
//
// getTempCallback("Philadelphia", function(err, temp) {
//   if (err) {
//     console.log("error", err);
//   } else {
//     console.log("success", temp);
//   }
// });
//
// function getTempPromise(location) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Philadelphia').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise err', err);
// });

//Challenge
function addPromise(a, b) {
  return new Promise(function(resolve, reject) {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else {
      reject("This expression just accepts numbers");
    }
  });
}

addPromise(2, 4).then(
  function(temp) {
    console.log("your result: ", temp);
  },
  function(err) {
    console.log("Sum error", err);
  }
);

addPromise("a", 4).then(
  function(temp) {
    console.log("your result: ", temp);
  },
  function(err) {
    console.log("Sum error:", err);
  }
);
