export const postData = {
	title: 'Day One',
	subtitle: 'Taichung: Temples and colored walls.',
	trip: 'taiwan-2020',
	startDate: new Date('2020-02-21'),
	endDate: new Date('2020-02-22'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-one/DSC00276.jpg',
		width: '6000',
		height: '4000',
		alt: ''
	},
	locations: [
		{
			lat: 24.153274,
			long: 120.689117,
			name: 'Confucius Temple, Taichung, Taiwan'
		},
		{
			lat: 24.1338692,
			long: 120.6113446,
			name: 'Rainbow Village, Taichung, Taiwan'
		},
		{
			lat: 24.13768,
			long: 120.63903,
			name: 'Wan He Temple, Taichung, Taiwan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
