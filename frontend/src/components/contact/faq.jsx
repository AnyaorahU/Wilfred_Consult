import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "How long does the university application process take?",
    answer:
      "Typically 3–6 months from initial consultation to final offer. We recommend starting at least 8–12 months before your intended start date to allow time for test prep, document gathering, and application cycles.",
  },
  {
    question: "What documents do I need to get started?",
    answer:
      "Academic transcripts, standardized test scores (IELTS/TOEFL/GRE/GMAT as applicable), a valid passport, personal statement, and letters of recommendation. Your counselor will provide a tailored checklist at your first meeting.",
  },
  {
    question: "Do you offer scholarships or financial aid guidance?",
    answer:
      "Yes. We help you identify merit-based and need-based scholarships, prepare strong applications, and explore education loans and financial aid options across all our partner universities.",
  },
  {
    question: "Is there a fee for the initial consultation?",
    answer:
      "No. Your first 30-minute consultation is completely free with no obligation. We'll assess your goals and outline your options before you decide to work with us.",
  },
  {
    question: "Can you help with visa applications after I receive an offer?",
    answer:
      "Absolutely. Visa support is part of our end-to-end service — from documentation and financial proof to mock interviews — to give you the best chance of approval.",
  },
];

export function ContactFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) =>
    setOpenIndex((prev) => (prev === index ? null : index));

  return (
    <div className="w-full max-w-300 mx-auto px-4 py-10 lg:py-20 space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Frequently Asked <span className="text-[#F15A22]">Questions</span>
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Answers to the questions we hear most often
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-neutral-200 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 shadow-sm"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left p-5 cursor-pointer"
              >
                <span className="font-semibold">{faq.question}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#F15A22] transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-5 pb-5 text-neutral-500 dark:text-neutral-400">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-neutral-500 dark:text-neutral-400">Still have questions?</p>
        <a
          href="#book-consultation"
          className="flex items-center gap-2 py-3 px-6 bg-[#F15A22] text-white font-semibold rounded-2xl hover:bg-[#F15A22]/90 cursor-pointer"
        >
          Ask Us Directly <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
