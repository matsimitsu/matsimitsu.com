export const postData = {
	title: 'Day Four',
	subtitle: 'Chinatown, Singapore',
	trip: 'asia-2022',
	startDate: new Date('2022-05-07'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-four/20220507-03728.jpg',
		width: 4000,
		height: 2667,
		alt: 'Buddha Tooth Relic Temple'
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
