/* SOLUTIONS FOR CLOSURE EXERCISES */

var a = 'A'; //LHS
//console.log('var a: ', a); //RHS

function f1() {
  var b = 'B';
  var a = 'Y';

  function f2() {
    var c = 'C';
    console.log('var c + a + b: ', c + a + b);
  }
  f2();
  return f2;
}
var f2 = f1();
f2();