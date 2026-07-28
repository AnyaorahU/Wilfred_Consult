import {
  Award,
  ChartNoAxesColumnIncreasing,
  Globe,
  icons,
  Rocket,
  Sparkle,
  Trophy,
  Users,
} from "lucide-react";

const datas = [
  { icon: <Rocket size={30} /> },
  { icon: <Trophy size={30} /> },
  { icon: <Globe size={30} /> },
  { icon: <Users size={30} /> },
  { icon: <Sparkle size={30} /> },
  { icon: <Award size={30} /> },
  { icon: <ChartNoAxesColumnIncreasing /> },
];

export function OurJourney() {
  return (
    <div className="py-20">
      <div className="relative top-1/2 w-300 left-1/2 h -translate-x-1/2">
        <div className="absolute top-0 w-full left-0 ">
          <div className="absolute h-full -z-20 w-[1px] top-1/2 left-1/2 -translate-1/2 bg-[#e9a227]/50"></div>
          <ul className="space-y-50 flex flex-col items-center p-26">
            {datas.map((data, index) => (
              <li
                key={index}
                className="p-6 bg-[#e9a227] rounded-full shadow-lg"
              >
                {data.icon}
              </li>
            ))}
          </ul>
        </div>

        <div className="top-0 w-full flex flex-col space-y-19">
          <div className="self-start w-2/5 flex flex-col items-end space-y-4">
            <p className="p-2 px-4 font-semibold text-white rounded-full bg-[#e9a227] shadow-lg">
              2008
            </p>
            <div className="text-right p-6 space-y-2 rounded-2xl bg-[#e9a227]/10 shadow-lg">
              <h4 className="text-2xl font-semibold">Foundation & Vision</h4>
              <p className="text-neutral-500 text-lg">
                EduVoyage was founded with a bold vision to democratize access
                to world-class international education
              </p>
            </div>
          </div>

          <div className="self-end w-2/5 flex flex-col items-start space-y-4">
            <p className="p-2 px-4 font-semibold text-white rounded-full bg-[#e9a227] shadow-lg">
              2012
            </p>
            <div className="text-left p-6 space-y-2 rounded-2xl bg-[#e9a227]/10 shadow-lg">
              <h4 className="text-2xl font-semibold">Milestone Achievement</h4>
              <p className="text-neutral-500 text-lg">
                Successfully placed our 500th student in prestigious
                universities worldwide
              </p>
            </div>
          </div>

          <div className="self-start w-2/5 flex flex-col items-end space-y-4">
            <p className="p-2 px-4 font-semibold text-white rounded-full bg-[#e9a227] shadow-lg">
              2015
            </p>
            <div className="text-right p-6 space-y-2 rounded-2xl bg-[#e9a227]/10 shadow-lg">
              <h4 className="text-2xl font-semibold">Global Expansion</h4>
              <p className="text-neutral-500 text-lg">
                Established offices across 5 countries to provide localized
                support
              </p>
            </div>
          </div>

          <div className="self-end w-2/5 flex flex-col items-start space-y-4">
            <p className="p-2 px-4 font-semibold text-white rounded-full bg-[#e9a227] shadow-lg">
              2018
            </p>
            <div className="text-left p-6 space-y-2 rounded-2xl bg-[#e9a227]/10 shadow-lg">
              <h4 className="text-2xl font-semibold">
                5,000 Students Milestone
              </h4>
              <p className="text-neutral-500 text-lg">
                Celebrated placement of 5,000+ students with 97% success rate
              </p>
            </div>
          </div>

          <div className="self-start w-2/5 flex flex-col items-end space-y-4">
            <p className="p-2 px-4 font-semibold text-white rounded-full bg-[#e9a227] shadow-lg">
              2020
            </p>
            <div className="text-right p-6 space-y-2 rounded-2xl bg-[#e9a227]/10 shadow-lg">
              <h4 className="text-2xl font-semibold">Digital Innovation</h4>
              <p className="text-neutral-500 text-lg">
                Launched cutting-edge virtual counseling platform during global
                transformation
              </p>
            </div>
          </div>

          <div className="self-end w-2/5 flex flex-col items-start space-y-4">
            <p className="p-2 px-4 font-semibold text-white rounded-full bg-[#e9a227] shadow-lg">
              2023
            </p>
            <div className="text-left p-6 space-y-2 rounded-2xl bg-[#e9a227]/10 shadow-lg">
              <h4 className="text-2xl font-semibold">Industry Leadership</h4>
              <p className="text-neutral-500 text-lg">
                Recognized as premier study abroad consultant with 10,000+
                successful placements
              </p>
            </div>
          </div>

          <div className="self-start w-2/5 flex flex-col items-end space-y-4">
            <p className="p-2 px-4 font-semibold text-white rounded-full bg-[#e9a227] shadow-lg">
              2026
            </p>
            <div className="text-right p-6 space-y-2 rounded-2xl bg-[#e9a227]/10 shadow-lg">
              <h4 className="text-2xl font-semibold">Excellence Sustained</h4>
              <p className="text-neutral-500 text-lg">
                Maintaining 98.7% success rate with expanded global partnerships
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
