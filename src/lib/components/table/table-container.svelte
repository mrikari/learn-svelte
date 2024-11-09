<script lang="ts">
	export let classes =
		'container m-10 m-auto mt-10 h-[calc(100vh_-_5rem)] w-full overflow-auto rounded-md shadow-md';
</script>

<!-- 
  @component
-->
<div class={classes}>
	<slot />
</div>
