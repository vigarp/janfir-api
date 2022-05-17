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

// create model for see detail an item
const detailItem = (idItems) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT id, name, price, stock, images FROM items WHERE id = ${idItems}`,
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

// create model for add an item
const addItem = (dataItem) => {
  return new Promise((resolve, reject) => {
    connection.query("INSERT INTO items SET ?", dataItem, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    });
  });
};

//create model for delete an item
const deleteItem = (idItem) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "DELETE FROM items WHERE id = ?",
      idItem,
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

// create model for find/handling an item by name
const findItem = (field, record) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM items WHERE ${field} = '${record}'`,
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
  detailItem,
  addItem,
  deleteItem,
  findItem,
  countItems,
};
