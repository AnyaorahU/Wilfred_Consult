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
  { id: 1, name: "Countries", icon: <Globe color="#F15A22" />, count: "25+" },
  {
    id: 2,
    name: "Universities",
    icon: <GraduationCap color="#F15A22" />,
    count: "50+",
  },
  {
    id: 3,
    name: "Success Rate",
    icon: <Award color="#F15A22" />,
    count: "98.7%",
  },
  {
    id: 4,
    name: "Students Placed",
    icon: <TrendingUp color="#F15A22" />,
    count: "10K+",
  },
];

function HeadServices() {
  return (
    <div className="lg:py-30">
      <div className="w-full max-w-300 mx-auto px-4 space-y-8">
        <div className="w-full max-w-200 space-y-4">
          <div className="inline-flex w-fit items-center gap-2 px-3 py-1 rounded-full bg-[#F15A22]/10 text-[#F15A22] text-sm font-semibold">
            <Star size={16} />
            <p>Award-Winning Services</p>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold">
            Premium Services for Your <br />
            <span className="text-[#F15A22]">International Education</span>
          </h1>
          <p className="text-neutral-500 dark:text-neutral-400">
            Comprehensive, end-to-end support from university selection to
            post-arrival assistance. Our proven track record and expert guidance
            ensure your success every step of the way.
          </p>

          <div className="flex gap-4">
            <Link
              to="/contact#book-consultation"
              className="group flex gap-2 items-center p-2 px-4 bg-[#F15A22] hover:bg-[#C9410F] hover:-translate-y-0.5 text-white rounded-md"
            >
              <p>Book Free Consultation</p>
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
            <button className="p-2 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 rounded-md">
              <Link to={"/"}>Back to Home</Link>
            </button>
          </div>
        </div>
        <div className="py-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((d) => (
            <div
              key={d.id}
              className="lift border border-neutral-300 dark:border-neutral-700 rounded-lg p-4 flex flex-col items-center gap-2 bg-white dark:bg-neutral-900"
            >
              <div>{d.icon}</div>
              <div className="text-3xl font-semibold">{d.count}</div>
              <div className="text-neutral-500 dark:text-neutral-400">{d.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeadServices;
