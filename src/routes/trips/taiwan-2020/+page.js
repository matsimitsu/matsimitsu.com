export const tripData = {
	title: 'Taiwan 2020',
	subtitle: 'Lets see how this goes...',
	startDate: new Date('2020-02-20'),
	endDate: new Date('2020-03-04'),
	trip: 'taiwan-2020',
	image: {
		src: 'https://cdn.matsimitsu.com/taiwan-2020/DSC01170.jpg',
		width: 2200,
		height: 1467,
		alt: 'View of Taipei 101 from the surrounding mountains'
	},
	countries: ['Taiwan'],
	locations: [
		{ name: 'Taichung', long: 120.673645, lat: 24.147736, textPosition: 'left' },
		{ name: 'Tainan', long: 120.184982, lat: 22.9912348, textPosition: 'left' },
		{ name: 'Alishan', long: 120.80452, lat: 23.510183, textPosition: 'left' },
		{ name: 'Kaohsiung', long: 120.26667, lat: 22.633333, textPosition: 'left' },
		{ name: 'Taroko Gorge', long: 121.494884, lat: 24.182384 },
		{ name: 'Taipei', long: 121.597366, lat: 25.105497, textPosition: 'left' }
	]
};

export function load({ params }) {
    return { tripData};
}
