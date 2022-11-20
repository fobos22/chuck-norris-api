import axios from "axios";
import { pool } from "../../config/db";

export default async function getPhrase(req, res) {
  const phrase = await axios("https://api.chucknorris.io/jokes/random");
  const finalPhrase = `${phrase.data.value}`;
  await pool.query(`INSERT INTO Phrases(phrase) VALUES("${finalPhrase}")`);
  return res.status(204).json();
}
