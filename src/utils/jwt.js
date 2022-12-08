const jwt = require('jsonwebtoken');

export function verifyJWT(token) {
  const accessToken = token.split(' ')[1]
  try {
    return jwt.verify(accessToken, process.env.JWT_SECRET);
  } catch (error) {
    return false;
  }
}
export function signJWT(sub) {
  try {
    return jwt.sign({ sub }, process.env.JWT_SECRET, { expiresIn: "2h" });
  } catch (error) {
    console.log(error)
    return false;
  }
}
