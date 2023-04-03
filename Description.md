# This is a brief description of the steps I followed while making this project.

PS: Its more for my own reference and for not forgeting the flow of code after a couple of months.

<hr>

## Frontend

- Setup

  1. Crated a folder with 2 main sub folders in it named **frontend** and **backend**
  2. Initialised and created a react app in frontend directory.
  3. Integrated **Bootstrap** with react.

     <br>

- Login and Signup page Design
  <br>
- Adding routes to react app

  1. Installed **react-router-dom**
  2. Integrated **FontAwesome Icons.**

- Designing of Post Card and Profile Section
  <br>
- Designing components with React Boostrap
  1. Installed **react-boostrap** and used some of its components in myProfile page. Such and modal.

<hr>

## Backend

- Setup, developing first REST API and establishing DB connection.

  1. I've used **MongoDB atlas**, i.e. online cloud server of MongoDB.
  2. Iv've used **Thunder Client** (a github extension) instead of using Postman or any other service to test API's.
  3. Installed **express** and **cors** npm pacakages.
  4. installed **nodemon** for auto reload.
  5. Created folder structure.
  6. Installed **Mongoose**.
  7. Defined mongoose schema and model for user.

     <br>

- Securing API with JWT and developing Signup and Login API.

  1. Setting up the user signup route .
  2. Installing **JWT**
  3. Created and tested user Signup API.
  4. Created and tested user Login API.
  5. Implemented secuity with JWT
  6. Implemented **Protected Route** middlerware.

  <br>

- Developing API's for Creating, Updating, Getting and Deleteing the Post

  1. Created post model and post schema
  2. Implemented Create Post REST API.
  3. Installing **multer** library.
  4. Configuration for file/post upload and download.
  5. Implemented REST API for uplaod post image.
  6. Implemented REST API for download post image.
  7. Tested the above API's
  8. REST API to Get All Posts for User and All Post for Logged in User
  9. Implemented Delete post API only by the post owner.

<br>

- Developing API's for Like, Unlike and Comment post.

  1. Modified post model to add the "likes" array.
  2. Implement and tested like post REST API.
  3. Implement and testes unlike post REST API.
  4. Modified post model to add the "commnets" array.
  5. Implemented and tested comment REST API.
