export const postData = {
	title: 'Day Three',
	subtitle: 'Alishan',
	trip: 'taiwan-2020',
	startDate: new Date('2020-02-24'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-three/DSC00391.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 23.4679502,
			long: 120.7325197,
			name: 'Alishan, Chiayi, Taiwan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
