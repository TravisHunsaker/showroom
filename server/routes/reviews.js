import { addReview, getReviews } from '../controllers/reviewsController.js';
import express from 'express';

const router = express.Router();

router.post('/addReview', addReview)
router.get('/getReviews', getReviews)