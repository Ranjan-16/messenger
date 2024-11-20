import bcrypt from "bcrypt";
import { config } from "../config/dotenv.js";
export const genHash = async (password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, Number(config.salt));
    return hashedPassword;
  } catch (error) {
    console.error("Error in genHash:", error);
    throw error;
  }
};
