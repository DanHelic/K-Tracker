import { createRequire } from "module";
const require = createRequire(import.meta.url);

import express from "express";
import type { Application } from "express";
import swaggerUi from "swagger-ui-express";
//import swaggerJsDoc from "swagger-jsdoc";
const swaggerJsDoc = require("swagger-jsdoc"); //alt fix
import argon2 from "argon2";

const app: Application = express();
app.use(express.json());

import userRouter from "./user.js";


app.use("/api/user/", userRouter);

/**
 * @swagger
 * tags:
 *   name: server
 *   description: general endpoints
 */


/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Test endpoint
 *     tags:
 *        - server
 *     responses:
 *       200:
 *         description: Returns Hello message
 */
app.get("/api/hello", (req, res) => {
  console.log("Loaded DB URL:", process.env.DATABASE_URL);
  res.json({ message: "Hello from API!!!2" });
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
  apis: ["./*.js"], // Dateien mit Swagger Kommentaren
};

const specs = swaggerJsDoc(options);

app.use("/api/swagger", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000, "127.0.0.1", () => {
  console.log("API running on port 3000");
});