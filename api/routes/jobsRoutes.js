import express from 'express';
import * as jobsController from './../controller/jobsController.js';

const router = express.Router();

// GET all jobs
router.get('/', jobsController.getJobs);

// Create a new job
router.post('/', jobsController.createJob);

// Get a job by ID
router.get('/:id', jobsController.getJobById);

// Update a job by ID
router.put('/:id', jobsController.updateJobById);

// Delete a job by ID
router.delete('/:id', jobsController.deleteJobById);

export default router;
