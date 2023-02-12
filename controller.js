// const expenseDb = require('../models/expense')
const mongoose = require('mongoose')
const { RoomType, Room } = require('./roomModel')
const roomModel = require('./roomModel')


//api for storage of roomtype
exports.addRoomType = async (req, res) => {
    const {name} = req.body

    try{
        const newroomtype = await RoomType.create(req.body)
        res.status(200).json(newroomtype)
    }
    catch(error){
        res.status(401)
        throw new Error(" Cannot create new expense ")
    }
}  

//display all roomtypes
exports.getAllRoomTypes = async (req, res) =>{

    const getAllRoomTypes = await RoomType.find({})
                    .then((getAllRoomTypes) => {
                        res.status(200).json(getAllRoomTypes)
                    })
                    .catch((err) => {
                        res.json({message : 'oOPs... cannot retrieve expense list at the moment', error: err})
                    })
}





// rooms endpoint
//add room record
exports.addRoomRecord = async (req, res) => {

    const { name, price} = req.body

    try{
        const newRoom = await Room.create(req.body)
        res.status(200).json(newRoom)
    }
    catch(err){
        res.json({message:"Cannot create new room type", error: err})
    }
} 


// get all room records
exports.getAllRooms = async (req, res) =>{

    const newRoom = await Room.find({})
                    .then((newRoom) => {
                        res.status(200).json(newRoom)
                    })
                    .catch((err) => {
                        res.json({message : 'Rooms not available', errror: err})
                    })
}


//get a single room record
exports.getSingleRoom = async (req, res) =>{

    const roomrecord = await Room.findById(req.params.id)
                    .then((roomrecord) => {
                        res.status(200).json(roomrecord)
                    })
                    .catch((err) => {
                        res.json({message : 'No such room record', errror: err})
                    })
}


// update a single room record 
exports.updateRoomRecord = async (req , res) => {

    const updatedRecord = await Room.findOneAndUpdate(req.params.id, req.body)
                .then ((updatedRecord) => {
                    res.status(200).json(updatedRecord)
                })
                .catch((err) => {
                    res.json({message : "Error updating room record", error:err})
                })
}

// delete an single room record
exports.deleteRoomRecord = async (req , res) =>{

    const deletedExpense = await Room.findOneAndDelete(req.params.id)
                .then((deletedExpense) =>{
                    res.status(200).json(deletedExpense)
                })
                .catch((err) => {
                    res.json({message: "Error deleting record", error:err})
                })
}

module.exports = exports