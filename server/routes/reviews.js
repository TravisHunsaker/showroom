import { addReview, getReviews, getReview, updateReview } from '../controllers/reviewsController.js';
import express from 'express';

const router = express.Router();

router.post('/addReview', addReview)
router.post('/updateReview', updateReview)
router.get('/getReviews', getReviews)
router.get('/getReview', getReview)

export default router