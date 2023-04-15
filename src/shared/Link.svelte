<script lang="ts">
	export let isSelected = false;
</script>

<div class="rounded-t-[19px] shadow-inner pb-4 {isSelected ? 'bg-gray-100' : 'bg-neutral-800'}">
	<a
		href="#"
		class="block text-gray-100 px-2 pb-1 bg-neutral-800 rounded-full {isSelected ? '' : ''}"
		><slot /></a
	>
</div>
