import { Building2, Globe, MapPin, Plane } from "lucide-react";
import { destinations } from "../../data/destinations";

const regionIcons = {
  "All Destinations": <Globe size={18} />,
  "North America": <MapPin size={18} />,
  Europe: <Building2 size={18} />,
  "Asia-Pacific": <Plane size={18} />,
};

const regions = ["North America", "Europe", "Asia-Pacific"];

// Counts are derived from the data, so they stay correct as destinations change.
const categories = [
  { name: "All Destinations", value: "all", count: destinations.length },
  ...regions.map((region) => ({
    name: region,
    value: region,
    count: destinations.filter((d) => d.region === region).length,
  })),
];

function Categories({ active, onChange }) {
  return (
    <div className="mx-auto w-full flex flex-wrap gap-3 lg:gap-4 justify-center py-10 px-4 bg-neutral-50 dark:bg-neutral-800">
      {categories.map((item) => {
        const isActive = active === item.value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            aria-pressed={isActive}
            className={`flex gap-3 items-center py-2.5 px-4 rounded-xl border font-semibold transition-colors ${
              isActive
                ? "bg-[#F15A22] text-white border-[#F15A22] shadow-lg"
                : "bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-700 hover:border-[#F15A22]"
            }`}
          >
            {regionIcons[item.name]}
            <span>{item.name}</span>
            <span
              className={`grid place-items-center min-w-6 h-6 px-1.5 text-sm rounded-full ${
                isActive
                  ? "bg-white/25 text-white"
                  : "bg-[#F15A22]/10 text-[#F15A22]"
              }`}
            >
              {item.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default Categories;
