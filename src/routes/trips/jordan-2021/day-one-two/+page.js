export const postData = {
	title: 'Day One & Two',
	subtitle: 'Traveling to Amman',
	trip: 'jordan-2021',
	startDate: new Date('2021-10-01'),
	endDate: new Date('2021-10-02'),
	image: {
		src: 'https://cdn.matsimitsu.com/jordan-2021/day-one/20211002-02168.jpg',
		width: 2000,
		height: 1333,
		alt: 'Citadel Amman'
	},
	locations: [
		{
			name: 'Amman',
			long: 35.930359,
			lat: 31.963158
		},
		{ name: 'Jerash', long: 35.8594584, lat: 32.2701121, textPosition: 'left' },
		{ name: 'Dead Sea', long: 35.5669042, lat: 31.4553619, textPosition: 'left' },
		{ name: 'Petra', long: 35.4155337, lat: 30.481418 },
		{ name: 'Wadi Rum', long: 35.3214502, lat: 29.505919 }
	]
};

export function load({ params }) {
    return { postData};
}
