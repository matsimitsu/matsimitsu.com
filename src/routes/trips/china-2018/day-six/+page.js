export const postData = {
	title: 'Day Six',
	subtitle: 'Exploring Shenzhen',
	trip: 'china-2018',
	startDate: new Date('2018-05-06'),
	image: {
		src: 'https://cdn.matsimitsu.com/china-2018/day-six/20180506-00992.jpg',
		width: 6000,
		height: 4000,
		alt: 'Shenzhen view'
	},
	locations: [
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
