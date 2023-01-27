const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { createError } = require("../error");
const { verifyToken } = require("../middlewares/verifyToken");
const { default: mongoose } = require("mongoose");
const { hashPassword } = require("../utils/hashMake");
const { json } = require("express");

//api for verfiy user by email
router.get("/find/:email", async (req, res, next) => {
  try {
    const user = await User.find({ email: req.params.email });
    if (!user.length) return next(createError(404, "user not found!"));
    return res.status(200).json({ user: user[0]._id });
  } catch (error) {
    return next(error);
  }
});

//api for updatePassword
router.put("/updatePassword", async (req, res, next) => {
  try {
    const password = hashPassword(req.body.data.password);
    const id = mongoose.Types.ObjectId(req.body.id);
    const user = await User.findByIdAndUpdate(
      id,
      {
        $set: {
          password: password,
        },
      },
      { new: true }
    );

    if (!user) return next(createError(404, "user not found!"));

    return res.status(200).json({ message: "ok" });
  } catch (error) {
    return next(error);
  }
});

//get followers of current user
router.get("/followers", verifyToken, async (req, res, next) => {
  const user = req.user;
  try {
    const currentuser = await User.findById(user.id);
    if (currentuser) {
      const followers = await Promise.all(
        currentuser.followers.map(async (id) => {
          return await User.aggregate([
            {
              $match: {
                _id: mongoose.Types.ObjectId(id),
              },
            },
            {
              $project: {
                password: 0,
                email: 0,
                fromGoogle: 0,
                followers: 0,
                following: 0,
              },
            },
          ]);
        })
      );
      if (followers) res.status(200).json(followers.flat());
    }
  } catch (error) {
    next(error);
  }
});

//update profile api
router.put("/updateProfile", verifyToken, async (req, res, next) => {
  try {
    const currentUser = req.user;
    const user = await User.findByIdAndUpdate(currentUser.id,
      {
        name: req.body.name,
        mobileNumber: req.body.mobileNumber,
      },
      { new: true }
    );
    const { password, ...others } = user._doc;
    if (user) return res.status(200).json(others);
  } catch (error) {
    next(error);
  }
});


//upload profile pic
router.put("/uploadProfile", verifyToken, async (req, res, next) => {
  try {
    const currentUser = req.user;
    const user = await User.findByIdAndUpdate(
      currentUser.id,
      {
        profileimg: req.body.imgUrl,
      },
      { new: true }
    );
    const { password, ...others } = user._doc;
    if (user) return res.status(200).json(others);
  } catch (error) {
    next(error);
  }
});

router.get("/search/:name", verifyToken, async (req, res, next) => {
  try {
    const users = await User.aggregate([
      {
        $match: {
          name: {
            $regex: req.params.name,
            $options: "i",
          },
        },
      },
      {
        $project: {
          password: 0,
        },
      },
    ]);

    if (users) res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get("/getUsers",verifyToken, async (req, res, next) => {
  const user = req.user;
  if(!user || user.role !== 'admin') return createError(404, 'you are not allowed!'); 
  try {
    const users = await User.aggregate([
      {
        $match: { _id: { $ne: mongoose.Types.ObjectId(user.id) }}
      },
      {
        $project: {
          password: 0,
        }
      }
    ]);
    if (!users.length) return next(createError(404, "No users found!!"));
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
});


router.delete("/deleteUser/:id",verifyToken, async (req, res, next) => {
  const user = req.user;
  if(!user || user.role !== 'admin') return createError(404, 'you are not allowed!'); 
  if(!req.params.id) return createError(404, "Id not provided don't be clever!!");
  try {
    const users = await User.findByIdAndDelete(mongoose.Types.ObjectId(req.params.id));
    if (!users) return next(createError(404, "User not deleted..."));
    if(users.name) {
      return res.status(200).json(`user with name ${users.name} is deleted!!`);
    }
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
