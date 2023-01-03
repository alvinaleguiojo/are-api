// import db connection
const connection = require("../../db/index");

// Get All Contacts
const ContactList = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM tblform", (error, Contacts) => {
      error && reject(error);
      return resolve(Contacts);
    });
  });
};

module.exports = ContactList;
