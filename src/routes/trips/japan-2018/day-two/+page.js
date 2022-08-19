export const postData = {
	title: 'Wandering around Tokyo',
	subtitle: 'Along the Yamanote Line',
	trip: 'japan-2018',
	startDate: new Date('2018-11-02'),
	image: {
		src:
			'https://cdn.matsimitsu.com/japan-2018/wandering-around-tokyo/5bdd3c962a86927dd442300d.jpg',
		width: '6000',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 35.6810912,
			long: 139.7671861,
			name: 'Tokyo Station, Tōkyō, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
