export const postData = {
	title: 'Day Seven',
	subtitle: 'Traveling to Taipei',
	trip: 'taiwan-2020',
	startDate: new Date('2020-02-28'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-seven-eight/DSC00743.jpg',
		width: '2200',
		height: '1449',
		alt: ''
	},
	locations: [
		{
			lat: 25.0456393,
			long: 121.5118928,
			name: 'Camera Street, Taipei, Taiwan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
