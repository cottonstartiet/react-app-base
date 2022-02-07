import express from 'express';
import { getApiHealth } from './../controllers';


const router = express.Router();

// /api/health/*
router.get('/', getApiHealth);

export default router;