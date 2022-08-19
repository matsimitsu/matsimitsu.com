export const tripData = {
	title: 'USA 2014',
	subtitle:
		'Still not done with the USA, on this trip I explored the southern states by a roadtrip from Miami, Florida to Houston, Texas.',
	startDate: new Date('2014-10-06'),
	endDate: new Date('2014-10-20'),
	trip: 'usa-2014',
	url: 'https://old.matsimitsu.com/trips/usa-2014',
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2014/59f22ea42a86925838fcb2da-2200.jpg',
		width: 2200,
		height: 1466,
		alt: 'Miami, USA'
	},
	countries: ['United States of America']
};

export function load({ params }) {
    return { tripData};
}
