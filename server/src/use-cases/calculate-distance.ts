import { ClientRepository } from "../repositories/client-repository";
import { calculateDistance } from "../utils/calculate-distance";

interface CalculateDistanceRequest {
	email: string;
}

interface CalculateDistanceResponse {
	distance: string;
}

export class CalculateDistanceUseCase {
	constructor(private clientRepository: ClientRepository) {}

	async execute({
		email,
	}: CalculateDistanceRequest): Promise<CalculateDistanceResponse> {
		const getClient = await this.clientRepository.findByEmail(email);

		if (!getClient) {
			throw new Error("Not found client!");
		}

		const distance = calculateDistance({
			currentX: 0,
			currentY: 0,
			pointX: getClient.coordX,
			pointY: getClient.coordY,
		}).toFixed(2);

		console.log("Distance = ", distance);

		return { distance };
	}
}
