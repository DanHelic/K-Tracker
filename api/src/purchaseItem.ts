import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import { userIsAdmin } from "./db/dbUser.js";
import * as dbPurchaseItem from './db/dbPurchaseItem.js';
import { getPurchaseByIdNoItems } from "./db/dbPurchase.js";

/**
 * @swagger
 * tags:
 *   name: purchaseItem
 *   description: PurchaseItem related enpoints
 * components:
 *   schemas:
 *     purchaseItem:
 *       type: object
 *       properties:
 *         purchase_item_id:
 *           type: number
 *           description: the id of the purchased item
 *         purchase_id:
 *           type: number
 *           description: the id of the purchase the item belongs to
 *         item_id:
 *           type: number
 *           description: id of the item
 *         item_total_price:
 *           type: number
 *           description: total price of item(s) (single price x amount)
 *         amount:
 *           type: number
 *           description: amount of that items bought
 *         item_name:
 *           type: string
 *           description: alternativ to item_id (in case the item is not in the database)
 */


//Get-Endpoints
/** 
 * @swagger 
 * /purchaseItem/purchaseItem/{id}:
 *  get:
 *    summary: Get the purchaseItem with the provided id
 *    tags:
 *      - purchaseItem
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns a purchaseItem
 *      403:
 *        description: purchaseItem belongs to different user
 *      404:
 *        description: purchaseItem with provided id not found
 *      500:
 *        description: internal error
*/
router.get("/purchaseItem/:id", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbPurchaseItem.getPurchaseItemById(parseInt(req.params.id), req.user.userId);

    if(ret.success) return res.status(201).json(ret.purchaseItem);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchaseItem/purchaseItemRaw/{id}:
 *  get:
 *    summary: Get the purchaseItem with the provided id without information of purchase and item
 *    tags:
 *      - purchaseItem
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns a purchaseItem
 *      403:
 *        description: purchaseItem belongs to different user
 *      404:
 *        description: purchaseItem with provided id not found
 *      500:
 *        description: internal error
*/
router.get("/purchaseItemRaw/:id", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbPurchaseItem.getPurchaseItemByIdRaw(parseInt(req.params.id), req.user.userId);

    if(ret.success) return res.status(201).json(ret.purchaseItem);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchaseItem/PurchaseItemsOfUser/{id}:
 *  get:
 *    summary: Get all purchaseItems of specified user (admin only)
 *    tags:
 *      - purchaseItem
 *    parameters:
 *      - name: id
 *        in: path
 *        description: user id
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns purchaseItems
 *      403:
 *        description: unauthorized
 *      404:
 *        description: purchaseItems of user not found
 *      500:
 *        description: internal error
*/
router.get("/PurchaseItemsOfUser/:id", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "Unauthorized"});

    // @ts-ignore
    const ret = await dbPurchaseItem.getPurchaseItemsOfUser(parseInt(req.params.id));

    if(ret.success) return res.status(201).json(ret.purchaseItems);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchaseItem/purchaseItems:
 *  get:
 *    summary: Get all purchaseItems of current user paginated
 *    tags:
 *      - purchaseItem
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
 *        description: order by row (item_name/purchase_name/purchased_at/store_id/item_total_price/amount)
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
router.get("/purchaseItems", authMiddleware, async (req, res) => {
    let page = Number(req.query.page) || 1;
    if(page<1) page = 1;

    let limit = Number(req.query.limit) || 20;
    if(limit < 1) limit = 1;
    if(limit > 50) limit = 50;

    const offset = (page-1) * limit;

    let orderBy = "purchased_at";
    const possibleOrders = ["item_name","purchase_name","purchased_at","store_id","item_total_price","amount"];
    if(possibleOrders.includes(req.query.orderBy as string)) orderBy = req.query.orderBy as string;

    let order = "desc"
    if(req.query.order=="asc") order = "asc";

    // @ts-ignore
    const ret = await dbPurchaseItem.getPurchaseItemsOfUserPaginated(req.user.userId, offset, limit, orderBy, order);

    if(ret.success) return res.status(201).json(ret.purchaseItems);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchaseItem/searchPurchaseItemsByName/{search}:
 *  get:
 *    summary: Get the items with the provided search in them distinct of current user
 *    tags:
 *      - purchaseItem
 *    parameters:
 *      - name: search
 *        in: path
 *        description: search string
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns distinct purchaseItems by name with amount of occurrences
 *      403:
 *        description: unauthorized
 *      404:
 *        description: purchaseItems of user not found
 *      500:
 *        description: internal error
*/
router.get("/searchPurchaseItemsByName/:search", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbPurchaseItem.searchPurchaseItemsOfUserDinstinct(req.user.userId, req.params.search);

    if(ret.success) return res.status(201).json(ret.purchaseItems);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchaseItem/getPurchaseItemsByNameExact/{name}:
 *  get:
 *    summary: Get the items with the provided name as custom name (purchaseItems that have no item attached) of current user
 *    tags:
 *      - purchaseItem
 *    parameters:
 *      - name: name
 *        in: path
 *        description: name of purchaseItem
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns purchaseItems
 *      403:
 *        description: unauthorized
 *      404:
 *        description: purchaseItems of user not found
 *      500:
 *        description: internal error
*/
router.get("/getPurchaseItemsByNameExact/:name", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbPurchaseItem.getItemsByNameExact(req.user.userId, req.params.name);

    if(ret.success) return res.status(201).json(ret.purchaseItems);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /purchaseItem/getPurchaseItemByItemId/{itemId}:
 *  get:
 *    summary: Get the purchaseItems with the provided itemId as item_id (purchaseItems that have an item attached) of current user
 *    tags:
 *      - purchaseItem
 *    parameters:
 *      - name: itemId
 *        in: path
 *        description: id of the item
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns purchaseItems
 *      403:
 *        description: unauthorized
 *      404:
 *        description: purchaseItems of user not found
 *      500:
 *        description: internal error
*/
router.get("/getPurchaseItemByItemId/:itemId", authMiddleware, async (req, res) => {
    // @ts-ignore
    const ret = await dbPurchaseItem.getPurchaseItemByItemId(req.user.userId, parseInt(req.params.itemId));

    if(ret.success) return res.status(201).json(ret.purchaseItems);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//post-endpoints
/**
 * @swagger
 * /purchaseItem/createPurchaseItem:
 *   post:
 *     summary: Creates a new purchaseItem (item_id or item_name required)
 *     tags:
 *       - purchaseItem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - purchase_id
 *               - item_total_price
 *               - amount
 *             properties:
 *               purchase_id:
 *                 type: number
 *                 description: id of purchase
 *               item_id:
 *                 type: number
 *                 description: id of the associated item
 *               item_total_price:
 *                 type: number
 *                 description: total price of item(s)
 *               amount:
 *                 type: number
 *                 description: number of items
 *               item_name:
 *                 type: string
 *                 description: custom name of the purchaseItem
 *     responses:
 *       201:
 *         description: purchaseItem created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/purchaseItem'
 *       400:
 *         description: missing Inputs
 *       403:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.post("/createPurchaseItem", authMiddleware, async (req, res) => {
    let {purchase_id, item_id, item_total_price, amount, item_name} = req.body;

    if(!item_id && !item_name) return res.status(400).json({message: "item_id and item_name cannot be empty at the same time"});
    if(!purchase_id || !item_total_price || !amount) return res.status(400).json({message: "missing one or more inputs"});
    // @ts-ignore
    const purchase = await getPurchaseByIdNoItems(purchase_id, req.user.userId);
    if(!purchase.success) return res.status(purchase.code??400).json({message: purchase.message});

    if(item_id && item_name) item_name = null;

    // @ts-ignore
    const ret = await dbPurchaseItem.createPurchaseItem(purchase_id, item_id, item_total_price, amount, item_name);

    if(ret.success) return res.status(201).json({message: "purchaseItem created successful", purchaseItem: ret.purchaseItem});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})



//put-endpoints
/**
 * @swagger
 * /purchaseItem/updatePurchaseItem:
 *   put:
 *     summary: updates a purchaseItem (item_id or item_name required)
 *     tags:
 *       - purchaseItem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - purchase_item_id
 *               - purchase_id
 *               - item_total_price
 *               - amount
 *             properties:
 *               purchase_item_id:
 *                 type: number
 *                 description: id of purchaseItem
 *               purchase_id:
 *                 type: number
 *                 description: id of purchase
 *               item_id:
 *                 type: number
 *                 description: id of the associated item
 *               item_total_price:
 *                 type: number
 *                 description: total price of item(s)
 *               amount:
 *                 type: number
 *                 description: number of items
 *               item_name:
 *                 type: string
 *                 description: custom name of the purchaseItem
 *     responses:
 *       201:
 *         description: purchaseItem updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/purchaseItem'
 *       400:
 *         description: missing Inputs
 *       403:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.put("/updatePurchaseItem", authMiddleware, async (req, res) => {
    let {purchase_item_id, purchase_id, item_id, item_total_price, amount, item_name} = req.body;

    if(!item_id && !item_name) return res.status(400).json({message: "item_id and item_name cannot be empty at the same time"});
    if(!purchase_item_id || !purchase_id || !item_total_price || !amount) return res.status(400).json({message: "missing one or more inputs"});
    // @ts-ignore
    const purchase = await getPurchaseByIdNoItems(purchase_id, req.user.userId);
    if(!purchase.success) return res.status(purchase.code??400).json({message: purchase.message});

    if(item_id && item_name) item_name = null;

    // @ts-ignore
    const ret = await dbPurchaseItem.updatePurchaseItem(req.user.userId, purchase_item_id, purchase_id, item_id, item_total_price, amount, item_name);

    if(ret.success) return res.status(201).json({message: "purchaseItem created successful", purchaseItem: ret.purchaseItem});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})



//delete-endpoints
/**
 * @swagger
 * /purchaseItem/deletePurchaseItem/{id}:
 *   delete:
 *     summary: deletes a purchaseItem
 *     tags:
 *       - purchaseItem
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: number
 *     responses:
 *       201:
 *         description: purchaseItem deleted successfully
 *       400:
 *         description: missing Inputs
 *       403:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.delete("/deletePurchaseItem/:id", authMiddleware, async (req, res) => {
    if(!req.params.id) return res.status(400).json({message: "purches_item_id missing"});

    // @ts-ignore
    const ret = await dbPurchaseItem.deletePurchaseItem(req.user.userId, parseInt(req.params.id));

    if(ret.success) return res.status(201).json({message: "purchaseItem deleted successfully"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})