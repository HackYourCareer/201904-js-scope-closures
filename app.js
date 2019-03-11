/* SOLUTIONS FOR CLOSURE EXERCISES */

/* ---- Starting point ---- */

var f1;
f1 = function () {
  function f2() {
    var c;
    c = 'very very long';
    console.log('C: ', c + a + b);
  }
  var b;
  b = 6;
  f2();
  console.log('B: ', b);
  return f2;
}
var a;
a = 5;
var f = f1();
var b = 88;
f();

