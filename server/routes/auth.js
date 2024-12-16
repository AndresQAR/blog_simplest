const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth");

router.post("/login", auth.logUser);
router.post("/signin", auth.createUser);

module.exports = router;