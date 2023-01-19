const notFoundMiddleware = (req, res) => {
  res.status(404).send(`err404: Page Not Found!`);
};

module.exports = notFoundMiddleware;
