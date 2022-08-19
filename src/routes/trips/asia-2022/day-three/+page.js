export const postData = {
	title: 'Day Three',
	subtitle: 'ArtScience Museum, Singapore',
	trip: 'asia-2022',
	startDate: new Date('2022-05-06'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-three/20220506-03607.jpg',
		width: 4000,
		height: 2667,
		alt: 'Stairs at Fort Canning Park'
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
