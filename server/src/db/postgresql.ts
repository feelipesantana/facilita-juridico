import { Pool } from "pg";
import { env } from "../env";

export const connection = new Pool({
	host: "127.0.0.1",
	user: env.POSTGRESQL_USER,
	database: env.POSTGRESQL_DB,
	password: env.POSTGRESQL_PASS,
	port: 5432,
});
