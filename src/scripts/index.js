import '../styles/index.scss';
let Pristine = require('pristinejs');



var myLang = {
  required: "This field is required",
  email: "Email формат норм укажи",
  number: "This field requires a number",
  url: "This field requires a valid website URL",
  tel: "This field requires a valid telephone number",
  maxlength: "This fields length must be < ${1}",
  minlength: "This fields length must be > ${1}",
  min: "Minimum value for this field is ${1}",
  max: "Maximum value for this field is ${1}",
  pattern: "Input must match the pattern ${1}"
};

let myConfig = {
  // class of the parent element where the error/success class is added
  classTo: 'formbox',
  errorClass: 'has-danger',
  successClass: 'has-success',
  // class of the parent element where error text element is appended
  errorTextParent: 'formbox',
  // type of element to create for the error text
  errorTextTag: 'div',
  // class of the error text element
  errorTextClass: 'text-help' 
};


window.onload = function () {


  var form = document.getElementById("form-a");

  var pristine = new Pristine(form, myConfig, false);

  form.addEventListener('submit', function (e) {


     e.preventDefault();
     var valid = pristine.validate();
     //alert('Form is valid: ' + valid);

  });


};