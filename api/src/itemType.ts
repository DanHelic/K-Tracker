import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import * as dbItemType from './db/dbItemType.js';
import { userIsAdmin } from "./db/dbUser.js";

/**
 * @swagger
 * tags:
 *   name: itemType
 *   description: Itemtype related endpoints
 * components:
 *   schemas:
 *     itemType:
 *       type: object
 *       properties:
 *         item_type_id:
 *           type: number
 *           description: the id of the itemtype
 *         item_type_name:
 *           type: string
 *           description: item producer name
 */


//Get-Endpoints
/** 
 * @swagger 
 * /itemType/itemType/{id}:
 *  get:
 *    summary: Get the itemtype with the provided id
 *    tags:
 *      - itemType
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: returns an itemtype
 *      404:
 *        description: itemtype with provided id not found
 *      500:
 *        description: internal error
*/
router.get("/itemType/:id", async (req, res) => {
    const inputNumber = parseInt(req.params.id);
    if (Number.isNaN(inputNumber)) return res.status(400).json({message: "input is not a number"});
    const ret = await dbItemType.getItemTypeById(inputNumber);

    if(ret.success) return res.status(201).json(ret.item);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /itemType/itemTypeByName/{name}:
 *  get:
 *    summary: Get the itemtypes with the provided name
 *    tags:
 *      - itemType
 *    parameters:
 *      - name: name
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns itemtypes
 *      500:
 *        description: internal error
*/
router.get("/itemTypeByName/:name", async (req, res) => {
    const ret = await dbItemType.getItemTypeByName(req.params.name);

    if(ret.success) return res.status(201).json(ret.item);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Post-Endpoints
/**
 * @swagger
 * /itemType/createItemType:
 *   post:
 *     summary: Creates a new itemtype
 *     tags: 
 *       - itemType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - item_type_name
 *             properties:
 *               item_type_name:
 *                 type: string
 *                 description: itemtype name
 *     responses:
 *       201:
 *         description: itemtype created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/itemType'
 *       400:
 *         description: missing Inputs
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.post("/createItemType", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "unauthorized"});
    const { item_type_name } = req.body;
    
    if (!item_type_name) { return res.status(400).json({ message: "itemname missing" });}

    const ret = await dbItemType.createItemType(item_type_name);

    if(ret.success) return res.status(201).json({message: "itemtype created successfully", itemType: ret.itemtype});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Patch-Endpoints
/**
 * @swagger
 * /itemType/updateItemType:
 *   patch:
 *     summary: Update of the itemtype
 *     tags: 
 *       - itemType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - item_type_id
 *               - item_type_name
 *             properties:
 *               item_type_id:
 *                 type: number
 *                 description: itemtype id
 *               item_type_name:
 *                 type: string
 *                 description: itemtype name
 *     responses:
 *       201:
 *         description: itemtype update successful
 *       400: 
 *         description: input not found or invalid
 *       401: 
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.patch("/updateItemType", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "unauthorized"});
    const { item_type_id, item_type_name } = req.body;

    if (!item_type_id) return res.status(400).json({message: "item_Type_Id not found"});
    if (!item_type_name) return res.status(400).json({message: "item_type_name not found"});

    if (!(await dbItemType.getItemTypeById(parseInt(item_type_id))).success) return res.status(400).json({message: "itemtype not found"});

    const ret = await dbItemType.updateItemType(item_type_id, item_type_name);

    if(ret.success) return res.status(201).json({message: "itemtype update successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})