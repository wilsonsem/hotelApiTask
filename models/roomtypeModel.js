
const mongoose = require('mongoose')

//database schema for room type
const roomType = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
}, { timestamps: true})



const RoomType = mongoose.model('RoomType', roomType)

module.exports = RoomType
