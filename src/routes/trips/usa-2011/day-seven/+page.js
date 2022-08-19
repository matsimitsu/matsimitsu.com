export const postData = {
	title: 'Day seven',
	subtitle: 'Arches and dead horses',
	trip: 'usa-2011',
	startDate: new Date('2011-07-10'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-seven/20110710-_DSC0345.jpg',
		width: 2200,
		height: 1461,
		alt: 'View of arches in Arches Nat. Park'
	}
};

export function load({ params }) {
    return { postData};
}
