export const postData = {
	title: 'Day Three',
	subtitle: 'China - Summer Palace & The Forbidden City',
	trip: 'asia-2014',
	startDate: new Date('2014-05-17'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-three/20140517-_DSC0400.jpg',
		width: 2200,
		height: 1461,
		alt: 'Entrance of the Forbidden City in Beijing'
	}
};

export function load({ params }) {
    return { postData};
}
