/* SOLUTIONS FOR NESTED SCOPE EXERCISES */

var f1;
f1 = function () {
  var b;
  b = 6;
  console.log('B: ', b);
  return b + a;
}
var a;
 a = 5;
 console.log('A: ', f1());