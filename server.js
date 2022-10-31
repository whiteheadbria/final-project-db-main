// Server

// Requirements
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// const connectDB = require('./config/db');
// const Router = require('./routes/routes.js');

// Set express to the variable app
const app = express();

// Routes
const provider = require('./routes/provider');

// connect database
// Connection to our Database API (MongoDB)
mongoose.connect(
	'mongodb+srv://database:qwerty12345@cluster-db.zqzv6.mongodb.net/?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
);

// Use Cors
app.use(cors());

// // Initialize middleware
// app.use(express.json({ extended: false }));
// app.get('/', (req, res) => res.send('connection successful'));

// Parse the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use Routes
app.use('/provider', provider);

app.use('/zip', provider);

// Setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
