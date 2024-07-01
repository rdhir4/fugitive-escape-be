const asyncHandler = require('express-async-handler');
const {findFugitive: findFugitiveService} = require('../services/fugitiveServices')

const findFugitive = asyncHandler(async (req, res) => {
    const { selections } = req.body;
    const result = findFugitiveService(selections);    
    res.status(200).json(result);
});

module.exports = { findFugitive };
