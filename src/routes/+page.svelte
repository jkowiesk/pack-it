<script lang="ts">
	import { onMount } from 'svelte';
	import '@fontsource/source-code-pro';
	import { SAMPLE_ORDERS } from '../alg/packing';
	import Order from './Order.svelte';
	import Link from '../shared/Link.svelte';

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

<main class="flex flex-col justify-center gap-5 w-5/6 mx-auto pt-3">
	<h1 class="text-white text-4xl mx-auto">
		Pack<span class="it opacity-0 text-rose-600" />
	</h1>
	<div class="flex flex-col gap-8">
		{#each [...orders] as [orderID, order]}
			{#if !order.done}
				<Link href="/find/{orderID}">
					<Order {orderID} {...order} />
				</Link>
			{:else}
				<Link>
					<Order {orderID} {...order} />
				</Link>
			{/if}
		{/each}
	</div>
</main>

<style>
	span.it {
		font-family: 'Source Code Pro', monospace;
	}
</style>
