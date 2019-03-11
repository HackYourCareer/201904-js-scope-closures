/* SOLUTIONS FOR FUNCTION SCOPE EXERCISES */

/* ---- Starting point ---- */

var f1;
f1 = function () {
  var b;
  b = 6;
  function f2() {
    var c;
    c = 'very very long';
    console.log('C: ', c);
  }
  f2();
  console.log('B: ', b + c);
  return b + a;
}
var a;
a = 5;
console.log('A: ', f1());
