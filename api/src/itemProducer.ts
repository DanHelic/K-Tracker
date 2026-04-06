import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import * as dbItemProducer from './db/dbItemProducer.js';
import { userIsAdmin } from "./db/dbUser.js";
import { getCountryById } from "./db/dbCountry.js";

/**
 * @swagger
 * tags:
 *   name: itemProducer
 *   description: ItemProducer related endpoints
 * components:
 *   schemas:
 *     itemProducer:
 *       type: object
 *       properties:
 *         item_producer_id:
 *           type: number
 *           description: the id of the item producer
 *         item_producer_name:
 *           type: string
 *           description: item producer name
 *         country_id:
 *           type: number
 *           description: country of origin of the item as id
 */


//Get-Endpoints
/** 
 * @swagger 
 * /itemProducer/itemProducer/{id}:
 *  get:
 *    summary: Get the itemproducer with the provided id
 *    tags:
 *      - itemProducer
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: number
 *    responses:
 *      201:
 *        description: Returns an itemproducer
 *      400:
 *        description: itemproducer with provided id not found
 *      500:
 *        description: Internal error
*/
router.get("/itemProducer/:id", async (req, res) => {
    const inputNumber = parseInt(req.params.id);
    if (Number.isNaN(inputNumber)) return res.status(400).json({message: "Input is not a number"});
    const ret = await dbItemProducer.getItemProducerById(inputNumber);

    if(ret.success) return res.status(201).json(ret.item);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Post-Endpoints
/**
 * @swagger
 * /itemProducer/createItemProducer:
 *   post:
 *     summary: Creates a new itemProducer
 *     tags: 
 *       - itemProducer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - item_producer_name
 *             properties:
 *               item_producer_name:
 *                 type: string
 *                 description: itemProducer name
 *               country_id:
 *                 type: number
 *                 description: country id
 *     responses:
 *       201:
 *         description: itemProducer created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/itemProducer'
 *       400:
 *         description: Missing Inputs
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal error
 */
router.post("/createItemProducer", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "Unauthorized"});
    const { item_producer_name, country_id } = req.body;
    
    if (!item_producer_name) { return res.status(400).json({ message: "itemname missing" });}
    if (country_id < 1 || (country_id && !(await getCountryById(parseInt(country_id))).success)) return res.status(400).json({ message: "country id not found" });

    const ret = await dbItemProducer.createItemProducer(item_producer_name, parseInt(country_id));

    if(ret.success) return res.status(201).json({message: "itemproducer created successfully", itemType: ret.itemtype});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Put-Endpoints
/**
 * @swagger
 * /itemProducer/changeItemProducer:
 *   put:
 *     summary: change of the itemProducer
 *     tags: 
 *       - itemProducer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - item_producer_id
 *               - item_producer_name
 *             properties:
 *               item_producer_id:
 *                 type: number
 *                 description: itemProducer id
 *               item_producer_name:
 *                 type: string
 *                 description: itemProducer name
 *               country_id:
 *                 type: number
 *                 description: country id
 *     responses:
 *       201:
 *         description: itemproducer change successful
 *       400: 
 *         description: input not found or invalid
 *       401: 
 *         description: Unauthorized
 *       500:
 *         description: Internal error
 */
router.put("/changeItemProducer", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "Unauthorized"});
    const { item_producer_id, item_producer_name, country_id } = req.body;

    if (!item_producer_name) { return res.status(400).json({ message: "itemproducer name missing" });}
    if (country_id < 1 || (country_id && !(await getCountryById(parseInt(country_id))).success)) return res.status(400).json({ message: "country id not found" });

    console.log((await getCountryById(parseInt(country_id))).success);
    const ret = await dbItemProducer.changeItemProducer(parseInt(item_producer_id), item_producer_name, parseInt(country_id));

    if(ret.success) return res.status(201).json({message: "itemProducer change successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})