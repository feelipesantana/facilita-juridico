import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { createClientFactory } from "../../use-cases/factory/create-client-factory";

const createClientSchema = z.object({
	name: z.string(),
	email: z.string(),
	phone: z.string(),
	coordX: z.number(),
	coordY: z.number(),
});
export async function createClientController(
	req: FastifyRequest,
	reply: FastifyReply,
) {
	const { name, email, phone, coordX, coordY } = createClientSchema.parse(
		req.body,
	);
	console.log(name);

	try {
		const factory = createClientFactory();

		const createClient = await factory.execute({
			name,
			email,
			phone,
			coordX,
			coordY,
		});

		if (!createClient) {
			return reply.status(400).send("Error to create Client");
		}

		return reply.status(201).send(createClient);
	} catch (err) {
		throw new Error("Error");
	}
}
