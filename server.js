const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/catalogue', require('./routes/catalogueRoute'));

app.listen(port, () => console.log(`Server is listening at port ${port}`));
