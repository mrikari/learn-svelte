<script lang="ts">
	export let label: string = '';
	export let classes: string =
		'p-1 border border-gray-200 rounded-md bg-gray-300 hover:bg-gray-200 shadow w-20 active:shadow-inner';
</script>

<button on:click|preventDefault class={classes}><slot>{label}</slot></button>
