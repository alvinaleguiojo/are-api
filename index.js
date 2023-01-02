const express = require("express");
const app = express();
const contacts = require("./api/contacts/index");
const products = require("./api/products/index");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contacts);
app.use("/api/products", products);

app.get("/", async (req, res) => {
  res.json({
    message:
      "You can now you this API. Please refer to the documentation for more information. -FROM ALVS",
    Contact: "alvin.aleguiojo@gmail.com",
  });
});

app.listen(3002, () => {
  console.log("Server listening on port 3000");
});
