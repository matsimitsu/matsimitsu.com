export const postData = {
	title: 'Day Two',
	subtitle: 'MacRitchie Reservoir, Singapore',
	trip: 'asia-2022',
	startDate: new Date('2022-05-05'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2022/day-two/20220505-03518-2.jpg',
		width: 2928,
		height: 2346,
		alt: 'Oriental Whip Snake'
	},
	locations: [
		{
			name: 'Singapore',
			long: 103.851959,
			lat: 1.29027,
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
