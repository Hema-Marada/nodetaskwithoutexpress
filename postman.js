var express = require("express");
var app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
var database = require("./mysql");
var auth = require("./authorization");
var vdata = require("./valid");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(4003, () => {
  console.log("server working.....!");
});
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Sample-NodeJS",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://172.17.12.155:4003",
        
      },
      {
        url1: "http://172.17.12.28:4004"
      }
    ],
  },
  apis: ["./postman.js"],
};

const swaggerDocs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /Datas:
 *   get:
 *       summary: To get all Datas from mysql
 *       description: This api is used to fetch the data from mysql
 *       responses:
 *           200:
 *                description: Sucess
 *                content:
 *                     application/json:
 *                           schema:
 *                               type: array
 * /Datas/insert:
 *   post:
 *       summary: used to insert data to mysql
 *       description: This api is used to insert the data from mysql
 *       requestBody:
 *           required: true
 *           content:
 *                application/json:
 *                      schema:
 *                          type: json
 *       responses:
 *           200:
 *                description: Data Insert Sucessfully
 * /Datas/update:
 *   put:
 *       summary: used to update data to mysql
 *       description: This api is used to update the data from mysql
 *       requestBody:
 *           required: true
 *           content:
 *                application/json:
 *                      schema:
 *                          type: json
 *       responses:
 *           200:
 *                description: Data update Sucessfully
 * /Datas/delete:
 *   delete:
 *       summary: used to delete data to mysql
 *       description: This api is used to delete the data from mysql
 *       requestBody:
 *           required: true
 *           content:
 *                application/json:
 *                      schema:
 *                          type: json
 *       responses:
 *           200:
 *                description: Data delete Sucessfully
 */

app.get("/Datas", auth, (req, res) => {
  database
    .getEmployee()
    .then((empdata) => {
      res.send(empdata);
    })
    .catch(() => {
      res.send("There is no data");
    });
});

app.post("/Datas/insert", vdata, (req, res) => {
  database
    .addEmployee(req.body.sno, req.body.fname, req.body.lname, req.body.email)
    .then((empdata) => {
      res.send(empdata);
    })
    .catch(() => {
      res.send("There is no data");
    });
});
app.put("/Datas/update", (req, res) => {
  database
    .updateEmployee(
      req.body.fname,
      req.body.lname,
      req.body.email,
      req.body.sno
    )
    .then(() => {
      res.send(req.body);
    })
    .catch(() => {
      res.send("There is no data");
    });
});
app.delete("/Datas/delete", (req, res) => {
  database
    .deleteEmployee(req.body.sno || null)
    .then((empdata) => {
      res.send(empdata);
    })
    .catch(() => {
      res.send("There is no data");
    });
});
app.delete("/Datas", (req, res) => {
  database
    .Deletetable()
    .then(() => {
      res.send("Delete entire table");
    })
    .catch(() => {
      res.send("There is no data");
    });
});
