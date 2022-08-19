export const tripData = {
	title: 'Jordan 2021',
	subtitle: 'Travel is finally opening up again, time to visit some world wonders in Jordan.',
	trip: 'jordan-2021',
	startDate: new Date('2021-10-01'),
	endDate: new Date('2021-10-07'),
	image: {
		src: 'https://cdn.matsimitsu.com/jordan-2021/day-five/20211005-02791.jpg',
		width: 4000,
		height: 2667,
		alt: 'Petra'
	},
	locations: [
		{
			name: 'Amman',
			long: 35.930359,
			lat: 31.963158
		},
		{ name: 'Jerash', long: 35.8594584, lat: 32.2701121, textPosition: 'left' },
		{ name: 'Petra', long: 35.4155337, lat: 30.481418 },
		{ name: 'Wadi Rum', long: 35.3214502, lat: 29.505919 }
	],
	countries: ['Jordan']
};

export function load({ params }) {
    return { tripData};
}
