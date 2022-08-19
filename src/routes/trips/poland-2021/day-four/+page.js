export const postData = {
	title: 'Day four',
	subtitle: 'Auschwitz-Birkenau',
	trip: 'poland-2021',
	startDate: new Date('2021-08-26'),
	image: {
		src: 'https://cdn.matsimitsu.com/poland-2021/20210826-DSC01393.jpg',
		width: 2200,
		height: 1467,
		alt: 'Auschwitz-Birkenau'
	},
	locations: [
		{ name: 'Auschwitz-Birkenau', long: 19.1997942, lat: 50.027414, textPosition: 'left' },
		{ name: 'Katowice', long: 18.9739533, lat: 50.2718201 }
	]
};

export function load({ params }) {
    return { postData};
}
