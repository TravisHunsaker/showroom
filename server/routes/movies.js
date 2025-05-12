import { getMovie, getMovies } from '../controllers/moviesController.js';
import express from 'express';

const router = express.Router();

router.get('/getMovie', getMovie)
router.get('/getMovies', getMovies)

export default router