// Cambodia destination dataset used across search, filter, gallery,
// recommendation and cost-estimation features.

export const categories = [
  { id: "heritage", label: "Temples & Heritage", icon: "temple" },
  { id: "nature", label: "Nature & Wildlife", icon: "leaf" },
  { id: "beach", label: "Coast & Islands", icon: "wave" },
  { id: "memorial", label: "History & Memorial", icon: "flame" },
  { id: "adventure", label: "Highlands & Adventure", icon: "peak" },
  { id: "city", label: "City & Culture", icon: "gate" },
];

export const regions = [
  "Siem Reap",
  "Phnom Penh",
  "Coastal South",
  "Northeast Highlands",
  "Battambang",
  "Preah Vihear",
];

// costPerDay figures are USD, per traveler, per day, for each budget tier.
export const destinations = [
  {
    slug: "angkor-wat",
    image: "Angkor Wat.jpg",
    name: "Angkor Wat",
    region: "Siem Reap",
    category: "heritage",
    gallery: [
      { image: "/images/angkorwat.png", caption: "Angkor Wat" },
      { image: "/images/angkorwat1.png", caption: "Base Releif" },
      {
        image: "/images/angkorwat3.png",
        caption: "Cambodia venerated Vishu statue",
      },
      {
        image: "/images/angkorwat4.png",
        caption: "Construction of Angkor Wat",
      },
      { image: "/images/angkorwat2.png", caption: "Angkor Wat" },
    ],
    wikimedia: {
      title: "Angkor Wat",
      url: "https://commons.wikimedia.org/wiki/Angkor_Wat",
      description:
        "Angkor Wat is a temple complex in Cambodia and one of the largest religious monuments in the world.",
      credit: "Wikimedia Commons",
    },

    tags: ["UNESCO", "jungle", "photogenic"],
    duration: 1,
    difficulty: "Easy",
    bestTime: "Nov – Feb",
    rating: 4.8,
    short:
      "The 'Tomb Raider temple', where silk-cotton roots swallow sandstone.",
    description:
      "Left largely as it was found, Ta Prohm is the clearest picture of what all of Angkor looked like before restoration began: strangler-fig and silk-cotton roots braid through collapsed galleries, prying stone blocks apart in slow motion. Go in the late afternoon when tour groups thin out and the light rakes low through the canopy.",
    highlights: [
      "The root-wrapped gallery made famous on screen",
      "Quiet inner courtyards away from the main path",
      "Combine with Ta Keo and Banteay Kdei nearby",
    ],
    costPerDay: {
      budget: { stay: 10, food: 8, transport: 6, activity: 8 },
      mid: { stay: 35, food: 18, transport: 15, activity: 15 },
      luxury: { stay: 120, food: 45, transport: 40, activity: 30 },
    },
  },
  {
    slug: "bayon",
    image: "Bayon-temple.JPG",
    name: "Bayon, Angkor Thom",
    region: "Siem Reap",
    category: "heritage",
    gallery: [{ image: "/images/bayon1.png", caption: "Bayon, Angkor Thom" }],
    tags: ["UNESCO", "faces", "walled city"],
    duration: 1,
    difficulty: "Easy",
    bestTime: "Nov – Feb",
    rating: 4.8,
    short: "216 serene stone faces watch over Jayavarman VII's walled capital.",
    description:
      "At the exact centre of the last great Khmer capital, Bayon's fifty-four towers carry giant carved faces facing every direction — read by most scholars as the bodhisattva Avalokiteshvara wearing the king's likeness. The surrounding city wall, South Gate elephant causeway and Terrace of the Leper King round out a full morning inside Angkor Thom.",
    highlights: [
      "Face-towers at the second-level terrace",
      "South Gate causeway lined with devas and asuras",
      "Terrace of the Elephants at golden hour",
    ],
    costPerDay: {
      budget: { stay: 10, food: 8, transport: 6, activity: 8 },
      mid: { stay: 35, food: 18, transport: 15, activity: 15 },
      luxury: { stay: 120, food: 45, transport: 40, activity: 30 },
    },
  },
  {
    slug: "tonle-sap",
    image: "Tonlesap.jpg",
    name: "Tonle Sap Floating Villages",
    region: "Siem Reap",
    category: "nature",
    gallery: [
      { image: "Tonlesap.jpg", caption: "Tonle Sap Floating Villages" },
    ],
    tags: ["boat trip", "community", "wildlife"],
    duration: 1,
    difficulty: "Easy",
    bestTime: "Aug – Mar",
    rating: 4.4,
    short: "Stilt and floating settlements on Southeast Asia's largest lake.",
    description:
      "Tonle Sap swells to five times its dry-season size every monsoon, and entire villages rise and fall with it — houses on stilts twelve metres high, floating schools, clinics and a Buddhist pagoda. A boat trip through Kampong Phluk or Kampong Khleang, ideally with a community-run operator, is one of the few places to see how the lake still feeds most of the country's freshwater fish.",
    highlights: [
      "Flooded mangrove forest by rowboat at Kampong Phluk",
      "Floating market and pagoda at Kampong Khleang",
      "Bird sanctuary at Prek Toal (dry season)",
    ],
    costPerDay: {
      budget: { stay: 10, food: 8, transport: 10, activity: 15 },
      mid: { stay: 35, food: 18, transport: 20, activity: 30 },
      luxury: { stay: 120, food: 45, transport: 55, activity: 70 },
    },
  },
  {
    slug: "koh-rong",
    image: "Koh Rong - Cambodia (50925116473).jpg",
    name: "Koh Rong",
    region: "Coastal South",
    category: "beach",
    gallery: [
      { image: "Koh Rong - Cambodia (50925116473).jpg", caption: "Koh Rong" },
    ],
    tags: ["seafood", "colonial ruins", "relaxed"],
    duration: 2,
    difficulty: "Easy",
    bestTime: "Nov – May",
    rating: 4.5,
    short:
      "Faded French villas, a famous crab market, and a national park hike.",
    description:
      "Once the seaside retreat of Cambodia's colonial elite, Kep is now a quiet town of overgrown villa ruins and a crab market where you can pick your catch straight off the boats. The small Kep National Park loop trail climbs through forest with sea views, and Rabbit Island sits twenty minutes offshore for an easy overnight.",
    highlights: [
      "Kep Crab Market — crab with Kampot pepper",
      "5km forest loop trail through Kep National Park",
      "Day trip to Koh Tonsay (Rabbit Island)",
    ],
    costPerDay: {
      budget: { stay: 9, food: 10, transport: 6, activity: 8 },
      mid: { stay: 28, food: 22, transport: 12, activity: 18 },
      luxury: { stay: 110, food: 50, transport: 30, activity: 45 },
    },
  },
  {
    slug: "kampot",
    image: "Kampot 20110429-050.JPG",
    name: "Kampot",
    region: "Coastal South",
    category: "city",
    gallery: [{ image: "Kampot 20110429-050.JPG", caption: "Kampot" }],
    tags: ["river", "pepper farms", "riverside"],
    duration: 2,
    difficulty: "Easy",
    bestTime: "Nov – May",
    rating: 4.6,
    short: "A riverside colonial town famous for pepper and slow evenings.",
    description:
      "Kampot's shopfronts and shuttered villas sit along a lazy river beneath Bokor Mountain. Cycle out to a pepper farm to taste the peppercorns that flavour half the region's food, then take a sunset boat cruise or salt-water swim as the light turns the water gold.",
    highlights: [
      "Pepper farm tour and tasting",
      "Sunset river cruise",
      "Old French quarter architecture walk",
    ],
    costPerDay: {
      budget: { stay: 8, food: 8, transport: 6, activity: 8 },
      mid: { stay: 25, food: 18, transport: 12, activity: 16 },
      luxury: { stay: 95, food: 42, transport: 30, activity: 40 },
    },
  },
  {
    slug: "bokor",
    image: "Bokor palace hotel Cambodia.jpg",
    name: "Bokor National Park",
    region: "Coastal South",
    category: "adventure",
    gallery: [
      {
        image: "Bokor palace hotel Cambodia.jpg",
        caption: "Bokor National Park",
      },
    ],
    tags: ["mountain", "hiking", "abandoned station"],
    duration: 1,
    difficulty: "Moderate",
    bestTime: "Nov – May",
    rating: 4.3,
    short: "A cloud-wrapped hill station abandoned twice, now a national park.",
    description:
      "The road up Bokor Mountain climbs through misty forest to a ghost casino and church built by the French in the 1920s and left to the jungle for decades. Trails around the plateau lead past a waterfall and viewpoints over the Gulf of Thailand — cool, damp air a welcome break from the coast below.",
    highlights: [
      "Abandoned Bokor Palace Hotel & Casino",
      "Popokvil Waterfall short hike",
      "Wat Sampov Pram hilltop pagoda",
    ],
    costPerDay: {
      budget: { stay: 8, food: 8, transport: 12, activity: 10 },
      mid: { stay: 25, food: 18, transport: 25, activity: 20 },
      luxury: { stay: 95, food: 42, transport: 55, activity: 45 },
    },
  },
  {
    slug: "royal-palace",
    image: "Le Palais Royal (Phnom Penh) (6997773481).jpg",
    name: "Royal Palace & Silver Pagoda",
    region: "Phnom Penh",
    category: "city",
    gallery: [
      {
        image: "Le Palais Royal (Phnom Penh) (6997773481).jpg",
        caption: "Royal Palace & Silver Pagoda",
      },
    ],
    tags: ["capital", "architecture", "culture"],
    duration: 1,
    difficulty: "Easy",
    bestTime: "Nov – Feb",
    rating: 4.5,
    short:
      "The gilded residence of the King, and a floor tiled in solid silver.",
    description:
      "Phnom Penh's Royal Palace complex, built in 1866, mixes Khmer roofline and French urban planning around manicured courtyards. Next door, the Silver Pagoda houses a solid-gold Buddha crusted with diamonds and a floor of over five thousand silver tiles — most kept carpeted to protect them.",
    highlights: [
      "Throne Hall and Napoleon III villa",
      "Silver Pagoda's Emerald Buddha",
      "Riverside promenade walk at sunset",
    ],
    costPerDay: {
      budget: { stay: 10, food: 8, transport: 6, activity: 10 },
      mid: { stay: 35, food: 20, transport: 12, activity: 18 },
      luxury: { stay: 140, food: 55, transport: 35, activity: 40 },
    },
  },
  {
    slug: "tuol-sleng",
    image: "Tuol Sleng.jpg",
    name: "Tuol Sleng (S-21)",
    region: "Phnom Penh",
    category: "memorial",
    gallery: [{ image: "Tuol Sleng.jpg", caption: "Tuol Sleng (S-21)" }],
    tags: ["history", "memorial", "reflective"],
    duration: 1,
    difficulty: "Easy",
    bestTime: "Year-round",
    rating: 4.7,
    short: "The best known of Cambodia's Killing Fields, now a memorial stupa.",
    description:
      "A short drive from the capital, Choeung Ek marks one of the sites where the Khmer Rouge executed prisoners transferred from S-21. A glass memorial stupa holds thousands of recovered skulls, and a self-guided audio tour walks the grounds with testimony from survivors and former guards.",
    highlights: [
      "Memorial stupa",
      "Audio tour with survivor testimony",
      "Quiet lakeside walking path",
    ],
    costPerDay: {
      budget: { stay: 10, food: 8, transport: 8, activity: 6 },
      mid: { stay: 35, food: 20, transport: 15, activity: 10 },
      luxury: { stay: 140, food: 55, transport: 35, activity: 20 },
    },
  },
  {
    slug: "battambang",
    image: "Battambang..JPG",
    name: "Battambang",
    region: "Battambang",
    category: "city",
    gallery: [{ image: "Battambang..JPG", caption: "Battambang" }],
    tags: ["colonial", "bamboo train", "art"],
    duration: 2,
    difficulty: "Easy",
    bestTime: "Nov – Feb",
    rating: 4.4,
    short: "Cambodia's best-preserved colonial townscape, plus a bamboo train.",
    description:
      "Cambodia's second city keeps rows of shuttered French shophouses along the Sangkae River, largely untouched by mass tourism. Ride the norry — a bamboo platform on rail wheels, driven by a small engine — out through rice paddies, and catch a circus performance by Phare Ponleu Selpak in the evening.",
    highlights: [
      "Bamboo train (norry) ride",
      "Phare Ponleu Selpak circus show",
      "Killing Caves at Phnom Sampov",
    ],
    costPerDay: {
      budget: { stay: 7, food: 7, transport: 6, activity: 10 },
      mid: { stay: 22, food: 16, transport: 12, activity: 18 },
      luxury: { stay: 85, food: 38, transport: 30, activity: 40 },
    },
  },
  {
    slug: "mondulkiri",
    image: "Tourists at Bou Sra Waterfall, Mondulkiri, Cambodia.jpg",
    name: "Mondulkiri",
    region: "Northeast Highlands",
    category: "adventure",
    gallery: [
      {
        image: "Tourists at Bou Sra Waterfall, Mondulkiri, Cambodia.jpg",
        caption: "Mondulkiri",
      },
    ],
    tags: ["elephants", "waterfalls", "highlands"],
    duration: 3,
    difficulty: "Moderate",
    bestTime: "Nov – Mar",
    rating: 4.7,
    short:
      "Cool pine-covered highlands, waterfalls, and ethical elephant sanctuaries.",
    description:
      "Mondulkiri's plateau sits noticeably cooler than the lowlands, home to Bunong indigenous communities and Cambodia's best ethical elephant sanctuaries, where you walk alongside retired working elephants rather than ride them. Bou Sra waterfall and jungle trekking round out a slower, greener side of the country.",
    highlights: [
      "Ethical elephant valley walk",
      "Bou Sra waterfall, two-tiered drop",
      "Bunong village jungle trek",
    ],
    costPerDay: {
      budget: { stay: 8, food: 8, transport: 12, activity: 20 },
      mid: { stay: 28, food: 18, transport: 22, activity: 45 },
      luxury: { stay: 110, food: 42, transport: 50, activity: 90 },
    },
  },
  {
    slug: "ratanakiri",
    image: "RattanakiriVillage.jpg",
    name: "Ratanakiri",
    region: "Northeast Highlands",
    category: "adventure",
    gallery: [{ image: "RattanakiriVillage.jpg", caption: "Ratanakiri" }],
    tags: ["volcanic lake", "remote", "trekking"],
    duration: 2,
    difficulty: "Moderate",
    bestTime: "Nov – Mar",
    rating: 4.3,
    short:
      "Red dirt roads, a crater lake, and Cambodia's most remote highlands.",
    description:
      "Cambodia's far northeast is red laterite roads, rubber and cashew plantations, and Yeak Laom — a near-perfectly circular volcanic crater lake sacred to local indigenous communities. It's the least visited of Cambodia's regions, best reached by a long but scenic overland journey.",
    highlights: [
      "Swim in Yeak Laom crater lake",
      "Indigenous village visit with a local guide",
      "Cha Ong waterfall",
    ],
    costPerDay: {
      budget: { stay: 8, food: 7, transport: 14, activity: 15 },
      mid: { stay: 25, food: 16, transport: 26, activity: 30 },
      luxury: { stay: 95, food: 40, transport: 55, activity: 60 },
    },
  },
  {
    slug: "chi-phat",
    image: "Stung Proat Cardamom Mountains.jpg",
    name: "Chi Phat",
    region: "Coastal South",
    category: "nature",
    gallery: [
      { image: "Stung Proat Cardamom Mountains.jpg", caption: "Chi Phat" },
    ],
    tags: ["UNESCO", "mountaintop", "remote"],
    duration: 2,
    difficulty: "Moderate",
    bestTime: "Nov – Feb",
    rating: 4.8,
    short: "A cliff-edge mountaintop temple with the country's best view.",
    description:
      "Strung along a ridge of the Dangrek Mountains, Preah Vihear predates Angkor and commands a sheer 500-metre drop over the Cambodian plain. Far fewer visitors make the long trip north, which means empty causeways, unhurried custodian monks, and one of the most dramatic temple settings in Southeast Asia.",
    highlights: [
      "525m of processional causeways along the cliff",
      "Sunrise view over the plains below",
      "Combine with Koh Ker's step pyramid en route",
    ],
    costPerDay: {
      budget: { stay: 8, food: 7, transport: 16, activity: 12 },
      mid: { stay: 24, food: 16, transport: 30, activity: 22 },
      luxury: { stay: 90, food: 40, transport: 60, activity: 45 },
    },
  },
  {
    slug: "phnom-kulen",
    image: "PhnomKulen.jpg",
    name: "Phnom Kulen National Park",
    region: "Siem Reap",
    category: "nature",
    gallery: [
      { image: "PhnomKulen.jpg", caption: "Phnom Kulen National Park" },
    ],
    tags: ["waterfall", "sacred mountain", "birthplace of Angkor"],
    duration: 1,
    difficulty: "Moderate",
    bestTime: "Nov – Mar",
    rating: 4.6,
    short:
      "Cambodia's most sacred mountain — waterfalls, a reclining Buddha, and the birthplace of the Khmer Empire.",
    description:
      "Roughly 50km north of Siem Reap, Phnom Kulen is where King Jayavarman II is said to have declared independence in 802 CE, founding the Khmer Empire that would go on to build Angkor. A forest trail leads past the River of a Thousand Lingas, a stretch of riverbed carved with Hindu deities and stone lingas, up to Preah Ang Thom — a 16th-century pagoda built around an eight-metre reclining Buddha cut into a sandstone boulder. The trail ends at the mountain's waterfall, where locals and visitors swim together in the pool below.",
    highlights: [
      "River of a Thousand Lingas carved into the riverbed",
      "16th-century reclining Buddha at Preah Ang Thom",
      "Swim in the pool beneath Kulen Waterfall",
    ],
    costPerDay: {
      budget: { stay: 9, food: 8, transport: 16, activity: 15 },
      mid: { stay: 30, food: 18, transport: 28, activity: 25 },
      luxury: { stay: 110, food: 42, transport: 55, activity: 50 },
    },
  },
  {
    slug: "koh-ker",
    image: "Prasat Thom 1.jpg",
    name: "Koh Ker",
    region: "Preah Vihear",
    category: "heritage",
    gallery: [{ image: "Prasat Thom 1.jpg", caption: "Koh Ker" }],
    tags: ["UNESCO", "pyramid temple", "off the beaten path"],
    duration: 1,
    difficulty: "Moderate",
    bestTime: "Nov – Feb",
    rating: 4.7,
    short:
      "A forgotten 10th-century capital, built around Cambodia's only pyramid temple.",
    description:
      "For a brief sixteen years (928–944 CE), Koh Ker was the capital of the Khmer Empire under King Jayavarman IV, who moved the seat of power away from Angkor and raised around forty temples here in just over a decade. Its centrepiece, Prasat Thom, is a seven-tiered sandstone pyramid rising 36 metres — thought to represent Mount Meru — with a wooden staircase visitors can still climb for a view over the surrounding jungle. Power shifted back to Angkor after Jayavarman IV's death, and the site was largely reclaimed by forest until landmine clearance and, in 2023, UNESCO World Heritage status brought it back into reach.",
    highlights: [
      "Climb the seven-tiered Prasat Thom pyramid",
      "Explore dozens of smaller temples scattered through the forest",
      "Combine with Beng Mealea and Preah Vihear for a northern loop",
    ],
    costPerDay: {
      budget: { stay: 9, food: 7, transport: 18, activity: 15 },
      mid: { stay: 26, food: 16, transport: 32, activity: 25 },
      luxury: { stay: 95, food: 40, transport: 60, activity: 50 },
    },
  },
  {
    slug: "wat-phnom",
    image: "Wat Phnom-Phnom Penh-Cambodia.jpg",
    name: "Wat Phnom",
    region: "Phnom Penh",
    category: "city",
    gallery: [
      { image: "Wat Phnom-Phnom Penh-Cambodia.jpg", caption: "Wat Phnom" },
    ],
    tags: ["hilltop shrine", "city origin story"],
    duration: 1,
    difficulty: "Easy",
    bestTime: "Year-round",
    rating: 4.3,
    short: "The hilltop shrine that gave Phnom Penh its name.",
    description:
      "Wat Phnom sits on a 27-metre artificial hill at the north end of the capital — the oldest religious site in the city, first built in 1372 and rebuilt several times since, most recently in 1926. Legend holds that a widow named Lady Penh found four Buddha statues drifting inside a hollow tree on the river and raised the hill to house them in a shrine, giving the settlement that grew up around it — and eventually the city — her name: Phnom Penh, 'Penh's Hill'. A stupa on the grounds is said to hold the ashes of King Ponhea Yat, who moved the Khmer capital here in the 15th century.",
    highlights: [
      "Naga-flanked staircase up to the hilltop shrine",
      "Stupa said to hold the ashes of King Ponhea Yat",
      "Easy pairing with a riverside walk at sunset",
    ],
    costPerDay: {
      budget: { stay: 10, food: 8, transport: 5, activity: 4 },
      mid: { stay: 35, food: 20, transport: 10, activity: 8 },
      luxury: { stay: 140, food: 55, transport: 30, activity: 15 },
    },
  },
];

export function getDestinationBySlug(slug) {
  return destinations.find((d) => d.slug === slug);
}

// Destination photos are real, freely-licensed images hosted on Wikimedia
// Commons (each destination's `image` field is the exact Commons filename).
// Special:FilePath is a stable redirect that resolves a filename straight to
// the current file (optionally thumbnailed with ?width=), so we never have
// to know the internal upload hash.
export function commonsImageUrl(filename, width = 1200) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
    filename,
  )}?width=${width}`;
}

export function commonsFileUrl(filename) {
  return `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename)}`;
}

export function tierDailyTotal(destination, tier) {
  const c = destination.costPerDay[tier];
  return c.stay + c.food + c.transport + c.activity;
}

export const budgetTiers = [
  {
    id: "budget",
    label: "Backpacker",
    note: "Hostels, street food, local buses",
  },
  {
    id: "mid",
    label: "Mid-range",
    note: "3★ guesthouses, mixed dining, private drivers",
  },
  {
    id: "luxury",
    label: "Comfort+",
    note: "4–5★ stays, guided tours, private transfers",
  },
];
