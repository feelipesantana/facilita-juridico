import { Clients, Prisma } from "@prisma/client";

export interface ClientRepository {
	create: (data: Prisma.ClientsCreateInput) => Promise<Clients>;
	findByEmail: (email: string) => Promise<Clients | null>;
	findAll: () => Promise<Clients[] | null>;
}
