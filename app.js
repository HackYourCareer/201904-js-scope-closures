/* SOLUTIONS FOR IIFE EXERCISES */

/* ---- Starting point ---- */

var f1;
f1 = function () {
  var b;
  b = 6;
  (function () {
    var c;
    c = 'very very long';
    console.log('C: ', c + a + b);
  })();
  console.log('B: ', b);
}
var a;
a = 5;
f1()