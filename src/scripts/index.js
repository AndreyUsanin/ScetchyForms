import "../styles/index.scss";
let Pristine = require("pristinejs");


let myConfig = {
  // class of the parent element where the error/success class is added
  classTo: "formbox",
  errorClass: "has-danger",
  successClass: "has-success",
  // class of the parent element where error text element is appended
  errorTextParent: "formbox",
  // type of element to create for the error text
  errorTextTag: "div",
  // class of the error text element
  errorTextClass: "text-help"
};

window.onload = function() {
  var form = document.getElementById("form-b");

  var pristine = new Pristine(form, myConfig, true);

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var valid = pristine.validate();
    //alert('Form is valid: ' + valid);

    if (valid) {
      console.log("OK");
    } else {
      console.log("NEOK");
    }
  });
};
