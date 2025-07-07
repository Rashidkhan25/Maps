const teacherLocations = [
  {
    "name": "aditya pevekar",
    "price": "",
    "hobby": "[\"Guitar\",\"Art and Craft\"]",
    "address": "1006, krishvi heights, vproad, girgaon",
    "location": "mumbai",
    "lat": 18.956739, 
    "lng": 72.820855
  },
  {
    "name": "Aishwarya Baviskar",
    "price": "2000",
    "hobby": "[\"Art and Craft\"]",
    "address": "flat no 201, Elysium Society Marunji",
    "location": "Pune",
    "lat": 18.612300, 
    "lng": 73.719345
  },
  {
    "name": "Akanksha Singh",
    "price": "",
    "hobby": "[\"Drama\",\"Hindi\",\"Art and Craft\",\"Public Speaking\",\"Creative Writing\",\"Poetry Writing\"]",
    "address": "B-105 Raj apt. Dombivli East Thane",
    "location": "Mumbai",
    "lat": 19.198360,
    "lng": 73.090373
  },
  {
    "name": "Ankita Biswas",
    "price": "500",
    "hobby": "[\"Coding\",\"Culinary\",\"Origami & Paper Craft\",\"DIY Crafting\",\"Crochet & Knitting\",\"Astronomy\",\"Baking\",\"Public Speaking\",\"Creative Writing\",\"Sketching & Drawing\",\"Pottery & Clay Modeling\",\"Calligraphy\",\"Gardening\",\"Art and Craft\",\"Graphics Art\"]",
    "address": "Vina Vandana, 3, Madhyamgram, Kolkata - 700130",
    "location": "Kolkata, India",
    "lat": 23.2363,
    "lng": 87.2464
  },
  {
    "name": "Arpita Biswas",
    "price": "2000",
    "hobby": "[\"Drama\",\"Art and Craft\",\"Culinary\"]",
    "address": "3, Boikuntha deb road, Madhyamgram",
    "location": "Kolkata, West Bengal",
    "lat": 22.56263,
    "lng": 88.36304
  },
  {
    "name": "Ashish Kalpund",
    "price": "1000",
    "hobby": "[\"Keyboard\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Ayush Raj",
    "price": "",
    "hobby": "[\"Photography\"]",
    "address": "A-17, FF-2, Nehwal Homes, Mahindra Enclave, Ghaziabad",
    "location": "Ghaziabad",
    "lat": 28.671419,
    "lng": 77.467294
  },
  {
    "name": "Balaji Siva ",
    "price": "",
    "hobby": "[\"Origami & Paper Craft\",\"Art and Craft\",\"Sketching & Drawing\",\"Drama\"]",
    "address": "9/334, muthamil street, ambal nagar, kovur, chennai ",
    "location": "Chennai ",
    "lat": 13.007072,
    "lng": 80.130443
  },
  {
    "name": "Charles William",
    "price": "500",
    "hobby": "[\"Keyboard\"]",
    "address": "Mumbai",
    "location": "Mumbai",
    "lat": 19.0901376,
    "lng": 72.8638223
  },
  {
    "name": "Chirag Pinto",
    "price": "1000",
    "hobby": "[\"Western Vocals\",\"Guitar\",\"Keyboard\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Darren Quadros",
    "price": "700",
    "hobby": "[\"Keyboard\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Dhruti Savani ",
    "price": "400",
    "hobby": "[\"French\"]",
    "address": "303, sampada chsl,  opp.datt mandir, vivek college road, siddharth nagar, goregaon west,  Mumbai ",
    "location": "Mumbai ",
    "lat": 19.160376,
    "lng": 72.845578
  },
  {
    "name": "DIPIKA VAZ",
    "price": "",
    "hobby": "[\"Martial Art\"]",
    "address": "1/7, RAMKRISHNA NAGAR, 9TH ROAD, KHAR WEST, MUMBAI 400052",
    "location": "KHAR WEST",
    "lat": 19.073534,
    "lng": 72.838444
  },
  {
    "name": "Dishani  Seth",
    "price": "",
    "hobby": "[\"French\"]",
    "address": "Ratan heights A wing 9/902 gilder lane corner opp.navjivan society ",
    "location": "Mumbai Central",
    "lat": 18.966323, 
    "lng": 72.819041
  },
  {
    "name": "Farahdiba Aun Mookhtiar",
    "price": "",
    "hobby": "[\"Public Speaking\"]",
    "address": "201, Chintamani nivas ,above Dr Farooqui ,Main Khar rd, Khar west Mumbai 400052",
    "location": "Maharashtra ",
    "lat": 19.075377,
    "lng": 72.824472
  },
  {
    "name": "Ganeshraj",
    "price": "",
    "hobby": "[\"Swimming\"]",
    "address": "8/32 Avoor Muthaiya Street New washermenpet",
    "location": "Chennai",
    "lat": 13.08784,
    "lng": 80.27847
  },
  {
    "name": "Garima Jain",
    "price": "2500",
    "hobby": "[\"Host\",\"English\",\"Public Speaking\",\"Dance\",\"Zumba\",\"Poetry Writing\",\"Creative Writing\"]",
    "address": "Kuvempu Apartment, Vijayanagar Pipeline, Bangalore 560040",
    "location": "Vijayanagar Pipeline",
    "lat": 12.975607,
    "lng": 77.590797
  },
  {
    "name": "Gauri Bhardwaj",
    "price": "2500",
    "hobby": "[\"Dance\",\"Drama\",\"Public Speaking\",\"Host\"]",
    "address": "355/113, lane no 16 B, Ashok Vihar. Phase 2, Gurgaon Haryana. 122001",
    "location": "Delhi NCR",
    "lat": 28.488468,
    "lng": 77.07733
  },
  {
    "name": "Girish Jadhav",
    "price": "3000",
    "hobby": "[\"Host\"]",
    "address": "05 Suyash vihar Colony Indore (M.P) 452010",
    "location": "INDORE",
    "lat": 22.8817,
    "lng": 74.0052
  },
  // {
  //   "name": "Gloria Martis",
  //   "price": "2500",
  //   "hobby": "[\"Public Speaking\",\"Western Vocals\",\"Hindustani Vocals\",\"Host\",\"Creative Writing\",\"English\",\"Marathi\"]",
  //   "address": "B-404, Jalaram Jyot, Highland Complex, Charkop Village Kandivali West, Mumbai 400067",
  //   "location": "Mumbai",
  //   "lat": 19.07283,
  //   "lng": 72.88261
  // },
  {
    "name": "Gwendoline Dias",
    "price": "500",
    "hobby": "[\"Art and Craft\"]",
    "address": "Shreeji Towers 2403, Next to Antop Hill Warehousing Complex Near Barkat Ali Naka, Wadala (E), 400037",
    "location": "Mumbai",
    "lat": 19.018810,
    "lng": 72.865719
  },
  {
    "name": "Himanshu Devraj",
    "price": "",
    "hobby": "[\"Dance\"]",
    "address": "Span Valencia/610 near Hubtown Akruti garden",
    "location": "Mira Road",
    "lat": 19.284758,
    "lng": 72.875395
  },
  // {
  //   "name": "Jason  Menezes ",
  //   "price": "2500",
  //   "hobby": "[\"Public Speaking\",\"English\"]",
  //   "address": "B/404 Ambika apartments, mahakali caves road, Andheri East",
  //   "location": "Andheri East ",
  //   "lat": 19.11446,
  //   "lng": 72.8712
  // },
  {
    "name": "Jessica Dsouza",
    "price": "850",
    "hobby": "[\"Keyboard\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Jignesh Waghela",
    "price": "850",
    "hobby": "[\"Guitar\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Joshua Khristi",
    "price": "900",
    "hobby": "[\"Guitar\",\"Keyboard\",\"Western Vocals\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Kabir Arora",
    "price": "",
    "hobby": "[\"Drama\"]",
    "address": "Kanungo Apartments, 71 I.P Extension, Patparganj, Delhi 110092",
    "location": "New Delhi",
    "lat": 29.7732,
    "lng": 77.1966
  },
  {
    "name": "Madhavan Rao",
    "price": "",
    "hobby": "[\"Drama\",\"Martial Art\",\"Dance\"]",
    "address": "Flat-16, A1 building, SV Nagar, Hadapsar, Pune 411013",
    "location": "Pune",
    "lat": 18.51957,
    "lng": 73.85535
  },
  {
    "name": "Mahima Shah",
    "price": "",
    "hobby": "[\"Art and Craft\"]",
    "address": "S/2, ANAND PRAKASH APPT, NR BOB OPP PARIJAT SOCIETY, FATEHPURA, PALDI, AHMEDABAD",
    "location": "Ahmedabad, Gujarat",
    "lat": 23.008988,
    "lng": 72.558544
  },
  {
    "name": "Mala Suraya Faust",
    "price": "2000",
    "hobby": "[\"Violin\"]",
    "address": "Building 5, Kapaswadi, Andheri west, Mumbai",
    "location": "Mumbai",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "name": "Mamta Sanghavi",
    "price": "2000",
    "hobby": "[\"Art and Craft\"]",
    "address": "103 SVL Heights, Masab Tank, Lane opposite police officer mess",
    "location": "Hyderabad",
    "lat": 17.38405,
    "lng": 78.45636
  },
  {
    "name": "Manisha More",
    "price": "2000",
    "hobby": "[\"Host\"]",
    "address": "Bhosari Pune ",
    "location": "Pune",
    "lat": 18.618578,
    "lng": 73.833503
  },
  {
    "name": "Maran Fernandes",
    "price": "800",
    "hobby": "[\"Guitar\"]",
    "address": "102 Narmada jangid complex mira road east",
    "location": "Mumbai",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "name": "Martin Tirumala",
    "price": "800",
    "hobby": "[\"Guitar\",\"Keyboard\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Meghna Dhavan ",
    "price": "",
    "hobby": "[\"Art and Craft\",\"Origami & Paper Craft\",\"Sketching & Drawing\"]",
    "address": "Purva highlands uttarahalli holiday village resort road ",
    "location": "Bangalore ",
    "lat": 12.97194,
    "lng": 77.59369
  },
  {
    "name": "Miloni Mehta",
    "price": "",
    "hobby": "[\"Resin Art\",\"Art and Craft\",\"Calligraphy\",\"Sketching & Drawing\"]",
    "address": "A703, Giriraj, Plt no 109, Rd No 1, Jawahar Nagar, Goregaon West ",
    "location": "Mumbai",
    "lat": 27.42397,
    "lng": 77.09922
  },
  {
    "name": "Ms. Masum Ahmed",
    "price": "2500",
    "hobby": "[\"Sketching & Drawing\",\"Drama\",\"Creative Writing\",\"Public Speaking\",\"Poetry Writing\",\"Calligraphy\",\"Hip-Hop\"]",
    "address": "Telengana",
    "location": "Hyderabad",
    "lat": 17.329125,
    "lng": 78.5822228
  },
  {
    "name": "Nikita Sharma",
    "price": "600",
    "hobby": "[\"Vedic Maths\"]",
    "address": "Teetardi Gupteswarji Road",
    "location": "Rajasthan ",
    "lat": 26.58333,
    "lng": 73.83333
  },
  {
    "name": "Nishant Kumar",
    "price": "2500",
    "hobby": "[\"Creative Writing\",\"Host\",\"Public Speaking\",\"Art and Craft\"]",
    "address": "Sector, 17 , Indira Nagar ",
    "location": "Lucknow",
    "lat": 26.8919413,
    "lng": 80.9996087
  },
  {
    "name": "Om Deshmukh",
    "price": "3500",
    "hobby": "[\"Hindustani Vocals\"]",
    "address": "196/B, Girgaon, Gaiwadi, Mumbai 400004",
    "location": "Mumbai ",
    "lat": 18.95,
    "lng": 72.8167
  },
  {
    "name": "Om mestry",
    "price": "",
    "hobby": "[\"Sketching & Drawing\",\"Graphics Art\"]",
    "address": "301 chaitanya krishnai ,liberty garden , malad west mumbai 64",
    "location": "Mumbai",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "name": "Prachi Vashisth",
    "price": "2000",
    "hobby": "[\"Art and Craft\"]",
    "address": "A-72 Jiwan Park. New Delhi, 110059. ",
    "location": "Delhi",
    "lat": 28.3256,
    "lng": 76.5918
  },
  {
    "name": "Pratham Maheshwari",
    "price": "800",
    "hobby": "[\"Graphics Art\"]",
    "address": "Ahmedabad",
    "location": "Ahmedabad",
    "lat": 23.0215374,
    "lng": 72.5800568
  },
  {
    "name": "Rachana Shetty",
    "price": "",
    "hobby": "[\"Art and Craft\"]",
    "address": "B-204, laxmi sadan, near st. Francis high school, vasai west",
    "location": "Vasai",
    "lat": 19.382982,
    "lng": 72.821265
  },
  {
    "name": "Raghav ",
    "price": "2000",
    "hobby": "[\"Guitar\",\"Hindustani Vocals\"]",
    "address": "402, shree siddhinath chs, model town, versova",
    "location": "mumbai",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "name": "Ragini jalkhare",
    "price": "600",
    "hobby": "[\"Art and Craft\"]",
    "address": "51, station road Shajapur ",
    "location": "Indore/Shajapur ",
    "lat": 23.42688,
    "lng": 76.27772
  },
  {
    "name": "Rakshita Dwivedi ",
    "price": "2000",
    "hobby": "[\"Culinary\",\"Baking\"]",
    "address": "17095, Prestige Shantiniketan,  ITPL road,  Bangalore ",
    "location": "Bangalore ",
    "lat": 12.97194,
    "lng": 77.59369
  },
  {
    "name": "RHYS VAZ",
    "price": "1800",
    "hobby": "[\"Self Defence\"]",
    "address": "101 SILVER SUNSHINE 9TH ROAD KHAR WEST MUMBAI 400052",
    "location": "MUMBAI",
    "lat": 18.7997,
    "lng": 72.926
  },
  {
    "name": "Roshini Hiro Dhansingani ",
    "price": "800",
    "hobby": "[\"Spanish\",\"English\"]",
    "address": "Kumar Platinum, flat no 603, Synagogue street , 411001 Pune , India ",
    "location": "Pune ",
    "lat": 18.5196,
    "lng": 73.8554
  },
  {
    "name": "SAAKSHI AMIT PATEL",
    "price": "1500",
    "hobby": "[\"Art and Craft\"]",
    "address": "Near bandi mata mandiSamast Brahmsatriy Society, Near BAPS  Swaminarayan  Temple, Chandranagar, Paldir babuganj, nadwa road.",
    "location": "AHMEDABAD, GUJARAT",
    "lat": 23.003017,
    "lng": 72.557994
  },
  {
    "name": "Sanket Premdas Bhambal",
    "price": "500",
    "hobby": "[\"Keyboard\"]",
    "address": "Room no 1025",
    "location": "Ulhasnagar ",
    "lat": 19.2236329,
    "lng": 73.1671515
  },
  {
    "name": "SANSKRUTI BHUSHAN PURAV",
    "price": "2000",
    "hobby": "[\"Art and Craft\",\"Calligraphy\",\"Photography\"]",
    "address": "409 ROOM NO 5 KADRI MANSION VEER SAVARKAR MARG PRABHADEVI MUMBAI 400025",
    "location": "Mumbai",
    "lat": 19.0164,
    "lng": 72.8294
  },
  {
    "name": "SASI KUMAR M",
    "price": "10",
    "hobby": "[\"Dance\"]",
    "address": "Whitefield ",
    "location": "Bangalore ",
    "lat": 12.9696365,
    "lng": 77.7497448
  },
  {
    "name": "Shabnam Sierra",
    "price": "500",
    "hobby": "[\"Keyboard\",\"Art and Craft\"]",
    "address": "",
    "location": "Bangalore",
    "lat": 12.9767936,
    "lng": 77.590082
  },
  {
    "name": "Shahistha Khatoon",
    "price": "",
    "hobby": "[\"Poetry Writing\",\"Art and Craft\",\"Public Speaking\",\"DIY Crafting\"]",
    "address": "Sri Karthikeya luxury pg for ladies, Domlur stage 2, Bengaluru.",
    "location": "Bengaluru ",
    "lat": 12.97194,
    "lng": 77.59369
  },
  {
    "name": "Shalveeta Pereira",
    "price": "2500",
    "hobby": "[\"Public Speaking\",\"Dance\",\"Poetry Writing\",\"Host\"]",
    "address": "C/3 Lourdes Housing Society Near Ayappa Mandhir Sakinaka, Kherani Road, Ayappa Mandhir ",
    "location": "Mumbai, Andheri ",
    "lat": 19.099781,
    "lng": 72.898126
  },
  {
    "name": "Sherwin Isaac",
    "price": "1000",
    "hobby": "[\"Drums\"]",
    "address": "Room no 1375, Building no 25, MHB colony, khernagar, Bandra east. Mumbai 400051",
    "location": "Mumbai",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "name": "Shivam Shakya",
    "price": "2000",
    "hobby": "[\"Art and Craft\"]",
    "address": "Near bandi mata mandir babuganj, nadwa road.",
    "location": "Lucknow Uttar Pradesh",
    "lat": 26.865871,
    "lng": 80.931292
  },
  {
    "name": "Shivani V",
    "price": "850",
    "hobby": "[\"Art and Craft\"]",
    "address": "401, C wing, casa milano, palava city, khoni, dombivli ",
    "location": "Dombivli,Navi Mumbai ",
    "lat": 19.03681,
    "lng": 73.01582
  },
  {
    "name": "Shriya Ganapathy",
    "price": "",
    "hobby": "[\"Western Vocals\",\"Keyboard\"]",
    "address": "604, Daze Apartments, Chincholi Phatak, Pavan Baug Road, Malad West, Mumbai, Maharashtra - 400064",
    "location": "Malad, Mumbai",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "name": "Shubhendu Dwivedi",
    "price": "125",
    "hobby": "[\"Dance\"]",
    "address": "Club Danube, Casa Rio, Palava City, Dombivli East, Navi Mumbai, Maharashtra 421204",
    "location": "Dombivli, Mumbai",
    "lat": 19.03681,
    "lng": 73.01582
  },
  {
    "name": "Sonia Menezes",
    "price": "",
    "hobby": "[\"Host\"]",
    "address": "Andheri (E), Mumbai -72",
    "location": "Mumbai",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "name": "Sony Jaiswar ",
    "price": "250",
    "hobby": "[\"English\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Tamara Hendricks",
    "price": "",
    "hobby": "[\"Crochet & Knitting\"]",
    "address": "301 Ave Maria Apartments, 25 Viviani Road Richards Town ",
    "location": "Bangalore ",
    "lat": 13.0039824,
    "lng": 77.6153583
  },
  {
    "name": "Tanmay Sawant ",
    "price": "2500",
    "hobby": "[\"Drama\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Tanya Anuja",
    "price": "",
    "hobby": "[\"Art and Craft\",\"Public Speaking\",\"Sketching & Drawing\"]",
    "address": "FF-2, A-17, Nehwal Homes, Mahendra Enclave, Near Kush Department Store, Shastri Nagar, Ghaziabad, Uttar Pradesh",
    "location": "Ghaziabad, Uttar Pradesh",
    "lat": 28.669992,
    "lng": 77.453758
  },
  {
    "name": "Titus Christian",
    "price": "",
    "hobby": "[\"Keyboard\"]",
    "address": "#1223/5, 68/27, MHB Colony, Ambernath West, 421501",
    "location": "Ambernath",
    "lat": 19.207964,
    "lng": 73.183869
  },
  {
    "name": "Trianna Salins",
    "price": "2000",
    "hobby": "[\"English\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Tripti Prasad",
    "price": "",
    "hobby": "[\"Art and Craft\"]",
    "address": "Radha Kutir, Hari Babu Colony, Canary Hill Road, PTC Chowk, Hazaribagh, Jharkhand - 825301",
    "location": "Online ",
    "lat": 24.004918,
    "lng": 85.382554
  },
  {
    "name": "Utkarsha Patil",
    "price": "1200",
    "hobby": "[\"Art and Craft\"]",
    "address": "sakar residency, near shri mangal karyalay, dom",
    "location": "dombivli ",
    "lat": 19.03681,
    "lng": 73.01582
  },
  {
    "name": "Vacha Bipin",
    "price": "850",
    "hobby": "[\"Western Vocals\",\"Hindustani Vocals\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Vaishali Londhe",
    "price": "2000",
    "hobby": "[\"Art and Craft\"]",
    "address": "A-403Grit Paradise.G.M. link Rd.Next to Shankara colony. Mumbai-43",
    "location": "Mumbai Chembur",
    "lat": 19.07283,
    "lng": 72.88261
  },
  {
    "name": "Vidhi Ganesh Oswal",
    "price": "2000",
    "hobby": "[\"Art and Craft\",\"German\",\"Sketching & Drawing\"]",
    "address": "Shri shantinagar housing society, Kondhwa bk.",
    "location": "Maharashtra ",
    "lat": 19.5,
    "lng": 76
  },
  {
    "name": "Vishwesh Pandey",
    "price": "500",
    "hobby": "[\"Dance\"]",
    "address": "",
    "location": "Mumbai",
    "lat": 19.054999,
    "lng": 72.8692035
  },
  {
    "name": "Viswathika K",
    "price": "",
    "hobby": "[\"Coding\"]",
    "address": "B1,Honeycomb Apt. , Kovilmaniyam",
    "location": "Chennai",
    "lat": 13.08784,
    "lng": 80.27847
  }
];