import { verifyJWT } from "../utils/jwt";

export default function (req, res, next) {
  const payload = verifyJWT(req.headers.authorization);
  console.log(payload);
  if (!payload) {
    return res.status(403).json({ message: "You're not authorized" });
  }
  req.userId = payload.sub;
  next();
}
