# janfir-api

In this repository, this is a backend for janfir-store (frontend). This is based API for [janfir-store](https://github.com/vigarp/janfir-store)

## Getting Started

To get the Node server running locally:

- Clone this repo with `git clone https://github.com/vigarp/janfir-api.git janfir-api`
- `cd janfir-api`
- `npm install` to install all required dependencies
- Create a `.env` file and add following:

```sh
DB_HOST = yourlocalhost
DB_USER = yourdbuser
DB_PASSWORD = yourdbpassword
DB_NAME = janfir_db
REACT_APP_URL_FRONTEND = http://localhost:3000
BASE_URL = http://localhost:4001
```

- Import and use database dump file `janfir_db.sql` from this directory to your MySQL rdbms, (via terminal or MySQL Workbench):

- `node index.js or npm run dev if nodemon installed in your computer` to start the local server

## Architechture

The architechture to created this project:

1. Database MySQL
2. Node JS
3. Express JS ( Framework )

## API Endpoint

**items endpoint**

`GET /`
_get all items_

`GET /:id`
_detail items_

`POST /`
_create an item_

`DELETE /:id`
_delete an item_

`PUT /:id`
_edit an item_

Documentation : [Postman Documentation](https://documenter.getpostman.com/view/17417645/UyxkjkcQ)
