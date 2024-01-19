import { PrismaClientRepository } from "../../repositories/prisma/prisma-client-repository";
import { CreateClientUseCase } from "../create-client";

export function createClientFactory() {
	const prismaClientRepository = new PrismaClientRepository();
	const createUserUseCase = new CreateClientUseCase(prismaClientRepository);

	return createUserUseCase;
}
