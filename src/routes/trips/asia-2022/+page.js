export const tripData = {
	title: 'Asia 2022',
	subtitle: 'Singapore, Thailand and Malaysia',
	trip: 'asia-2022',
	startDate: new Date('2022-05-02'),
	endDate: new Date('2022-07-04'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-one/20220504-03371.jpg',
		width: 4000,
		height: 2667,
		alt: 'Tree forest, Gardens by the bay'
	},
	countries: ['Singapore', 'Thailand', 'Malaysia'],
	locations: [
		{
			name: 'Singapore',
			long: 103.851959,
			lat: 1.29027,
		},
		{
			name: 'Bangkok',
			long: 100.523186,
			lat: 13.736717,
			textPosition: 'left'
		},
		{
			name: 'Chiang Mai',
			long: 98.979263,
			lat: 18.796143,
			textPosition: 'left'
		},
		{
			name: 'George Town',
			long: 100.312386,
			lat: 5.425300,
			textPosition: 'left'
		},
		{
			name: 'Kuala Lumpur',
			long: 101.693207,
			lat: 3.140853,
			textPosition: 'left'
		},
	]
};

export function load({ params }) {
    return { tripData};
}
