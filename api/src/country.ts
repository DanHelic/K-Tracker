import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

import { userIsAdmin } from './db/dbUser.js';
import * as dbCountry from './db/dbCountry.js';

/**
 * @swagger
 * tags:
 *   name: country
 *   description: Country related endpoints
 * components:
 *   schemas:
 *     Country:
 *       type: object
 *       properties:
 *         country_id:
 *           type: number
 *           description: the id of the country
 *         country_code:
 *           type: string
 *           description: country code
 *         nameEN:
 *           type: string
 *           description: english country name
 *         nameDE:
 *           type: string
 *           description: german country name
 */


//Get-Endpoints
/** 
 * @swagger 
 * /country/country/{id}:
 *  get:
 *    summary: Get the country with the provided id
 *    tags:
 *      - country
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: returns a country
 *      404:
 *        description: country with provided id not found
 *      500:
 *        description: internal error
*/
router.get("/country/:id", async (req, res) => {
    const ret = await dbCountry.getCountryById(parseInt(req.params.id));

    if(ret.success) return res.status(201).json(ret.country);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});


/** 
 * @swagger 
 * /country/countries:
 *  get:
 *    summary: Get a list of all countries
 *    tags:
 *      - country
 *    responses:
 *      201:
 *        description: returns a list of countries
 *      500:
 *        description: internal error
*/
router.get("/countries", async (req, res) => {
    const ret = await dbCountry.getAllCountries();

    if(ret.success) return res.status(201).json(ret.countries);
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Post-Endpoints
/**
 * @swagger
 * /country/createCountry:
 *   post:
 *     summary: Creates a new Country
 *     tags: [country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - country_code
 *               - name
 *             properties:
 *               country_code:
 *                 type: string
 *                 description: country code
 *               nameEN:
 *                 type: string
 *                 description: english country name
 *               nameDE:
 *                 type: string
 *                 description: german country name
 *     responses:
 *       201:
 *         description: Country created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: missing Inputs
 *       401:
 *         description: unauthorized
 *       500:
 *         description: internal error
 */
router.post("/createCountry", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "unauthorized"});

    const { country_code, nameEN, nameDE } = req.body;
    
    if (!country_code) { return res.status(400).json({ message: "countrycode missing" });}
    if (!nameEN || !nameDE) { return res.status(400).json({ message: "country name missing" });}

    if ((country_code as string).length > 3) { return res.status(400).json({ message: "country code cannot have more than 3 letters" });}
    if (!await dbCountry.getCountryByCode(country_code)) return res.status(400).json({ message: "countrycode already taken" });

    const ret = await dbCountry.createCountry(country_code, nameEN, nameDE);

    if(ret.success) return res.status(201).json({message: "country created successfully", country: ret.country});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Put-Endpoints
/**
 * @swagger
 * /country/updateCountry:
 *   put:
 *     summary: Update a country
 *     tags: [country]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - country_id
 *               - new_country_code
 *               - new_name
 *             properties:
 *               country_id:
 *                 type: number
 *                 description: country id
 *               new_country_code:
 *                 type: string
 *                 description: new country code
 *               new_nameEN:
 *                 type: string
 *                 description: new english country name
 *               new_nameDE:
 *                 type: string
 *                 description: new german country name
 *     responses:
 *       201:
 *         description: country update successful
 *       401:
 *         description: unauthorized
 *       409: 
 *         description: country code or name not available
 *       500:
 *         description: internal error
 */
router.put("/updateCountry", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "unauthorized"});

    const countryNameAvailableEN = await dbCountry.getCountryByName(req.body.new_nameEN);
    if (countryNameAvailableEN.success && countryNameAvailableEN.country?.country_id!=parseInt(req.body.country_id)) return res.status(409).json({message: "countrynameEN not available"});
    const countryNameAvailableDE = await dbCountry.getCountryByName(req.body.new_nameDE);
    if (countryNameAvailableDE.success && countryNameAvailableDE.country?.country_id!=parseInt(req.body.country_id)) return res.status(409).json({message: "countrynameDE not available"});
    const countryCodeAvailable = await dbCountry.getCountryByCode(req.body.new_country_code);
    if (countryCodeAvailable.success && countryCodeAvailable.country?.country_id!=parseInt(req.body.country_id)) return res.status(409).json({message: "countrycode not available"});

    const ret = await dbCountry.updateCountry(parseInt(req.body.country_id), req.body.new_country_code, req.body.new_nameEN, req.body.new_nameDE);

    if(ret.success) return res.status(201).json({message: "country update successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})


//Delete-Endpoints
/** 
 * @swagger 
 * /country/deleteCountry/{id}:
 *  delete:
 *    summary: Delete the country with the provided id
 *    tags:
 *      - country
 *    parameters:
 *      - name: id
 *        in: path
 *        required: true
 *        schema:
 *          type: string
 *    responses:
 *      201:
 *        description: country deleted successfully
 *      404:
 *        description: country with provided id not found
 *      500:
 *        description: internal error
*/
router.delete("/deleteCountry/:id", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "unauthorized"});

    // @ts-ignore
    const ret = await dbCountry.deleteCountry(parseInt(req.params.id));

    if(ret.success) return res.status(201).json({message: "country deleted successfully"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})