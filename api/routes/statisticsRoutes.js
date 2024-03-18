import express from 'express';
import * as statisticsController from './../controller/statisticsController.js';

const router = express.Router();

// Get total number of candidates
router.get('/totalCandidates', statisticsController.getTotalCandidates);

// Get total number of shortlisted candidates
router.get('/shortlistedCandidates', statisticsController.getShortlistedCandidates);

// Get total number of rejected candidates
router.get('/rejectedCandidates', statisticsController.getRejectedCandidates);

// Get number of candidates grouped by gender
router.get('/candidatesByGender', statisticsController.getCandidatesByGender);

// Get recently added jobs
router.get('/recentlyAddedJobs', statisticsController.getRecentlyAddedJobs);

export default router;
