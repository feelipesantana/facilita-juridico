import { FastifyReply, FastifyRequest } from "fastify";
import { calculateRouteFactory } from "../../use-cases/factory/calculate-route-factory";

export async function calculateRouteController(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	try {
		const factory = calculateRouteFactory();

		const route = await factory.execute();

		if (!route) {
			return reply.status(400).send("Error");
		}

		return reply.status(200).send(route);
	} catch (err) {
		return reply.status(500).send("Error");
	}
}
