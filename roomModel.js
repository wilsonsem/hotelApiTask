
const mongoose = require('mongoose')

//database schema for room type
const roomType = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
}, { timestamps: true})



const RoomType = mongoose.model('RoomType', roomType)


const room = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    // roomType:{
    //     ref:ObjectId
    // } ,
    price:{
        type: Number,
        required: true
    }

}, { timestamps: true})

const Room = mongoose.model('Room', room)

module.exports = { RoomType, Room}
  
  
