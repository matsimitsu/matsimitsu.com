export const tripData = {
	title: 'Asia 2014',
	subtitle: 'The first trip, of what eventually became many, to Asia.',
	trip: 'asia-2014',
	startDate: new Date('2014-05-15'),
	endDate: new Date('2014-06-05'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0216.jpg',
		width: 2200,
		height: 1461,
		alt: 'View down the Great Wall of China'
	},
	countries: ['China', 'South Korea', 'Japan']
};

export function load({ params }) {
    return { tripData};
}
