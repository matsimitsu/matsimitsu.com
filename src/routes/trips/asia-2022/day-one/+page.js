export const postData = {
	title: 'Day One',
	subtitle: 'Gardens by the Bay, Singapore',
	trip: 'asia-2022',
	startDate: new Date('2022-05-04'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03371.jpg',
		width: 4000,
		height: 2667,
		alt: 'Tree forest, Gardens by the bay'
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
