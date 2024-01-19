import { Clients, Prisma } from "@prisma/client";

export interface ClientRepository {
	create: (data: Prisma.ClientsCreateInput) => Promise<Clients>;
	findAll: () => Promise<Clients[] | null>;
}
