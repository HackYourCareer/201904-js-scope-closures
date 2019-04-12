var myLib = (function () {
  function validate(from, validator) {
    var isValid = validator(from);
    if (isValid) {
      console.log('VALID');
    } else {
      console.log('INVALID');
    }
  }
  return {
    validate: validate
  }
})();

var form = {
  field: 5
}

function max(limit) {
  return function max(form) {
    return form.field <= limit;
  }
}

myLib.validate(form, max(10));
myLib.validate(form, max(1));