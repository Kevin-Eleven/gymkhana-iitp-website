export type Club = {
  name: string;
  logo: string;
  description: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
};

export type Section = {
  id: string;
  title: string;
  description?: string;
  items: Club[];
};

/* ================= SOCIETIES ================= */

export const societies: Section = {
  id: 'societies',
  title: 'Our Societies',
  items: [
    {
      name: 'STC',
      logo: 'https://stc.iitp.ac.in/assets/img/logo.png',
      description:
        'Student Technical Council unifies technical clubs, research activities, and projects, fostering collaboration and innovation among students.',
      facebook: 'https://www.facebook.com/stc.iitp/',
      instagram: 'https://www.instagram.com/stc.iitp/',
    },
    {
      name: 'HOSCA',
      logo: '/images/hosca.png',
      description:
        'HoSCA promotes a diverse and engaging campus experience through cultural events that unite people from different backgrounds.',
      facebook: 'https://www.facebook.com/iitp.sociocultural/',
      instagram: 'https://www.instagram.com/hosca_iitp/',
    },
    {
      name: 'Sports',
      logo: 'https://www.iitp.ac.in/sports/images/SPORTS_IITPATNA.png',
      description:
        'The Sports Council fosters athletic excellence, teamwork, discipline, and healthy competition.',
    },
    {
      name: 'Academics',
      logo: '/images/logo.png',
      description:
        'The Academics Council promotes intellectual growth, academic excellence, and innovation.',
    },
    {
      name: 'SWB',
      logo: '/images/logo.png',
      description:
        'The Student Welfare Body ensures well-being, guidance, and student support.',
    },
    {
      name: 'Mess',
      logo: '/images/logo.png',
      description:
        'The Mess Committee strives to provide nutritious and satisfying meals.',
    },
  ],
};

/* ================= STC CLUBS ================= */

export const stcClubs: Section = {
  id: 'stc',
  title: 'STC Clubs',
  description:
    'A tech-driven ecosystem where interdisciplinary projects, competitions, and research thrive.',
  items: [
    {
      name: 'ACE',
      logo: '/images/clublogos/ACElogo.webp',
      description:
        'Association of Civil Engineers facilitates workshops, student-faculty interaction, and academic growth.',
      facebook: 'https://www.facebook.com/ACE.IITP',
      instagram: 'https://www.instagram.com/ace_iitp',
      linkedin: 'https://www.linkedin.com/company/ace-iit-patna',
    },
    {
      name: 'NJACK',
      logo: '/images/clublogos/NJACKLogo.webp',
      description:
        'NJACK fosters a passionate coding community across diverse computer science domains.',
      facebook: 'https://www.facebook.com/njack.iitp',
      instagram: 'https://www.instagram.com/njackiitp/',
      linkedin: 'https://in.linkedin.com/company/njack-iit-patna',
    },
    {
      name: 'AP Club',
      logo: '/images/clublogos/APCIITPatnalogo.webp',
      description:
        'Astronomy & Particle Physics club explores discoveries from nano-worlds to the cosmos.',
      facebook: 'https://www.facebook.com/apclub.iitp',
      instagram: 'https://www.instagram.com/apclub.iitp/',
      linkedin: 'https://www.linkedin.com/company/ap-club-iitp',
    },
    {
      name: 'SCME',
      logo: '/images/clublogos/SCMELogo.webp',
      description:
        'Mechanical engineering society conducting lectures, workshops, and technical events.',
      facebook: 'https://www.facebook.com/SCMEIITP/',
      instagram: 'https://www.instagram.com/scme_iitp/',
    },
    {
      name: 'MATES',
      logo: '/images/clublogos/Mateslogo.webp',
      description:
        'Materials Engineering society cultivating curiosity, creativity, and ethics.',
      facebook: 'https://www.facebook.com/MatES.IITP/',
      instagram: 'https://instagram.com/mates__iitp',
      linkedin:
        'https://www.linkedin.com/company/mates-materials-engineering-society-iit-patna',
    },
    {
      name: 'ChESSx',
      logo: '/images/clublogos/ChESSxLogo.webp',
      description:
        'Chemical engineering society bridging academic knowledge and industry skills.',
      facebook: 'https://www.facebook.com/chemicaliitp/',
      instagram: 'https://instagram.com/chessx_iitp',
    },
    {
      name: 'Sparkonics',
      logo: '/images/clublogos/sparkonicsLogo.webp',
      description:
        'Electrical engineering society tackling real-world engineering challenges.',
      facebook: 'https://www.facebook.com/sparkonics',
      instagram: 'https://www.instagram.com/sparkonics.iitp/',
      linkedin: 'https://in.linkedin.com/company/sparkonics',
    },
    {
      name: 'Phoenix (Robocon)',
      logo: '/images/clublogos/Phoenix.png',
      description:
        'Official robotics contingent of IIT Patna participating in ABU Robocon.',
      facebook: 'https://www.facebook.com/teamphoenixiitp/',
      instagram: 'https://instagram.com/robocon.iitp',
    },
    {
      name: "Tinkerer's",
      logo: '/images/clublogos/TinkersLogo.webp',
      description:
        'A student-run lab encouraging hands-on building and creative freedom.',
      facebook: 'https://www.facebook.com/TInkerersLabIITP/',
      instagram: 'https://instagram.com/tinkerers_lab_iitp',
      linkedin: 'https://www.linkedin.com/company/tinkerers-lab-iitp',
    },
    {
      name: 'MoodBoard',
      logo: '/images/clublogos/MoodBoard.webp',
      description:
        'Design club fostering visual, product, and UX design skills.',
      instagram: 'https://instagram.com/designclub.iitp',
    },
    {
      name: 'RNA Club',
      logo: '/images/clublogos/RnALogo.webp',
      description:
        'Robotics and Aviation club focusing on drones and MAVs.',
    },
    {
      name: 'Finance',
      logo: '/images/clublogos/FinanceClubIITPLogo.webp',
      description:
        'Finance club focusing on consulting, investing, and product management.',
      instagram: 'https://www.instagram.com/financeclub.iitp/',
      linkedin: 'https://www.linkedin.com/company/finance-club-iit-patna',
    },
  ],
};

/* ================= HOSCA CLUBS ================= */

export const hoscaClubs: Section = {
  id: 'hosca',
  title: 'HOSCA Clubs',
  description:
    'A vibrant cultural ecosystem of art, performance, creativity, and expression.',
  items: [
    {
      name: 'HOOT',
      logo: '/images/clublogos/hoot.webp',
      description:
        'Official speaking arts society refining debates, extempore, and storytelling.',
      instagram: 'https://instagram.com/hoot.iitp',
    },
    {
      name: 'Yavanika',
      logo: '/images/clublogos/yavanika.webp',
      description:
        'Dramatics society passionate about theatre and street plays.',
      instagram: 'https://instagram.com/yavanika_iitp',
    },
    {
      name: 'Quiz Club',
      logo: '/images/clublogos/quiz.webp',
      description:
        'Accio Quiz Wizards engage minds through trivia and puzzles.',
      instagram: 'https://instagram.com/qc_iitp',
    },
    {
      name: 'Syahi',
      logo: '/images/clublogos/syahi.webp',
      description:
        'Literary society celebrating poetry, prose, and creative writing.',
      instagram: 'https://instagram.com/syahi.iitp',
    },
    {
      name: 'Pixxel',
      logo: '/images/clublogos/Pixxel.webp',
      description:
        'Photography and videography club covering events and films.',
      instagram: 'https://instagram.com/pixxel_iitp',
    },
    {
      name: 'Anime Club',
      logo: '/images/clublogos/anime.webp',
      description:
        'Celebrating anime culture through screenings and discussions.',
      instagram: 'https://instagram.com/animeclub_iitp',
    },
    {
      name: 'Vincetroke',
      logo: '/images/clublogos/Vincetroke.webp',
      description:
        'Fine arts club conducting inclusive art workshops.',
      instagram: 'https://instagram.com/vincetroke.iitp',
    },
    {
      name: 'Aria',
      logo: '/images/clublogos/aria.webp',
      description:
        'Music society where collaboration and performance thrive.',
      instagram: 'https://instagram.com/aria_iitp',
    },
    {
      name: 'Exousia',
      logo: '/images/clublogos/exousia.webp',
      description:
        'Dance club embracing styles from classical to hip-hop.',
      instagram: 'https://instagram.com/exousia_iitp',
    },
    {
      name: 'Hexachrome',
      logo: '/images/clublogos/hexa.webp',
      description:
        'Puzzle-solving club sharpening minds through challenges.',
      instagram: 'https://instagram.com/hexachrome_official',
    },
  ],
};