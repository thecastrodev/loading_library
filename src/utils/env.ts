import dotenv from "dotenv";

dotenv.config();

export const env = {
  port: process.env.PORT || 3000,
  jwtSecretKey: process.env.JWT_SECRET_KEY || "secret",
};