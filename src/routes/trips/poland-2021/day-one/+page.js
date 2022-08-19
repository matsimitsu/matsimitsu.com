export const postData = {
	title: 'Day one-three',
	subtitle: 'Visiting Energylandia in Poland',
	trip: 'poland-2021',
	startDate: new Date('2021-08-23'),
	endDate: new Date('2021-08-25'),
	image: {
		src: 'https://cdn.matsimitsu.com/poland-2021/20210824-085716691.jpg',
		width: 2200,
		height: 1650,
		alt: 'Zadra'
	},
	locations: [
		{ name: 'Energylandia', long: 19.4084671, lat: 49.9974214 },
		{ name: 'Auschwitz-Birkenau', long: 19.1997942, lat: 50.027414, textPosition: 'left' },
		{ name: 'Legendia', long: 18.9739533, lat: 50.2718201, textPosition: 'left' },
		{ name: 'Katowice', long: 18.9739533, lat: 50.2718201 }
	]
};

export function load({ params }) {
    return { postData};
}
