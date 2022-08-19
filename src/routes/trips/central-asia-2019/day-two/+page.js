export const postData = {
	title: 'Day Two',
	subtitle: 'Exploring Istanbul',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-02'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-two/DSC09180.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 41.0052619,
			long: 28.9768725,
			name: 'The Blue Mosque, Istanbul, Turkey'
		},
		{
			lat: 41.0084023,
			long: 28.9779225,
			name: 'Basilica Cistern, Istanbul, Turkey'
		},
		{
			lat: 41.025563,
			long: 28.974286,
			name: 'Galata Tower, Istanbul, Turkey'
		},
		{
			lat: 41.0109187,
			long: 28.9681731,
			name: 'Grand Bazaar, Istanbul, Turkey'
		}
	]
};

export function load({ params }) {
    return { postData};
}
