"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const watchlistController_1 = require("../controllers/watchlistController");
const router = express_1.default.Router();
router.post('/addToWatchlist', watchlistController_1.addToWatchlist);
router.delete('/removeFromWatchlist', watchlistController_1.removeFromWatchlist);
router.get('/getWatchlist', watchlistController_1.getWatchlist);
router.get('/isMovieInWatchlist', watchlistController_1.isMovieInWatchlist);
exports.default = router;
