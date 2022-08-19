export const tripData = {
	title: 'USA 2012',
	subtitle: 'Same trip, different people.',
	trip: 'usa-2012',
	startDate: new Date('2012-06-04'),
	endDate: new Date('2012-06-25'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0506.jpg',
		width: 2200,
		height: 1461,
		alt: 'Big arch at Arches Nat. Park'
	},
	countries: [
		'United States of America'
	]
};

export function load({ params }) {
    return { tripData};
}
