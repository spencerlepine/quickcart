import { auth } from "../connection/firebase.js"
import { db } from "../connection/firebase.js"

// import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verify the info is valid
    if (!email || !password) {
      res.status(400).json("Please enter all required feilds");
    }

    if (password.length < 6) {
      res.status(400).json("Password too short");
    }

    // const savedUser = await newUser.save();
    const { user: savedUser } = await auth.createUserWithEmailAndPassword(email, password)
    const newUserId = savedUser["uid"]

    await db.collection('users').doc(newUserId)
      .collection("groceryCount")
      .doc("totalCount")
      .set({
        totalCount: 0
      })
    
    // sign the token
    const token = jwt.sign(
      {
        user: newUserId,
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
      .send(newUserId);

    // res.status(200).json('the account was created')
  } catch (error) {
    res.status(404).json(error.message);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password) {
      return res.status(400).json({ errorMessage: "Please enter all required fields." });
    }

    const { user: connectedUser }  = await auth.signInWithEmailAndPassword(email, password)
    
    // sign the token
    const token = jwt.sign(
      {
        user: connectedUser.uid,
      },
      process.env.JWT_SECRET
    );
      
    //send the token in a HTTP-only cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
      }).send(connectedUser.uid);
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
        if (!token) return res.status(200).json(false);
        
        jwt.verify(token, process.env.JWT_SECRET);
    
        res.status(200).send(true);
    } catch (err) {
        res.status(404).json(false);
    }
}