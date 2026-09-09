/**
 * Central content and data for the Singra website.
 *
 * All website content is kept here so that components
 * do not need to contain hardcoded site data.
 *
 * Later, this data layer can be connected to Firebase
 * without changing the overall component structure.
 */

/* ============================================================
   NAVIGATION
============================================================ */

export type NavLink = {
  label: string
  href: string
  /** Hash target used only for homepage section indicators */
  section?: string
  highlight?: boolean
}

export const NAV_LINKS: NavLink[] = [
  {
    label: 'Home',
    href: '/',
    section: 'top',
  },
  {
    label: 'About',
    href: '/#about',
    section: 'about',
  },
  {
    label: 'Places',
    href: '/places',
    section: 'places',
  },
  {
    label: 'Food',
    href: '/food',
    section: 'food',
  },
  {
    label: 'Gallery',
    href: '/gallery',
    section: 'gallery',
  },
  {
    label: 'Emergency',
    href: '/emergency',
    section: 'emergency',
  },
  {
    label: 'Blood',
    href: '/blood',
    section: 'blood',
    highlight: true,
  },
]

/* ============================================================
   LOCATION
============================================================ */

export const LOCATION = {
  upazila: 'Singra',
  district: 'Natore',
  division: 'Rajshahi',
  country: 'Bangladesh',
}

/* ============================================================
   HERO
============================================================ */

export const HERO = {
  eyebrow: 'Discover Singra',
  title: 'SINGRA',
  location: 'Natore, Bangladesh',
  tagline: 'Where Nature Meets Heritage.',
  mapLocation: 'Singra, Natore, Bangladesh',
  image: '/images/hero.png',
  imageAlt:
    "Aerial view of Singra's rivers, wetlands and green fields at sunrise",
}

/* ============================================================
   UNION PARISHADS
============================================================ */

export type Union = {
  number: string
  name: string
}

export const UNIONS: Union[] = [
  {
    number: '01',
    name: 'Sukash Union',
  },
  {
    number: '02',
    name: 'Dahia Union',
  },
  {
    number: '03',
    name: 'Italy Union',
  },
  {
    number: '04',
    name: 'Kalam Union',
  },
  {
    number: '05',
    name: 'Chamari Union',
  },
  {
    number: '06',
    name: 'Hatiandaha Union',
  },
  {
    number: '07',
    name: 'Lalore Union',
  },
  {
    number: '08',
    name: 'Sherkole Union',
  },
  {
    number: '09',
    name: 'Tajpur Union',
  },
  {
    number: '10',
    name: 'Chaugram Union',
  },
  {
    number: '11',
    name: 'Chhatardighi Union',
  },
  {
    number: '12',
    name: 'Ramananda Khajura Union',
  },
]

/* ============================================================
   ADMINISTRATIVE STATISTICS
============================================================ */

export const ADMIN_STATS = [
  {
    label: 'Population',
    value: '381,316',
    hint: 'Population of Singra Upazila',
  },
  {
    label: 'Area',
    value: '528.47 km²',
    hint: 'Total geographical area',
  },
  {
    label: 'Households',
    value: '100,939',
    hint: 'Total households',
  },
  {
    label: 'Literacy Rate',
    value: '66.95%',
    hint: 'Literacy rate for population aged 7+',
  },
  {
    label: 'Union Parishads',
    value: String(UNIONS.length),
    hint: 'Union Parishads under Singra Upazila',
  },
  {
    label: 'Municipality',
    value: '01',
    hint: 'Singra Municipality',
  },
]

/* ============================================================
   WHY VISIT
============================================================ */

export const WHY_VISIT = [
  {
    index: '01',
    title: 'Natural Beauty',
    description:
      'Rivers, wetlands, open fields and quiet rural landscapes.',
    image: '/images/why-nature.png',
  },
  {
    index: '02',
    title: 'History & Heritage',
    description:
      'Historical sites, architecture and layered local history.',
    image: '/images/why-heritage.png',
  },
  {
    index: '03',
    title: 'Local Food',
    description:
      'Traditional dishes and a warm culinary culture.',
    image: '/images/why-food.png',
  },
  {
    index: '04',
    title: 'Culture & People',
    description:
      'Traditions, crafts, lifestyle and welcoming people.',
    image: '/images/why-culture.png',
  },
]

/* ============================================================
   PLACES
============================================================ */

export type Place = {
  name: string
  category: string
  description: string
  image: string
  featured?: boolean
}

export const PLACES: Place[] = [
  {
    name: 'Wetland Landscapes',
    category: 'Nature',
    description:
      'Expansive seasonal wetlands and calm waters that define the region around Singra.',
    image: '/images/place-featured.png',
    featured: true,
  },
  {
    name: 'Riverside Villages',
    category: 'Rural Life',
    description:
      'Quiet settlements along the water, framed by palms and paddy.',
    image: '/images/place-2.png',
  },
  {
    name: 'Green Paddy Fields',
    category: 'Landscape',
    description:
      'Vivid fields stretching to the horizon under a monsoon sky.',
    image: '/images/place-3.png',
  },
  {
    name: 'Local Markets',
    category: 'Community',
    description:
      'Colourful bazaars where daily life and produce come together.',
    image: '/images/place-4.png',
  },
]

/* ============================================================
   FOOD
============================================================ */

export type Food = {
  name: string
  label: string
  description: string
  image: string
}

export const FOODS: Food[] = [
  {
    name: 'Rui Maachh',
    label: 'Traditional',
    description:
      'Freshwater fish prepared in a rich, home-style curry.',
    image: '/images/food-1.png',
  },
  {
    name: 'Kacchi & Rice',
    label: 'Festive',
    description:
      'Fragrant slow-cooked rice served on special occasions.',
    image: '/images/food-2.png',
  },
  {
    name: 'Pitha',
    label: 'Local',
    description:
      'Seasonal rice cakes enjoyed across rural Bangladesh.',
    image: '/images/food-3.png',
  },
  {
    name: 'Mishti',
    label: 'Sweet',
    description:
      'Classic milk-based sweets from the Bengal tradition.',
    image: '/images/food-4.png',
  },
]

/* ============================================================
   GALLERY
============================================================ */

export type GalleryItem = {
  src: string
  alt: string
  span: 'tall' | 'wide' | 'normal'
}

export const GALLERY: GalleryItem[] = [
  {
    src: '/images/gallery-1.png',
    alt: 'Boat crossing calm water at sunrise',
    span: 'tall',
  },
  {
    src: '/images/gallery-4.png',
    alt: 'Farmer planting seedlings in a paddy field',
    span: 'wide',
  },
  {
    src: '/images/gallery-3.png',
    alt: 'Portrait of an elderly farmer smiling',
    span: 'normal',
  },
  {
    src: '/images/gallery-6.png',
    alt: 'Vendors at a rural produce market',
    span: 'normal',
  },
  {
    src: '/images/gallery-8.png',
    alt: 'Aerial view of a village among fields and river',
    span: 'wide',
  },
  {
    src: '/images/gallery-5.png',
    alt: 'Wooden fishing boats moored at dusk',
    span: 'tall',
  },
  {
    src: '/images/gallery-7.png',
    alt: 'Children playing in a field at golden hour',
    span: 'normal',
  },
  {
    src: '/images/gallery-2.png',
    alt: 'Misty river landscape at dawn',
    span: 'normal',
  },
]

/* ============================================================
   EMERGENCY SERVICES
============================================================ */

export type EmergencyService = {
  name: string
  description: string
  phone: string
  location: string
  icon: 'hospital' | 'police' | 'fire' | 'office'
}

export const EMERGENCY_SERVICES: EmergencyService[] = [
  {
    name: 'Hospital',
    description:
      'Healthcare and medical assistance in Singra.',
    phone: '',
    location: 'Singra, Natore',
    icon: 'hospital',
  },
  {
    name: 'Police',
    description:
      'Police and emergency assistance.',
    phone: '999',
    location: 'Singra, Natore',
    icon: 'police',
  },
  {
    name: 'Fire Service',
    description:
      'Fire and rescue services.',
    phone: '',
    location: 'Singra, Natore',
    icon: 'fire',
  },
  {
    name: 'Important Offices',
    description:
      'Key government and public offices in Singra.',
    phone: '',
    location: 'Upazila Complex, Singra',
    icon: 'office',
  },
]

/* ============================================================
   BLOOD
============================================================ */

export const BLOOD_GROUPS = [
  'A+',
  'A-',
  'B+',
  'B-',
  'AB+',
  'AB-',
  'O+',
  'O-',
] as const

export const AREAS = [
  'Singra Municipality',
  ...UNIONS.map((union) => union.name),
]

/* ============================================================
   SAMPLE BLOOD DONORS
============================================================ */

export type BloodDonor = {
  name: string
  group: string
  area: string
  lastDonation: string
}

export const SAMPLE_DONORS: BloodDonor[] = [
  {
    name: 'Donor A',
    group: 'O+',
    area: 'Singra Municipality',
    lastDonation: '3 months ago',
  },
  {
    name: 'Donor B',
    group: 'B+',
    area: 'Sukash Union',
    lastDonation: '5 months ago',
  },
  {
    name: 'Donor C',
    group: 'A+',
    area: 'Singra Municipality',
    lastDonation: '2 months ago',
  },
  {
    name: 'Donor D',
    group: 'AB+',
    area: 'Italy Union',
    lastDonation: '4 months ago',
  },
  {
    name: 'Donor E',
    group: 'O-',
    area: 'Dahia Union',
    lastDonation: '6 months ago',
  },
  {
    name: 'Donor F',
    group: 'B+',
    area: 'Singra Municipality',
    lastDonation: '1 month ago',
  },
]

/* ============================================================
   CONTACT
============================================================ */

export const CONTACT = {
  phone: '01788445516',
  email: 'amarsingrabd@gmail.com',
  address: 'Singra, Natore, Rajshahi, Bangladesh',
}