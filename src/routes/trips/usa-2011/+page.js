export const tripData = {
	title: 'USA 2011',
	subtitle: 'Land of the free.',
	trip: 'usa-2011',
	startDate: new Date('2011-07-04'),
	endDate: new Date('2011-08-02'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110718-_DSC0835-Pano.jpg',
		width: 2200,
		height: 1424,
		alt: 'View of Yosemite National Park'
	},
	countries: [
		'United States of America'
	]
};

export function load({ params }) {
    return { tripData};
}
