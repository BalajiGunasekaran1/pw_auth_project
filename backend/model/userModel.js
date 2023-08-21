const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')
//Database structure for user table/collection
const userSchema = new mongoose.Schema({
    name:{
        type: String,
    required: [true, "Name is Required field"],
    trim: true,
    maxlength: [50, "Name should be less than 50 characters"],
    },
    username:{
      type:String,
      required:true,
      trim:true,
      maxlength:[50,'username should be less than 50 characters']

    },
    email: {
        type: String,
        required: [true, "Email is required field"],
        unique: true,
      },
      password:{
        type:String,
        required:true,
        select:false
      },
      bio:{
        type:String,
        required:true
      }
},{
  timestamps:true,
})

userSchema.methods ={
 jwtToken(){
  return JWT.sign({
    id:this._id,
    email:this.email
  },process.env.SECRET,{expiresIn:'24h'}
  )
 }
}

// Save encrupted password using bcrypt library before upload into the database
userSchema.pre('save', async function(next){
    if (!this.isModified("password")) {
        return next();
      }
    
      this.password =await bcrypt.hash(this.password,10);
      return next();
})



module.exports = mongoose.model('User',userSchema);