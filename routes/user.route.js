const express = require('express')
const bcrypt =  require('bcrypt')
const User = require('../models/user.model.js')
const router = express.Router()

const saltRounds = 14;

router.post('/user/register', async(req,res)=>{
  try{
    const {name, username, password, email} = req.body
    const credentials = {
      name,
      username,
      password,
      email,
    }
    credentials.password = await bcrypt.hash(credentials.password,  saltRounds)
    const user = await User.create(credentials)
    return res.status(200).json({ user, message: "User Registerd Succesfully" })
  }catch(err){
    return res.status(500).json({message: err.message})
  } 
})

router.get('/users', async (req,res)=>{
  try{
    const users = await User.find()
    return res.status(200).json(users)
  }catch(err){
    return res.status(500).json({message : err.message})
  }
})

router.post('/user/login', async (req,res) =>{
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
      
      return res.status(200).json({
        user: {
              id: user._id,
              name: user.name,
              username: user.username,
              email: user.email,
            }, 
        message: "User Logged in Succesfully"
      })
    }
  }catch(err){
    return res.status(500).json({message : err.message})
  }
})

module.exports =  router