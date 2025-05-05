import db from "../db/db.js";

export const addToWatchlist = async (req, res) => {
    try {
        const {movieId} = req.body;

        // Check if movieId is provided
        if (!movieId) {
            return res.status(400).json({ error: "movieId is required" });
        }

        console.log("Movie ID:", movieId); // Debugging step

        const createdAt = new Date().toISOString();

        const stmt = db.prepare(`
            INSERT INTO watchlist (movieId, createdAt)
            VALUES (?, ?)
        `);

        const info = stmt.run(movieId, createdAt);

        res.status(201).json({ message: 'Movie added to watchlist!', id: info.lastInsertRowid });
    } catch (err) {
        console.error("Unexpected server error:", err);
        res.status(500).json({ error: "Internal server error" });
    }
};

export const removeFromWatchlist = async (req, res) => {
	try {
		const { movieId } = req.body;

		const stmt = db.prepare(`
			DELETE FROM watchlist WHERE movieId = ?
		`);

		const info = stmt.run(movieId);

		if (info.changes === 0) {
			return res.status(404).json({ message: 'Movie not found in watchlist' });
		}

		res.status(200).json({ message: 'Movie removed from watchlist!' });
	} catch (err) {
		console.error("Unexpected server error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
};

export const getWatchlist = (req, res) => {
	try {
		const rows = db.prepare('SELECT * FROM watchlist').all();
		res.json(rows);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

export const isMovieInWatchlist = async (req, res) => {
	try {
		const { movieId } = req.query;

		const stmt = db.prepare(`
			SELECT 1 FROM watchlist WHERE movieId = ? LIMIT 1
		`);

		const row = stmt.get(movieId);

		res.status(200).json({ inWatchlist: !!row });
	} catch (err) {
		console.error("Unexpected server error:", err);
		res.status(500).json({ error: "Internal server error" });
	}
};