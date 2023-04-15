<script lang="ts">
	import { T } from '@threlte/core';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { interactivity } from '@threlte/extras';
	import type { PositionedBox } from '../../alg/packing';
	import { onDestroy, onMount } from 'svelte';
	import { randInt } from 'three/src/math/MathUtils';
	import type { ColorRepresentation } from 'three';
	const BOXES_COLORS = ['#991b1b', '#7f1d1d', '#b91c1c'];

	interactivity();

	export let isLast: boolean;
	let color = tweened(!isLast ? BOXES_COLORS[randInt(0, BOXES_COLORS.length - 1)] : '#a3e635', {
		duration: 1000
	});

	console.log(isLast);

	export let filledBox: PositionedBox;
	const {
		box: { dimensions, weight },
		position
	} = filledBox;

	const paletteThick = 0.05;
	const springY = tweened(position.y + 0.23 + paletteThick * 1.5, {
		duration: 2000,
		easing: cubicOut
	});

	const opacity = tweened(0, {
		duration: 2000,
		easing: cubicOut
	});

	onMount(() => {
		$springY = position.y + paletteThick * 0.5 + 0.001;
		$opacity = 1;
	});

	onDestroy(() => {
		$springY = position.y + 0.23 + paletteThick * 1.5;
		$opacity = 0;
	});
</script>

<T.Group>
	<T.Mesh position={[position.x, $springY, position.z]}>
		<T.BoxGeometry
			args={[dimensions.dx - 0.0001, dimensions.dy - 0.001, dimensions.dz - 0.00001, 10]}
		/>
		<T.MeshLambertMaterial color={$color} transparent opacity={$opacity} />
	</T.Mesh>
	<T.Mesh position={[position.x, $springY, position.z]}>
		<T.BoxGeometry args={[dimensions.dx, dimensions.dy, dimensions.dz + 0.001, 1]} />
		<T.MeshBasicMaterial color="#000000" wireframe transparent opacity={$opacity} />
	</T.Mesh>
</T.Group>
