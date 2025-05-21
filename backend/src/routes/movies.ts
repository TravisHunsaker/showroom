import { getMovie, getMovies, getSearchedMovie } from '../controllers/moviesController';
import express from 'express';

const router = express.Router();

router.get('/getMovie', getMovie)
router.get('/getMovies', getMovies)
router.get('/getSearchedMovie', getSearchedMovie)

export default router