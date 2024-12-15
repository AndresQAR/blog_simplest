require("dotenv").config();
const routes = require("./routes");
const express = require("express");
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.all(
  "*",
  function (_, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    next();
  },
);

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server - http://localhost:${port}/`);
});

