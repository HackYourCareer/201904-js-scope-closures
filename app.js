/* SOLUTIONS FOR DYNAMIC SCOPE EXERCISES */

/* ---- Starting point ---- */

function f2() {
  var c;
  c = 'very very long';
  console.log('var c + a: ', c + a);
}
var f1;
f1 = function () {
  var b;
  b = 'B';
  var a = 'Y';
  f2();
  console.log('var b: ', b);
  return b + a;
}
var a;
a = 'A';
console.log('f1(): ', f1());

