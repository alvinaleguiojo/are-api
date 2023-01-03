const express = require("express");
const router = express.Router();

const AddNewContact = require("../../../queries/contacts/add_contact/index");

router.post("/", async function (req, res) {
  const { Formname, Fullname, Number, Email, Message } = req.body;

  try {
    const response = await AddNewContact({
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
