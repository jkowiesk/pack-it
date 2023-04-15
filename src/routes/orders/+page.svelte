<script>
	import truck from '../../assets/truck.svg';
	import pallet from '../../assets/pallet.svg';
	import Button from '../../shared/Button.svelte';
	import { Canvas } from '@threlte/core';
	import Scene from '../pallete/Scene.svelte';
	import { SAMPLE_FILLED_PACKING_AREA, normalize } from '../../alg/packing';
	import { fromNormalizedToSvelte } from '../pallete/utils';

	let pallets = new Array(7);

	let boxes = fromNormalizedToSvelte(normalize(SAMPLE_FILLED_PACKING_AREA.palettes[0][0])).boxes;

	let boxIdx = 0;
	$: slicedBoxes = boxes.slice(0, boxIdx);
</script>

<div class="flex flex-col gap-5 w-5/6 pt-3 mx-auto">
	<div class="flex align-center gap-1">
		<div
			class="h-full grow border-[3px] border-rose-600 rounded-md grid grid-rows-2 grid-flow-col auto-cols-[39px] gap-1 p-1"
			style="direction: rtl;"
		>
			{#each pallets as _}
				<img src={pallet} alt="pallet" class="h-full w-full aspect-square" />
			{/each}
		</div>
		<img src={truck} alt="truck" class="h-24" />
	</div>
	<div class="bg-gray-600 shadow-inner shadow-gray-700 rounded-md w-full h-96">
		<Canvas>
			<Scene boxes={slicedBoxes} />
		</Canvas>
	</div>
	<div class="flex gap-5 w-full">
		<Button on:click={() => --boxIdx} style="grow basis-0 h-10">previous</Button>
		<Button on:click={() => ++boxIdx} style="grow basis-0 h-10">next</Button>
	</div>
</div>
