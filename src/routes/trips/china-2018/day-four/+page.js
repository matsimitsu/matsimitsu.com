export const postData = {
	title: 'Day Four',
	subtitle: 'Lion Rock Hike',
	trip: 'china-2018',
	startDate: new Date('2018-05-04'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-four/20180504-00888.jpg',
		width: 6000,
		height: 4000,
		alt: 'Lion rock'
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
