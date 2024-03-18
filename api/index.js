import express from 'express'
import mongoose from 'mongoose'
import candidateRoutes from './routes/candidateRoutes.js';
import jobsRoutes from './routes/jobsRoutes.js'
import statisticsRoutes from './routes/statisticsRoutes.js'


mongoose.connect("mongodb+srv://nihad08adnan:mern-stack@ayykori-mern.bot3a8y.mongodb.net/ayyKori-mern")

const app = express()

app.use(express.json());

app.use('/candidates', candidateRoutes);
app.use('/jobs', jobsRoutes);
app.use('/statistics', statisticsRoutes);

app.listen(3000,()=>{
    console.log('Server is running on port: 3000')
})