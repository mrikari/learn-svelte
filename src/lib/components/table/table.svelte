<script lang="ts">
	export let classes: string = 'box-border w-full table-fixed rounded-md shadow';
</script>

<table class={classes}>
	<slot name="colgroup" />
	<slot name="head" />
	<slot name="body" />
	<slot name="foot" />
</table>
