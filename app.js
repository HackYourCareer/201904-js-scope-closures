var myLib = (function () {
  function validate(form, validator) {
    var isValid = validator(form);
    if (!isValid) {
      console.log('ERROR');
    }
  }

  return {
    validate: validate
  }

})();

function max(form) {
  if (form.field >= 3) {
    return false;
  }
  return true;
}

var form = {
  field: 5
}

myLib.validate(form, max);