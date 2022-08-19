export const postData = {
	title: 'Day Ten',
	subtitle: 'Bryce Canyon National Park',
	trip: 'usa-2012',
	startDate: new Date('2012-06-14'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2012/day-ten/20120614-_DSC0635.jpg',
		width: 2200,
		height: 1461,
		alt: 'Bryce Canyon Nat. Park'
	}
};

export function load({ params }) {
    return { postData};
}
