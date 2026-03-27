import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
//const swaggerJsDoc = require("swagger-jsdoc"); //alt fix
import argon2 from "argon2";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import { getAllUsers, getUserById, createUser } from './db/dbUser.js';

/**
 * @swagger
 * tags:
 *   name: user
 *   description: User related endpoints
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         user_id:
 *           type: integer
 *           description: the id of the user
 *         user_name:
 *           type: string
 *           description: username
 *         password:
 *           type: string
 *           description: hashed password
 *         email:
 *           type: string
 *           description: email
 *         created_at:
 *           type: timestamptz
 *           description: account creation date
 *         last_login:
 *           type: timestamptz
 *           description: last login time
 *         first_name:
 *           type: string
 *           description: first name
 *         last_name:
 *           type: string
 *           description: last name
 *         is_admin:
 *           type: boolean
 *           description: if the user has admin privileges
 */


/** 
 * @swagger 
 * /user/users:
 *  get:
 *    summary: Get List of all Users
 *    tags:
 *      - user
 *    responses:
 *      200:
 *        description: Returns all Users
*/
router.get("/users", async (req, res) => {
    res.json(await getAllUsers());
});

/** 
 * @swagger 
 * /user/user/{id}:
 *  get:
 *    summary: Get Name of a Single User
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID of the user
 *    tags:
 *      - user
 *    responses:
 *      200:
 *        description: Returns the User with the specified id
*/
router.get("/user/:id", async (req, res) => {
    const id = parseInt(req.params.id, 10);
    res.json(await getUserById(id));
});


/**
 * @swagger
 * /user/createUser:
 *   post:
 *     summary: Creates a new User
 *     tags: [User]
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
 *               email:
 *                 type: string
 *                 description: E-Mail-Address
 *               first_name:
 *                 type: string
 *                 description: first name
 *               last_name:
 *                 type: string
 *                 description: last name
 *     responses:
 *       201:
 *         description: Benutzer erfolgreich erstellt
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Ungültige Eingabedaten
 */
router.post("/createUser", async (req, res) => {
    const { user_name, password, email, first_name, last_name } = req.body;
    if (!user_name) { return res.status(400).json({ message: "username missing" });}
    if (!password) { return res.status(400).json({ message: "password missing" });}

    res.json(await createUser(user_name, password, email, first_name, last_name));
});