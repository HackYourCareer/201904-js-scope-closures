/* SOLUTIONS FOR DYNAMIC SCOPE EXERCISES */

/* ---- Starting point ---- */

function f2() {
  var c;
  c = 'very very long';
  console.log('C: ', c + a);
}
var f1;
f1 = function () {
  var b;
  b = 6;
  var a = 10;
  f2();
  console.log('B: ', b);
  return b + a;
}
var a;
a = 5;
console.log('A: ', f1());

