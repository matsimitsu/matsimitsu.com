export const postData = {
	title: 'Day ten',
	subtitle: 'San Francisco',
	trip: 'usa-2019',
	startDate: new Date('2019-07-27'),
	endDate: new Date('2019-07-28'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-ten/DSC09518.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
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
