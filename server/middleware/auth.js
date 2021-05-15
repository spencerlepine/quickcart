import jwt from "jsonwebtoken";

function auth(req, res, next) {
  try {
    const { userId } = req.params;
    const token = req.cookies.token;
    
    if (!token || !userId) return res.status(401).json({ errorMessage: "Unauthorized" });

    // const verified = jwt.verify(token, process.env.JWT_SECRET);
    // req.user = verified.user;

    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ errorMessage: "Unauthorized" });
  }
}

export default auth;