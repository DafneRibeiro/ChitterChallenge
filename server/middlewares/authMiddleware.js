import User from "../model/authModel.js";
import jwt from "jsonwebtoken";


const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(
      token,
      "TheLagger super secret key",
      async (err, decodedToken) => {
        if (err) {
          res.json({ status: false });
          next();
        } else {
          const user = await User.findById(decodedToken.id);
          if (user) res.json({ status: true, user: user.email, name: user.name, username: user.username });
          else res.json({ status: false });
          next();
        }
      }
    );
  } else {
    res.json({ status: false });
    next();
  }
};

export default checkUser;