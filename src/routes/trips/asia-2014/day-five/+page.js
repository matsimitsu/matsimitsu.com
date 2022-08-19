export const postData = {
	title: 'Day Five',
	subtitle: 'South Korea - Gyeongbokgung Palace, The War Memorial and Banpo Bridge',
	trip: 'asia-2014',
	startDate: new Date('2014-05-19'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-five/20140519-_DSC0207.jpg',
		width: 2200,
		height: 1461,
		alt: 'Banpo bridge'
	}
};

export function load({ params }) {
    return { postData};
}
