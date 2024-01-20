import { PrismaClientRepository } from "../../repositories/prisma/prisma-client-repository";
import { CalculateRouteUseCase } from "../calculate-route";

export function calculateRouteFactory() {
	const clientRepository = new PrismaClientRepository();
	const useCase = new CalculateRouteUseCase(clientRepository);
	return useCase;
}
