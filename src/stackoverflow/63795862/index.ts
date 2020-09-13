import { promisify } from "util";
import jwt from "jsonwebtoken";

async function verifyToken(req, res, next) {
  const [type, token] = req.headers.authorization.split(" ");
  try {
    // @ts-ignore
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET || "");
    // @ts-ignore
    // eslint-disable-next-line require-atomic-updates
    req.userId = decoded.id;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token." });
  }
}

export { verifyToken };
