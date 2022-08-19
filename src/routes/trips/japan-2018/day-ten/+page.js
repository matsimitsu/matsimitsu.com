export const postData = {
	title: 'Showa Kinen Park',
	subtitle: 'On a sunny Saturday afternoon',
	trip: 'japan-2018',
	startDate: new Date('2018-11-10'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/showa-kinen-park/5be6af562a86927dd442325f.jpg',
		width: '6000',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 35.7033599,
			long: 139.4078879,
			name: 'Showa Kinen Park, Tachikawa, Japan'
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
