import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import * as dbUser from './db/dbUser.js';

/**
 * @swagger
 * tags:
 *   name: user
 *   description: User related endpoints
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         user_id:
 *           type: number
 *           description: the id of the user
 *         user_name:
 *           type: string
 *           description: username
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
 *    summary: Get a List of all users
 *    tags:
 *      - user
 *    responses:
 *      201:
 *        description: returns all users
 *      401:
 *        description: unauthorized
 *      500:
 *        description: internal error
*/
router.get("/users", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await dbUser.userIsAdmin(req.user.userId)) return res.status(401).json({message: "Unauthorized"});
    const ret = await dbUser.getAllUsers();

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
 *      201:
 *        description: returns the User with the specified id
 *      500:
 *        description: internal error
*/
router.get("/user", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbUser.getUserById(req.user.userId);

    if(ret.success) return res.status(201).json(ret.user);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /user/usernameAvailable/{username}:
 *  get:
 *    summary: If the given Username is available
 *    tags:
 *      - user
 *    parameters:
 *      - name: username
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns the true if username available and false otherwise
 *      500:
 *        description: internal error
*/
router.get("/usernameAvailable/:username", async (req, res) => {
    // @ts-ignore
    const ret = await dbUser.userNameAvailable(req.params.username);

    return res.status(201).json({available: ret});
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
 *                 description: username
 *               password:
 *                 type: string
 *                 description: password
 *               email:
 *                 type: string
 *                 description: e-mail-address
 *               first_name:
 *                 type: string
 *                 description: first name
 *               last_name:
 *                 type: string
 *                 description: last name
 *     responses:
 *       201:
 *         description: user created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/user'
 *       400:
 *         description: missing Inputs
 *       500:
 *         description: internal error
 */
router.post("/createUser", async (req, res) => {
    const { user_name, password, email, first_name, last_name } = req.body;
    
    if (!user_name) { return res.status(400).json({ message: "username missing" });}
    if (!password) { return res.status(400).json({ message: "password missing" });}

    if ((password as string).length < 6) { return res.status(400).json({ message: "password has to have 6 or more characters" });}
    
    if (!await dbUser.userNameAvailable(user_name)) return res.status(400).json({ message: "username already taken" });
    if (email && !await dbUser.emailAvailable(email)) return res.status(400).json({ message: "email already in use" });

    const ret = await dbUser.createUser(user_name, password, email, first_name, last_name);

    if(ret.success) return res.status(201).json({message: "User created successfully"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


//Patch-Endpoints
/**
 * @swagger
 * /user/updateUsername:
 *   patch:
 *     summary: Update of the username
 *     tags: 
 *       - user
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
 *                 description: current Username
 *               new_user_name:
 *                 type: string
 *                 description: new Username
 *               password:
 *                 type: string
 *                 description: password
 *     responses:
 *       201:
 *         description: username update successful
 *       400: 
 *         description: old and New Username are the same
 *       401: 
 *         description: username or password incorrect
 *       409: 
 *         description: username not available
 *       500:
 *         description: internal error
 */
router.patch("/updateUsername", authMiddleware, async (req, res) => {
    if (req.body.old_user_name==req.body.new_user_name) return res.status(400).json({message: "Old and New Username are the same"});
    // @ts-ignore
    const pwCheck = await dbUser.checkPasswordWithId(req.user.userId, req.body.password);
    if (!pwCheck.success) return res.status(401).json({message: "Password or username incorrect"});
    const uNameAvailable = await dbUser.userNameAvailable(req.body.new_user_name);
    if (!uNameAvailable) return res.status(409).json({message: "Username not available"});

    const ret = await dbUser.updateUsername(req.body.old_user_name, req.body.new_user_name);

    if(ret.success) return res.status(201).json({message: "Username update successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


/**
 * @swagger
 * /user/updatePassword:
 *   patch:
 *     summary: Update of the password
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - old_password
 *               - new_password
 *             properties:
 *               old_password:
 *                 type: string
 *                 description: current password
 *               new_password:
 *                 type: string
 *                 description: new password
 *     responses:
 *       201:
 *         description: password update successful
 *       400: 
 *         description: old and New Password are the same
 *       401: 
 *         description: username or password incorrect
 *       500:
 *         description: internal error
 */
router.patch("/updatePassword", authMiddleware, async (req, res) => {
    if (req.body.old_password==req.body.new_password) return res.status(400).json({message: "Old and New Password are the same"});
    // @ts-ignore
    const pwCheck = await dbUser.checkPasswordWithId(req.user.userId, req.body.old_password);
    if (!pwCheck.success) return res.status(401).json({message: pwCheck.message ?? "Username or password incorrect"});

    // @ts-ignore
    const ret = await dbUser.updatePassword(req.user.userId, req.body.old_password, req.body.new_password);

    if(ret.success) return res.status(201).json({message: "Password update successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


/**
 * @swagger
 * /user/updateEmail:
 *   patch:
 *     summary: Update of the email
 *     tags: [user]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - password
 *               - new_email
 *             properties:
 *               password:
 *                 type: string
 *                 description: current password
 *               new_email:
 *                 type: string
 *                 description: new email
 *     responses:
 *       201:
 *         description: email update successful
 *       401: 
 *         description: username or password incorrect
 *       409: 
 *         description: email already in use
 *       500:
 *         description: internal error
 */
router.patch("/updateEmail", authMiddleware, async (req, res) => {
    // @ts-ignore
    const pwCheck = await dbUser.checkPasswordWithId(req.user.userId, req.body.password);
    if (!pwCheck.success) return res.status(401).json({message: "Username or password incorrect"});
    const eAvailable = await dbUser.emailAvailable(req.body.new_email);
    if(!eAvailable) return res.status(409).json({message: "Email already in use"});

    // @ts-ignore
    const ret = await updateEmail(req.user.userId, req.body.old_email, req.body.new_email);

    if(ret.success) return res.status(201).json({message: "Email update successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


/**
 * @swagger
 * /user/updateName:
 *   patch:
 *     summary: Update of the first_name and last_name
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
 *         description: name update successful
 *       401: 
 *         description: username not found
 *       500:
 *         description: internal error
 */
router.patch("/updateName", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await updateName(req.user.userId, req.body.first_name, req.body.last_name);

    if(ret.success) return res.status(201).json({message: "name update successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})