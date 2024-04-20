
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
const connection = require('../dbConnection/dbconnect');

var stateSchema = new mongoose.Schema({
    StateName: { type: String, required: true },
    country: [{ type: mongoose.Schema.Types.ObjectId, ref: "Country" }],
    cities: [{ type: mongoose.Schema.Types.ObjectId, ref: "City" }]
});


autoIncrement.initialize(connection);
stateSchema.plugin(autoIncrement.plugin, {
    model: "State",
    field: "StateID"
});

var State = mongoose.model("State", stateSchema);
module.exports = State;
