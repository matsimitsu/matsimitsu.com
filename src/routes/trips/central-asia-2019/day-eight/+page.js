export const postData = {
	title: 'Day Eight',
	subtitle: 'Bukhara 🚆 Samarkand, Uzbekistan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-08'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-eight/DSC09956.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 39.7745227,
			long: 64.3333084,
			name: 'Chor Bakr, Bukhara',
			textPosition: 'left'
		},
		{
			lat: 39.77472,
			long: 64.42861,
			name: 'Sitori-i-Mokhi Khosa Palace'
		},
		{
			lat: 39.7224691,
			long: 64.5484496,
			name: 'Bukhara 1, Kogon'
		}
	]
};

export function load({ params }) {
    return { postData};
}
