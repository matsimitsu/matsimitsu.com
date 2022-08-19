export const postData = {
	title: 'Day Fifty Three',
	subtitle: 'George Town, Malaysia',
	trip: 'asia-2022',
	startDate: new Date('2022-06-26'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-54/20220626-05307.jpg',
		width: 4000,
		height: 2667,
		alt: 'George Town, Malaysia'
	},
	locations: [
		{
			name: 'George Town',
			long: 100.312386,
			lat: 5.4253,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
