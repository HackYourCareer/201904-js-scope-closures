/* SOLUTIONS FOR NESTED SCOPE EXERCISES */

var f1;
f1 = function () {
  var b;
  b = 'B';
  console.log('var b: ', b);
  return b + a;
}
var a;
 a = 'A';
 console.log('var a: ', f1());