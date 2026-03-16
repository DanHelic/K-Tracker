const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

/**
 * @swagger
 * /hello:
 *   get:
 *     summary: Test endpoint
 *     responses:
 *       200:
 *         description: Returns Hello message
 */
app.get("/hello", (req, res) => {
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
app.get("/users", (req, res) => {
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
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if(id==1) res.json([{name: "Tom1"}]);
  if(id==2) res.json([{name: "Jerry"}]);
  res.json([{name: "UserNotFound"}]);
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

const specs = swaggerJsdoc(options);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000, "127.0.0.1", () => {
  console.log("API running on port 3000");
});