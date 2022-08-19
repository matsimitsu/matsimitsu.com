export const postData = {
	title: 'Day five',
	subtitle: 'Arches National Park',
	trip: 'usa-2019',
	startDate: new Date('2019-07-22'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-five/DSC00837.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 38.6112027,
			long: -109.607657,
			name: 'Arches National Park'
		},
		{
			lat: 36.1672559,
			long: -115.1485163,
			name: 'Las Vegas'
		}
	]
};

export function load({ params }) {
    return { postData};
}
