import { Pool } from "pg";

const pool = new Pool({
  user: "admin1",
  host: "localhost",
  database: "website1",
  password: "s4f3password9-7",
  port: 5432,
});
export default pool;

