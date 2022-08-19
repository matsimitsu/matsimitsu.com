export const postData = {
	title: 'Institute for Nature Study',
	subtitle: 'A rainy day',
	trip: 'japan-2018',
	startDate: new Date('2018-11-09'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/infs/5be6a9f32a86927dd44231e9.jpg',
		width: '6000',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 35.636007,
			long: 139.721312,
			name: 'Institute for Nature Study'
		}
	]
};

export function load({ params }) {
    return { postData};
}
