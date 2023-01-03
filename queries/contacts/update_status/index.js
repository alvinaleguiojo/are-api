// import db connection
const connection = require("../../../db/index");

// Update Contact Status By ID
const UpdateContactStatus = ({ MessageID, Status }) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE tblform SET status = ${Status} WHERE MessageID = ${MessageID}`;
    connection.query(query, (error, StatusUpdated) => {
      error && reject(error);
      return resolve(StatusUpdated);
    });
  });
};

module.exports = UpdateContactStatus;
