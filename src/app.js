const express = require('express');
const cors = require('cors');
const fugitiveRoutes = require('./routes/fugitiveRoutes');


const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/fugitive', fugitiveRoutes);


module.exports = app;
