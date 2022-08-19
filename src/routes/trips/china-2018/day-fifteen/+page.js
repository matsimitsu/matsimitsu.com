export const postData = {
	title: 'Day Fifteen',
	subtitle: 'Tianmen mountain',
	trip: 'china-2018',
	startDate: new Date('2018-05-15'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-fifteen/20180515-07045.jpg',
		width: 4000,
		height: 2667,
		alt: 'Tianmen mountain'
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
