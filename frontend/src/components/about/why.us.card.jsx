import { Globe, Heart, Lightbulb, Shield, Target, Users } from "lucide-react";

const whyUs = [
  {
    icon: <Shield size={40} />,
    heading: "15+ Years of Excellence",
    context:
      "Industry-leading expertise with proven track record in international education consulting",
  },
  {
    icon: <Heart size={40} />,
    heading: "98.7% Success Rate",
    context:
      "Consistently delivering exceptional results with successful university placements",
  },
  {
    icon: <Lightbulb size={40} />,
    heading: "10,000+ Success Stories",
    context:
      "Successfully guided students to premier universities across 25+ countries",
  },
  {
    icon: <Target size={40} />,
    heading: "100% Transparency",
    context:
      "Clear communication, no hidden fees, and complete visibility throughout your journey",
  },
  {
    icon: <Users size={40} />,
    heading: "Personalized Service",
    context:
      "One-on-one expert counseling tailored to your unique profile and aspirations",
  },
  {
    icon: <Globe size={40} />,
    heading: "24/7 Dedicated Support",
    context:
      "Round-the-clock assistance ensuring you're never alone in your journey",
  },
];

export function UsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {whyUs.map((item, index) => (
        <div
          key={index}
          className="lift flex flex-col items-start space-y-4 p-4 border border-neutral-300 dark:border-neutral-700 shadow-lg rounded-2xl hover:border-[#F15A22]"
        >
          <div className="p-4 bg-[#F15A22]/20 rounded-2xl">{item.icon}</div>
          <h4 className="text-2xl font-bold">{item.heading}</h4>
          <p className="text-neutral-500 dark:text-neutral-400">{item.context}</p>
        </div>
      ))}
    </div>
  );
}
