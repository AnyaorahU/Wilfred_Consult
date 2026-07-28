import { GraduationCap, MoveRight } from "lucide-react";

export function AboutCTA() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 bg-[#e9a227]/5 space-y-8">
      <div className="p-4 rounded-2xl bg-[#e9a227]/50">
        <GraduationCap size={60} />
      </div>
      <h3 className="font-bold text-5xl">Transform Your Future Today</h3>
      <p className="text-lg text-neutral-500 text-center">
        Join 10,000+ students who have trusted EduVoyage to turn their
        international <br /> education dreams into reality. Your journey to
        global success starts here.
      </p>
      <div className="flex gap-4">
        <button className="flex gap-2 items-center text-lg py-3 px-6 rounded-2xl bg-[#e9a227] text-white cursor-pointer">
          Book Free Consultation <MoveRight />
        </button>
        <button className="text-lg py-3 px-6 rounded-2xl bg-white cursor-pointer">
          Explore Our Services
        </button>
      </div>
    </div>
  );
}
