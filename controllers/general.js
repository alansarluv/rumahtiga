exports.get404 = (req, res, next) => {
  res.status(404).render('404', { 
    pageTitle: 'Page Not Found',
    path: '/404'
  });
}

exports.dashboard = (req, res, next) => {
  res.render('dashboard', { 
    pageTitle: 'Dashboard',
    path: '/',
    userEmail: null
  });
}

exports.noAccess = (req, res, next) => {
  res.render('no-access', { 
    pageTitle: 'No Access',
    path: '/',
    userEmail: req.user.email || null
  });
}

