require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const massive = require("massive");
const port = process.env.PORT || 3000;
const products_controllers = require("./products_controllers");

const app = express();

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(dbInstance => {
  // dbInstance.init_db();
  app.set("db", dbInstance);
});

app.get("/api/products", products_controllers.getAll);
app.get("/api/product/:id", products_controllers.getOne);
app.put("/api/product/:id", products_controllers.update);
app.post("/api/product", products_controllers.create);
app.delete("/api/product/:id", products_controllers.delete);

app.listen(port, () => {
  console.log(`Currently listening on the port that has the number of ${port}`);
});
