import express from 'express';
import * as statisticsController from './../controller/statisticsController.js';

const router = express.Router();

router.get('/totalCandidates', statisticsController.getTotalCandidates);

router.get('/shortlistedCandidates', statisticsController.getShortlistedCandidates);

router.get('/rejectedCandidates', statisticsController.getRejectedCandidates);

router.get('/candidatesByGender', statisticsController.getCandidatesByGender);

router.get('/recentlyAddedJobs', statisticsController.getRecentlyAddedJobs);

export default router;
