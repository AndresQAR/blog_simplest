const express = require("express");
const router = express.Router();

const users = require("../controllers/users");

router.post("/", users.createUsers);

module.exports = router;