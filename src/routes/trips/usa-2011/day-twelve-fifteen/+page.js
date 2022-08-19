export const postData = {
	title: 'Day twelve - fifteen',
	subtitle: 'Mexican Border and San Diego',
	trip: 'usa-2011',
	startDate: new Date('2011-07-15'),
	endDate: new Date('2011-07-17'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-fourteen-seventeen/20110715-_DSC0682.jpg',
		width: 2200,
		height: 1461,
		alt: 'The Mexican border'
	}
};

export function load({ params }) {
    return { postData};
}
