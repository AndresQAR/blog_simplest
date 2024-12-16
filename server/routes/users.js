const express = require("express");
const router = express.Router();
const users = require("../controllers/users");

router.get("/", users.getUser);
router.post("/", users.createUsers);
router.put("/", users.updateUser);

module.exports = router;