import mongoose from "mongoose";

const candidateSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    experince:{
        type:Number,
        required:true
    },
    exSalary:{
        type:Number,
        required:true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
      },
      photo: {
        data: Buffer,
        contentType: String,
      },
},
{ timestamps:true}
)

const candidate = mongoose.model('Candidate',candidateSchema)

export default candidate