<script lang="ts">
	import Table from '$lib/components/table/table.svelte';
	import TableRow from '$lib/components/table/table-row.svelte';
	import TableCell from '$lib/components/table/table-cell.svelte';
	import TableBody from '$lib/components/table/table-body.svelte';
	import TableContainer from '$lib/components/table/table-container.svelte';
	import TableHead from '$lib/components/table/table-head.svelte';
	import DragDropIcon from '$lib/components/icons/drag-drop-icon.svelte';
	import TableColumnGroup from '$lib/components/table/table-column-group.svelte';
	import Button from '$lib/components/buttons/button.svelte';

	import { sampleData } from '$lib/stores/sampledata';
</script>

<TableContainer>
	<Table>
		<TableColumnGroup slot="colgroup">
			<col class="w-[80px] min-w-[80px] max-w-[80px]" />
			<col class="w-[40px] min-w-[20px] max-w-[40px]" />
			<col class="w-[40px] min-w-[20px] max-w-[40px]" />
			<col class="w-[100px] min-w-[70px] max-w-[120px]" />
			<col class="w-[100px] min-w-[70px] max-w-[120px]" />
			<col class="w-[500px] min-w-[200px] max-w-[500px]" />
			<col class="w-[100px] min-w-[70px] max-w-[120px]" />
			<col class="w-[100px] min-w-[70px] max-w-[120px]" />
		</TableColumnGroup>
		<TableHead slot="head">
			<TableRow currentIndex={$sampleData.dragevent.currentIndex} header>
				<TableCell header label={'アクション'} colspan={2} />
				<TableCell header label={''} />
				{#each $sampleData.columns as col}
					<TableCell header label={col.label} />
				{/each}
			</TableRow>
		</TableHead>
		<TableBody slot="body">
			{#each $sampleData.rows as row, i}
				<TableRow
					on:dragstart={(_) => sampleData.dragevent.dragstart(i)}
					on:dragover={(_) => sampleData.dragevent.replaceTo(i)}
					on:drop={sampleData.dragevent.dragend}
					on:dragend={sampleData.dragevent.dragend}
					index={i}
					currentIndex={$sampleData.dragevent.currentIndex}
					draggable={$sampleData.dragevent.draggable}
					classes="shadow odd:bg-white even:bg-slate-100"
				>
					<TableCell label={'バナー'} header variant="label">
						<DragDropIcon
							width={10}
							fill="gray"
							visible={$sampleData.dragevent.draggable}
							slot="after"
						/>
					</TableCell>
					{#each row as v, j}
						<TableCell
							classes={$sampleData.columns[j].class}
							label={v}
							variant={$sampleData.columns[j].type}
						/>
					{/each}
					<TableCell classes="p-2 text-center">
						<Button label="編集" />
					</TableCell>
					<TableCell classes="p-2 text-center">
						<Button on:click={() => sampleData.remove(i)} label="削除" />
					</TableCell>
				</TableRow>
			{/each}
		</TableBody>
	</Table>
</TableContainer>
