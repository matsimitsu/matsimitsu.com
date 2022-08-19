export const postData = {
	title: 'Day six',
	subtitle: 'Bryce Canyon National Park',
	trip: 'usa-2019',
	startDate: new Date('2019-07-23'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-six/DSC00976.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 37.6739587,
			long: -112.1564182,
			name: 'Bryce Canyon'
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
