const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');

router
  .route('/register')
  .post(authController.register)
  .get(authController.register);

router.route('/login').post(authController.login);
router.route('/updateUser').patch(authController.updateUser);

module.exports = router;
