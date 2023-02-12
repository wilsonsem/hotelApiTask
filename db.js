const mongoose = require('mongoose')


mongoose.set("strictQuery", false)
mongoose.connect( process.env.DB_URI)
    .then(() => {
            console.log("db connected")
        })
    .catch((error) => {
        console.log(error)
        console.log("error not connected")
    })