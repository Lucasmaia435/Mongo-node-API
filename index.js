const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());

const uri = "mongodb+srv://sua_bd_aqui";
mongoose.connect(
    uri,
    { useNewUrlParser: true ,useUnifiedTopology: true }
);

require('./src/models/user');
require('./src/models/product');

app.use(cors());
app.use('/api',require('./src/routes'));

app.listen(3000);
