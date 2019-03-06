/* SOLUTIONS FOR SCOPE EXERCISES */

/* ---- Starting point ---- */

/* var a;
a = 5;
console.log(a); */

/* ---- Global variable is declared ---- */

/* 
//var a;
a = 5;
console.log(a); */

/* ---- Reference error ---- */

/*
 //var a;
 //a = 5;
 console.log(a); */

 /* ---- Reference error with strict mode ---- */

/*
'use strict';
a = 5;
console.log(a); */

/* ---- Type error ---- */

/* var f1;
var a;
 a = 5;
console.log('A: ', f1());
f1 = function () {
  var b;
  b = 6;
  console.log('B: ', b);
  return b;
} */