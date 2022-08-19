export const postData = {
	title: 'Day Twelve',
	subtitle: 'Tashkent, Uzbekistan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-12'),
	endDate: new Date('2019-04-13'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-twelve/DSC00324.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 41.3147988,
			long: 69.228736,
			name: 'Chorsu Market, Tashkent, Uzbekistan'
		},
		{
			lat: 41.3086062,
			long: 69.2413772,
			name: 'Palace Druzhby Narodov, Tashkent, Uzbekistan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
