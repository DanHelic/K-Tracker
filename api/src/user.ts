import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
//const swaggerJsDoc = require("swagger-jsdoc"); //alt fix
import argon2 from "argon2";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import { getAllUsers, getUserById, createUser, userNameAvailable, emailAvailable, checkPassword, changeUsername, changePassword, changeEmail, setLastLogin, changeName, userIsAdmin } from './db/dbUser.js';

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


//Get-Endpoints
/** 
 * @swagger 
 * /user/users:
 *  get:
 *    summary: Get a List of all Users
 *    tags:
 *      - user
 *    responses:
 *      201:
 *        description: Returns all Users
 *      500:
 *        description: Internal error
*/
router.get("/users", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "Unauthorized"});
    const ret = await getAllUsers();

    if(ret.success) return res.status(201).json(ret.users);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /user/user:
 *  get:
 *    summary: Get information of the current user
 *    tags:
 *      - user
 *    responses:
 *      200:
 *        description: Returns the User with the specified id
 *      500:
 *        description: Internal error
*/
router.get("/user", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await getUserById(req.user.userId);

    if(ret.success) return res.status(201).json(ret.user);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Post-Endpoints
/**
 * @swagger
 * /user/createUser:
 *   post:
 *     summary: Creates a new User
 *     tags: [user]
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
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       400:
 *         description: Missing Inputs
 *       500:
 *         description: Internal error
 */
router.post("/createUser", async (req, res) => {
    const { user_name, password, email, first_name, last_name } = req.body;
    
    if (!user_name) { return res.status(400).json({ message: "username missing" });}
    if (!password) { return res.status(400).json({ message: "password missing" });}

    if ((password as string).length < 6) { return res.status(400).json({ message: "password has to have 6 or more characters" });}
    
    if (!await userNameAvailable(user_name)) return res.status(400).json({ message: "username already taken" });
    if (!await emailAvailable(email)) return res.status(400).json({ message: "email already in use" });

    const ret = await createUser(user_name, password, email, first_name, last_name);

    if(ret.success) return res.status(201).json({message: "User created successfully"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


//Patch-Endpoints
/**
 * @swagger
 * /user/changeUsername:
 *   patch:
 *     summary: change of the username
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - old_user_name
 *               - new_user_name
 *               - password
 *             properties:
 *               old_user_name:
 *                 type: string
 *                 description: Current Username
 *               new_user_name:
 *                 type: string
 *                 description: New Username
 *               password:
 *                 type: string
 *                 description: password
 *     responses:
 *       201:
 *         description: Username change successful
 *       400: 
 *         description: Old and New Username are the same
 *       401: 
 *         description: Username or password incorrect
 *       409: 
 *         description: Username not available
 *       500:
 *         description: Internal error
 */
router.patch("/changeUsername", authMiddleware, async (req, res) => {
    if (req.body.old_user_name==req.body.new_user_name) return res.status(400).json({message: "Old and New Username are the same"});
    const pwCheck = await checkPassword(req.body.old_user_name, req.body.password);
    if (!pwCheck.success) return res.status(401).json({message: "Password or username incorrect"});
    const uNameAvailable = await userNameAvailable(req.body.new_user_name);
    if (!uNameAvailable) return res.status(409).json({message: "Username not available"});

    const ret = await changeUsername(req.body.old_user_name, req.body.new_user_name);

    if(ret.success) return res.status(201).json({message: "Username change successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


/**
 * @swagger
 * /user/changePassword:
 *   patch:
 *     summary: change of the password
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_name
 *               - old_password
 *               - new_password
 *             properties:
 *               user_name:
 *                 type: string
 *                 description: Username
 *               old_password:
 *                 type: string
 *                 description: current password
 *               new_password:
 *                 type: string
 *                 description: new password
 *     responses:
 *       201:
 *         description: Password change successful
 *       400: 
 *         description: Old and New Password are the same
 *       401: 
 *         description: Username or password incorrect
 *       500:
 *         description: Internal error
 */
router.patch("/changePassword", authMiddleware, async (req, res) => {
    if (req.body.old_password==req.body.new_password) return res.status(400).json({message: "Old and New Password are the same"});
    const pwCheck = await checkPassword(req.body.user_name, req.body.old_password);
    if (!pwCheck.success) return res.status(401).json({message: "Username or password incorrect"});

    const ret = await changePassword(req.body.user_name, req.body.old_password, req.body.new_password);

    if(ret.success) return res.status(201).json({message: "Password change successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


/**
 * @swagger
 * /user/changeEmail:
 *   patch:
 *     summary: change of the email
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user_name
 *               - password
 *               - new_email
 *             properties:
 *               user_name:
 *                 type: string
 *                 description: Username
 *               password:
 *                 type: string
 *                 description: current password
 *               new_email:
 *                 type: string
 *                 description: new email
 *     responses:
 *       201:
 *         description: Email change successful
 *       401: 
 *         description: Username or password incorrect
 *       409: 
 *         description: Email already in use
 *       500:
 *         description: Internal error
 */
router.patch("/changeEmail", authMiddleware, async (req, res) => {
    const pwCheck = await checkPassword(req.body.user_name, req.body.password);
    if (!pwCheck.success) return res.status(401).json({message: "Username or password incorrect"});
    const eAvailable = await emailAvailable(req.body.new_email);
    if(!eAvailable) return res.status(409).json({message: "Email already in use"});

    // @ts-ignore
    const ret = await changeEmail(req.user.userId, req.body.old_email, req.body.new_email);

    if(ret.success) return res.status(201).json({message: "Email change successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


/**
 * @swagger
 * /user/changeName:
 *   patch:
 *     summary: change of the first_name and last_name
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - new_first_name
 *               - new_last_name
 *             properties:
 *               new_first_name:
 *                 type: string
 *                 description: new first name
 *               new_last_name:
 *                 type: string
 *                 description: new last name
 *     responses:
 *       201:
 *         description: Name change successful
 *       401: 
 *         description: Username not found
 *       500:
 *         description: Internal error
 */
router.patch("/changeName", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await changeName(req.user.userId, req.body.first_name, req.body.last_name);

    if(ret.success) return res.status(201).json({message: "Name change successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})