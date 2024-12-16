const express = require("express");
const router = express.Router();
const user = require("./users");
const blog = require("./blogs");

router.use("/user", user);
router.use("/blog", blog);


module.exports = router;