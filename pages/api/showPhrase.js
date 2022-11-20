import axios from "axios";
import { pool } from "../../config/db";

export default async function showPhrase(req, res) {
  const rows = await pool.query(`SELECT * FROM Phrases`);
  return res.status(200).json({ phrases: rows[0] });
}
