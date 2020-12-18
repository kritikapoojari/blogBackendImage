const fs = require("fs");
const path = require("path");
const Blog = require("../models/blogSchema");
const uniqid = require("uniqid");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const multer = require("multer");

//------------Upload a image----------

let storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, "./uploads");
    },
    filename: function(req, file, callback) {
        const uniqueImageName = Date.now();
        callback(null, uniqueImageName + "-" + file.originalname);
    },
});
const upload = multer({ storage: storage }).single("sample_image");

const uploadImage = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).send("Cannot upload Image");
        }
        res.send(req.file);
    });
};

//----Get All the Blogs--------
const getAllBlog = async(req, res) => {
    try {
        let blog = await Blog.find();
        res.status(200).json({
            message: "Sucessfully displaying all the Blogs",
            data: blog,
        });
    } catch (err) {
        res.status(500).json({
            message: "Cannot display the Blogs",
            data: err,
        });
    }
};

//----Get Blogs by Id------
const getBlogById = async(req, res) => {
    const id = req.params.blogId;
    let result = await Blog.find({ blogId: id });
    if (id) {
        try {
            res.status(200).json({
                message: "Sucessfully displaying Blog by Id",
                data: result,
            });
        } catch (err) {
            res.status(500).json({
                message: "Cannot display the Blog",
                data: err,
            });
        }
    } else {
        res.status(200).json({
            message: "Cannot display the Blog",
        });
    }
};

//----Create a  Blogs------
const createBlog = async(req, res) => {
    if (!req.body.author ||
        !req.body.title ||
        !req.body.content ||
        !req.body.links ||
        !req.body.imageUrl
    ) {
        return res.status(400).send({
            message: "Please enter all the details",
        });
    }
    if (req.body.author == req.body.author) {
        return res.status(400).send({
            message: "Blog already exists",
        });
    }
    try {
        const blog = new Blog({
            blogId: uniqid(),
            author: req.body.author,
            title: req.body.title,
            content: req.body.content,
            links: req.body.links,
            imageUrl: req.body.imageUrl,
        });
        let newBlog = await blog.save();
        res.status(200).json({
            message: "New Data Added to the Blog",
            data: newBlog,
        });
    } catch (err) {
        res.status(500).json({
            message: "Cannot add Data to the Blog",
            data: err,
        });
    }
};

//----Delete a Blog byd ID------
const deleteBlog = async(req, res) => {
    try {
        const id = req.params.blogId;
        let result = await Blog.deleteOne({ blogId: id });
        res.status(200).json({
            message: "The Blog is Deleted Sucessfully",
            data: result,
        });
    } catch (err) {
        res.status(500).json({
            message: "The Blog Cannot be Deleted",
            data: err,
        });
    }
};
module.exports.uploadImage = uploadImage;
module.exports.getAllBlog = getAllBlog;
module.exports.getBlogById = getBlogById;
module.exports.createBlog = createBlog;
module.exports.deleteBlog = deleteBlog;