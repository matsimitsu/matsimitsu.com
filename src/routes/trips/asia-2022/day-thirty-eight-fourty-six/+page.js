export const postData = {
	title: 'Day Thirty Eight - Fourty Six',
	subtitle: 'Chiang Mai, Thailand',
	trip: 'asia-2022',
	startDate: new Date('2022-06-11'),
	endDate: new Date('2022-06-19'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/week-6/20220618-05088.jpg',
		width: 4000,
		height: 3108,
		alt: 'Chiang May shopkeeper'
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
