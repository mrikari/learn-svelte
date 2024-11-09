import { writable } from 'svelte/store';

// 初期データ
const initialData: TableDataType = {
	dragevent: {
		draggable: true,
		currentIndex: -1,
	},
	columns: [
		{
			label: '',
			type: 'checkbox',
			class: 'p-2 text-center',
		},
		{
			label: 'ID',
			type: 'number',
			class: 'p-2 text-center'
		},
		{
			label: '名前',
			type: 'string',
			class: 'p-2 text-left'
		},
		{
			label: '作成日',
			type: 'date',
			class: 'p-2 text-left'
		},
		{
			label: '紹介',
			type: 'string',
			class: 'p-2 text-left'
		}
	],
	rows: [
		[true, 1, 'John', '2024-01-10', 'A software engineer who loves hiking.'],
		[true, 2, 'Kim', '2022-11-01', 'A graphic designer and coffee enthusiast.'],
		[true, 3, 'Keny', '2031-04-04', 'A teacher passionate about languages.'],
		[true, 4, 'Alice', '2025-07-23', 'A data analyst with a love for cooking.'],
		[true, 5, 'Bob', '2023-03-15', 'A project manager who enjoys traveling.'],
		[true, 6, 'Charlie', '2029-10-02', 'A freelance photographer and nature lover.'],
		[true, 7, 'Diana', '2027-12-12', 'An architect with a flair for interior design.'],
		[true, 8, 'Evan', '2026-05-30', 'A musician and part-time barista.'],
		[true, 9, 'Fiona', '2028-09-09', 'A fitness trainer who enjoys painting.'],
		[true, 10, 'George', '2030-02-14', 'A chef known for his fusion recipes.'],
		[true, 11, 'Holly', '2024-08-22', 'A veterinarian who loves animals.'],
		[true, 12, 'Ian', '2025-11-11', 'A web developer and cycling enthusiast.'],
		[true, 13, 'Jane', '2023-01-30', 'A yoga instructor with a love for photography.'],
		[true, 14, 'Kyle', '2029-06-17', 'An environmental scientist and outdoor adventurer.'],
		[true, 15, 'Liam', '2027-03-05', 'A marketing expert who enjoys surfing.'],
		[true, 16, 'Mia', '2028-04-18', 'A novelist and book collector.'],
		[true, 17, 'Noah', '2031-07-07', 'An economist with a passion for history.'],
		[true, 18, 'Olivia', '2024-05-25', 'A fashion designer and avid gardener.'],
		[true, 19, 'Paul', '2023-07-19', 'A software developer who enjoys gaming.'],
		[true, 20, 'Quinn', '2026-10-27', 'A biologist with a love for marine life.'],
		[true, 21, 'Rachel', '2025-02-03', 'A teacher who also paints in her free time.'],
		[true, 22, 'Sam', '2027-11-16', 'A digital marketer and chess enthusiast.'],
		[true, 23, 'Tina', '2028-08-08', 'A content writer who loves traveling.'],
		[true, 24, 'Uma', '2030-09-19', 'A chef specializing in Italian cuisine.'],
		[true, 25, 'Victor', '2029-01-24', 'An entrepreneur with a tech startup.'],
		[true, 26, 'Wendy', '2024-12-05', 'A baker known for her creative desserts.'],
		[true, 27, 'Xander', '2023-04-13', 'A musician and avid rock climber.'],
		[true, 28, 'Yara', '2025-06-09', 'A photographer focused on wildlife.'],
		[true, 29, 'Zane', '2027-02-20', 'A lawyer who also enjoys poetry.']
	]
};

function createSampleStore() {
	const { subscribe, set, update } = writable<TableDataType>(initialData);

	return {
		subscribe: subscribe,
		reset: () => set(initialData),
		remove: (index: number) => update(n => {
			n.rows.splice(index, 1)
			return n
		}),
		dragevent: {
			dragstart: (index: number) => update(n => ({ ...n, dragevent: { ...n.dragevent, currentIndex: index } })),
			dragend: () => update(n => ({ ...n, dragevent: { ...n.dragevent, currentIndex: -1 } })),
			replaceTo: (targetIndex: number) => update(n => {
				if (n.dragevent.currentIndex === targetIndex) return n;
				const [movedItem] = n.rows.splice(n.dragevent.currentIndex, 1);
				n.rows.splice(targetIndex, 0, movedItem);
				n.dragevent.currentIndex = targetIndex;
				return n;
			})
		}
	};
}

export const sampleData = createSampleStore()
