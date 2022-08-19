export const postData = {
	title: 'Day Four',
	subtitle: 'Bishkek, Kyrgyzstan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-04'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-four/DSC09366.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 42.8753145,
			long: 74.6036313,
			name: 'Ala Too Square, Bishkek, Kyrgyzstan'
		},
		{
			lat: 42.8781727,
			long: 74.6070691,
			name: 'Oak Park, Bishkek, Kyrgyzstan'
		},
		{
			lat: 42.8792672,
			long: 74.6161621,
			name: 'Victory Square, Bishkek, Kyrgyzstan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
