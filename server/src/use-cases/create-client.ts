import { Clients } from "@prisma/client";
import { ClientRepository } from "../repositories/client-repository";

interface CreateClientRequest {
	name: string;
	email: string;
	phone: string;
	coordX: number;
	coordY: number;
}
type CreateClientResponse = Clients;
export class CreateClientUseCase {
	constructor(private clientRepository: ClientRepository) {}

	async execute({
		name,
		email,
		phone,
		coordX,
		coordY,
	}: CreateClientRequest): Promise<CreateClientResponse> {
		const createUser = await this.clientRepository.create({
			name,
			email,
			phone,
			coordX,
			coordY,
		});
		console.log(name);

		if (!createUser) {
			throw new Error("Error to create a client!");
		}

		return createUser;
	}
}
