exports.getIndex = (req, res, next) => {
  res.render('laporan/index', { 
    pageTitle: 'Laporan - index',
    path: '/laporan',
    userEmail: null
  });
}
