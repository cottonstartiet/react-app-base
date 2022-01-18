import express from 'express';
import healthCheckController from '../controllers/healthCheckController';

const router = express.Router();
// /api/health/*
router.get('/', healthCheckController.getApiHealth);

export default router;