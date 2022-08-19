export const postData = {
	title: 'Day Fourty Six - Fifty two',
	subtitle: 'Bangkok, Thailand',
	trip: 'asia-2022',
	startDate: new Date('2022-06-20'),
	endDate: new Date('2022-06-25'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/week-7/20220624-05184.jpg',
		width: 4000,
		height: 2667,
		alt: 'Sukhumvit 20'
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
