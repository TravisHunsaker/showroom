"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reviewsController_1 = require("../controllers/reviewsController");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/addReview', reviewsController_1.addReview);
router.delete('/removeReview', reviewsController_1.removeReview);
router.post('/updateReview', reviewsController_1.updateReview);
router.get('/getReviews', reviewsController_1.getReviews);
router.get('/getReview', reviewsController_1.getReview);
exports.default = router;
