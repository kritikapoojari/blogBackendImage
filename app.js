const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const Blog = require("./models/blogSchema");
const router = require("./routes/blogRoutes");
const blogRouter = require("./routes/blogRoutes");
const multer = require("multer");

const app = express();

mongoose.connect(
    process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true },
    (err, connection) => {
        if (err) {
            console.log(err);
            return console.log("Error in connecting to the database");
        }
        console.log("Sucessfully connected to the database");

        app.use(express.json());
        app.use("/blogsList", blogRouter);

        app.listen(process.env.PORT, () => {
            console.log(`Server started on port ${process.env.PORT}`);
        });
    }
);