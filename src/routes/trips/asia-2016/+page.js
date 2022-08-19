export const tripData = {
	title: 'Asia 2016',
	subtitle: 'Exploring South East Asia (again).',
	startDate: new Date('2016-05-13'),
	endDate: new Date('2016-06-10'),
	trip: 'asia-2016',
	url: 'https://old.matsimitsu.com/trips/asia-2016',
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2016/59f5d7142a86923bc672d4c2-2200.jpg',
		width: 2200,
		height: 1461,
		alt: 'Waterfall in Vientale, Laos'
	},
	countries: ['Thailand', 'Taiwan', 'Cambodia', 'Laos']
};

export function load({ params }) {
    return { tripData};
}
