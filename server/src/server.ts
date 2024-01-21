import cors from "@fastify/cors";
import env from "dotenv";
import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { appRoutes } from "./http/routes";
const app = Fastify();

env.config();

app.register(cors, {
	origin: "*",
	methods: ["GET", "PUT", "POST", "DELETE"],
});

app.register(appRoutes);

app
	.listen({
		port: process.env.PORT ? Number(process.env.PORT) : 3333,
		host: "0.0.0.0",
	})
	.then(() => {
		console.log("Server is running on :3333");
	});
