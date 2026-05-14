import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import * as dbStore from './db/dbStore.js';
import { userIsAdmin } from "./db/dbUser.js";


/**
 * @swagger
 * tags:
 *   name: store
 *   description: Store related endpoints
 * components:
 *   schemas:
 *     store:
 *       type: object
 *       properties:
 *         store_id:
 *           type: number
 *           description: the id of the store
 *         name:
 *           type: string
 *           description: store name
 *         user_id:
 *           type: number
 *           description: the userId of the user that the store created
 *         location:
 *           type: string
 *           description: location of the store
 */

//Get-Endpoints
/** 
 * @swagger 
 * /store/store/{id}:
 *  get:
 *    summary: Get the store with the provided id
 *    tags:
 *      - store
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns a store
 *      404:
 *        description: store with provided id not found
 *      403:
 *        description: store belongs to different user
 *      500:
 *        description: internal error
*/
router.get("/store/:id", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbStore.getStoreById(parseInt(req.params.id), req.user.userId);

    if(ret.success) return res.status(201).json(ret.store);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /store/storeByName/{name}:
 *  get:
 *    summary: Get the store with the provided name of user
 *    tags:
 *      - store
 *    parameters:
 *      - name: name
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns stores
 *      500:
 *        description: internal error
*/
router.get("/storeByName/:name", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbStore.searchStoreByName(req.params.name, req.user.userId);

    if(ret.success) return res.status(201).json(ret.stores);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /store/searchStore/{search}:
 *  get:
 *    summary: Get the stores with the provided search in name or location of current user
 *    tags:
 *      - store
 *    parameters:
 *      - name: search
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns stores
 *      500:
 *        description: internal error
*/
router.get("/searchStore/:search", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbStore.searchStore(req.params.search, req.user.userId);

    if(ret.success) return res.status(201).json(ret.stores);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /store/storesByUser:
 *  get:
 *    summary: Get all stores of current user
 *    tags:
 *      - store
 *    responses:
 *      201:
 *        description: returns stores
 *      500:
 *        description: internal error
*/
router.get("/storesByUser", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbStore.getStoresOfUser(req.user.userId);

    if(ret.success) return res.status(201).json(ret.stores);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Post-Endpoints
/**
 * @swagger
 * /store/createStore:
 *   post:
 *     summary: Creates a new store
 *     tags:
 *       - store
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: storename
 *               location:
 *                 type: string
 *                 description: store location
 *     responses:
 *       201:
 *         description: store created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/store'
 *       400:
 *         description: missing Inputs
 *       403:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.post("/createStore", authMiddleware, async (req, res) => {
    const {name, location} = req.body;

    // @ts-ignore
    const ret = await dbStore.createStore(name, req.user.userId, location);

    if(ret.success) return res.status(201).json({message: "store created successful", store: ret.store});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})



//Patch-Endpoints
/**
 * @swagger
 * /store/updateName:
 *   post:
 *     summary: Update name of Store
 *     tags:
 *       - store
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - store_id
 *               - name
 *             properties:
 *               store_id:
 *                 type: number
 *                 description: store id
 *               name:
 *                 type: string
 *                 description: new storename
 *     responses:
 *       201:
 *         description: storename update successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/store'
 *       400:
 *         description: missing Inputs
 *       403:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.post("/updateName", authMiddleware, async (req, res) => {
    const {store_id, name} = req.body;

    // @ts-ignore
    const storeCheck = await dbStore.getStoreById(store_id, req.user.userId);
    if(!storeCheck.success) return res.status(storeCheck.code??400).json(storeCheck.message);
    
    // @ts-ignore
    const ret = await dbStore.updateName(store_id, name, req.user.userId);

    if(ret.success) return res.status(201).json({message: "storename update successful", store: ret.store});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


/**
 * @swagger
 * /store/updateLocation:
 *   post:
 *     summary: Update location of Store
 *     tags:
 *       - store
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - store_id
 *               - location
 *             properties:
 *               store_id:
 *                 type: number
 *                 description: store id
 *               location:
 *                 type: string
 *                 description: new storelocation
 *     responses:
 *       201:
 *         description: storelocation update successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/store'
 *       400:
 *         description: missing Inputs
 *       403:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.post("/updateLocation", authMiddleware, async (req, res) => {
    const {store_id, location} = req.body;

    // @ts-ignore
    const storeCheck = await dbStore.getStoreById(store_id, req.user.userId);
    if(!storeCheck.success) return res.status(storeCheck.code??400).json(storeCheck.message);

    // @ts-ignore
    const ret = await dbStore.updateLocation(store_id, location, req.user.userId);

    if(ret.success) return res.status(201).json({message: "storelocation update successful", store: ret.store});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})