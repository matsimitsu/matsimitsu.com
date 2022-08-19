export const postData = {
  title: 'Day three',
  subtitle: 'Hoover Dam and Grand Canyon',
  trip: 'usa-2019',
  startDate: new Date('2019-07-20'),
  image: {
    src: 'https://cdn.matsimitsu.com/usa-2019/day-three/DSC00473.jpg',
    width: "2200",
    height: "1467",
    alt: ''
  },
  locations: [
{
  "lat": 36.015732,
  "long": -114.7371635,
  "name": "Hoover Dam",
  textPosition: "left"
},
{
  "lat": 36.0745219,
  "long": -112.1548851,
  "name": "Grand Canyon, South Rim"
},
]
};

export function load({ params }) {
    return { postData};
}
