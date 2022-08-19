export const postData = {
	title: 'DisneySea',
	subtitle: 'The happiest place in the world',
	trip: 'japan-2018',
	startDate: new Date('2018-11-13'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/disneysea/5bebed642a86927dd44232d5.jpg',
		width: '5869',
		height: '3913',
		alt: ''
	},
	locations: [
		{
			lat: 35.6267108,
			long: 139.88507789999994,
			name: 'Tokyo DisneySea, Chiba Prefecture, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
