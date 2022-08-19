export const postData = {
	title: 'Nighttime Ginza',
	subtitle: "Shopping for new pants and taking photo's in the rain",
	trip: 'japan-2018',
	startDate: new Date('2018-11-04'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/nighttime-ginza/5bdee1b82a86927dd44230c2.jpg',
		width: '6000',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 35.6721142,
			long: 139.77082530000007,
			name: 'Ginza, Chūō, Tokyo, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
