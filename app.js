/* SOLUTIONS FOR CLOSURE EXERCISES */

/* ---- Starting point ---- */

var a = 'A'; //LHS
console.log('var a: ', a); //RHS

function f1() {
  var b = 'B';
  var a = 'Y';

  function f2() {
    var c = 'C';
    console.log('var c + a + b: ', c + a + b);
  }
  f2();
  console.log('var a + b: ', a + b);
  return f2;
}
var f2 = f1();
var b = 'Z';
f2();