exports.getIndex = (req, res, next) => {
  res.render('atec/index', {
      pageTitle: 'Atec',
      path: '/',
      userName: req.user.email
    });
  }
