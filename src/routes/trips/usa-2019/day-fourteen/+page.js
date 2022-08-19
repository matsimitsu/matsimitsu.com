export const postData = {
	title: 'Day fourteen',
	subtitle: 'Los Angeles',
	trip: 'usa-2019',
	startDate: new Date('2019-07-30'),
	endDate: new Date('2019-08-04'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2019/day-fourteen/DSC09792.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 34.134117,
			long: -118.321495,
			name: 'Hollywood'
		},
		{
			lat: 33.9796472,
			long: -118.4685631,
			name: 'Venice Beach',
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
