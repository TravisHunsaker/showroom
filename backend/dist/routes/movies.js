"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moviesController_1 = require("../controllers/moviesController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/getMovie', moviesController_1.getMovie);
router.get('/getMovies', moviesController_1.getMovies);
router.get('/getSearchedMovie', moviesController_1.getSearchedMovie);
exports.default = router;
