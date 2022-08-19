export const postData = {
	title: 'Day Seven',
	subtitle: 'Sentosa, Singapore',
	trip: 'asia-2022',
	startDate: new Date('2022-05-10'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-seven/20220510-04043.jpg',
		width: 4000,
		height: 2667,
		alt: 'Singapore Skyline with the Marina Bay Sands hotel and the Art Museum.'
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
