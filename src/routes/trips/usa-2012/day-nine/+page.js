export const postData = {
	title: 'Day Nine',
	subtitle: 'Arches National Park',
	trip: 'usa-2012',
	startDate: new Date('2012-06-13'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2012/day-nine/20120613-_DSC0506.jpg',
		width: 2200,
		height: 1461,
		alt: 'Big arch at Arches Nat. Park'
	}
};

export function load({ params }) {
    return { postData};
}
