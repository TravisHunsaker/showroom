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
exports.isMovieInWatchlist = exports.getWatchlist = exports.removeFromWatchlist = exports.addToWatchlist = void 0;
const db_1 = __importDefault(require("../db/db"));
const addToWatchlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.body;
        if (!movieId) {
            return res.status(400).json({ error: "movieId is required" });
        }
        const createdAt = new Date().toISOString();
        const stmt = db_1.default.prepare(`
            INSERT INTO watchlist (movieId, createdAt)
            VALUES (?, ?)
        `);
        const info = stmt.run(movieId, createdAt);
        res.status(201).json({ message: 'Movie added to watchlist!', id: info.lastInsertRowid });
    }
    catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.addToWatchlist = addToWatchlist;
const removeFromWatchlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.query;
        const stmt = db_1.default.prepare(`
			DELETE FROM watchlist WHERE movieId = ?
		`);
        const info = stmt.run(movieId);
        if (info.changes === 0) {
            return res.status(404).json({ message: 'Movie not found in watchlist' });
        }
        res.status(200).json({ message: 'Movie removed from watchlist!' });
    }
    catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.removeFromWatchlist = removeFromWatchlist;
const getWatchlist = (req, res) => {
    try {
        const rows = db_1.default.prepare('SELECT * FROM watchlist').all();
        res.json(rows);
    }
    catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getWatchlist = getWatchlist;
const isMovieInWatchlist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId } = req.query;
        const stmt = db_1.default.prepare(`
			SELECT 1 FROM watchlist WHERE movieId = ? LIMIT 1
		`);
        const row = stmt.get(movieId);
        res.status(200).json({ inWatchlist: !!row });
    }
    catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.isMovieInWatchlist = isMovieInWatchlist;
