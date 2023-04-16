<script lang="ts">
	import truck from '../assets/truck.svg';
	import pallet from '../assets/pallet.svg';
	import palletGreen from '../assets/palletGreen.svg';
	import palletYellow from '../assets/palletYellow.svg';

	export let palletIdx: number | undefined = undefined;

	import { SAMPLE_FILLED_PACKING_AREA } from '../alg/packing';
</script>

<div class="flex align-center gap-1">
	<div
		class="h-full grow border-[3px] border-rose-600 rounded-md grid grid-rows-2 grid-flow-col auto-cols-[39px] gap-1 p-1"
		style="direction: rtl;"
	>
		{#each SAMPLE_FILLED_PACKING_AREA.palettes as _, i}
			<img
				src={i === palletIdx
					? palletYellow
					: palletIdx !== undefined && i < palletIdx
					? palletGreen
					: pallet}
				alt="pallet"
				class="h-full w-full aspect-square"
			/>
		{/each}
	</div>
	<img src={truck} alt="truck" class="h-24" />
</div>
