export const postData = {
	title: 'Day Six',
	subtitle: 'The two towers',
	trip: 'japan-2019',
	startDate: new Date('2019-10-24'),
	endDate: new Date('2019-10-24'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2019/day-6/DSC00151.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 35.7100542,
			long: 139.8107141,
			name: 'SKYTREE, Tokyo, Japan'
		},
		{
			lat: 35.7199731,
			long: 139.7606625,
			name: 'Nezu Shrine, Tokyo, Japan'
		},
		{
			lat: 35.71881,
			long: 139.744732,
			name: 'Bunkyo, Tokyo, Japan'
		},
		{
			lat: 35.6585865,
			long: 139.7454401,
			name: 'Tokyo Tower, Tokyo, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
