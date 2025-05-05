import express from 'express';
import { addToWatchlist, getWatchlist, isMovieInWatchlist, removeFromWatchlist } from '../controllers/watchlistController.js';

const router = express.Router();

router.post('/addToWatchlist', addToWatchlist)
router.delete('/removeFromWatchlist', removeFromWatchlist)
router.get('/getWatchlist', getWatchlist)
router.get('/isMovieInWatchlist', isMovieInWatchlist)

export default router