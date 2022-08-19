export const postData = {
	title: 'Day Sixteen',
	subtitle: 'Golden Whip Stream',
	trip: 'china-2018',
	startDate: new Date('2018-05-16'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-sixteen/20180516-072191.jpg',
		width: 4000,
		height: 2667,
		alt: 'Golden Whip Stream, Zhangjiajie'
	},
	locations: [
		{
			lat: 29.117001,
			long: 110.478996,
			name: 'Zhangjiajie'
		}
	]
};

export function load({ params }) {
    return { postData};
}
