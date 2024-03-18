import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const candidateSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  job_id: {
    type: Schema.Types.ObjectId,
    ref: 'Job',
    required: true
  },
  date_applied: {
    type: Date,
    default: Date.now
  }
});

const Candidate = model('Candidate', candidateSchema);

export default Candidate;
