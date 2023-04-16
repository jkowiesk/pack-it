<script lang="ts">
	import { SAMPLE_FILLED_PACKING_AREA } from '../../../alg/packing';
	import BarCode from '../../../shared/BarCode.svelte';
	import Truck from '../../../shared/Truck.svelte';

	const palettes = SAMPLE_FILLED_PACKING_AREA.palettes;
	let palletIdx = 0;
</script>

<div class="flex flex-col text-gray-100 h-full text-xl items-center gap-5 w-5/6 pt-3 mx-auto">
	<Truck
		{palletIdx}
		noYellow
		on:pallete-clicked={({ detail: newPalletIdx }) => {
			palletIdx = newPalletIdx;
		}}
	/>
	<!-- <div
		class="flex flex-col  items-center bg-gray-700 shadow-inner p-2 text-xl shadow-gray-800 rounded-2xl w-full h-96"
	> -->
	ID: 1028374613407461
	<BarCode />
	<div class="flex flex-col basis-0 grow items-stretch gap-5 w-full px-2 overflow-auto">
		{#each palettes[palletIdx].boxes as { data: box }}
			<div
				class="grid grid-cols-3 row-span-3 h-32 p-4 gap-2 bg-gradient-to-tl from-gray-900 to-gray-800 w-full border-rose-800 border-2 rounded-xl shadow-inner shadow-gray-700 justify-items-start items-baseline"
			>
				<div class="flex gap-4 col-span-3 justify-self-start">
					<svg
						stroke="currentColor"
						fill="currentColor"
						stroke-width="0"
						viewBox="0 0 16 16"
						class="h-8 w-8 text-rose-600"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"
						/></svg
					>
					<div class="">
						<h3 class="text-rose-600 text-[0.7rem]">Reference ID</h3>
						<p class="text-white text-sm">{box.refID}</p>
					</div>
				</div>

				<div class=" ">
					<h3 class="text-rose-600 text-[0.55rem]">Packager</h3>
					<p class="text-gray-300 text-[0.7rem]">{box.packager}</p>
				</div>

				<div class=" ">
					<h3 class="text-rose-600 text-[0.55rem]">From</h3>
					<p class="text-gray-300 text-[0.7rem]">{box.from}</p>
				</div>
				<div class=" ">
					<h3 class="text-rose-600 text-[0.55rem]">Destination</h3>
					<p class="text-gray-300 text-[0.7rem]">{box.to}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
