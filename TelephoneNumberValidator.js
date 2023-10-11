function telephoneCheck(str) {

let validatorRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)(\d{3})([\s-]?)(\d{4})$/;

if (str.match(validatorRegex)) {
  return true;
} else {
  return false;
  }
}

telephoneCheck("555-555-5555");