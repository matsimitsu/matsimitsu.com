export const postData = {
	title: 'Day Twenty Eight - Thirty Seven',
	subtitle: 'Chiang Mai, Thailand',
	trip: 'asia-2022',
	startDate: new Date('2022-06-01'),
	endDate: new Date('2022-06-10'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/week-5/20220605-04937.jpg',
		width: 4000,
		height: 2667,
		alt: 'Temple'
	},
	locations: [
		{
			name: 'Chiang Mai',
			long: 98.979263,
			lat: 18.796143,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
