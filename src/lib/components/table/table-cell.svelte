<script lang="ts">
	import TableCellValue from './table-cell-value.svelte';

	export let header: boolean = false;
	export let mode: 'view' | 'edit' = 'view';
	export let variant: string = 'label';
	export let label: string | number | boolean = '';
	export let classes: string = 'p-2';
	export let headerClassOption: string = 'bg-gray-200';
	export let colspan: number = 1;

	if (header && headerClassOption) {
		classes += ' ' + headerClassOption;
	}
</script>

{#if header}
	<th class={classes} {colspan}>
		<slot name="before" />
		<slot>
			<TableCellValue {mode} {label} {variant} />
		</slot>
		<slot name="after" />
	</th>
{:else}
	<td class={classes} {colspan}>
		<slot name="before" />
		<slot>
			<TableCellValue {mode} {label} {variant} />
		</slot>
		<slot name="after" />
	</td>
{/if}
