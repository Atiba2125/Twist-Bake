const a = (f) => `/assets/${f}`;

export const BRAND = {
  name: 'Twist & Bake',
  tagline: 'Hungarian chimney cones & cakes',
  phone: '07555 202500',
  tel: 'tel:+447555202500',
  address: ['642A Bristol Road, Selly Oak', 'Birmingham B29 6BJ'],
  map: 'https://www.google.com/maps/search/?api=1&query=Twist+%26+Bake+642A+Bristol+Rd+Birmingham+B29+6BJ',
  mapEmbed: 'https://www.google.com/maps?q=Twist+%26+Bake+642A+Bristol+Rd+Birmingham+B29+6BJ&output=embed',
  instagram: 'https://www.instagram.com/twist_bake/',
};

export const NAV = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'Our Story' },
  { to: '/visit', label: 'Visit Us' },
];

export const MARQUEE = ['Kürtőskalács', 'Chimney Cake Ice Cream', 'Pistachio', 'Oreo', 'Chocolate Churros', 'Cinnamon Sugar', 'Avocado Toast', 'Fresh & Warm'];

export const STATS = [
  { end: 4.8, dec: 1, label: 'Google rating' },
  { end: 240, label: 'Google reviews' },
  { end: 1.7, dec: 1, suffix: 'K+', label: 'Instagram followers' },
  { prefix: '£', text: '1–10', label: 'Per person' },
];

export const REVIEWS = [
  { text: 'Both were absolutely delicious, and the soft-serve ice cream was so tasty too!', who: 'Google review' },
  { text: 'Very friendly service and offered a choice of range of toppings to the children.', who: 'Google review' },
  { text: 'The food was really good, and I enjoyed the variety on the menu.', who: 'Google review' },
];

export const REEL_COLS = [
  [a('oreo-ice-cream.jpg'), a('sugar-cake.jpg'), a('halloween.jpg'), a('handling.jpg')],
  [a('pistachio-cake.jpg'), a('baked-rows.jpg'), a('choc-pour.jpg'), a('dough-spit.jpg')],
];

export const STEPS = [
  { n: '01', title: 'Twisted', text: 'Soft, sweet dough is stretched into a ribbon and wound around a wooden spit.', img: a('dough-spit.jpg') },
  { n: '02', title: 'Baked golden', text: 'The spits turn and bake until the dough puffs up golden — and the whole shop smells of fresh cinnamon.', img: a('baked-rows.jpg') },
  { n: '03', title: 'Rolled in sugar', text: 'Each cake comes off the spit hot, then gets rolled in sugar and cinnamon for a crisp, caramelised crust.', img: a('sugar-cake.jpg') },
  { n: '04', title: 'Filled & topped', text: 'Fill it with chocolate or soft-serve ice cream and pick from a range of toppings. Pistachio and Oreo are favourites.', img: a('choc-pour.jpg') },
];

export const MENU = [
  {
    id: 'classic', title: 'Chimney Cakes', blurb: 'Kürtőskalács — baked fresh, warm and golden.',
    items: [
      { id: 'classic', name: 'Classic Kürtőskalács', tag: 'Popular', img: a('sugar-cake.jpg'), desc: 'Our signature Hungarian chimney cake, baked fresh and rolled in sugar and cinnamon.' },
      { id: 'filled', name: 'Filled Chimney Cake', img: a('choc-pour.jpg'), desc: 'Fill your warm chimney cake with chocolate and choose from a range of toppings.' },
      { id: 'seasonal', name: 'Seasonal Chimney Cake', img: a('halloween.jpg'), desc: 'Festive designs for Halloween, Christmas and more — decorated by hand.' },
    ],
  },
  {
    id: 'icecream', title: 'Chimney Cake Ice Cream', blurb: 'Soft-serve ice cream in a warm chimney cake cone.',
    items: [
      { id: 'pistachio', name: 'Pistachio Chimney Cake Ice Cream', tag: 'New addition', img: a('pistachio-cake.jpg'), desc: 'Creamy pistachio ice cream with crushed pistachios in a warm chimney cake cone.' },
      { id: 'oreo', name: 'Oreo Chimney Cake Ice Cream', img: a('oreo-ice-cream.jpg'), desc: 'Soft-serve topped with Oreo crumb and a drizzle of sauce.' },
      { id: 'softserve', name: 'Soft-serve Ice Cream', desc: 'Creamy soft-serve ice cream served in a cone or cup, with toppings to choose from.' },
    ],
  },
  {
    id: 'extras', title: 'Sweet & Savoury Extras', blurb: 'More to share — or keep for yourself.',
    items: [
      { id: 'churros', name: 'Chocolate Churros', desc: 'Warm, crisp churros served with rich chocolate.' },
      { id: 'avocado', name: 'Avocado Toast', desc: 'A fresh, savoury option from our menu.' },
    ],
  },
];

export const MENU_NOTE = 'These are menu highlights. Prices (typically £1–10 per person) and availability can change — ask in store or call 07555 202500.';

const ALL = MENU.flatMap((c) => c.items);
export const itemById = (id) => ALL.find((i) => i.id === id);
export const FEATURED = ['classic', 'pistachio', 'oreo', 'filled', 'churros', 'avocado'].map(itemById);

export const VALUES = [
  { title: 'Baked fresh', text: 'Chimney cakes are made fresh and served warm, so every bite is soft inside and crisp outside.' },
  { title: 'Hungarian tradition', text: 'Kürtőskalács is a celebrated Hungarian speciality — we bring a little bit of Budapest to Birmingham.' },
  { title: 'Toppings for everyone', text: 'Choose from a range of toppings. Kids and grown-ups alike get a warm welcome and friendly service.' },
  { title: 'Twist on tradition', text: 'Pistachio, Oreo, chocolate and seasonal designs give the classic chimney cake a modern twist.' },
];
