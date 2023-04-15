const history=require("../models/history");

const getAllHistory=async(req,res)=>{
    try {
        const histories = await history.find({}).sort({createdAt: -1});
        res.status(200).json(histories)
    } catch (error) {
        res.status(404).json({error: error.massage})
    }
}


const createHistory = async (req,res) => {
    try {
        const { action,user } = req.body;
        const newHistory = await new history({user,action}).save();
        res.status(201).send({ message: "History created successfully" })

    }  catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal Server Error" })
    }
};

module.exports = {getAllHistory,createHistory}