export const postData = {
	title: 'Day Nine - Thirteen',
	subtitle: 'Bangkok, Thailand',
	trip: 'asia-2022',
	startDate: new Date('2022-05-12'),
	endDate: new Date('2022-05-15'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-nine-twelve/20220513-04099.jpg',
		width: 4000,
		height: 2667,
		alt: 'Benchakitti Forest Park'
	},
	locations: [
		{
			name: 'Bangkok',
			long: 100.523186,
			lat: 13.736717,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
