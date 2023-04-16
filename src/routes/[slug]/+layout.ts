import { SAMPLE_FILLED_PACKING_AREA, SIZE_DELTA } from '../../alg/packing';
import type { LayoutLoad } from './$types';

interface OptRequest {
	boxes: {
		id: number;
		dx: number;
		dz: number;
		weight: number;
	}[];
	palett_size: [number, number, number];
	palettes_n: number;
}

interface OptResponse {
	palettes: {
		boxes: {
			[key: string]: [number, number, number];
		};
	}[];
}

export const load = (({ params: { slug } }) => {
	let idx = 0;
	return {
		boxes: fetch('http://127.0.0.1:8000/packing-plans', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				boxes: SAMPLE_FILLED_PACKING_AREA.palettes
					.map((pallet) =>
						pallet.boxes.map((box) => ({
							id: idx++,
							dx: box.box.dimensions.dx / SIZE_DELTA,
							dz: box.box.dimensions.dz / SIZE_DELTA,
							weight: box.box.weight
						}))
					)
					.flat(),
				palett_size: (() => {
					let { dx, dy, dz } = SAMPLE_FILLED_PACKING_AREA.palettes[0].dimensions;
					return [dx / SIZE_DELTA, dy / SIZE_DELTA, dz / SIZE_DELTA];
				})(),
				palettes_n: 2
			} satisfies OptRequest)
		}).then((r): Promise<OptResponse> => r.json()),
		id: +slug
	};
}) satisfies LayoutLoad;
