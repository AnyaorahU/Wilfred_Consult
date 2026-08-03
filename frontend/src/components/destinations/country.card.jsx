import { ArrowRight, Bitcoin, Building2, CircleCheck, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

export function CountryCard({ destination }) {
  const {
    slug,
    name,
    flag,
    image,
    badge,
    rank,
    stats,
    highlights,
  } = destination;

  return (
    <Link
      to={`/destinations/${slug}`}
      className="lift group flex flex-col border border-neutral-200 dark:border-neutral-800 rounded-2xl hover:border-[#F15A22]/40"
    >
      {/* image part  */}
      <div className="relative h-70 overflow-hidden rounded-tl-2xl rounded-tr-2xl">
        {image ? (
          <img
            src={image}
            alt={name}
            className="object-cover h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full grid place-items-center bg-linear-to-br from-[#F15A22]/30 to-[#F15A22]/5">
            <span className="text-8xl transition-transform duration-500 group-hover:scale-110">
              {flag}
            </span>
          </div>
        )}

        <div className="absolute inset-0 bg-black/40 rounded-tl-2xl rounded-tr-2xl">
          {badge && (
            <div className="absolute right-2 top-2 p-1 flex bg-[#F15A22] text-white text-sm font-semibold gap-2 items-center px-3 rounded-full">
              <Sparkles size={16} />
              {badge}
            </div>
          )}
          <div className="absolute bottom-3 w-full flex flex-col items-center text-white px-4 text-center">
            <p className="text-3xl font-semibold">
              {flag} {name}
            </p>
            <div className="flex gap-1 items-center text-xs">
              <Star size={16} color="#F15A22" fill="#F15A22" />
              {rank}
            </div>
          </div>
        </div>
      </div>

      {/* content side  */}
      <div className="p-4 space-y-4 flex flex-col flex-1">
        {/* top  */}
        <div className="flex justify-between gap-2">
          {/* left  */}
          <div>
            <div className="flex gap-2">
              <Building2 color="#F15A22" />
              <p>Partner Universities</p>
            </div>
            <p className="text-2xl font-semibold">{stats.partnerUniversities}</p>
          </div>
          {/* right  */}
          <div>
            <div className="flex gap-2">
              <Bitcoin color="#F15A22" />
              <p>Annual Tuition</p>
            </div>
            <p className="font-semibold text-sm">{stats.tuition}</p>
          </div>
        </div>

        <hr className="border-neutral-300 dark:border-neutral-700" />

        {/* content  */}
        <div className="flex-1">
          <h3 className="font-semibold">Why Choose {name}</h3>

          <ul className="space-y-2 mt-2">
            {highlights.slice(0, 4).map((point, index) => (
              <li key={index} className="flex gap-2 items-start">
                <CircleCheck
                  size={18}
                  color="#F15A22"
                  className="shrink-0 mt-1"
                />
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{point}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full p-2 flex items-center justify-center gap-2 rounded-2xl bg-[#F15A22] text-white font-semibold">
          View Full Details{" "}
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
