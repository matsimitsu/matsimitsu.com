export const postData = {
	title: 'Day Two',
	subtitle: 'Tainan: Dutch forts.',
	trip: 'taiwan-2020',
	startDate: new Date('2020-02-23'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-two/DSC00315.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 23.0016115,
			long: 120.1605683,
			name: 'Fort Zeelandia, Tainan'
		},
		{
			lat: 22.9968886,
			long: 120.2021274,
			name: 'Chihkan Tower, Tainan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
