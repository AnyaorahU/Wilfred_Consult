import { useState } from "react";
import Title from "../title";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What makes EduVoyage different from other consultants?",
    answer:
      "We combine 15+ years of expertise with direct partnerships with 50+ universities, offering exclusive scholarship access and fast-track admissions. Our 100% success rate and personalized approach ensure every student gets into their dream university.",
  },
  {
    question: "How long does the entire process typically take?",
    answer:
      "The timeline varies by country and university, but typically: University selection (1-2 weeks), Application preparation (2-4 weeks), Visa process (4-8 weeks). We provide detailed timelines during your consultation and keep you updated throughout.",
  },
  {
    question: "Do you guarantee university admission?",
    answer:
      "While we cannot legally guarantee admission as it's ultimately the university's decision, our track record speaks for itself with a 98.7% admission rate. We carefully assess your profile and only recommend universities where you have strong chances of acceptance.",
  },
  {
    question: "What countries do you specialize in?",
    answer:
      "We have partnerships across 25+ countries including USA, UK, Canada, Australia, Germany, Ireland, New Zealand, Singapore, and more. Our counselors specialize in specific regions to provide in-depth knowledge.",
  },
  {
    question: "Can I change universities after starting the application?",
    answer:
      "Yes, flexibility is built into our service. You can modify your university list during the application preparation phase. Additional application fees may apply depending on your package.",
  },
  {
    question: "Do you offer refunds if I don't get admitted?",
    answer:
      "We offer a satisfaction guarantee. If you're not satisfied with our service quality, we'll work with you to make it right. Specific refund terms depend on your package and are outlined in your service agreement.",
  },
];

function Faq() {
  const [isExpand, setIsExpand] = useState(null);

  function toggleItem(index) {
    setIsExpand(isExpand === index ? null : index);
  }
  return (
    <div className="space-y-20 py-20">
      <Title
        text1={"Frequently Asked"}
        text2={"Questions"}
        subtext={
          "Got questions? We've got answers. Can't find what you're looking for? Contact us directly."
        }
      />

      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-neutral-300 rounded-lg p-4 space-y-8 bg-white hover:shadow-lg"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex justify-between w-full"
            >
              <p>{faq.question}</p>
              {isExpand === index ? <ChevronUp /> : <ChevronDown />}
            </button>

            {isExpand === index && (
              <p className="text-neutral-500">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
