export const postData = {
	title: 'Day Eleven',
	subtitle: 'Tashkent, Uzbekistan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-11'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-eleven/DSC00160.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: []
};

export function load({ params }) {
    return { postData};
}
