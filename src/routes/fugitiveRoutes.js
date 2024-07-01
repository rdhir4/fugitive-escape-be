const express = require('express');
const { findFugitive } = require('../controller/fugitiveController');

const router = express.Router();

router.post('/find', findFugitive);

module.exports = router;
