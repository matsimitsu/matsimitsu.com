export const postData = {
	title: 'Day Two',
	subtitle: 'The Acropolis.',
	trip: 'greece-2021',
	startDate: new Date('2021-07-05'),
	endDate: new Date('2021-07-05'),
	image: {
		src: 'https://cdn.matsimitsu.com/greece-2021/day-two/20210705-DSC01852.jpg',
		width: 2200,
		height: 1467,
		alt: 'Parthenon at the Acropolis'
	},
	locations: []
};

export function load({ params }) {
    return { postData};
}
