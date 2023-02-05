const mongoose = require('mongoose');
const config = require('config');
const mongoURI = config.get('mongoURI');

const connectDB = async () => {
    try {
        // mongoose.set('strictQuery', true)
        await mongoose.connect(mongoURI);
        console.log("database connected");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB;