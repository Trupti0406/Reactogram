const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const mongoose = require("mongoose");
const UserModel = require("UserModel");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  // Bearer hfjfjddkfffsffefhtyv
  if (!authorization) {
    return res.status(401).json({ error: "User Not Logged In" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({ error: "User Not Logged In" });
    }
    const { _id } = payload;
    UserModel.findByID(_id).then((debUSer) => {
      req.user = debUSer;
      next();
    });
  });
};
