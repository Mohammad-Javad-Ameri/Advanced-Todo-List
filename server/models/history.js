const { model, Schema }  = require("mongoose")

const historySchema=new Schema(
    {
    user: {
        type:String,
        required: true
     }
,
     action:{
        type: String,
        enum: ["create","delete","update","null"],
        default:"null"

     }
}
,

     {timestamp: true }

)

module.exports =model("history",historySchema)