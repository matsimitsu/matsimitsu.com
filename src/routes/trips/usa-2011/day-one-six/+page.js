export const postData = {
	title: 'Day one-six',
	subtitle: 'From New-York/Allentown to The Rocky Mountains.',
	trip: 'usa-2011',
	startDate: new Date('2011-07-04'),
	endDate: new Date('2011-07-09'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-one-six/20110709-_DSC0155.jpg',
		width: 2200,
		height: 1461,
		alt: 'View of valley in Rocky Mountains Nat. Park.'
	}
};

export function load({ params }) {
    return { postData};
}
