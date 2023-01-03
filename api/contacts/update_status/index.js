const express = require("express");
const router = express.Router();

const UpdateContactStatus = require("../../../queries/contacts/update_status/index");

router.patch("/api/contacts/update_status/:id", async function (req, res) {
  const { Status } = req.body;

  try {
    await UpdateContactStatus({
      MessageID: req.params.id,
      Status,
    });
    res.status(200).json({ message: "contact has been updated." });
  } catch (err) {
    res.status(400).json({
      error: "There's an error. Please try again or check your request.",
    });
  }
});

module.exports = router;
