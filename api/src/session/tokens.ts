import jwt from "jsonwebtoken";
import { randomBytes } from "crypto";
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

export const ACCESS_SECRET = process.env.ACCESS_SECRET || randomBytes(32).toString("hex");
export const REFRESH_SECRET = process.env.REFRESH_SECRET || randomBytes(32).toString("hex");
//console.log(randomBytes(32).toString("hex"));
//console.log(ACCESS_SECRET);
//console.log(REFRESH_SECRET);

export interface UserPayload {
  id: number;
}

export function generateAccessToken(userId_: number): string {
  return jwt.sign({ userId: userId_ }, ACCESS_SECRET, { expiresIn: "15m" });
}

export function generateRefreshToken(userId_: number): string {
  return jwt.sign({ userId: userId_ }, REFRESH_SECRET, { expiresIn: "7d" });
}