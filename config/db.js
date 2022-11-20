import { createPool } from "mysql2/promise";

const pool = createPool({
  host: "localhost",
  user: "root",
  password: "n0m3l0",
  database: "chuck",
  port: 3306,
});

export { pool };
