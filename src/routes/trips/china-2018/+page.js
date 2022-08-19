export const tripData = {
	title: 'China 2018',
	subtitle: 'Land of dragons and emperors.',
	startDate: new Date('2018-05-01'),
	endDate: new Date('2018-05-23'),
	trip: 'china-2018',
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/5af991c02a869202150354d6-2200.jpg',
		width: 2200,
		height: 1467,
		alt: 'Zhangjiajie'
	},
	countries: ['China', 'Hong Kong'],
	locations: [
		{
			lat: 22.542883,
			long: 114.062996,
			name: 'Shenzen',
			textPosition: 'left'
		},
		{
			lat: 23.116388,
			long: 113.326134,
			name: 'Guangzhou'
		},
		{
			lat: 22.302711,
			long: 114.177216,
			name: 'Hong Kong'
		},
		{
			lat: 25.304142,
			long: 110.273727,
			name: 'Guilin'
		},
		{
			lat: 29.117001,
			long: 110.478996,
			name: 'Zhangjiajie'
		},
		{
			lat: 34.341568,
			long: 108.940178,
			name: "Xi'an"
		},
		{
			lat: 34.341568,
			long: 108.940178,
			name: "Xi'an"
		},
		{
			lat: 39.916668,
			long: 116.383331,
			name: "Beijing"
		},
	]
};

export function load({ params }) {
    return { tripData};
}
