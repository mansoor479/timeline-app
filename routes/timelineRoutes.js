const express = require('express');
const router = express.Router();
const controller = require('../controllers/timelineController');

router.get('/', controller.getTimeline);

module.exports = router;
