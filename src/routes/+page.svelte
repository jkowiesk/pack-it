<script lang="ts">
	import { onMount } from 'svelte';
	import '@fontsource/source-code-pro';
	import { SAMPLE_ORDERS } from '../alg/packing';
	import Order from './Order.svelte';

	onMount(() => {
		const it = document.querySelector('.it')!;
		const text = 'IT';
		it.textContent = '';
		// @ts-ignore
		it.style.opacity = '1';
		let i = 0;
		const interval = setInterval(() => {
			it.textContent += text[i];
			i++;
			if (i === text.length) {
				clearInterval(interval);
			}
		}, 500);

		return () => {
			clearInterval(interval);
		};
	});

	let orders = SAMPLE_ORDERS;
</script>

<main class="flex flex-col gap-8 justify-center w-5/6 mx-auto py-6">
	<div class="flex gap-4 mx-auto items-center">
		<svg
			stroke="currentColor"
			class="h-8 w-8"
			fill="url(#grad1)"
			stroke-width="0"
			viewBox="0 0 16 16"
			xmlns="http://www.w3.org/2000/svg"
		>
			<linearGradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
				<stop offset="0%" stop-color="#e11d48" />
				<stop offset="100%" stop-color="#9f1239" />
			</linearGradient>
			<path
				d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001 6.971 2.789Zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
			/></svg
		>
		<h1 class="text-white text-4xl">
			Pack<span class="it opacity-0 text-rose-600" />
		</h1>
	</div>
	<div class="flex flex-col gap-12">
		{#each [...orders] as [orderID, order]}
			{#if !order.done}
				<a href="/{orderID}/find">
					<Order {orderID} {...order} />
				</a>
			{:else}
				<Order {orderID} {...order} />
			{/if}
		{/each}
	</div>
</main>

<style>
	span.it {
		font-family: 'Source Code Pro', monospace;
	}
</style>
