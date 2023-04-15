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
	palettes: Palette[][];
}

export function makePackingArea(
	paletteDimension: Dimensions,
	width: number,
	length: number
): PackingArea {
	return {
		palettes: [...Array(length)].map(() =>
			Array(width).map(() => ({ dimensions: paletteDimension }))
		)
	};
}

export interface Palette {
	dimensions: Dimensions;
}

export interface FilledPackingArea {
	palettes: FilledPalette[];
}

export interface FilledPalette extends Palette {
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
