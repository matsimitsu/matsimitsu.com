export const postData = {
	title: 'Day Ten',
	subtitle: 'Guilin',
	trip: 'china-2018',
	startDate: new Date('2018-05-10'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-ten/20180510-01359.jpg',
		width: 4000,
		height: 2667,
		alt: 'Guilin'
	},
	locations: [
		{
			lat: 25.304142,
			long: 110.273727,
			name: 'Guilin',
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
