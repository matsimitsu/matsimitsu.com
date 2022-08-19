export const postData = {
	title: 'Day Fifty Six - Fifty Nine',
	subtitle: 'Kuala Lumpur, Malaysia',
	trip: 'asia-2022',
	startDate: new Date('2022-06-29'),
	endDate: new Date('2022-06-01'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-57/20220630-05569.jpg',
		width: 4000,
		height: 2667,
		alt: 'Kuala Lumpur'
	},
	locations: [
		{
			name: 'Kuala Lumpur',
			long: 101.693207,
			lat: 3.140853,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
