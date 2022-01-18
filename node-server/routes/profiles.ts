import express from 'express';
import profilesController from '../controllers/profilesController';

const router = express.Router();
// /api/profiles/*
router.get('/', profilesController.getUserProfile);
router.patch('/', profilesController.updateUserProfile);

export default router;
