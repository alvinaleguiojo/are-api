const express = require("express");
const router = express.Router();
const connection = require("../../db");

router.get("/", async (req, res) => {
  connection.query("SELECT * FROM tblform", function (err, results, fields) {
    // results contains rows returned by server
    res.json(results);
    if (err) return err;
  });
});

module.exports = router;
