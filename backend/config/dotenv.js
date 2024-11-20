import dotenv from "dotenv";
import path from "path";

dotenv.config({
  path: path.resolve("./.env"),
});

// Validate required environment variables
const requiredEnvVars = ["PORT", "DB_URI"];
const missingVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

if (missingVars.length > 0) {
  console.error(
    `Missing required environment variables: ${missingVars.join(", ")}`
  );
  process.exit(1); // Exit the application if required variables are missing
}

// Export environment variables for easy import in other files
export const config = {
  port: process.env.PORT,
  dbUri: process.env.DB_URI,
  origin: process.env.ORIGIN,
  salt: process.env.SALT_ROUND,
  nodeEnv: process.env.NODE_ENV || "development", // Provide a default value
};
