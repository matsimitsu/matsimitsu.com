export const postData = {
  title: 'Day Ten',
  subtitle: 'Rainy Jiufen',
  trip: 'taiwan-2020',
  startDate: new Date('2020-03-02'),
  endDate: new Date('2020-03-02'),
  image: {
    src: 'https://cdn.matsimitsu.com/taiwan-2020/day-ten/DSC00993.jpg',
    width: "2200",
    height: "1467",
    alt: ''
  },
  locations: [
{
  "lat": 25.1087252,
  "long": 121.8435732,
  "name": "Jiufen Old Street, Jiufen, Taiwan"
}
]
};

export function load({ params }) {
    return { postData};
}
