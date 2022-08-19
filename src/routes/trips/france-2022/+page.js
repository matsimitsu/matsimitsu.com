export const postData = {
	title: 'France 2022',
	subtitle: 'Skiing with friends.',
	trip: 'france-2022',
	startDate: new Date('2022-03-14'),
	endDate: new Date('2022-03-20'),
	image: {
		src: 'https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--18.jpg',
		width: 2048,
		height: 1536,
		alt: 'Chatel ski area'
	},
	locations: [
		{
			name: 'Châtel',
			long: 6.841152,
			lat: 46.267395,
			textPosition: 'left'
		}
	]
};

export const tripData = {
    private: true,
	title: 'France 2022',
	subtitle: 'Skiing with friends.',
	trip: 'france-2022',
	startDate: new Date('2022-03-14'),
	endDate: new Date('2022-03-20'),
	image: {
		src: 'https://cdn.matsimitsu.com/france-2022/processed-lg/20220327--18.jpg',
		width: 2048,
		height: 1536,
		alt: 'Chatel ski area'
	},
	countries: ['France', 'Switzerland']
};

export function load({ params }) {
    return { tripData, postData};
}
