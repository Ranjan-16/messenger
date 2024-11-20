import User from "../models/userSchema.js";
import { genHash } from "../utils/genHash.js";
import { authSchema } from "../validations/authValidation.js";

export const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const result = await authSchema.validateAsync(req.body);

    if (result) {
      const hashedPassword = await genHash(password);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
      });

      await newUser.save();

      res.status(201).send("User registered successfully");
    }
  } catch (error) {
    if (error.code === 11000) {
      // Handle duplicate email error
      return res.status(400).send({ message: "Email already exists" });
    }

    if (error.isJoi) {
      return res.status(400).send({
        message: "Validation error",
        details: error.details.map((err) => err.message),
      });
    }

    console.error("Error in signUp:", error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export const logIn = (req, res) => {
  res.send("login controller");
};

export const logOut = (req, res) => {
  res.send("logout controller");
};
