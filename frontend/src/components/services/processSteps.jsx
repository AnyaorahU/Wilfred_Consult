import { Clock } from "lucide-react";
import Title from "../title";

const processSteps = [
  {
    heading: "Consultation",
    time: "30-60 min",
    content:
      "Free initial consultation to understand your goals, budget, and academic profile",
  },
  {
    heading: "Profile Building",
    time: "1-2 weeks",
    content:
      "Comprehensive assessment and creating a competitive application strategy",
  },
  {
    heading: "University Selection",
    time: "1 week",
    content:
      "Shortlisting universities based on your profile, preferences, and career goals",
  },
  {
    heading: "Application",
    time: "2-4 weeks",
    content:
      "Preparing and submitting applications with all required documentation",
  },
  {
    heading: "Offer & Visa",
    time: "4-8 weeks",
    content:
      "Managing offer letters, visa applications, and pre-departure preparations",
  },
  {
    heading: "Departure",
    time: "Ongoing",
    content:
      "Final preparations, accommodation setup, and post-arrival support",
  },
];

function ProcessSteps() {
  return (
    <div className="lg:space-y-20 py-10">
      <Title
        text1={"Your Journey"}
        text2={"Simplified"}
        subtext={
          "A proven 6-step process that has helped thousands achieve their dreams"
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {processSteps.map((pro, index) => (
          <div
            key={index}
            className="lift border p-4 flex gap-4 rounded-lg border-neutral-300 dark:border-neutral-700 hover:shadow-lg hover:border-[#F15A22]"
          >
            <div className="text-5xl font-bold text-[#F15A22]/30">
              0{index + 1}
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-semibold">{pro.heading}</h4>
              <p className="text-neutral-500 dark:text-neutral-400 flex gap-2 items-center">
                <Clock color="gray" size={16} /> {pro.time}
              </p>
              <p className="text-neutral-500 dark:text-neutral-400">{pro.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProcessSteps;
