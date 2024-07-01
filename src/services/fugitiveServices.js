const {getCities} = require('./dataService')

const findFugitive = (selections) => {
    const numberOfCities  = getCities().length;
    const fugitiveCity = getRandomNumber(numberOfCities);
    console.log(fugitiveCity)
    let result = Object.keys(selections).find(item => {
        return selections[item].city.id === fugitiveCity
    })
    return result
};

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

module.exports = { findFugitive };