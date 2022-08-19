export const postData = {
	title: 'Day eight',
	subtitle: 'Death Valley',
	trip: 'usa-2019',
	startDate: new Date('2019-07-25'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-eight/DSC09160.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 36.4240473,
			long: -116.9140437,
			name: 'Death Valley',
			textPosition: 'left'
		},
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
