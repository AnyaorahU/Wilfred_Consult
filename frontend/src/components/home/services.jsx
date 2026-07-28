import {
  FileText,
  GraduationCap,
  Headset,
  MapPin,
  Plane,
  Users,
} from "lucide-react";

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
      <div className="flex flex-col items-center w-150 mx-auto text-center p-4 space-y-2">
        <div className="px-2 rounded-full bg-[#e9a227]/20 text-[#e9a227]">
          Our Services
        </div>
        <h2 className="text-3xl font-semibold">
          Everything You Need for Your Journey
        </h2>
        <p className="text-neutral-500">
          From initial consultation to arrival at your destination, we provide
          comprehensive support at every step.
        </p>
      </div>

      {/* card  */}
      <div className="grid grid-cols-3 gap-8">
        {data.map((d) => (
          <div
            key={d.id}
            className="group p-4 border hover:border-[#e9a227] shadow-lg border-neutral-300 rounded-md space-y-2"
          >
            <div className="group-hover:bg-[#e9a227] bg-[#e9a227]/20 h-12 w-12 flex justify-center items-center rounded-md">
              {d.icon}
            </div>
            <h3 className="text-lg font-semibold">{d.heading}</h3>
            <p className="text-neutral-500">{d.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Services;
