export const postData = {
	title: 'Day One',
	subtitle: 'Arriving in Hong Kong',
	trip: 'china-2018',
	startDate: new Date('2018-05-01'),
	endDate: new Date('2018-05-02'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-one-two/20180502-00665.jpg',
		width: 4314,
		height: 3693,
		alt: 'Hong Kong apartments'
	},
	locations: [
		{
			lat: 52.377956,
			long: 4.89707,
			name: 'Amsterdam',
			textPosition: 'left'
		},
		{
			lat: 50.110924,
			long: 8.682127,
			name: 'Frankfurt'
		},
		{
			lat: 22.302711,
			long: 114.177216,
			name: 'Hong Kong',
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
