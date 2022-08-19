export const postData = {
	title: 'Day Fifty Four',
	subtitle: 'Kek Lok Si Temple, George Town, Malaysia',
	trip: 'asia-2022',
	startDate: new Date('2022-06-27'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-55/20220627-05408.jpg',
		width: 4000,
		height: 2667,
		alt: 'Kek Lok Si Temple'
	},
	locations: [
		{
			name: 'George Town',
			long: 100.312386,
			lat: 5.4253,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
