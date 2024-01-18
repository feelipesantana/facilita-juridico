import zod, { z } from "zod";

const envSchema = z.object({
	POSTGRESQL_USER: z.string(),
	POSTGRESQL_PASS: z.string(),
	POSTGRESQL_DB: z.string(),
});

export const env = envSchema.parse(process.env);
