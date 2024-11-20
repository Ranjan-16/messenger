import bcrypt from "bcrypt";
import { authSchema } from "../validations/authValidation.js";
import { config } from "../config/dotenv.js";
export const signUp = (req, res) => {
  const { name, email, password } = req.body;
  const result = authSchema.validateAsync(req.body);
  bcrypt.hash(password, config.salt, function (err, hash) {
    console.log("🚀 ~ hash:", hash);
  });
  console.log("🚀 ~ signUp ~ result:", result);
  res.send("signup controller");
};
export const logOut = (req, res) => {
  res.send("logout controller");
};
export const logIn = (req, res) => {
  res.send("login controller");
};
