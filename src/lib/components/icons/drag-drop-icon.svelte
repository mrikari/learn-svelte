<script lang="ts">
	export let fill = 'black';
	export let width = 24;
	export let classes = 'inline-block';
	export let visible = true;

	const height = width * (34 / 24);
</script>

{#if visible}
	<svg
		{width}
		{height}
		class={classes}
		viewBox="0 0 24 34"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle cx="5" cy="5" r="5" {fill} />
		<circle cx="19" cy="5" r="5" {fill} />
		<circle cx="5" cy="17" r="5" {fill} />
		<circle cx="19" cy="17" r="5" {fill} />
		<circle cx="5" cy="29" r="5" {fill} />
		<circle cx="19" cy="29" r="5" {fill} />
	</svg>
{/if}
