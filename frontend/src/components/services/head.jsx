import {
  ArrowRight,
  Award,
  Globe,
  GraduationCap,
  Star,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const data = [
  { id: 1, name: "Countries", icon: <Globe color="#e9a227" />, count: "25+" },
  {
    id: 2,
    name: "Universities",
    icon: <GraduationCap color="#e9a227" />,
    count: "50+",
  },
  {
    id: 3,
    name: "Success Rate",
    icon: <Award color="#e9a227" />,
    count: "98.7%",
  },
  {
    id: 4,
    name: "Students Placed",
    icon: <TrendingUp color="#e9a227" />,
    count: "10K+",
  },
];

function HeadServices() {
  return (
    <div className="lg:py-30 bg-amber-10">
      <div className="w-300 mx-auto space-y-8">
        <div className="w-200 space-y-4">
          <div className="p-1 bg-[#e9a227]/5 flex gap-2 text-[#e9a227]">
            <Star size={18} />
            <p>Award-Winning Services</p>
          </div>
          <h1 className="text-6xl font-bold">
            Premium Services for Your <br />
            <span className="text-[#e9a227]">International Education</span>
          </h1>
          <p className="text-neutral-500">
            Comprehensive, end-to-end support from university selection to
            post-arrival assistance. Our proven track record and expert guidance
            ensure your success every step of the way.
          </p>

          <div className="flex gap-4">
            <button className="flex gap-2 p-2 bg-[#e9a227] text-white rounded-md">
              <p>Book Free Consultation</p>
              <ArrowRight />
            </button>
            <button className="p-2 border border-neutral-300 bg-white rounded-md">
              <Link to={"/"}>Back to Home</Link>
            </button>
          </div>
        </div>
        <div className="py-10 grid grid-cols-4 gap-8">
          {data.map((d) => (
            <div
              key={d.id}
              className="border border-neutral-300 rounded-lg p-4 flex flex-col items-center gap-2 bg-white"
            >
              <div>{d.icon}</div>
              <div className="text-3xl font-semibold">{d.count}</div>
              <div className="text-neutral-500">{d.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeadServices;
