const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();
const app = express();

const PORT = process.env.PORT || 8000;;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', bookRoutes);

mongoose.connect(process.env.MONGODB_URL).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
});

// Root Route
app.get('/', (req, res) => {
    res.send('Welcome to the Book API');
});

app.listen(PORT, () => {
    console.log(`server up on port ${PORT}`);
});