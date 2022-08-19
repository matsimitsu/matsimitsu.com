export const postData = {
	title: 'Day Two',
	subtitle: 'China - The Great Wall of China & Emperors Tomb',
	trip: 'asia-2014',
	startDate: new Date('2014-05-16'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-two/20140516-_DSC0216.jpg',
		width: 2200,
		height: 1461,
		alt: 'View down the Great Wall of China'
	}
};

export function load({ params }) {
    return { postData};
}
