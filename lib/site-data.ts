/**
 * Central, editable content for the Singra website.
 *
 * IMPORTANT: Administrative statistics, contact numbers, addresses, union
 * names and other official figures below are EDITABLE PLACEHOLDERS. Replace
 * them with verified official data from Singra Upazila / Natore authorities
 * before publishing. Nothing here should be treated as confirmed fact.
 */

export type NavLink = {
  label: string
  href: string
  /** hash target used only on the homepage */
  section?: string
  highlight?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/', section: 'top' },
  { label: 'About', href: '/#about', section: 'about' },
  { label: 'Places', href: '/places' },
  { label: 'Food', href: '/food' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Emergency', href: '/emergency' },
  { label: 'Blood', href: '/blood', highlight: true },
]

export const LOCATION = {
  upazila: 'Singra',
  district: 'Natore',
  division: 'Rajshahi',
  country: 'Bangladesh',
}

/** EDITABLE PLACEHOLDERS — replace with official figures. */
export const ADMIN_STATS = [
  { label: 'Population', value: '—', hint: 'Total population of Singra Upazila' },
  { label: 'Municipality', value: '01', hint: 'Singra Municipality' },
  { label: 'Unions', value: '—', hint: 'Union Parishads' },
  { label: 'Area', value: '— km²', hint: 'Total geographical area' },
  { label: 'Villages', value: '—', hint: 'Total villages' },
  { label: 'Mouzas', value: '—', hint: 'Total mouzas' },
]

/** EDITABLE PLACEHOLDERS — add verified Union Parishad names. */
export const UNIONS: { name: string; note?: string }[] = [
  { name: 'Union 01', note: 'Union Parishad — details to be added' },
  { name: 'Union 02', note: 'Union Parishad — details to be added' },
  { name: 'Union 03', note: 'Union Parishad — details to be added' },
  { name: 'Union 04', note: 'Union Parishad — details to be added' },
  { name: 'Union 05', note: 'Union Parishad — details to be added' },
  { name: 'Union 06', note: 'Union Parishad — details to be added' },
]

export const WHY_VISIT = [
  {
    index: '01',
    title: 'Natural Beauty',
    description: 'Rivers, wetlands, open fields and quiet rural landscapes.',
    image: '/images/why-nature.png',
  },
  {
    index: '02',
    title: 'History & Heritage',
    description: 'Historical sites, architecture and layered local history.',
    image: '/images/why-heritage.png',
  },
  {
    index: '03',
    title: 'Local Food',
    description: 'Traditional dishes and a warm culinary culture.',
    image: '/images/why-food.png',
  },
  {
    index: '04',
    title: 'Culture & People',
    description: 'Traditions, crafts, lifestyle and welcoming people.',
    image: '/images/why-culture.png',
  },
]

export type Place = {
  name: string
  category: string
  description: string
  image: string
  featured?: boolean
}

/** EDITABLE PLACEHOLDERS — replace with verified attractions. */
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
    description: 'Quiet settlements along the water, framed by palms and paddy.',
    image: '/images/place-2.png',
  },
  {
    name: 'Green Paddy Fields',
    category: 'Landscape',
    description: 'Vivid fields stretching to the horizon under a monsoon sky.',
    image: '/images/place-3.png',
  },
  {
    name: 'Local Markets',
    category: 'Community',
    description: 'Colourful bazaars where daily life and produce come together.',
    image: '/images/place-4.png',
  },
]

export type Food = {
  name: string
  label: string
  description: string
  image: string
}

/** EDITABLE PLACEHOLDERS — regional Bangladeshi dishes, not claimed as Singra-specific. */
export const FOODS: Food[] = [
  {
    name: 'Rui Maachh',
    label: 'Traditional',
    description: 'Freshwater fish prepared in a rich, home-style curry.',
    image: '/images/food-1.png',
  },
  {
    name: 'Kacchi & Rice',
    label: 'Festive',
    description: 'Fragrant slow-cooked rice served on special occasions.',
    image: '/images/food-2.png',
  },
  {
    name: 'Pitha',
    label: 'Local',
    description: 'Seasonal rice cakes enjoyed across rural Bangladesh.',
    image: '/images/food-3.png',
  },
  {
    name: 'Mishti',
    label: 'Sweet',
    description: 'Classic milk-based sweets from the Bengal tradition.',
    image: '/images/food-4.png',
  },
]

export const GALLERY = [
  { src: '/images/gallery-1.png', alt: 'Boat crossing calm water at sunrise', span: 'tall' },
  { src: '/images/gallery-4.png', alt: 'Farmer planting seedlings in a paddy field', span: 'wide' },
  { src: '/images/gallery-3.png', alt: 'Portrait of an elderly farmer smiling', span: 'normal' },
  { src: '/images/gallery-6.png', alt: 'Vendors at a rural produce market', span: 'normal' },
  { src: '/images/gallery-8.png', alt: 'Aerial view of a village among fields and river', span: 'wide' },
  { src: '/images/gallery-5.png', alt: 'Wooden fishing boats moored at dusk', span: 'tall' },
  { src: '/images/gallery-7.png', alt: 'Children playing in a field at golden hour', span: 'normal' },
  { src: '/images/gallery-2.png', alt: 'Misty river landscape at dawn', span: 'normal' },
]

export type EmergencyService = {
  name: string
  description: string
  /** EDITABLE PLACEHOLDER — insert verified number, or leave empty. */
  phone: string
  /** EDITABLE PLACEHOLDER — insert verified address/location. */
  location: string
  icon: 'hospital' | 'police' | 'fire' | 'office'
}

export const EMERGENCY_SERVICES: EmergencyService[] = [
  {
    name: 'Hospital',
    description: 'Healthcare and medical assistance in Singra.',
    phone: '',
    location: 'Singra, Natore',
    icon: 'hospital',
  },
  {
    name: 'Police',
    description: 'Police and emergency assistance.',
    phone: '999',
    location: 'Singra, Natore',
    icon: 'police',
  },
  {
    name: 'Fire Service',
    description: 'Fire and rescue services.',
    phone: '',
    location: 'Singra, Natore',
    icon: 'fire',
  },
  {
    name: 'Important Offices',
    description: 'Key government and public offices in Singra.',
    phone: '',
    location: 'Upazila Complex, Singra',
    icon: 'office',
  },
]

export const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as const

/** EDITABLE PLACEHOLDER — sample areas; replace with verified union/area list. */
export const AREAS = [
  'Singra Municipality',
  'Union 01',
  'Union 02',
  'Union 03',
  'Union 04',
  'Union 05',
]

/** EDITABLE PLACEHOLDER — sample donors only. Connect a database for real data. */
export const SAMPLE_DONORS = [
  { name: 'Donor A', group: 'O+', area: 'Singra Municipality', lastDonation: '3 months ago' },
  { name: 'Donor B', group: 'B+', area: 'Union 01', lastDonation: '5 months ago' },
  { name: 'Donor C', group: 'A+', area: 'Singra Municipality', lastDonation: '2 months ago' },
  { name: 'Donor D', group: 'AB+', area: 'Union 03', lastDonation: '4 months ago' },
  { name: 'Donor E', group: 'O-', area: 'Union 02', lastDonation: '6 months ago' },
  { name: 'Donor F', group: 'B+', area: 'Singra Municipality', lastDonation: '1 month ago' },
]

export const CONTACT = {
  phone: '—',
  email: '—',
  address: 'Singra, Natore, Rajshahi, Bangladesh',
}
