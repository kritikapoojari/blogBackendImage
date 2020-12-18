const uniqid = require("uniqid");
const mongoose = require("mongoose");
const { urlencoded } = require("express");

const blogSchema = new mongoose.Schema({
    blogId: {
        type: String,
        default: uniqid(),
    },
    author: {
        type: String,
        required: true,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    links: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
});

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;