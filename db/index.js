const mysql = require("mysql2");
require("dotenv").config();

// create the connection to database
const connection = mysql.createPool({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Close the connection when the app closes
process.on("SIGINT", () => {
  connection.end((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("MySQL connection closed.");
    }
  });
});

module.exports = connection;
