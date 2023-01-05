const express = require("express");
const router = express.Router();
const NodeCache = require("node-cache");
const cache = new NodeCache({ stdTTL: 60 });

// initialize the contacts list request
const ContactList = require("../../queries/contacts");

// api request to get all the contacts list
router.get("/api/contacts", async (req, res, next) => {
  const data = cache.get("key");

  if (data) {
    // If the data is in the cache, send it to the client
    res.send(data);
    console.log("cached data is triggered..");
  } else {
    // If the data is not in the cache, fetch it from the database
    // and store it in the cache
    try {
      console.log("first time to cache the data..");
      const results = await ContactList();
      cache.set("key", results);
      res.status(200).json({ contacts: results });
    } catch (error) {
      res
        .sendStatus(400)
        .json({ error: "There's something wrong.Please check your request" });
    }
  }
});

module.exports = router;
