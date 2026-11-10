export const CONTACT = {
  phoneDisplay: '+227 86 16 48 26',
  phone: '+22786164826',
  whatsapp:
    'https://wa.me/22786164826?text=' +
    encodeURIComponent('Bonjour ! Je souhaite passer une commande de mignardises salées 😋'),
  snapchat: 'https://www.snapchat.com/add/amitidjani',
  snapHandle: '@amitidjani',
  place: 'Pharmacie Bobiel',
  city: 'Niamey',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Pharmacie Bobiel Niamey'),
}

export const SEO = {
  name: 'Les Mignardises Salées',
  title: 'Les Mignardises Salées · Traiteur et mignardises salées à Niamey',
  description:
    'Traiteur fait maison à Niamey : batbouts, samossas, mini burgers, tacos, lasagnes. Box dès 5 000 FCFA, plateaux de fête. Commande 24h à l’avance.',
  country: 'NE',
  region: 'Niamey',
  cuisine: ['Mignardises salées', 'Snacks', 'Fast-food', 'Traiteur', 'Cuisine maison'],
  priceRange: '1 200 – 9 000 FCFA',
}

export const FAQ = [
  [
    'Où commander des mignardises salées à Niamey ?',
    'Chez Les Mignardises Salées, par WhatsApp, par téléphone ou sur Snapchat (@amitidjani). Les commandes se récupèrent près de la Pharmacie Bobiel, à Niamey.',
  ],
  [
    'Combien de temps à l’avance faut-il commander ?',
    'Tout est préparé à la commande : pensez à commander 24h à l’avance pour que vos mignardises soient prêtes à l’heure.',
  ],
  [
    'Quels sont les prix ?',
    'Les mignardises démarrent à 1 200 FCFA les 5 pièces (nems). La Mini box est à 5 000 FCFA, la Big box à 9 000 FCFA, et les lasagnes ou le pasticcio à 3 000 FCFA.',
  ],
  [
    'Préparez-vous des plateaux pour les fêtes et les événements ?',
    'Oui : baptêmes, anniversaires, réunions de famille ou de bureau. Envoyez le nombre d’invités et la date sur WhatsApp pour recevoir un devis.',
  ],
  [
    'Qu’y a-t-il au menu ?',
    'Batbouts, samossas, mini burgers, nems, mini tacos, mini pizzas, tacos (viande hachée, poulet ou mixte), lasagnes et pasticcio, à la pièce, en box ou en plateau.',
  ],
]

export const media = (id) => ({
  src: `/media/${id}.mp4`,
  poster: `/media/${id}.jpg`,
})

export const HERO_VIDEOS = ['7ce0ddf745', 'cdecb4ac27', '720b6f7784']

export const SHOWCASE = [
  { id: '8b8dd6f319', label: 'Box pizzas & mini burgers' },
  { id: '409ac47123', label: 'Tacos grillés, sauce maison' },
  { id: '89ba99c2e4', label: 'Plateau burgers & bouchées' },
  { id: 'cdecb4ac27', label: 'Mini pizzas & mini burgers' },
  { id: 'abca05e0c0', label: 'Box gourmande' },
  { id: 'a076d7f233', label: 'Plateau de mini burgers' },
  { id: '7ce0ddf745', label: 'Mini burgers dorés' },
  { id: '2fc5612064', label: 'Bouchées & sauces' },
  { id: 'f95b31af2b', label: 'Box sandwichs grillés' },
  { id: '9150e82e62', label: 'Mini pains farcis' },
  { id: '1dcacce6b5', label: 'Fournée de mini burgers' },
  { id: '0c60b70b23', label: 'Samoussas & mini pizzas' },
]

export const GRATINS = [
  { id: '720b6f7784', label: 'Lasagnes' },
  { id: 'fd7b51f1c3', label: 'Pasticcio' },
  { id: 'fefc2c6e71', label: 'Lasagnes' },
  { id: '998f61a511', label: 'Pasticcio' },
  { id: '7bf81f85fc', label: 'Barquettes individuelles' },
  { id: '5ea6048a6e', label: 'Lasagnes' },
  { id: 'bd09b52e7d', label: 'Pasticcio' },
  { id: '53e48f5bb4', label: 'Barquettes individuelles' },
]

export const EVENTS = [
  '9a80b59323',
  '313126cb4c',
  '2a1a62c20b',
  '92fa96e0b6',
  '4f1842dcf0',
  'd3389f8cec',
  '3151dc93ce',
  '47f369d626',
  '194aeeac8c',
  '210a1eca3c',
  'b73f5bca93',
  '2f01c7bcc8',
]

export const MENU = [
  { n: '01', name: 'Batbout', note: 'Petits pains moelleux garnis', prices: [['5 pièces', '2 000'], ['10 pièces', '4 000']] },
  { n: '02', name: 'Samossa', note: 'Triangles croustillants', prices: [['5 pièces', '1 700'], ['10 pièces', '3 500']] },
  { n: '03', name: 'Mini Burger', note: 'Brioches dorées au sésame', prices: [['5 pièces', '2 500'], ['10 pièces', '5 000']] },
  { n: '04', name: 'Nems', note: 'Roulés dorés, sauce à part', prices: [['5 pièces', '1 200'], ['10 pièces', '2 500']] },
  { n: '05', name: 'Mini Tacos', note: 'Galettes roulées et grillées', prices: [['5 pièces', '2 500'], ['10 pièces', '4 500']] },
  { n: '06', name: 'Mini Pizza', note: 'Fromage fondant', prices: [['5 pièces', '1 700'], ['10 pièces', '3 500']] },
  {
    n: '07',
    name: 'Tacos',
    note: 'Format généreux',
    prices: [['Viande hachée', '2 500'], ['Poulet', '3 000'], ['Mixte', '4 500']],
  },
]

export const BOXES = [
  {
    name: 'Big box',
    price: '9 000',
    tag: 'À partager',
    items: ['4 pizzas', '4 burgers', '4 batbouts', '4 tacos', '4 samboussas'],
    video: '8b8dd6f319',
  },
  {
    name: 'Mini box',
    price: '5 000',
    tag: 'Le bon plan',
    items: ['2 pizzas', '2 burgers', '2 batbouts', '2 tacos', '2 samboussas'],
    video: '409ac47123',
  },
]

export const PRODUCTS = ['Batbout', 'Samossa', 'Mini burger', 'Nems', 'Mini tacos', 'Mini pizza', 'Tacos', 'Lasagnes', 'Pasticcio']

export const REVIEWS = [
  {
    quote:
      'Les pasticcios mashallah, c’est autre chose vraiment et c’est succulent wallah 😁. J’ai aimé les deux mais encore plus les pasticcios 🔥',
    author: 'Une cliente',
    about: 'Lasagnes & Pasticcio',
  },
  {
    quote: 'Qu’Allah bénisse encore plus ton mouvement 🙏❤️',
    author: 'Une fidèle',
    about: 'Message reçu sur Snapchat',
  }
]
