export const postData = {
	title: 'Mt. Mitake',
	subtitle: 'A beautiful hike in fog and rain.',
	trip: 'japan-2018',
	startDate: new Date('2018-11-05'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/mitake/DSC08195.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 35.7828135,
			long: 139.1494853,
			name: 'Mt. Mitake',
			textPosition: 'left'
		},
		{
			lat: 35.652832,
			long: 139.839478,
			name: 'Tokyo'
		}
	]
};

export function load({ params }) {
    return { postData};
}
