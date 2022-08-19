export const postData = {
	title: 'Day Eight',
	subtitle: 'Exploring to Taipei',
	trip: 'taiwan-2020',
	startDate: new Date('2020-02-29'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-seven-eight/DSC00817.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 25.0643611,
			long: 121.533468,
			name: 'Zhongshan District, Taipei, Taiwan'
		},
		{
			lat: 25.0346329,
			long: 121.5218208,
			name: 'National Chiang Kai-shek Memorial Hall, Taipei, Taiwan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
