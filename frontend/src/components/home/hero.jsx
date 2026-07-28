import { ArrowRight } from "lucide-react";

const rating = [
  { id: 1, name: "Partner Universities", value: "50+" },
  { id: 2, name: "Students Placed", value: "10K+" },
  { id: 3, name: "Countries Worldwide", value: "25+" },
];

function Hero() {
  return (
    <div className="bg-[url('/hero.jpg')] bg-cover bg-center">
      <div className="bg-black/80 py-10 h-175">
        <div className="md:max-w-160 mx-auto w-full space-y-8">
          <div className="flex p-1 bg-[#ffffff] items-center text-black gap-2 justify-center w-90 rounded-full shadow">
            <div className="h-2 w-2 rounded-full bg-[#e9a227]"></div>
            <p>Your Journey to Global Education Starts Here</p>
          </div>
          <h1 className="text-6xl font-bold leading-20 text-white">
            Explore, Learn, and <br />
            <span className="text-[#e9a227]">Transform Your Future</span>
          </h1>
          <p className="text-lg text-neutral-300">
            Expert guidance for study abroad programs, educational tours, and
            life-changing travel experiences. Let us help you discover the world
            while building your future.
          </p>

          <div className="space-x-4 flex font-semibold">
            <button className="bg-[#e9a227] p-2 px-3 rounded-md flex items-center gap-2 shadow">
              <p>Apply Now</p>
              <ArrowRight size={18} />
            </button>
            <button className="bg-[#ffff] p-1 px-3 rounded-md flex items-center gap-2 shadow">
              <ArrowRight size={18} />
              <p>Free Consultation</p>
            </button>
          </div>

          <div className="flex justify-between mt-20 text-[#e9a227]">
            {rating.map((rate) => (
              <div key={rate.id}>
                <p className="text-3xl">{rate.value}</p>
                <p className="text-neutral-300">{rate.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
