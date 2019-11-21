const User = require('../models/user');
const Weeklynote = require('../models/weeklynote');

exports.getForm = (req, res, next) => {
  res.render('weekly-note/form', {
      pageTitle: 'Weekly note - Form',
      path: '/weekly-note',
      userEmail: req.user.email
    });
  }
  