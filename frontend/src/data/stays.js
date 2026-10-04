import kushalPalliImg from '@/assets/Kushal Palli Nature Resort.jpg';
import khairaberaResortImg from '@/assets/Khairabera Eco Lake Tented Resort.webp';
import palashBitanImg from '@/assets/Palash Bitan Lakeside Retreat.webp';
import charidaHomestayImg from '@/assets/Charida Chhau Heritage Homestay.jpeg';
import bishnupurLodgeImg from '@/assets/bishnupur-tourist-lodge.jpg';
import peerlessResortImg from '@/assets/Peerless Resort Mukutmanipur.webp';
import susuniaRetreatImg from '@/assets/Susunia Greenwoods Retreat.webp';

export const stays = [
  {
    id: 'kushal-palli-resort',
    name: 'Kushal Palli Nature Resort',
    district: 'Purulia',
    location: 'Ayodhya Pahar Foothills, Baghmundi',
    type: 'Luxury Eco-Resort',
    pricePerNight: 4200,
    rating: 4.8,
    reviewsCount: 185,
    coverImage: kushalPalliImg,
    amenities: ['Swimming Pool', 'Forest View Cottages', 'Multi-Cuisine & Regional Dining', 'Tribal Cultural Evenings', 'Spa', 'Free WiFi', 'AC & Hot Water'],
    description: 'Surrounded by the rugged wooded slopes of Ayodhya Hills, Kushal Palli combines 4-star comfort with untamed rural nature. Features sprawling gardens, bird-watching paths, and organic local meals.',
    featured: true,
    availableRooms: 6
  },
  {
    id: 'khairabera-lake-camp',
    name: 'Khairabera Eco Lake Tented Resort',
    district: 'Purulia',
    location: 'Khairabera Dam Shore, Baghmundi',
    type: 'Glamping & Tented Lodges',
    pricePerNight: 3500,
    rating: 4.9,
    reviewsCount: 142,
    coverImage: khairaberaResortImg,
    amenities: ['Lakeside Luxury Swiss Tents', 'Private Deck', 'Campfire & BBQ', 'Kayaking / Boating', 'Pet Friendly', 'Authentic Posto Thalis'],
    description: 'Step directly from your luxury safari tent onto the tranquil water’s edge of Khairabera Lake. Under star-studded skies with gentle waves lapping the red bank, this is the ultimate romantic and wilderness escape.',
    featured: true,
    availableRooms: 4
  },
  {
    id: 'wbtdcl-bishnupur-lodge',
    name: 'Bishnupur Tourism Property (WBTDCL)',
    district: 'Bankura',
    location: 'Near Rasmancha, Bishnupur',
    type: 'Heritage Tourist Lodge',
    pricePerNight: 2400,
    rating: 4.6,
    reviewsCount: 310,
    coverImage: bishnupurLodgeImg,
    amenities: ['Adjacent to Major Temples', 'Spacious AC Rooms', 'Government Certified Tour Desk', 'Traditional Bengali Restaurant', 'Parking Space'],
    description: 'The trusted state-run tourism retreat situated right in the historical heart of Bishnupur, walking distance to Rasmancha and the terracotta cluster.',
    featured: false,
    availableRooms: 10
  },
  {
    id: 'baranti-palash-retreat',
    name: 'Palash Bitan Lakeside Retreat',
    district: 'Purulia',
    location: 'Baranti Lake Front, Neturia',
    type: 'Eco Homestay & Cottages',
    pricePerNight: 2100,
    rating: 4.85,
    reviewsCount: 167,
    coverImage: palashBitanImg,
    amenities: ['Direct Lake & Sunset View', 'Mud-Plastered Rustic AC Cottages', 'Village Cooked Organic Food', 'Mahua Garden Hammocks', 'Pet Friendly'],
    description: 'Charming mud-style cottages with modern comforts overlooking the serene waters of Baranti reservoir. Enjoy hot luchi-alur dom for breakfast and fish caught fresh from the lake.',
    featured: true,
    availableRooms: 5
  },
  {
    id: 'mukutmanipur-peerless-resort',
    name: 'Peerless Resort Mukutmanipur',
    district: 'Bankura',
    location: 'Hilltop Overlooking Kangsabati Dam',
    type: 'Hilltop Resort',
    pricePerNight: 3100,
    rating: 4.7,
    reviewsCount: 220,
    coverImage: peerlessResortImg,
    amenities: ['Panoramic Dam View Balconies', 'Landscaped Lawns', 'Kids Play Area', 'Conducted Boat Tours', 'Multi-Cuisine Restaurant'],
    description: 'Perched on a quiet hillock with sweeping views of India’s second largest earthen dam. Watch colorful fishing boats glide across the reservoir as dawn breaks over Bankura.',
    featured: true,
    availableRooms: 8
  },
  {
    id: 'charida-artisan-homestay',
    name: 'Charida Chhau Heritage Homestay',
    district: 'Purulia',
    location: 'Charida Mask Village, Baghmundi',
    type: 'Rural Artisan Homestay',
    pricePerNight: 1600,
    rating: 4.92,
    reviewsCount: 95,
    coverImage: charidaHomestayImg,
    amenities: ['Stay with Master Artisan Family', 'Hands-on Mask Making Session', 'Traditional Home-Cooked Santhali Meals', 'Clean Attached Bathrooms', 'Verandah Overlooking Craft Lane'],
    description: 'An authentic immersive homestay hosted by a National Award-winning Chhau mask artisan family. Wake up to the sound of rooster calls, learn clay modeling, and dine under lantern light.',
    featured: false,
    availableRooms: 3
  },
  {
    id: 'susunia-forest-lodge',
    name: 'Susunia Greenwoods Retreat',
    district: 'Bankura',
    location: 'Susunia Hill Base, Chhatna',
    type: 'Nature & Trekker Lodge',
    pricePerNight: 1900,
    rating: 4.65,
    reviewsCount: 88,
    coverImage: susuniaRetreatImg,
    amenities: ['Basecamp for Rock Climbers', 'Herbal Plant Garden', 'Campfire Area', 'Trek Guide Arrangement', 'Wholesome Rural Meals'],
    description: 'A cozy forest retreat at the foot of Susunia Hill, close to natural springs and stone carving workshops. The favorite stay for trekking groups and rock-climbing trainees.',
    featured: false,
    availableRooms: 7
  }
];
