import { createPool } from "mysql2/promise";

const pool = createPool('mysql://uloeu5msem1i842csl33:pscale_pw_B0dXZmnv5T45epl2hkJqBjUW5AmSFsXYRv1zeuR4tY9@us-east.connect.psdb.cloud/api-alma?ssl={"rejectUnauthorized":true}');

export { pool };
