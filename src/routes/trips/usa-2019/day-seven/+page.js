export const postData = {
	title: 'Day seven',
	subtitle: 'Zion National Park',
	trip: 'usa-2019',
	startDate: new Date('2019-07-24'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-seven/DSC01052.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 37.2008326,
			long: -112.9867955,
			name: 'Zion National Park'
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
