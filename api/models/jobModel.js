import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    shortListed:{
        type:Number,
        required:true
    },
    inProcess:{
        type:Number,
        required:true
    },
    onHold:{
        type:Number,
        required:true
    },
    rejected:{
        type:Number,
        required:true
    },
},
{ timestamps:true}
)

const job = mongoose.model('Job',jobSchema)

export default job