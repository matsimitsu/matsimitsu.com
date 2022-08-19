export const postData = {
	title: 'Day Three',
	subtitle: 'Ocean Park',
	trip: 'china-2018',
	startDate: new Date('2018-05-03'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-three/20180503-00697.jpg',
		width: 6000,
		height: 4000,
		alt: 'Ocean park'
	},
	locations: [
		{
			lat: 22.302711,
			long: 114.177216,
			name: 'Hong Kong',
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
