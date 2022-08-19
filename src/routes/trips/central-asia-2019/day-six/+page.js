export const postData = {
	title: 'Day Six',
	subtitle: 'Khiva 🚆 Bukhara, Uzbekistan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-06'),
	endDate: new Date('2019-04-06'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-six/DSC09643.jpg',
		width: '2200',
		height: '1482',
		alt: ''
	},
	locations: [
		{
			lat: 39.7676,
			long: 64.42309999999998,
			name: 'Bukhara'
		},
		{
			lat: 41.3777,
			long: 60.361999999999966,
			name: 'Khivan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
