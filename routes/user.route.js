const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt =  require('bcrypt')

const loginLimiter =  require('../middlewares/limiter.js')
const authenticateToken = require('../middlewares/auth.js')
const User = require('../models/user.model.js')
const router = express.Router()
require('dotenv').config()


// Create A User
router.post('/user/register', async(req,res)=>{
  try{
    const {name, username, password, email} = req.body
    const credentials = {
      name,
      username,
      password,
      email,
    }
    credentials.password = await bcrypt.hash(credentials.password,  14)
    const user = await User.create(credentials)
    
    return res.status(200).json({ user, message: "User Registerd Succesfully" })
    
  }catch(err){
    return res.status(500).json({message: err.message})
  } 
})

// Get all Users
router.get('/users', async (req,res)=>{
  try{
    const users = await User.find()
    return res.status(200).json(users)
  }catch(err){
    return res.status(500).json({message : err.message})
  }
})

// Login 
router.post('/user/login',loginLimiter, async (req,res) =>{
  try {
    const { username, password } = req.body
    if (!username || !password ) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
    const user = await User.findOne({ username });
    if (!user){
       return res.status(401).json({ message: "Invalid Credentials" }) 
    }{
      const isMatched =  await bcrypt.compare(password, user.password )
      if (!isMatched) {
        return res.status(401).json({message: 'Invalid Credentials'})
      }
      const payload = {
        id: user._id,
        name: user.name,
        username: user.username,
        email: user.email
      }
      
      const token = jwt.sign(payload, process.env.JWT_SECRET , {expiresIn: '5d'})
      
      return res.status(200).json({
        token,
        message: "User Logged in Succesfully"
      })
    }
  } catch (err) {
      console.error("Login Error:", err);
      return res.status(500).json({ message: "Internal server error" });
  }
})

// Logout
router.post('/user/logout', async(req,res)=>{
  try{
    return res.status(200).json({ message: 'Logged out successfully. Please delete the token on your end.' });
  }catch(err){
    return res.status(500).json({message: err.message})
  }
})
// Authorized User Dashboard 
router.get('/user/d', authenticateToken, async (req,res)=>{
  try{
    const user = await User.findById(req.user.id).select('-password')
    
    if (!user) {
      return res.status(404).json({message: "User not found"})
    }
    
    return res.status(200).json(user);
  }catch(err){
    return res.status(500).json({message : err.message})
  }
})

module.exports =  router