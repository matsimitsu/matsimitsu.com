export const postData = {
	title: 'Day Two',
	subtitle: 'Shinjuku and the Palace',
	trip: 'japan-2019',
	startDate: new Date('2019-10-20'),
	endDate: new Date('2019-10-20'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2019/day-2/DSC09910.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 35.6850716,
			long: 139.7095481,
			name: 'Shinjuku Gyoen National Garden'
		},
		{
			lat: 35.6748417,
			long: 139.6996266,
			name: 'Meiji Jingu Shrine, Tokyo, Japan'
		},
		{
			lat: 35.6838097,
			long: 139.7506583,
			name: 'Imperial Palace, Tokyo, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
