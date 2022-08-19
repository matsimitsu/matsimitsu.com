export const postData = {
	title: 'Day one - seven',
	subtitle: 'From New-York to Denver.',
	trip: 'usa-2012',
	startDate: new Date('2012-06-04'),
	endDate: new Date('2012-06-10'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2012/day-one-seven/20120605-IMG_0807.jpg',
		width: 2200,
		height: 1650,
		alt: 'View of central park from Top of the Rock'
	}
};

export function load({ params }) {
    return { postData};
}
