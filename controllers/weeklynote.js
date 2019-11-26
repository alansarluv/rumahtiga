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
  Weeklynote.find({
    userId: req.user._id,
    monthYear: weeklynote.monthYear
  })
  .then(result => {
    if (!result.length) {
      return weeklynote.save()
        .then(result => {
          return res.render('weekly-note/flash', {
            pageTitle: 'Weekly note - Result',
            path: '/weekly-note/flash',
            userEmail: req.user.email,
            weeklynote: result
          });
        });
    } else {
      console.log("catatan pada tanggal tsb sudah ada")
      res.redirect('/weekly-note/form');
    }
  })

}

exports.getReport = (req, res, next) => {
  Weeklynote
    .find({userId: req.user._id})
    .sort({monthYear: 'desc'})
    .then(report => {
      return res.render('weekly-note/report', {
        pageTitle: 'Weekly note - Report',
        path: '/weekly-note/report',
        userEmail: req.user.email,
        listreport: report
      });
    })
    .catch(err => console.log(err));
}
