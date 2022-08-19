export const postData = {
	title: 'Day Seven',
	subtitle: 'Teamlab Borderless',
	trip: 'japan-2019',
	startDate: new Date('2019-10-25'),
	endDate: new Date('2019-10-25'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2019/day-7/DSC00188.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 35.6263868,
			long: 139.7831051,
			name: 'Teamlab Borderless, Tokyo, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
