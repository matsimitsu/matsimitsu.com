export const postData = {
	title: 'Day nine - eleven',
	subtitle: 'Death Valley',
	trip: 'usa-2011',
	startDate: new Date('2011-07-12'),
	endDate: new Date('2011-07-14'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-ten-thirteen/20110713-_DSC0645.jpg',
		width: 2200,
		height: 1461,
		alt: 'View of sand dunes at Death Valley National Park'
	}
};

export function load({ params }) {
    return { postData};
}
