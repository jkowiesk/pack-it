export const SIZE_DELTA = 20;

export const SAMPLE_FILLED_PACKING_AREA: FilledPackingArea = {
	palettes: [
		{
			boxes: [
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 3,
							dy: SIZE_DELTA * 2,
							dz: SIZE_DELTA * 1
						},
						weight: 20
					},
					position: { x: 0, y: 0, z: 0 }
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 1,
							dy: SIZE_DELTA * 1,
							dz: SIZE_DELTA * 1
						},
						weight: 10
					},
					position: { x: 0, y: 0, z: SIZE_DELTA * 1 }
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 2,
							dy: SIZE_DELTA * 3,
							dz: SIZE_DELTA * 1
						},
						weight: 40
					},
					position: { x: SIZE_DELTA * 3, y: 0, z: SIZE_DELTA * 1 }
				},
				{
					box: {
						dimensions: {
							dx: SIZE_DELTA * 4,
							dy: SIZE_DELTA * 10,
							dz: SIZE_DELTA * 2
						},
						weight: 100
					},
					position: { x: SIZE_DELTA * 4, y: 0, z: SIZE_DELTA * 2 }
				}
			],
			dimensions: {
				dx: SIZE_DELTA * 8,
				dy: SIZE_DELTA * 10,
				dz: SIZE_DELTA * 4
			}
		}
	]
};

export function normalize(palett: FilledPalett): FilledPalett {
	return {
		dimensions: palett.dimensions,
		boxes: palett.boxes.map((pBox) => normalizeBox(pBox, palett.dimensions))
	};
}

function normalizeBox(
	{ box, position }: PositionedBox,
	palettDimensions: Dimensions
): PositionedBox {
	const boxDimensionsNormalized: Dimensions = {
		dx: box.dimensions.dx / palettDimensions.dx,
		dy: box.dimensions.dy / palettDimensions.dy,
		dz: box.dimensions.dz / palettDimensions.dz
	};
	return {
		position: {
			x: position.x / palettDimensions.dx - 0.5 + boxDimensionsNormalized.dx / 2,
			y: position.y / palettDimensions.dy + boxDimensionsNormalized.dy / 2,
			z: position.z / palettDimensions.dz - 0.5 + boxDimensionsNormalized.dz / 2
		},
		box: {
			weight: box.weight,
			dimensions: boxDimensionsNormalized
		}
	};
}

export function fill(packingArea: PackingArea, boxes: Box[]): FilledPackingArea {
	return {
		palettes: [
			{
				boxes: boxes.map((box) => ({ box: box, position: { x: 0, y: 0, z: 0 } })),
				dimensions: packingArea.palettes[0][0].dimensions
			}
		]
	};
}

export interface PackingArea {
	palettes: Palett[][];
}

export function makePackingArea(
	palettDimention: Dimensions,
	width: number,
	length: number
): PackingArea {
	return {
		palettes: [...Array(length)].map(() =>
			Array(width).map(() => ({ dimensions: palettDimention }))
		)
	};
}

export interface Palett {
	dimensions: Dimensions;
}

export interface FilledPackingArea {
	palettes: FilledPalett[];
}

export interface FilledPalett extends Palett {
	boxes: PositionedBox[];
}

export interface PositionedBox {
	box: Box;
	position: Position;
}

export interface Box {
	dimensions: Dimensions;
	weight: number;
}

export interface Position {
	x: number;
	y: number;
	z: number;
}

export interface Dimensions {
	dx: number;
	dy: number;
	dz: number;
}
