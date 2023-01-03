const express = require("express");
const router = express.Router();

// initialize the contacts list request
const ContactList = require("../../queries/contacts");

// api request to get all the contacts list
router.get("/api/contacts", async (req, res, next) => {
  try {
    const resuls = await ContactList();
    res.status(200).json({ contacts: resuls });
  } catch (error) {
    res
      .sendStatus(400)
      .json({ error: "There's something wrong.Please check your request" });
  }
});

module.exports = router;
