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
