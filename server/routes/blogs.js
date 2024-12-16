const express = require("express");
const router = express.Router();
const blogs = require("../controllers/blogs");

router.get("/", blogs.getBlogs);
router.post("/", blogs.createBlog);

module.exports = router;