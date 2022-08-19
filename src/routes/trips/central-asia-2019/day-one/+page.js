export const postData = {
	title: 'Day One',
	subtitle: 'Flying from Amsterdam to <s>Bishkek</s> Istanbul',
	trip: 'central-asia-2019',
	startDate: new Date('2019-04-01'),
	image: {
		src: 'https://cdn.matsimitsu.com/central-asia-2019/day-one/day-one2.jpg',
		width: '3806',
		height: '2855',
		alt: ''
	},
	locations: [
		{ lat: 41.015137, long: 28.97953, name: 'Istanbul' },
		{ lat: 52.377956, long: 4.89707, name: 'Amsterdam' },
		{ lat: 42.882004, long: 74.582748, name: 'Bishkek', textPosition: 'left' }
	]
};

export function load({ params }) {
    return { postData};
}
