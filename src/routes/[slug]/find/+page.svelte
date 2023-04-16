<script lang="ts" context="module">
	const shelves = [
		{
			x: 0,
			y: 0,
			width: 1,
			height: 3
		},
		{
			x: 1,
			y: 1,
			width: 1,
			height: 3
		},
		{
			x: 2,
			y: 2,
			width: 1,
			height: 3
		},
		{
			x: 3,
			y: 3,
			width: 1,
			height: 3
		},
		{
			x: 4,
			y: 4,
			width: 1,
			height: 3
		},
		{
			x: 4,
			y: 4,
			width: 7,
			height: 3
		}
	];

	const MAP_SIZE = 50;

	interface Tile {
		x: number;
		y: number;
	}

	const startTile = {
		x: 1,
		y: 0
	};
	const path = [startTile];
	const targetTile = {
		x: 0,
		y: 10
	};

	let fields = new Array(MAP_SIZE * MAP_SIZE).fill(true);

	for (const shelf of shelves) {
		for (let i = 0; i < shelf.height; ++i) {
			for (let j = 0; j < shelf.width; ++j) {
				fields[(shelf.x + j) * MAP_SIZE + (shelf.y + i)] = false;
			}
		}
	}

	function heuristic(a: Tile, b: Tile) {
		return (
			Math.abs(targetTile.x - b.x) +
			Math.abs(targetTile.y - b.y) -
			Math.abs(targetTile.x - a.x) -
			Math.abs(targetTile.y - a.y)
		);
	}

	function getPath() {
		let tiles = [{ ...startTile, length: 1 }];
		while (tiles.length) {
			let next = tiles.pop()!;
			path.push(next);
			path.length = next.length;
			if (next.x == targetTile.x && next.y == targetTile.y) {
				console.log(path);
				return;
			}
			const nexts = [
				{
					x: next.x,
					y: next.y - 1
				},
				{
					x: next.x - 1,
					y: next.y
				},
				{
					x: next.x,
					y: next.y + 1
				},
				{
					x: next.x + 1,
					y: next.y
				}
			]
				.filter(({ x, y }) => {
					if (x < 0 || y < 0 || x === MAP_SIZE || y === MAP_SIZE) {
						return false;
					}
					const notVisited = fields[x * MAP_SIZE + y];
					fields[x * MAP_SIZE + y] = false;
					return notVisited;
				})
				.sort(heuristic);
			tiles.push(...nexts.map(({ x, y }) => ({ x, y, length: next.length + 1 })));
		}
	}

	getPath();
	console.log(path);
</script>

<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const orderID = data.id;
</script>

<svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
	{#each shelves as { height, width, x, y }}
		<rect width={width * 2} height={height * 2} x={x * 2} y={y * 2} />
	{/each}
	{#each path as { x, y }}
		<circle cx={x * 2 + 1} cy={y * 2 + 1} r="1" class="fill-rose-800" />
	{/each}
</svg>
