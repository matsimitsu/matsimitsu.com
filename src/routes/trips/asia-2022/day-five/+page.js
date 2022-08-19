export const postData = {
	title: 'Day Five',
	subtitle: "Rail Corridor and HDB's, Singapore",
	trip: 'asia-2022',
	startDate: new Date('2022-05-08'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-five/20220508-03826.jpg',
		width: 4000,
		height: 2667,
		alt: 'HDB, Singapore'
	},
	locations: [
		{
			name: 'Singapore',
			long: 103.851959,
			lat: 1.29027,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
