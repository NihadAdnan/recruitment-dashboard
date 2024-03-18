import express from 'express';
import * as candidateController from './../controller/candidateController.js';

const router = express.Router();

// GET all candidates
router.get('/', candidateController.getAllCandidates);

// Create a new candidate
router.post('/', candidateController.createCandidate);

// Get a candidate by ID
router.get('/:id', candidateController.getCandidateById);

// Update a candidate by ID
router.put('/:id', candidateController.updateCandidateById);

// Delete a candidate by ID
router.delete('/:id', candidateController.deleteCandidateById);

export default router;
