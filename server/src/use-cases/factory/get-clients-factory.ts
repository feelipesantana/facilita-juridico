import { PrismaClientRepository } from "../../repositories/prisma/prisma-client-repository";
import { GetClientsUseCase } from "../get-clients";

export function GetClientsFactory() {
	const prismaClientRepository = new PrismaClientRepository();
	const useCase = new GetClientsUseCase(prismaClientRepository);

	return useCase;
}
