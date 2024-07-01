const asyncHandler = require('express-async-handler');

const findFugitive = asyncHandler(async (req, res) => {
    const { citySelections, vehicleSelections } = req.body;

    const fugitiveCity = "Shekharvati"; // Assume fugitive is in Shekharvati for simulation
    let result = 'No cop found the fugitive.';
    for (let copName in citySelections) {
        // const city = citySelections[copName].name, citySelections[copName].distance;
        const cop = copName;
        cop.selectCity(city);

        if (cop.selectedCity.name === fugitiveCity) {
            result = `${cop.name} found the fugitive in ${fugitiveCity}!`;
            break;
        }
    }

    res.status(200).json({ message: result });
});

module.exports = { findFugitive };
