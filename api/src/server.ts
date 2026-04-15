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
import authRouter from "./auth.js";
import itemRouter from "./item.js";
import itemProducerRouter from "./itemProducer.js";
import itemTypeRouter from "./itemType.js";
import countryRouter from "./country.js";
import storeRouter from "./store.js";
import purchaseRouter from "./purchase.js";
import purchaseItemRouter from "./purchaseItem.js";

app.use("/api/user/", userRouter);
app.use("/api/auth/", authRouter);
app.use("/api/item/", itemRouter);
app.use("/api/itemProducer/", itemProducerRouter);
app.use("/api/itemType/", itemTypeRouter);
app.use("/api/country/", countryRouter);
app.use("/api/store/", storeRouter);
app.use("/api/purchase/", purchaseRouter);
app.use("/api/purchaseItem/", purchaseItemRouter);


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
  //console.log("Loaded DB URL:", process.env.DATABASE_URL);
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
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      { bearerAuth: [] }
    ],
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