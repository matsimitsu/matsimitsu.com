export const postData = {
	title: 'Day Seven',
	subtitle: 'Japan - Shinjuku',
	trip: 'asia-2014',
	startDate: new Date('2014-05-21'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-seven/20140521-_DSC0374.jpg',
		width: 2200,
		height: 1461,
		alt: 'Restaurant in Shinjuku'
	}
};

export function load({ params }) {
    return { postData};
}
