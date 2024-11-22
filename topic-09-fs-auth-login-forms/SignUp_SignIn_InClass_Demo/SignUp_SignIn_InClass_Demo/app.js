const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')
const mongoose= require('mongoose')
require('dotenv').config()
const authRoute = require('./routes/authRoute')
const {requireAuth} = require("./utils/utils");

// middlewares
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

// view engine
app.set('view engine', 'ejs')

// database connection
const connectionString = process.env.MONGODB_CONNECTION_STRING
mongoose.connect(connectionString)
.then( res => app.listen(process.env.PORT))
.catch(err=> console.log(err))

app.get('/', (req,res)=> res.render('home'))
app.get('/employees', requireAuth, (req,res)=> {
    res.render('employees')
})
app.use(authRoute)