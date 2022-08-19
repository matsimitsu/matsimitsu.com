export const postData = {
	title: 'Day five-six',
	subtitle: 'Legendia in Katowice',
	trip: 'poland-2021',
	startDate: new Date('2021-08-27'),
	endDate: new Date('2021-08-28'),
	image: {
		src: 'https://cdn.matsimitsu.com/poland-2021/20210827-082407512.jpg',
		width: 2200,
		height: 1650,
		alt: 'Ferris wheel Legendia'
	},
	locations: [{ name: 'Katowice', long: 18.9739533, lat: 50.2718201 }]
};

export function load({ params }) {
    return { postData};
}
