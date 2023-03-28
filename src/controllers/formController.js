const Bird = require('../models/bird');

exports.form_post = async function (req, res) {
  let bird = new Bird({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    dateOfBirth: req.body.dateOfBirth,
  });

  try {
    await bird.save();
    res.render('form-submit-confirm', bird);
  } catch (err) {
    console.log(err);
  }

  // old way - don't do this
  // bird.save(function (err) {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     // it worked!
  //     res.render('form-submit-confirm', personData);
  //   }
  // });
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
