import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import * as dbUser from './db/dbUser.js';
import * as dbPurchaseItem from './db/dbPurchaseItem.js';