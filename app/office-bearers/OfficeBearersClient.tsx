'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Facebook, Linkedin, Instagram } from 'lucide-react';

interface Person {
  name: string;
  role: string;
  image: string;
  email?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}

interface YearGroup {
  year: string;
  vp: Person[];
  secretaries: Person[];
  reps: Person[];
}

const years: YearGroup[] = [
  {
    year: '2025–26',
    vp: [
      {
        name: 'Anirudh Singh',
        role: "VP Gymkhana '25",
        image: '/images/office/Anirudh Singh.jpg',
        email: 'vpgymkhana@iitp.ac.in',
      },
    ],
    secretaries: [
      {
        name: 'Akhand Singh',
        role: "Gensec Tech '25",
        image: '/images/office/Akhand Singh.jpg',
        email: 'gensec_tech@iitp.ac.in',
      },
      {
        name: 'Kashika Aggarwal',
        role: 'Gensec HoSCA',
        image: '/images/office/Kashika Aggarwal.jpg',
        email: 'gensec_cult@iitp.ac.in',
      },
      {
        name: 'Arpan Patel',
        role: 'Gensec Welfare',
        image: '/images/office/Arpan Patel.jpg',
        email: 'gensec_welfare@iitp.ac.in',
      },
      {
        name: 'Aashish Mishra',
        role: 'GenSec HAC',
        image: '/images/office/Aashish Mishra.jpeg',
        email: 'gensec_hac@iitp.ac.in',
      },
      {
        name: 'Yeshwanth Gosukonda',
        role: 'GenSec Sports',
        image: '/images/office/Yeshwanth Gosukonda.jpeg',
        email: 'gensec_sports@iitp.ac.in',
      },
    ],
    reps: [
      {
        name: 'Yash Raj',
        role: 'UG Representative',
        image: '/images/office/Yash Raj.jpeg',
        email: 'ugr@iitp.ac.in',
      },
      {
        name: 'Nikhil Kumar',
        role: 'PG Representative',
        image: '/images/office/No_Image_Available.jpg',
        email: 'pgr_gymkhana@iitp.ac.in',
      },
    ],
  },
  {
    year: '2024–25',
    vp: [
      {
        name: 'Shubham Satyam',
        role: "VP Gymkhana '24",
        image: '/images/office/shubham.jpg',
        email: 'shubham_2101ce54@iitp.ac.in',
      },
    ],
    secretaries: [
      {
        name: 'Kirtan Jain',
        role: "Gensec Tech '24",
        image: '/images/office/kirtan.jpg',
        email: 'kirtan_2101cs38@iitp.ac.in',
      },
      {
        name: 'Ankit Kumar',
        role: 'Gensec HoSCA',
        image: '/images/office/ankit.jpg',
        email: 'ankit_2101cb10@iitp.ac.in',
      },
      {
        name: 'Suryansh Bansal',
        role: 'Gensec Welfare',
        image: '/images/office/suryansh.jpg',
        email: 'suryansh_2101cb58@iitp.ac.in',
      },
      {
        name: 'T V S S Soureesh',
        role: 'Gensec HAC',
        image: '/images/office/soureesh.jpg',
        email: 'soureesh_2101mm35@iitp.ac.in',
      },
      {
        name: 'Shivam Kumar Dubey',
        role: 'Gensec Sports',
        image: '/images/office/shivam.jpg',
        email: 'shivam_2101me63@iitp.ac.in',
      },
    ],
    reps: [
      {
        name: 'Panav Arpit Raaj',
        role: 'UG Representative',
        image: '/images/office/panav.jpg',
        email: 'panav_2101ee48@iitp.ac.in',
      },
      {
        name: 'Aashish Ranjan',
        role: 'PG Representative',
        image: '/images/office/No_Image_Available.jpg',
        email: 'PGR_GYMKHANA@iitp.ac.in',
      },
    ],
  },
  {
    year: '2023–24',
    vp: [
      {
        name: 'Atul Kumar',
        role: "VP Gymkhana '23",
        image: '/images/office/No_Image_Available.jpg',
        email: 'atul_2001cs13@iitp.ac.in',
      },
    ],
    secretaries: [
      {
        name: 'Rishikesh Devanathan',
        role: "Gensec Tech '23",
        image: '/images/office/rishi2.jpg',
        email: 'rishikesh_2001cs85@iitp.ac.in',
        facebook: 'https://www.facebook.com/rishi.devanathan.5',
        linkedin: 'https://www.linkedin.com/in/rishikesh-devanathan/',
        instagram: 'https://www.instagram.com/rishi.devanathan/',
      },
      {
        name: 'Chirag Bhardwaj',
        role: 'Gensec HoSCA',
        image: '/images/office/chirag.png',
        email: 'chirag_2001mm10@iitp.ac.in',
        facebook: 'https://www.facebook.com/chirag.bhardwaj.399826',
        linkedin: 'https://www.linkedin.com/in/chirag-bhardwaj-016428217/',
        instagram: 'https://www.instagram.com/_chiragbhardwaj3107_/',
      },
      {
        name: 'Shivam Yadav',
        role: 'Gensec Welfare',
        image: '/images/office/2001me70.jpeg',
        email: 'shivam_2001me70@iitp.ac.in',
        facebook: 'https://www.facebook.com/profile.php?id=100007390173750',
        linkedin: 'https://www.linkedin.com/in/shivam-yadav-161a50201/',
        instagram: 'https://www.instagram.com/_.shivam_.y/',
      },
      {
        name: 'Kautuk Kumar',
        role: 'Gensec HAC',
        image: '/images/office/kautuk1.png',
        email: 'kautuk_2001cs37@iitp.ac.in',
        facebook: 'https://www.facebook.com/shrishkautuk.king',
        instagram: 'https://www.instagram.com/kautuk_kumar/',
      },
      {
        name: 'Aaryan Dhakad',
        role: 'Gensec Sports',
        image: '/images/office/2001cb01.jpeg',
        email: 'aaryan_2001cb01@iitp.ac.in',
        instagram: 'https://www.instagram.com/aaryan_dhakad/',
      },
    ],
    reps: [
      {
        name: 'Rohit Kumar',
        role: 'UG Representative',
        image: '/images/office/2001cs55.jpeg',
        email: 'rohit_2001cs55@iitp.ac.in',
        facebook: 'https://www.facebook.com/profile.php?id=100007148132611',
        linkedin: 'https://www.linkedin.com/in/rohit9710/',
        instagram: 'https://www.instagram.com/rohit_mishra9710/',
      },
      {
        name: 'Chandra Prakash Singh',
        role: 'PG Representative',
        image: '/images/office/1921ee04.jpeg',
        email: 'chandra_1921ee04@iitp.ac.in',
        linkedin: 'https://www.linkedin.com/in/chandra-prakash-singh-a5273422b/',
        instagram: 'https://www.instagram.com/_cp_0706000/',
      },
    ],
  },
  {
    year: '2022–23',
    vp: [
      {
        name: 'Kandukuri Rahul Preetham',
        role: "VP Gymkhana '22",
        image: '/images/office/RahulP.jpg',
        email: 'kandukuri_1901me31@iitp.ac.in',
        facebook: 'https://www.facebook.com/profile.php?id=100009258563783&mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/rahul-preetham-kandukuri',
        instagram: 'https://instagram.com/rahulpreetham_kandukuri?igshid=MzRlODBiNWFlZA==',
      },
    ],
    secretaries: [
      {
        name: 'Shivam Sahu',
        role: "Gensec Tech '22",
        image: '/images/office/ShivamS.jpg',
        email: 'shivam_1901cs55@iitp.ac.in',
        facebook: 'https://www.facebook.com/shivam.sahu.33?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/shivam-sahu-503',
        instagram: 'https://instagram.com/superb_shivam13?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Malothu Srikar Nayak',
        role: "Gensec HoSCA '22",
        image: '/images/office/Srikar.jpg',
        email: 'malothu_1901ee37@iitp.ac.in',
        facebook: 'https://www.facebook.com/srikar.nayak.12?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/srikar-malothu',
        instagram: 'https://instagram.com/srikar_it_is?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Tarusi Mittal',
        role: "Gensec Welfare '22",
        image: '/images/office/Tarushi.jpg',
        email: 'tarusi_1901cs65@iitp.ac.in',
        facebook: 'https://www.facebook.com/tarusi.mittal?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/tarusimittal',
        instagram: 'https://instagram.com/tarusimittal_12?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Ankit Anurag',
        role: "Gensec HAC '22",
        image: '/images/office/Ankit_Anurag_GenSec_HAC.jpg',
        email: 'ankit_1901ee12@iitp.ac.in',
        linkedin: 'https://www.linkedin.com/in/anuragankit',
        instagram: 'https://instagram.com/ankitanurag0704?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Akarsh Yadav',
        role: "Gensec Sports '22",
        image: '/images/office/Akarsh.jpg',
        email: 'akarsh_1901ee08@iitp.ac.in',
        facebook: 'https://www.facebook.com/profile.php?id=100004801305711&mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/akarsh-yadav-16861b1a4',
        instagram: 'https://instagram.com/yakarsh09?igshid=MzRlODBiNWFlZA==',
      },
    ],
    reps: [
      {
        name: 'Sakshi Singh',
        role: 'UG Representative',
        image: '/images/office/Sakshi1.jpg',
        email: 'sakshi_1901cb40@iitp.ac.in',
        facebook: 'https://www.facebook.com/profile.php?id=100040510351336&mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/akarsh-yadav-16861b1a4',
        instagram: 'https://instagram.com/sakshisingh_0410?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Prabhakar Kumar Singh',
        role: 'PG Representative',
        image: '/images/office/1921ee04.jpeg',
        email: 'prabhakar_1921me14@iitp.ac.in',
      },
    ],
  },
  {
    year: '2021–22',
    vp: [
      {
        name: 'Vijaya Gonugade',
        role: "VP Gymkhana '21",
        image: '/images/office/Vijaya.jpg',
        email: '1801ce32@iitp.ac.in',
        facebook: 'https://www.facebook.com/vijaya.gonugade.35?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/vijaya-gonugade-8a6271188/',
        instagram: 'https://instagram.com/vijayagonugade?igshid=MzRlODBiNWFlZA==',
      },
    ],
    secretaries: [
      {
        name: 'Satyam Shukla',
        role: "Gensec Tech '21",
        image: '/images/office/saty.png',
        email: 'satyam.pee17@iitp.ac.in',
        facebook: 'https://www.facebook.com/satyam.shukla3?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/satyam-shukla-606090123/',
        instagram: 'https://instagram.com/satyam_iitp?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Ankush Panghal',
        role: "Gensec HoSCA '21",
        image: '/images/office/Ankush Panghal Gensec HoSCA.png',
        email: '1801cb04@iitp.ac.in',
        linkedin: 'http://linkedin.com/in/ankush-panghal-38291416b',
        instagram: 'https://instagram.com/chaudhary_ankushpanghal?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Shashwat Mahajan',
        role: "Gensec Welfare '21",
        image: '/images/office/Shashwat Mahajan_GenSec_Welfare.jpg',
        email: '1801cs46@iitp.ac.in',
        facebook: 'https://www.facebook.com/shashwat211?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/shashwat211/',
        instagram: 'https://instagram.com/shashwat211?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Vivek Dixit',
        role: "Gensec HAC '21",
        image: '/images/office/Vivek_Kumar_GENSEC_HAC_2021.jpeg',
        instagram: 'https://instagram.com/vivekdixit194?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Jagan Mohan Reddy',
        role: "Gensec Sports '21",
        image: '/images/office/Jagan_Mohan_Ex_Gen_Sec_Sports.jpg',
        email: '1801me34@iitp.ac.in',
        facebook: 'https://www.facebook.com/jagan.mohan.3760430?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/jagan-mohan-585295169/',
        instagram: 'https://instagram.com/jagan_mohan7?igshid=MzRlODBiNWFlZA==',
      },
    ],
    reps: [
      {
        name: 'Amish Mittal',
        role: 'UG Representative',
        image: '/images/office/amish.jpg',
        email: '1801cs07@iitp.ac.in',
        facebook: 'https://www.facebook.com/amish.mittal.fliptrail?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/amishmittal/',
        instagram: 'https://instagram.com/fliptrail?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Mukesh',
        role: 'PG Representative',
        image: '/images/office/No_Image_Available.jpg',
      },
    ],
  },
  {
    year: '2020–21',
    vp: [
      {
        name: 'Rahul Pandey',
        role: "VP Gymkhana '20",
        image: '/images/office/RahulPan.jpg',
        email: 'rahulpandey.cs17@iitp.ac.in',
        facebook: 'https://www.facebook.com/rahulpandey1605/',
        linkedin: 'https://www.linkedin.com/in/rahulpandey1605/',
      },
    ],
    secretaries: [
      {
        name: 'Satyam Shukla',
        role: "Gensec Tech '20",
        image: '/images/office/saty.png',
        email: 'satyam.pee17@iitp.ac.in',
        facebook: 'https://www.facebook.com/satyam.shukla3?mibextid=ZbWKwL',
        linkedin: 'https://www.linkedin.com/in/satyam-shukla-606090123/',
        instagram: 'https://instagram.com/satyam_iitp?igshid=MzRlODBiNWFlZA==',
      },
      {
        name: 'Priyansh Singh Rao',
        role: "Gensec HoSCA '20",
        image: '/images/office/No_Image_Available.jpg',
        email: 'priyansh.ch17@iitp.ac.in',
        linkedin: 'https://www.linkedin.com/in/priyanshrao/',
      },
      {
        name: 'Rajeshwar Ojha',
        role: "Gensec Welfare '20",
        image: '/images/office/Rajeshwar Ojha.jpg',
        email: 'rajeshwar.ee17@iitp.ac.in',
        linkedin: 'https://www.linkedin.com/in/rajeshwar-ojha-56b9b3158/',
        instagram: 'https://www.instagram.com/o_raju99/',
      },
      {
        name: 'Atul Upadhyay',
        role: "Gensec HAC '20",
        image: '/images/office/Atul.jpg',
        email: 'atul.cs17@iitp.ac.in',
        linkedin: 'https://www.linkedin.com/in/atul-upadhyay1/',
        instagram: 'https://www.instagram.com/theatulupadhyay/',
      },
      {
        name: 'Saurabh Suman',
        role: "Gensec Sports '20",
        image: '/images/office/No_Image_Available.jpg',
        email: 'saurabh.pce17@iitp.ac.in',
        linkedin: 'https://www.linkedin.com/in/saurabh-suman-a92b3880/?originalSubdomain=in',
      },
    ],
    reps: [
      {
        name: 'Rakshit Maheshwari',
        role: 'UG Representative',
        image: '/images/office/Rakshit Maheshwari.jpg',
        email: 'rakshit.ce17@iitp.ac.in',
        linkedin: 'https://www.linkedin.com/in/rakshit-maheshwari-02625818b/',
        instagram: 'https://www.instagram.com/rakshitmaheshwarii/',
      },
      {
        name: 'Harsh Kasyap',
        role: 'PG Representative',
        image: '/images/office/Harsh Kasyap.jpg',
        email: 'harsh_1921cs01@iitp.ac.in',
        linkedin: 'https://www.linkedin.com/in/harsh-kasyap/',
        instagram: 'https://www.instagram.com/_.harsh._78/',
      },
    ],
  },
];

function PersonCard({ person }: { person: Person }) {
  return (
    <motion.div
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="relative bg-white rounded-2xl shadow-md w-[260px] overflow-hidden group"
    >
      <motion.img
        variants={{
          rest: { scale: 1 },
          hover: { scale: 0.85 },
        }}
        transition={{ duration: 0.3 }}
        src={person.image}
        alt={person.name}
        className="w-full h-[260px] object-cover object-top"
      />

      <motion.div 
        variants={{
          rest: { opacity: 1 },
          hover: { opacity: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="p-5 text-center"
      >
        <h3 className="font-semibold text-gray-900">
          {person.name}
        </h3>
        <p className="text-sm text-gray-500">
          {person.role}
        </p>
      </motion.div>

      {/* Hover icons */}
      <motion.div
        variants={{
          rest: { opacity: 0, y: 20 },
          hover: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-white/90 flex items-center justify-center"
      >
        <motion.div
          initial="rest"
          animate="hover"
          variants={{
            rest: { opacity: 0 },
            hover: {
              opacity: 1,
              transition: { staggerChildren: 0.08 },
            },
          }}
          className="flex gap-5"
        >
          <motion.a
            variants={{
              rest: { opacity: 0, y: 10 },
              hover: { opacity: 1, y: 0 },
            }}
            href={person.email ? `mailto:${person.email}` : '#'}
            className="text-gray-700 hover:text-emerald-600 transition-colors"
          >
            <Mail />
          </motion.a>
          <motion.a 
            variants={{ rest: { y: 10 }, hover: { y: 0 } }}
            href={person.facebook || '#'}
            target={person.facebook ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <Facebook />
          </motion.a>
          <motion.a 
            variants={{ rest: { y: 10 }, hover: { y: 0 } }}
            href={person.linkedin || '#'}
            target={person.linkedin ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-700 transition-colors"
          >
            <Linkedin />
          </motion.a>
          <motion.a 
            variants={{ rest: { y: 10 }, hover: { y: 0 } }}
            href={person.instagram || '#'}
            target={person.instagram ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-pink-600 transition-colors"
          >
            <Instagram />
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function OfficeBearersClient() {
  const [active, setActive] = useState(0);
  const current = years[active];

  return (
    <main className="min-h-screen text-black bg-[#f4f7fe] pt-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Office Bearers
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-10 mb-14 text-sm font-medium border-b border-gray-300">
          {years.map((y, i) => (
            <button
              key={y.year}
              onClick={() => setActive(i)}
              className={`pb-3 text-lg font-bold relative cursor-pointer hover:scale-105 transition-transform ${
                i === active
                  ? 'text-emerald-600'
                  : 'text-gray-500'
              }`}
            >
              {y.year}
              {i === active && (
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-emerald-500 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.year}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* VP */}
            <section className="mb-16">
              <h2 className="text-2xl font-semibold text-center mb-8">
                Vice President Gymkhana
              </h2>
              <div className="flex justify-center">
                {current.vp.map((p) => (
                  <PersonCard key={p.name} person={p} />
                ))}
              </div>
            </section>

            {/* Secretaries */}
            {current.secretaries.length > 0 && (
              <section className="mb-16">
                <h2 className="text-2xl font-semibold text-center mb-8">
                  Gymkhana Secretaries
                </h2>
                <div className="flex flex-wrap justify-center gap-10">
                  {current.secretaries.map((p) => (
                    <PersonCard key={p.name} person={p} />
                  ))}
                </div>
              </section>
            )}

            {/* Representatives */}
            {current.reps.length > 0 && (
              <section>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  Gymkhana Representatives
                </h2>
                <div className="flex flex-wrap justify-center gap-10">
                  {current.reps.map((p) => (
                    <PersonCard key={p.name} person={p} />
                  ))}
                </div>
              </section>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
