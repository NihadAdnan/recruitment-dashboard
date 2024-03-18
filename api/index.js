import express from 'express'
import mongoose from 'mongoose'

mongoose.connect("mongodb+srv://nihad08adnan:mern-stack@ayykori-mern.bot3a8y.mongodb.net/ayyKori-mern")

const app = express()

app.listen(3000,()=>{
    console.log('Server is running on port: 3000')
})