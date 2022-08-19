export const tripData = {
	title: 'Japan 2019',
	subtitle: 'It seems to become a yearly occurrence, this time with the parents :)',
	startDate: new Date('2019-10-18'),
	endDate: new Date('2019-10-26'),
	trip: 'japan-2019',
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2019/DSC00029.jpg',
		width: 2200,
		height: 1467,
		alt: 'View of Japanese temple'
	},
	countries: ['Japan'],
	locations: [
		{
			lat: 52.377956,
			long: 4.89707,
			name: 'Amsterdam'
		},
		{
			lat: 60.192059,
			long: 24.945831,
			name: 'Helsinki'
		},
		{
			lat: 35.652832,
			long: 139.839478,
			name: 'Tokyo',
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { tripData};
}
