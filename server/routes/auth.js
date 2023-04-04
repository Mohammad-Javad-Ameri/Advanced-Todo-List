const router = require("express").Router();
const {userModel,validate} = require("../models/user")
const Joi = require("joi");

router.post("/",async(req,res)=>{
    try {
        
    } catch (error) {
        
    }
})

const validate = (data) =>{
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: Joi.string().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = router