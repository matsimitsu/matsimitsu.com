export const postData = {
	title: 'Day twelve',
	subtitle: 'Highway One',
	trip: 'usa-2019',
	startDate: new Date('2019-07-29'),
	endDate: new Date('2019-07-30'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-twelve/DSC09689.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 35.6438587,
			long: -121.1907533,
			name: 'San Simeon, CA, USA'
		},
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' }
	]
};

export function load({ params }) {
    return { postData};
}
