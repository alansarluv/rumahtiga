exports.getIndex = (req, res, next) => {
  res.render('atec/index', {
      pageTitle: 'Shop',
      path: '/'
    });
  }
