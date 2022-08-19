export const postData = {
	title: 'Day Six',
	subtitle: 'Wadi Rum',
	trip: 'jordan-2021',
	startDate: new Date('2021-10-06'),
	image: {
		src: 'https://cdn.matsimitsu.com/jordan-2021/day-six/20211006-02919.jpg',
		width: 4000,
		height: 2667,
		alt: 'Wadi Rum'
	},
	locations: [
		{ name: 'Petra', long: 35.4155337, lat: 30.481418 },
		{ name: 'Wadi Rum', long: 35.3214502, lat: 29.505919 }
	]
};

export function load({ params }) {
    return { postData};
}
