export const postData = {
	title: 'Day Thirteen',
	subtitle: 'Guilin to Zhangjiajie',
	trip: 'china-2018',
	startDate: new Date('2018-05-13'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-thirteen/20180513-06723.jpg',
		width: 4000,
		height: 2667,
		alt: 'Train to Zhangjiajie'
	},
	locations: [
		{
			lat: 25.304142,
			long: 110.273727,
			name: 'Guilin'
		},
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
