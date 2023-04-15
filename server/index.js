const express =require("express")
require("dotenv").config()
const connect = require("../server/db/connect")
const cors = require("cors")
const authRoute=require("./routes/auth")
const userRoute = require("./routes/user")
const taskRoute = require("./routes/task")
const history =  require("./routes/history")
const port = process.env.PORT || 5000

const app = express();

app.use(express.json(),cors(),express.urlencoded({extended:true}))
app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/task',taskRoute)
app.use('/history', history)

const start = async() =>{
    try{
        await connect(process.env.MONGO_URI);
        app.listen(port,()=>{
            console.log("The server running on port:", port);
        })
    }
    catch (error){
        console.log(error);

    }
}

start()