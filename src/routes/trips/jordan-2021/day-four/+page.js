export const postData = {
	title: 'Day Four',
	subtitle: 'Kings Highway',
	trip: 'jordan-2021',
	startDate: new Date('2021-10-04'),
	image: {
		src: 'https://cdn.matsimitsu.com/jordan-2021/day-four/20211004-02496.jpg',
		width: 4000,
		height: 2667,
		alt: 'Jordan Sunset'
	},
	locations: [
		{
			name: 'Amman',
			long: 35.930359,
			lat: 31.963158
		},
		{ name: 'Petra', long: 35.4155337, lat: 30.481418 }
	]
};

export function load({ params }) {
    return { postData};
}
