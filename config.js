
// export const DOMAIN = 'http://localhost:3000';
export const DOMAIN = 'https://www.myheroacademiamanga.in.net';


export const MANGA_DESCRIPTION = `<a href="${DOMAIN}"><u>My Hero Academia</u></a> is a Japanese manga and anime series by Kohei Horikoshi. It follows Izuku Midoriya, a Quirkless boy in a world where most people have superpowers. His life changes when he inherits the Quirk "One For All" from the world's greatest hero, All Might. The series focuses on Midoriya's journey at U.A. High School as he trains to become a hero and battles various villains alongside his classmates.`


export const MANGA_NAME = 'My Hero Academia';
export const MANGA_AUTHOR = 'Kōhei Horikoshi';
export const MANGA_RELEASE = '2014';
export const MANGA_STATUS = 'Ongoing';
export const MANGA_ARTIST = 'Kōhei Horikoshi';
export const MANGA_STUDIO = 'Bones INC';
export const MANGA_GENRE = 'Comedy, Adventure, Drama, Science, SuperHero, Shonen';

export const CHAPTER_PREFIX = 'my-hero-academia-chapter';
export const IMAGE_PREFIX = 'images/my-hero-academia';
export const NEXT_PREVIOUS_PREFIX = 'manga/my-hero-academia-chapter';
export const URL_PREFIX = 'manga/my-hero-academia-chapter';

export const AUTHOR_PAGE = `${DOMAIN}/my-hero-academia-team`;
export const LOGO_URL = `${DOMAIN}/logo.webp`;
export const COVER_IMG = `${DOMAIN}/cover.webp`;
export const BEHIND_COVER_IMG = "https://staticg.sportskeeda.com/editor/2024/06/8491e-17183934948269-1920.jpg";


// Navbar
export const logo = <img src={`${LOGO_URL}`} alt="Logo" className="h-[75px] w-[185px] mr-5 md:ml-0 ml-4 md:pb-2 md:my-0 my-1" />

export const APP_NAME = 'My Hero Academia';
export const NavbarName = "My Hero Academia";

export const APP_DESCRIPTION = `Read ${MANGA_NAME} manga online at ${DOMAIN}. Enjoy high-quality scans, latest chapters, and connect with fans in our vibrant community.`;

export const DISQUS_SHORTNAME = "my-cms-7";


export const MANGA_SUMMARY = [
    {
        id: 1,
        content: "My Hero Academia is a Japanese manga and anime series created by Kohei Horikoshi. The story is set in a world where almost everyone possesses superpowers known as Quirks. These abilities range from the mundane to the extraordinary, and they have given rise to a society where professional heroes fight against villains to maintain peace and order."
    },
    {
        id: 2,
        content: "The protagonist, Izuku Midoriya, is a young boy born without a Quirk, making him an outcast in a world where superpowers are the norm. Despite this, Midoriya idolizes heroes, particularly the greatest hero of all, All Might. His dream is to attend U.A. High School, a prestigious academy that trains future heroes, and to become a hero who can save people with a smile on his face, just like All Might."
    },
    {
        id: 3,
        content: "Midoriya's life changes dramatically when he has a chance encounter with All Might, who sees the young boy's potential and heroic spirit. All Might reveals his own secret: he is losing his power due to a grievous injury. Seeing Midoriya's determination, All Might decides to pass on his Quirk, One For All, to him. One For All is a unique Quirk that can be transferred from one person to another and grows stronger as it is passed down."
    },
    {
        id: 4,
        content: "With his newfound power, Midoriya gains admission to U.A. High School, where he meets other aspiring heroes, each with their own unique Quirks and dreams. Among his classmates are Katsuki Bakugo, his childhood friend and rival; Ochaco Uraraka, a girl who can make objects weightless; Tenya Iida, a serious student with engines in his legs; and Shoto Todoroki, a prodigy with the ability to control both ice and fire."
    },
    {
        id: 5,
        content: "They undergo intense physical and mental training, participate in mock battles, and face off against real villains. The villains, led by the enigmatic Tomura Shigaraki and the powerful All For One, seek to overthrow the hero society and plunge the world into chaos."
    },
    {
        id: 6,
        content: "My Hero Academia explores themes of heroism, perseverance, and the nature of good and evil. Midoriya's journey is one of growth and self-discovery as he learns to harness his power, faces his insecurities, and strives to protect others. The series also highlights the bonds of friendship and mentorship, as Midoriya and his classmates support and challenge each other to become better heroes."
    },
    {
        id: 7,
        content: "The narrative is rich with emotional depth, character development, and thrilling action scenes. It balances personal struggles with larger societal issues, questioning what it means to be a hero in a world where the line between good and evil is often blurred. Through its diverse cast of characters and compelling storyline, My Hero Academia has captivated audiences worldwide, becoming a defining series in contemporary manga and anime."
    }
];




export const navLinks = [
    { text: 'Home', href: `${DOMAIN}` },
    { text: 'DMCA', href: `${DOMAIN}/dmca` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` },
];

export const FooterLinks = [
    { text: 'About', href: `${DOMAIN}/about` },
    { text: 'Contact', href: `${DOMAIN}/contact` },
    { text: 'Disclaimer', href: `${DOMAIN}/disclaimer` },
    { text: 'Privacy Policy', href: `${DOMAIN}/privacy-policy` },
    { text: 'Terms & Conditions', href: `${DOMAIN}/terms-and-conditions` }
];


export const RelatedMangaLinks = [
    {
        imageUrl: `${DOMAIN}/related/frieran.webp`,
        title: 'Frieran',
        link: 'https://www.frieranmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/one-punch-man.webp`,
        title: 'One Punch Man',
        link: 'https://www.onepunchmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/vinland-saga.webp`,
        title: 'Vinland Saga',
        link: 'https://www.vinlandsagamanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/jujutsu-kaisen.webp`,
        title: 'Jujutsu Kaisen',
        link: 'https://www.jujutsukaisenmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/black-clover.webp`,
        title: 'Black Clover',
        link: 'https://www.blackclovermanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/chainsaw-man.webp`,
        title: 'Chainsaw Man',
        link: 'https://www.chainsawmanmanga.in.net',
    },
    {
        imageUrl: `${DOMAIN}/related/mushoku-tensei.webp`,
        title: 'Mushoku Tensei',
        link: 'https://www.mushokutenseimanga.in.net',
    },
];




export const chaptersData = [
    {
        "chapterNumber": "1",
        "numImages": 53
    },
    {
        "chapterNumber": "2",
        "numImages": 27
    },
    {
        "chapterNumber": "3",
        "numImages": 24
    },
    {
        "chapterNumber": "4",
        "numImages": 21
    },
    {
        "chapterNumber": "5",
        "numImages": 21
    },
    {
        "chapterNumber": "6",
        "numImages": 21
    },
    {
        "chapterNumber": "7",
        "numImages": 20
    },
    {
        "chapterNumber": "8",
        "numImages": 19
    },
    {
        "chapterNumber": "9",
        "numImages": 23
    },
    {
        "chapterNumber": "10",
        "numImages": 21
    },
    {
        "chapterNumber": "11",
        "numImages": 21
    },
    {
        "chapterNumber": "12",
        "numImages": 23
    },
    {
        "chapterNumber": "13",
        "numImages": 21
    },
    {
        "chapterNumber": "14",
        "numImages": 24
    },
    {
        "chapterNumber": "15",
        "numImages": 21
    },
    {
        "chapterNumber": "16",
        "numImages": 21
    },
    {
        "chapterNumber": "17",
        "numImages": 20
    },
    {
        "chapterNumber": "18",
        "numImages": 18
    },
    {
        "chapterNumber": "19",
        "numImages": 16
    },
    {
        "chapterNumber": "20",
        "numImages": 17
    },
    {
        "chapterNumber": "21",
        "numImages": 20
    },
    {
        "chapterNumber": "22",
        "numImages": 22
    },
    {
        "chapterNumber": "23",
        "numImages": 22
    },
    {
        "chapterNumber": "24",
        "numImages": 20
    },
    {
        "chapterNumber": "25",
        "numImages": 22
    },
    {
        "chapterNumber": "26",
        "numImages": 25
    },
    {
        "chapterNumber": "27",
        "numImages": 26
    },
    {
        "chapterNumber": "28",
        "numImages": 25
    },
    {
        "chapterNumber": "29",
        "numImages": 28
    },
    {
        "chapterNumber": "30",
        "numImages": 26
    },
    {
        "chapterNumber": "31",
        "numImages": 25
    },
    {
        "chapterNumber": "32",
        "numImages": 20
    },
    {
        "chapterNumber": "33",
        "numImages": 23
    },
    {
        "chapterNumber": "34",
        "numImages": 21
    },
    {
        "chapterNumber": "35",
        "numImages": 20
    },
    {
        "chapterNumber": "36",
        "numImages": 22
    },
    {
        "chapterNumber": "37",
        "numImages": 22
    },
    {
        "chapterNumber": "38",
        "numImages": 19
    },
    {
        "chapterNumber": "39",
        "numImages": 22
    },
    {
        "chapterNumber": "40",
        "numImages": 19
    },
    {
        "chapterNumber": "41",
        "numImages": 21
    },
    {
        "chapterNumber": "42",
        "numImages": 20
    },
    {
        "chapterNumber": "43",
        "numImages": 18
    },
    {
        "chapterNumber": "44",
        "numImages": 22
    },
    {
        "chapterNumber": "45",
        "numImages": 21
    },
    {
        "chapterNumber": "46",
        "numImages": 18
    },
    {
        "chapterNumber": "47",
        "numImages": 20
    },
    {
        "chapterNumber": "48",
        "numImages": 22
    },
    {
        "chapterNumber": "49",
        "numImages": 19
    },
    {
        "chapterNumber": "50",
        "numImages": 22
    },
    {
        "chapterNumber": "51",
        "numImages": 20
    },
    {
        "chapterNumber": "52",
        "numImages": 23
    },
    {
        "chapterNumber": "53",
        "numImages": 23
    },
    {
        "chapterNumber": "54",
        "numImages": 21
    },
    {
        "chapterNumber": "55",
        "numImages": 23
    },
    {
        "chapterNumber": "56",
        "numImages": 23
    },
    {
        "chapterNumber": "57",
        "numImages": 23
    },
    {
        "chapterNumber": "58",
        "numImages": 24
    },
    {
        "chapterNumber": "59",
        "numImages": 24
    },
    {
        "chapterNumber": "60",
        "numImages": 24
    },
    {
        "chapterNumber": "61",
        "numImages": 23
    },
    {
        "chapterNumber": "62",
        "numImages": 22
    },
    {
        "chapterNumber": "63",
        "numImages": 20
    },
    {
        "chapterNumber": "64",
        "numImages": 20
    },
    {
        "chapterNumber": "65",
        "numImages": 20
    },
    {
        "chapterNumber": "66",
        "numImages": 22
    },
    {
        "chapterNumber": "67",
        "numImages": 23
    },
    {
        "chapterNumber": "68",
        "numImages": 24
    },
    {
        "chapterNumber": "69",
        "numImages": 23
    },
    {
        "chapterNumber": "70",
        "numImages": 19
    },
    {
        "chapterNumber": "71",
        "numImages": 21
    },
    {
        "chapterNumber": "72",
        "numImages": 21
    },
    {
        "chapterNumber": "73",
        "numImages": 22
    },
    {
        "chapterNumber": "74",
        "numImages": 17
    },
    {
        "chapterNumber": "75",
        "numImages": 20
    },
    {
        "chapterNumber": "76",
        "numImages": 22
    },
    {
        "chapterNumber": "77",
        "numImages": 18
    },
    {
        "chapterNumber": "78",
        "numImages": 19
    },
    {
        "chapterNumber": "79",
        "numImages": 20
    },
    {
        "chapterNumber": "80",
        "numImages": 20
    },
    {
        "chapterNumber": "81",
        "numImages": 18
    },
    {
        "chapterNumber": "82",
        "numImages": 19
    },
    {
        "chapterNumber": "83",
        "numImages": 19
    },
    {
        "chapterNumber": "84",
        "numImages": 27
    },
    {
        "chapterNumber": "85",
        "numImages": 19
    },
    {
        "chapterNumber": "86",
        "numImages": 20
    },
    {
        "chapterNumber": "87",
        "numImages": 17
    },
    {
        "chapterNumber": "88",
        "numImages": 20
    },
    {
        "chapterNumber": "89",
        "numImages": 20
    },
    {
        "chapterNumber": "90",
        "numImages": 23
    },
    {
        "chapterNumber": "91",
        "numImages": 20
    },
    {
        "chapterNumber": "92",
        "numImages": 21
    },
    {
        "chapterNumber": "93",
        "numImages": 21
    },
    {
        "chapterNumber": "94",
        "numImages": 18
    },
    {
        "chapterNumber": "94",
        "numImages": 5
    },
    {
        "chapterNumber": "94",
        "numImages": 4
    },
    {
        "chapterNumber": "94",
        "numImages": 17
    },
    {
        "chapterNumber": "95",
        "numImages": 21
    },
    {
        "chapterNumber": "96",
        "numImages": 19
    },
    {
        "chapterNumber": "97",
        "numImages": 24
    },
    {
        "chapterNumber": "98",
        "numImages": 19
    },
    {
        "chapterNumber": "99",
        "numImages": 19
    },
    {
        "chapterNumber": "100",
        "numImages": 19
    },
    {
        "chapterNumber": "101",
        "numImages": 23
    },
    {
        "chapterNumber": "102",
        "numImages": 21
    },
    {
        "chapterNumber": "103",
        "numImages": 20
    },
    {
        "chapterNumber": "104",
        "numImages": 20
    },
    {
        "chapterNumber": "105",
        "numImages": 19
    },
    {
        "chapterNumber": "106",
        "numImages": 20
    },
    {
        "chapterNumber": "107",
        "numImages": 24
    },
    {
        "chapterNumber": "108",
        "numImages": 25
    },
    {
        "chapterNumber": "109",
        "numImages": 19
    },
    {
        "chapterNumber": "110",
        "numImages": 21
    },
    {
        "chapterNumber": "111",
        "numImages": 22
    },
    {
        "chapterNumber": "112",
        "numImages": 17
    },
    {
        "chapterNumber": "113",
        "numImages": 18
    },
    {
        "chapterNumber": "114",
        "numImages": 18
    },
    {
        "chapterNumber": "115",
        "numImages": 17
    },
    {
        "chapterNumber": "116",
        "numImages": 23
    },
    {
        "chapterNumber": "117",
        "numImages": 15
    },
    {
        "chapterNumber": "118",
        "numImages": 18
    },
    {
        "chapterNumber": "119",
        "numImages": 16
    },
    {
        "chapterNumber": "120",
        "numImages": 20
    },
    {
        "chapterNumber": "121",
        "numImages": 17
    },
    {
        "chapterNumber": "122",
        "numImages": 18
    },
    {
        "chapterNumber": "123",
        "numImages": 19
    },
    {
        "chapterNumber": "124",
        "numImages": 19
    },
    {
        "chapterNumber": "125",
        "numImages": 18
    },
    {
        "chapterNumber": "126",
        "numImages": 20
    },
    {
        "chapterNumber": "127",
        "numImages": 19
    },
    {
        "chapterNumber": "128",
        "numImages": 18
    },
    {
        "chapterNumber": "129",
        "numImages": 16
    },
    {
        "chapterNumber": "130",
        "numImages": 20
    },
    {
        "chapterNumber": "131",
        "numImages": 18
    },
    {
        "chapterNumber": "132",
        "numImages": 19
    },
    {
        "chapterNumber": "133",
        "numImages": 22
    },
    {
        "chapterNumber": "134",
        "numImages": 20
    },
    {
        "chapterNumber": "135",
        "numImages": 22
    },
    {
        "chapterNumber": "136",
        "numImages": 19
    },
    {
        "chapterNumber": "137",
        "numImages": 18
    },
    {
        "chapterNumber": "138",
        "numImages": 19
    },
    {
        "chapterNumber": "139",
        "numImages": 19
    },
    {
        "chapterNumber": "140",
        "numImages": 19
    },
    {
        "chapterNumber": "141",
        "numImages": 15
    },
    {
        "chapterNumber": "142",
        "numImages": 22
    },
    {
        "chapterNumber": "143",
        "numImages": 16
    },
    {
        "chapterNumber": "144",
        "numImages": 37
    },
    {
        "chapterNumber": "145",
        "numImages": 17
    },
    {
        "chapterNumber": "146",
        "numImages": 18
    },
    {
        "chapterNumber": "147",
        "numImages": 20
    },
    {
        "chapterNumber": "148",
        "numImages": 15
    },
    {
        "chapterNumber": "149",
        "numImages": 14
    },
    {
        "chapterNumber": "150",
        "numImages": 16
    },
    {
        "chapterNumber": "151",
        "numImages": 18
    },
    {
        "chapterNumber": "152",
        "numImages": 18
    },
    {
        "chapterNumber": "153",
        "numImages": 16
    },
    {
        "chapterNumber": "154",
        "numImages": 17
    },
    {
        "chapterNumber": "155",
        "numImages": 17
    },
    {
        "chapterNumber": "156",
        "numImages": 17
    },
    {
        "chapterNumber": "157",
        "numImages": 15
    },
    {
        "chapterNumber": "158",
        "numImages": 15
    },
    {
        "chapterNumber": "159",
        "numImages": 17
    },
    {
        "chapterNumber": "160",
        "numImages": 18
    },
    {
        "chapterNumber": "161",
        "numImages": 17
    },
    {
        "chapterNumber": "162",
        "numImages": 13
    },
    {
        "chapterNumber": "163",
        "numImages": 16
    },
    {
        "chapterNumber": "164",
        "numImages": 17
    },
    {
        "chapterNumber": "165",
        "numImages": 17
    },
    {
        "chapterNumber": "166",
        "numImages": 17
    },
    {
        "chapterNumber": "167",
        "numImages": 17
    },
    {
        "chapterNumber": "168",
        "numImages": 17
    },
    {
        "chapterNumber": "169",
        "numImages": 18
    },
    {
        "chapterNumber": "170",
        "numImages": 16
    },
    {
        "chapterNumber": "171",
        "numImages": 15
    },
    {
        "chapterNumber": "172",
        "numImages": 15
    },
    {
        "chapterNumber": "173",
        "numImages": 17
    },
    {
        "chapterNumber": "174",
        "numImages": 17
    },
    {
        "chapterNumber": "175",
        "numImages": 15
    },
    {
        "chapterNumber": "176",
        "numImages": 17
    },
    {
        "chapterNumber": "177",
        "numImages": 16
    },
    {
        "chapterNumber": "178",
        "numImages": 17
    },
    {
        "chapterNumber": "179",
        "numImages": 16
    },
    {
        "chapterNumber": "180",
        "numImages": 16
    },
    {
        "chapterNumber": "181",
        "numImages": 14
    },
    {
        "chapterNumber": "182",
        "numImages": 16
    },
    {
        "chapterNumber": "183",
        "numImages": 17
    },
    {
        "chapterNumber": "184",
        "numImages": 17
    },
    {
        "chapterNumber": "185",
        "numImages": 15
    },
    {
        "chapterNumber": "186",
        "numImages": 16
    },
    {
        "chapterNumber": "187",
        "numImages": 17
    },
    {
        "chapterNumber": "188",
        "numImages": 12
    },
    {
        "chapterNumber": "189",
        "numImages": 15
    },
    {
        "chapterNumber": "190",
        "numImages": 14
    },
    {
        "chapterNumber": "191",
        "numImages": 15
    },
    {
        "chapterNumber": "192",
        "numImages": 19
    },
    {
        "chapterNumber": "193",
        "numImages": 15
    },
    {
        "chapterNumber": "194",
        "numImages": 12
    },
    {
        "chapterNumber": "195",
        "numImages": 16
    },
    {
        "chapterNumber": "196",
        "numImages": 14
    },
    {
        "chapterNumber": "197",
        "numImages": 15
    },
    {
        "chapterNumber": "198",
        "numImages": 13
    },
    {
        "chapterNumber": "199",
        "numImages": 13
    },
    {
        "chapterNumber": "200",
        "numImages": 11
    },
    {
        "chapterNumber": "201",
        "numImages": 20
    },
    {
        "chapterNumber": "202",
        "numImages": 14
    },
    {
        "chapterNumber": "203",
        "numImages": 26
    },
    {
        "chapterNumber": "204",
        "numImages": 15
    },
    {
        "chapterNumber": "205",
        "numImages": 16
    },
    {
        "chapterNumber": "206",
        "numImages": 16
    },
    {
        "chapterNumber": "207",
        "numImages": 16
    },
    {
        "chapterNumber": "208",
        "numImages": 13
    },
    {
        "chapterNumber": "209",
        "numImages": 16
    },
    {
        "chapterNumber": "210",
        "numImages": 16
    },
    {
        "chapterNumber": "211",
        "numImages": 13
    },
    {
        "chapterNumber": "212",
        "numImages": 14
    },
    {
        "chapterNumber": "213",
        "numImages": 14
    },
    {
        "chapterNumber": "214",
        "numImages": 17
    },
    {
        "chapterNumber": "215",
        "numImages": 14
    },
    {
        "chapterNumber": "216",
        "numImages": 14
    },
    {
        "chapterNumber": "217",
        "numImages": 14
    },
    {
        "chapterNumber": "218",
        "numImages": 16
    },
    {
        "chapterNumber": "219",
        "numImages": 15
    },
    {
        "chapterNumber": "220",
        "numImages": 16
    },
    {
        "chapterNumber": "221",
        "numImages": 14
    },
    {
        "chapterNumber": "222",
        "numImages": 15
    },
    {
        "chapterNumber": "223",
        "numImages": 15
    },
    {
        "chapterNumber": "224",
        "numImages": 14
    },
    {
        "chapterNumber": "225",
        "numImages": 15
    },
    {
        "chapterNumber": "226",
        "numImages": 15
    },
    {
        "chapterNumber": "227",
        "numImages": 15
    },
    {
        "chapterNumber": "228",
        "numImages": 14
    },
    {
        "chapterNumber": "229",
        "numImages": 17
    },
    {
        "chapterNumber": "230",
        "numImages": 12
    },
    {
        "chapterNumber": "231",
        "numImages": 16
    },
    {
        "chapterNumber": "232",
        "numImages": 15
    },
    {
        "chapterNumber": "233",
        "numImages": 16
    },
    {
        "chapterNumber": "234",
        "numImages": 15
    },
    {
        "chapterNumber": "235",
        "numImages": 19
    },
    {
        "chapterNumber": "236",
        "numImages": 16
    },
    {
        "chapterNumber": "237",
        "numImages": 16
    },
    {
        "chapterNumber": "238",
        "numImages": 13
    },
    {
        "chapterNumber": "239",
        "numImages": 14
    },
    {
        "chapterNumber": "240",
        "numImages": 14
    },
    {
        "chapterNumber": "241",
        "numImages": 18
    },
    {
        "chapterNumber": "242",
        "numImages": 17
    },
    {
        "chapterNumber": "243",
        "numImages": 20
    },
    {
        "chapterNumber": "244",
        "numImages": 18
    },
    {
        "chapterNumber": "245",
        "numImages": 17
    },
    {
        "chapterNumber": "246",
        "numImages": 16
    },
    {
        "chapterNumber": "247",
        "numImages": 14
    },
    {
        "chapterNumber": "248",
        "numImages": 13
    },
    {
        "chapterNumber": "249",
        "numImages": 15
    },
    {
        "chapterNumber": "250",
        "numImages": 13
    },
    {
        "chapterNumber": "251",
        "numImages": 13
    },
    {
        "chapterNumber": "252",
        "numImages": 13
    },
    {
        "chapterNumber": "253",
        "numImages": 14
    },
    {
        "chapterNumber": "254",
        "numImages": 15
    },
    {
        "chapterNumber": "255",
        "numImages": 15
    },
    {
        "chapterNumber": "256",
        "numImages": 15
    },
    {
        "chapterNumber": "257",
        "numImages": 17
    },
    {
        "chapterNumber": "258",
        "numImages": 15
    },
    {
        "chapterNumber": "259",
        "numImages": 15
    },
    {
        "chapterNumber": "260",
        "numImages": 14
    },
    {
        "chapterNumber": "261",
        "numImages": 16
    },
    {
        "chapterNumber": "262",
        "numImages": 17
    },
    {
        "chapterNumber": "263",
        "numImages": 15
    },
    {
        "chapterNumber": "264",
        "numImages": 17
    },
    {
        "chapterNumber": "265",
        "numImages": 15
    },
    {
        "chapterNumber": "266",
        "numImages": 19
    },
    {
        "chapterNumber": "267",
        "numImages": 20
    },
    {
        "chapterNumber": "268",
        "numImages": 14
    },
    {
        "chapterNumber": "269",
        "numImages": 14
    },
    {
        "chapterNumber": "270",
        "numImages": 18
    },
    {
        "chapterNumber": "271",
        "numImages": 17
    },
    {
        "chapterNumber": "272",
        "numImages": 17
    },
    {
        "chapterNumber": "273",
        "numImages": 16
    },
    {
        "chapterNumber": "274",
        "numImages": 17
    },
    {
        "chapterNumber": "275",
        "numImages": 17
    },
    {
        "chapterNumber": "276",
        "numImages": 18
    },
    {
        "chapterNumber": "277",
        "numImages": 16
    },
    {
        "chapterNumber": "278",
        "numImages": 17
    },
    {
        "chapterNumber": "279",
        "numImages": 17
    },
    {
        "chapterNumber": "280",
        "numImages": 17
    },
    {
        "chapterNumber": "281",
        "numImages": 18
    },
    {
        "chapterNumber": "282",
        "numImages": 15
    },
    {
        "chapterNumber": "283",
        "numImages": 16
    },
    {
        "chapterNumber": "284",
        "numImages": 16
    },
    {
        "chapterNumber": "285",
        "numImages": 16
    },
    {
        "chapterNumber": "286",
        "numImages": 15
    },
    {
        "chapterNumber": "287",
        "numImages": 16
    },
    {
        "chapterNumber": "288",
        "numImages": 16
    },
    {
        "chapterNumber": "289",
        "numImages": 17
    },
    {
        "chapterNumber": "290",
        "numImages": 15
    },
    {
        "chapterNumber": "291",
        "numImages": 14
    },
    {
        "chapterNumber": "292",
        "numImages": 14
    },
    {
        "chapterNumber": "293",
        "numImages": 17
    },
    {
        "chapterNumber": "294",
        "numImages": 15
    },
    {
        "chapterNumber": "295",
        "numImages": 16
    },
    {
        "chapterNumber": "296",
        "numImages": 19
    },
    {
        "chapterNumber": "297",
        "numImages": 19
    },
    {
        "chapterNumber": "298",
        "numImages": 19
    },
    {
        "chapterNumber": "299",
        "numImages": 19
    },
    {
        "chapterNumber": "300",
        "numImages": 16
    },
    {
        "chapterNumber": "301",
        "numImages": 17
    },
    {
        "chapterNumber": "302",
        "numImages": 16
    },
    {
        "chapterNumber": "303",
        "numImages": 15
    },
    {
        "chapterNumber": "304",
        "numImages": 16
    },
    {
        "chapterNumber": "305",
        "numImages": 16
    },
    {
        "chapterNumber": "306",
        "numImages": 17
    },
    {
        "chapterNumber": "307",
        "numImages": 16
    },
    {
        "chapterNumber": "308",
        "numImages": 15
    },
    {
        "chapterNumber": "309",
        "numImages": 17
    },
    {
        "chapterNumber": "310",
        "numImages": 18
    },
    {
        "chapterNumber": "311",
        "numImages": 14
    },
    {
        "chapterNumber": "312",
        "numImages": 14
    },
    {
        "chapterNumber": "313",
        "numImages": 20
    },
    {
        "chapterNumber": "314",
        "numImages": 18
    },
    {
        "chapterNumber": "315",
        "numImages": 15
    },
    {
        "chapterNumber": "316",
        "numImages": 17
    },
    {
        "chapterNumber": "317",
        "numImages": 16
    },
    {
        "chapterNumber": "318",
        "numImages": 14
    },
    {
        "chapterNumber": "319",
        "numImages": 19
    },
    {
        "chapterNumber": "320",
        "numImages": 18
    },
    {
        "chapterNumber": "321",
        "numImages": 15
    },
    {
        "chapterNumber": "322",
        "numImages": 17
    },
    {
        "chapterNumber": "323",
        "numImages": 17
    },
    {
        "chapterNumber": "324",
        "numImages": 17
    },
    {
        "chapterNumber": "325",
        "numImages": 17
    },
    {
        "chapterNumber": "326",
        "numImages": 16
    },
    {
        "chapterNumber": "327",
        "numImages": 16
    },
    {
        "chapterNumber": "328",
        "numImages": 17
    },
    {
        "chapterNumber": "329",
        "numImages": 16
    },
    {
        "chapterNumber": "330",
        "numImages": 17
    },
    {
        "chapterNumber": "331",
        "numImages": 16
    },
    {
        "chapterNumber": "332",
        "numImages": 18
    },
    {
        "chapterNumber": "333",
        "numImages": 16
    },
    {
        "chapterNumber": "334",
        "numImages": 17
    },
    {
        "chapterNumber": "335",
        "numImages": 17
    },
    {
        "chapterNumber": "336",
        "numImages": 17
    },
    {
        "chapterNumber": "337",
        "numImages": 18
    },
    {
        "chapterNumber": "338",
        "numImages": 14
    },
    {
        "chapterNumber": "339",
        "numImages": 16
    },
    {
        "chapterNumber": "340",
        "numImages": 15
    },
    {
        "chapterNumber": "341",
        "numImages": 15
    },
    {
        "chapterNumber": "342",
        "numImages": 17
    },
    {
        "chapterNumber": "343",
        "numImages": 15
    },
    {
        "chapterNumber": "344",
        "numImages": 17
    },
    {
        "chapterNumber": "345",
        "numImages": 11
    },
    {
        "chapterNumber": "346",
        "numImages": 15
    },
    {
        "chapterNumber": "347",
        "numImages": 14
    },
    {
        "chapterNumber": "348",
        "numImages": 13
    },
    {
        "chapterNumber": "349",
        "numImages": 13
    },
    {
        "chapterNumber": "350",
        "numImages": 19
    },
    {
        "chapterNumber": "351",
        "numImages": 17
    },
    {
        "chapterNumber": "352",
        "numImages": 13
    },
    {
        "chapterNumber": "353",
        "numImages": 18
    },
    {
        "chapterNumber": "354",
        "numImages": 16
    },
    {
        "chapterNumber": "355",
        "numImages": 16
    },
    {
        "chapterNumber": "356",
        "numImages": 15
    },
    {
        "chapterNumber": "357",
        "numImages": 15
    },
    {
        "chapterNumber": "358",
        "numImages": 14
    },
    {
        "chapterNumber": "359",
        "numImages": 19
    },
    {
        "chapterNumber": "360",
        "numImages": 17
    },
    {
        "chapterNumber": "361",
        "numImages": 10
    },
    {
        "chapterNumber": "362",
        "numImages": 15
    },
    {
        "chapterNumber": "363",
        "numImages": 14
    },
    {
        "chapterNumber": "364",
        "numImages": 14
    },
    {
        "chapterNumber": "365",
        "numImages": 13
    },
    {
        "chapterNumber": "366",
        "numImages": 16
    },
    {
        "chapterNumber": "367",
        "numImages": 19
    },
    {
        "chapterNumber": "368",
        "numImages": 15
    },
    {
        "chapterNumber": "369",
        "numImages": 15
    },
    {
        "chapterNumber": "370",
        "numImages": 14
    },
    {
        "chapterNumber": "371",
        "numImages": 15
    },
    {
        "chapterNumber": "372",
        "numImages": 15
    },
    {
        "chapterNumber": "373",
        "numImages": 17
    },
    {
        "chapterNumber": "374",
        "numImages": 15
    },
    {
        "chapterNumber": "375",
        "numImages": 14
    },
    {
        "chapterNumber": "376",
        "numImages": 9
    },
    {
        "chapterNumber": "377",
        "numImages": 10
    },
    {
        "chapterNumber": "378",
        "numImages": 14
    },
    {
        "chapterNumber": "379",
        "numImages": 14
    },
    {
        "chapterNumber": "380",
        "numImages": 17
    },
    {
        "chapterNumber": "381",
        "numImages": 14
    },
    {
        "chapterNumber": "382",
        "numImages": 15
    },
    {
        "chapterNumber": "383",
        "numImages": 16
    },
    {
        "chapterNumber": "384",
        "numImages": 15
    },
    {
        "chapterNumber": "385",
        "numImages": 17
    },
    {
        "chapterNumber": "386",
        "numImages": 15
    },
    {
        "chapterNumber": "387",
        "numImages": 16
    },
    {
        "chapterNumber": "388",
        "numImages": 11
    },
    {
        "chapterNumber": "389",
        "numImages": 10
    },
    {
        "chapterNumber": "390",
        "numImages": 11
    },
    {
        "chapterNumber": "391",
        "numImages": 8
    },
    {
        "chapterNumber": "392",
        "numImages": 13
    },
    {
        "chapterNumber": "393",
        "numImages": 15
    },
    {
        "chapterNumber": "394",
        "numImages": 15
    },
    {
        "chapterNumber": "395",
        "numImages": 14
    },
    {
        "chapterNumber": "396",
        "numImages": 15
    },
    {
        "chapterNumber": "397",
        "numImages": 7
    },
    {
        "chapterNumber": "398",
        "numImages": 15
    },
    {
        "chapterNumber": "399",
        "numImages": 14
    },
    {
        "chapterNumber": "400",
        "numImages": 14
    },
    {
        "chapterNumber": "401",
        "numImages": 15
    },
    {
        "chapterNumber": "402",
        "numImages": 14
    },
    {
        "chapterNumber": "403",
        "numImages": 15
    },
    {
        "chapterNumber": "404",
        "numImages": 11
    },
    {
        "chapterNumber": "405",
        "numImages": 14
    },
    {
        "chapterNumber": "406",
        "numImages": 15
    },
    {
        "chapterNumber": "407",
        "numImages": 13
    },
    {
        "chapterNumber": "408",
        "numImages": 12
    },
    {
        "chapterNumber": "409",
        "numImages": 10
    },
    {
        "chapterNumber": "410",
        "numImages": 16
    },
    {
        "chapterNumber": "411",
        "numImages": 13
    },
    {
        "chapterNumber": "412",
        "numImages": 15
    },
    {
        "chapterNumber": "413",
        "numImages": 14
    },
    {
        "chapterNumber": "414",
        "numImages": 14
    },
    {
        "chapterNumber": "415",
        "numImages": 10
    },
    {
        "chapterNumber": "416",
        "numImages": 14
    },
    {
        "chapterNumber": "417",
        "numImages": 15
    },
    {
        "chapterNumber": "418",
        "numImages": 14
    },
    {
        "chapterNumber": "419",
        "numImages": 18
    },
    {
        "chapterNumber": "420",
        "numImages": 16
    },
    {
        "chapterNumber": "421",
        "numImages": 15
    },
    {
        "chapterNumber": "422",
        "numImages": 15
    },
    {
        "chapterNumber": "423",
        "numImages": 16
    },
    {
        "chapterNumber": "424",
        "numImages": 16
    },
    {
        "chapterNumber": "425",
        "numImages": 16
    }
];