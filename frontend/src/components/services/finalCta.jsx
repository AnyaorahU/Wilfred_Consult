import { ArrowRight } from "lucide-react";
import Title from "../title";

function FinalCta() {
  return (
    <div className="md:py-20 md:space-y-10 flex flex-col items-center">
      <Title
        text1={"Ready to Start Your Journey?"}
        subtext={
          "Book a free consultation today and take the first step towards your international education dreams."
        }
      />
      <button className="hover:shadow-lg p-2 px-6 bg-[#e9a227] text-white font-semibold flex gap-2 rounded-lg">
        Schedule Free Consultation
        <ArrowRight />
      </button>
    </div>
  );
}

export default FinalCta;
