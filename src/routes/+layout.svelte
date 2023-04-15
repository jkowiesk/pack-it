<script lang="ts">
	import '../app.css';
	import arrow from '../assets/arrow.svg';
	import Link from '../shared/Link.svelte';
</script>

<div class="w-screen h-screen bg-gradient-to-tl from-gray-900 to-gray-800 flex flex-col">
	<div
		class="pl-4 gap-6 flex items-end w-full h-16 shadow-md shadow-neutral-900 bg-neutral-800 overflow-hidden"
	>
		<img src={arrow} alt="back arrow" class="h-5 self-center relative z-10" />
		<Link href="/find">find</Link>
		<Link href="/arrange">arrange</Link>
		<Link href="/load">load</Link>
	</div>
	<slot />
</div>
