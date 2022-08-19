export const postData = {
	title: 'Day Seven',
	subtitle: 'Bukhara, Uzbekistan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-07'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-seven/DSC09693.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 39.7676,
			long: 64.42309999999998,
			name: 'Bukhara, Uzbekistan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
