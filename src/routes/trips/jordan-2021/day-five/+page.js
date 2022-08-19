export const postData = {
	title: 'Day Five',
	subtitle: 'Petra',
	trip: 'jordan-2021',
	startDate: new Date('2021-10-05'),
	image: {
		src: 'https://cdn.matsimitsu.com/jordan-2021/day-five/20211005-02791.jpg',
		width: 4000,
		height: 2667,
		alt: 'Petra'
	},
	locations: [{ name: 'Petra', long: 35.4155337, lat: 30.481418 }]
};

export function load({ params }) {
    return { postData};
}
