export const postData = {
	title: 'Day Five',
	subtitle: 'Khiva, Uzbekistan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-05'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-five/DSC09488.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 41.3777,
			long: 60.361999999999966,
			name: 'Khiva, Uzbekistan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
