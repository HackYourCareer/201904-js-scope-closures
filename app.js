/* SOLUTIONS FOR DYNAMIC SCOPE EXERCISES */

/* ---- Starting point ---- */

var a = 'A'; //LHS
console.log('var a: ', a); //RHS
function f2() {
  var c = 'C';
  console.log('var c + a: ', c + a);
}
function f1() {
  var b = 'B';
  var a = 'Y';
  f2();
  console.log('var a + b: ', a + b);
}
f1();

