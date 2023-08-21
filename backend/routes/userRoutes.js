const express =require('express')
const {login, signUp, getUserDetails, logout}= require('../controller/userController.js');
const { signUpValidate, loginValidate, authenticateUser } = require('../middleware/user.middleware.js');
const userRouter = express.Router();

userRouter.post('/signup',signUpValidate,signUp)
userRouter.post('/login',loginValidate,login)
userRouter.get('/',authenticateUser,getUserDetails)
userRouter.get('/logout',authenticateUser,logout)

module.exports =userRouter