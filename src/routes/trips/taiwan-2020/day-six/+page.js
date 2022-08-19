export const postData = {
	title: 'Day Six',
	subtitle: 'Taroko National Park',
	trip: 'taiwan-2020',
	startDate: new Date('2020-02-27'),
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/day-six/DSC00617.jpg',
		width: '2200',
		height: '1467',
		alt: ''
	},
	locations: [
		{
			lat: 24.2134391,
			long: 121.4903046,
			name: 'Taroko National Park, Xiulin, Taiwan'
		}
	]
};

export function load({ params }) {
    return { postData};
}
