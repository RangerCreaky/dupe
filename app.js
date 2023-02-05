const express = require('express');
const cors = require('cors');
const app = express();

const connectDB = require('./config/db');
const PORT = 4002;

app.use(cors());
app.use(express.json());

// connect the database
connectDB();

app.get('/', (req, res) => {
    res.send("Hello world");
});


// Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/products', require('./routes/api/products'));

app.listen(PORT, () => {
    console.log("server up and running");
});

