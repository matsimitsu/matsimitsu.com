export const postData = {
	title: 'Day Six',
	subtitle: 'South Korea - North Korea (Panmunjeom) & N Seoul Tower',
	trip: 'asia-2014',
	startDate: new Date('2014-05-20'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-six/20140520-IMG_3743.jpg',
		width: 2200,
		height: 1650,
		alt: 'Guards at the border between North and South Korea at the Joint Security Area'
	}
};

export function load({ params }) {
    return { postData};
}
