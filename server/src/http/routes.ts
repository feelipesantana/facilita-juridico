import { FastifyInstance } from "fastify";
import { createClientController } from "./controllers/create-client-controller";
import { getClientsController } from "./controllers/get-clients-controller";

export async function appRoutes(app: FastifyInstance) {
	app.post("/clients", createClientController);
	app.get("/clients", getClientsController);
}
