import { FastifyInstance } from "fastify";
import { calculateDistanceController } from "./controllers/calculate-distance-controller";
import { calculateRouteController } from "./controllers/calculate-route-controller";
import { createClientController } from "./controllers/create-client-controller";
import { getClientsController } from "./controllers/get-clients-controller";

export async function appRoutes(app: FastifyInstance) {
	app.post("/clients", createClientController);
	app.get("/clients", getClientsController);

	app.post("/calc-distance", calculateDistanceController);
	app.get("/calc-route", calculateRouteController);
}
