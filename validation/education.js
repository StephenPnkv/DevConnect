

const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExperienceInput(data){
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : '';


  if(Validator.isEmpty(data.school)){
    errors.school = 'School field is required.';
  }

  if(Validator.isEmpty(data.degree)){
    errors.degree = 'Degree field is required.';
  }

  if(Validator.isEmpty(data.from)){
    errors.from = 'From date field required.';
  }
  if(Validator.isEmpty(data.fieldOfStudy)){
    errors.fieldOfStudy = 'Field of study field required.';
  }


  return {
    errors,
    isValid: isEmpty(errors)
  }
}
