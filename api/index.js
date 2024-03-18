import express from 'express'
import mongoose from 'mongoose'
import candidateRoutes from './routes/candidateRoutes.js';

mongoose.connect("mongodb+srv://nihad08adnan:mern-stack@ayykori-mern.bot3a8y.mongodb.net/ayyKori-mern")

const app = express()

app.use(express.json());

app.use('/candidates', candidateRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port: 3000')
})