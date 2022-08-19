export const postData = {
	title: 'Saturday in Tokyo',
	subtitle: 'Koishikawa Botanical Garden - Ueno station area',
	trip: 'japan-2018',
	startDate: new Date('2018-11-03'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/saturday-in-tokyo/5bde7d142a86927dd4423087.jpg',
		width: '4868',
		height: '3622',
		alt: ''
	},
	locations: [
		{
			lat: 35.719029,
			long: 139.74559049999993,
			name: 'Koishikawa Botanical Garden'
		},
		{
			lat: 35.7117877,
			long: 139.7760958,
			name: 'Ueno Station'
		}
	]
};

export function load({ params }) {
    return { postData};
}
