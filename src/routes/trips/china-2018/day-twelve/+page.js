export const postData = {
	title: 'Day Twelve',
	subtitle: 'Cycling around Yangshuo',
	trip: 'china-2018',
	startDate: new Date('2018-05-12'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-twelve/20180512-06689.jpg',
		width: 4000,
		height: 2667,
		alt: 'Valley near Yangshuo'
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
