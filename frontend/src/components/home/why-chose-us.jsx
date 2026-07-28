import { Award, Globe, Headphones, Shield, Timer, Users } from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  {
    id: 1,
    heading: "Expert Guidance",
    icon: <Award />,
    info: "Our certified consultants have 15+ years of experience in international education, ensuring you receive the best advice for your academic journey.",
  },
  {
    id: 2,
    heading: "Best Success Rate",
    icon: <Shield />,
    info: "We maintain an exceptional track record with visa approvals and university admissions through our proven application process.",
  },
  {
    id: 3,
    heading: "Personalized Approach",
    icon: <Users />,
    info: "Each student receives a customized roadmap tailored to their academic goals, budget, and career aspirations.",
  },
  {
    id: 4,
    heading: "End-to-End Support",
    icon: <Timer />,
    info: "From university selection to post-arrival assistance, we're with you every step of the way, ensuring a smooth transition.",
  },
  {
    id: 5,
    heading: "Global Network",
    icon: <Globe />,
    info: "Direct partnerships with 50+ universities across 25+ countries, giving you exclusive access to scholarships and fast-track admissions.",
  },
  {
    id: 6,
    heading: "24/7 Assistance",
    icon: <Headphones />,
    info: "Round-the-clock support team available to answer your queries and assist with emergencies, no matter where you are.",
  },
];

function WhyChoseUs() {
  return (
    <div className="py-10 space-y-8">
      <div className="flex flex-col items-center w-full max-w-150 mx-auto text-center p-4 space-y-2">
        <h2 className="text-3xl font-semibold">Why Choose Us</h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          We're more than just consultants, we're your partners in building a
          successful international education journey
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

      <div className="flex flex-col items-center justify-center  gap-4 py-10">
        <p className="text-neutral-500 dark:text-neutral-400">
          Join thousands of students who've successfully started their
          international education journey with us
        </p>

        <Link
          to="/contact#book-consultation"
          className="px-4 p-2 rounded-md text-white font-semibold bg-[#F15A22] hover:bg-[#C9410F] hover:-translate-y-0.5"
        >
          Book Your Consultation Today
        </Link>
      </div>
    </div>
  );
}

export default WhyChoseUs;
