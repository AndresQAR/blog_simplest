const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/", users.getUserById);
router.put("/", users.updateUser);

module.exports = router;