// import modules
const express = require("express");
const route = express.Router();

// import route module from items_routes
const itemsRoutes = require("./items_routes");

// declare router
route.use("/items", itemsRoutes);

module.exports = route;
