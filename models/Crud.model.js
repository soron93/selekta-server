const mongoose = require('mongoose');

let CrudSchema = new mongoose.Schema({
    name: String,
    description: String,
    completed: Boolean,
    image: String,

})

let CrudModel = mongoose.model('crud', CrudSchema)

module.exports = CrudModel;