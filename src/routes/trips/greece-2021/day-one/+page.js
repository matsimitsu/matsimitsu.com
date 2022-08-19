export const postData = {
	title: 'Day One',
	subtitle:
		'Exploring Athens around the Acropolis.',
	trip: 'greece-2021',
	startDate: new Date('2021-07-04'),
	endDate: new Date('2021-07-07'),
	image: {
		src: 'https://cdn.matsimitsu.com/greece-2021/day-one/20210704-DSC01361.jpg',
		width: 2200,
		height: 1467,
		alt: 'Acropolis'
	},
	locations: [
		{
			name: 'Athens',
			long: 23.727539,
			lat: 37.98381,
			textPosition: 'left'
		},
		{ name: 'Amsterdam', long: 4.89707, lat: 52.377956, textPosition: 'left' }
	]
};

export function load({ params }) {
    return { postData};
}
