const asyncHandler = require('express-async-handler');

// Mock data for demonstration
const citiesData = [
    { name: 'Yapkashnagar', distance: 60},
    { name: 'Lihaspur', distance: 50 },
    { name: 'Narmis City', distance: 40 },
    { name: 'Shekharvati', distance: 30},
    { name: 'Nuravgram', distance: 20 }
];

const vehiclesData = [
    { kind: 'EV Bike', range: 60, count: 2 },
    { kind: 'EV Car', range: 100, count: 1},
    { kind: 'EV SUV', range: 120, count: 1 }
];

const copsData = [
    'Cop 1',
    'Cop 2',
    'Cop 3'
];

const getCities = asyncHandler(async (req, res) => {
    res.status(200).json(citiesData);
});

const getVehicles = asyncHandler(async (req, res) => {
    res.status(200).json(vehiclesData);
});

const getCops = asyncHandler(async (req, res) => {
    res.status(200).json(copsData);
});

module.exports = { getCities, getVehicles, getCops };
