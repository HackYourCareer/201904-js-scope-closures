/* SOLUTIONS FOR IIFE + CLOSURE + SETTIMEOUT EXERCISES */

/* ---- Starting point ---- */

/* var f1;
f1 = function () {
  for (var b = 0; b < 5; b++) {
    function ft() {
      console.log('b: ', b);
    }
    setTimeout(ft, 10);
  }
}
f1() */

/* ---- add inner function ---- */

/* var f1;
f1 = function () {
  for (var b = 0; b < 5; b++) {
    function f2() {
      function ft() {
        console.log('b: ', b);
      }
      setTimeout(ft, 10);
    }
    f2()
  }
}
f1() */

/* ---- add variable inside the inner function ---- */

/* var f1;
f1 = function () {
  for (var b = 0; b < 5; b++) {
    function f2() {
      var c;
      c = b;
      function ft() {
        console.log('c: ', c);
      }
      setTimeout(ft, 10);
    }
    f2()
  }
}
f1() */

/* ---- turn inner function into IIFE ---- */

/* var f1;
f1 = function () {
  for (var b = 0; b < 5; b++) {
    (function f2() {
      var c;
      c = b;
      function ft() {
        console.log('c: ', c);
      }
      setTimeout(ft, 10);
    })()
  }
}
f1() */

/* ---- pass a variable to the IIFE ---- */

/* var f1;
f1 = function () {
  for (var b = 0; b < 5; b++) {
    (function f2(c) {
      function ft() {
        console.log('c: ', c);
      }
      setTimeout(ft, 10);
    })(b)
  }
}
f1() */

/* ---- the same you can achieve with let keyword ---- */

/* for (let b = 0; b < 5; b++) {
  function ft() {
    console.log('C: ', b);
  }
  setTimeout(ft, 10);
} */

/* ---- upper case reconstruction ---- */

/* f1 = function () {
  {
    let b;
    b = 0;
    function ft() {
      console.log('C: ', b);
    }
    setTimeout(ft, 10);
  }
  {
    let b;
    b = 1;
    function ft() {
      console.log('C: ', b);
    }
    setTimeout(ft, 10);
  }
  {
    let b;
    b = 2;
    function ft() {
      console.log('C: ', b);
    }
    setTimeout(ft, 10);
  }
}
f1() */