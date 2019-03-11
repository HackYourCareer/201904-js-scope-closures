/* SOLUTIONS FOR BLOCK SCOPE EXERCISES */

/* ---- Starting point ---- */

/* var f1;
f1 = function () {
  var b;
  b = 6;
  {
    var c;
    c = 'very very long';
    console.log('C: ', c);
  }
  console.log('B: ', b + c);
  return b + a;
}
var a;
a = 5;
console.log('A: ', f1()); */

/* ---- error ---- */

/* var f1;
f1 = function () {
  var b;
  b = 6;
  {
    let c;
    c = 'very very long';
    console.log('C: ', c);
  }
  console.log('B: ', b + c);
  return b + a;
}
var a;
a = 5;
console.log('A: ', f1()); */

/* ---- removing huge varibales from memory ----  */

/* var f1;
f1 = function () {
  var b;
  b = 6;
  let c;
  c = 'very very long';
  console.log('C: ', c);
  console.log('B: ', b);
  return b + a;
}
var a;
a = 5;
console.log('A: ', f1()); */