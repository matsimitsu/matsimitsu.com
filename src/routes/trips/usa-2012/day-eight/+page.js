export const postData = {
	title: 'Day eight',
	subtitle: 'Rocky Mountains National Park',
	trip: 'usa-2012',
	startDate: new Date('2012-06-11'),
	endDate: new Date('2012-06-12'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2012/day-eight/20120611-_DSC0335.jpg',
		width: 2200,
		height: 1461,
		alt: 'Yosemite National Park'
	}
};

export function load({ params }) {
    return { postData};
}
