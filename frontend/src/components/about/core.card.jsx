import { Globe, Heart, Lightbulb, Shield, Target, Users } from "lucide-react";

export function CoreCard() {
  const values = [
    {
      icon: <Shield size={40} />,
      heading: "Unwavering Integrity",
      context:
        "We uphold the highest ethical standards with complete transparency in all our interactions and commitments.",
    },
    {
      icon: <Heart size={40} />,
      heading: "Student-First Philosophy",
      context:
        "Every decision is made with student success and satisfaction as our absolute priority.",
    },
    {
      icon: <Lightbulb size={40} />,
      heading: "Continuous Innovation",
      context:
        "We constantly evolve our services and technology to stay ahead of the dynamic education landscape.",
    },
    {
      icon: <Target size={40} />,
      heading: "Pursuit of Excellence",
      context:
        "We strive for perfection in every service delivery, maintaining our industry-leading 98.7% success rate.",
    },
    {
      icon: <Users size={40} />,
      heading: "Collaborative Approach",
      context:
        "We partner closely with students, families, and universities to achieve optimal outcomes.",
    },
    {
      icon: <Globe size={40} />,
      heading: "Global Perspective",
      context:
        "We celebrate diversity and prepare students for success in an interconnected world.",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-8">
      {values.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-start space-y-4 p-4 border border-neutral-300 shadow-lg rounded-2xl"
        >
          <div className="p-4 bg-[#e9a227]/20 rounded-2xl">{item.icon}</div>
          <h4 className="text-2xl font-bold">{item.heading}</h4>
          <p className="text-neutral-500">{item.context}</p>
        </div>
      ))}
    </div>
  );
}
