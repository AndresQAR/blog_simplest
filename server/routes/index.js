const express = require("express");
const router = express.Router();
const user = require("./users");
const blog = require("./blogs");
const auth = require("./auth");

router.use("/user", user);
router.use("/blog", blog);
router.use("/auth", auth);


module.exports = router;