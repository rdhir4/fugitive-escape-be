const express = require('express');
const router = express.Router();
const dataController = require('../controller/dataController');

// Routes for fetching data
router.get('/cities', dataController.getCities);
router.get('/vehicles', dataController.getVehicles);
router.get('/cops', dataController.getCops);

module.exports = router;
