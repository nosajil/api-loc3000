const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CarsSchema = new Schema({
    title: String,
    name: String,
    options: {
        aircondition: Boolean,
        navigation: Boolean,
        transmission: String,
        person: Number
    },
    image: String,
    price: Number,
    reservations: Number
});

const CarsModel = mongoose.model("cars", CarsSchema);

module.exports = CarsModel;