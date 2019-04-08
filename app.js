function f1() {
  (function IIFE() {

  })();

  for (let i = 0; i < 5; i++) {
    function ft() {
      console.log(i);
    }
    setTimeout(ft);
  }
}
f1();