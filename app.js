/* SOLUTIONS FOR FUNCTION SCOPE EXERCISES */

/* ---- Starting point ---- */

var f1;
f1 = function () {
  var b;
  b = 'B';
  function f2() {
    var c;
    c = 'very very long';
    console.log('var c: ', c);
  }
  f2();
  console.log('var b + var c: ', b + c);
  return b + a;
}
var a;
a = 5;
console.log('f1(): ', f1());
