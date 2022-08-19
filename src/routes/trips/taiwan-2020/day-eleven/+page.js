export const postData = {
	title: 'Day Eleven',
	subtitle: 'Gardens and hikes',
	trip: 'taiwan-2020',
	startDate: new Date('2020-03-03'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-eleven/DSC01170.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 25.0105828,
			long: 121.4550204,
			name: 'Lin Family Mansion & Garden, Taipei, Taiwan'
		},
		{
			lat: 24.990765806543905,
			long: 121.539804346917,
			name: 'Xianjiyan Trail, Taipei, Taiwan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
