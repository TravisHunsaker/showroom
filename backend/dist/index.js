"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const reviews_1 = __importDefault(require("./routes/reviews"));
const watchlist_1 = __importDefault(require("./routes/watchlist"));
const movies_1 = __importDefault(require("./routes/movies"));
const initDb_1 = require("./db/initDb");
const PORT = 5000;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
(0, initDb_1.InitDB)();
app.use('/reviews', reviews_1.default);
app.use('/watchlist', watchlist_1.default);
app.use('/movies', movies_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
