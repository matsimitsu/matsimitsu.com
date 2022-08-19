export const postData = {
	title: 'Day eigteen - nineteen',
	subtitle: 'Crater Lake',
	trip: 'usa-2011',
	startDate: new Date('2011-07-20'),
	endDate: new Date('2011-07-21'),
	image: {
		src: 'https://cdn.matsimitsu.com/usa-2011/day-eighteen-nineteen/20110720-_DSC0924.jpg',
		width: 2200,
		height: 1461,
		alt: 'Crater lake'
	}
};

export function load({ params }) {
    return { postData};
}
