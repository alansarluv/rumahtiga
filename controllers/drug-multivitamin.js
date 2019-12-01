exports.getIndex = (req, res, next) => {
  res.render('drug-multivitamin/index', { 
    pageTitle: 'Obat dan multivitamin - index',
    path: '/drug-multivitamin',
    userEmail: null
  });
}
