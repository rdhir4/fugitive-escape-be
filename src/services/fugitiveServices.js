const City = require('../models/cityModel');
const Cop = require('../models/copModel');
const Vehicle = require('../models/vehicleModel');

const findFugitive = (citySelections, vehicleSelections) => {
    const fugitiveCity = "Shekharvati"; // Assume fugitive is in Shekharvati for simulation
    let result = 'No cop found the fugitive.';

    for (let copName in citySelections) {
        const city = new City(citySelections[copName].name, citySelections[copName].distance);
        const vehicle = new Vehicle(vehicleSelections[copName].kind, vehicleSelections[copName].range);
        const cop = new Cop(copName);

        cop.selectCity(city);
        cop.selectVehicle(vehicle);

        

        if (cop.selectedCity.name === fugitiveCity) {
            result = `${cop.name} found the fugitive in ${fugitiveCity}!`;
            break;
        }
    }

    return result;
};

module.exports = { findFugitive };