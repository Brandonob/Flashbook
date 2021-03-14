const db = require('../db/index')

const getAllUsers = async (req, res, next) => {
    try {
        res.status(200).json({
            status: "Success",
            message: "Recieved All Users",
            body: {
                users: await db.any("SELECT * FROM users")
            }
        })  
    } catch (error) {
        res.json({
            status: "Error",
            message: "Couldn't Get All Users"
        })
        next(error);
    }
};

const getSingleUser = async (req, res, next) => {
    try {
        let { id } = req.params;
        res.status(200).json({
            status: "Success",
            message: "Recieved Single User",
            body: {
                users: await db.any("SELECT * FROM users where id = $1", [id])
            }
        })  
    } catch (error) {
        res.json({
            status: "Error",
            message: "Couldn't Find User"
        })
        next(error);
    }
};

const addUser = async (req, res, next) => {
    try {
        let {
            id, 
            password, 
            first_name,
            last_name,
            email_address,
            profile_pic,
            cover_pic,
            dob,
            gender
        } = req.body;
        console.log(req.body);

        let user = await db.one(
            "INSERT INTO users (id, password, first_name, last_name, email_address, profile_pic, cover_pic, dob, gender) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [id, password, first_name, last_name, email_address, profile_pic, cover_pic, dob, gender]
        );
        
        res.status(200).json({
            status: "Success",
            message: "Created New User",
            body: {
                user
            }
        })  
    } catch (error) {
        res.json({
            status: "Error",
            message: "Email Already Exists"
        })
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        let { id } = req.params;
        let user = await db.one("DELETE FROM users WHERE id = $1 RETURNING *", id);
        res.status(200).json({
            status: "Success",
            message: "User Has Been Deleted",
            body: {
                user
            }
        })  
    } catch (error) {
        res.json({
            status: "Error",
            message: "User Couldn't Be Deleted"
        })
        next(error);
    }
};

const searchUser = async (req, res, next) => {
    try {
      let { username } = req.params;
      let user = await db.one(
        "SELECT * FROM users WHERE username = $1",
        username
      );
      if (user) {
        res.status(200).json({
          status: "Success",
          message: username + "Has Been Succesfully Searched",
          body: {
            user
          }
        });
      }
    } catch (error) {
      res.json({
        status: "Error",
        message: "No results found"
      })
      next(error);
    }
  };

  const updateUser = async (req, res, next) => {
    const { id } = req.params;
    const { first_name, last_name, bio, email_address } = req.body;
    try {
      let user = await db.one(
        "UPDATE users SET  first_name=$1, last_name=$2, bio=$3, email_address=$4 WHERE id=$5 RETURNING *",
        [first_name, last_name, bio, email_address, id]
      );
      res.status(200).json({
        status: "Success",
        message: "User Has Been Updated",
        body: {
          user
        }
      });
    } catch (error) {
      res.json({
        status: "Error",
        message: "Couldn't update user"
      });
      next(error);
    }
  };

  const updateUserProfilePic = async (req, res, next) => {
    const { id } = req.params;
    const { profile_pic } = req.body;
    try {
      let user = await db.one(
        "UPDATE users SET profile_pic=$1 WHERE id=$2 RETURNING *",
        [profile_pic, id]
      );
      res.status(200).json({
        status: "Success",
        message: "User's Profile Pic Has Been Updated",
        body: {
          user
        }
      });
    } catch (error) {
      res.json({
        status: "Error",
        message: "Couldn't Update User"
      });
      next(error);
    }
  };
  const updateUserCoverPic = async (req, res, next) => {
    const { id } = req.params;
    const { cover_pic } = req.body;
    try {
      let user = await db.one(
        "UPDATE users SET cover_pic=$1 WHERE id=$2 RETURNING *",
        [cover_pic, id]
      );
      res.status(200).json({
        status: "Success",
        message: "User's cover Pic Has Been Updated",
        body: {
          user
        }
      });
    } catch (error) {
      res.json({
        status: "Error",
        message: "Couldn't Update User"
      });
      next(error);
    }
  };

module.exports = {
    getAllUsers,
    getSingleUser,
    addUser,
    deleteUser,
    searchUser,
    updateUser,
    updateUserProfilePic,
    updateUserCoverPic
};