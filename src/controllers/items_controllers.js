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
    const { name, price, stock, images } = req.body;
    const itemsAvailable = await itemsModel.findItem("name", name);
    if (
      name === undefined ||
      price === undefined ||
      stock === undefined ||
      images === undefined ||
      name === "" ||
      price === "" ||
      stock === "" ||
      images === ""
    ) {
      return next(createError(403, "add item failed, please check the input"));
    } else if (itemsAvailable.length > 0) {
      return next(createError(403, "Item already available"));
    } else {
      const dataItem = {
        name,
        price,
        stock,
        images,
      };
      await itemsModel.addItem(dataItem);
      handleResponse.response(res, dataItem, 201, "item successfully added");
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
};
