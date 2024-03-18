import Candidate from './../models/candidateModel.js';
import Job from '../models/jobModel.js';

// Calculate total number of candidates
export const getTotalCandidates = async (req, res) => {
  try {
    const totalCandidates = await Candidate.countDocuments();
    res.json({ totalCandidates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Calculate total number of shortlisted candidates
export const getShortlistedCandidates = async (req, res) => {
  try {
    const shortlistedCandidates = await Candidate.countDocuments({ status: 'shortlisted' });
    res.json({ shortlistedCandidates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Calculate total number of rejected candidates
export const getRejectedCandidates = async (req, res) => {
  try {
    const rejectedCandidates = await Candidate.countDocuments({ status: 'rejected' });
    res.json({ rejectedCandidates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Group candidates by gender
export const getCandidatesByGender = async (req, res) => {
  try {
    const candidatesByGender = await Candidate.aggregate([
      { $group: { _id: '$gender', count: { $sum: 1 } } }
    ]);
    res.json(candidatesByGender);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch recently added jobs
export const getRecentlyAddedJobs = async (req, res) => {
  try {
    const recentlyAddedJobs = await Job.find().sort({ date_posted: -1 }).limit(5);
    res.json(recentlyAddedJobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
