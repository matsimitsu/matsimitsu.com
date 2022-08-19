export const postData = {
	title: 'Day Nine',
	subtitle: 'Shinjuku - Ginza - Tsukiji Fish market - Meiji Jingu - Shibuya - Omotesando',
	trip: 'asia-2014',
	startDate: new Date('2014-05-23'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-nine/20140523-_DSC0692.jpg',
		width: 2200,
		height: 1461,
		alt: 'Shinjuku station'
	}
};

export function load({ params }) {
    return { postData};
}
