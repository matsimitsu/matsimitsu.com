export const postData = {
	title: 'Day Nine',
	subtitle: 'Hiking around Taipei',
	trip: 'taiwan-2020',
	startDate: new Date('2020-03-01'),
	endDate: new Date('2020-03-01'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-nine/DSC00939.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 25.0912635,
			long: 121.5690524,
			name: 'Jinmianshan Hiking Trail, Taipei, Taiwan'
		},
		{
			lat: 25.088378023834558,
			long: 121.53781855166739,
			name: 'Laodifang Lookout, Taipei, Taiwan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
