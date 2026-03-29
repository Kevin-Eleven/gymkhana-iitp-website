'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { p } from 'framer-motion/client';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  id: string;
  title: string;
  faqs: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    id: 'acc',
    title: 'Academic and Career Council',
    faqs: [
      {
        question: 'What is the procedure for asking the administration for more elective choices?',
        answer:
          'Electives are pre-determined in the Senate meetings. You may mail the academic section for clarification.',
      },
      {
        question: 'Can we do our BTP under a professor from another university?',
        answer:
          'No. BTP must be done under an IIT Patna professor from your own branch.',
      },
      {
        question: 'Can we finish our BTech in 3 years with an early exit option like IIT Bombay and Delhi have?',
        answer:
          'No, IIT Patna does not offer an early exit option to a B. Tech student in 3 years like the other colleges mentioned above do.',
      },
      {
        question: 'Do we have any semester exchange programs?',
        answer:
          'Yes, semester exchange programs are available. We received an e-mail about it sometime back as well.',
      },
      {
        question: 'Is registration for the next semester scheduled for July 21st online or offline? How does it differ from pre-registration?',
        answer:
          'The registration process will take place in the offline mode, where the physical presence of the student will be required. In the case of late registration, the student must pay a fine of Rs. 2000. However, the fine can be waived by making genuine requests to your HOD.',
      },
      {
        question: 'What is the procedure for opting for courses in another department?',
        answer:
          "To opt for courses from other departments, one has to email the course instructor of that particular course. You are required to mention your CPI and reasons for wanting to audit the course. The instructor makes the final decision with the HOD's and the faculty advisor's permission.",
      },
      {
        question: 'How do I apply for leave?',
        answer:
          'To apply for leave, Step 1: Mention the reason for leaving to the Faculty Advisor and get his permission (via email). Step 2: Email Adean-SA for the same reason and attach a screenshot or proof of permission from the Faculty Advisor.',
      },
      {
        question: 'There should be a section on the IITP website in which the professor must upload all exam (MSE, ESE) evaluated answer sheets of all students and correct answer sheets.',
        answer:
          'Several proposals have been passed regarding the same but have yet to be approved. We will try again this year to do the same.',
      },
      {
        question: 'What about the students admitted late compared to their batchmates due to some court case? Do they have to give supplementary exams?',
        answer:
          'Email the Academic Section and Registrar regarding the same.',
      },
      {
        question: 'Who issues NOCs for 1st and 2nd-year students, HOD or TPC? What is the procedure?',
        answer:
          'The Training and Placement Officer issues the NOC after permission/ consultation from the respective HODs.',
      },
      {
        question: 'How can we apply for the supplementary exam?',
        answer:
          'Forms for applying for the supplementary exam(s) are sent via mail by the academic section annually around May. The individual can fill out the form by the end of June and appear for the exam(s) in July.',
      },
      {
        question: 'Where can I get the transcript?',
        answer:
          'You can download your Transcript after the declaration of the Result every semester. Link: http://172.16.26.43/transcriptIITP/',
      },
      {
        question: 'Where can I get a bona fide certificate?',
        answer: (
          <div className="space-y-3">

            <p><b>To get a Bonafide Certificate Offline:</b></p>

            <p>
              <b>Step 1:</b> You have to pay 50 rupees on the SBI link mentioned below:
            </p>

            <a
              href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=595859"
              target="_blank"
              className="text-blue-600 break-all"
            >
              https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=595859
            </a>

            <p>Select Bihar as the state and Educational as the type of Institution and click on Go.</p>
            <p>Select Indian Institute of Technology Patna as the Institution and click Submit.</p>
            <p>Choose payment category: Payment for Transcripts/Certificates/Thesis/Misc.</p>
            <p>Fill in your details and complete payment.</p>

            <p>
              <b>Step 2:</b> Visit the Academic Office (3rd floor B.Tech cabin) with proof of payment and a passport-size photo.
            </p>

            <hr className="my-3"/>

            <p><b>To get a Bonafide Certificate Online:</b></p>
            <p className="text-sm text-gray-500">(Online process may be temporarily closed)</p>

            <p>
              <b>Step 1:</b> Pay 50 rupees using the same SBI link:
            </p>

            <a
              href="https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=595859"
              target="_blank"
              className="text-blue-600 break-all"
            >
              https://www.onlinesbi.com/sbicollect/icollecthome.htm?corpID=595859
            </a>

            <p>Choose payment option: Payment for Transcripts/Certificates/Thesis/Misc.</p>

            <p>
              <b>Step 2:</b> Send an email to{' '}
              <a href="mailto:acadbtech@iitp.ac.in" className="text-blue-600">
                acadbtech@iitp.ac.in
              </a>{' '}
              with proof of payment attached.
            </p>

          </div>
        ),
      },
    ],
  },
  {
    id: 'swb',
    title: "Students' Welfare Board",
    faqs: [
      {
        question: 'When and how is medical insurance payment to be done? What is the process for claiming reimbursement for medical bills? Where can we find medical insurance details?',
        answer:
          "Once a year, you need to pay using the SBI collect link. Payment deadlines are sent via Institute mail by the Students' Affairs Office or Students' Welfare Board. Insurance details can be viewed from the given link http://172.16.1.6/index.php/student-affairs/student-s-medical-insurance at Sl.No. 1. While Sl. Nos. 2, 3, 4 & 5 will help you claim your medical insurance.",
      },
      {
        question: 'Some guests/relatives or your parents visit you, and you need guest accommodation',
        answer:
          'Visit http://172.16.1.6/guest/home.php and follow the steps mentioned there. Note: 1. The availability of vacant rooms will determine how many days you can stay. You can book for as many days if spaces are empty. 2. Check out the Hotels nearby section on SWB Master Sheet for further information if you wish to stay outside the campus.',
      },
      {
        question: 'A helping guide for whom to contact (email) for different issues being faced.',
        answer: (
          <div className="space-y-2">
            <p>
              Get in touch with the councils concerned via their respective email addresses.
            </p>

            <p><b>Hostel Affairs Council:</b> hac@iitp.ac.in</p>
            <p><b>Students' Welfare Board:</b> swb@iitp.ac.in</p>
            <p><b>Students' Technical Council:</b> stc@iitp.ac.in</p>
            <p><b>House of Socio-Cultural Affairs:</b> culturalaffairs@iitp.ac.in</p>
            <p><b>Academic and Career Council:</b> ugr@iitp.ac.in / pgr@iitp.ac.in</p>

            <p className="mt-2">
              Visit SWB Master Sheet to find the email addresses of the General Secretaries and Vice President.
            </p>
          </div>
        ),
      },
      {
        question: 'Can we buy simple medicines and ointments from the IIT Patna health center?',
        answer:
          'A wide variety of medicines are available at the campus health center, although only those prescribed by campus doctors are free (up to 10,000 per semester).',
      },
      {
        question: 'How can I complain about the lack of a menu or incompetent prices at various outlets in IIT Patna, like Nescafe or the food court?',
        answer:
          "Concerns regarding any shop on campus should be sent to the Students' Welfare Board at swb@iitp.ac.in. We encourage you to provide feedback at https://forms.gle/uStFwmjcEtmhuUGw5.",
      },
      {
        question: 'When something is lost or found, what should be done?',
        answer: (
          <div className="space-y-3">

            <p>
              <b>Step 1:</b> Fill out the G-form.
            </p>

            <p>
              <b>Step 2:</b> Check the Lost & Found section on{' '}
              <a
                href="#"
                className="text-blue-600"
                target="_blank"
              >
                SWB Master Sheet
              </a>{' '}
              regularly to see if your lost object has been found.
            </p>

            <p>
              <b>Step 3:</b> Please email us at{' '}
              <a href="mailto:swb@iitp.ac.in" className="text-blue-600">
                swb@iitp.ac.in
              </a>{' '}
              if you have found your lost item so we can remove it from the lost section.
            </p>

          </div>
        ),
      },
      {
        question: 'How should I handle a medical or any kind of emergency? Whom should I contact first?',
        answer:
          'SWB Master Sheet includes emergency contact info for such situations under Emergency Contacts.',
      },
      {
        question: 'There are several incidents of students littering around the Nescafe outlets, food court, and night canteen. What can I do to curb such behavior?',
        answer:
          'Please send us an email detailing such incidents to swb@iitp.ac.in, preferably with some media proof. Your identity will be kept confidential, and you might be rewarded for your efforts.',
      },
      {
        question: 'You are being harassed or notice someone else being harassed. You are subjected to ragging or have witnessed ragging.',
        answer:
          'Inform the Gymkhana Core Members as soon as possible. You can find their contact numbers in the SWB Master Sheet.',
      },
      {
        question: 'Miscellaneous',
        answer: (
          <div className="space-y-3">

            <p>
              <b>1.</b> For various stuff (including bus services, bicycle tagging slots, etc.), please visit{' '}
              <a
                href="#"
                target="_blank"
                className="text-blue-600"
              >
                SWB Master Sheet
              </a>
              . It is updated frequently, so please check back often.
            </p>

            <p>
              <b>2.</b> Feel free to send any ideas about campus beautification or other affairs to{' '}
              <a href="mailto:swb@iitp.ac.in" className="text-blue-600">
                swb@iitp.ac.in
              </a>
            </p>

          </div>
        ),
      },
    ],
  },
  {
    id: 'hac',
    title: 'Hostel Affairs Council',
    faqs: [
      {
        question:
          'What is the hostel no-dues form? How do I get it? Where do I submit it?',
        answer:
          'Students must submit hostel no-dues when they are about to pass out. Different institute bodies verify whether students have cleared/returned all dues, fines, fees, or any assets the institute provides to students. The hostel office sends an email to all the passing-out students. Students need to go to their departments, the hostel office, the library, and the accounts section and get their approval for no dues. It stands clear when all the different institute bodies sign off on no dues.',
      },
      {
        question:
          'You will be out of the campus for some days and would like some mess rebate',
        answer:
          'The mess must be informed of such a situation by applying for leave on the Mess leave portal at least three days before the date you wish to be absent.',
      },
      {
        question:
          'How can a complaint regarding the non-working of ceiling fans, room lights, corridor and bathroom lights, room cleaning, lift not working, non-working water purifier, beehives, unavailability of non-chilled drinking water, etc., be filed?',
        answer:
          "Regarding complaints about hostel maintenance : Complaints have to be filled in on 172.16.1.6 to IWD (https://services.iitp.ac.in/iwdhelpdesk). Complaints should also be registered in a complaint register book which will be available in the hostel office/at the security desk . The caretaker has to check all such complaints. The caretaker usually asks the IWD technician to repair it. But if any highly skilled technicians are required, the caretaker has to inform the hostel office, and hence the hostel office has to call the concerned person at the direction of the warden. If students' complaints are not acknowledged, they may complain to HAC representatives or Wardens.",
      },
      {
        question:
          'How can complaints be filed about Wi-Fi / LAN connectivity issues?',
        answer:
          'LAN and Wi-Fi complaints must be registered on the CC Helpdesk . You may call 24 hours helpline service in case of any urgency. Contact Details',
      },
      {
        question:
          'You are sick and need a sick meal.',
        answer:
          'Inform the mess manager as soon as possible.',
      },
      {
        question:
          'Do we get an internet connection in the hostels? How and where can I access the internet?',
        answer:
          'High-speed internet is available via Wi-Fi/LAN connections. You will need your VPN password to access the Wi-Fi.',
      },
      {
        question:
          'Cleaning and sweeping related complaints',
        answer:
          'You should contact either the caretaker or cleaning supervisor of your hostel.',
      },
      {
        question:
          'Missing/broken furniture in the room.',
        answer:
          'Contact the caretaker of your hostel.',
      },
      {
        question:
          "What are the in and out times of the hostel? Can we visit friends' hostel rooms (of the other gender as well)?",
        answer:
          "There are no in and out times of the hostel, and students are restricted to visit opposite-gender's hostels.",
      },
      {
        question:
          'Can I use electrical/electronic and other appliances?',
        answer:
          'The hostel has microwaves, induction cookers, and other necessary electrical appliances in its common room. You can use them but cannot bring your own.',
      },
      {
        question:
        'Can my friend/relative visit/stay in my room?',
        answer:
        "It is not possible for them to stay in a student's room, but they can stay in the guest house on campus.",
      },
      {
        question:
        'Someone is playing loud music / banging on your room door/ disturbing you in any other way.',
        answer:
        'Inform the HAC secretaries or caretakers as soon as possible.',
      },
      {
        question:
          'Miscellaneous',
        answer:
          'For various stuff (contact numbers of hac secretaries,caretakers,wardens and hostel office of each hostel, carpenters, plumbers etc ), please visit IITP HOSTEL TEAM DOC .',
      },
    ],
  },
  {
    id: 'stc',
    title: 'Student Technical Council',
    faqs: [
      {
        question: 'What is Inter IIT Tech Meet?',
        answer:
          'An Inter IIT Tech Meet is an annual event in which all the IITs compete with each other to tackle technical problems. It consists of High, Mid, and Low prep events with decreasing order of point weightage. The final presentation round happens for two days around March, but the preparations start nearly two months before!',
      },
      {
        question: 'How can I contribute? Any prerequisites?',
        answer:
          'The events are open to all, and there aren’t any “prerequisites” as such, but it helps to have them in some events. What is most valuable is your contribution to the team, and you can do that according to your capacity and skill. The teams will be decided based on the contributions one makes in the first couple of days.',
      },
      {
        question: 'What are the high/mid/low preparation events?',
        answer:
          'High/mid-prep events are team events (6-10 people) in which you propose a solution to a problem statement and are usually composed of a report/prototype followed by a final presentation in front of the judges. These carry by far the most weight (400 points for high prep, 250 points for mid prep). Low-preparation events are team events (mostly) and are relatively more straightforward compared to mid and high-prep events. They are released 1-2 weeks before the presentation round.',
      },
      {
        question: 'Why should I participate?',
        answer:
          'Why shouldn’t you? It is a wonderful way to network, work with like-minded people, and create something of your own (not to mention you can show off certificates/projects in your CV)! Participation is important more than anything. It provides a platform to test yourself and feeds you with new ideas from other top IITs. These events make a huge contribution to the technical culture of IITs, and you should try your best to make use of this privilege!',
      },
      {
        question: 'How to link your webmail to the mail app on your phone?',
        answer:
          'See the attached pdf for the steps ( Mobile_Configuration.pdf ). Any issues regarding the steps can be addressed to cc@iitp.ac.in by raising a ticket in the cc helpdesk (https://www.iitp.ac.in/cc-helpdesk/ )',
      },
      {
        question: 'How can I join technical clubs?',
        answer:
          'Recruitment drives are conducted at the beginning of the academic year.',
      },
      {
        question: 'What is ICTC?',
        answer:
          'ICTC is IIT Patna’s very own intra-college tech championship and it features Inter IIT Tech Meet style problem statements that test the technical skills of each of the houses. Every participant is divided into one of these houses and competes to win the Grand Championship.',
      },
    ],
  },
];


export default function FAQClient() {
  const [activeTab, setActiveTab] = useState('hac');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const activeCategory =
    faqData.find((cat) => cat.id === activeTab) || faqData[0];

  return (
    <main className="min-h-screen bg-[#f4f7fe] pt-24 px-4 pb-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-black font-bold text-center mb-12">
          FAQ
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-semibold">
          {faqData.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveTab(cat.id);
                setOpenIndex(0);
              }}
              className={`relative pb-2 transition-colors
                ${
                  activeTab === cat.id
                    ? 'text-emerald-600'
                    : 'text-gray-600 hover:text-black'
                }
              `}
            >
              {cat.title}
              {activeTab === cat.id && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-500 rounded" />
              )}
            </button>
          ))}
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {activeCategory.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>

                  <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-emerald-600"
                  >
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: 'easeInOut' },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

