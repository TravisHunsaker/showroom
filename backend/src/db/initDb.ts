import db from './db';

export const InitDB = () => {
  db.exec(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      movieId INTEGER NOT NULL UNIQUE,
      rating INTEGER,
      review TEXT,
      createdAt TEXT
    );
  `);

  db.exec(`
    CREATE TABLE IF NOT EXISTS watchlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      movieId INTEGER NOT NULL UNIQUE,
      createdAt TEXT
    );
  `);

  console.log('Database tables ensured.');
}