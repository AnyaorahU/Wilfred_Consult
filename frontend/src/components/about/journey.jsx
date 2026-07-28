import {
  Award,
  ChartNoAxesColumnIncreasing,
  Globe,
  Rocket,
  Sparkle,
  Trophy,
  Users,
} from "lucide-react";

const milestones = [
  {
    year: "2008",
    icon: <Rocket size={20} color="white" />,
    heading: "Foundation & Vision",
    content:
      "Wilfred Consult was founded with a bold vision to democratize access to world-class international education",
  },
  {
    year: "2012",
    icon: <Trophy size={20} color="white" />,
    heading: "Milestone Achievement",
    content:
      "Successfully placed our 500th student in prestigious universities worldwide",
  },
  {
    year: "2015",
    icon: <Globe size={20} color="white" />,
    heading: "Global Expansion",
    content:
      "Established offices across 5 countries to provide localized support",
  },
  {
    year: "2018",
    icon: <Users size={20} color="white" />,
    heading: "5,000 Students Milestone",
    content:
      "Celebrated placement of 5,000+ students with 97% success rate",
  },
  {
    year: "2020",
    icon: <Sparkle size={20} color="white" />,
    heading: "Digital Innovation",
    content:
      "Launched cutting-edge virtual counseling platform during global transformation",
  },
  {
    year: "2023",
    icon: <Award size={20} color="white" />,
    heading: "Industry Leadership",
    content:
      "Recognized as premier study abroad consultant with 10,000+ successful placements",
  },
  {
    year: "2026",
    icon: <ChartNoAxesColumnIncreasing size={20} color="white" />,
    heading: "Excellence Sustained",
    content:
      "Maintaining 98.7% success rate with expanded global partnerships",
  },
];

export function OurJourney() {
  return (
    <div className="w-full max-w-300 mx-auto px-4 py-10 lg:py-20">
      <div className="relative">
        {/* vertical spine: left on mobile, centered on desktop */}
        <div className="absolute top-0 h-full w-[2px] bg-[#F15A22]/40 left-5 lg:left-1/2 lg:-translate-x-1/2"></div>

        <ul className="space-y-10 lg:space-y-16">
          {milestones.map((m, index) => {
            const isLeft = index % 2 === 0;
            const card = (
              <div className="p-6 space-y-2 rounded-2xl bg-[#F15A22]/10 shadow-lg">
                <p className="inline-block px-4 py-1 font-semibold text-white rounded-full bg-[#F15A22] shadow">
                  {m.year}
                </p>
                <h4 className="text-2xl font-semibold">{m.heading}</h4>
                <p className="text-neutral-500 dark:text-neutral-400 text-lg">{m.content}</p>
              </div>
            );
            return (
              <li
                key={m.year}
                className="relative flex flex-col lg:flex-row lg:items-center"
              >
                {/* node */}
                <div className="absolute z-10 w-10 h-10 grid place-items-center bg-[#F15A22] rounded-full shadow-lg left-5 -translate-x-1/2 top-6 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2">
                  {m.icon}
                </div>

                {/* card — full width on mobile (offset past the spine), half width alternating on desktop */}
                <div
                  className={`pl-16 lg:pl-0 lg:w-1/2 ${
                    isLeft
                      ? "lg:pr-12 lg:text-right"
                      : "lg:ml-auto lg:pl-12 lg:text-left"
                  }`}
                >
                  {card}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
