const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course = new Schema({
    name: {type: String, default: "Khoa hoc lam giau", maxLength: 255},
    description: {type: String, default: "123", maxLength: 600},
    image: {type: String, maxLength: 255}, 
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Course', Course)