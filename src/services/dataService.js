const asyncHandler = require('express-async-handler');
const City = require('../models/cityModel');
const Vehicle = require('../models/vehicleModel');
const Cop = require('../models/copModel');

const getCities = asyncHandler(async (req, res) => {
    const cities = [
        { name: 'Yapkashnagar', distance: 60 },
        { name: 'Lihaspur', distance: 50},
        { name: 'Narmis City', distance: 40 },
        { name: 'Shekharvati', distance: 30 },
        { name: 'Nuravgram', distance: 20 }
    ];
    res.status(200).json(cities);
});

const getVehicles = asyncHandler(async (req, res) => {
    const vehicles = [
        { kind: 'EV Bike', range: 60, count: 2 },
        { kind: 'EV Car', range: 100, count: 1},
        { kind: 'EV SUV', range: 120, count: 1}
    ];
    res.status(200).json(vehicles);
});

const getCops = asyncHandler(async (req, res) => {
    const cops = [
        new Cop('Cop 1'),
        new Cop('Cop 2'),
        new Cop('Cop 3')
    ];
    res.status(200).json(cops);
});

module.exports = { getCities, getVehicles, getCops };