import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import * as dbItem from './db/dbItem.js';
import { userIsAdmin } from "./db/dbUser.js";

/**
 * @swagger
 * tags:
 *   name: item
 *   description: Item related endpoints
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         item_id:
 *           type: number
 *           description: the id of the item
 *         name:
 *           type: string
 *           description: item name
 *         item_type_id:
 *           type: number
 *           description: type of the item as id
 *         country_id:
 *           type: number
 *           description: country of origin of the item as id
 *         value:
 *           type: decimal(10,3)
 *           description: weight etc. of the product
 *         unit:
 *           type: string
 *           description: unit of the value
 *         item_producer_id:
 *           type: number
 *           description: producer of the item as id
 *         created_at:
 *           type: string
 *           description: creation time of the item
 */

//Get-Endpoints
/** 
 * @swagger 
 * /item/itemRaw/{id}:
 *  get:
 *    summary: Get the item with the provided id
 *    tags:
 *      - item
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns an item
 *      404:
 *        description: item with provided id not found
 *      500:
 *        description: internal error
*/
router.get("/itemRaw/:id", async (req, res) => {
    const inputNumber = parseInt(req.params.id);
    if (Number.isNaN(inputNumber)) return res.status(400).json({message: "input is not a number"});
    const ret = await dbItem.getItemByIdRaw(inputNumber);

    if(ret.success) return res.status(201).json(ret.item);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /item/item/{id}:
 *  get:
 *    summary: Get the item with the provided id and fk as values instead of ids
 *    tags:
 *      - item
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns an item
 *      404:
 *        description: item with provided id not found
 *      500:
 *        description: internal error
*/
router.get("/item/:id", async (req, res) => {
    const inputNumber = parseInt(req.params.id);
    if (Number.isNaN(inputNumber)) return res.status(400).json({message: "input is not a number"});
    const ret = await dbItem.getItemById(inputNumber);

    if(ret.success) return res.status(201).json(ret.item);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /item/itemByNameExact/{name}:
 *  get:
 *    summary: Get items with the exact provided name
 *    tags:
 *      - item
 *    parameters:
 *      - name: name
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns items
 *      500:
 *        description: internal error
*/
router.get("/itemByNameExact/:name", async (req, res) => {
    const ret = await dbItem.getItemByNameExact(req.params.name);

    if(ret.success) return res.status(201).json(ret.items);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /item/searchItemByName/{name}:
 *  get:
 *    summary: Get items with the provided name in the items name
 *    tags:
 *      - item
 *    parameters:
 *      - name: name
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns items
 *      500:
 *        description: internal error
*/
router.get("/searchItemByName/:name", async (req, res) => {
    const ret = await dbItem.searchItemByName(req.params.name);

    if(ret.success) return res.status(201).json(ret.items);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /item/itemsByTypeId/{type_id}:
 *  get:
 *    summary: Get items with the provided type_id
 *    tags:
 *      - item
 *    parameters:
 *      - name: type_id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns items
 *      500:
 *        description: internal error
*/
router.get("/itemsByTypeId/:type_id", async (req, res) => {
    const inputNumber = parseInt(req.params.type_id);
    if (Number.isNaN(inputNumber)) return res.status(400).json({message: "input is not a number"});
    const ret = await dbItem.getItemByTypeId(inputNumber);

    if(ret.success) return res.status(201).json(ret.items);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /item/itemsByCountryId/{country_id}:
 *  get:
 *    summary: Get items with the provided country_id
 *    tags:
 *      - item
 *    parameters:
 *      - name: country_id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns items
 *      500:
 *        description: internal error
*/
router.get("/itemsByCountryId/:country_id", async (req, res) => {
    const inputNumber = parseInt(req.params.country_id);
    if (Number.isNaN(inputNumber)) return res.status(400).json({message: "input is not a number"});
    const ret = await dbItem.getItemByCountryId(inputNumber);

    if(ret.success) return res.status(201).json(ret.items);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /item/itemsByProducerId/{producer_id}:
 *  get:
 *    summary: Get items with the provided producer_id
 *    tags:
 *      - item
 *    parameters:
 *      - name: producer_id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns items
 *      500:
 *        description: internal error
*/
router.get("/itemsByProducerId/:producer_id", async (req, res) => {
    const inputNumber = parseInt(req.params.producer_id);
    if (Number.isNaN(inputNumber)) return res.status(400).json({message: "input is not a number"});
    const ret = await dbItem.getItemByProducerId(inputNumber);

    if(ret.success) return res.status(201).json(ret.items);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /item/searchItem/{search}:
 *  get:
 *    summary: Get items with the provided search in name or typename or producername
 *    tags:
 *      - item
 *    parameters:
 *      - name: search
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns items
 *      500:
 *        description: internal error
*/
router.get("/searchItem/:search", async (req, res) => {
    const ret = await dbItem.searchItem(req.params.search);

    if(ret.success) return res.status(201).json(ret.items);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /item/allItems:
 *  get:
 *    summary: Returns a list of all items
 *    tags:
 *      - item
 *    responses:
 *      201:
 *        description: returns items
 *      401:
 *        description: unauthorized
 *      500:
 *        description: internal error
*/
router.get("/allItems", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "unauthorized"});
    const ret = await dbItem.getAllItems();

    if(ret.success) return res.status(201).json(ret.items);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Post-Endpoints
/**
 * @swagger
 * /item/createItem:
 *   post:
 *     summary: Creates a new item
 *     tags: 
 *       - item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - value
 *               - unit
 *             properties:
 *               name:
 *                 type: string
 *                 description: itemname
 *               item_type_id:
 *                 type: number
 *                 description: item type id
 *               country_id:
 *                 type: number
 *                 description: country id
 *               value:
 *                 type: number
 *                 description: weight/volume etc.
 *               unit:
 *                 type: string
 *                 description: e-mail-Address
 *               item_producer_id:
 *                 type: number
 *                 description: item producer id
 *     responses:
 *       201:
 *         description: item created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/item'
 *       400:
 *         description: missing Inputs
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.post("/createItem", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "unauthorized"});
    const { name, item_type_id, country_id, value, unit, item_producer_id } = req.body;
    
    if (!name) { return res.status(400).json({ message: "itemname missing" });}
    if (!value) { return res.status(400).json({ message: "value missing" });}
    if (!unit) { return res.status(400).json({ message: "unit missing" });}
    
    //check fk validity
    if (item_type_id && !await dbItem.itemTypeIdExists(parseInt(item_type_id))) return res.status(400).json({ message: "itemtype id not found" });
    if (country_id && !await dbItem.countryIdExists(parseInt(country_id))) return res.status(400).json({ message: "country id not found" });
    if (item_producer_id && !await dbItem.itemProducerIdExists(parseInt(item_producer_id))) return res.status(400).json({ message: "item producer id not found" });

    const ret = await dbItem.createItem(name, item_type_id, country_id, value, unit, item_producer_id);

    if(ret.success) return res.status(201).json({message: "item created successfully", item: ret.item});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Put-Endpoints
/**
 * @swagger
 * /item/updateItem:
 *   put:
 *     summary: Updates an existing item
 *     tags: 
 *       - item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - item_id
 *               - name
 *               - value
 *               - unit
 *             properties:
 *               item_id:
 *                 type: number
 *                 description: item id
 *               name:
 *                 type: string
 *                 description: itemname
 *               item_type_id:
 *                 type: number
 *                 description: item type id
 *               country_id:
 *                 type: number
 *                 description: country id
 *               value:
 *                 type: number
 *                 description: weight/volume etc.
 *               unit:
 *                 type: string
 *                 description: e-mail-Address
 *               item_producer_id:
 *                 type: number
 *                 description: item producer id
 *     responses:
 *       201:
 *         description: item updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/item'
 *       400:
 *         description: missing Inputs
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.put("/updateItem", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "unauthorized"});
    const { item_id, name, item_type_id, country_id, value, unit, item_producer_id } = req.body;
    
    if (!name) { return res.status(400).json({ message: "itemname missing" });}
    if (!value) { return res.status(400).json({ message: "value missing" });}
    if (!unit) { return res.status(400).json({ message: "unit missing" });}
    
    //check fk/item validity
    if (item_id==null || !(await dbItem.getItemByIdRaw(parseInt(item_id))).success) return res.status(400).json({ message: "item id not found" });
    if (item_type_id && !await dbItem.itemTypeIdExists(parseInt(item_type_id))) return res.status(400).json({ message: "itemtype id not found" });
    if (country_id && !await dbItem.countryIdExists(parseInt(country_id))) return res.status(400).json({ message: "country id not found" });
    if (item_producer_id && !await dbItem.itemProducerIdExists(parseInt(item_producer_id))) return res.status(400).json({ message: "item producer id not found" });

    const ret = await dbItem.updateItem(item_id, name, item_type_id, country_id, value, unit, item_producer_id);

    if(ret.success) return res.status(201).json({message: "item updated successfully", item: ret.item});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


//Patch-Endpoints