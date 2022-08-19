export const postData = {
	title: 'Netherlands & Germany 2020',
	subtitle:
		'With travel restrictions still in full effect, it was time to think outside of the box. We could still travel to Germany and there happen to be a lot of great themeparks there...',
	trip: 'germany-2020',
	startDate: new Date('2020-10-18'),
	endDate: new Date('2020-10-26'),
	image: {
		src: 'https://cdn.matsimitsu.com/germany-2020/20200918-IMG_20200918_113025.jpg',
		width: 2200,
		height: 1461,
		alt: ''
	},
	locations: [
		{
			name: 'Toverland',
			long: 5.985784531,
			lat: 51.395957947,
			textPosition: 'left'
		},
		{ name: 'Holiday Park', long: 8.2998, lat: 49.318, textPosition: 'left' },
		{ name: 'Europapark', long: 7.722, lat: 48.266 },
		{ name: 'Tripsdrill', long: 9.0526, lat: 49.0353 },
		{ name: 'Phantasialand', long: 6.8813, lat: 50.799 },
		{ name: 'Moviepark', long: 6.9724, lat: 51.6208 }
	]
};

export const tripData = {
	title: 'Germany 2020',
	subtitle:
		'With travel restrictions still in full effect, it was time to think outside of the box. We could still travel to Germany and there happen to be a lot of great themeparks there...',
	trip: 'germany-2020',
	startDate: new Date('2020-10-18'),
	endDate: new Date('2020-10-26'),
	image: {
		src: 'https://cdn.matsimitsu.com/germany-2020/20200918-IMG_20200918_113025.jpg',
		width: 4000,
		height: 3000,
		alt: 'Photo of Fēnix, a roller coaster in the Toverland themepark'
	},
	countries: ['Germany', 'Netherlands']
};

export function load({ params }) {
    return { tripData, postData};
}
