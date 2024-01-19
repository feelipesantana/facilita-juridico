import { FastifyReply, FastifyRequest } from "fastify";
import { GetClientsFactory } from "../../use-cases/factory/get-clients-factory";

export async function getClientsController(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	try {
		const factory = GetClientsFactory();

		const getAllClients = await factory.execute();

		if (!getAllClients) {
			return reply.status(400).send("Not found");
		}

		return reply.status(200).send(getAllClients);
	} catch (err) {
		return reply.status(500).send("Error");
	}
}
