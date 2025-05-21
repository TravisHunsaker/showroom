import express from 'express';
import { addToWatchlist, getWatchlist, isMovieInWatchlist, removeFromWatchlist } from '../controllers/watchlistController';

const router = express.Router();

router.get('/getWatchlist', getWatchlist)
router.get('/isMovieInWatchlist', isMovieInWatchlist)
router.post('/addToWatchlist', addToWatchlist)
router.delete('/removeFromWatchlist', removeFromWatchlist)

export default router