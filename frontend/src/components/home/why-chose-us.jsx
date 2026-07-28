import { Award, Globe, Headphones, Shield, Timer, Users } from "lucide-react";

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
      <div className="flex flex-col items-center w-150 mx-auto text-center p-4 space-y-2">
        <h2 className="text-3xl font-semibold">Why Chose Us</h2>
        <p className="text-neutral-500">
          We're more than just consultants, we're your partners in building a
          successful international education journey
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

      <div className="flex flex-col items-center justify-center  gap-4 py-10">
        <p className="text-neutral-500">
          Join thousands of students who've successfully started their
          international education journey with us
        </p>

        <button className="px-4 p-1 rounded-md bg-[#e9a227]">
          Book Your Consultation Today
        </button>
      </div>
    </div>
  );
}

export default WhyChoseUs;
