/*import { Pool } from "pg";

const pool = new Pool({
  user: "admin1",
  host: "localhost",
  database: "website1",
  password: "s4f3password9-7",
  port: 5432,
});
export default pool;*/

import "dotenv/config";
import dotenv from 'dotenv';
dotenv.config({ path: './db/prisma/.env' });
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from './prisma/generated/client.js';
const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });
export default prisma;
