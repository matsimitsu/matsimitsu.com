export const postData = {
	title: 'Egypt 2009',
	subtitle: 'Land of Pharaohs and Sphinxes. My first trip outside of continental Europe.',
	trip: 'egypt-2009',
	startDate: new Date('2009-08-22'),
	endDate: new Date('2009-08-29'),
	image: {
		src: 'https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0021.jpg',
		width: 2200,
		height: 1461,
		alt: 'Photo of Egyptian ruins with hieroglyphs in Luxor'
	}
};


export const tripData = {
	title: 'Egypt 2009',
	subtitle: 'Land of Pharaohs and Sphinxes. My first trip outside of continental Europe.',
	trip: 'egypt-2009',
	startDate: new Date('2009-08-22'),
	endDate: new Date('2009-08-29'),
	image: {
		src: 'https://cdn.matsimitsu.com/egypt-2009/20090823-_DSC0021.jpg',
		width: 2200,
		height: 1461,
		alt: 'Photo of Egyptian ruins with hieroglyphs in Luxor'
	},
	countries: [
		'Egypt'
	]
}

export function load({ params }) {
	return { tripData, postData };
}
