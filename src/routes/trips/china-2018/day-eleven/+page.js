export const postData = {
	title: 'Day Eleven',
	subtitle: 'Guilin to Yangshuo',
	trip: 'china-2018',
	startDate: new Date('2018-05-11'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-eleven/20180511-01438-2.jpg',
		width: 4000,
		height: 2667,
		alt: 'Flag on the river around Guilin'
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
