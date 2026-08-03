import {
  FileText,
  GraduationCap,
  Headset,
  MapPin,
  Plane,
  Sparkles,
  Users,
} from "lucide-react";
import Eyebrow from "../eyebrow";

const data = [
  {
    id: 1,
    icon: <GraduationCap />,
    heading: "Study Abroad Programs",
    info: "Comprehensive guidance for pursuing higher education in top universities worldwide with personalized counseling.",
  },
  {
    id: 2,
    icon: <Plane />,
    heading: "Educational Tours",
    info: "Curated educational travel experiences that combine learning with cultural immersion and adventure.",
  },
  {
    id: 3,
    icon: <MapPin />,
    heading: "Destination Selection",
    info: "Expert advice on choosing the right country and university based on your goals, budget, and preferences.",
  },
  {
    id: 4,
    icon: <FileText />,
    heading: "Application Assistance",
    info: "End-to-end support for university applications, visa processing, and documentation requirements.",
  },
  {
    id: 5,
    icon: <Users />,
    heading: "Group Travel Programs",
    info: "Organized group tours for students and educational institutions with experienced tour guides.",
  },
  {
    id: 6,
    icon: <Headset />,
    heading: "24/7 Support",
    info: "Round-the-clock assistance before, during, and after your journey to ensure a smooth experience.",
  },
];

function Services() {
  return (
    <div className="py-10 space-y-8">
      {/* title  */}
      <div className="flex flex-col items-center w-full max-w-150 mx-auto text-center p-4 space-y-2">
        <Eyebrow icon={<Sparkles size={14} />}>Our Services</Eyebrow>
        <h2 className="text-3xl font-semibold">
          Everything You Need for Your Journey
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          From initial consultation to arrival at your destination, we provide
          comprehensive support at every step.
        </p>
      </div>

      {/* card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((d) => (
          <div
            key={d.id}
            className="lift group p-4 border hover:border-[#F15A22] shadow-lg border-neutral-300 dark:border-neutral-700 rounded-md space-y-2"
          >
            <div className="group-hover:bg-[#F15A22] group-hover:scale-110 transition-transform bg-[#F15A22]/20 h-12 w-12 flex justify-center items-center rounded-md">
              {d.icon}
            </div>
            <h3 className="text-lg font-semibold">{d.heading}</h3>
            <p className="text-neutral-500 dark:text-neutral-400">{d.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;
