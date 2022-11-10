const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Something = new Schema({
    name: {type: String, maxLength: 255},
    age: {type: String, maxLength: 600},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
    listBook: {type: Array},
    demoObject: {type: Object}
})

module.exports= mongoose.model("Somthing", Something)