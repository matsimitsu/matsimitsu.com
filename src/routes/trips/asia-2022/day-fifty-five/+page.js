export const postData = {
	title: 'Day Fifty Five',
	subtitle: 'Fort Cornwallis, New Jetty, George Town, Malaysia',
	trip: 'asia-2022',
	startDate: new Date('2022-06-28'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-56/20220628-05490.jpg',
		width: 4000,
		height: 2667,
		alt: 'Fort Cornwallis gun'
	},
	locations: [
		{
			name: 'George Town',
			long: 100.312386,
			lat: 5.4253,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
