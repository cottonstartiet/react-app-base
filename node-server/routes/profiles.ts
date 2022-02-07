import express from 'express';
import { getUserProfile, updateUserProfile } from './../controllers';

const router = express.Router();

// /api/profiles/*
router.get('/', getUserProfile);
router.patch('/', updateUserProfile);

export default router;
