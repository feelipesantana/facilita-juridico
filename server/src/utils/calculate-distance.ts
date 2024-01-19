interface calculateDistanceProps {
	currentX: number;
	currentY: number;
	pointX: number;
	pointY: number;
}

export function calculateDistance({
	currentX,
	currentY,
	pointX,
	pointY,
}: calculateDistanceProps) {
	const result = Math.sqrt((pointX - currentX) ** 2 + (pointY - currentY) ** 2);

	return result;
}
