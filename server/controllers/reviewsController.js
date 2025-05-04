import db from "../db/db.js";

export const addReview = async (req, res) => {
    try {
		const { movieId, rating, review } = req.body;

		const createdAt = new Date().toISOString();

		const stmt = db.prepare(`
			INSERT INTO reviews (movieId, rating, review, createdAt)
			VALUES (?, ?, ?, ?)
		`);

        const info = stmt.run(movieId, rating, review, createdAt);

        res.status(201).json({ message: 'Review added!', id: info.lastInsertRowid });
	} catch (err) {
		console.error("Unexpected server error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
}

export const getReviews = (req, res) => {
	try {
		const rows = db.prepare('SELECT * FROM reviews').all();
		res.json(rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};