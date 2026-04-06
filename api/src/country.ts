import express from "express";
import { authMiddleware } from "./session/authMiddleWare.js";

const app = express();
app.use(express.json());

const router = express.Router();
export default router;

//import { getCountryById, getAllCountries, getCountryByCode, createCountry, getCountryByName, updateCountry } from './db/dbCountry.js';
import * as dbUser from './db/dbUser.js';
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
 *         name:
 *           type: string
 *           description: country name
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
 *        description: Returns a country
 *      400:
 *        description: Country with provided id not found
 *      500:
 *        description: Internal error
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
 *        description: Returns a list of countries
 *      400:
 *        description: No Country found
 *      500:
 *        description: Internal error
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
 *               name:
 *                 type: string
 *                 description: country name
 *     responses:
 *       201:
 *         description: Country created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Country'
 *       400:
 *         description: Missing Inputs
 *       401:
 *         description: unauthorized
 *       500:
 *         description: Internal error
 */
router.post("/createCountry", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await userIsAdmin(req.user.userId)) return res.status(401).json({message: "Unauthorized"});

    const { country_code, name } = req.body;
    
    if (!country_code) { return res.status(400).json({ message: "countrycode missing" });}
    if (!name) { return res.status(400).json({ message: "country name missing" });}

    if ((country_code as string).length > 3) { return res.status(400).json({ message: "country code cannot have more than 3 letters" });}
    if (!await dbCountry.getCountryByCode(country_code)) return res.status(400).json({ message: "countrycode already taken" });

    const ret = await dbCountry.createCountry(country_code, name);

    if(ret.success) return res.status(201).json({message: "Country created successfully", country: ret.country});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
});



//Put-Endpoints
/**
 * @swagger
 * /country/updateCountry:
 *   put:
 *     summary: update a country
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
 *               new_name:
 *                 type: string
 *                 description: new country name
 *     responses:
 *       201:
 *         description: Country update successful
 *       401:
 *         description: unauthorized
 *       409: 
 *         description: country code or name not available
 *       500:
 *         description: Internal error
 */
router.put("/updateCountry", authMiddleware, async (req, res) => {
    // @ts-ignore
    if(!await dbUser.userIsAdmin(req.user.userId)) return res.status(401).json({message: "Unauthorized"});

    const countryNameAvailable = await dbCountry.getCountryByName(req.body.new_name);
    if (countryNameAvailable.success && countryNameAvailable.country?.country_id!=parseInt(req.body.country_id)) return res.status(409).json({message: "Countryname not available"});
    const countryCodeAvailable = await dbCountry.getCountryByCode(req.body.new_country_code);
    if (countryCodeAvailable.success && countryCodeAvailable.country?.country_id!=parseInt(req.body.country_id)) return res.status(409).json({message: "Countrycode not available"});

    const ret = await dbCountry.updateCountry(parseInt(req.body.country_id), req.body.new_country_code, req.body.new_name);

    if(ret.success) return res.status(201).json({message: "country update successful"});
    if(ret.code==null) return res.status(500).json({message: ret.message});
    return res.status(ret.code).json({message: ret.message});
})