const express =require("express")
require("dotenv").config()
const connect = require("../server/db/connect")
const cors = require("cors")
const port = process.env.PORT || 5000

const app = express();

app.use(express.json(),cors(),express.urlencoded({extended:true}))


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