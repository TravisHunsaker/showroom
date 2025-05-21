import { Response, Request } from 'express';

import db from '../db/db';

export const addReview = (req: Request, res: Response) => {
	try {
		const { movieId, rating, review } = req.body;

		const createdAt = new Date().toISOString();

		const stmt = db.prepare(`
			INSERT INTO reviews (movieId, rating, review, createdAt)
			VALUES (?, ?, ?, ?)
		`);

		const info = stmt.run(movieId, rating, review, createdAt);

		res.status(201).json({
			message: 'Review added!',
			id: info.lastInsertRowid
		});
	} catch (err: unknown) {
		console.error('Unexpected server error:', err);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const removeReview = (req: Request, res: Response) => {
	try {
		const { reviewId } = req.query;

		const stmt = db.prepare(`DELETE FROM reviews WHERE id = ?`);
		const result = stmt.run(reviewId);

		if (result.changes === 0) {
			res.status(404).json({ error: 'Review not found' });
			return;
		}

		res.status(200).json({ message: 'Review deleted successfully' });
	} catch (err: unknown) {
		console.error('Error deleting review:', err);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const updateReview = (req: Request, res: Response) => {
	try {
		const { movieId, rating, review } = req.body;

		const stmt = db.prepare(`
			UPDATE reviews
			SET rating = ?, review = ?
			WHERE movieId = ?
		`);

		const info = stmt.run(rating, review, movieId);

		if (info.changes === 0) {
			res.status(404).json({ error: 'Review not found' });
			return;
		}

		res.status(201).json({ message: 'Review updated!' });
	} catch (err: unknown) {
		console.error('Unexpected server error:', err);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const getReviews = (req: Request, res: Response) => {
	try {
		const rows = db.prepare('SELECT * FROM reviews').all();
		res.json(rows);
	} catch (err: unknown) {
		console.error('Unexpected server error:', err);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const getReview = (req: Request, res: Response) => {
	try {
		const { movieId } = req.query;

		const stmt = db.prepare(`
			SELECT * FROM reviews WHERE movieId = ? LIMIT 1
			`);

		const row = stmt.get(movieId);
		res.status(200).json(row);
	} catch (err: unknown) {
		console.error('Unexpected server error:', err);
		res.status(500).json({ error: 'Internal server error' });
	}
};
