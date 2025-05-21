"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchedMovie = exports.getMovies = exports.getMovie = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const API_KEY = process.env.TMDB_API_KEY;
const getMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.query;
        const tmdbRes = yield fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
        if (!tmdbRes.ok) {
            throw new Error('TMDB fetch failed');
        }
        const movieData = yield tmdbRes.json();
        res.status(200).json(movieData);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.getMovie = getMovie;
const getMovies = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { page } = req.query;
    try {
        const tmdbRes = yield fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
        if (!tmdbRes.ok) {
            throw new Error('TMDB fetch failed');
        }
        const movieData = yield tmdbRes.json();
        movieData.results = movieData.results.filter((movie) => movie.poster_path);
        res.status(200).json(movieData);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.getMovies = getMovies;
const getSearchedMovie = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, page } = req.query;
    try {
        const tmdbRes = yield fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${title}&page=${page}`);
        if (!tmdbRes.ok) {
            throw new Error('TMDB fetch failed');
        }
        const movieData = yield tmdbRes.json();
        movieData.results = movieData.results.filter((movie) => movie.poster_path);
        res.status(200).json(movieData);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(500).json({ error: err.message });
        }
        else {
            res.status(500).json({ error: 'An unknown error occurred' });
        }
    }
});
exports.getSearchedMovie = getSearchedMovie;
