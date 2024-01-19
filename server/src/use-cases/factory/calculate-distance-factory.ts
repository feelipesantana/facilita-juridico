import { PrismaClientRepository } from "../../repositories/prisma/prisma-client-repository";
import { CalculateDistanceUseCase } from "../calculate-distance";

export function calculateDistanceFactory() {
	const clientRepository = new PrismaClientRepository();
	const useCase = new CalculateDistanceUseCase(clientRepository);

	return useCase;
}
