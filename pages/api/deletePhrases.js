import { pool } from "../../config/db";

export default async function showPhrase(req, res) {
  await pool.query(`DELETE FROM Phrases`);
  return res.status(204).json();
}
