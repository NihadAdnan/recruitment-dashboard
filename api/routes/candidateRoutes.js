import express from 'express';
import * as candidateController from './../controller/candidateController.js';

const router = express.Router();


router.get('/', candidateController.getAllCandidates);

router.post('/', candidateController.createCandidate);

router.get('/:id', candidateController.getCandidateById);

router.put('/:id', candidateController.updateCandidateById);

router.delete('/:id', candidateController.deleteCandidateById);

export default router;
