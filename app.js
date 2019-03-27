var myLib = (function () {
  function validate(form, validator) {
    var isValid = validator(form);
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

function max(form) {
  return form.field <= 3;
}

myLib.validate(form, max);