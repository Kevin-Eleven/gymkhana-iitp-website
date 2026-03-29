export type Club = {
  name: string;
  logo: string;
  description: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
  website?: string;
};

export type Section = {
  id: string;
  title: string;
  link?:string;
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
      logo: './images/stc.png',
      description:
        'Student Technical Council unifies technical clubs, research activities, and projects, fostering collaboration and innovation among students.',
      facebook: 'https://www.facebook.com/stc.iitp/',
      instagram: 'https://www.instagram.com/iitpatna_stc',
      website: 'https://stc.iitp.ac.in/',
    },
    {
      name: 'HOSCA',
      logo: '/images/hosca.png',
      description:
        'HoSCA promotes a diverse and engaging campus experience through cultural events that unite people from different backgrounds. The club organizes activities that foster lifelong learning, community interaction, and showcase the talent of student managers.',
      facebook: 'https://www.facebook.com/iitp.sociocultural/',
      instagram: 'https://www.instagram.com/hosca_iitp/',
    },
    {
      name: 'Sports',
      logo: './images/sports.png',
      description:
        'The Sports Council at IIT Patna is where passion meets athleticism. We provide a platform for students to unleash their sporting prowess, fostering teamwork, discipline, and a healthy competitive spirit. Join us and let the games begin!',
    },
    {
      name: 'ACC',
      logo: './images/acc_1.png',
      description:
        'The Academics Council at IIT Patna is the intellectual hub where knowledge thrives. We strive to create a conducive environment for academic excellence, fostering curiosity, critical thinking, and innovation. Join us on a journey of intellectual growth and endless possibilities.',
      website: 'https://acc.iitp.ac.in/'
    },
    {
      name: 'SWB',
      logo: './images/swb.png',
      description:
        'The Student Welfare Body at IIT Patna is the pillar of support and care for every student. We work tirelessly to ensure the well-being and happiness of our students, providing guidance, resources, and fostering a sense of belonging. Join us in creating a nurturing community where every student thrives.',
    },
    {
      name: 'HAC',
      logo: './images/HAC.png',
      description:
        'The Mess Committee at IIT Patna strives to provide delicious and nutritious meals, catering to diverse tastes and dietary needs. Join us in creating a satisfying dining experience for all.',
    },
  ],
};

/* ================= STC CLUBS ================= */

export const stcClubs: Section = {
  id: 'stc',
  title: 'STC Clubs',
  description:
    'Unleashing a tech-driven revolution, where diverse clubs converge,    pioneering minds ignite, and innovative ideas come to life.A symphony of inter-disciplinary projects,competitions & research propels budding engineers to new frontiers & shaping the future of technology and spark groundbreaking innovations. For more details, Visit ',
  link: 'https://drive.google.com/file/d/128dQT1N_URNeYr4zo6f72VthmiS3oWiA/view',
  items: [
    {
      name: 'ACE',
      logo: '/images/clublogos/ACElogo.webp',
      description:
        'The Association of Civil Engineers is an official club of the Department of Civil and Environmental Engineering at IIT Patna. It aims to facilitate student-faculty interaction, provide a platform for showcasing work and knowledge, and enhance abilities through workshops and events.',
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
        'The Astronomy and Particle Physics Club at IIT Patna explores the universe through observation, research, and hands-on activities from meteor showers to black hole mysteries for both seasoned stargazers and curious beginners',
      facebook: 'https://www.facebook.com/apclub.iitp',
      instagram: 'https://www.instagram.com/apclub.iitp/',
      linkedin: 'https://www.linkedin.com/company/ap-club-iitp',
    },
    {
      name: 'SCME',
      logo: '/images/clublogos/SCMELogo.webp',
      description:
        'SCME was founded with the motive of engaging and encouraging Mechanical Engineering discipline related activities in IIT Patna. Since its inception, SCME has been conducting events, lectures and workshops round the year for the benefit of mechanical engineering students.',
      facebook: 'https://www.facebook.com/SCMEIITP/',
      instagram: 'https://www.instagram.com/scme_iitp/',

      youtube: 'https://www.youtube.com/channel/UCYzJrjjdxZ68DXrmY1RP0hg',
 
    },
    {
      name: 'MATES',
      logo: '/images/clublogos/Mateslogo.webp',
      description:
        'MaTES is a collaborative effort by students and faculty at IIT Patna to cultivate curiosity and interest in metallurgy and materials. Through engaging events, workshops, and guest lectures, they aim to enhance creativity, ethics, and societal awareness related to materials.',
      facebook: 'https://www.facebook.com/MatES.IITP/',
      instagram: 'https://instagram.com/mates__iitp',
      linkedin:
        'https://www.linkedin.com/company/mates-materials-engineering-society-iit-patna',

    },
    {
      name: 'ChESSx',
      logo: '/images/clublogos/ChESSxLogo.webp',
      description:
        'ChESSx stands for Chemical Engineering Students’ Society, IIT Patna . It aims to foster academic excellence, technical curiosity, and professional development among students through workshops, seminars, industry interactions, competitions, and collaborative projects. ChESSx also serves as a platform for students to connect with faculty, alumni, and industry experts while promoting innovation and learning in the field of chemical engineering.',
      facebook: 'https://www.facebook.com/chemicaliitp/',
      instagram: 'https://instagram.com/chessx_iitp',

      linkedin: 'https://www.linkedin.com/in/chemical-engineering-students-society-chessx-iit-patna-874725219',

    },
    {
      name: 'Sparkonics',
      logo: '/images/clublogos/sparkonicsLogo.webp',
      description:
        'We are the Electronics Society of IIT Patna. In our club, we dive into how microcontrollers are designed, how digital logic is implemented, and how hardware and software come together to build real systems. We spend time experimenting with circuits, programming MCUs, and understanding the logic behind embedded and digital designs.',
      facebook: 'https://www.facebook.com/sparkonics',
      instagram: 'https://www.instagram.com/sparkonics.iitp/',
      linkedin: 'https://in.linkedin.com/company/sparkonics',

    },
    {
      name: 'Phoenix (Robocon)',
      logo: '/images/clublogos/Phoenix.png',
      description:
        'Team Phoenix is the official robotics team of Indian Institute of Technology Patna (IIT Patna), dedicated to designing, building, and advancing innovative robotic systems. The team provides a collaborative platform for students to work on cutting-edge technologies in robotics, automation, and intelligent systems while gaining strong practical and research-oriented experience.  The team actively participates in prestigious national and international robotics competitions such as ABU Robocon, Indian Robotics Competition (I‑RoC), and e-Yantra Robotics Competition, along with various other robotics events and technical challenges. Through these competitions, members apply engineering principles to solve complex real-world problems and showcase technological innovation.  Team Phoenix works across multiple domains including CAD design, hardware prototyping, electronics, embedded systems, ROS, software development, and machine learning. By fostering teamwork, creativity, and technical excellence, the club aims to promote robotics culture at IIT Patna and represent the institute on leading robotics platforms.',
      facebook: 'https://www.facebook.com/teamphoenixiitp/',
      instagram: 'https://www.instagram.com/teamphoenix.iitp',

    },
    {
      name: "Tinkerer's",
      logo: '/images/clublogos/TinkersLogo.webp',
      description:
        "Tinkerer's Lab at IIT Patna allows you to build things on your own, from scratch. This gives you practical and hands-on experience. The lab is almost entirely student run.The lack of deadlines and pressure allows you to tinker and develop your ideas with full freedom.",
      facebook: 'https://www.facebook.com/TInkerersLabIITP/',
      instagram: 'https://instagram.com/tinkerers_lab_iitp',
      linkedin: 'https://www.linkedin.com/company/tinkerers-lab-iitp',

    },
    {
      name: 'MoodBoard',
      logo: '/images/clublogos/MoodBoard.webp',
      description:
        'The Moodboard Design Club of Indian Institute of Technology Patna is a student-led creative community focused on design, visual storytelling, and digital creativity. The club brings together students interested in areas like graphic design, UI/UX, branding, illustration',
      instagram: 'https://instagram.com/designclub.iitp',
      
    },
    {
      name: 'RNA Club',
      logo: '/images/clublogos/RnALogo.jpg',
      description:
        'RNA Club (Rocketry and Aviation Club) is a student driven club that works on projects related to rocketry and aviation. The club’s work includes designing and building model rockets, studying aerodynamics and propulsion, and conducting experiments and launches to gain practical experience in aerospace.',
      instagram:'https://www.instagram.com/rna.iitp',
    },
    {
      name: 'Finance',
      logo: '/images/clublogos/FinanceClubIITPLogo.webp',
      description:
        'The Finance Club, IIT Patna aims to promote interest and understanding of finance, investment, and financial markets among students. It organizes workshops, competitions, and discussions to develop practical financial and analytical skills.',
      instagram: 'https://www.instagram.com/financeclub.iitp/',
      linkedin: 'https://www.linkedin.com/company/finance-club-iit-patna',

    },
    {
      name: 'QTC',
      logo: '/images/clublogos/QTC.jpg',
      description:
        'The Quantum Technology Club at IIT Patna is a hub for students interested in quantum computing, communication, and emerging technologies. We organize workshops, discussions, and projects to foster learning, innovation, and collaboration in this cutting-edge field.',
      instagram: 'https://www.instagram.com/qtc.iitp?igsh=MXNmOWVxNjhncXZzbw==',
    },
    {
      name:'DWDG',
      logo: '/images/clublogos/DWDG.jpg',
      description:
        " DWDG is an international student network and think tank, connecting over 1,000 members across 40+ campuses in 15 countries. The Future Leaders Program, developed by Do Well Do Good, is a 22-week curriculum. Students go through intensive training, assignments,project-based learning, and research to develop and enhance their do well do good leadership and application skills.",
      instagram: 'https://www.instagram.com/dwdg.iitp/',
      linkedin: 'https://www.linkedin.com/company/do-well-do-good-future-leaders-iit-patna-chapter',
    },
    {
      name: '⁠⁠TIC',
      logo: '/images/clublogos/TIC.jpg',
      description:
        "IIT Patna's Trading Club - Focusing on Stock Trading, Derivative Trading and Market Insights",
      instagram: 'https://www.instagram.com/tic_iitpatna/',
      linkedin: 'https://www.linkedin.com/company/ticiitp/',
    },
    {
      name: '⁠⁠⁠ECell',
      logo: '/images/clublogos/Ecell.jpg',
      description:
        'E-Cell IIT Patna is a student organization dedicated to fostering entrepreneurial exploration and innovation. It provides a platform where students can acquire knowledge, develop skills, and pursue independent ventures. The Cell organizes workshops, competitive events, and interactive sessions with established entrepreneurs to offer hands-on exposure. Its flagship event, E-Summit, brings dynamic startup culture to the campus. Additionally, through StartIn, it transforms the campus into a vibrant space for street-style engagement and creative ideation. In essence, E-Cell IIT Patna encourages students to embrace unconventional thinking, take initiative, and embark on their own entrepreneurial journeys.',
      facebook: 'https://www.facebook.com/ecelliitp',
      instagram: 'https://www.instagram.com/ecell_iitpatna?igsh=MWtsM215dGVpZGFuNA==',
      linkedin: 'https://www.linkedin.com/school/ecell-iit-patna/',
    },
    {
      name: 'OptiMatx',
      logo: '/images/clublogos/optimatx.jpg',
      description:
        "Welcome to OptiMatX, the Mathematics and Computing Club of IIT Patna! We are a community of students and faculty who share a passion for Mathematics, Computer Science, and their obvious intersection. Our mission is to foster a collaborative and inclusive environment that supports the growth and development of our members' skills, knowledge, and networks. Whether you are a beginner or an experienced mathematician or computer scientist, our club has something to offer you.",
      instagram: 'https://www.instagram.com/optimatx.iitp/ ',
      linkedin: 'https://www.linkedin.com/company/optimatx-iit-patna/',
    },
  ],
};


/* ================= HOSCA CLUBS ================= */

export const hoscaClubs: Section = {
  id: 'hosca',
  title: 'HOSCA Clubs',
  description:
    'HoSCA promotes a diverse and engaging campus experience through cultural events that unite people from different backgrounds. The club organizes activities that foster lifelong learning, community interaction, and showcase the talent of student managers.For more details, Visit ',
  link: 'https://drive.google.com/file/d/1mgy02PG8SEqEWPbyXfpR90wMvAbBpi7I/view?usp=sharing',
  items: [
    {
      name: 'HOOT',
      logo: '/images/clublogos/hoot.webp',
      description:
        'HOOT, the House of Oratory Talents at IIT Patna, is the official speaking arts society. It provides a dynamic platform for refining public speaking skills, engaging in debates, extempore sessions, and storytelling. Hoot cultivates confident speakers who inspire change.',
      instagram: 'https://instagram.com/hoot.iitp',
      facebook: 'https://instagram.com/hoot.iitp?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/hoot.iitp?igshid=MzRlODBiNWFlZA==',
   
    },
    {
      name: 'Yavanika',
      logo: '/images/clublogos/yavanika.webp',
      description:
        'Yavanika is the dramatics society of IIT Patna, a vibrant collective of passionate performers, storytellers, and theatre enthusiasts who believe in the power of stage to inspire thought and emotion. Through stage plays, street plays, mime, and mono-acts, Yavanika brings stories to life that reflect society, challenge perspectives, and spark meaningful conversations. The society actively nurtures creativity, teamwork, and artistic expression, providing a platform for students to explore the art of theatre while representing IIT Patna at various cultural events and competitions.  Driven by dedication and creativity, Yavanika continues to build a culture where talent meets purpose, turning performances into powerful experiences both on and off the stage. 🎭',
      instagram: 'https://instagram.com/yavanika_iitp',
      facebook: 'https://instagram.com/yavanika_iitp?igshid=MzRlODBiNWFlZA==yavanika',
      linkedin: 'https://instagram.com/yavanika_iitp?igshid=MzRlODBiNWFlZA==yavanika',
     
    },
    {
      name: 'Quiz Club',
      logo: '/images/clublogos/quiz.webp',
      description:
        'Join Accio Quiz Wizards, a platform for knowledge enthusiasts. Engage in trivia, puzzles, and quizzes that sharpen your wits. Embark on an enchanting journey where fun meets learning, and knowledge reigns supreme. Let the games begin!',
      instagram: 'https://instagram.com/qc_iitp',
      facebook: 'https://instagram.com/qc_iitp?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/qc_iitp?igshid=MzRlODBiNWFlZA==',

    },
    {
      name: 'Syahi',
      logo: '/images/clublogos/syahi.webp',
      description:
        "Welcome to Syahi, the literary society at IIT Patna, where the power of literature and poetry is celebrated. Engage in discussions, recitals, and creative writing sessions that ignite the imagination. Let's weave a symphony of literary brilliance together at Syahi.",
      instagram: 'https://instagram.com/syahi.iitp',
      facebook: 'https://instagram.com/syahi.iitp?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/syahi.iitp?igshid=MzRlODBiNWFlZA==',
    
    },
    {
      name: 'Pixxel',
      logo: '/images/clublogos/Pixxel.webp',
      description:
        'Pixxel, the official photography and videography club at IIT Patna, welcomes individuals passionate about capturing the essence of the world. Join to develop skills in screenplay writing, storytelling, cinematography, and video editing. Engage in projects like yearbook videos, event coverage, and short films for Inter IIT competitions.',
      instagram: 'https://instagram.com/pixxel_iitp',
      facebook: 'https://instagram.com/pixxel_iitp?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/pixxel_iitp?igshid=MzRlODBiNWFlZA==',

    },
    {
      name: 'Anime Club',
      logo: '/images/clublogos/anime.webp',
      description:
        'Join the College Anime Club at IIT Patna to rediscover the joy of animation. Immerse yourself in imaginative worlds, connect with relatable characters, and celebrate anime culture through discussions, screenings, and cosplay. Let your imagination soar in this vibrant realm of animated wonders.',
      instagram: 'https://instagram.com/animeclub_iitp',
      facebook: 'https://instagram.com/animeclub_iitp?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/animeclub_iitp?igshid=MzRlODBiNWFlZA==',
     
    },
    {
      name: 'Vincetroke',
      logo: '/images/clublogos/Vincetroke.webp',
      description:
        "Vincetroke at IIT Patna fosters a vibrant fine arts section. Talented artists conduct inclusive workshops throughout the year, offering opportunities to explore and refine skills in various art forms. The students' awe-inspiring talents are showcased through exquisite sketches and paintings, reflecting their deep love for the art.",
      instagram: 'https://instagram.com/vincetroke.iitp',
      facebook: 'https://instagram.com/vincetroke.iitp?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/vincetroke.iitp?igshid=MzRlODBiNWFlZA==',
     
    },
    {
      name: 'Aria',
      logo: '/images/clublogos/aria.webp',
      description:
        'Aria, the Music Society of IIT Patna, embraces the belief that music is a language of the soul. The club offers a haven for passionate music enthusiasts to express themselves through various genres. Members collaborate, perform, and jam, captivating the campus community with their musical talents and upholding a rich legacy of musical excellence.',
      instagram: 'https://instagram.com/aria_iitp',
      facebook: 'https://instagram.com/aria_iitp?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/aria_iitp?igshid=MzRlODBiNWFlZA==',
    },
    {
      name: 'Exousia',
      logo: '/images/clublogos/exousia.webp',
      description:
        'Exousia, the dance club at IIT Patna, provides a vibrant platform for dancers to explore diverse styles and express their passion. From Indian classical to hip-hop and Bollywood, we celebrate the joy of movement. Join us and let creativity and expression take center stage.',
      instagram: 'https://instagram.com/exousia_iitp',
      facebook: 'https://instagram.com/exousia_iitp?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/exousia_iitp?igshid=MzRlODBiNWFlZA==',
     
    },
    {
      name: 'Hexachrome',
      logo: '/images/clublogos/hexa.webp',
      description:
        'Hexachrome, the Puzzle-solving Club at IIT Patna, offers a welcoming environment to explore diverse puzzles, stimulating cognitive development and critical thinking. Join our community to relieve stress and embark on a journey of mind-bending challenges and endless curiosity.',
      instagram: 'https://www.instagram.com/hexachrome_iitp/',
      facebook: 'https://instagram.com/hexachrome_official?igshid=MzRlODBiNWFlZA==',
      linkedin: 'https://instagram.com/hexachrome_official?igshid=MzRlODBiNWFlZA==',
    },
  ],
};