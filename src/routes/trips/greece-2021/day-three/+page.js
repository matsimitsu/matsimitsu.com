export const postData = {
	title: 'Day Three',
	subtitle: 'Walking around Plaka, Psyri and Lycabettus Hill.',
	trip: 'greece-2021',
	startDate: new Date('2021-07-06'),
	endDate: new Date('2021-07-06'),
	image: {
		src: 'https://cdn.matsimitsu.com/greece-2021/day-three/20210706-DSC01972-2.jpg',
		width: 2200,
		height: 1467,
		alt: 'Acropolis by night'
	},
	locations: []
};

export function load({ params }) {
    return { postData};
}
