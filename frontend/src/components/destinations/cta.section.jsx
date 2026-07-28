import { MoveRight, Shield } from "lucide-react";

export function DestinationCTA() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-20 bg-[#e9a227]/5 space-y-8">
      <div className="p-4 rounded-2xl bg-[#e9a227]/50">
        <Shield size={60} />
      </div>
      <h3 className="font-bold text-5xl">
        Begin Your Global Education Journey
      </h3>
      <p className="text-lg text-neutral-500 text-center">
        Connect with our expert counselors for a personalized consultation
        tailored <br /> to your academic profile and career aspirations.
      </p>
      <button className="flex gap-2 items-center text-lg border py-3 px-6 rounded-2xl bg-[#e9a227] text-white cursor-pointer">
        Book Your Free Consultation <MoveRight />
      </button>
    </div>
  );
}
