/* SOLUTIONS FOR MODULE EXERCISES */

/* ---- Starting point ---- */

var m = (function() {
  var a = 'short';
  var c = 'very very long';
  function f1() {
    console.log('C: ', a + ' and ' + c);
  }
  return {
    c: c,
    f1: f1
  }
})();

m.f1();
/* console.log(m.c);
console.log(m.a); */