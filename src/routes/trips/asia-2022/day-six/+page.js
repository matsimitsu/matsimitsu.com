export const postData = {
	title: 'Day Six',
	subtitle: 'National Museum, Singapore',
	trip: 'asia-2022',
	startDate: new Date('2022-05-09'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-six/20220509-03868.jpg',
		width: 4000,
		height: 2667,
		alt: 'Singapore National History Museum'
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
