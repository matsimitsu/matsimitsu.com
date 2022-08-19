export const postData = {
	title: 'Day Three',
	subtitle: 'Mt. Takao',
	trip: 'japan-2019',
	startDate: new Date('2019-10-21'),
	endDate: new Date('2019-10-21'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2019/day-3/DSC09938.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 35.6252267,
			long: 139.2436878,
			name: 'Mount Takao, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
