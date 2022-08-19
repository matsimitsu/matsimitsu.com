export const postData = {
	title: 'Day Eleven - Twenty',
	subtitle: 'Las Vegas, Death Valley, Highway One, Yosemite and San Francisco',
	trip: 'usa-2012',
	startDate: new Date('2012-06-15'),
	endDate: new Date('2012-06-25'),
	image: {
  "src": "https://cdn.matsimitsu.com/usa-2012/day-eleven-twenty/20120616-_DSC0794.jpg",
  "width": 2200,
  "height": 1461,
  "alt": "Death Valley Nat. Park"
}
};

export function load({ params }) {
    return { postData};
}
