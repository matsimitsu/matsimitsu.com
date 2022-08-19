export const postData = {
	title: 'Day Four',
	subtitle: 'kaohsiung',
	trip: 'taiwan-2020',
	startDate: new Date('2020-02-25'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-four/DSC00404.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 22.6204454,
			long: 120.2799183,
			name: 'Pier 2, Kaohsiung, Taiwan'
		},
		{
			lat: 22.6805069,
			long: 120.2923758,
			name: 'Dragon and Tiger Pagodas, Kaohsiung, Taiwan'
		},
		{
			lat: 22.6131619,
			long: 120.2641796,
			name: 'Cihou Fort, Kaohsiung, Taiwan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
