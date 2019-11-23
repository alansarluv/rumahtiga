const User = require('../models/user');
const Weeklynote = require('../models/weeklynote');

exports.getForm = (req, res, next) => {
  Weeklynote.find({userId: req.user._id},
    {'monthYear': 1})
    .then(report => {
      const listReport = report;
      User.findOne(
        {_id: req.user._id})
        .then(user => {
          let userKids = null;
          if (user.kids.length) {
            userKids = user.kids;
          }
          return res.render('weekly-note/form', {
            pageTitle: 'Weekly note - Form',
            path: '/weekly-note/form',
            userEmail: req.user.email,
            kids: userKids,
            listreport: listReport
          });
        })
        .catch(err => console.log(err));
    })
}
