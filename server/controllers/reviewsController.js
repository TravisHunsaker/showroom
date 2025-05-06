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

export const getReview = (req, res) => {
	try {
		const { movieId } = req.query;
		
		const stmt = db.prepare(`
			SELECT * FROM reviews WHERE movieId = ? LIMIT 1
			`);
			
			const row = stmt.get(movieId);
		res.status(200).json(row);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};