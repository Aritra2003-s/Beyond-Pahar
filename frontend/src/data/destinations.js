import puruliaHero from '@/assets/purulia.hero.jpg';
import bankuraHero from '@/assets/Bankura.hero.jpg';

// Purulia Destination Assets
import ayodhyaHillImg from '@/assets/Ayodhya hill.jpg';
import bamniFallImg from '@/assets/Bamni fall.jpg';
import turgaDamImg from '@/assets/Turga dam.jpg';
import upperDamImg from '@/assets/UPPER DAM.jpg';
import khairaberaDamImg from '@/assets/Khairabera Dam.jpg';
import deulghataImg from '@/assets/Deulghata Terracotta & Stone Temples.jpg';
import garpanchkotImg from '@/assets/Garpanchkot Historical Fort & Panchet Hills.JPG';
import panchetDamImg from '@/assets/Panchet Dam & Reservoir.webp';
import barantiLakeImg from '@/assets/Baranti & Muradi Lake.jpg';
import marbleLakeImg from '@/assets/Blue Marble Lake.webp';
import charidaVillageImg from '@/assets/Charida Chhau Mask Village.jpg';
import joychandiPaharImg from '@/assets/Joychandi Pahar.jpg';

// Bankura Destination Assets
import bishnupurTemplesImg from '@/assets/Bishnupur Terracotta Temples.webp';
import mukutmanipurImg from '@/assets/Mukutmanipur & Kangsabati Confluence.jpg';
import susuniaHillImg from '@/assets/Susunia Hill.webp';
import joypurForestImg from '@/assets/Joypur Forest & Sal Sanctuary.jpg';
import jhilimiliImg from '@/assets/Jhilimili - Canopy of Whispering Greens.jpeg';
import biharinathHillImg from '@/assets/Biharinath Hill.avif';
import sutanForestImg from '@/assets/Sutan Forest Lake.webp';
import gangduaDamImg from '@/assets/Gangdua Dam on Sali River.jpg';
import biknaDokraImg from '@/assets/Bikna Dokra Artisan Village.jpg';
import panchmuraVillageImg from '@/assets/Panchmura Terracotta Village.webp';

export const destinations = [
  // ================= PURULIA DESTINATIONS =================
  {
    id: 'ayodhya-hills',
    name: 'Ayodhya Hills (Ajodhya Pahar)',
    district: 'Purulia',
    category: 'Hills & Nature',
    tagline: 'Ancient granitic plateau shrouded in mythology & Sal forests',
    description: 'An extended spur of the Chota Nagpur Plateau, Ayodhya Hills is the crown jewel of Purulia. Shrouded in Sal and Shimul forests, it offers rolling hills, pristine springs, and scenic viewpoints such as Mayur Pahar and Sita Kund. Legend holds that Lord Rama and Sita resided here during their exile.',
    coverImage: ayodhyaHillImg,
    gallery: [
      ayodhyaHillImg,
      puruliaHero,
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '610 m',
    nearestTown: 'Baghmundi (16 km)',
    bestSeason: 'October to March (Palash blooms Feb-Mar)',
    suggestedDuration: '2 Days / 1 Night',
    rating: 4.9,
    reviewsCount: 342,
    highlights: [
      'Mayur Pahar sunset viewpoint with panoramic vistas across the forested plains',
      'Sita Kund legendary perennial mountain spring bubbling through rocks',
      'Upper and Lower Dam hydro project viewpoints offering immense valley vistas',
      'Spring bloom of Palash (Flame of the Forest) painting ridges crimson'
    ],
    activities: ['Hilltop Trekking', 'Rock Bouldering', 'Bird Watching', 'Photography', 'Camping'],
    distanceFromKolkata: '304 km via NH16 & NH18',
    howToReach: 'Nearest railhead is Purulia Junction or Barabhum. Direct Toto and hired SUV available from Baghmundi.',
    travelInformation: {
      timings: 'Open throughout the day; best explored between 6:00 AM and 6:00 PM',
      entryFee: 'No entry fee for the hills; individual viewpoints may charge nominal parking',
      permits: 'No special permits required for Indian travelers; forest trekking should be guided',
      roadCondition: 'Well-paved winding ghat road with occasional hairpins from Sirakabad',
      clothing: 'Light woolens during November–February; sturdy trekking shoes recommended'
    },
    faqs: [
      {
        question: 'When is the best time to see the Palash blooms on Ayodhya Hills?',
        answer: 'Mid-February through late March is peak Palash flowering season, when entire hillsides turn brilliant fiery orange and red.'
      },
      {
        question: 'Can cars drive all the way to the top of Ayodhya Hills?',
        answer: 'Yes, smooth asphalt roads connect Baghmundi and Sirakabad to the hill top plateau, suitable for hatchbacks, sedans, and SUVs.'
      }
    ],
    nearbyDestinations: ['bamni-falls', 'turga-dam', 'upper-lower-dam', 'marble-lake', 'charida-village']
  },
  {
    id: 'bamni-falls',
    name: 'Bamni Falls',
    district: 'Purulia',
    category: 'Waterfalls',
    tagline: 'Perennial cascading mountain stream amidst dense foliage',
    description: 'A breathtaking perennial waterfall that cascades through rugged boulder beds in the heart of Ayodhya Hills. The descent down stone steps through towering Sal trees brings you to refreshing natural pools surrounded by wild ferns.',
    coverImage: bamniFallImg,
    gallery: [
      bamniFallImg,
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '480 m',
    nearestTown: 'Baghmundi (12 km)',
    bestSeason: 'July to February',
    suggestedDuration: '2 to 3 Hours',
    rating: 4.8,
    reviewsCount: 289,
    highlights: [
      'Step trail through tranquil Sal and Mahua forest',
      'Crystal clear cool plunge pools framed by ancient mossy granite',
      'Local tribal fruit stalls & post-hike lemon tea shacks'
    ],
    activities: ['Nature Walk', 'Waterfall Trekking', 'Photography'],
    distanceFromKolkata: '310 km',
    howToReach: 'Located 12 km from Baghmundi on the Ayodhya hilltop circuit. 250 stone steps descent from the vehicle parking lot.',
    travelInformation: {
      timings: '6:30 AM to 5:00 PM (descent closes before dusk for safety)',
      entryFee: 'Free entry; ₹20–₹50 vehicle parking fee',
      permits: 'None required',
      roadCondition: 'Paved hilltop approach; foot trail involves uneven rock steps',
      clothing: 'Anti-skid walking shoes; avoid slippery footwear'
    },
    faqs: [
      {
        question: 'Is Bamni Falls suitable for senior citizens?',
        answer: 'The descent has around 250 natural rock steps that can be steep. Senior travelers can enjoy the upper cascade viewpoint without descending the full trail.'
      }
    ],
    nearbyDestinations: ['ayodhya-hills', 'turga-dam', 'upper-lower-dam', 'marble-lake']
  },
  {
    id: 'turga-dam',
    name: 'Turga Dam & Falls',
    district: 'Purulia',
    category: 'Waterfalls & Dams',
    tagline: 'Cascading natural stream flowing into a serene forest lake',
    description: 'Turga Dam and the adjacent Turga Falls form one of the most serene twin-water spectacles in Ayodhya Hills. Cold, sparkling stream water rushes through rock crevasses into a placid reservoir surrounded by lush Mahua and Palash groves.',
    coverImage: turgaDamImg,
    gallery: [
      turgaDamImg,
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '460 m',
    nearestTown: 'Baghmundi (14 km)',
    bestSeason: 'August to February',
    suggestedDuration: '2 Hours',
    rating: 4.76,
    reviewsCount: 198,
    highlights: [
      'Natural stream gushing down stepped granite slabs',
      'Picturesque dam catchment with mirror-like water reflections',
      'Quiet, unhurried picnic and contemplative resting spots'
    ],
    activities: ['Stream Exploration', 'Landscape Photography', 'Birding'],
    distanceFromKolkata: '308 km',
    howToReach: 'Situated along the Baghmundi-Ayodhya main circuit, 4 km from Bamni Falls.',
    travelInformation: {
      timings: 'Sunrise to Sunset',
      entryFee: 'Free',
      permits: 'None required',
      roadCondition: 'Excellent tarmac leading up to the dam viewpoint',
      clothing: 'Comfortable sports shoes for boulder walking'
    },
    faqs: [
      {
        question: 'Can we swim in Turga Dam?',
        answer: 'Swimming in the reservoir deep zones is prohibited for safety reasons, but paddling in the shallow stream bed below the falls is allowed.'
      }
    ],
    nearbyDestinations: ['bamni-falls', 'upper-lower-dam', 'ayodhya-hills']
  },
  {
    id: 'upper-lower-dam',
    name: 'Upper Dam & Lower Dam (PPSP)',
    district: 'Purulia',
    category: 'Lakes & Dams',
    tagline: 'Engineering marvel meeting monumental mountain landscapes',
    description: 'Part of the Purulia Pumped Storage Project (PPSP), the Upper and Lower Dams are colossal water reservoirs carved into the granite belly of Ayodhya Hills. The Upper Dam sits high on the plateau with wind-swept water vistas, while the Lower Dam rests below, framed by towering cliff faces.',
    coverImage: upperDamImg,
    gallery: [
      upperDamImg,
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: 'Upper Dam 500 m / Lower Dam 280 m',
    nearestTown: 'Baghmundi (10 km)',
    bestSeason: 'October to March (Mesmerizing at sunset)',
    suggestedDuration: '2 to 3 Hours',
    rating: 4.84,
    reviewsCount: 275,
    highlights: [
      'Panoramic sunset viewpoints from the Upper Dam embankment',
      'Stunning contrast between emerald water and stark mountain precipices',
      'One of Eastern India’s cleanest and most scenic pumped hydro facilities'
    ],
    activities: ['Sunset Watching', 'Panoramic Photography', 'Scenic Drives'],
    distanceFromKolkata: '312 km',
    howToReach: 'Directly on the scenic mountain road connecting Baghmundi to the Ayodhya hill plateau.',
    travelInformation: {
      timings: '6:00 AM to 6:00 PM',
      entryFee: 'Free entry to public viewpoints; powerhouse entry restricted',
      permits: 'None for viewpoints; powerhouse requires prior WBSEDCL authorization',
      roadCondition: 'Smooth two-lane mountain highway with guardrails',
      clothing: 'Windbreaker jackets during winter evenings'
    },
    faqs: [
      {
        question: 'Can visitors enter the underground hydro plant?',
        answer: 'Public visitors can access the scenic dams and panoramic viewpoints. Access inside the technical plant requires specialized departmental permission.'
      }
    ],
    nearbyDestinations: ['ayodhya-hills', 'turga-dam', 'marble-lake', 'charida-village']
  },
  {
    id: 'khairabera-dam',
    name: 'Khairabera Dam & Lake',
    district: 'Purulia',
    category: 'Lakes & Dams',
    tagline: 'Tranquil reservoir cradled between forested hills',
    description: 'Nestled between the rolling slopes of Baghmundi hills, Khairabera Dam is an idyllic water reservoir known for pristine stillness, migratory waterfowl in winter, and dramatic eco-camping along the shoreline.',
    coverImage: khairaberaDamImg,
    gallery: [
      khairaberaDamImg,
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '350 m',
    nearestTown: 'Baghmundi (10 km)',
    bestSeason: 'October to April',
    suggestedDuration: 'Half Day to Overnight',
    rating: 4.75,
    reviewsCount: 215,
    highlights: [
      'Boating across the peaceful mountain reservoir',
      'Luxury tent stays right on the water edge',
      'Winter migratory bird sightings and tranquil shore walks'
    ],
    activities: ['Kayaking', 'Lakeside Camping', 'Stargazing', 'Angling'],
    distanceFromKolkata: '320 km',
    howToReach: 'Hired cabs from Purulia town or Barabhum station.',
    travelInformation: {
      timings: 'All day for resort guests; day visitors best 8:00 AM to 5:30 PM',
      entryFee: 'Nominal gate fee for day visitors at eco-resort grounds',
      permits: 'None required',
      roadCondition: 'Scenic rural road with red soil stretches',
      clothing: 'Light comfortable cottons, warm layers for night campfires'
    },
    faqs: [
      {
        question: 'Is overnight tented accommodation available at Khairabera?',
        answer: 'Yes, luxury Swiss cottages and eco-tents are operated right along the lake shore with dining facilities.'
      }
    ],
    nearbyDestinations: ['charida-village', 'ayodhya-hills', 'upper-lower-dam']
  },
  {
    id: 'deulghata',
    name: 'Deulghata Terracotta & Stone Temples',
    district: 'Purulia',
    category: 'Heritage & Archaeology',
    tagline: 'Ancient Jain & Hindu deul towers beside the Kansai River',
    description: 'Deulghata is one of the most enigmatic archaeological treasures of Bengal. Hidden deep within a tranquil grove near the Kansai River, this 10th-century site features soaring brick and laterite stone Deul temples with ornate floral stucco carvings, reflecting early Jain and Shaivite heritage.',
    coverImage: deulghataImg,
    gallery: [
      deulghataImg,
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '230 m',
    nearestTown: 'Arsha (6 km) / Purulia Town (28 km)',
    bestSeason: 'November to February',
    suggestedDuration: '2 Hours',
    rating: 4.8,
    reviewsCount: 124,
    highlights: [
      'Towering Rekha Deul brick architectures dating to the 10th–11th century',
      'Intricate terracotta carvings of Chaitya arches and floral patterns',
      'Serene riverside setting under the shade of ancient banyan trees'
    ],
    activities: ['Archaeological Exploration', 'Heritage Photography', 'Riverbank Strolls'],
    distanceFromKolkata: '290 km',
    howToReach: '28 km southwest of Purulia town via Arsha road; hired car recommended.',
    travelInformation: {
      timings: 'Sunrise to Sunset',
      entryFee: 'Free (ASI protected site)',
      permits: 'None required',
      roadCondition: 'Paved rural roads with a brief unpaved village lane leading to the river grove',
      clothing: 'Comfortable walking gear'
    },
    faqs: [
      {
        question: 'What is the historical significance of Deulghata?',
        answer: 'It dates back to the Pala-Sena era and represents the early Rekha-style Jain and Hindu brick architecture of the Rarh region, pre-dating Bishnupur temples.'
      }
    ],
    nearbyDestinations: ['ayodhya-hills', 'charida-village']
  },
  {
    id: 'garpanchkot',
    name: 'Garpanchkot Historical Fort & Panchet Hills',
    district: 'Purulia',
    category: 'Heritage & Forests',
    tagline: 'Ruined 16th-century fortress embraced by verdant hill slopes',
    description: 'Perched in the thick tropical forests at the foot of Panchet Hill, Garpanchkot holds the romantic stone and terracotta ruins of the 16th-century fortress of the Singh Deo dynasty. Raided during the Maratha Borgi incursions in 1742, today it is a serene sanctuary where ancient arches peer through green foliage.',
    coverImage: garpanchkotImg,
    gallery: [
      garpanchkotImg,
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '290 m',
    nearestTown: 'Neturia (8 km) / Asansol (34 km)',
    bestSeason: 'September to March',
    suggestedDuration: 'Half Day to Full Day',
    rating: 4.87,
    reviewsCount: 230,
    highlights: [
      'Pancharatna terracotta temple ruins embraced by nature',
      'Hiking trails up Panchet Hill offering sweeping valley views',
      'WBTDCL and private eco-resorts nestled amidst forest stillness'
    ],
    activities: ['Heritage Walks', 'Hill Hiking', 'Forest Walks', 'Photography'],
    distanceFromKolkata: '240 km',
    howToReach: '34 km from Asansol station or 65 km from Purulia town.',
    travelInformation: {
      timings: '6:00 AM to 6:00 PM',
      entryFee: 'Free',
      permits: 'None required',
      roadCondition: 'Paved highway connecting from Barakar and Asansol',
      clothing: 'Hiking shoes for hill walks'
    },
    faqs: [
      {
        question: 'Can Garpanchkot be clubbed with Baranti or Panchet Dam?',
        answer: 'Yes! Garpanchkot, Panchet Dam, and Baranti are all within 15 to 25 km of each other and form an ideal weekend triangle.'
      }
    ],
    nearbyDestinations: ['panchet-dam', 'baranti-lake', 'joychandi-pahar']
  },
  {
    id: 'panchet-dam',
    name: 'Panchet Dam & Reservoir',
    district: 'Purulia',
    category: 'Lakes & Dams',
    tagline: 'Colossal Damodar River dam at the border of Bengal and Jharkhand',
    description: 'Constructed across the mighty Damodar River with Panchet Hill standing sentinel in the background, Panchet Dam is one of the earliest and largest multi-purpose dams in Eastern India. The vast shimmering water expanse and cool breezes make it a favorite for tranquil evenings.',
    coverImage: panchetDamImg,
    gallery: [
      panchetDamImg,
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '130 m',
    nearestTown: 'Chirkunda (7 km) / Asansol (22 km)',
    bestSeason: 'October to March',
    suggestedDuration: '2 to 3 Hours',
    rating: 4.72,
    reviewsCount: 180,
    highlights: [
      'Spectacular views across the wide Damodar catchment',
      'Picturesque 6 km drive across the crest of the dam',
      'Fresh river fish delights at local waterside eateries'
    ],
    activities: ['Scenic Driving', 'Birding', 'Waterside Picnics'],
    distanceFromKolkata: '235 km',
    howToReach: '22 km from Asansol Railway Station via Kumardhubi/Chirkunda road.',
    travelInformation: {
      timings: 'Open daylight hours; reservoir sunset is particularly scenic',
      entryFee: 'Free; security checks at dam bridge',
      permits: 'None required for road crossing',
      roadCondition: 'Wide paved surface across the dam top',
      clothing: 'Casual outdoor wear'
    },
    faqs: [
      {
        question: 'Is photography permitted on Panchet Dam?',
        answer: 'General photography of the scenic reservoir from the road is permitted; photography of sensitive hydro-technical installations is restricted.'
      }
    ],
    nearbyDestinations: ['garpanchkot', 'baranti-lake']
  },
  {
    id: 'baranti-lake',
    name: 'Baranti & Muradi Lake',
    district: 'Purulia',
    category: 'Lakes & Dams',
    tagline: 'Spectacular sunsets over tranquil water & Palash trees',
    description: 'A hidden, tranquil tribal hamlet nestled between Muradi Hill and Baranti Hill, overlooking the sprawling water reservoir of the Ramchandrapur irrigation project. Known for fiery red Palash blooms in spring and legendary sunsets reflecting on the water.',
    coverImage: barantiLakeImg,
    gallery: [
      barantiLakeImg,
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '200 m',
    nearestTown: 'Muradi (6 km)',
    bestSeason: 'September to March',
    suggestedDuration: '2 Days / 1 Night',
    rating: 4.88,
    reviewsCount: 310,
    highlights: [
      'Famous vantage point for crimson red sunsets over the water',
      'Forest hikes into nearby Sal and Palash hills',
      'Warm Santhal village hospitality and peaceful eco-resorts'
    ],
    activities: ['Lakeside Strolls', 'Angling', 'Birding', 'Village Cycling'],
    distanceFromKolkata: '235 km',
    howToReach: '6 km from Muradi railway station on the Asansol-Adra line.',
    travelInformation: {
      timings: 'All day',
      entryFee: 'Free',
      permits: 'None required',
      roadCondition: 'Good village road with scenic earthen embankments',
      clothing: 'Comfortable clothing, walking shoes for trail walks'
    },
    faqs: [
      {
        question: 'Are there resorts directly overlooking the water in Baranti?',
        answer: 'Yes, several eco-cottages and homestays are positioned right on the lake ridge with direct views of the sunset.'
      }
    ],
    nearbyDestinations: ['garpanchkot', 'panchet-dam', 'joychandi-pahar']
  },
  {
    id: 'marble-lake',
    name: 'Blue Marble Lake',
    district: 'Purulia',
    category: 'Water Bodies',
    tagline: 'Cerulean water body nestled within carved granite canyons',
    description: 'An enchanting deep stone quarry that naturally filled with crystal turquoise rain-water, framed by dramatic sheer stone cliffs. Reminiscent of canyon gorges, Marble Lake is one of the most photographed geological wonders in Purulia.',
    coverImage: marbleLakeImg,
    gallery: [
      marbleLakeImg,
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '420 m',
    nearestTown: 'Sirakabad (8 km)',
    bestSeason: 'All Year Round (Sunrise & Sunset)',
    suggestedDuration: '1 to 2 Hours',
    rating: 4.85,
    reviewsCount: 194,
    highlights: [
      'Striking contrast of azure water against reddish-grey granite rocks',
      'Dramatic golden hour reflection photography',
      'Peaceful non-commercial atmosphere amidst nature'
    ],
    activities: ['Photography', 'Drone Shoots', 'Geological Walks'],
    distanceFromKolkata: '315 km',
    howToReach: 'Accessible via car or Toto on the Baghmundi-Ayodhya ridge road.',
    travelInformation: {
      timings: '6:00 AM to 5:30 PM',
      entryFee: 'Free',
      permits: 'None required',
      roadCondition: 'Gravel approach from the main highway',
      clothing: 'Footwear with good grip for walking on rocky surfaces'
    },
    faqs: [
      {
        question: 'Is it safe to get close to the water edge at Marble Lake?',
        answer: 'The lake is very deep with sheer quarry cliffs. Visitors are advised to enjoy the view from safe viewing ledges and avoid diving.'
      }
    ],
    nearbyDestinations: ['ayodhya-hills', 'bamni-falls', 'turga-dam']
  },
  {
    id: 'charida-village',
    name: 'Charida Chhau Mask Village',
    district: 'Purulia',
    category: 'Artisan Villages',
    tagline: 'The birthplace of flamboyant Chhau dance masks',
    description: 'Charida is a vibrant village where almost every household crafts the ornate, dramatic paper-mache and clay masks used in Purulia’s martial Chhau dance. Walk down the artisan lane, witness craftsmen painting mythological characters, and collect authentic folk art directly from national award-winning artisans.',
    coverImage: charidaVillageImg,
    gallery: [
      charidaVillageImg,
      'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '280 m',
    nearestTown: 'Baghmundi (5 km)',
    bestSeason: 'November to May (Chhau festival season)',
    suggestedDuration: '3 to 4 Hours',
    rating: 4.95,
    reviewsCount: 420,
    highlights: [
      'Over 250 artisan studios lining the main village street',
      'Watch artisans mould Mahisasura, Durga, and tribal animal masks',
      'Authentic souvenir shopping directly supporting folk artists'
    ],
    activities: ['Artisan Interaction', 'Mask Making Workshop', 'Cultural Photography'],
    distanceFromKolkata: '300 km',
    howToReach: '5 km from Baghmundi, easily reachable by Toto or auto.',
    travelInformation: {
      timings: 'Artisan studios open 9:00 AM to 7:00 PM every day',
      entryFee: 'Free village walk; mask prices range from ₹150 to ₹15,000',
      permits: 'None required',
      roadCondition: 'Paved village high street',
      clothing: 'Modest casual attire suitable for village interactions'
    },
    faqs: [
      {
        question: 'Can visitors try hands-on mask making in Charida?',
        answer: 'Yes, several master craftsmen offer 1-hour to full-day mask shaping and painting workshops for visitors.'
      }
    ],
    nearbyDestinations: ['ayodhya-hills', 'khairabera-dam', 'bamni-falls']
  },
  {
    id: 'joychandi-pahar',
    name: 'Joychandi Pahar',
    district: 'Purulia',
    category: 'Hills & Heritage',
    tagline: 'Satyajit Ray’s legendary Goopy Gyne Bagha Byne film backdrop',
    description: 'A cluster of three steep granitic monoliths rising majestically above the plains. Joychandi is immortalized in Satyajit Ray’s cinematic classic Goopy Gyne Bagha Byne. A flight of 500+ steps leads to the Joychandi temple atop the crest with breathtaking 360-degree views.',
    coverImage: joychandiPaharImg,
    gallery: [
      joychandiPaharImg,
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '155 m relative height',
    nearestTown: 'Adra (4 km)',
    bestSeason: 'October to March',
    suggestedDuration: 'Half Day',
    rating: 4.7,
    reviewsCount: 260,
    highlights: [
      'Historic 500-step stone staircase climb to the crest',
      'Premier rock-climbing and bouldering training crags in Eastern India',
      'Cinematic sunset over the surrounding red soil plains'
    ],
    activities: ['Rock Climbing', 'Temple Pilgrimage', 'Sunset Watching'],
    distanceFromKolkata: '260 km',
    howToReach: '4 km from Adra railway junction or 45 mins from Purulia town.',
    travelInformation: {
      timings: '6:00 AM to 6:30 PM',
      entryFee: 'Free',
      permits: 'Rock climbing training groups require local club intimation',
      roadCondition: 'Paved all the way to the hill base parking',
      clothing: 'Sports shoes for climbing steps'
    },
    faqs: [
      {
        question: 'How long does it take to climb Joychandi Pahar?',
        answer: 'The climb via stone steps typically takes 20 to 30 minutes at a moderate pace, with rest benches along the way.'
      }
    ],
    nearbyDestinations: ['baranti-lake', 'garpanchkot']
  },

  // ================= BANKURA DESTINATIONS =================
  {
    id: 'bishnupur-temples',
    name: 'Bishnupur Terracotta Temples',
    district: 'Bankura',
    category: 'Heritage & Architecture',
    tagline: 'The 17th-century capital of Malla Kings & terracotta artistry',
    description: 'Bishnupur is India’s terracotta marvel, flourishing under the devout Vaishnavite Malla kings. Because stone was scarce in the deltaic soil, artisans baked local alluvial mud into intricate bas-relief tiles depicting scenes from the Mahabharata, Ramayana, and Krishna Leela on grand chariot and ratna styled temples.',
    coverImage: bishnupurTemplesImg,
    gallery: [
      bishnupurTemplesImg,
      bankuraHero,
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '60 m',
    nearestTown: 'Bishnupur (Town Center)',
    bestSeason: 'October to March (Bishnupur Mela in December)',
    suggestedDuration: 'Full Day to 2 Days',
    rating: 4.96,
    reviewsCount: 650,
    highlights: [
      'Rasmancha: The unique pyramidal vaulted congregational platform (1600 AD)',
      'Jor Bangla Temple: Char-chala terracotta marvel depicting royal warfare & mythological lore',
      'Shyam Rai & Madan Mohan Temples: Exquisite Pancharatna architecture',
      'Dalmadal Great Iron Cannon forged in 1742 against Maratha Borgi raiders'
    ],
    activities: ['Heritage Walks', 'Architectural Study', 'Silk Saree Shopping', 'Music Appreciation'],
    distanceFromKolkata: '140 km',
    howToReach: 'Direct trains from Howrah (Rupashi Bangla, Aranyak Express) take ~3.5 hours.',
    travelInformation: {
      timings: 'ASI monuments open 6:00 AM to 6:00 PM daily',
      entryFee: 'ASI composite ticket ₹25 for Indian citizens; covers Rasmancha, Jor Bangla, and Shyam Rai',
      permits: 'None required',
      roadCondition: 'Smooth two-lane state highway and town roads',
      clothing: 'Light comfortable clothes, slip-on shoes for temple complexes'
    },
    faqs: [
      {
        question: 'Can all major temples be visited in a single day?',
        answer: 'Yes, the core ASI terracotta cluster is concentrated within a 3 km radius, easily traversed by Toto or bicycle in 4–5 hours.'
      }
    ],
    nearbyDestinations: ['panchmura-village', 'joypur-forest', 'bikna-village']
  },
  {
    id: 'mukutmanipur',
    name: 'Mukutmanipur & Kangsabati Confluence',
    district: 'Bankura',
    category: 'Lakes & Dams',
    tagline: 'India’s second largest earthen dam amidst undulating green hills',
    description: 'Where the blue waters of Kangsabati and Kumari rivers unite, Mukutmanipur presents an immense shimmering lake fringed by undulating forested knolls. Take a scenic ferry ride to Bonpukuria Deer Park or gaze at the sunset across the 11 km long earthen dam.',
    coverImage: mukutmanipurImg,
    gallery: [
      mukutmanipurImg,
      'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '110 m',
    nearestTown: 'Khatra (12 km)',
    bestSeason: 'September to March',
    suggestedDuration: 'Full Day to Overnight',
    rating: 4.78,
    reviewsCount: 390,
    highlights: [
      'Boat cruise to Bonpukuria Deer Park island',
      'Pareshnath ancient Jain idols at the dam site',
      'Vast emerald reservoir framed by Chhandar hillocks and crimson sunsets'
    ],
    activities: ['Boat Safaris', 'Lakeside Picnics', 'Folk Dance Evenings', 'Sunset Walks'],
    distanceFromKolkata: '230 km',
    howToReach: 'Direct train to Bankura Junction, then 55 km by bus or private cab.',
    travelInformation: {
      timings: 'Dam open daylight hours; ferry rides operate 8:00 AM to 4:30 PM',
      entryFee: 'Free dam promenade; motorized boats charge ₹400–₹800 per chartered boat',
      permits: 'None required',
      roadCondition: 'Paved highway via Khatra',
      clothing: 'Sun hat, sunglasses, and windproof jacket for boat rides'
    },
    faqs: [
      {
        question: 'How do you reach the Deer Park inside the dam?',
        answer: 'Ferry boats operated by local boatmen associations run regularly from the ferry ghat to the Bonpukuria island sanctuary.'
      }
    ],
    nearbyDestinations: ['jhilimili', 'sutan-forest', 'bishnupur-temples']
  },
  {
    id: 'susunia-hill',
    name: 'Susunia Hill & Ancient Rock Inscriptions',
    district: 'Bankura',
    category: 'Hills & Heritage',
    tagline: 'Prehistoric stone-carvers sanctuary with natural medicinal springs',
    description: 'An ancient hillock famous for the 4th-century stone rock inscription of King Chandravarman, marking one of Bengal’s earliest recorded epigraphic relics. Susunia is also known for skilled stone artisans chiseling idols from red stone, natural mineral springs, and diverse medicinal flora.',
    coverImage: susuniaHillImg,
    gallery: [
      susuniaHillImg,
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '440 m',
    nearestTown: 'Chhatna (14 km)',
    bestSeason: 'November to February',
    suggestedDuration: 'Half Day to Full Day',
    rating: 4.82,
    reviewsCount: 240,
    highlights: [
      '4th Century AD Brahmi rock inscription of King Chandravarman at Dhara spring',
      'Stone carving craftsman colonies at the hill base selling handcrafted stone idols',
      'Rock climbing training and trekking paths leading to panoramic summit views'
    ],
    activities: ['Trekking', 'Stone Craft Souvenirs', 'Archaeological Exploration'],
    distanceFromKolkata: '210 km',
    howToReach: '22 km from Bankura town; accessible by local auto or rented cab.',
    travelInformation: {
      timings: '6:00 AM to 6:00 PM',
      entryFee: 'Free',
      permits: 'None required',
      roadCondition: 'Good asphalt road to base parking',
      clothing: 'Trekking shoes and walking stick for hikers'
    },
    faqs: [
      {
        question: 'Are there natural springs at Susunia?',
        answer: 'Yes, the sacred Dhara spring flows cold mineral water year-round from a sculpted stone spout at the foot of the hill.'
      }
    ],
    nearbyDestinations: ['biharinath-hill', 'gangdua-dam', 'bikna-village']
  },
  {
    id: 'joypur-forest',
    name: 'Joypur Forest & Sal Sanctuary',
    district: 'Bankura',
    category: 'Forest & Wildlife',
    tagline: 'Dense Sal canopy alive with Cheetal deer & wilderness watchtowers',
    description: 'A lush expanse of towering Sal trees, Joypur Forest is a verdant lung in Bankura district. Home to herds of spotted deer (Cheetal), wild boars, flying squirrels, and myriad forest birds, the forest road offers a cool, shaded drive with a scenic forest watchtower.',
    coverImage: joypurForestImg,
    gallery: [
      joypurForestImg,
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '75 m',
    nearestTown: 'Joypur (3 km) / Bishnupur (14 km)',
    bestSeason: 'October to April',
    suggestedDuration: 'Half Day',
    rating: 4.79,
    reviewsCount: 205,
    highlights: [
      'Deep emerald Sal tree canopy casting continuous dappled light',
      'Spotted deer sightings from the Forest Department watchtower',
      'Historic British-era WWII airstrip remnants hidden in the trees'
    ],
    activities: ['Forest Drives', 'Watchtower Birding', 'Nature Walks', 'Wildlife Photography'],
    distanceFromKolkata: '130 km',
    howToReach: '14 km from Bishnupur along the Arambagh-Bishnupur State Highway.',
    travelInformation: {
      timings: 'Watchtower accessible 8:00 AM to 5:00 PM; forest drives safe until dusk',
      entryFee: 'Free for transit road; nominal watchtower pass',
      permits: 'Forest interior trails require forest guard guidance',
      roadCondition: 'Paved highway traversing directly through the forest canopy',
      clothing: 'Earth-toned outdoor clothing for wildlife watching'
    },
    faqs: [
      {
        question: 'Can wild elephants be encountered in Joypur Forest?',
        answer: 'During seasonal migratory corridors (autumn/winter), elephant herds occasionally pass through. Always adhere to Forest Department alerts and avoid venturing off marked roads.'
      }
    ],
    nearbyDestinations: ['bishnupur-temples', 'panchmura-village']
  },
  {
    id: 'jhilimili',
    name: 'Jhilimili - Canopy of Whispering Greens',
    district: 'Bankura',
    category: 'Hills & Forests',
    tagline: 'Undulating forest ranges known as the Darjeeling of South Bengal',
    description: 'Affectionately known as the "Darjeeling of South Bengal," Jhilimili sits on rolling hillocks covered in thick forests of Sal, Mahua, and Kendu. The road winds through hairpin curves with spectacular viewpoints overlooking the Kangsabati valley.',
    coverImage: jhilimiliImg,
    gallery: [
      jhilimiliImg,
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '220 m',
    nearestTown: 'Ranibandh (15 km)',
    bestSeason: 'October to March',
    suggestedDuration: 'Full Day to 2 Days',
    rating: 4.81,
    reviewsCount: 165,
    highlights: [
      'Winding forest mountain drives through whispering Sal woods',
      'Panoramic sunrise viewpoints overlooking Kangsabati riverbed',
      'Vibrant Santhali tribal villages and folk music culture'
    ],
    activities: ['Scenic Road Trips', 'Forest Walks', 'Tribal Culture Immersion'],
    distanceFromKolkata: '245 km',
    howToReach: '45 km from Mukutmanipur via Ranibandh; best accessed by private cab.',
    travelInformation: {
      timings: 'All day',
      entryFee: 'Free',
      permits: 'None required',
      roadCondition: 'Picturesque winding ghat road in good condition',
      clothing: 'Comfortable cottons or light jacket in winter'
    },
    faqs: [
      {
        question: 'Why is Jhilimili called the Darjeeling of South Bengal?',
        answer: 'Due to its higher elevation, undulating green hill ridges, mist in winter mornings, and cool forest breezes that feel distinct from the surrounding plains.'
      }
    ],
    nearbyDestinations: ['sutan-forest', 'mukutmanipur']
  },
  {
    id: 'biharinath-hill',
    name: 'Biharinath Hill & Ancient Shiva Shrine',
    district: 'Bankura',
    category: 'Hills & Heritage',
    tagline: 'The highest peak of Bankura district cloaked in dense woods',
    description: 'Rising to 451 meters, Biharinath is the highest mountain peak in Bankura district. Positioned between the Damodar River basin and dense Sal forests, it is celebrated for its ancient Biharinath Shiva temple at the base and rewarding trekking trails up to the craggy crest.',
    coverImage: biharinathHillImg,
    gallery: [
      biharinathHillImg,
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '451 m',
    nearestTown: 'Saltora (14 km)',
    bestSeason: 'September to March (Maha Shivratri in Feb-Mar)',
    suggestedDuration: 'Half Day to Overnight',
    rating: 4.77,
    reviewsCount: 190,
    highlights: [
      'Summit trek with sweeping panoramic views of the Damodar basin',
      'Ancient Biharinath Shiva Temple dating back to the Pala era',
      'Abundant birdlife and medicinal forest plants along mountain trails'
    ],
    activities: ['Mountain Trekking', 'Temple Pilgrimage', 'Birdwatching', 'Campfires'],
    distanceFromKolkata: '225 km',
    howToReach: '58 km from Bankura town and 45 km from Asansol; accessible by taxi via Saltora.',
    travelInformation: {
      timings: 'Temple open 6:00 AM to 7:30 PM; summit treks best started early morning',
      entryFee: 'Free',
      permits: 'None required for regular trekking route',
      roadCondition: 'Paved rural roads with scenic village horizons',
      clothing: 'Firm grip hiking shoes, sun protection'
    },
    faqs: [
      {
        question: 'How difficult is the trek to Biharinath summit?',
        answer: 'It is a moderate trek of approximately 1.5 to 2 hours through a forested rocky pathway. A local guide is recommended for first-time hikers.'
      }
    ],
    nearbyDestinations: ['susunia-hill', 'gangdua-dam']
  },
  {
    id: 'sutan-forest',
    name: 'Sutan Forest Lake & Deer Watch',
    district: 'Bankura',
    category: 'Forest & Wildlife',
    tagline: 'Hidden forest lake nestled within Ranibandh woodland ranges',
    description: 'Hidden deep inside the Ranibandh forest range, Sutan features a serene forest lake where wild deer and colorful birds come to drink. The forest rest house and watchtower provide pristine solitude surrounded by Sal and Mahua trees.',
    coverImage: sutanForestImg,
    gallery: [
      sutanForestImg,
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '180 m',
    nearestTown: 'Ranibandh (8 km)',
    bestSeason: 'November to March',
    suggestedDuration: 'Half Day',
    rating: 4.73,
    reviewsCount: 110,
    highlights: [
      'Picturesque forest lake completely surrounded by untouched Sal groves',
      'Birdwatching watchtower overlooking animal drinking spots',
      'Peaceful eco-tourism trail managed by local tribal forest committees'
    ],
    activities: ['Forest Birding', 'Eco Hikes', 'Peaceful Solitude'],
    distanceFromKolkata: '250 km',
    howToReach: '8 km from Ranibandh off the Mukutmanipur-Jhilimili forest route.',
    travelInformation: {
      timings: 'Daylight hours: 7:00 AM to 5:00 PM',
      entryFee: 'Free',
      permits: 'Check at Ranibandh Forest Range office before proceeding',
      roadCondition: 'Gravel forest track; SUV or high-ground clearance vehicle recommended',
      clothing: 'Forest gear, full-sleeve cottons, mosquito repellent'
    },
    faqs: [
      {
        question: 'Are night stays permitted inside Sutan forest?',
        answer: 'The Forest Department maintains a basic rest house that can be booked through the Bankura South Forest Division in advance.'
      }
    ],
    nearbyDestinations: ['jhilimili', 'mukutmanipur']
  },
  {
    id: 'gangdua-dam',
    name: 'Gangdua Dam on Sali River',
    district: 'Bankura',
    category: 'Lakes & Dams',
    tagline: 'Picturesque sunset reservoir framed by Susunia hillocks',
    description: 'Built across the Sali River, Gangdua Dam is a peaceful, scenic water body set against the silhouette of Susunia Hill. During winter, flocks of migratory birds arrive, making it a beloved quiet retreat for sunset watchers and nature photographers.',
    coverImage: gangduaDamImg,
    gallery: [
      gangduaDamImg,
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '95 m',
    nearestTown: 'Mejia (10 km) / Bankura (28 km)',
    bestSeason: 'October to March',
    suggestedDuration: '2 to 3 Hours',
    rating: 4.71,
    reviewsCount: 135,
    highlights: [
      'Stunning backdrop of Susunia Hill across the water',
      'Migratory winter duck and heron congregations',
      'Quiet earthen embankments ideal for unhurried evening strolls'
    ],
    activities: ['Sunset Watching', 'Bird Photography', 'Leisure Walks'],
    distanceFromKolkata: '195 km',
    howToReach: '28 km northwest of Bankura town; accessible by taxi via Gangajalghati.',
    travelInformation: {
      timings: 'Open daylight hours',
      entryFee: 'Free',
      permits: 'None required',
      roadCondition: 'Paved rural roads with minimal traffic',
      clothing: 'Casual outdoor clothing'
    },
    faqs: [
      {
        question: 'Can Gangdua Dam be visited alongside Susunia Hill?',
        answer: 'Yes, Gangdua Dam is only 15 km from Susunia Hill, making them a great combined half-day excursion.'
      }
    ],
    nearbyDestinations: ['susunia-hill', 'biharinath-hill']
  },
  {
    id: 'bikna-village',
    name: 'Bikna Dokra Artisan Village',
    district: 'Bankura',
    category: 'Artisan Villages',
    tagline: '4,000-year-old lost-wax bell metal casting craft',
    description: 'Just 5 km from Bankura town lies Bikna, home to the Karmakar Dhokra community who keep alive the ancient 4,000-year-old lost-wax metal casting technique dating back to Mohenjo-Daro’s Dancing Girl. Witness clay core preparation, beeswax wax-thread coil designing, and the dramatic casting in charcoal kilns.',
    coverImage: biknaDokraImg,
    gallery: [
      biknaDokraImg,
      'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582560475093-ba66accbc424?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '78 m',
    nearestTown: 'Bankura Town (5 km)',
    bestSeason: 'All Year Round',
    suggestedDuration: '2 to 3 Hours',
    rating: 4.92,
    reviewsCount: 220,
    highlights: [
      'Live demonstration of lost-wax casting in village courtyards',
      'Purchase GI-tagged authentic Dokra owls, deities, and brass jewelry',
      'Direct revenue to master craftswomen and craftsmen'
    ],
    activities: ['Metal Craft Workshops', 'Cultural Immersion', 'Authentic Shopping'],
    distanceFromKolkata: '175 km',
    howToReach: '10-minute Toto ride from Bankura Railway Station.',
    travelInformation: {
      timings: '10:00 AM to 6:00 PM daily',
      entryFee: 'Free village entry',
      permits: 'None required',
      roadCondition: 'Paved street connecting to Bankura town center',
      clothing: 'Modest comfortable attire'
    },
    faqs: [
      {
        question: 'Are the Dokra crafts in Bikna authentic GI-tagged pieces?',
        answer: 'Yes, Bikna is the officially recognized Geographical Indication (GI) hub for Bengal Dokra metal crafts.'
      }
    ],
    nearbyDestinations: ['susunia-hill', 'panchmura-village', 'bishnupur-temples']
  },
  {
    id: 'panchmura-village',
    name: 'Panchmura Terracotta Village',
    district: 'Bankura',
    category: 'Artisan Villages',
    tagline: 'The birthplace of the iconic long-necked Bankura Horse',
    description: 'Panchmura is the world-famous cradle of the terracotta Bankura Horse — an internationally acclaimed emblem of Indian folk art and the symbol of Central Cottage Industries. Rows of potters work on manual wheels and open-air straw kilns shaping magnificent terracotta artifacts.',
    coverImage: panchmuraVillageImg,
    gallery: [
      panchmuraVillageImg,
      'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80'
    ],
    altitude: '70 m',
    nearestTown: 'Taldangra (9 km) / Bishnupur (24 km)',
    bestSeason: 'October to April',
    suggestedDuration: '3 Hours',
    rating: 4.9,
    reviewsCount: 310,
    highlights: [
      'Iconic Bankura terracotta horses in sizes ranging from 4 inches to 6 feet',
      'Traditional pit kilns that give terracotta its rich burnt earthen hue',
      'UNESCO-supported rural craft hub with working potter families'
    ],
    activities: ['Pottery Wheel Experience', 'Kiln Tour', 'Handicraft Purchasing'],
    distanceFromKolkata: '165 km',
    howToReach: '24 km from Bishnupur, reachable by hired car or Toto.',
    travelInformation: {
      timings: '9:00 AM to 6:30 PM',
      entryFee: 'Free village walk',
      permits: 'None required',
      roadCondition: 'Paved state road via Taldangra',
      clothing: 'Comfortable casual wear'
    },
    faqs: [
      {
        question: 'Can the large terracotta horses be safely packed for travel?',
        answer: 'Yes, the artisan studios specialize in heavy cardboard and bubble packaging suitable for flights and train journeys.'
      }
    ],
    nearbyDestinations: ['bishnupur-temples', 'joypur-forest', 'mukutmanipur']
  }
];
