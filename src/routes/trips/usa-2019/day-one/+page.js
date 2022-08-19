export const postData = {
	title: 'Day one',
	subtitle: 'Flying from Amsterdam to Las Vegas',
	trip: 'usa-2019',
	startDate: new Date('2019-07-18'),
	endDate: new Date('2019-07-19'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-one/DSC00394-2.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 36.1672559,
			long: -115.1485163,
			name: 'Las Vegas'
		}
	]
};

export function load({ params }) {
    return { postData};
}
