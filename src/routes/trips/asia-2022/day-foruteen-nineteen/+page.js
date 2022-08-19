export const postData = {
	title: 'Day Fourteen - Nineteen',
	subtitle: 'Bangkok, Thailand',
	trip: 'asia-2022',
	startDate: new Date('2022-05-16'),
	endDate: new Date('2022-05-21'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-thirteen-sixteen/20220516-04298.jpg',
		width: 3647,
		height: 2037,
		alt: 'Woman at the bus stop'
	},
	locations: [
		{
			name: 'Bangkok',
			long: 100.523186,
			lat: 13.736717,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
