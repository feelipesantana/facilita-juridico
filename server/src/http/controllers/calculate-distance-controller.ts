import { FastifyReply, FastifyRequest } from "fastify";
import { string, z } from "zod";
import { calculateDistanceFactory } from "../../use-cases/factory/calculate-distance-factory";

const calcDistanceSchema = z.object({
	email: string().email(),
});
export async function calculateDistanceController(
	request: FastifyRequest,
	reply: FastifyReply,
) {
	const { email } = calcDistanceSchema.parse(request.body);

	try {
		const calcFactory = calculateDistanceFactory();

		const distance = await calcFactory.execute({
			email,
		});

		if (!distance) {
			return reply.status(400).send("Error to calculate distance!");
		}

		return reply.status(200).send(distance);
	} catch (err) {
		return reply.status(500).send(err);
	}
}
