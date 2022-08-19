export const postData = {
	title: 'Day Eight',
	subtitle: 'Changi airport, Singapore',
	trip: 'asia-2022',
	startDate: new Date('2022-05-11'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-eight/20220511-04069.jpg',
		width: 4000,
		height: 2667,
		alt: 'Changi Airport Vortex'
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
