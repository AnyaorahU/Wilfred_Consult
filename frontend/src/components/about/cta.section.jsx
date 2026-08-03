import { GraduationCap, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export function AboutCTA() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 bg-[#F15A22]/5 space-y-8">
      <div className="p-4 rounded-2xl bg-[#F15A22]/50">
        <GraduationCap size={60} />
      </div>
      <h3 className="font-bold text-3xl lg:text-5xl text-center px-4">
        Transform Your Future Today
      </h3>
      <p className="text-lg text-neutral-500 dark:text-neutral-400 text-center">
        Join 10,000+ students who have trusted Wilfred Consult to turn their
        international <br /> education dreams into reality. Your journey to
        global success starts here.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/contact#book-consultation"
          className="group flex gap-2 items-center text-lg py-3 px-6 rounded-2xl bg-[#F15A22] hover:bg-[#C9410F] hover:-translate-y-0.5 text-white cursor-pointer"
        >
          Book Free Consultation{" "}
          <MoveRight className="transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          to="/services"
          className="text-lg py-3 px-6 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#F15A22] cursor-pointer"
        >
          Explore Our Services
        </Link>
      </div>
    </div>
  );
}
