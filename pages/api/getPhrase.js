import axios from "axios";
import { pool } from "../../config/db";

export default async function getPhrase(req, res) {
  const phrase = await axios("https://api.chucknorris.io/jokes/random");
  await pool.query(
    `INSERT INTO Phrases(phrase) VALUES("${phrase.data.value}")`
  );
  return res.status(204).json({ phrases: phrase.data.value });
}
