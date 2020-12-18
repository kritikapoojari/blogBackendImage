# blogBackendImage


This blogBackend Backend API has a dependency on a MongoDB database.

DATABASE_URL = e.g. mongodb://<user_name>:@localhost:27017/<db_name>?authSource=<auth_db_name> is required to connect to the database the coud database to connect to blogBackend is ---DATABASE_URL="mongodb+srv://blog_backend:blog@cluster0.rj6zr.mongodb.net/test" using this you can connect the Mongoose database. The host where the server is bound to. Defaults to 0.0.0.0 (all available network interfaces) if undefined. The server port where the server listens on. Defaults to 3000.

Once you clone the project using gitclone. You have to install all the dependenices Using npm install you can install all the depending liabraires.

To start the application you need to use nodemon app.js

Using Postman you can get the output of the following:

To Get All the Blogs : http://localhost:3000/blogsList/blogs get request)
To Get Blogs by Id : http://localhost:3000/blogsList/blogs/31w8do05kissuq51 (get request)
To Add a Blog : http://localhost:3000/blogsList/blogs (post request)
To Delete a Blog by Id : http://localhost:3000/blogsList/blogs (delete request)
To Uplod Iamge :http://localhost:3000/blogsList/upload (post request)
