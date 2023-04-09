const { model, Schema }  = require("mongoose")
const jwt = require("jsonwebtoken");
const joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema=  new Schema({
    name:{
        type:String,
        
    },
     email:{
        type:String,
        
    },
     password:{
        type:String,
        
    },
     linkedin:{
        type:String,
        
    },
     github:{
        type:String,
        
    },
     role:{
        type:String,
       enum:["user","admin"],
       default:"user"   
    },
     skills:{
        type:String,
        
    },
     image:{
        type:String,
        
    },
     language:{
        type:String,
        
    },  
},
 {timestamps:true}
)

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
		expiresIn: "7d",
	});
	return token;
};
const userModel = model("user",userSchema)

const validate = (data)=>{
    const schema=joi.object().keys({
        name:joi.string().required().label("Name"),
        email:joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password")

    })
    return schema.validate(data)
}
module.exports = {userModel,validate}