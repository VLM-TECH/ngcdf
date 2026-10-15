import photoFiles from './photoFiles.json'

export const categories = [
  'Education',
  'Infrastructure',
  'Security',
  'Electrification',
  'Water',
  'Health',
  'Youth & Sports',
  'Bursaries',
  'Community development',
  'Housing & Trade',
  'Social welfare',
  'Environment',
  'Other'
]

const image = (file) => `/assets/photobook/${file}`

export const projects = [
  {
    slug: 'historic-storey-classroom-buildings',
    name: 'Historic storey classroom buildings',
    location: 'Sabatia Constituency',
    category: 'Education',
    excerpt: 'One constituency-wide story of modern multi-storey classrooms and expanded learning space.',
    description: 'Across Sabatia, modern multi-storey classroom buildings are giving learners more room to learn and schools more space to grow. The combined story brings together the labeled storey-building projects documented across the supplied newsletter and photobook.',
    story: "For the first time since Kenya attained independence, public primary schools in Sabatia Constituency are proudly hosting modern multi-storey classroom buildings — a historic milestone that has transformed the face of education.\n\nThese structures are more than architectural landmarks. Designed to maximize learning space and provide a modern educational environment, they have eased classroom congestion and created a setting where learners can thrive.\n\nWithin the last four years, landmark storey-building projects have been completed at Kivagala Primary School in North Maragoli Ward, Ondeyo Primary School in Izava-Lyaduywa Ward, Galoni Primary School in West Sabatia Ward, Mwilitsa Primary School in Busali Ward, Sabatia Primary School in Wodanga Ward, and Havuyiya Primary School in Chavakali Ward. Tsimbalo Primary School in Izava-Lyaduywa Ward remains ongoing.\n\nSeven storey buildings are represented in the story: six completed and one ongoing, across six wards. The photobook’s Storey Buildings spread also labels Bugina Secondary School, Kapsambo Primary School, Mwilitsa Primary School, Chandumba Secondary School, Kivagala Primary School, Igunga Girls Senior School laboratory, Munoywa Technical Lab, the Mukingi Secondary School water tower, Mululu Dormitory, and a section of Havuyiya Storey Building.",
    purpose: 'Expand learning space, ease classroom congestion, and strengthen the everyday classroom environment across the constituency.',
    status: 'Completed / showcased',
    images: ['photo-001.jpg', 'photo-004.jpg', 'photo-005.jpg', 'photo-006.jpg', 'photo-007.jpg', 'photo-008.jpg', 'photo-009.jpg', 'photo-010.jpg', 'photo-011.jpg', 'photo-013.jpg', 'photo-014.jpg', 'photo-015.jpg'],
    stats: ['Document statistic: 7 storey buildings', '6 completed / 1 ongoing', '6 wards represented'],
    source: 'Newsletter: “Historic Storey Classrooms”.'
  },
  {
    slug: 'chandumba-secondary-school',
    name: 'Chandumba Secondary School tuition block',
    location: 'Sabatia Constituency',
    category: 'Education',
    excerpt: 'A modern tuition block built for better learning.',
    description: 'At Chandumba Secondary School, a modern tuition block is already part of the school day. Students are learning in new classroom space built to make lessons more focused and the school more prepared for its future.',
    purpose: 'Create better learning conditions and additional classroom space.',
    status: 'Showcased in 2022–2026 materials',
    images: ['photo-010.jpg', 'photo-007.jpg'],
    source: 'Newsletter caption; photobook: “Chandumba students learning in their new classroom”.'
  },
  {
    slug: 'munoywa-technical-lab',
    name: 'Munoywa Technical Lab',
    location: 'Sabatia Constituency',
    category: 'Education',
    excerpt: 'A technical laboratory commissioned for practical learning.',
    description: 'At Munoywa, a modern technical laboratory is bringing practical learning closer to students. The laboratory was commissioned with students present, marking a new chapter for skills-based learning at the school.',
    purpose: 'Support practical, skills-oriented learning.',
    status: 'Commissioned / showcased',
    images: ['photo-038.jpg', 'photo-039.jpg'],
    source: 'Newsletter photograph caption; photobook: “Munoywa Technical Lab”.'
  },
  {
    slug: 'lusengeli-secondary-school-lab',
    name: 'Lusengeli Secondary School modern laboratory',
    location: 'Sabatia Constituency',
    category: 'Education',
    excerpt: 'A solar-powered laboratory inspiring practical learning.',
    description: 'At Lusengeli Secondary School, a modern laboratory is powered by the sun and built to make practical learning part of everyday school life.',
    purpose: 'Make practical science learning more accessible and resilient.',
    status: 'Showcased in 2022–2026 materials',
    images: ['photo-033.jpg', 'photo-034.jpg'],
    source: 'Newsletter and photobook: “Lusengeli Sec School Labs”.'
  },
  {
    slug: 'givudiani-secondary-school-jss',
    name: 'Givudiani Secondary School JSS classrooms',
    location: 'Sabatia Constituency',
    category: 'Education',
    excerpt: 'Modern JSS classrooms setting the pace across the constituency.',
    description: 'At Givudiani Secondary School, modern Junior Secondary School classrooms are setting a new pace for learning across the constituency.',
    purpose: 'Support the JSS learning environment with purpose-built classrooms.',
    status: 'Showcased in 2022–2026 materials',
    images: ['photo-016.jpg', 'photo-017.jpg'],
    source: 'Newsletter and photobook captions.'
  },
  {
    slug: 'mukingi-secondary-school-water',
    name: 'Mukingi Secondary School raised solar-powered water tank',
    location: 'Mukingi',
    category: 'Water',
    excerpt: 'Reliable water delivered from a borehole through a raised solar-powered tank.',
    description: 'At Mukingi Secondary School, a raised solar-powered water tank draws reliable water from the borehole and brings it into the school’s daily routine.',
    purpose: 'Improve dependable access to water at the school.',
    status: 'Showcased in 2022–2026 materials',
    images: ['photo-012.jpg', 'photo-042.jpg'],
    source: 'Newsletter caption: “Mukingi secondary school a raised solar-powered water tank”.'
  },
  {
    slug: 'sabatia-kmtc-kegondi',
    name: 'Sabatia KMTC at Kegondi',
    location: 'Kegondi',
    category: 'Health',
    excerpt: 'A new health training campus nearing completion.',
    description: 'At Kegondi, the Sabatia KMTC campus is nearing completion. Construction began in 2022 at a cost of KSh 75.7 million, and the first students are expected in March 2027. Behind the gate and perimeter fence, the campus brings together classrooms, laboratories, offices, and sanitation facilities.',
    story: "A vision conceived in 2022 is steadily taking shape at Kegondi Village in West Sabatia Ward. The construction of Sabatia Kenya Medical Training College is set to open a new chapter in health-professional training within the constituency.\n\nGroundbroken in 2022, the KSh 75.7 million project is nearing completion and is expected to welcome its first intake of students in March 2027. Once operational, the institution will provide young people with professional health training closer to home while contributing to the country’s health workforce.\n\nThe college has classrooms, laboratories, administration and other relevant offices, sanitation facilities, a gate, and a fence. These facilities are intended to give students an appropriate environment for academic instruction and practical preparation for careers in the health sector.\n\nThe college’s proximity to Kegondi Health Centre presents an important opportunity. The health facility could serve as a practical learning environment where students apply classroom knowledge within a community healthcare setting. The eventual upgrade of Kegondi Health Centre to a Level 3 facility would further enhance healthcare services available to residents.\n\nA major contribution came from the people of Kegondi, who donated the land for the institution. Their decision reflects a strong commitment to community development and ensures that the land will continue serving a public purpose for generations of learners and healthcare professionals.\n\nThe college is also expected to stimulate economic activity through demand for accommodation, food, transport, retail, and other services, while creating employment opportunities associated with the college and businesses serving students and staff.\n\n“What is rising at Kegondi is therefore not merely a new college, but an institution designed to equip young people with skills that can serve communities far beyond Sabatia.”",
    purpose: 'Expand access to health-professional training, practical learning, and community healthcare capacity closer to home.',
    status: 'Nearing completion; first admission expected March 2027',
    stats: ['Construction began: 2022', 'Reported cost: KSh 75.7 million', 'Expected first students: March 2027'],
    images: ['photo-074.jpg', 'photo-075.jpg', 'photo-076.jpg', 'photo-077.jpg'],
    source: 'Newsletter: “Sabatia KMTC at Kegondi”.'
  },
  {
    slug: 'maganyi-bridge',
    name: 'Maganyi Bridge',
    location: 'Busali Ward to Muhudu, Hamisi Constituency',
    category: 'Infrastructure',
    excerpt: 'A safer crossing connecting neighbouring communities and markets.',
    description: 'Maganyi Bridge now connects Busali Ward to Muhudu in neighbouring Hamisi Constituency. The crossing creates a safer route for people and goods, opens easier access to schools and healthcare facilities, and strengthens trade between neighbouring communities.',
    story: "Maganyi Bridge connects Busali Ward to Muhudu in neighbouring Hamisi Constituency. Beyond providing a safe crossing, the bridge has strengthened trade between the two constituencies, improved access to schools and healthcare facilities, and reinforced the long-standing social and economic ties shared by neighbouring communities.",
    purpose: 'Create a safe crossing and strengthen social and economic links.',
    status: 'Showcased in 2022–2026 materials',
    images: ['photo-088.jpg', 'photo-089.jpg'],
    source: 'Newsletter: “Another landmark project is the Maganyi Bridge”.'
  },
  {
    slug: 'busamu-crossing-point',
    name: 'Busamu Crossing Point',
    location: 'Lwaduywa and Izava, linking to Emuhaya',
    category: 'Infrastructure',
    excerpt: 'A crossing point that made daily movement safer and easier.',
    description: 'For residents of Lwaduywa and Izava, the Busamu Crossing Point replaces years of difficult and sometimes dangerous movement with a safer link to neighbouring Emuhaya. Daily journeys, trade, and social connections can now move more easily.',
    story: "For residents of Lwaduywa and Izava, the construction of the Busamu Crossing Point has ended years of difficult and sometimes dangerous movement. By linking the area with neighbouring Emuhaya, the crossing has improved daily mobility, enhanced safety, and made economic and social interaction significantly easier.",
    purpose: 'Improve mobility, safety, and economic and social interaction.',
    status: 'Showcased in 2022–2026 materials',
    images: ['photo-088.jpg', 'photo-089.jpg'],
    source: 'Newsletter: “For residents of Lwaduywa and Izava…”.'
  },
  {
    slug: 'loveyi-bridge',
    name: 'Loveyi Bridge',
    location: 'Wodanga and Busali',
    category: 'Infrastructure',
    excerpt: 'A year-round link for learners, farmers, and neighbouring communities.',
    description: 'The Loveyi Bridge links Wodanga and Busali with a safe, reliable route throughout the year. Learners from Lusengeli Primary, Lusengeli Secondary, and Lososi Primary can cross safely, while farmers on both sides of the river can take their produce to market whatever the weather.',
    story: "The Loveyi Bridge, linking Wodanga and Busali, has transformed movement between the two communities. Residents who once depended on unsafe river crossings now have safe, reliable access throughout the year.\n\nLearners from Lusengeli Primary School, Lusengeli Secondary School, and Lososi Primary School can cross safely. Farmers on both sides of the river can transport their produce to markets regardless of the weather.",
    purpose: 'Replace unsafe river crossings with reliable movement throughout the year.',
    status: 'Showcased in 2022–2026 materials',
    images: ['photo-088.jpg', 'photo-089.jpg'],
    source: 'Newsletter: “The Loveyi Bridge, linking Wodanga and Busali…”.'
  },
  {
    slug: 'chavakali-eregi-road',
    name: 'Chavakali–Eregi Road',
    location: 'West Sabatia Ward, connecting Vihiga and Kakamega counties',
    category: 'Infrastructure',
    excerpt: 'A 10.9-kilometre strategic transport corridor for regional trade.',
    description: 'Stretching 10.9 kilometres through West Sabatia Ward, the Chavakali–Eregi Road is becoming a strategic link between Vihiga and Kakamega counties. Once completed, it will carry residents, traders, and students more efficiently, support regional trade, and help reduce transport costs.',
    story: "Among the most significant infrastructure projects is the 10.9-kilometre Chavakali–Eregi Road, a strategic transport corridor connecting Vihiga and Kakamega counties through West Sabatia Ward. Once completed, the road will improve regional trade, reduce transport costs, and provide thousands of residents, traders, students, and motorists with safer and faster movement.\n\n“On behalf of the people of Sabatia and our neighbours from Ikolomani who rely on this road daily, I sincerely thank your Government for prioritising this important project. Sabatia still has limited tarmac road coverage, and I appeal for additional investment to expand our road network.” — Hon. Clement Sloya, Chavakali–Eregi–Lusiola Road launch",
    purpose: 'Improve mobility, connect communities, and unlock economic opportunity.',
    status: 'In progress / once completed language preserved from source',
    stats: ['Length: 10.9 kilometres'],
    images: ['photo-084.jpg', 'photo-086.jpg', 'photo-087.jpg', 'photo-105.jpg'],
    source: 'Newsletter and photobook: “Tarmacking Roads, Unlocking Economic Growth”.'
  },
  {
    slug: 'mago-mululu-lusui-road',
    name: 'Mago–Mululu–Lusui Road works',
    location: 'Sabatia Constituency',
    category: 'Infrastructure',
    excerpt: 'Road works documented as part of the constituency infrastructure programme.',
    description: 'The 21-kilometre Mago–Mululu–Wangulu–Vokoli–Lusui Road is opening up parts of Busali, North Maragoli, and West Sabatia. Better access means easier journeys to markets, schools, health facilities, and government services. The source also preserves the everyday reality behind the project: mud made the route impassable in the rains, while dust slowed travel in the dry season.',
    story: "Development is best measured not by promises made, but by the tangible improvements in people’s daily lives. The 21-kilometre Mago–Mululu–Wangulu–Vokoli–Lusui Road serves Busali, North Maragoli, and West Sabatia wards. It is opening up previously underserved areas by improving access to markets, schools, health facilities, and government services.\n\n“This road has been a challenge throughout the year. During the rainy season it became impassable because of mud, while in the dry season dust affected both passengers and business. We appreciate the efforts that have made this road possible because it will greatly improve our work and livelihoods.” — A boda boda operator\n\n“For many years, getting home during the rainy season was extremely difficult because the roads became impassable. Boda boda operators often refused to use the route or charged very high fares. The tarmacking of this road has greatly improved accessibility for our community.” — A resident of Mululu\n\n“Many shops had closed because business was declining. Since construction of the road began, the market has come back to life. Distributors now use this route, transport costs have reduced, businesses are growing, and demand for rental houses has increased due to students from nearby institutions.” — A trader at Chamakanga Market",
    purpose: 'Improve local movement, connect underserved areas, and make daily work and essential services more reachable.',
    status: 'Road project highlighted in 2022–2026 newsletter',
    stats: ['Length: 21 kilometres', 'Wards served: Busali, North Maragoli and West Sabatia'],
    testimonials: ['A boda boda operator: “During the rainy season it became impassable because of mud, while in the dry season dust affected both passengers and business.”', 'A resident of Mululu: “The tarmacking of this road has greatly improved accessibility for our community.”', 'A trader at Chamakanga Market: “Since construction of the road began, the market has come back to life.”'],
    images: ['photo-084.jpg', 'photo-086.jpg'],
    source: 'Newsletter: “Mago–Mululu–Wangulu–Vokoli–Lusui Road”; photobook: “Works at Mago Mululu Lusui Road”.'
  },
  {
    slug: 'assistant-chiefs-offices',
    name: 'Assistant Chiefs’ offices',
    location: 'Multiple wards across Sabatia',
    category: 'Security',
    excerpt: 'Grassroots National Government Administration infrastructure across the constituency.',
    description: 'Across Sabatia, new Assistant Chiefs’ offices are bringing National Government Administration closer to the communities it serves. The programme reaches Gaigedi in Wodanga; Kedoli, Budaywa, Itegero, and Chamakanga in Busali; Kisatiru and Hamuyundi in West Sabatia; Walodeya in Chavakali; Mbale and Demesi in Izava; and Mulundu in North Maragoli. Land was purchased for all except Budaywa and Kedoli.',
    story: "Since assuming office in August 2022, Hon. Clement Sloya has placed security at the centre of Sabatia’s development agenda, recognizing that meaningful development can only thrive where people feel safe, protected, and connected to the institutions that serve them.\n\nA cornerstone of this effort has been strengthening the presence of National Government Administration Officers at the grassroots. Assistant Chiefs’ offices have been constructed at Gaigedi in Wodanga; Kedoli, Budaywa, Itegero, and Chamakanga in Busali; Kisatiru and Hamuyundi in West Sabatia; Walodeya in Chavakali; Mbale and Demesi in Izava; and Mulundu in North Maragoli. Land was purchased for all except Budaywa and Kedoli.\n\nBetter roads make it easier for security personnel and emergency responders to reach villages and remote areas, particularly during emergencies. Continued expansion of electricity also improves visibility around homes, businesses, and market centres at night. The document counts 11 offices, nine built on newly purchased land, across six wards.",
    purpose: 'Strengthen the presence of National Government Administration Officers at the grassroots and connect people to institutions that serve them.',
    status: 'Multiple offices constructed / showcased',
    stats: ['11 Assistant Chiefs’ offices', '9 built on newly purchased land', '6 wards covered', 'Land purchased for all except Budaywa and Kedoli'],
    images: ['photo-079.jpg', 'photo-080.jpg', 'photo-081.jpg', 'photo-082.jpg', 'photo-083.jpg'],
    source: 'Newsletter security section; photobook: “New Chiefs Offices”.'
  },
  {
    slug: 'rural-electrification',
    name: 'Rural electrification works',
    location: 'Mbesu Village / North Maragoli, Evojo, Igunga–Lusala, Hekerongo, Demesi and Nadanya',
    category: 'Electrification',
    excerpt: 'Poles, transformers, and electrical works extending access to more places.',
    description: 'The promise to light up Sabatia is taking shape across all six wards. Rural Electrification, Last Mile Connectivity, and Maximization of Transformers have reached 12 villages and more than 1,673 households, with the work visible in poles, transformers, and installations at Mbesu Village, Evojo, Igunga–Lusala, Hekerongo, Demesi, and Nadanya.',
    story: "In 2022, Hon. Clement Sloya promised to light up Sabatia Constituency by expanding electricity access to more homes and villages. Four years on, that commitment is taking shape through Rural Electrification, Last Mile Connectivity, and Maximization of Transformers, implemented by REREC.\n\nThe programme has reached 12 villages across all six wards. More than 1,673 households are benefiting: 461 in Izava-Lyaduywa, 323 in North Maragoli, 286 in Wodanga, 247 in Busali, 216 in West Sabatia, and 140 in Chavakali.\n\nThe promise to light up Sabatia is becoming a reality: more connections, more light, and more opportunity.",
    purpose: 'Expand access to electricity, improve visibility at night, and create safer conditions around homes, businesses, and market centres.',
    status: 'Electricity expansion highlighted in 2022–2026 newsletter',
    stats: ['More than 1,673 households benefiting', '12 villages reached', 'All six wards covered', 'Izava-Lyaduywa: 461', 'North Maragoli: 323', 'Wodanga: 286', 'Busali: 247', 'West Sabatia: 216', 'Chavakali: 140'],
    images: ['photo-090.jpg', 'photo-094.jpg', 'photo-095.jpg', 'photo-098.jpg'],
    source: 'Newsletter security context and photobook: “Rural Electrification”.'
  },
  {
    slug: 'education-renovations-and-jss',
    name: 'Education renovations and new classrooms',
    location: 'Multiple schools across Sabatia',
    category: 'Education',
    excerpt: 'A broad programme of new classrooms, JSS spaces, labs, renovations, and school improvements.',
    description: 'Across Givudiani Primary, Ikuvu Primary, Chamasilihi Primary, Wndega/Wandega Primary, Wamage Primary, Hamadira Primary, Itegero Primary, Mambai Primary, Viyalo Primary, Jemovo Secondary, Mudngu Primary, Lyaduywa Primary, Isitsi Primary, Wangulu Secondary, Bugina Secondary, Kapsambo Primary, Hamuyundi Primary, Davanga Primary, Vihindi Primary, Mbale Primary, and Kigama Primary, school spaces are being renewed. The work includes JSS classrooms, renovated classrooms, ICT labs, laboratories, dining space, storey buildings, and new tiled floors.',
    story: "Most of Sabatia’s 105 public primary schools are still using ageing classrooms constructed decades ago, making renovation a priority. Renovation works have been completed at Davanga, Isizi, Lwaduywa, Mukingi, and Hamadira Primary Schools in Izava-Lyaduywa Ward; Viyalo and Mudete in Chavakali Ward; Keveye, Madegwa, and Vihindi in West Sabatia Ward; Gaigedi, Kapsambo, Ikobero, and Elunyu in Busali Ward; and Mulundu, Mutambi, and Ikuvu in North Maragoli Ward.\n\nLand has already been acquired for Lososi Primary School in Wodanga Ward and Hakerongo Primary School in Busali Ward. Acquisition is underway for Igada and Mukomba Primary Schools in North Maragoli Ward.\n\nMululu Primary School stands out as one of Sabatia’s leading public primary schools, with a growing boarding section attracting learners from within and beyond the surrounding community. To provide safe and adequate accommodation, Sabatia NG-CDF prioritized the construction and equipping of a modern dormitory at the school.\n\nThe document counts 16 schools renovated, 105 public primary schools in the wider context, and a 2+2 land-acquisition status: two acquired and two underway.",
    purpose: 'Improve school facilities across different learning stages and needs.',
    status: 'Multiple works documented in photobook',
    stats: ['Source spelling discrepancy retained: Wndega / Wandega'],
    images: ['photo-013.jpg', 'photo-016.jpg', 'photo-019.jpg', 'photo-023.jpg', 'photo-033.jpg', 'photo-038.jpg', 'photo-047.jpg', 'photo-048.jpg', 'photo-052.jpg'],
    source: 'Photobook: “New Class Rooms & Renovations”, “New floors fitted with tiles”, and school captions.'
  },
  {
    slug: 'sanitation-and-ablution-blocks',
    name: 'Sanitation and ablution blocks',
    location: 'Schools across Sabatia Constituency',
    category: 'Education',
    excerpt: 'A source section dedicated to new ablution blocks and safer school facilities.',
    description: 'Ablution blocks are adding safer, more dignified sanitation spaces to schools across Sabatia. The supplied materials do not provide a complete institution-by-institution list, so this story stays at the constituency level rather than guessing which schools are included.',
    purpose: 'Improve sanitation infrastructure in learning environments.',
    status: 'Source section documented',
    images: ['photo-060.jpg', 'photo-061.jpg', 'photo-068.jpg'],
    source: 'Newsletter message from the Fund Account Manager and photobook: “Ablution Blocks”.'
  },
  {
    slug: 'bursary-support',
    name: 'Expanded bursary support',
    location: 'Sabatia Constituency',
    category: 'Bursaries',
    excerpt: 'Support for thousands of deserving students across education levels.',
    description: 'For thousands of deserving students, bursary support is helping keep education within reach. The programme covers secondary schools, special needs education, universities, and tertiary study. The individual figures in the source table are not legible, so this story does not add numbers that cannot be verified.',
    purpose: 'Help deserving students access and continue education.',
    status: 'Support programme highlighted in newsletter',
    source: 'Newsletter: foreword and bursary table.'
  },
  {
    slug: 'sports',
    name: 'Sports',
    location: 'Sabatia Constituency',
    category: 'Youth & Sports',
    excerpt: 'A photobook section documenting community sport and recognition.',
    description: 'On the sports pages, teams gather, compete, and celebrate with trophies. The supplied materials do not name a specific sports project or event, so the story stays with the community spirit visible in the photographs.',
    purpose: 'Support community sport and youth participation as documented in the source section.',
    status: 'Source section documented',
    images: ['photo-099.jpg', 'photo-100.jpg', 'photo-101.jpg', 'photo-102.jpg'],
    source: 'Photobook: “Sports”.'
  },
  {
    slug: 'land-acquisition-future-expansion',
    name: 'Land acquisition for future expansion',
    location: 'Sabatia Constituency',
    category: 'Community development',
    excerpt: 'Land secured for future public expansion, as identified in the newsletter.',
    description: 'Sabatia is also securing room for what comes next. Land acquisition for future expansion is part of the development story, with the Assistant Chiefs’ office programme recording land purchases for every named office except Budaywa and Kedoli.',
    purpose: 'Protect room for future public infrastructure and service growth.',
    status: 'Source section documented',
    source: 'Newsletter: “Land acquisition for future expansion”.'
  },
  {
    slug: 'ng-cdf-board-members',
    name: 'Sabatia NG-CDF Board Members',
    location: 'Sabatia Constituency',
    category: 'Other',
    excerpt: 'The people and governance structure behind the public development programme.',
    description: 'The people behind the programme matter too. The photobook closes with the Sabatia NG-CDF Board Members, acknowledging the governance and shared responsibility behind the work. Individual names are not legible in the supplied text extraction, so the roster stays unnamed.',
    purpose: 'Document the governance context of the 2022–2026 programme.',
    status: 'Source section documented',
    images: ['photo-103.jpg'],
    source: 'Photobook: “Sabatia NG CDF Board Members”.'
  },
  {
    slug: 'cbc-junior-secondary-classrooms',
    name: 'CBC Junior Secondary classrooms',
    location: 'Multiple wards across Sabatia',
    category: 'Education',
    excerpt: 'Purpose-built classrooms helping schools make the transition into Junior Secondary education.',
    description: 'As the Competency-Based Curriculum created demand for more learning space, Sabatia responded with modern Junior Secondary classrooms. Mudungu, Givudianyi, and Gaigedi Primary Schools in Wodanga; Kivuye in Busali; Kigama and Mutambi in North Maragoli; Chavakali and Wamage; Hamuyundi, Selelwe, Chandumba and Keveye; and Boyusuf, Chamasilihi, Monoywa, Elwunza and Demesi are named among the schools reached.',
    story: "The introduction of the Competency-Based Curriculum ushered in a new era of education and an urgent need for additional learning spaces. Sabatia responded by constructing modern Junior Secondary classrooms with tiled floors, spacious interiors, excellent ventilation, ample natural lighting, and durable finishes that support quality teaching and learning.\n\nThe projects are named at Mudungu, Givudianyi, and Gaigedi Primary Schools in Wodanga Ward; Kivuye Primary School in Busali Ward; Kigama and Mutambi Primary Schools in North Maragoli Ward; Chavakali and Wamage Primary Schools in Chavakali Ward; Hamuyundi, Selelwe, Chandumba, and Keveye Primary Schools in West Sabatia Ward; and Boyusuf, Chamasilihi, Monoywa, Elwunza, and Demesi Primary Schools in Izava-Lyaduywa Ward.\n\nThese classrooms have expanded learning capacity, reduced congestion, and supported a smoother transition into Junior Secondary education. The document counts 19 schools with new JSS classrooms across all six wards.",
    purpose: 'Expand learning capacity, reduce congestion, and give learners a smoother transition into Junior Secondary education.',
    status: 'Several projects completed / highlighted in newsletter',
    source: 'Newsletter: “Junior Secondary Classrooms — Preparing for CBC”.'
  },
  {
    slug: 'sanitation-schools-programme',
    name: 'Modern school sanitation programme',
    location: 'Schools across six wards',
    category: 'Education',
    excerpt: 'New ablution blocks are making schools safer, healthier, and more dignified places to learn.',
    description: 'A modern sanitation programme is changing the school day in Sabatia. Completed ablution blocks are named at Gahumbwa, Vokoli, Lusengeli, Wagevi, Jemovo, Chavakali, Walodeya, Evojo, Mulele, Kisatiru, Ivona, Kigulienyi, Ellongo, Endeli, Mbale, Munugi, Bugina, Wandega, Logemo, Itegero, Kapsambo, Mwilitsa, and Chavogere Primary Schools.',
    story: "Quality education begins with a healthy and safe learning environment. At the beginning of the programme, several schools struggled with inadequate sanitation, exposing learners to health risks and, in some cases, threatening school operations through letters of closure from the public health department. Today, that story has changed dramatically.\n\nModern ablution blocks have been completed at Gahumbwa, Vokoli, Lusengeli, Wagevi, and Jemovo Primary Schools in Wodanga Ward; Chavakali, Walodeya, and Evojo in Chavakali Ward; Mulele, Kisatiru, Ivona, and Kigulienyi in West Sabatia Ward; Ellongo, Endeli, Mbale, and Munugi in Izava-Lyaduywa Ward; and Bugina, Wandega, Logemo, Itegero, Kapsambo, Mwilitsa, and Chavogere in Busali Ward.\n\nThese facilities have improved hygiene, protected learner health, enhanced dignity, and created safer school environments for boys and girls. The document counts 19 schools with new ablution blocks across five wards.",
    purpose: 'Protect learner health, improve hygiene, and give boys and girls safer, more dignified school environments.',
    status: 'Completed facilities highlighted in newsletter',
    stats: ['Document statistic: 19 schools with new ablution blocks', 'Named schools in list: 23', '5 wards covered'],
    images: ['photo-060.jpg', 'photo-061.jpg', 'photo-068.jpg'],
    source: 'Newsletter: “Modern Ablution Blocks & Sanitation”.'
  },
  {
    slug: 'senior-schools-stem-laboratories',
    name: 'Senior schools and STEM laboratories',
    location: 'Evojo, Munonywa, Lusengeli, Digula, Kapsambo and Igunga Girls',
    category: 'Education',
    excerpt: 'Science and technology spaces built for hands-on learning and future careers.',
    description: 'Across Sabatia, science learning is moving beyond the textbook. Modern laboratories with workstations, fume hoods, gas valves, water systems, and preparation rooms are named at Evojo Senior School, Munonywa Technical Senior School, Lusengeli Senior School, Digula Senior School, and Kapsambo Senior School. At Igunga Girls Senior School, a twin laboratory complex brings Chemistry, Biology, and Physics together. Wangulu Senior School has also received 20 computers for digital learning.',
    story: "Science, Technology, Engineering, and Mathematics form the backbone of modern economies. To help Sabatia students remain competitive, modern science laboratories with workstations, chemical fume hoods, gas valves, water supply systems, and preparation rooms have been established at Evojo Senior School, Munonywa Technical Senior School, Lusengeli Senior School, Digula Senior School, and Kapsambo Senior School.\n\nAt Igunga Girls Senior School, a modern one-storey twin laboratory complex accommodates Chemistry, Biology, and Physics laboratories. The investment creates an enabling environment where young women can pursue science-based careers through hands-on learning aligned with the Competency-Based Education framework.\n\nChandumba Senior School has a multimillion two-storey tuition block with classrooms on the ground floor, two fully equipped science laboratories on the first floor, and a modern ICT laboratory and spacious library on the top floor. Wangulu Senior School has received 20 computers to strengthen digital learning and computer literacy.\n\nThe document counts five schools with new science labs, three labs at Igunga Girls, and 20 computers at Wangulu.",
    purpose: 'Give learners practical science, technology, and digital skills that connect today’s classroom to tomorrow’s opportunities.',
    status: 'Laboratories and ICT investment highlighted in newsletter',
    stats: ['Five schools with new science labs', 'Igunga Girls: Chemistry, Biology and Physics labs', 'Wangulu Senior School: 20 computers'],
    images: ['photo-033.jpg', 'photo-034.jpg', 'photo-038.jpg', 'photo-039.jpg'],
    source: 'Newsletter: “Senior Schools & STEM Laboratories”.'
  },
  {
    slug: 'bursary-decentralized-support',
    name: 'Bursary support closer to families',
    location: 'Sabatia Constituency',
    category: 'Bursaries',
    excerpt: 'A bursary process designed to bring application forms closer to the people who need them.',
    description: 'More than KSh 190 million has been channelled into bursaries since Hon. Clement Sloya took office. Forms are now distributed through Chiefs and Assistant Chiefs, reducing the distance parents must travel. Support reaches secondary schools, colleges, and universities, including help with admissions, uniforms, and first-year tuition for deserving learners facing financial hardship.',
    story: "Bursaries are more than financial assistance. They are an affirmation of hope, opportunity, and the belief that every child deserves a chance to learn, grow, and build a brighter future.\n\nOne important change has been the decentralization of bursary application forms. Instead of requiring parents to travel long distances, forms are distributed through Chiefs and Assistant Chiefs — the government’s closest administrative offices to the people.\n\nSince assuming office, Hon. Clement Sloya has facilitated more than KSh 190 million in bursaries for students in secondary schools, colleges, and universities across Sabatia Constituency. During admissions, deserving learners facing financial hardship receive direct assistance, including help securing admission to day secondary schools, school uniforms, and first-year tuition fees in full.\n\n“Since Hon. Sloya was elected, my school has seen an increase in the number of bursary beneficiaries. This has helped us keep more students in school, reduced absenteeism, and ultimately improved our academic performance.” — Local teacher\n\n“I had never received a bursary before. It is only during Hon. Sloya’s leadership that I have benefited... This support has helped me keep my children in school.” — Parent\n\n“I want to thank Hon. Sloya for the bursary support he provides to students in tertiary institutions. It has enabled many of us to clear our fee balances and focus fully on improving our academic performance.” — University/college student",
    purpose: 'Keep learners in school and make education support easier for families to access.',
    status: 'Support programme highlighted in newsletter',
    stats: ['More than KSh 190 million in bursary awards'],
    testimonials: ['Local teacher: “This has helped us keep more students in school, reduced absenteeism, and ultimately improved our academic performance.”', 'Parent: “This support has helped me keep my children in school.”', 'University/college student: “It has enabled many of us to clear our fee balances and focus fully on improving our academic performance.”'],
    source: 'Newsletter: “NG-CDF Bursary Programme”.'
  },
  {
    slug: 'markets-and-affordable-housing',
    name: 'Mbale and Chavakali affordable housing markets',
    location: 'Mbale and Chavakali / Marikiti',
    category: 'Housing & Trade',
    excerpt: 'Modern market spaces designed to give traders room to grow their businesses.',
    description: 'Two major market projects are bringing the Bottom-Up promise into everyday trade. The Mbale Affordable Housing Programme Market has an allocation of KSh 363 million and space for approximately 1,200 traders. The Chavakali AHP Market at Marikiti has an allocation of KSh 240 million and space for 500 traders. Both are planned with stalls, revenue offices, cold rooms, storage, and ICT rooms, with priority for traders temporarily relocated during construction.',
    story: "When the United Democratic Alliance sought the mandate to lead Kenya in 2022, it did so on the strength of the Bottom-Up Transformation Agenda. In Sabatia, that national development agenda is reaching people through projects designed to improve livelihoods, stimulate economic growth, and create lasting opportunities.\n\nOne flagship achievement is the allocation of KSh 363 million for the Mbale Affordable Housing Programme Market and KSh 240 million for the Chavakali AHP Market. The modern markets will feature stalls, revenue collection offices, cold rooms for perishable goods, storage facilities, and ICT rooms on the upper floor to support digital business services.\n\nThe Mbale Market will accommodate approximately 1,200 traders, while the Chavakali Market at Marikiti will provide space for 500 traders. Upon completion, priority will go to traders temporarily relocated during construction before additional spaces are allocated to new traders.",
    purpose: 'Strengthen local trade, protect livelihoods, and give traders modern facilities for business.',
    status: 'Allocations and planned facilities highlighted in newsletter',
    stats: ['Mbale allocation: KSh 363 million / approximately 1,200 traders', 'Chavakali allocation: KSh 240 million / approximately 500 traders'],
    source: 'Newsletter: “Mbale & Chavakali AHP Markets”.'
  },
  {
    slug: 'vihiga-mini-city-student-hostels',
    name: 'Vihiga Mini City and student hostels',
    location: 'Lwenya, Wodanga and Sabatia Technical & Vocational College',
    category: 'Housing & Trade',
    excerpt: 'Affordable housing and student accommodation planned to support homes, services, and opportunity.',
    description: 'At Lwenya in Wodanga Ward, the planned Vihiga Mini City will bring 1,500 affordable housing units together with a school, hospital, police station, and fire station in three phases. At Sabatia Technical and Vocational College, 340 affordable housing units are planned as modern student hostels, creating better accommodation for learners and supporting the growth of technical education.',
    story: "The development agenda extends beyond markets. Through continued advocacy, the national government has committed to constructing the Vihiga Mini City in Lwenya, Wodanga Ward. The landmark project will consist of 1,500 affordable housing units alongside a school, hospital, police station, and fire station. The Mini City will be implemented in three phases.\n\nAt Sabatia Technical and Vocational College, 340 affordable housing units are planned as modern student hostels. They will improve learning conditions and support the growth of technical education within the constituency.",
    purpose: 'Expand access to decent housing, public services, and learning environments that help communities thrive.',
    status: 'National government commitments highlighted in newsletter',
    stats: ['Vihiga Mini City: 1,500 housing units / 3 phases', 'Sabatia Technical College hostels: 340 units'],
    source: 'Newsletter: “Vihiga Mini City & Student Hostels”.'
  },
  {
    slug: 'social-welfare-inclusion',
    name: 'Social welfare and inclusive support',
    location: 'Sabatia Constituency',
    category: 'Social welfare',
    excerpt: 'Support that helps vulnerable families, people with disabilities, and older residents live with dignity.',
    description: 'Development is also about what happens when a family is facing its hardest season. The newsletter highlights support for vulnerable families, housing initiatives, wheelchairs and mobility aids for persons living with disabilities, help with hospital bills during medical emergencies, and registration of eligible senior citizens and other vulnerable residents under Inua Jamii.',
    story: "For years, the people of Sabatia have envisioned a constituency where no family is left behind. Social welfare has become a pillar of the development story, with outreach initiatives helping vulnerable families navigate difficult circumstances with dignity, hope, and renewed confidence.\n\nSince 2022, housing initiatives have provided safer and more dignified homes for vulnerable families. For persons living with disabilities, support has included wheelchairs and other mobility aids. Hospital-bill assistance has helped families facing medical emergencies, while registration support has helped eligible senior citizens and other vulnerable members of society access Inua Jamii and government social-protection programmes.\n\nThis is leadership anchored in service, compassion, inclusion, and a vision for a stronger, more dignified, and prosperous Sabatia.",
    purpose: 'Make sure vulnerable people are not left behind and can meet difficult moments with dignity and support.',
    status: 'Social welfare initiatives highlighted in newsletter',
    source: 'Newsletter: “Social Welfare and Youth”.'
  },
  {
    slug: 'sloya-cup',
    name: 'Sloya Cup Football Tournament',
    location: 'Sabatia Constituency',
    category: 'Youth & Sports',
    excerpt: 'A football platform where young talent meets healthy competition and community pride.',
    description: 'The Sloya Cup has grown into more than a tournament. It gives young people a platform to show their talent, builds healthy competition, strengthens community bonds, and encourages a generation to pursue its ambitions through sport.',
    story: "In Sabatia, sports are becoming more than a pastime. They are a platform for youth empowerment, talent development, healthy living, and community cohesion.\n\nDuring the 2022/2023 financial year, Sabatia NG-CDF organized a constituency-wide football tournament under the patronage of Hon. Clement Sloya. It brought together 64 teams: 48 men’s teams and 16 women’s teams. Each participating team received 18 full-kit jerseys, two footballs, a net, and cones for training. FKF county representatives, referees, team managers, and players were involved throughout the process.\n\nThe Red Devils emerged as men’s champions, receiving KSh 100,000 and a trophy. Chavakali Stars, the first runners-up, received KSh 50,000 and a trophy. California Queens won the women’s title with KSh 70,000 and a trophy, while Chandumba Queens received KSh 50,000 and a trophy as first runners-up.\n\nAt least three players — Mwavali, Amudava, and Lameck — went on to secure opportunities with clubs in the National Super League and Kenya Premier League. Each of Sabatia’s six wards also has a women’s team equipped with jerseys and footballs to encourage regular participation and healthy living.\n\n“This is one of the tournaments organised by NG-CDF that has been prepared excellently with utmost professionalism. We have witnessed a huge fan base for this tournament.” — FKF Sub-County Secretary\n\n“I’m excited to be a beneficiary of the exposure that this NG-CDF tournament has provided to many of my peers. The competitiveness experienced throughout the tournament proved that this was not a village tournament but a bigger platform.” — Mwavali, player signed to NSL/KPL",
    purpose: 'Nurture talent, unite communities, and open a positive path for young people through football.',
    status: 'Tournament highlighted in newsletter',
    images: ['photo-099.jpg', 'photo-100.jpg', 'photo-101.jpg', 'photo-102.jpg'],
    stats: ['64 teams: 48 men’s / 16 women’s', 'KSh 270,000 total prize money', '3 players signed to NSL/KPL clubs', '6 wards with women’s teams'],
    stats: ['64 teams: 48 men’s / 16 women’s', 'KSh 270,000 total prize money', '3 players signed to NSL/KPL clubs', '6 wards with women’s teams'],
    stats: ['64 teams: 48 men’s / 16 women’s', 'KSh 270,000 total prize money', '3 players signed to NSL/KPL clubs', '6 wards with women’s teams'],
    source: 'Newsletter: “Sports, Talent & the Sloya Cup”.'
  },
  {
    slug: 'climate-environmental-conservation',
    name: 'Climate change and environmental conservation',
    location: 'Sabatia Constituency',
    category: 'Environment',
    excerpt: 'A greener future built through tree planting, care, and community responsibility.',
    description: 'Sabatia’s development story also looks after the landscape that sustains it. The conservation initiative encourages residents, especially young people, to plant and care for trees, protect the environment, and build a greener constituency in the face of climate change.',
    story: "Climate change is one of the major challenges facing communities today. Through Sabatia CDF management, efforts are being made to promote environmental conservation and address climate change.\n\nThe initiative encourages residents, especially young people, to plant and care for trees, protect the environment, and create a greener Sabatia.",
    purpose: 'Protect the environment and make climate responsibility part of community life.',
    status: 'Conservation initiative highlighted in newsletter',
    source: 'Newsletter: “Climate Change & Environmental Conservation”.'
  },


]

export const highlights = [
  { value: '131,628', label: 'residents in the 2019 National Census', note: 'Population projections now exceed 150,000.' },
  { value: '111 km²', label: 'constituency area', note: 'Population density is reported at over 1,180 people per square kilometre.' },
  { value: '10.9 km', label: 'Chavakali–Eregi Road corridor', note: 'A strategic link between Vihiga and Kakamega counties.' },
  { value: '1,673+', label: 'households reached by electricity', note: 'Across 12 villages and all six wards.' },
  { value: 'KSh 75.7m', label: 'reported Sabatia KMTC cost', note: 'Construction at Kegondi began in 2022.' }
]

export const newsletterSections = [
  {
    eyebrow: 'The Sabatian · 2022–2026',
    title: 'A new chapter in Sabatia’s development journey',
    body: 'Over four years, Sabatia’s development story has been written in classrooms, roads, bridges, power lines, and community spaces. This inaugural edition brings those chapters together, from education and infrastructure to electrification, economic empowerment, and security.'
  },
  {
    eyebrow: 'Foreword · Hon. Clement Sloya, MP',
    title: 'Progress made together',
    body: 'When Hon. Clement Sloya, MP, took office in 2022, the promise was inclusive development and a better quality of life in every part of Sabatia. The work has moved forward through NG-CDF management, collaboration with government agencies, and continued conversation with residents.'
  },
  {
    eyebrow: 'Message · NG-CDF Sabatia Chair',
    title: 'Transparency, accountability, equity, and public participation',
    body: 'Wycliffe Muzozo Volemi places the programme on four foundations: transparency, accountability, equity, and public participation. These principles shape how community priorities become projects and how projects move from planning into implementation.'
  },
  {
    eyebrow: 'Message · Fund Account Manager',
    title: 'Value for money in public resources',
    body: 'Tom Gimonge keeps the focus on value for money: using public resources prudently, delivering projects efficiently, meeting quality standards, and making sure each investment creates a tangible benefit for the people of Sabatia.'
  },
  {
    eyebrow: 'Education · The new learning spaces',
    title: 'When a classroom becomes a doorway to the future',
    body: 'CBC classrooms, sanitation blocks, STEM laboratories, ICT equipment, renovations, and bursaries are changing what a school day can hold. The story is not only about new buildings; it is about giving learners the conditions to stay, participate, and imagine what comes next.'
  },
  {
    eyebrow: 'Roads · Housing · Trade',
    title: 'The routes and spaces that keep a local economy moving',
    body: 'A 21-kilometre road, modern markets for approximately 1,700 traders, planned housing, and student hostels all point to the same idea: opportunity needs somewhere to move, meet, work, and grow.'
  },
  {
    eyebrow: 'Community · Youth · Environment',
    title: 'A stronger constituency leaves no one behind',
    body: 'From vulnerable families and people living with disabilities to the Sloya Cup and tree-planting initiatives, the wider development story is about dignity, participation, talent, and a greener future.'
  }
]

const photoCollections = [
  { from: 0, to: 11, category: 'Education', section: 'Storey buildings', caption: 'Storey buildings and modern school facilities documented in the Sabatia NG-CDF photobook.' },
  { from: 12, to: 38, category: 'Education', section: 'New classrooms and renovations', caption: 'New classrooms, JSS spaces, laboratories, ICT labs, and school renovations.' },
  { from: 39, to: 53, category: 'Education', section: 'Learning spaces and facilities', caption: 'Classrooms, interiors, laboratories, and school facility details.' },
  { from: 54, to: 67, category: 'Education', section: 'Ablution blocks', caption: 'Ablution blocks and sanitation improvements shown in the source photobook.' },
  { from: 68, to: 76, category: 'Health', section: 'Sabatia KMTC', caption: 'Sabatia KMTC at Kegondi, as documented in the photobook.' },
  { from: 77, to: 86, category: 'Security', section: 'New Chiefs Offices', caption: 'Assistant Chief offices and National Government Administration infrastructure.' },
  { from: 87, to: 94, category: 'Infrastructure', section: 'Road maintenance and bridges', caption: 'Road works, bridges, and crossings documented in the source.' },
  { from: 95, to: 99, category: 'Electrification', section: 'Rural electrification', caption: 'Electrical poles, installation, transformers, and lighting works.' },
  { from: 100, to: 103, category: 'Youth & Sports', section: 'Sports and community', caption: 'Sports, community, and programme documentation photographs.' }
]

export const photos = photoFiles.map((file, index) => {
  const group = photoCollections.find((item) => index >= item.from && index <= item.to) || photoCollections[0]
  const known = {
    'photo-001.jpg': 'A school facility from the Storey Buildings section.',
    'photo-005.jpg': 'A multi-storey school building from the Storey Buildings section.',
    'photo-007.jpg': 'Students learning in a classroom.',
    'photo-012.jpg': 'A raised water tower documented in the source photobook.',
    'photo-038.jpg': 'ICT laboratory facilities.',
    'photo-039.jpg': 'A solar-powered laboratory roof and school facility.',
    'photo-074.jpg': 'Sabatia KMTC at Kegondi.',
    'photo-075.jpg': 'Sabatia KMTC campus gate.',
    'photo-084.jpg': 'Road maintenance works.',
    'photo-086.jpg': 'Road construction works documented from above.',
    'photo-088.jpg': 'Bridge infrastructure documented in the source photobook.',
    'photo-090.jpg': 'Electrical installation works.',
    'photo-099.jpg': 'Community sports photograph.',
    'photo-101.jpg': 'Trophy presentation at the sports section.'
  }
  return {
    id: file.replace('.jpg', ''),
    file,
    src: image(file),
    category: group.category,
    section: group.section,
    caption: known[file] || group.caption,
    source: 'The Sabatian 2022–2026 photobook'
  }
})

export const featuredSlugs = ['sabatia-kmtc-kegondi', 'chavakali-eregi-road', 'loveyi-bridge', 'historic-storey-classroom-buildings']

export const getProject = (slug) => projects.find((project) => project.slug === slug)
export const getPhotosForProject = (project) => {
  if (!project?.images) return []
  return project.images.map((file) => photos.find((photo) => photo.file === file)).filter(Boolean)
}
