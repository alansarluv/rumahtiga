exports.getIndex = (req, res, next) => {
  res.render('atec/index', {
      pageTitle: 'Atec',
      path: '/',
      userEmail: req.user.email
    });
  }
