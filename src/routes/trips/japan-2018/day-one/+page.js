export const postData = {
	title: 'AMS ✈️ NRT',
	subtitle: 'Flying from Amsterdam to Tokyo',
	trip: 'japan-2018',
	startDate: new Date('2018-10-31'),
	endDate: new Date('2018-11-01'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2018/ams-nrt/5bdcf8cf2a86927dd4423009.jpg',
		width: '4369',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 52.377956,
			long: 4.89707,
			name: 'Amsterdam'
		},
		{
			lat: 60.192059,
			long: 24.945831,
			name: 'Helsinki'
		},
		{
			lat: 35.652832,
			long: 139.839478,
			name: 'Tokyo',
			textPosition: 'left'
		}
	]
};

export function load({ params }) {
    return { postData};
}
