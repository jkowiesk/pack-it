<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { DirectionalLight } from 'three';
	import { spring } from 'svelte/motion';
	import { interactivity } from '@threlte/extras';
	import type { PositionedBox } from '../../alg/packing';
	import Box from './Box.svelte';
	interactivity();

	const paletteThick = 0.05;

	const box: PositionedBox = {
		box: { dimensions: { dx: 0.1, dy: 0.1, dz: 0.1 }, weight: 100 },
		position: { x: -0.45, y: 0, z: 0 }
	};

	const boxes: PositionedBox[] = Array(1).fill(box);
	let state;
</script>

<T.PerspectiveCamera makeDefault position={[0, 0.8, -1.1]}
	><OrbitControls
		enableDamping
		minPolarAngle={Math.PI * (1 / 4)}
		maxPolarAngle={Math.PI * (1 / 3)}
	/></T.PerspectiveCamera
>

<T.AmbientLight color="#ffffff" intensity={0.5} />
<T.DirectionalLight color="#ffffff" intensity={0.5} position={[0, 1, 0]} />
<T.Mesh rotation.x={Math.PI / 2} position={[0, 0, 0]}>
	<T.BoxGeometry args={[1, 1, paletteThick, 10]} />
	<T.MeshLambertMaterial color="#94a3b8" />
</T.Mesh>

{#each boxes as box, i}
	<Box filledBox={box} isLast={i === boxes.length - 1} />
{/each}
