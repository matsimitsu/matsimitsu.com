export const postData = {
	title: 'Day Seven & Eight',
	subtitle: 'Guangzhou',
	trip: 'china-2018',
	startDate: new Date('2018-05-07'),
	endDate: new Date('2018-05-08'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-seven/20180508-01214.jpg',
		width: 4000,
		height: 2667,
		alt: 'Guangzhou tower'
	},
	locations: [
		{
			lat: 22.542883,
			long: 114.062996,
			name: 'Shenzen'
		},
		{
			lat: 23.116388,
			long: 113.326134,
			name: 'Guangzhou',
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
