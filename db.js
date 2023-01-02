const mysql = require("mysql2");
require("dotenv").config();

// create the connection to database
const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

module.exports = connection;
