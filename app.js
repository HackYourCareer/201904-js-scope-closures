var myLib = (function () {
  function validate() {
    console.log('validate');
  }
  p = 'P';
  return {
    validate: validate,
    p: p
  }
})();

console.log(myLib.p);
myLib.validate();