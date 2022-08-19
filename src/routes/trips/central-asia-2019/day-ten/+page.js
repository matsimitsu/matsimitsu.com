export const postData = {
	title: 'Day Ten',
	subtitle: 'Samarkand, Uzbekistan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-10'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-ten/DSC00027.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 39.6608116,
			long: 66.9765965,
			name: 'Bibi-Khanym Mosque, Samarkand, Uzbekistan'
		},
		{
			lat: 39.6570452,
			long: 66.9710819,
			name: 'Registan, Samarkand, Uzbekistan'
		},
		{
			lat: 39.6473209,
			long: 66.9616439,
			name: 'Gur-e Amir Сomplex, Samarkand, Uzbekistan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
