import { ArrowRight, Scale, Star } from "lucide-react";

const data = [
  {
    id: 1,
    categories: "Top Choice",
    image: "/unitedstates.jpg",
    country: "United States",
    rating: "4.8",
    university: "200+",
    course: "Technology, Medicine, MBA",
  },
  {
    id: 1,
    categories: "Popular",
    image: "/unitedkingdom.jpg",
    country: "United Kingdom",
    rating: "4.9",
    university: "120+",
    course: "Business, Engineering, Arts",
  },
  {
    id: 1,
    categories: "Affordable",
    image: "/canada.jpg",
    country: "Canada",
    rating: "4.7",
    university: "95+",
    course: "Sciences, IT, Healthcare",
  },
];

function Destinations() {
  return (
    <div className="py-10 border-r-2 border-t-2 border-l-2 rounded-4xl border-[#e9a227] lg:p-14 space-y-8">
      <div className="flex flex-col items-center w-150 mx-auto text-center p-4 space-y-2">
        <div className="px-2 rounded-full bg-[#e9a227]/10 text-[#e9a227]">
          Top Destinations
        </div>
        <h2 className="text-3xl font-semibold">
          Discover Your Dream Destination
        </h2>
        <p className="text-neutral-500">
          Explore world-class education opportunities across the globe with our
          carefully selected partner institutions.
        </p>
      </div>

      {/* card  */}
      <div className="grid grid-cols-3 gap-8">
        {data.map((d) => (
          <div
            key={d.id}
            className={`relative h-100 border border-neutral-300 rounded-2xl bg-cover bg-center shadow-lg hover:border-[#e9a227]`}
            style={{ backgroundImage: `url(${d.image})` }}
          >
            <div className="absolute right-3 top-2 bg-[#e9a227] text-xs text-white px-3 rounded-full">
              {d.categories}
            </div>
            <div className="absolute h-1/2 flex flex-col justify-center bottom-0 left-0 w-full p-4 rounded-b-2xl space-y-2 bg-white">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold">{d.country}</h3>
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#e9a227" />
                  <p>{d.rating}</p>
                </div>
              </div>
              <p className="text-neutral-500">{d.university} Universities</p>
              <p className="text-neutral-500">{d.course}</p>
              <button className="border w-full p-1 flex gap-2 items-center justify-center border-[#e9a227]/50 rounded-md hover:bg-[#e9a227]">
                Learn more <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="py-4">
        <h4 className="text-xl text-[#e9a227] font-semibold text-center underline text-shadow-2xs">
          Other Countries
        </h4>
      </div>

      <div className=" flex justify-center gap-8">
        <button className="border border-[#e9a227] rounded-md p-2">
          Country and Flag
        </button>
        <button className="border border-[#e9a227] rounded-md p-2">
          Country and Flag
        </button>
        <button className="border border-[#e9a227] rounded-md p-2">
          Country and Flag
        </button>
        <button className="border border-[#e9a227] rounded-md p-2">
          Country and Flag
        </button>
        <button className="border border-[#e9a227] rounded-md p-2">
          Country and Flag
        </button>
        <button className="border border-[#e9a227] rounded-md p-2">
          Country and Flag
        </button>
      </div>
    </div>
  );
}

export default Destinations;
