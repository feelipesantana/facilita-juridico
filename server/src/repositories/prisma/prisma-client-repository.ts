import { Clients, Prisma } from "@prisma/client";
import { prisma } from "../../services/prisma";
import { ClientRepository } from "../client-repository";

export class PrismaClientRepository implements ClientRepository {
	async create({
		name,
		email,
		phone,
		coordX,
		coordY,
	}: Prisma.ClientsCreateInput): Promise<Clients> {
		const createClient = await prisma.clients.create({
			data: {
				name,
				email,
				phone,
				coordX,
				coordY,
			},
		});
		return createClient;
	}

	async findAll(): Promise<Clients[]> {
		const getAllClients = prisma.clients.findMany();

		return getAllClients;
	}
}
