export const tripData = {
	title: 'Poland 2021',
	subtitle: 'Visiting Energylandia in Poland',
	trip: 'poland-2021',
	startDate: new Date('2021-08-23'),
	endDate: new Date('2021-08-28'),
	image: {
		src: 'https://cdn.matsimitsu.com/poland-2021/20210824-085716691.jpg',
		width: 2200,
		height: 1650,
		alt: 'Zadra'
	},
	countries: ['Poland']
};

export function load({ params }) {
    return { tripData};
}
