export const postData = {
	title: 'Day Four',
	subtitle: 'Yokohama Chinatown',
	trip: 'japan-2019',
	startDate: new Date('2019-10-22'),
	endDate: new Date('2019-10-22'),
	image: {
		src: 'https://cdn.matsimitsu.com/japan-2019/day-4/DSC00022.jpg',
		width: '2200',
		height: '1213',
		alt: ''
	},
	locations: [
		{
			lat: 35.45847,
			long: 139.631829,
			name: 'Minatomirai, Yokohama, Japan'
		},
		{
			lat: 35.4426638,
			long: 139.6451907,
			name: 'Chinatown, Yokohama, Japan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
