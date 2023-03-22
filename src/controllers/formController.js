exports.form_post = function (req, res) {
  let personData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
  };

  // pretend we are saving to the database
  console.log(personData);

  res.render('form-submit-confirm', personData);
};

exports.advanced_form_post = function (req, res) {
  let formData = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    phoneNumberType: req.body.phoneNumberType,
    academicYear: req.body.academicYear,
    agreeToTerms: req.body.agreeToTerms,
  };

  // pretend we are saving to the database
  console.log(formData);

  res.send('Thank you');
};
