export const postData = {
	title: 'Day nine',
	subtitle: 'Yosemite',
	trip: 'usa-2019',
	startDate: new Date('2019-07-26'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-nine/DSC09462.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 37.7401412,
			long: -119.567272,
			name: 'Yosemite National Park'
		},
		{
			lat: 36.1672559,
			long: -115.1485163,
			name: 'Las Vegas'
		},
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco', textPosition: 'left' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' }
	]
};

export function load({ params }) {
    return { postData};
}
