/* SOLUTIONS FOR SCOPE EXERCISES */

/* ---- Starting point ---- */

/* var a;
a = 'A';
console.log(a); */

/* ---- Global variable is declared ---- */


/* //var a;
a = 'A';
console.log(a); */

/* ---- Reference error ---- */


/*  //var a;
 //a = 'A';
 console.log(a); */

/* ---- Reference error with strict mode ---- */


/* 'use strict';
a = 'A';
console.log(a);  */

/* ---- Type error ---- */
/* 
var f1;
var a;
a = 'A';
console.log('f1(): ', f1());
f1 = function () {
  var b;
  b = 'B';
  console.log('var  b: ', b);
  return b;
}  */