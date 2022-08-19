export const postData = {
	title: 'Aqua Park',
	subtitle: 'Shinagawa',
	trip: 'japan-2018',
	startDate: new Date('2018-11-12'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/aqua-park/5be936aa2a86927dd4423292.jpg',
		width: '6000',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 35.6278294,
			long: 139.73508659999993,
			name: 'Maxell Aqua Park, Tokyo, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
