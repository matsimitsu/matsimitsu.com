export const postData = {
	title: 'Day Eight',
	subtitle: 'SKYTREE, Asakusa, Ueno, Akihabara',
	trip: 'asia-2014',
	startDate: new Date('2014-05-22'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-eight/20140522-_DSC0659.jpg',
		width: 2200,
		height: 1461,
		alt: 'Akihabara'
	}
};

export function load({ params }) {
    return { postData};
}
