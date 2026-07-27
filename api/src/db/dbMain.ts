import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
const env = dotenv.config({ path: './.env' });
dotenvExpand.expand(env);

import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from './prisma/generated/client.js';
import { Server } from 'http';

const connectionString = `${process.env.DATABASE_URL}`;
console.log(connectionString);
const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

export default prisma;
