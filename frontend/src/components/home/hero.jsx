import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ApplyModal from "../apply.modal";

const rating = [
  { id: 1, name: "Partner Universities", value: "50+" },
  { id: 2, name: "Students Placed", value: "10K+" },
  { id: 3, name: "Countries Worldwide", value: "25+" },
];

function Hero() {
  const [showApply, setShowApply] = useState(false);

  return (
    <div className="bg-[url('/hero.jpg')] bg-cover bg-center">
      <div className="bg-black/80 py-10 min-h-175 flex items-center">
        <div className="md:max-w-160 mx-auto w-full px-4 space-y-8">
          <div className="animate-fade-up flex p-1 bg-[#ffffff] items-center text-black dark:text-white gap-2 justify-center w-fit px-3 rounded-full shadow">
            <div className="h-2 w-2 rounded-full bg-[#F15A22] shrink-0 animate-float"></div>
            <p>Your Journey to Global Education Starts Here</p>
          </div>
          <h1
            className="animate-fade-up text-4xl md:text-6xl font-bold md:leading-20 text-white"
            style={{ animationDelay: "0.1s" }}
          >
            Explore, Learn, and <br />
            <span className="text-[#F15A22]">Transform Your Future</span>
          </h1>
          <p
            className="animate-fade-up text-lg text-neutral-300"
            style={{ animationDelay: "0.2s" }}
          >
            Expert guidance for study abroad programs, educational tours, and
            life-changing travel experiences. Let us help you discover the world
            while building your future.
          </p>

          <div
            className="animate-fade-up space-x-4 flex font-semibold"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              onClick={() => setShowApply(true)}
              className="bg-[#F15A22] p-2 px-3 rounded-md flex items-center gap-2 shadow hover:bg-[#C9410F] hover:-translate-y-0.5"
            >
              <p className="text-white">Apply Now</p>
              <ArrowRight size={18} color="#ffff" />
            </button>
            <Link
              to="/contact#book-consultation"
              className="bg-white dark:bg-neutral-900 text-black dark:text-white p-2 px-3 rounded-md flex items-center gap-2 shadow hover:-translate-y-0.5"
            >
              <ArrowRight size={18} />
              <p>Free Consultation</p>
            </Link>
          </div>

          <div className="flex justify-between mt-20 text-[#F15A22]">
            {rating.map((rate) => (
              <div key={rate.id}>
                <p className="text-3xl">{rate.value}</p>
                <p className="text-neutral-300">{rate.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ApplyModal open={showApply} onClose={() => setShowApply(false)} />
    </div>
  );
}

export default Hero;
