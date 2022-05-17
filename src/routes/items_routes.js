// import internal modules
const express = require("express");
const route = express.Router();

// import external modules
const itemsController = require("../controllers/items_controllers");
const upload = require("../middleware/upload");

// declare router
route.get("/", itemsController.getAllItems);
route.get("/:id", itemsController.detailItem);

route.post("/", upload.single("images"), itemsController.addItem);

route.delete("/:id", itemsController.deleteItem);

route.put("/:id", upload.single("images"), itemsController.editItem);

module.exports = route;
