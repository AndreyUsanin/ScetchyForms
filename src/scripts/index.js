<<<<<<< HEAD
import '../styles/index.scss';


=======
import "../styles/index.scss";
let Pristine = require("pristinejs");
>>>>>>> prestine


<<<<<<< HEAD
new JustValidate('.form-a', {
  messages: {
    name: {
      minLength: 'My custom message about only minLength rule'
    },
    email: 'My custom message about error (one error message for all rules)'
  },

  submitHandler: function (form, values, ajax) {

    ajax({
      url: 'https://just-validate-api.herokuapp.com/submit',
      method: 'POST',
      data: values,
      async: true,
      callback: function(response)  {
        console.log(response);
      }
    });
  },
});
=======
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
  var form = document.getElementById("form-a");

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
>>>>>>> prestine
