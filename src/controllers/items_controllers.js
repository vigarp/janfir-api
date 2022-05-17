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

// export modules to roytes
module.exports = {
  getAllItems,
};
