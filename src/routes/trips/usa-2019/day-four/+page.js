export const postData = {
	title: 'Day four',
	subtitle: 'Monument Valley',
	trip: 'usa-2019',
	startDate: new Date('2019-07-21'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-four/DSC00672.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 36.9820026,
			long: -110.1108327,
			name: 'Monument Valley, Arizona, USA'
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
