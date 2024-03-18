import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  requirements: {
    type: [String],
    required: true
  },
  posted_by: {
    type: String,
    required: true
  },
  date_posted: {
    type: Date,
    default: Date.now
  }
});

const Job = model('Job', jobSchema);

export default Job;
