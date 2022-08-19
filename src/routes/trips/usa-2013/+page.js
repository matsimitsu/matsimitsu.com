export const postData = {
	title: 'USA 2013',
	subtitle: 'A company road-trip along both coasts of the USA.',
	trip: 'usa-2013',
	startDate: new Date('2013-04-14'),
	endDate: new Date('2013-05-02'),
	image: {
		src: 'https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0021.jpg',
		width: 2200,
		height: 1461,
		alt: 'Photo of Egyptian ruins with hieroglyphs in Luxor'
	}
};

export const tripData = {
	title: 'USA 2013',
	subtitle: 'A company road-trip along both coasts of the USA.',
	trip: 'usa-2013',
	startDate: new Date('2013-04-14'),
	endDate: new Date('2013-05-02'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2013/_DSC0338.jpg',
		width: 4288,
		height: 2848,
		alt: 'View of Golden Gate Bridge from Alcatraz'
	},
	countries: ['United States of America']
};

export function load({ params }) {
	return { tripData, postData };
}
