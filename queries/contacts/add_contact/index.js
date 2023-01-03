// import db connection
const connection = require("../../../db/index");

// Add New Contact
const AddNewContact = ({ Formname, Fullname, Number, Email, Message }) => {
  const query = `INSERT INTO tblform (Formname, Fullname, Number, Email, Message) VALUES ('${Formname}', '${Fullname}', '${Number}', '${Email}', '${Message}')`;
  return new Promise((resolve, reject) => {
    connection.query(query, (error, NewContact) => {
      error && reject(error);
      return resolve(NewContact);
    });
  });
};

module.exports = AddNewContact;
