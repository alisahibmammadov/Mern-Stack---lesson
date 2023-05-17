const express = require("express");
require("dotenv").config();
const notRoute = require("./routes/notlar.js");
const app = express();
const mongoose = require("mongoose");

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

const port = process.env.PORT;

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Veritabani baglandir");
    app.listen(port, () => {
      console.log(`${port} port dinleniyor`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/notlar", notRoute);
