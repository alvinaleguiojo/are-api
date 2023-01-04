const express = require("express");
const router = express.Router();
const NodeCache = require("node-cache");

const AddNewContact = require("../../../queries/contacts/add_contact/index");

router.post("/api/contacts/add_contact", async function (req, res) {
  try {
    const { Formname, Fullname, Number, Email, Message } = req.body;
    await AddNewContact({
      Formname,
      Fullname,
      Number,
      Email,
      Message,
    });
    res.status(200).json({ message: "contact added successfully." });
  } catch (err) {
    res.status(400).json({ message: "There's an error" });
  }
});

module.exports = router;
