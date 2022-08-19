export const postData = {
	title: 'Day Fourteen',
	subtitle: 'Zhangjiajie',
	trip: 'china-2018',
	startDate: new Date('2018-05-14'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-fourteen/20180514-06942.jpg',
		width: 4000,
		height: 2667,
		alt: 'Zhangjiajie'
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
