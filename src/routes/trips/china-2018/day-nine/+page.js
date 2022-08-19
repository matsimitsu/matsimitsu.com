export const postData = {
	title: 'Day Nine',
	subtitle: 'Guangzhou to Guilin',
	trip: 'china-2018',
	startDate: new Date('2018-05-09'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-nine/20180509-01286.jpg',
		width: 4000,
		height: 2667,
		alt: 'Guilin Pagodes'
	},
	locations: [
		{
			lat: 25.304142,
			long: 110.273727,
			name: 'Guilin',
			textPosition: 'left'
		},
		{
			lat: 23.116388,
			long: 113.326134,
			name: 'Guangzhou'
		}
	]
};

export function load({ params }) {
    return { postData};
}
