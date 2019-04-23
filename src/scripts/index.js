import '../styles/index.scss';




new JustValidate('.form-a', {
  
  colorWrong: 'red',


  messages: {
    name: {
      minLength: 'My custom message about only minLength rule'
    },
    email: 'My custom message about error (one error message for all rules)'
  },

  
});