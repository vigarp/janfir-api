// import internal modules
const createError = require("http-errors");
const handleResponse = require("../helpers/common");

// import modules from models
const itemsModel = require("../models/items_models");

// create controller for get all items
const getAllItems = async (req, res, next) => {
  try {
    const searchQuery = req.query.name || "%%";
    const pageQuery = parseInt(req.query.page) || 1;
    const limitQuery = parseInt(req.query.limit) || 10;
    const offsetQuery = (pageQuery - 1) * limitQuery;

    const resultItems = await itemsModel.getAllItems({
      searchQuery,
      offsetQuery,
      limitQuery,
    });
    const [countItems] = await itemsModel.countItems();
    handleResponse.response(res, resultItems, 200, {
      currentPage: pageQuery,
      limit: limitQuery,
      totalData: countItems.total_items,
      totalPage: Math.ceil(countItems.total_items / limitQuery),
      message: "data fetched from server",
    });
  } catch (error) {
    console.log(error);
    next(createError(500, new createError.InternalServerError()));
  }
};

// create controller for detail an item
const detailItem = async (req, res, next) => {
  try {
    const idItem = req.params.id;
    const [resultItems] = await itemsModel.detailItem(idItem);
    if (resultItems === undefined) {
      handleResponse.response(res, null, 404, `items not available`);
    } else {
      handleResponse.response(
        res,
        resultItems,
        200,
        "successfully fetched from server"
      );
    }
  } catch (error) {
    next(createError(500, new createError.InternalServerError()));
  }
};

// create controller for add an item
const addItem = async (req, res, next) => {
  try {
    const { name, price, stock } = req.body;
    const fileName = req.file.filename;
    console.log(req.body);
    console.log(fileName);
    const itemAvailable = await itemsModel.findItem("name", name);
    if (
      name === undefined ||
      price === undefined ||
      stock === undefined ||
      fileName === undefined ||
      name === "" ||
      price === "" ||
      stock === "" ||
      fileName === ""
    ) {
      return next(createError(403, "add item failed, please check the input"));
    } else if (itemAvailable.length > 0) {
      return next(createError(403, "Item already available"));
    } else {
      const dataItem = {
        name,
        price,
        stock,
        images: `${process.env.BASE_URL}/file/${fileName}`,
      };
      await itemsModel.addItem(dataItem);
      handleResponse.response(res, dataItem, 201, "item successfully added");
    }
  } catch (error) {
    console.log(error);
    next(createError(500, new createError.InternalServerError()));
  }
};

// create controller for edit an item
const editItem = async (req, res, next) => {
  try {
    const idItem = req.params.id;
    const { name, price, stock } = req.body;
    const [itemAvailable] = await itemsModel.findItem("id", idItem);
    if (itemAvailable === undefined) {
      handleResponse.response(res, null, 404, `item not available`);
    } else if (
      name === undefined ||
      price === undefined ||
      stock === undefined ||
      name === "" ||
      price === "" ||
      stock === ""
    ) {
      return next(createError(403, "edit item failed, please check the input"));
    } else {
      const dataItem = {
        name,
        price,
        stock,
      };
      await itemsModel.editItem(dataItem, idItem);
      handleResponse.response(res, dataItem, 200, "successfully edited");
    }
  } catch (error) {
    console.log(error);
    next(createError(500, new createError.InternalServerError()));
  }
};

//create controller for delete user
const deleteItem = async (req, res, next) => {
  try {
    const idItem = req.params.id;
    const resultItem = await itemsModel.findItem("id", idItem);
    if (resultItem.length === 0) {
      return next(createError(403, `item not found`));
    } else {
      await itemsModel.deleteItem(idItem);
      handleResponse.response(res, true, 200, `successfully deleted an item`);
    }
  } catch (error) {
    next(createError(500, new createError.InternalServerError()));
  }
};

// export modules to roytes
module.exports = {
  getAllItems,
  detailItem,
  addItem,
  deleteItem,
  editItem,
};
