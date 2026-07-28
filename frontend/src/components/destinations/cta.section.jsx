import { MoveRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export function DestinationCTA() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 bg-[#F15A22]/5 space-y-8">
      <div className="p-4 rounded-2xl bg-[#F15A22]/50">
        <Shield size={60} />
      </div>
      <h3 className="font-bold text-3xl lg:text-5xl text-center px-4">
        Begin Your Global Education Journey
      </h3>
      <p className="text-lg text-neutral-500 dark:text-neutral-400 text-center">
        Connect with our expert counselors for a personalized consultation
        tailored <br /> to your academic profile and career aspirations.
      </p>
      <Link
        to="/contact#book-consultation"
        className="flex gap-2 items-center text-lg border border-transparent py-3 px-6 rounded-2xl bg-[#F15A22] hover:bg-[#C9410F] hover:-translate-y-0.5 text-white cursor-pointer"
      >
        Book Your Free Consultation <MoveRight />
      </Link>
    </div>
  );
}
