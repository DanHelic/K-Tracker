import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import {userIsAdmin} from './db/dbUser.js';
import * as dbPurchase from './db/dbPurchase.js';

/**
 * @swagger
 * tags:
 *   name: purchase
 *   description: Purchase related enpoints
 * components:
 *   schemas:
 *     user:
 *       type: object
 *       properties:
 *         purchase_id:
 *           type: number
 *           description: the id of the purchase
 *         user_id:
 *           type: string
 *           description: owner-id of the purchase
 *         purchased_at:
 *           type: timestamptz
 *           description: date of purchase
 *         store_id:
 *           type: number
 *           description: id of the store
 *         total_price:
 *           type: number
 *           description: total price of the purchase
 *         item_count:
 *           type: number
 *           description: number of items in the purchase
 *         purchase_name:
 *           type: string
 *           description: descriptiv name for the purchase by the user
 */

//Get-Endpoints
/** 
 * @swagger 
 * /purchase/purchase/{id}:
 *  get:
 *    summary: Get the purchase with the provided id
 *    tags:
 *      - purchase
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns a purchase
 *      400:
 *        description: purchase with provided id not found
 *      403:
 *        description: purchase belongs to different user
 *      500:
 *        description: internal error
*/
router.get("/purchase/:id", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbPurchase.getPurchaseById(parseInt(req.params.id), req.user.userId);

    if(ret.success) return res.status(201).json(ret.purchase);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchase/purchaseWithoutItems/{id}:
 *  get:
 *    summary: Get the purchase with the provided id without the items
 *    tags:
 *      - purchase
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns a purchase without items
 *      400:
 *        description: purchase with provided id not found
 *      403:
 *        description: purchase belongs to different user
 *      500:
 *        description: internal error
*/
router.get("/purchaseWithoutItems/:id", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbPurchase.getPurchaseByIdNoItems(parseInt(req.params.id), req.user.userId);

    if(ret.success) return res.status(201).json(ret.purchase);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchase/PurchasesOfUser/{id}:
 *  get:
 *    summary: Get all purchases of specified user (admin only)
 *    tags:
 *      - purchase
 *    parameters:
 *      - name: id
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns purchases
 *      403:
 *        description: unauthorized
 *      500:
 *        description: internal error
*/
router.get("/PurchasesOfUser/:id", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "Unauthorized"});

    // @ts-ignore
    const ret = await dbPurchase.getPurchasesOfUser(parseInt(req.params.id));

    if(ret.success) return res.status(201).json(ret.purchases);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchase/purchases:
 *  get:
 *    summary: Get all purchases of current user paginated
 *    tags:
 *      - purchase
 *    parameters:
 *      - name: page
 *        in: query
 *        description: page number
 *        required: false
 *        schema:
 *          type: number
 *      - name: limit
 *        in: query
 *        description: limit per page
 *        required: false
 *        schema:
 *          type: number
 *      - name: orderBy
 *        in: query
 *        description: order by row (purchase_name/purchased_at/store_id/total_price/item_count)
 *        required: false
 *        schema:
 *          type: string
 *      - name: order
 *        in: query
 *        description: order of query (asc or desc)
 *        required: false
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns paginated purchases of current user
 *      403:
 *        description: unauthorized
 *      500:
 *        description: internal error
*/
router.get("/purchases", authMiddleware, async (req, res) => {
    let page = Number(req.query.page) || 1;
    if(page<1) page = 1;

    let limit = Number(req.query.limit) || 20;
    if(limit<1 || limit > 50) limit = 20;

    const offset = (page-1) * limit;

    let orderBy = "purchased_at";
    const possibleOrders = ["purchase_name","purchased_at","store_id","total_price","item_count"];
    if(possibleOrders.includes(req.query.orderBy as string)) orderBy = req.query.orderBy as string;

    let order = "desc"
    if(req.query.order=="asc" || req.query.order=="desc") order = req.query.order;

    // @ts-ignore
    const ret = await dbPurchase.getPurchasesOfUserPaginated(req.user.userId, offset, limit, orderBy, order);

    if(ret.success) return res.status(201).json(ret.purchases);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


//Post-Endpoints
/**
 * @swagger
 * /purchase/createPurchase:
 *   post:
 *     summary: Creates a new purchase
 *     tags:
 *       - purchase
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *             properties:
 *               purchased_at:
 *                 type: string
 *                 description: date of purchase
 *               store_id:
 *                 type: number
 *                 description: store id
 *               total_price:
 *                 type: number
 *                 description: total price of purchase
 *               item_count:
 *                 type: number
 *                 description: total number of items
 *               purchase_name:
 *                 type: string
 *                 description: descriptiv name of purchase
 *     responses:
 *       201:
 *         description: purchase created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/purchase'
 *       400:
 *         description: missing Inputs
 *       403:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.post("/createPurchase", authMiddleware, async (req, res) => {
    const {purchased_at, store_id, total_price, item_count, purchase_name} = req.body;

    // @ts-ignore
    const ret = await dbPurchase.createPurchase(req.user.userId, purchased_at, store_id, total_price, item_count, purchase_name);

    if(ret.success) return res.status(201).json({message: "store created successful", store: ret.purchase});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


//Put-Endpoints



//Patch-Endpoints