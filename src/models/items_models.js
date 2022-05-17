// import modules
const connection = require("../helpers/db_connection");

// create model for get all items
const getAllItems = ({ searchQuery, limitQuery, offsetQuery }) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT id, name, price, stock, images FROM items WHERE name LIKE '%${searchQuery}%' LIMIT ${limitQuery} OFFSET ${offsetQuery};`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          console.log(error);
          reject(error);
        }
      }
    );
  });
};

// create model for count items
const countItems = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      "SELECT COUNT(*) AS total_items FROM items",
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          console.log(error);
          reject(error);
        }
      }
    );
  });
};

// export modules to controllers
module.exports = {
  getAllItems,
  countItems,
};
