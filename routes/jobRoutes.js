const express = require('express');
const router = express.Router();
const jobController = require('../controller/jobController');

router.route('/').post(jobController.addJob).get(jobController.getJobs);

router.route('/stats').post(jobController.showStats);
router
  .route('/:id')
  .delete(jobController.removeJob)
  .patch(jobController.updateJob);

module.exports = router;
