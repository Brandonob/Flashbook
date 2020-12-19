const users = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    addUser,
    deleteUser,
    searchUser,
    updateUser,
    updateUserProfilePic
  } = require("../../queries/usersQ");
  
  users.get("/", getAllUsers);
  users.get("/:id", getSingleUser);
  users.post("/addUser", addUser);
  users.delete("/:id", deleteUser);
  users.get("/search/:username", searchUser);
  users.patch("/:id", updateUser);
  users.patch("/profile_pic/:id", updateUserProfilePic);

module.exports = users;