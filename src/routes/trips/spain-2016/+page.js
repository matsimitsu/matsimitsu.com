export const postData = {
	title: 'Spain 2016',
	subtitle: 'A relaxing week in southern Spain with friends.',
	trip: 'spain-2016',
	startDate: new Date('2016-09-16'),
	endDate: new Date('2016-09-24'),
	image: {
		src: 'https://cdn.matsimitsu.com/spain-2016/20160923-0916.jpg',
		width: 4000,
		height: 2657,
		alt: 'Fishing'
	},
	locations: [
		{
			name: 'Tarifa',
			long: -5.60445,
			lat: 36.014321,
			textPosition: 'left'
		},
		{ name: 'Gibraltar', long: -5.35257, lat: 36.14474 }
	]
};

export const tripData = {
	title: 'Spain 2016',
	subtitle: 'A relaxing week in southern Spain with friends.',
	trip: 'spain-2016',
	startDate: new Date('2016-09-16'),
	endDate: new Date('2016-09-24'),
	image: {
		src: 'https://cdn.matsimitsu.com/spain-2016/20160923-0916.jpg',
		width: 4000,
		height: 2657,
		alt: 'Fishing'
	},
	countries: ['Spain']
};

export function load({ params }) {
    return { tripData, postData };
}
