"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitDB = void 0;
const db_js_1 = __importDefault(require("./db.js"));
const InitDB = () => {
    db_js_1.default.exec(`
    CREATE TABLE IF NOT EXISTS reviews (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      movieId INTEGER NOT NULL UNIQUE,
      rating INTEGER,
      review TEXT,
      createdAt TEXT
    );
  `);
    db_js_1.default.exec(`
    CREATE TABLE IF NOT EXISTS watchlist (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      movieId INTEGER NOT NULL UNIQUE,
      createdAt TEXT
    );
  `);
    console.log('Database tables ensured.');
};
exports.InitDB = InitDB;
