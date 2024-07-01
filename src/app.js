const express = require('express');
const cors = require('cors');
const fugitiveRoutes = require('./routes/fugitiveRoutes');
const dataRoutes = require('./routes/dataRoutes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/fugitive', fugitiveRoutes);
app.use('/api/data', dataRoutes);


module.exports = app;
