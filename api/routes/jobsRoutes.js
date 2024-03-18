import express from 'express';
import * as jobsController from './../controller/jobsController.js';

const router = express.Router();

router.get('/', jobsController.getJobs);

router.post('/', jobsController.createJob);

router.get('/:id', jobsController.getJobById);

router.put('/:id', jobsController.updateJobById);

router.delete('/:id', jobsController.deleteJobById);

export default router;
