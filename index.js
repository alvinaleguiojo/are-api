const express = require("express");
const app = express();
const contacts = require("./api/contacts/index");
const add_contact = require("./api/contacts/add_contact/index");
const cors = require("cors");

// to check if the user is authorized
const Auth = require("./middleware/Auth");

app.use(cors());
app.use(express.json());

// controllers
app.use("/api/contacts", Auth, contacts);
app.use("/api/contacts/add_contact", Auth, add_contact);

app.get("/", Auth, async (req, res) => {
  res.json({
    message:
      "You can now you this API. Please refer to the documentation for more information. -FROM ALVS",
    Contact: "alvin.aleguiojo@gmail.com",
  });
});

app.listen(3002, () => {
  console.log("Server listening on port 3000");
});
