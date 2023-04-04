const { model, Schema }  = require("mongoose")
const jwt = require("jsonwebtoken")
const joi = require("joi")
const passwordComplexity=require("joi-password-complexity")

const userSchema=  new Schema({
    name:{
        type:String,
        required: true
    },
     email:{
        type:String,
        required: true
    },
     password:{
        type:String,
        required: true
    },
     linkedin:{
        type:String,
        required: true
    },
     github:{
        type:String,
        required: true
    },
     role:{
        type:String,
        required: true   
    },
     skills:{
        type:String,
        required: true
    },
     image:{
        type:String,
        required: true
    },
     language:{
        type:String,
        required: true
    },  
},
 {timestamps:true}
)

userSchema.methods.generateAuthToken=function(){
    const token=jwt.sign({_id:this._id},process.env.JWT_KEY)
    return token;
}
const userModel = model("user",userSchema)

const validate = (data)=>{
    const schema=joi.opject({
        name:joi.string().required().label("Name"),
        email:joi.string().email().required().label("Email"),
        password:passwordComplexity().required.label("password")

    })
    return schema.validate(data)
}
module.exports = {userModel,validate}