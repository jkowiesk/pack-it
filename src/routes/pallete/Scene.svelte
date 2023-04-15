<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { DirectionalLight } from 'three';
	import { spring } from 'svelte/motion';
	import { interactivity } from '@threlte/extras';
	import { SAMPLE_FILLED_PACKING_AREA, type PositionedBox, normalize } from '../../alg/packing';
	import Box from './Box.svelte';
	interactivity();

	const paletteThick = 0.05;

	const boxes = normalize(SAMPLE_FILLED_PACKING_AREA.palettes[0][0]).boxes.slice(0, 4);
	// console.log(boxes);
</script>

<T.PerspectiveCamera makeDefault position={[0, 0.8, -1.1]}
	><OrbitControls enableDamping /></T.PerspectiveCamera
>

<!-- minPolarAngle={Math.PI * (1 / 4)}
maxPolarAngle={Math.PI * (1 / 3)} -->

<T.AmbientLight color="#ffffff" intensity={0.5} />
<T.DirectionalLight color="#ffffff" intensity={0.5} position={[0, 1, 0]} />
<T.Mesh rotation.x={Math.PI / 2} position={[0, 0, 0]}>
	<T.BoxGeometry args={[1, 1, paletteThick, 10]} />
	<T.MeshLambertMaterial color="#94a3b8" />
</T.Mesh>

{#each boxes as box, i}
	<Box filledBox={box} isLast={i === boxes.length - 1} />
{/each}
