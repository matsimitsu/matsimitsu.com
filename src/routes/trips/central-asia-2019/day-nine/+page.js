export const postData = {
	title: 'Day Nine',
	subtitle: 'Samarkand, Uzbekistan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-09'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-nine/DSC09966.jpg',
		width: '2200',
		height: '1279',
		alt: ''
	},
	locations: [
		{
			lat: 39.6763542,
			long: 66.9940309,
			name: 'Observatory of Ulugbek, Samarkand'
		}
	]
};

export function load({ params }) {
    return { postData};
}
