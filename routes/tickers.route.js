import express from "express";
import { getTickers } from "../controllers/tickers.controller.js";

const router = express.Router();

router.get('/', getTickers);

export default router;