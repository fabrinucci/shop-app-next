
export default function handler(req, res) {
  res.status(200).json([
  {
    id: 0,
    title: 'Invertocat 2.0 Beanie',
    price: 22,
    image: 'http://localhost:3000/img/beanie.webp',
    description: "Keep your head warm and the code flowing with the updated Invertocat 2.0 Beanie in three new colors and an all new puff printed tag. Wear it cuffed or uncuffed, these medium-weight waffle knits are double-layered yet breathable to protect those octocat ears in any weather."
  },
  {
    id: 1,
    title: 'Invertocat Pullover',
    price: 60,
    image: 'http://localhost:3000/img/pullover.webp',
    description: "Sometimes coding requires working in cold environments. It's often hard to find objects which will help combat that pesky chill. Sure, you could wear fingerless gloves or a sweatervest, but why settle for garments that make you look like you can't afford fingers or sleeves. If only someone would create a body covering with a \"hood\" type of device to cover your head."
  },
  {
    id: 2,
    title: 'Invertocat 3.0 Mug',
    price: 20,
    image: 'http://localhost:3000/img/mug.webp',
    description: "It's time to deprecate your old mug and update to the all new Invertocat 3.0 Mug. Continuously deliver all the coffee, tea, and hot cocoa you need to ship that next release. Holds 16oz and comes in all black or black and white with a laser-etched Invertocat."
  },
  {
    id: 3,
    title: 'Invertocat Canteen',
    price: 50,
    image: 'http://localhost:3000/img/canteen.webp',
    description: "Handles don't just set you apart - they make our new matte black CORKCICLE canteen as functional as it is sleek. With a mouth wide enough for ice cubes, a straw cap, and easy-grip flat sides, this 20oz canteen will keep your liquids icy, your code flowing, and never slip out of your tentacles."
  },
  {
    id: 4,
    title: 'Invertocat 2.0 Coasters',
    price: 30,
    image: 'http://localhost:3000/img/coasters.webp',
    description: "Give your desk nothing but the best and upgrade your coaster game with these all new environmentally-friendly bamboo Invertocat 2.0 Coasters. Includes four laser-etched coasters with coaster stand."
  },
  {
    id: 5,
    title: 'Invertocat 2.0 Shirt',
    price: 35,
    image: 'http://localhost:3000/img/shirt.webp',
    description: "Invertocat is in stealth mode and is ready for primetime, now with a stylish, more visible front logo. Everything else is the same as the last edition but using a  Next Level tri-blend shirt. Still stylish as hell, and still SOFTER THAN ISH. Best to buy three, because your friends will steal this right off your back. And it's still not summer yet, so you might get cold. Unless you live in the Southern hemisphere, in which case I salute you, upside down person."
  },
])
}
