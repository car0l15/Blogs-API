module.exports = (err, req, res, _next) => 
  res.status(err.status || 500).json({ message: err.message
     || ' undefined error: tente novamente mais tarde',
 });