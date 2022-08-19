export const postData = {
	title: 'Day Five',
	subtitle: 'Hong Kong to Shenzhen',
	trip: 'china-2018',
	startDate: new Date('2018-05-05'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-five/20180505-00949.jpg',
		width: 6000,
		height: 4000,
		alt: 'Shenzhen fairground'
	},
	locations: [
		{
			lat: 22.302711,
			long: 114.177216,
			name: 'Hong Kong'
		},
		{
			lat: 22.542883,
			long: 114.062996,
			name: 'Shenzen',
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
