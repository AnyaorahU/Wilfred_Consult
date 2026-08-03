import { ArrowRight, Globe, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { destinations } from "../../data/destinations";
import Eyebrow from "../eyebrow";

const data = [
  {
    id: 1,
    slug: "united-states",
    categories: "Top Choice",
    image: "/unitedstates.jpg",
    country: "United States",
    rating: "4.8",
    university: "200+",
    course: "Technology, Medicine, MBA",
  },
  {
    id: 2,
    slug: "united-kingdom",
    categories: "Popular",
    image: "/unitedkingdom.jpg",
    country: "United Kingdom",
    rating: "4.9",
    university: "120+",
    course: "Business, Engineering, Arts",
  },
  {
    id: 3,
    slug: "canada",
    categories: "Affordable",
    image: "/canada.jpg",
    country: "Canada",
    rating: "4.7",
    university: "95+",
    course: "Sciences, IT, Healthcare",
  },
];

// Countries shown as the 3 featured cards above — excluded from "Other Countries".
const featuredSlugs = data.map((d) => d.slug);
const otherCountries = destinations.filter(
  (d) => !featuredSlugs.includes(d.slug),
);

function Destinations() {
  return (
    <div className="py-10 px-4 border-r-2 border-t-2 border-l-2 rounded-4xl border-[#F15A22] lg:p-14 space-y-8">
      <div className="flex flex-col items-center w-full max-w-150 mx-auto text-center p-4 space-y-2">
        <Eyebrow icon={<Globe size={14} />}>Top Destinations</Eyebrow>
        <h2 className="text-3xl font-semibold">
          Discover Your Dream Destination
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400">
          Explore world-class education opportunities across the globe with our
          carefully selected partner institutions.
        </p>
      </div>

      {/* card  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((d) => (
          <div
            key={d.id}
            className={`lift relative h-100 border border-neutral-300 dark:border-neutral-700 rounded-2xl bg-cover bg-center shadow-lg hover:border-[#F15A22]`}
            style={{ backgroundImage: `url(${d.image})` }}
          >
            <div className="absolute right-3 top-2 bg-[#F15A22] text-xs text-white px-3 rounded-full">
              {d.categories}
            </div>
            <div className="absolute h-1/2 flex flex-col justify-center bottom-0 left-0 w-full p-4 rounded-b-2xl space-y-2 bg-white dark:bg-neutral-900">
              <div className="flex justify-between">
                <h3 className="text-2xl font-semibold">{d.country}</h3>
                <div className="flex gap-2 items-center">
                  <Star size={18} color="#F15A22" />
                  <p>{d.rating}</p>
                </div>
              </div>
              <p className="text-neutral-500 dark:text-neutral-400">{d.university} Universities</p>
              <p className="text-neutral-500 dark:text-neutral-400">{d.course}</p>
              <Link
                to={`/destinations/${d.slug}`}
                className="border w-full p-1 flex gap-2 items-center justify-center border-[#F15A22]/50 rounded-md hover:bg-[#F15A22] hover:text-white"
              >
                Learn more <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center space-y-1 pt-4">
        <h4 className="text-2xl font-bold">
          Explore More <span className="text-[#F15A22]">Countries</span>
        </h4>
        <p className="text-neutral-500 dark:text-neutral-400">
          More world-class study destinations to discover
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
        {otherCountries.map((d) => (
          <Link
            key={d.slug}
            to={`/destinations/${d.slug}`}
            className="group flex items-center gap-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 rounded-full pl-2 pr-5 py-2 shadow-sm hover:shadow-md hover:border-[#F15A22]/50 hover:-translate-y-0.5 transition-all"
          >
            <span className="grid place-items-center h-9 w-9 rounded-full bg-[#F15A22]/10 text-xl">
              {d.flag}
            </span>
            <span className="font-semibold">{d.name}</span>
            <ArrowRight
              size={16}
              className="text-[#F15A22] w-0 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Destinations;
