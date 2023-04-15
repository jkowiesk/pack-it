<script lang="ts">
	import { T } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { DirectionalLight } from 'three';
	import { spring } from 'svelte/motion';
	import { SAMPLE_FILLED_PACKING_AREA, type PositionedBox, normalize } from '../../alg/packing';
	import Box from './Box.svelte';
	import Pallet from './Pallet.svelte';
	import { fromNormalizedToSvelte } from './utils';

	const boxes = fromNormalizedToSvelte(
		normalize(SAMPLE_FILLED_PACKING_AREA.palettes[0][0])
	).boxes.slice(0, 4);

	// console.log(boxes);
</script>

<T.PerspectiveCamera makeDefault position={[0, 0.8, -1.1]}
	><OrbitControls enableDamping /></T.PerspectiveCamera
>

<!-- minPolarAngle={Math.PI * (1 / 4)}
maxPolarAngle={Math.PI * (1 / 3)} -->

<T.AmbientLight color="#ffffff" intensity={0.4} />
<T.DirectionalLight color="#ffffff" intensity={0.2} position={[0, 3, 0]} />

<Pallet />

{#each boxes as box, i}
	<Box filledBox={box} isLast={i === boxes.length - 1} />
{/each}
