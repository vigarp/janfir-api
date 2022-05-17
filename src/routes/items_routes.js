// import modules
const express = require("express");
const route = express.Router();

// import modules from controllers
const itemsController = require("../controllers/items_controllers");

// declare router
route.get("/", itemsController.getAllItems);

module.exports = route;
