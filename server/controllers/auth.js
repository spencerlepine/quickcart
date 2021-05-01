import mongoose from "mongoose"
import dotenv from "dotenv"

export const verifyUser = async (req, res) => {
  try {
    const { key } = req.params
    
    if (key !== process.env.USER_KEY || key === "demo123") {
      res.status(404).json("invalid authentication key")
      return
    }

    res.status(200).json(true)
  } catch (error) {
    res.status(404).json(error.message)
  }
}
