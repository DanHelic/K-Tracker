import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import argon2 from "argon2";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from './db/prisma/generated/client.js';
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

const app = express();
app.use(express.json());

import { getUser } from './db/dbUser.js';

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Test endpoint
 *     responses:
 *       200:
 *         description: Returns Hello message
 */
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from API!!!" });
});


/** 
 * @swagger 
 * /users:
 *  get:
 *    summary: Get List of all Users
 *    responses:
 *      200:
 *        description: Returns all Users
*/
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ]);
});

/** 
 * @swagger 
 * /user/{id}:
 *  get:
 *    summary: Get Name of a Single User
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: integer
 *        description: ID of the user
 *    responses:
 *      200:
 *        description: Returns the User with the specified id
*/
app.get("/api/user/:id", async (req, res) => {
  const id = req.params.id;
  if(id==0) res.json({"pw": await argon2.hash("hi")});
  if(id==1) res.json(await getUser('user1'));
  if(id==2) res.json({name: "Jerry"});
  if(id>2) res.json({name: "UserNotFound"});
});


const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "/api",
      },
    ],
  },
  apis: ["./server.js"], // Dateien mit Swagger Kommentaren
};

const specs = swaggerJsDoc(options);

app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(specs));

/*
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
*/

app.listen(3000, "127.0.0.1", () => {
  console.log("API running on port 3000");
});