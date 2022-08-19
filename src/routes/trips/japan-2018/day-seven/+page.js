export const postData = {
  title: 'teamLab Borderless',
  subtitle: 'A day of rain and a day of ... something',
  trip: 'japan-2018',
  startDate: new Date('2018-11-07'),
  image: {
    src: 'https://cdn.matsimitsu.com/japan-2018/teamlab-borderless/5be2b5df2a86927dd4423160.jpg',
    width: "6000",
    height: "4000",
    alt: ''
  },
  locations: [
{
  "lat": 35.6247918,
  "long": 139.77670999999998,
  "name": "Teamlab Borderless, Odaiba, Japan"
}
]
};

export function load({ params }) {
    return { postData};
}
