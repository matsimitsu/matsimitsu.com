export const postData = {
	title: 'Day Five',
	subtitle: 'Kamakura and Enoshima Island',
	trip: 'japan-2019',
	startDate: new Date('2019-10-23'),
	endDate: new Date('2019-10-23'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2019/day-5/DSC00029.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 35.3002889,
			long: 139.4811577,
			name: 'Enoshima, Fujisawa, Japan'
		},
		{
			lat: 35.3168356,
			long: 139.5359759,
			name: 'Kōtoku-in, Kamakura, Japan'
		},
		{
			lat: 35.3251844,
			long: 139.5561792,
			name: 'Tsurugaoka Hachimangü Shrine'
		}
	]
};

export function load({ params }) {
    return { postData};
}
