export const tripData = {
	title: 'Japan 2018',
	subtitle:
		'Time to revisit one of my favorite countries. Japan has it all, great public transport, food and scenery. This time I spent two weeks in and around Tokyo.',
	startDate: new Date('2018-11-01'),
	endDate: new Date('2018-11-15'),
	trip: 'japan-2018',
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/5bde7cd72a86927dd442307e-2200.jpg',
		width: 2200,
		height: 1637,
		alt: 'View of bridge near Ueno station in Tokyo, Japan'
	},
	countries: ['Japan'],
};

export function load({ params }) {
    return { tripData};
}
