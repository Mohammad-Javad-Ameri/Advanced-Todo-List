const {model,Schema }=require("mongoose")

const taskSchema=new Schema(
    {
        title: {
            type:String,
            required: true
        },
        description: {
             type:String,
            required: true
         },
         isDone: {
             type:Boolean,
            default: false
         },
         color: {
           type: String,
             required: false,
        },
         user: {
              type: Schema.Types.ObjectId,
               ref: "User",
                required: true
         }
    }
    ,
    {
        timestamps:true
    }
);

module.exports = model("task",taskSchema)

