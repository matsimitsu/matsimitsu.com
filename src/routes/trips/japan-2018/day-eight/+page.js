export const postData = {
	title: 'Mt. Nokogiri',
	subtitle: 'Saw Tooth Mountain',
	trip: 'japan-2018',
	startDate: new Date('2018-11-08'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/mt-nokogiriyama/5be43af92a86927dd44231c4.jpg',
		width: '6000',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 35.1622268,
			long: 139.82329030000005,
			name: 'Mt. Nokogiri'
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
