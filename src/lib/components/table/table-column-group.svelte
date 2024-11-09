<script lang="ts">
	export let flexcol: boolean = true;
</script>

<colgroup>
	<slot />
	{#if flexcol}
		<col class="flex flex-grow-1" />
	{/if}
</colgroup>
