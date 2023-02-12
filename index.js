const express = require('express')
const bodyParser = require ('body-parser')
require('dotenv').config()
require('./db')
const app = express()
const appRoutes = require('./routes')



app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use('/api/v1', appRoutes)


const PORT = process.env.PORT || 8008
app.listen(process.env.PORT, ()=>{
    console.log(`Hotel API running on ${process.env.PORT}`)
})