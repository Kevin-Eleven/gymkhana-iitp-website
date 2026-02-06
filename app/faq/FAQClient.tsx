'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    ],
  },
  {
    id: 'swb',
    title: "Students' Welfare Board",
    faqs: [
      {
        question: 'How can I access mental health support services?',
        answer:
          'SWB provides counseling services. Contact the SWB office to book an appointment.',
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
          'The hostel no-dues form is required during graduation. It can be obtained from the hostel office and submitted after completion.',
      },
      {
        question:
          'How can a complaint regarding fans, lights, lifts, water, etc. be filed?',
        answer:
          'Complaints can be filed via the hostel caretaker or through the hostel office.',
      },
    ],
  },
  {
    id: 'stc',
    title: 'Student Technical Council',
    faqs: [
      {
        question: 'How can I join technical clubs?',
        answer:
          'Recruitment drives are conducted at the beginning of the academic year.',
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
    <main className="min-h-screen bg-[#f4f7fe] pt-24 px-4">
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

