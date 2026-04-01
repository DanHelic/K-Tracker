import express from "express";
import jwt from "jsonwebtoken";
import { REFRESH_SECRET } from "./session/tokens.js";
//const swaggerJsDoc = require("swagger-jsdoc"); //alt fix

const app = express();
app.use(express.json());

const router = express.Router();
export default router;
import { checkPassword, setLastLogin } from './db/dbUser.js';
import { generateAccessToken, generateRefreshToken } from "./session/tokens.js";
import * as tokenStore from "./session/tokenStore.js";


/**
 * @swagger
 * tags:
 *   name: auth
 *   description: Authentification related endpoints
*/

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login specified user
 *     tags: [auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_name
 *               - password
 *             properties:
 *               user_name:
 *                 type: string
 *                 description: Username
 *               password:
 *                 type: string
 *                 description: password
 *     responses:
 *       201:
 *         description: Login successful
 *       401: 
 *         description: Password or username incorrect
 *       500:
 *         description: Internal error
 */
router.post("/login", async (req, res) => {
    const ret = await checkPassword(req.body.user_name, req.body.password);

    //create and return token
    const accessToken = generateAccessToken(ret.id as number);
    const refreshToken = generateRefreshToken(ret.id as number);

    tokenStore.add(refreshToken);

    res.cookie("refreshToken", refreshToken, { httpOnly: true, secure: true });

    if(ret.success){
        const updateLastLogin = await setLastLogin(req.body.user_name);
        if(updateLastLogin.success) return res.status(201).json({message: "Login successful", accessToken: accessToken });
    }
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


/**
 * @swagger
 * /auth/refresh:
 *   post:
 *     summary: creates a new access token
 *     tags: [auth]
 *     responses:
 *       200:
 *         description: new access token created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *               accessToken:
 *                 type: string
 *       403: 
 *         description: refresh token invalid
 */
router.post("/refresh", (req, res) => {
    if(req.cookies?.refreshToken==null) return res.sendStatus(400);
    const token = req.cookies.refreshToken;
    if (!token || !tokenStore.exists(token)) return res.sendStatus(403);

    try {
        const user = jwt.verify(token, REFRESH_SECRET);
        if (typeof user === "object" && user !== null && "userId" in user) {
            const newAccessToken = generateAccessToken(user.userName);
            return res.json({ accessToken: newAccessToken });
        } else {
            return res.sendStatus(403);
        }
    } catch {
        return res.sendStatus(403);
    }
});


/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout of the user
 *     tags: [auth]
 *     responses:
 *       204:
 *         description: logout successful
 *       403: 
 *         description: refresh token not found
 */
router.post("/logout", (req, res) => {
    if(req.cookies?.refreshToken==null) return res.sendStatus(403).json({message: "refresh token not found"});;
    const token = req.cookies.refreshToken;
    tokenStore.remove(token);
    res.clearCookie("refreshToken");
    res.sendStatus(204).json({message: "logout successful"});
});