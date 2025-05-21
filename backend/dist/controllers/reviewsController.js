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
exports.getReview = exports.getReviews = exports.updateReview = exports.removeReview = exports.addReview = void 0;
const db_1 = __importDefault(require("../db/db"));
const addReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId, rating, review } = req.body;
        const createdAt = new Date().toISOString();
        const stmt = db_1.default.prepare(`
			INSERT INTO reviews (movieId, rating, review, createdAt)
			VALUES (?, ?, ?, ?)
		`);
        const info = stmt.run(movieId, rating, review, createdAt);
        res.status(201).json({ message: 'Review added!', id: info.lastInsertRowid });
    }
    catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.addReview = addReview;
const removeReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { reviewId } = req.query;
        const stmt = db_1.default.prepare(`DELETE FROM reviews WHERE id = ?`);
        const result = stmt.run(reviewId);
        if (result.changes === 0) {
            return res.status(404).json({ message: "Review not found" });
        }
        res.status(200).json({ message: "Review deleted successfully" });
    }
    catch (err) {
        console.error("Error deleting review:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.removeReview = removeReview;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { movieId, rating, review } = req.body;
        const stmt = db_1.default.prepare(`
			UPDATE reviews
			SET rating = ?, review = ?
			WHERE movieId = ?
		`);
        const info = stmt.run(rating, review, movieId);
        if (info.changes === 0) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json({ message: 'Review updated!' });
    }
    catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
exports.updateReview = updateReview;
const getReviews = (req, res) => {
    try {
        const rows = db_1.default.prepare('SELECT * FROM reviews').all();
        res.json(rows);
    }
    catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getReviews = getReviews;
const getReview = (req, res) => {
    try {
        const { movieId } = req.query;
        const stmt = db_1.default.prepare(`
			SELECT * FROM reviews WHERE movieId = ? LIMIT 1
			`);
        const row = stmt.get(movieId);
        res.status(200).json(row);
    }
    catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getReview = getReview;
