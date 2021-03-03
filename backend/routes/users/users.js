const users = require('express').Router();

const {
    getAllUsers,
    getSingleUser,
    addUser,
    deleteUser,
    searchUser,
    updateUser,
    updateUserProfilePic,
    updateUserCoverPic
  } = require("../../queries/usersQ");
  
  users.get("/", getAllUsers);
  users.get("/:id", getSingleUser);
  users.post("/addUser", addUser);
  users.delete("/:id", deleteUser);
  users.get("/search/:username", searchUser);
  users.patch("/:id", updateUser);
  users.patch("/profile_pic/:id", updateUserProfilePic);
  users.patch("/cover_pic/:id", updateUserCoverPic);

module.exports = users;