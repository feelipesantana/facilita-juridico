import { PrismaClientRepository } from "../repositories/prisma/prisma-client-repository";
import { calculateDistance } from "../utils/calculate-distance";

interface Point {
	x: number;
	y: number;
	id: number;
	name: string;
	id_client: string;
}

type CalculateRouteUseCaseResponse = Point[];
export class CalculateRouteUseCase {
	constructor(private prismaClientRepository: PrismaClientRepository) {}
	async execute(): Promise<CalculateRouteUseCaseResponse> {
		const clients = await this.prismaClientRepository.findAll();

		const points: Point[] = [
			{ x: 0, y: 0, id: 0, name: "Empresa", id_client: "01" },
			...clients.map((client, index) => ({
				x: client.coordX,
				y: client.coordY,
				id: index + 1,
				name: client.name,
				id_client: client.id,
			})),
		];
		console.log(points);

		const route: Point[] = [points[0]];
		const totalDistance = 0;

		while (route.length < points.length) {
			let minDistance = Infinity;
			let nextPoint: Point | undefined;

			for (const point of points) {
				if (!route.includes(point)) {
					const lastPoint = route[route.length - 1];
					const distance = calculateDistance({
						currentX: lastPoint.x,
						currentY: lastPoint.y,
						pointX: point.x,
						pointY: point.y,
					});

					if (distance < minDistance) {
						minDistance = distance;
						nextPoint = point;
					}
				}
			}

			if (nextPoint) {
				route.push(nextPoint);
			}
		}
		route.push(points[0]);

		return route;
	}
}
