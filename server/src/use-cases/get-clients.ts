import { Clients } from "@prisma/client";
import { ClientRepository } from "../repositories/client-repository";

type GetClientResponse = Clients[];
export class GetClientsUseCase {
	constructor(private clientRepository: ClientRepository) {}
	async execute(): Promise<GetClientResponse> {
		const getAllClients = await this.clientRepository.findAll();

		if (!getAllClients) {
			throw new Error("Not found clients!");
		}

		return getAllClients;
	}
}
