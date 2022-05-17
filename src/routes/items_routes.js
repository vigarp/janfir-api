// import modules
const express = require("express");
const route = express.Router();

// import modules from controllers
const itemsController = require("../controllers/items_controllers");

// declare router
route.get("/", itemsController.getAllItems);
route.get("/:id", itemsController.detailItem);

route.post("/", itemsController.addItem);

route.delete("/:id", itemsController.deleteItem);

module.exports = route;
