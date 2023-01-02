const express = require("express");
const router = express.Router();
const connection = require("../../db");

router.post("/", async function (req, res) {
  const { Formname, Fullname, Number, Email, Message } = req.body;

  const sql = `INSERT INTO tblform (Formname, Fullname, Number, Email, Message) VALUES ('${Formname}', '${Fullname}', '${Number}', '${Email}', '${Message}')`;
  connection.query(sql, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = router;
