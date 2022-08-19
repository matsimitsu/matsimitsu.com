export const postData = {
	title: 'Day eight',
	subtitle: 'Bryce Canyon and Zion National Park',
	trip: 'usa-2011',
	startDate: new Date('2011-07-11'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-eight/20110711-_DSC0527.jpg',
		width: 2200,
		height: 1461,
		alt: 'Far view of Bryce Canyon National Park'
	}
};

export function load({ params }) {
    return { postData};
}
