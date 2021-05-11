import mongoose from "mongoose";
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { email, password, passwordVerify } = req.body;

    // Verify the info is valid
    if (!email || !password || !passwordVerify) {
      res.status(400).json("Please enter all required feilds");
    }

    // Check password length
    const existinUser = await User.findOne({ email });
    if (existinUser) {
      res.status(400).json("An account with this email already exists");
    }

    // hash the password
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    // save new user to the account db

    const newUser = new User({
      email,
      passwordHash,
    });

    const savedUser = await newUser.save();

    // sign the token

    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();

    // res.status(200).json('the account was created')
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate

    if (!email || !password)
      return res
        .status(400)
        .json({ errorMessage: "Please enter all required fields." });

    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    const passwordCorrect = await bcrypt.compare(
      password,
      existingUser.passwordHash
    );
    if (!passwordCorrect)
      return res.status(401).json({ errorMessage: "Wrong email or password." });

    // sign the token

    const token = jwt.sign(
      {
        user: existingUser._id,
      },
      process.env.JWT_SECRET
    );

    // send the token in a HTTP-only cookie

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      })
      .send();
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const logoutUser = async (req, res) => {
  res
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
      secure: true,
      sameSite: "none",
    })
    .send();
};

export const userLoggedIn = async (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.status(400).json(false);
    
        jwt.verify(token, process.env.JWT_SECRET);
    
        res.status(200).send(true);
    } catch (err) {
        res.status(404).json(false);
    }
}