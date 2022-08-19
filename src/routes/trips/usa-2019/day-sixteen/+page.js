export const postData = {
	title: 'Day sixteen',
	subtitle: 'Las Vegas',
	trip: 'usa-2019',
	startDate: new Date('2019-08-03'),
	endDate: new Date('2019-08-04'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-fourteen/IMG_20190803_171717.jpg',
		width: '2200',
		height: '1650',
		alt: ''
	},
	locations: [
		{
			lat: 36.1672559,
			long: -115.1485163,
			name: 'Las Vegas'
		},
		{ lat: 37.7749, long: -122.4194, name: 'San Francisco' },
		{ lat: 34.0522, long: -118.2437, name: 'Los Angeles' }
	]
};

export function load({ params }) {
    return { postData};
}
