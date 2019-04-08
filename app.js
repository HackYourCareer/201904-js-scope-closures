function f1() {
  (function IIFE() {

  })();

  for (var i = 0; i < 5; i++) {
    (function (ii) {
      function ft() {
        console.log(ii);
      }
      setTimeout(ft);
    })(i);
  }
}
f1();