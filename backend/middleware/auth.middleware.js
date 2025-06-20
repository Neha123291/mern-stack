import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "your_default_jwt_secret_key";

export const protect = (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, JWT_SECRET);

      // Attach user to the request (optional, but good practice)
      req.user = decoded;

      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ success: false, message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ success: false, message: "Not authorized, no token" });
  }
};
