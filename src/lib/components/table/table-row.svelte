<script lang="ts">
	import TableCell from './table-cell.svelte';

	export let currentIndex: number;
	export let index: number = -1;
	export let classes = '';
	export let draggable = false;
	export let header = false;
	export let flexcol: boolean = true;
	export let flexcolClasses: string = '';

	if (draggable) {
		classes += ' cursor-pointer';
	}

	$: customClass =
		classes + ' ' + (currentIndex === index && draggable ? 'opacity-50' : 'opacity-100');
</script>

<tr {draggable} on:dragstart on:dragover|preventDefault on:drop on:dragend class={customClass}>
	<slot />
	{#if flexcol}
		<TableCell {header} classes={flexcolClasses} />
	{/if}
</tr>
