const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const connectToDb = require('./config/db.js')
const userRouter = require('./routes/userRoutes.js')

const app = express()
// database connection
connectToDb()
//middleware to work with json data
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5500",
    credentials: true,
  })
);
//User Route
app.use('/',userRouter)

module.exports =app;
