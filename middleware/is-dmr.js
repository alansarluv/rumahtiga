module.exports = (req, res, next) => {
  if (req.user.role !== 'superadmin') {
    return res.redirect('/no-access');
  }
  next();
}