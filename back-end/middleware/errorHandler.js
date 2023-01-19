const errorHandler = (err, req, res, next) => {
  console.log(err.stack);
  res.send(500).send(err.message);
};

module.exports = errorHandler;
