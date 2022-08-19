export const postData = {
	title: 'The final hike',
	subtitle: 'To mt. Hiwada, mt. Takashi and mt. Monomi',
	trip: 'japan-2018',
	startDate: new Date('2018-11-14'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/the-final-hike/5bebeeca2a86927dd4423317.jpg',
		width: '6000',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 35.8937703,
			long: 139.3048309,
			name: 'Mt. Hiwada',
			textPosition: 'left'
		},
		{
			lat: 35.8970471,
			long: 139.3005243,
			name: 'Mt. Takashi'
		},
		{
			lat: 36.0000322,
			long: 139.3628529,
			name: 'Mt. Monomi'
		},
		{
			lat: 35.652832,
			long: 139.839478,
			name: 'Tokyo'
		}
	]
};

export function load({ params }) {
    return { postData};
}
