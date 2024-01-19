import cors from "@fastify/cors";
import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import { appRoutes } from "./http/routes";

const app = Fastify();

app.register(cors, {
	origin: "*",
	methods: ["GET", "PUT", "POST", "DELETE"],
});

app.register(appRoutes);

app
	.listen({
		port: 3333,
		host: "0.0.0.0",
	})
	.then(() => {
		console.log("Server is running on :3333");
	});
