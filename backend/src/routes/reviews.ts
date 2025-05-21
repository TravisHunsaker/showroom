import { addReview, getReviews, getReview, updateReview, removeReview } from '../controllers/reviewsController';
import express from 'express';

const router = express.Router();

console.log(typeof updateReview);

router.post('/addReview', addReview)
router.get('/getReviews', getReviews)
router.get('/getReview', getReview)
router.delete('/removeReview', removeReview)
router.post('/updateReview', updateReview)

export default router