const express = require("express");

const {
    uploadImage,
    getAllBlog,
    getBlogById,
    createBlog,
    deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.route("/upload").post(uploadImage);
router.route("/blogs").get(getAllBlog).post(createBlog);
router.route("/blogs/:blogId").get(getBlogById).delete(deleteBlog);

module.exports = router;