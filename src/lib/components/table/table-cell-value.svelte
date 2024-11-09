<script lang="ts">
	export let variant: string = 'label';
	export let label: string | number | boolean = '';
	export let mode: 'view' | 'edit' = 'view';

	$: checked = label === true || label === 'true';
</script>

{#if mode === 'edit' && variant === 'number'}
	<input class="w-full border-none bg-transparent" type="number" value={label} />
{:else if mode === 'edit' && variant === 'date'}
	<input class="w-full border-none bg-transparent" type="date" value={label} />
{:else if variant === 'checkbox'}
	<input disabled={mode === 'view'} type="checkbox" {checked} />
{:else}
	<span class="w-full border-none bg-transparent">{label}</span>
{/if}
