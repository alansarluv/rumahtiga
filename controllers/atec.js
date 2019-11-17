const User = require('../models/user')

exports.getIndex = (req, res, next) => {
  res.render('atec/index', {
      pageTitle: 'Atec',
      path: '/atec',
      userEmail: req.user.email
    });
  }

exports.getForm = (req, res, next) => {
  User.findOne({_id: req.user._id})
    .then(user => {
      let userKids = null;
      if (user.kids.length) {
        userKids = user.kids;
      }
      return res.render('atec/form', {
        pageTitle: 'Atec',
        path: '/atec/form',
        userEmail: req.user.email,
        kids: userKids
      }); 
    })
    .catch(err => console.log(err));
  }

  exports.postFormChild = (req, res, next) => {
    const nama = req.body.nama;
    const jeniskelamin = req.body.jeniskelamin;
    const birthday = req.body.birthday;
    // const errors = validationResult(req);

    User.findOne({_id: req.user._id})
      .then(user => {
        //add method in models/user to add kids
        console.log(user);
        res.redirect('/atec/form');
      })
      .catch(err => console.log(err)); 
  }