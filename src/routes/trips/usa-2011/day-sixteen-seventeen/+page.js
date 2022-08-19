export const postData = {
	title: 'Day sixteen - seventeen',
	subtitle: 'Yosemite National Park',
	trip: 'usa-2011',
	startDate: new Date('2011-07-18'),
	endDate: new Date('2011-07-19'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-sixteen-seventeen/20110718-_DSC0835-Pano.jpg',
		width: 2200,
		height: 1424,
		alt: 'View of Yosemite National Park'
	}
};

export function load({ params }) {
    return { postData};
}
