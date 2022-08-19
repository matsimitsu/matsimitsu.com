export const postData = {
	title: 'Day One',
	subtitle: 'Exploring Tokyo on a Jet-lag',
	trip: 'japan-2019',
	startDate: new Date('2019-10-19'),
	endDate: new Date('2019-10-19'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2019/day-1/DSC09851.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 35.7053631,
			long: 139.7491111,
			name: 'Koishikawa Korakuen Gardens'
		},
		{
			lat: 35.7138053,
			long: 139.7958914,
			name: 'Senso-ji, Tokyo, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
