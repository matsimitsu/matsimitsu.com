export const postData = {
	title: 'Day One',
	subtitle: 'China - Temple of Heaven',
	trip: 'asia-2014',
	startDate: new Date('2014-05-15'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-one/20140515-_DSC0002.jpg',
		width: 2200,
		height: 1461,
		alt: 'Map of Temple of Heaven in Beijing'
	}
};

export function load({ params }) {
    return { postData};
}
