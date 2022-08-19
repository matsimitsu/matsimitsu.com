export const postData = {
	title: 'Day Twenty Six - Twenty Seven',
	subtitle: 'Chiang Mai, Thailand',
	trip: 'asia-2022',
	startDate: new Date('2022-05-30'),
	endDate: new Date('2022-05-31'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/street/20220531-04765.jpg',
		width: 4000,
		height: 2667,
		alt: 'Laundry'
	},
	locations: [
		{
			name: 'Chiang Mai',
			long: 98.979263,
			lat: 18.796143,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
