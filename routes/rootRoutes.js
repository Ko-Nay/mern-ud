const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ name: 'Nay Linn Hein' });
});

module.exports = router;
