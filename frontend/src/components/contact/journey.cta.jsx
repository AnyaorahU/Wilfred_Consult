import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function JourneyCTA() {
  return (
    <div className="w-full py-20 px-4 bg-[#F15A22]/10">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center space-y-6">
        <h2 className="text-4xl lg:text-5xl font-bold">
          Your Journey Starts with{" "}
          <span className="text-[#F15A22]">One Message</span>
        </h2>
        <p className="text-lg text-neutral-500 dark:text-neutral-400">
          Thousands of students started exactly where you are. They reached out —
          and everything changed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#book-consultation"
            className="group flex items-center justify-center gap-2 py-3 px-6 bg-[#F15A22] text-white font-semibold rounded-2xl hover:bg-[#C9410F] hover:-translate-y-0.5 cursor-pointer"
          >
            Book Free Consultation{" "}
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <button className="py-3 px-6 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 font-semibold rounded-2xl hover:border-[#F15A22] cursor-pointer">
            <Link to={"/destinations"}>Explore Destinations</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
