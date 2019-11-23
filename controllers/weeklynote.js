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

exports.postForm = (req, res, next) => {
  const weeklynote = new Weeklynote({
    userId: req.user._id,
    kidName: req.body.kidName,
    monthYear: req.body.yearWeeklynote + req.body.monthWeeklynote + req.body.weekWeeklynote,
    notes: req.body.notes
  })
  return weeklynote.save()
    .then(result => {
      return res.render('weekly-note/flash', {
        pageTitle: 'Weekly note - Result',
        path: '/weekly-note/flash',
        userEmail: req.user.email,
        weeklynote: result
      });
    });
}