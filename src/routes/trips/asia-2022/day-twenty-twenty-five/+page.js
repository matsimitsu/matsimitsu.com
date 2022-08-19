export const postData = {
	title: 'Day Twenty - Twenty-five',
	subtitle: 'Chiang Mai, Thailand',
	trip: 'asia-2022',
	startDate: new Date('2022-05-22'),
	endDate: new Date('2022-05-29'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-seventeen-twenty-four/20220528-04735.jpg',
		width: 4000,
		height: 2667,
		alt: 'Chiang Mai viewpoint'
	},
	locations: [
		{
			name: 'Chiang Mai',
			long: 98.979263,
			lat: 18.796143,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
