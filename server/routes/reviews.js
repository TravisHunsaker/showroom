import { addReview, getReviews, getReview } from '../controllers/reviewsController.js';
import express from 'express';

const router = express.Router();

router.post('/addReview', addReview)
router.get('/getReviews', getReviews)
router.get('/getReview', getReview)

export default router