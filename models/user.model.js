const mongoose =  require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is Required']
  },
  
  username: {
    type: String,
    required: [true, 'Username is Required']
  },
  
  password: {
    type: String,
    required: [true, 'Password is Required']
  },
  
  email: {
    type: String,
    required: [true, 'Email is Required']
  },
})

const User =  mongoose.model('User', UserSchema)
module.exports = User