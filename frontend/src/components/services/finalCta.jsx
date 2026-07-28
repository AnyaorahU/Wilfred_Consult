import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
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
      <Link
        to="/contact#book-consultation"
        className="hover:shadow-lg hover:-translate-y-0.5 p-2 px-6 bg-[#F15A22] hover:bg-[#C9410F] text-white font-semibold flex gap-2 rounded-lg"
      >
        Schedule Free Consultation
        <ArrowRight />
      </Link>
    </div>
  );
}

export default FinalCta;
