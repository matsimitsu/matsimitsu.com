export const postData = {
	title: 'Day Three',
	subtitle: 'Ala Archa National Park, Kyrgyzstan',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-03'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-three/DSC09339.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 42.6558635,
			long: 74.4953346,
			name: 'Ala Archa National Park'
		}
	]
};

export function load({ params }) {
    return { postData};
}
