<script lang="ts">
    export let style = "";
</script>

<button on:click class="
    bg-rose-600 hover:bg-rose-500 shadow-mdlg transition transition duration-100 hover:shadow-hov
    text-xl hover:shadow-rose-600 shadow-rose-800 text-gray-100 rounded-md px-1 pb-1 flex items-center justify-center {style}
"><slot/></button>


