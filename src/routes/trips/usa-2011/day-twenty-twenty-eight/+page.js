export const postData = {
	title: 'Day twenty - twenty-eight',
	subtitle: 'Road to San Francisco',
	trip: 'usa-2011',
	startDate: new Date('2011-07-22'),
	endDate: new Date('2011-08-01'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-twenty-twenty-six/20110725-_DSC1032.jpg',
		width: 2200,
		height: 1461,
		alt: 'San Francisco '
	}
};

export function load({ params }) {
    return { postData};
}
