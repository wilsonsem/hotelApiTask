// const expenseDb = require('../models/expense')
const mongoose = require('mongoose')
const { RoomType } = require('./roomModel')
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
    console.log("Working")

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
                        res.json({message : 'oOPs... cannot retrieve expense list at the moment', errror: err})
                    })
}


//get a single room record
exports.getSingleRoom = async (req, res) =>{
    // const { id } = req.params
    const singleExpense = await Expense.findById(req.params.id)
                    .then((singleExpense) => {
                        res.status(200).json(singleExpense)
                    })
                    .catch((err) => {
                        res.json({message : 'No such record', errror: err})
                    })
}

// update a single room record 
exports.updateRoomRecord = async (req , res) => {

    const updatedExpense = await Expense.findOneAndUpdate(req.params.id, req.body)
                .then ((updatedExpense) => {
                    res.status(200).json(updatedExpense)
                })
                .catch((err) => {
                    res.json({message : "Error updating expense record", error:err})
                })
}


// delete an single room record
exports.deleteRoomRecord = async (req , res) =>{

    const deletedExpense = await Expense.findOneAndDelete(req.params.id)
                .then((deletedExpense) =>{
                    res.status(200).json(deletedExpense)
                })
                .catch((err) => {
                    res.json({message: "Error deleting expense", error:err})
                })
}

module.exports = exports