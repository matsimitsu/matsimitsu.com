export const postData = {
	title: 'Day Three',
	subtitle: 'Jerash',
	trip: 'jordan-2021',
	startDate: new Date('2021-10-03'),
	image: {
		src: 'https://cdn.matsimitsu.com/jordan-2021/day-three/20211003-02309.jpg',
		width: 4000,
		height: 2667,
		alt: 'Cardo Maximus'
	},
	locations: [
		{
			name: 'Amman',
			long: 35.930359,
			lat: 31.963158
		},
		{ name: 'Jerash', long: 35.8594584, lat: 32.2701121, textPosition: 'left' }
	]
};

export function load({ params }) {
    return { postData};
}
