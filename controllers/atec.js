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
    const kid = {
      name: req.body.name,
      gender: req.body.gender,
      birthday: req.body.birthday
    }
    // const errors = validationResult(req);
    req.user.addKid(kid);
    res.redirect('/atec/form');
  }
