export const postData = {
	title: 'Day Four',
	subtitle: 'South Korea - Gwangjang market, Cheonggyecheon and Dongdaemun Design Plaza',
	trip: 'asia-2014',
	startDate: new Date('2014-05-18'),
	image: {
		src: 'https://cdn.matsimitsu.com/asia-2014/day-four/20140518-_DSC0648.jpg',
		width: 2200,
		height: 1461,
		alt: 'Seoul skyline at night'
	}
};

export function load({ params }) {
    return { postData};
}
